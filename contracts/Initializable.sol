// SPDX-License-Identifier: MIT
// Initializable contract: version 0.0.1
// Creator: https://starton.io

pragma solidity 0.8.9;

contract Initializable {
    bool private _inited = false;

    modifier initializer() {
        require(!_inited, "Already inited");
        _;
        _inited = true;
    }
}
