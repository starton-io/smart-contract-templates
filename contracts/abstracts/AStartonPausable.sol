// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract AStartonPausable is Pausable, AccessControl {
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

    /**
     * @notice Pause the contract which stop any changes regarding the ERC20
     * @custom:requires PAUSER_ROLE
     */
    function pause() public virtual onlyRole(PAUSER_ROLE) {
        _pause();
    }

    /**
     * @notice Unpause the contract which allow back any changes regarding the ERC20
     * @custom:requires PAUSER_ROLE
     */
    function unpause() public virtual onlyRole(PAUSER_ROLE) {
        _unpause();
    }
}
