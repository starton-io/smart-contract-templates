// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "./AStartonPausable.sol";
import "./AStartonLock.sol";

abstract contract AStartonMetadataLock is AStartonPausable, AStartonLock {
    bool internal _isMetadataChangingAllowed;

    /** @notice Event emitted when the metadata are locked */
    event MetadataLocked(address indexed account);

    /** @dev Modifier that reverts when the metadatas are locked */
    modifier metadataNotLocked() {
        require(_isMetadataChangingAllowed, "Metadatas are locked");
        _;
    }

    /**
     * @notice Lock the metadats and won't allow any changes anymore if the contract is not paused
     * @custom:requires LOCKER_ROLE
     */
    function lockMetadata() public virtual whenNotPaused onlyRole(LOCKER_ROLE) {
        _isMetadataChangingAllowed = false;
        emit MetadataLocked(_msgSender());
    }
}
