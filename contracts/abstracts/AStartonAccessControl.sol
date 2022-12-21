// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/access/AccessControl.sol";

/// @title AStartonAcessControl
/// @author Starton
/// @notice Utility smart contract that can ease the transfer of ownership between one user to another
abstract contract AStartonAccessControl is AccessControl {

    /**
     * @notice Transfer the ownership of the contract to a new address
     * @param newAdmin The address of the new owner
     */
    function transferOwnership(address newAdmin) virtual public onlyRole(DEFAULT_ADMIN_ROLE) {
        _grantRole(DEFAULT_ADMIN_ROLE, newAdmin);
        _revokeRole(DEFAULT_ADMIN_ROLE, _msgSender());
    }

}
