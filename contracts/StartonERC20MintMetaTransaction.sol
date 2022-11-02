// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "./utils/NativeMetaTransaction.sol";
import "./utils/ContextMixin.sol";

/// @title StartonERC20MetaTransaction
/// @author Starton
/// @notice ERC20 tokens that can be paused, locked, burned, have a access management and handle meta transactions
contract StartonERC20MintMetaTransaction is
    ERC20Burnable,
    Pausable,
    AccessControl,
    ContextMixin,
    NativeMetaTransaction
{
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant LOCKER_ROLE = keccak256("LOCKER_ROLE");

    bool private _isMintAllowed;

    /** @notice Event emitted when the minting is locked */
    event MintingLocked(address indexed account);

    /** @dev Modifier that reverts when the minting is locked */
    modifier mintingNotLocked() {
        require(_isMintAllowed, "Minting is locked");
        _;
    }

    constructor(
        string memory definitiveName,
        string memory definitiveSymbol,
        uint256 initialSupply,
        address initialOwnerOrMultiSigContract
    ) ERC20(definitiveName, definitiveSymbol) {
        // Set all default roles for initialOwnerOrMultiSigContract
        _setupRole(DEFAULT_ADMIN_ROLE, initialOwnerOrMultiSigContract);
        _setupRole(PAUSER_ROLE, initialOwnerOrMultiSigContract);
        _setupRole(MINTER_ROLE, initialOwnerOrMultiSigContract);
        _setupRole(LOCKER_ROLE, initialOwnerOrMultiSigContract);

        // Mint initialSupply to initialOwnerOrMultiSigContract
        _mint(initialOwnerOrMultiSigContract, initialSupply);

        // Intialize the EIP712 so we can perform metatransactions
        _initializeEIP712(definitiveName);
    }

    /**
     * @notice Mint new tokens
     * @param to The address that will receive the minted tokens
     * @param amount The amount of tokens to mint
     * @custom:requires MINTER_ROLE
     */
    function mint(address to, uint256 amount)
        public
        mintingNotLocked
        onlyRole(MINTER_ROLE)
    {
        _mint(to, amount);
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
     * @dev Stop the transfer if the contract is paused
     * @param from The address that will send the token
     * @param to The address that will receive the token
     * @param amount The of token to be transfered
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override whenNotPaused {
        super._beforeTokenTransfer(from, to, amount);
    }

    /**
     * @dev Specify the _msgSender in case the forwarder calls a function to the real sender
     * @return The sender of the message
     */
    function _msgSender()
        internal
        view
        virtual
        override(Context, ContextMixin)
        returns (address)
    {
        return super._msgSender();
    }
}
