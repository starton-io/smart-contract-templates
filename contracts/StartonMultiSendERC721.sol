// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract StartonMultiSendERC721 {
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
            IERC721(token).safeTransferFrom(msg.sender, addresses[i], ids[i]);
            unchecked {
                i++;
            }
        }
    }
}
