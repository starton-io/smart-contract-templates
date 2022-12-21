// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/governance/TimelockController.sol";

contract StartonTimeLockController is TimelockController {
    constructor(
        uint256 minDelay,
        address[] memory proposers,
        address[] memory executors
    ) payable TimelockController(minDelay, proposers, executors) {}
}
