// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/access/AccessControl.sol";

/// @title AStartonBlacklist
/// @author Starton
/// @notice Utility smart contract that can blacklist addresses
abstract contract AStartonBlacklist is AccessControl {
    bytes32 public constant BLACKLISTER_ROLE = keccak256("BLACKLISTER_ROLE");

    mapping(address => bool) private _blacklisted;

    /** @notice Event emitted when a new address is blacklisted */
    event Blacklisted(address indexed account, bool indexed isBlacklisted);

    /** @dev Modifier that reverts when the address is blacklisted */
    modifier notBlacklisted(address checkAddress) {
        require(!_blacklisted[checkAddress], "The caller of the contract is blacklisted");
        _;
    }

    /**
     * @notice Blacklist a address
     * @param addressToBlacklist The address to blacklist
     * @custom:requires METADATA_ROLE
     */
    function addToBlacklist(address addressToBlacklist) public virtual onlyRole(BLACKLISTER_ROLE) {
        require(!_blacklisted[addressToBlacklist], "This address is already blacklisted");
        _blacklisted[addressToBlacklist] = true;
        emit Blacklisted(addressToBlacklist, true);
    }

    /**
     * @notice Remove an address from the blacklist
     * @param addressToRemove The address to remove from the blacklist
     * @custom:requires METADATA_ROLE
     */
    function removeFromBlacklist(address addressToRemove) public virtual onlyRole(BLACKLISTER_ROLE) {
        require(_blacklisted[addressToRemove], "This address is not blacklisted");
        _blacklisted[addressToRemove] = false;
        emit Blacklisted(addressToRemove, false);
    }

    /**
     * @notice Blacklist a list of addresses
     * @param multiAddrToBl The addresses to blacklist
     * @custom:requires METADATA_ROLE
     */
    function addBatchToBlacklist(address[] memory multiAddrToBl) public virtual onlyRole(BLACKLISTER_ROLE) {
        uint256 length = multiAddrToBl.length;
        for (uint256 i = 0; i < length; ++i) {
            if (_blacklisted[multiAddrToBl[i]]) {
                continue;
            }
            _blacklisted[multiAddrToBl[i]] = true;
            emit Blacklisted(multiAddrToBl[i], true);
        }
    }

    /**
     * @notice Remove a list of addresses from the blacklist
     * @param multiAddrToRm The addresses to remove from the blacklist
     * @custom:requires METADATA_ROLE
     */
    function removeBatchFromBlacklist(address[] memory multiAddrToRm) public virtual onlyRole(BLACKLISTER_ROLE) {
        uint256 length = multiAddrToRm.length;
        for (uint256 i = 0; i < length; ++i) {
            if (!_blacklisted[multiAddrToRm[i]]) {
                continue;
            }
            _blacklisted[multiAddrToRm[i]] = false;
            emit Blacklisted(multiAddrToRm[i], false);
        }
    }

    /**
     * @notice Check if an address is blacklisted
     * @param checkAddress The address to check
     * @return True if the address is blacklisted, false otherwise
     */
    function isBlacklisted(address checkAddress) public view virtual returns (bool) {
        return _blacklisted[checkAddress];
    }
}
