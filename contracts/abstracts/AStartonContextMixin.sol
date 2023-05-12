// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.0;

/// @title AStartonContextMixin
/// @author Starton
/// @notice Utility smart contract that track the signer of a meta transaction
abstract contract AStartonContextMixin {
    /**
     * @dev Returns the address of the current signer.
     * @return sender The address of the signer of the current meta transaction
     */
    function _msgSender() internal view virtual returns (address sender) {
        if (msg.sender == address(this)) {
            bytes memory array = msg.data;
            uint256 index = msg.data.length;
            assembly {
                // Load the 32 bytes word from memory with the address on the lower 20 bytes, and mask those.
                sender := and(mload(add(array, index)), 0xffffffffffffffffffffffffffffffffffffffff)
            }
        } else {
            sender = msg.sender;
        }
        return sender;
    }
}
