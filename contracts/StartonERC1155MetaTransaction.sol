// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "./NativeMetaTransaction.sol";
import "./StartonBlacklist.sol";
import "./ContextMixin.sol";

/// @title StartonERC1155MetaTransaction
/// @author Starton
/// @notice This implements a ERC1155 token that can be blacklisted, paused, locked, burned and have a access management
contract StartonERC1155MetaTransaction is
    ERC1155Burnable,
    AccessControl,
    Pausable,
    StartonBlacklist,
    ContextMixin,
    NativeMetaTransaction
{
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant METADATA_ROLE = keccak256("METADATA_ROLE");
    bytes32 public constant LOCKER_ROLE = keccak256("LOCKER_ROLE");

    string public name;

    string private _contractURI;

    bool private _isMintAllowed;
    bool private _isMetatadataChangingAllowed;

    /** @notice Event when the minting is locked */
    event MintingLocked(address indexed account);

    /** @notice Event when the metadata are locked */
    event MetadataLocked(address indexed account);

    /** @dev Modifier that reverts when the minting is locked */
    modifier mintingNotLocked() {
        require(_isMintAllowed, "Minting is locked");
        _;
    }

    /** @dev Modifier that reverts when the metadatas are locked */
    modifier metadataNotLocked() {
        require(_isMintAllowed, "Metadats are locked");
        _;
    }

    constructor(
        string memory name_,
        string memory uri,
        string memory contractURI_,
        address ownerOrMultiSigContract
    ) ERC1155(uri) {
        // Set all default roles for ownerOrMultiSigContract
        _setupRole(DEFAULT_ADMIN_ROLE, ownerOrMultiSigContract);
        _setupRole(PAUSER_ROLE, ownerOrMultiSigContract);
        _setupRole(MINTER_ROLE, ownerOrMultiSigContract);
        _setupRole(METADATA_ROLE, ownerOrMultiSigContract);
        _setupRole(LOCKER_ROLE, ownerOrMultiSigContract);
        _setupRole(BLACKLISTER_ROLE, ownerOrMultiSigContract);

        name = name_;
        _contractURI = contractURI_;
        _isMintAllowed = true;
        _isMetatadataChangingAllowed = true;

        // Intialize the EIP712 so we can perform metatransactions
        _initializeEIP712(name_);
    }

    /**
     * @notice Set the URI if the token
     * For ERC1155 there isn't any base uri so it's the whole uri with {id} in it
     * only accessible by the addresses that own the metadata role
     */
    function setURI(string memory newURI)
        public
        whenNotPaused
        metadataNotLocked
        onlyRole(METADATA_ROLE)
    {
        _setURI(newURI);
    }

    /**
     * @notice Set the URI of the contract
     * only accessible by the addresses that own the metadata role
     * @param newContractURI The new URI of the contract
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
    function lockMint() public whenNotPaused onlyRole(LOCKER_ROLE) {
        _isMintAllowed = false;
        emit MintingLocked(_msgSender());
    }

    /**
     * @notice Lock the metadats and won't allow any changes anymore
     * only accessible by the addresses that own the locker role
     */
    function lockMetadata() public whenNotPaused onlyRole(LOCKER_ROLE) {
        _isMetatadataChangingAllowed = false;
        emit MetadataLocked(_msgSender());
    }

    /**
     * @notice Mint a new amount of tokens to a given address and by the given id
     * only accessible by the addresses that own the minter role
     * @param to The address to mint the tokens to
     * @param id The id of the token to mint
     * @param amount The amount of tokens to mint
     * @param data Extra data if necessary
     */
    function mint(
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public whenNotPaused mintingNotLocked onlyRole(MINTER_ROLE) {
        _mint(to, id, amount, data);
    }

    /**
     * @notice Batch mint a new amount of tokens to a given address and by the given id
     * only accessible by the addresses that own the minter role
     * @param to The address to mint the tokens to
     * @param ids The ids of the token to mint
     * @param amounts The amounts of tokens to mint
     * @param data Extra data if necessary
     */
    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public whenNotPaused mintingNotLocked onlyRole(MINTER_ROLE) {
        _mintBatch(to, ids, amounts, data);
    }

    /**
     * @dev Call the inherited contract supportsInterface function to know the interfaces as EIP165 says
     * @return bool : True if the interface is supported
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC1155, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    /**
     * @notice Returns the metadata of the contract
     * @return string : Contract URI of the token
     */
    function contractURI() public view returns (string memory) {
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
    ) internal override whenNotPaused notBlacklisted(operator) {
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
    ) internal override whenNotPaused notBlacklisted(operator) {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
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
