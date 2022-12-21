// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

/// @title AStartonInitializable
/// @author Starton
/// @notice Utility smart contract that can be used to initialize a contract
abstract contract AStartonInitializable {
    bool private _inited = false;

    modifier initializer() {
        require(!_inited, "Already inited");
        _;
        _inited = true;
    }
}
