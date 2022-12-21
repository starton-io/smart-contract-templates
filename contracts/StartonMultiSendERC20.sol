// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract StartonMultiSendERC20 {
    function multiSend(
        address token,
        uint256[] calldata amounts,
        address[] calldata addresses
    ) external {
        require(
            amounts.length == addresses.length,
            "Arrays must be of equal length"
        );

        uint256 length = amounts.length;
        for (uint256 i = 0; i < length; ) {
            IERC20(token).transferFrom(msg.sender, addresses[i], amounts[i]);
            unchecked {
                i++;
            }
        }
    }
}
