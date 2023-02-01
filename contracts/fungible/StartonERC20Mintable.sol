// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "../abstracts/AStartonMintLock.sol";
import "./StartonERC20Base.sol";

/// @title StartonERC20Mintable
/// @author Starton
/// @notice ERC20 tokens that can be paused, locked, burned, have a access management and handle meta transactions
contract StartonERC20Mintable is StartonERC20Base, AStartonMintLock {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    constructor(
        string memory definitiveName,
        string memory definitiveSymbol,
        uint256 initialSupply,
        address initialOwnerOrMultiSigContract
    ) StartonERC20Base(definitiveName, definitiveSymbol, initialSupply, initialOwnerOrMultiSigContract) {
        // Set all default roles for initialOwnerOrMultiSigContract
        _setupRole(MINTER_ROLE, initialOwnerOrMultiSigContract);
        _setupRole(LOCKER_ROLE, initialOwnerOrMultiSigContract);

        // Allow minting of new tokens
        _isMintAllowed = true;
    }

    /**
     * @notice Mint new tokens
     * @param to The address that will receive the minted tokens
     * @param amount The amount of tokens to mint
     * @custom:requires MINTER_ROLE
     */
    function mint(address to, uint256 amount) public mintingNotLocked onlyRole(MINTER_ROLE) {
        _mint(to, amount);
    }

    /**
     * @dev Specify the _msgSender in case the forwarder calls a function to the real sender
     * @return The sender of the message
     */
    function _msgSender() internal view virtual override(StartonERC20Base, Context) returns (address) {
        return super._msgSender();
    }
}
