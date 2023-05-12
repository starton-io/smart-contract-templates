// SPDX-License-Identifier: Apache-2.0

pragma solidity 0.8.17;

import "@openzeppelin/contracts/governance/TimelockController.sol";

contract StartonTimeLockController is TimelockController {
    constructor(
        uint256 minDelay,
        address[] memory proposers,
        address[] memory executors,
        address admin
    ) payable TimelockController(minDelay, proposers, executors, admin) {}
}
