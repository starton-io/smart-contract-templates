// SPDX-License-Identifier: MIT
// StartonERC721Blacklist contract: version 0.0.1
// Creator: https://starton.io

pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./NativeMetaTransaction.sol";
import "./StartonBlacklist.sol";
import "./ContextMixin.sol";

/**
 * @dev This implements a ERC721 token that can be blacklisted, paused, locked and have a access management.
 * On top of that it supports meta transactions.
 */
contract StartonERC721Blacklist is
    ERC721Enumerable,
    ERC721URIStorage,
    Pausable,
    AccessControl,
    ERC721Burnable,
    StartonBlacklist,
    ContextMixin,
    NativeMetaTransaction
{
    using Counters for Counters.Counter;

    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant LOCKER_ROLE = keccak256("LOCKER_ROLE");
    bytes32 public constant METADATA_ROLE = keccak256("METADATA_ROLE");

    Counters.Counter private _tokenIdCounter;

    string private _uri;
    string private _contractUri;
    bool private _isMintAllowed;

    event LockMinting(address indexed account);

    constructor(
        string memory name,
        string memory symbol,
        string memory baseUri,
        string memory contractUri,
        address ownerOrMultiSigContract
    ) ERC721(name, symbol) {
        _setupRole(DEFAULT_ADMIN_ROLE, ownerOrMultiSigContract);
        _setupRole(PAUSER_ROLE, ownerOrMultiSigContract);
        _setupRole(MINTER_ROLE, ownerOrMultiSigContract);
        _setupRole(METADATA_ROLE, ownerOrMultiSigContract);
        _setupRole(LOCKER_ROLE, ownerOrMultiSigContract);
        _setupRole(BLACKLISTER_ROLE, ownerOrMultiSigContract);

        _uri = baseUri;
        _contractUri = contractUri;
        _isMintAllowed = true;
        _initializeEIP712(name);
    }

    function contractURI() public view returns (string memory) {
        return _contractUri;
    }

    function setContractURI(string memory newBaseContractUri)
        public
        onlyRole(METADATA_ROLE)
    {
        _contractUri = newBaseContractUri;
    }

    function setURI(string memory newUri) public onlyRole(METADATA_ROLE) {
        _uri = newUri;
    }

    function safeMint(address to, string memory metadataURI)
        public
        onlyRole(MINTER_ROLE)
    {
        require(_isMintAllowed, "Minting is locked");

        _safeMint(to, _tokenIdCounter.current());
        _setTokenURI(_tokenIdCounter.current(), metadataURI);
        _tokenIdCounter.increment();
    }

    function pause() public onlyRole(PAUSER_ROLE) {
        _pause();
    }

    function unpause() public onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    function lockMint() public onlyRole(LOCKER_ROLE) {
        emit LockMinting(_msgSender());
        _isMintAllowed = false;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721Enumerable, AccessControl, ERC721)
        returns (bool)
    {
        return
            AccessControl.supportsInterface(interfaceId) ||
            ERC721Enumerable.supportsInterface(interfaceId);
    }

    function _setApprovalForAll(
        address owner,
        address operator,
        bool approved
    ) internal override whenNotPaused notBlacklisted(operator) {
        super._setApprovalForAll(owner, operator, approved);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    )
        internal
        override(ERC721, ERC721Enumerable)
        whenNotPaused
        notBlacklisted(_msgSender())
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function _baseURI() internal view override returns (string memory) {
        return _uri;
    }

    function _msgSender()
        internal
        view
        virtual
        override(Context)
        returns (address sender)
    {
        return ContextMixin.msgSender();
    }
}
