// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./utils/StartonNativeMetaTransaction.sol";
import "./utils/AStartonContextMixin.sol";
import "./utils/StartonBlacklist.sol";
import "./utils/AStartonAccessControl.sol";

/// @title StartonERC721CappedMetaTransaction
/// @author Starton
/// @notice ERC721 tokens that can be blacklisted, paused, locked, burned, have a access management, max number of tokens and handle meta transactions
contract StartonERC721CappedMetaTransaction is
    ERC721Enumerable,
    ERC721URIStorage,
    ERC721Burnable,
    Pausable,
    AStartonAccessControl,
    StartonBlacklist,
    AStartonContextMixin,
    StartonNativeMetaTransaction
{
    using Counters for Counters.Counter;

    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant LOCKER_ROLE = keccak256("LOCKER_ROLE");
    bytes32 public constant METADATA_ROLE = keccak256("METADATA_ROLE");

    uint256 public immutable maxSupply;

    Counters.Counter private _tokenIdCounter;

    string private _baseTokenURI;
    string private _contractURI;

    bool private _isMintAllowed;
    bool private _isMetatadataChangingAllowed;

    /** @notice Event emitted when the minting is locked */
    event MintingLocked(address indexed account);

    /** @notice Event emitted when the metadata are locked */
    event MetadataLocked(address indexed account);

    /** @dev Modifier that reverts when the minting is locked */
    modifier mintingNotLocked() {
        require(_isMintAllowed, "Minting is locked");
        _;
    }

    /** @dev Modifier that reverts when the metadatas are locked */
    modifier metadataNotLocked() {
        require(_isMintAllowed, "Metadatas are locked");
        _;
    }

    constructor(
        string memory definitiveName,
        string memory definitiveSymbol,
        uint256 definitiveMaxSupply,
        string memory initialBaseTokenURI,
        string memory initialContractURI,
        address initialOwnerOrMultiSigContract
    ) ERC721(definitiveName, definitiveSymbol) {
        require(definitiveMaxSupply > 0, "maxSupply must be greater than 0");

        // Set all default roles for initialOwnerOrMultiSigContract
        _setupRole(DEFAULT_ADMIN_ROLE, initialOwnerOrMultiSigContract);
        _setupRole(PAUSER_ROLE, initialOwnerOrMultiSigContract);
        _setupRole(MINTER_ROLE, initialOwnerOrMultiSigContract);
        _setupRole(METADATA_ROLE, initialOwnerOrMultiSigContract);
        _setupRole(LOCKER_ROLE, initialOwnerOrMultiSigContract);
        _setupRole(BLACKLISTER_ROLE, initialOwnerOrMultiSigContract);

        maxSupply = definitiveMaxSupply;
        _baseTokenURI = initialBaseTokenURI;
        _contractURI = initialContractURI;
        _isMintAllowed = true;
        _isMetatadataChangingAllowed = true;

        // Intialize the EIP712 so we can perform metatransactions
        _initializeEIP712(definitiveName);
    }

    /**
     * @notice Mint a new token to the given address and set the token metadata while minting is not locked
     * @param to The address that will receive the token
     * @param uri The URI of the token metadata
     * @custom:requires MINTER_ROLE
     */
    function mint(address to, string memory uri)
        public
        mintingNotLocked
        onlyRole(MINTER_ROLE)
    {
        require(_tokenIdCounter.current() < maxSupply, "Max supply reached");

        _safeMint(to, _tokenIdCounter.current());
        _setTokenURI(_tokenIdCounter.current(), uri);
        _tokenIdCounter.increment();
    }

    /**
     * @notice Set the URI of the contract if the metadata are not locked and the contract is not paused
     * @param newContractURI The new URI of the contract
     * @custom:requires METADATA_ROLE
     */
    function setContractURI(string memory newContractURI)
        public
        whenNotPaused
        metadataNotLocked
        onlyRole(METADATA_ROLE)
    {
        _contractURI = newContractURI;
    }

    /**
     * @notice Set the base URI of the token if the metadata are not locked and the contract is not paused
     * @param newBaseTokenURI The new base URI of the token
     * @custom:requires METADATA_ROLE
     */
    function setBaseTokenURI(string memory newBaseTokenURI)
        public
        whenNotPaused
        metadataNotLocked
        onlyRole(METADATA_ROLE)
    {
        _baseTokenURI = newBaseTokenURI;
    }

    /**
     * @notice Pause the contract which stop any changes regarding the ERC721 and minting
     * @custom:requires PAUSER_ROLE
     */
    function pause() public onlyRole(PAUSER_ROLE) {
        _pause();
    }

    /**
     * @notice Unpause the contract which allow back any changes regarding the ERC721 and minting
     * @custom:requires PAUSER_ROLE
     */
    function unpause() public onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    /**
     * @notice Lock the mint and won't allow any minting anymore if the contract is not paused
     * @custom:requires LOCKER_ROLE
     */
    function lockMint() public whenNotPaused onlyRole(LOCKER_ROLE) {
        _isMintAllowed = false;
        emit MintingLocked(_msgSender());
    }

    /**
     * @notice Lock the metadats and won't allow any changes anymore if the contract is not paused
     * @custom:requires LOCKER_ROLE
     */
    function lockMetadata() public whenNotPaused onlyRole(LOCKER_ROLE) {
        _isMetatadataChangingAllowed = false;
        emit MetadataLocked(_msgSender());
    }

    /**
     * @notice Returns the metadata of the contract
     * @return Contract URI of the token
     */
    function contractURI() public view returns (string memory) {
        return _contractURI;
    }

    /**
     * @notice Returns the metadata of token with the given token id
     * @param tokenId The token id of the token
     * @return Contract URI of the token
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
     * @return True if the interface is supported
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
     * @dev Stop approval of token if the contract is paused or the sender is blacklisted
     * @param owner The owner of the token
     * @param operator The operator of the token
     * @param approved Approve or not the approval of the token
     */
    function _setApprovalForAll(
        address owner,
        address operator,
        bool approved
    ) internal virtual override whenNotPaused notBlacklisted(operator) {
        super._setApprovalForAll(owner, operator, approved);
    }

    /**
     * @dev Stop transfer if the contract is paused or the sender is blacklisted
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
        virtual
        override(ERC721, ERC721Enumerable)
        whenNotPaused
        notBlacklisted(_msgSender())
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    /**
     * @dev Fix the inheritence problem for the _burn between ERC721 and ERC721URIStorage
     * @param tokenId Id of the token that will be burnt
     */
    function _burn(uint256 tokenId)
        internal
        virtual
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    /**
     * @notice Returns the first part of the uri being used for the token metadata
     * @return Base URI of the token
     */
    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    /**
     * @dev Specify the _msgSender in case the forwarder calls a function to the real sender
     * @return The sender of the message
     */
    function _msgSender()
        internal
        view
        virtual
        override(Context, AStartonContextMixin)
        returns (address)
    {
        return super._msgSender();
    }
}
