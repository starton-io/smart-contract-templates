// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "./utils/NativeMetaTransaction.sol";
import "./utils/ContextMixin.sol";

/// @title StartonERC20MetaTransaction
/// @author Starton
/// @notice ERC20 token that can be paused, burned, have a access management and handle meta transactions
contract StartonERC20MetaTransaction is
    ERC20Burnable,
    Pausable,
    AccessControl,
    ContextMixin,
    NativeMetaTransaction
{
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

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

        // Mint initialSupply to initialOwnerOrMultiSigContract
        _mint(initialOwnerOrMultiSigContract, initialSupply);
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
        return ContextMixin._msgSender();
    }
}
