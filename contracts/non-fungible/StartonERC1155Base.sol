// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "../abstracts/AStartonNativeMetaTransaction.sol";
import "../abstracts/AStartonContextMixin.sol";
import "../abstracts/AStartonAccessControl.sol";
import "../abstracts/AStartonBlacklist.sol";
import "../abstracts/AStartonPausable.sol";
import "../abstracts/AStartonMintLock.sol";
import "../abstracts/AStartonMetadataLock.sol";

/// @title StartonERC1155Base
/// @author Starton
/// @notice ERC1155 tokens that can be blacklisted, paused, locked, burned, have a access management and handle meta transactions
contract StartonERC1155Base is
    ERC1155Burnable,
    AStartonAccessControl,
    AStartonPausable,
    AStartonContextMixin,
    AStartonBlacklist,
    AStartonNativeMetaTransaction,
    AStartonMintLock,
    AStartonMetadataLock
{
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant METADATA_ROLE = keccak256("METADATA_ROLE");

    string public name;

    string private _contractURI;

    constructor(
        string memory definitiveName,
        string memory initialTokenURI,
        string memory initialContractURI,
        address initialOwnerOrMultiSigContract
    ) ERC1155(initialTokenURI) {
        // Set all default roles for initialOwnerOrMultiSigContract
        _setupRole(DEFAULT_ADMIN_ROLE, initialOwnerOrMultiSigContract);
        _setupRole(PAUSER_ROLE, initialOwnerOrMultiSigContract);
        _setupRole(MINTER_ROLE, initialOwnerOrMultiSigContract);
        _setupRole(METADATA_ROLE, initialOwnerOrMultiSigContract);
        _setupRole(LOCKER_ROLE, initialOwnerOrMultiSigContract);
        _setupRole(BLACKLISTER_ROLE, initialOwnerOrMultiSigContract);

        name = definitiveName;
        _contractURI = initialContractURI;
        _isMintAllowed = true;
        _isMetadataChangingAllowed = true;

        // Intialize the EIP712 so we can perform metatransactions
        _initializeEIP712(definitiveName);
    }

    /**
     * @notice Mint a new amount of tokens to a given address and by the given id if the minting is not locked and the contract is not paused
     * @param to The address to mint the tokens to
     * @param id The id of the token to mint
     * @param amount The amount of tokens to mint
     * @param data Extra data if necessary
     * @custom:requires MINTER_ROLE
     */
    function mint(
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public virtual whenNotPaused mintingNotLocked onlyRole(MINTER_ROLE) {
        _mint(to, id, amount, data);
    }

    /**
     * @notice Mint a new amount of tokens to a given address and by the given id if the minting is not locked and the contract is not paused
     * @param to The address to mint the tokens to
     * @param id The id of the token to mint
     * @param amount The amount of tokens to mint
     * @custom:requires MINTER_ROLE
     */
    function mint(
        address to,
        uint256 id,
        uint256 amount
    ) public virtual {
        mint(to, id, amount, "");
    }

    /**
     * @notice Batch mint a new amount of tokens to a given address and by the given id if the minting is not locked and the contract is not paused
     * @param to The address to mint the tokens to
     * @param ids The ids of the token to mint
     * @param amounts The amounts of tokens to mint
     * @param data Extra data if necessary
     * @custom:requires MINTER_ROLE
     */
    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public virtual whenNotPaused mintingNotLocked onlyRole(MINTER_ROLE) {
        _mintBatch(to, ids, amounts, data);
    }

    /**
     * @notice Batch mint a new amount of tokens to a given address and by the given id if the minting is not locked and the contract is not paused
     * @param to The address to mint the tokens to
     * @param ids The ids of the token to mint
     * @param amounts The amounts of tokens to mint
     * @custom:requires MINTER_ROLE
     */
    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts
    ) public virtual {
        mintBatch(to, ids, amounts, "");
    }

    /**
     * @notice Set the URI if the token if the metadata are not locked and the contract is not paused
     * @param newTokenURI The new URI of the token
     * For ERC1155 there isn't any base uri so it's the whole uri with {id} in it
     * example: ipfs://QmW77ZQQ7Jm9q8WuLbH8YZg2K7T9Qnjbzm7jYVQQrJY5Y/{id}
     * @custom:requires METADATA_ROLE
     */
    function setTokenURI(string memory newTokenURI)
        public
        virtual
        whenNotPaused
        metadataNotLocked
        onlyRole(METADATA_ROLE)
    {
        _setURI(newTokenURI);
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
     * @dev Call the inherited contract supportsInterface function to know the interfaces as EIP165 says
     * @return True if the interface is supported
     */
    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC1155, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    /**
     * @notice Returns the metadata of the contract
     * @return Contract URI of the token
     */
    function contractURI() public view virtual returns (string memory) {
        return _contractURI;
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
     * @param operator The address that will send the token
     * @param from The address that will send the token
     * @param to The address that will receive the token
     * @param ids The ID of the token to be transferred
     * @param amounts The address that will send the token
     * @param data The address that will send the token
     */
    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal virtual override whenNotPaused notBlacklisted(operator) {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }

    /**
     * @dev Specify the _msgSender in case the forwarder calls a function to the real sender
     * @return The sender of the message
     */
    function _msgSender() internal view virtual override(Context, AStartonContextMixin) returns (address) {
        return super._msgSender();
    }
}
