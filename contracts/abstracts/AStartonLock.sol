// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";

abstract contract AStartonLock is AccessControl {
    bytes32 public constant LOCKER_ROLE = keccak256("LOCKER_ROLE");
}
