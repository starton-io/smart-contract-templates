// SPDX-License-Identifier: MIT

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

/// @title StartonERC721Blacklist
/// @author Starton
/// @notice This implements a ERC721 token that can be blacklisted, paused, locked, burned and have a access management
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

    /** @notice Event when the minting is locked */
    event MintingLocked(address indexed account);

    /** @dev Modifier that reverts when the minting is locked */
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
        // Set all default roles for ownerOrMultiSigContract
        _setupRole(DEFAULT_ADMIN_ROLE, ownerOrMultiSigContract);
        _setupRole(PAUSER_ROLE, ownerOrMultiSigContract);
        _setupRole(MINTER_ROLE, ownerOrMultiSigContract);
        _setupRole(METADATA_ROLE, ownerOrMultiSigContract);
        _setupRole(LOCKER_ROLE, ownerOrMultiSigContract);
        _setupRole(BLACKLISTER_ROLE, ownerOrMultiSigContract);

        _uri = baseURI;
        _contractURI = contractURI_;
        _isMintAllowed = true;

        // Intialize the EIP712 so we can perform metatransactions
        _initializeEIP712(name);
    }

    /**
     * @notice Set the URI of the contract
     * only accessible by the addresses that own the metadata role
     * @param newContractURI The new URI of the contract
     */
    function setContractURI(string memory newContractURI)
        public
        onlyRole(METADATA_ROLE)
    {
        _contractURI = newContractURI;
    }

    /**
     * @notice Set the base URI of the token
     * only accessible by the addresses that own the metadata role
     * @param newBaseURI The new base URI of the token
     */
    function setBaseURI(string memory newBaseURI)
        public
        onlyRole(METADATA_ROLE)
    {
        _uri = newBaseURI;
    }

    /**
     * @notice Mint a new token to the given address and set the token metadata while minting is not locked
     * only accessible by the addresses that own the metadata role
     * @param to The address that will receive the token
     * @param uri The URI of the token metadata
     */
    function safeMint(address to, string memory uri)
        public
        notLocked
        onlyRole(MINTER_ROLE)
    {
        _safeMint(to, _tokenIdCounter.current());
        _setTokenURI(_tokenIdCounter.current(), uri);
        _tokenIdCounter.increment();
    }

    /**
     * @notice Pause the contract which stop any changes regarding the ERC721 and minting
     * only accessible by the addresses that own the pauser role
     */
    function pause() public onlyRole(PAUSER_ROLE) {
        _pause();
    }

    /**
     * @notice Unpause the contract which allow back any changes regarding the ERC721 and minting
     * only accessible by the addresses that own the pauser role
     */
    function unpause() public onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    /**
     * @notice Lock the mint and won't allow any minting anymore
     * only accessible by the addresses that own the locker role
     */
    function lockMint() public onlyRole(LOCKER_ROLE) {
        _isMintAllowed = false;
        emit MintingLocked(_msgSender());
    }

    /**
     * @notice Returns the metadata of the contract
     * @return string : Contract URI of the token
     */
    function contractURI() public view returns (string memory) {
        return _contractURI;
    }

    /**
     * @notice Returns the metadata of token with the given token id
     * @param tokenId The token id of the token
     * @return string : Contract URI of the token
     */
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    /**
     * @dev Call the inherited contract supportsInterface function to know the interfaces as EIP165 says
     * @return bool : True if the interface is supported
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, AccessControl, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    /**
     * @notice Stop approval of token if the contract is paused or the sender is blacklisted
     * @param owner The owner of the token
     * @param operator The operator of the token
     * @param approved Approve or not the approval of the token
     */
    function _setApprovalForAll(
        address owner,
        address operator,
        bool approved
    ) internal override whenNotPaused notBlacklisted(operator) {
        super._setApprovalForAll(owner, operator, approved);
    }

    /**
     * @notice Stop transfer if the contract is paused or the sender is blacklisted
     * @param from The address that will send the token
     * @param to The address that will receive the token
     * @param tokenId The ID of the token to be transferred
     */
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

    /**
     * @notice Burn a token
     * @dev Fix the inheritence problem for the _burn between ERC721 and erc721URIStorage
     * @param tokenId Id of the token that will be burnt
     */
    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    /**
     * @notice Returns the first part of the uri being used for the token metadata
     * @return string : Base URI of the token
     */
    function _baseURI() internal view override returns (string memory) {
        return _uri;
    }

    /**
     * @dev Specify the _msgSender in case the forwarder calls a function to the real sender
     * @return address : The sender of the message
     */
    function _msgSender()
        internal
        view
        virtual
        override(Context, ContextMixin)
        returns (address)
    {
        return ContextMixin._msgSender();
    }
}
