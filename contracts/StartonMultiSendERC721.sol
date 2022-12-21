// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

/// @title Starton Multi Send ERC721
/// @author Starton
/// @notice This contract allows to send multiple ERC721 tokens in a single transaction
contract StartonMultiSendERC721 {
    /**
     * @notice Send multiple ERC721 tokens in a single transaction
     * @param token The address of the ERC721 token
     * @param ids The ids of tokens to send
     * @param addresses The addresses to send the tokens to
     */
    function multiSend(
        address token,
        uint256[] calldata ids,
        address[] calldata addresses
    ) external {
        require(
            ids.length == addresses.length,
            "Arrays must be of equal length"
        );

        uint256 length = ids.length;
        for (uint256 i = 0; i < length; ) {
            // Don't check if the transfer is successfull because we still wants to continue to send the other tokens
            IERC721(token).safeTransferFrom(msg.sender, addresses[i], ids[i]);
            unchecked {
                i++;
            }
        }
    }
}
