// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "../abstracts/AStartonNativeMetaTransaction.sol";
import "../abstracts/AStartonAccessControl.sol";
import "../abstracts/AStartonContextMixin.sol";
import "../abstracts/AStartonPausable.sol";

/// @title StartonERC20Base
/// @author Starton
/// @notice ERC20 tokens that can be paused, burned, have a access management and handle meta transactions
contract StartonERC20Base is
    ERC20Burnable,
    AStartonPausable,
    AStartonAccessControl,
    AStartonContextMixin,
    AStartonNativeMetaTransaction
{
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
     * @dev Stop the transfer if the contract is paused
     * @param from The address that will send the token
     * @param to The address that will receive the token
     * @param amount The of token to be transfered
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual override whenNotPaused {
        super._beforeTokenTransfer(from, to, amount);
    }

    /**
     * @dev Specify the _msgSender in case the forwarder calls a function to the real sender
     * @return The sender of the message
     */
    function _msgSender() internal view virtual override(Context, AStartonContextMixin) returns (address) {
        return super._msgSender();
    }
}
