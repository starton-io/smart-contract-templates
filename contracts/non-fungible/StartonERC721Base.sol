// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import "operator-filter-registry/src/DefaultOperatorFilterer.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "../abstracts/AStartonNativeMetaTransaction.sol";
import "../abstracts/AStartonContextMixin.sol";
import "../abstracts/AStartonAccessControl.sol";
import "../abstracts/AStartonPausable.sol";
import "../abstracts/AStartonMintLock.sol";
import "../abstracts/AStartonMetadataLock.sol";

/// @title StartonERC721Base
/// @author Starton
/// @notice ERC721 tokens that can be blacklisted, paused, locked, burned, have a access management and handle meta transactions
contract StartonERC721Base is
    ERC721Enumerable,
    ERC721URIStorage,
    ERC721Burnable,
    AStartonPausable,
    AStartonAccessControl,
    AStartonContextMixin,
    AStartonNativeMetaTransaction,
    AStartonMintLock,
    AStartonMetadataLock,
    DefaultOperatorFilterer,
    ERC2981
{
    using Counters for Counters.Counter;

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant METADATA_ROLE = keccak256("METADATA_ROLE");

    Counters.Counter internal _tokenIdCounter;

    string private _baseTokenURI;
    string private _contractURI;

    constructor(
        string memory definitiveName,
        string memory definitiveSymbol,
        uint96 definitiveRoyaltyFee,
        address definitiveFeeReceiver,
        string memory initialBaseTokenURI,
        string memory initialContractURI,
        address initialOwnerOrMultiSigContract
    ) ERC721(definitiveName, definitiveSymbol) {
        // Set all default roles for initialOwnerOrMultiSigContract
        _setupRole(DEFAULT_ADMIN_ROLE, initialOwnerOrMultiSigContract);
        _setupRole(PAUSER_ROLE, initialOwnerOrMultiSigContract);
        _setupRole(MINTER_ROLE, initialOwnerOrMultiSigContract);
        _setupRole(METADATA_ROLE, initialOwnerOrMultiSigContract);
        _setupRole(LOCKER_ROLE, initialOwnerOrMultiSigContract);

        _baseTokenURI = initialBaseTokenURI;
        _contractURI = initialContractURI;
        _isMintAllowed = true;
        _isMetadataChangingAllowed = true;

        // Set the default royalty fee and receiver
        _setDefaultRoyalty(definitiveFeeReceiver, definitiveRoyaltyFee);

        // Intialize the EIP712 so we can perform metatransactions
        _initializeEIP712(definitiveName);
    }

    /**
     * @notice Mint a new token to the given address and set the token metadata while minting is not locked
     * @param to The address that will receive the token
     * @param uri The URI of the token metadata
     * @custom:requires MINTER_ROLE
     */
    function mint(address to, string memory uri) public virtual whenNotPaused mintingNotLocked onlyRole(MINTER_ROLE) {
        _mint(to, _tokenIdCounter.current());
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
        virtual
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
        virtual
        whenNotPaused
        metadataNotLocked
        onlyRole(METADATA_ROLE)
    {
        _baseTokenURI = newBaseTokenURI;
    }

    /**
     * @notice Returns the metadata of the contract
     * @return Contract URI of the token
     */
    function contractURI() public view virtual returns (string memory) {
        return _contractURI;
    }

    /**
     * @notice Returns the metadata of token with the given token id
     * @param tokenId The token id of the token
     * @return Contract URI of the token
     */
    function tokenURI(uint256 tokenId) public view virtual override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    /**
     * @dev Call the inherited contract supportsInterface function to know the interfaces as EIP165 says
     * @return True if the interface is supported
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC721, AccessControl, ERC721Enumerable, ERC2981)
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
    ) internal virtual override whenNotPaused onlyAllowedOperatorApproval(operator) {
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
        uint256 tokenId,
        uint256 batchSize
    ) internal virtual override(ERC721, ERC721Enumerable) whenNotPaused {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    /**
     * @dev Fix the inheritence problem for the _burn between ERC721 and ERC721URIStorage
     * @param tokenId Id of the token that will be burnt
     */
    function _burn(uint256 tokenId) internal virtual override(ERC721, ERC721URIStorage) {
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
    function _msgSender() internal view virtual override(Context, AStartonContextMixin) returns (address) {
        return super._msgSender();
    }

    function approve(address operator, uint256 tokenId)
        public
        override(IERC721, ERC721)
        onlyAllowedOperatorApproval(operator)
    {
        super.approve(operator, tokenId);
    }

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override(IERC721, ERC721) onlyAllowedOperator(from) {
        super.transferFrom(from, to, tokenId);
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override(IERC721, ERC721) onlyAllowedOperator(from) {
        super.safeTransferFrom(from, to, tokenId);
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory data
    ) public override(IERC721, ERC721) onlyAllowedOperator(from) {
        super.safeTransferFrom(from, to, tokenId, data);
    }
}
