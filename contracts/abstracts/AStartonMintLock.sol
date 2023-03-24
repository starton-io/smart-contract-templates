// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "./AStartonPausable.sol";
import "./AStartonLock.sol";

abstract contract AStartonMintLock is AStartonPausable, AStartonLock {
    bool internal _isMintAllowed;

    /** @notice Event emitted when the minting is locked */
    event MintingLocked(address indexed account);

    /** @dev Modifier that reverts when the minting is locked */
    modifier mintingNotLocked() {
        require(_isMintAllowed, "Minting is locked");
        _;
    }

    /**
     * @notice Lock the metadats and won't allow any changes anymore if the contract is not paused
     * @custom:requires LOCKER_ROLE
     */
    function lockMint() public virtual whenNotPaused onlyRole(LOCKER_ROLE) {
        _isMintAllowed = false;
        emit MintingLocked(_msgSender());
    }
}
