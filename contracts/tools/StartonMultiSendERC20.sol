// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/// @title StartonMultiSendERC20
/// @author Starton
/// @notice This contract allows to send multiple ERC20 tokens in a single transaction
contract StartonMultiSendERC20 {
    /**
     * @notice Send multiple ERC20 tokens in a single transaction
     * @param token The address of the ERC20 token
     * @param amounts The amounts of tokens to send
     * @param addresses The addresses to send the tokens to
     */
    function multiSend(
        address token,
        uint256[] calldata amounts,
        address[] calldata addresses
    ) external {
        require(amounts.length == addresses.length, "Arrays must be of equal length");

        uint256 length = amounts.length;
        for (uint256 i = 0; i < length; ) {
            // Don't check if the transfer is successfull because we still wants to continue to send the other tokens
            IERC20(token).transferFrom(msg.sender, addresses[i], amounts[i]);
            unchecked {
                i += 1;
            }
        }
    }
}
