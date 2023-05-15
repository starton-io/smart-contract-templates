// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";

interface IStartonERC721 is IERC721Enumerable {
    function mint(address to, string memory uri) external;
}
