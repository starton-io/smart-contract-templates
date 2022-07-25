// Sources flattened with hardhat v2.10.1 https://hardhat.org

// File contracts/ContextMixin.sol

// SPDX-License-Identifier: MIT
// ContextMixin contract: version 0.0.1
// Creator: https://starton.io

pragma solidity 0.8.9;

abstract contract ContextMixin {
    function msgSender() internal view returns (address payable sender) {
        if (msg.sender == address(this)) {
            bytes memory array = msg.data;
            uint256 index = msg.data.length;
            assembly {
                // Load the 32 bytes word from memory with the address on the lower 20 bytes, and mask those.
                sender := and(
                    mload(add(array, index)),
                    0xffffffffffffffffffffffffffffffffffffffff
                )
            }
        } else {
            sender = payable(msg.sender);
        }
        return sender;
    }
}
