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
 * @dev This implements a ERC721 token that can be blacklisted, paused, locked, burned and have a access management.
 * On top of that it supports meta transactions with built in forwarder.
 */
contract StartonERC721Blacklist is
    ERC721Enumerable,
    ERC721URIStorage,
    ERC721Burnable,
    Pausable,
    AccessControl,
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
    string private _contractURI;

    bool private _isMintAllowed;

    event MintingLocked(address indexed account);

    modifier notLocked() {
        require(_isMintAllowed, "Minting is locked");
        _;
    }

    constructor(
        string memory name,
        string memory symbol,
        string memory baseURI,
        string memory contractURI_,
        address ownerOrMultiSigContract
    ) ERC721(name, symbol) {
        _setupRole(DEFAULT_ADMIN_ROLE, ownerOrMultiSigContract);
        _setupRole(PAUSER_ROLE, ownerOrMultiSigContract);
        _setupRole(MINTER_ROLE, ownerOrMultiSigContract);
        _setupRole(METADATA_ROLE, ownerOrMultiSigContract);
        _setupRole(LOCKER_ROLE, ownerOrMultiSigContract);
        _setupRole(BLACKLISTER_ROLE, ownerOrMultiSigContract);

        _uri = baseURI;
        _contractURI = contractURI_;
        _isMintAllowed = true;
        _initializeEIP712(name);
    }

    function setContractURI(string memory newContractURI)
        public
        onlyRole(METADATA_ROLE)
    {
        _contractURI = newContractURI;
    }

    function setBaseURI(string memory newBaseURI)
        public
        onlyRole(METADATA_ROLE)
    {
        _uri = newBaseURI;
    }

    function safeMint(address to, string memory uri)
        public
        notLocked
        onlyRole(MINTER_ROLE)
    {
        _safeMint(to, _tokenIdCounter.current());
        _setTokenURI(_tokenIdCounter.current(), uri);
        _tokenIdCounter.increment();
    }

    function pause() public onlyRole(PAUSER_ROLE) {
        _pause();
    }

    function unpause() public onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    function lockMint() public onlyRole(LOCKER_ROLE) {
        emit MintingLocked(_msgSender());
        _isMintAllowed = false;
    }

    function contractURI() public view returns (string memory) {
        return _contractURI;
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
        override(ERC721, AccessControl, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
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
        override(Context, ContextMixin)
        returns (address sender)
    {
        return ContextMixin._msgSender();
    }
}
