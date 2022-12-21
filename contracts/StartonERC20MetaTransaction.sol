// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "./utils/AStartonNativeMetaTransaction.sol";
import "./utils/AStartonAccessControl.sol";
import "./utils/AStartonContextMixin.sol";

/// @title StartonERC20MetaTransaction
/// @author Starton
/// @notice ERC20 tokens that can be paused, burned, have a access management and handle meta transactions
contract StartonERC20MetaTransaction is
    ERC20Burnable,
    Pausable,
    AStartonAccessControl,
    AStartonContextMixin,
    AStartonNativeMetaTransaction
{
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

    constructor(
        string memory definitiveName,
        string memory definitiveSymbol,
        uint256 definitiveSupply,
        address initialOwnerOrMultiSigContract
    ) ERC20(definitiveName, definitiveSymbol) {
        // Set all default roles for initialOwnerOrMultiSigContract
        _setupRole(DEFAULT_ADMIN_ROLE, initialOwnerOrMultiSigContract);
        _setupRole(PAUSER_ROLE, initialOwnerOrMultiSigContract);

        // Mint definitiveSupply to initialOwnerOrMultiSigContract
        _mint(initialOwnerOrMultiSigContract, definitiveSupply);

        // Intialize the EIP712 so we can perform metatransactions
        _initializeEIP712(definitiveName);
    }

    /**
     * @notice Pause the contract which stop any changes regarding the ERC20
     * @custom:requires PAUSER_ROLE
     */
    function pause() public onlyRole(PAUSER_ROLE) {
        _pause();
    }

    /**
     * @notice Unpause the contract which allow back any changes regarding the ERC20
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
        override(Context, AStartonContextMixin)
        returns (address)
    {
        return super._msgSender();
    }
}
