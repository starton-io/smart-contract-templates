// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract StartonERC20Pause is ERC20, Pausable, AccessControl {
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

    constructor(string memory name, string memory symbol, uint256 initialSupply) ERC20(name, symbol) {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(PAUSER_ROLE, msg.sender);
        _mint(msg.sender, initialSupply);
    }

    function pause() public {
        require(hasRole(PAUSER_ROLE, msg.sender));
        _pause();
    }

    function unpause() public {
        require(hasRole(PAUSER_ROLE, msg.sender));
        _unpause();
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, amount);
    }
}
