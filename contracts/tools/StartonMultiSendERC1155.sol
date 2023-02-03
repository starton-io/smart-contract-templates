// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";

/// @title StartonMultiSendERC11555
/// @author Starton
/// @notice This contract allows to send multiple ERC1155 tokens in a single transaction
contract StartonMultiSendERC1155 {
    /**
     * @notice Send multiple ERC1155 tokens in a single transaction
     * @param token The address of the ERC1155 token
     * @param ids The ids of tokens to send
     * @param amounts The amounts of tokens to send
     * @param addresses The addresses to send the tokens to
     */
    function multiSend(
        address token,
        uint256[] calldata ids,
        uint256[] calldata amounts,
        address[] calldata addresses
    ) external {
        require(ids.length == addresses.length, "Arrays must be of equal length");
        require(addresses.length == amounts.length, "Arrays must be of equal length");

        uint256 length = ids.length;
        for (uint256 i = 0; i < length; ) {
            // Don't check if the transfer is successfull because we still wants to continue to send the other tokens
            IERC1155(token).safeTransferFrom(msg.sender, addresses[i], ids[i], amounts[i], "");
            unchecked {
                i += 1;
            }
        }
    }
}
