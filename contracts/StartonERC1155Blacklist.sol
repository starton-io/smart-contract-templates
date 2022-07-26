// SPDX-License-Identifier: MIT
// StartonERC1155Blacklist contract: version 0.0.1
// Creator: https://starton.io

pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "./NativeMetaTransaction.sol";
import "./StartonBlacklist.sol";
import "./ContextMixin.sol";

/**
 * @dev This implements a ERC1155 token that can be blacklisted, paused, locked, burned and have a access management.
 * On top of that it supports meta transactions with built in forwarder.
 */
contract StartonERC1155Blacklist is
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

    event MintingLocked(address indexed account);

    modifier notLocked() {
        require(_isMintAllowed, "Minting is locked");
        _;
    }

    constructor(
        string memory name_,
        string memory uri,
        string memory contractURI_,
        address ownerOrMultiSigContract
    ) ERC1155(uri) {
        _setupRole(DEFAULT_ADMIN_ROLE, ownerOrMultiSigContract);
        _setupRole(PAUSER_ROLE, ownerOrMultiSigContract);
        _setupRole(MINTER_ROLE, ownerOrMultiSigContract);
        _setupRole(METADATA_ROLE, ownerOrMultiSigContract);
        _setupRole(LOCKER_ROLE, ownerOrMultiSigContract);
        _setupRole(BLACKLISTER_ROLE, ownerOrMultiSigContract);

        _contractURI = contractURI_;
        _isMintAllowed = true;
        name = name_;
        _initializeEIP712(name);
    }

    // For ERC1155 there isn't any base uri so it's the whole uri with {id} in it
    function setURI(string memory newURI)
        public
        whenNotPaused
        onlyRole(METADATA_ROLE)
    {
        _setURI(newURI);
    }

    function setContractURI(string memory newContractUri)
        public
        whenNotPaused
        onlyRole(METADATA_ROLE)
    {
        _contractURI = newContractUri;
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

    function mint(
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public whenNotPaused notLocked onlyRole(MINTER_ROLE) {
        _mint(to, id, amount, data);
    }

    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public whenNotPaused notLocked onlyRole(MINTER_ROLE) {
        _mintBatch(to, ids, amounts, data);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC1155, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function contractURI() public view returns (string memory) {
        return _contractURI;
    }

    function _setApprovalForAll(
        address owner,
        address operator,
        bool approved
    ) internal override whenNotPaused notBlacklisted(operator) {
        super._setApprovalForAll(owner, operator, approved);
    }

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
