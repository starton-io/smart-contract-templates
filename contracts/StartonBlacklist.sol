// SPDX-License-Identifier: MIT
// StartonBlacklist contract: version 0.0.1
// Creator: https://starton.io

pragma solidity 0.8.9;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract StartonBlacklist is AccessControl {
    event Blacklisted(address indexed account, bool indexed isBlacklisted);

    bytes32 public constant BLACKLISTER_ROLE = keccak256("BLACKLISTER_ROLE");

    mapping(address => bool) private _blacklisted;

    modifier notBlacklisted(address checkAddress) {
        require(
            !_blacklisted[checkAddress],
            "The caller of the contract is blacklisted"
        );
        _;
    }

    function addToBlacklist(address addressToBlacklist)
        public
        onlyRole(BLACKLISTER_ROLE)
    {
        require(
            !_blacklisted[addressToBlacklist],
            "This address is already blacklisted"
        );
        _blacklisted[addressToBlacklist] = true;
        emit Blacklisted(addressToBlacklist, true);
    }

    function removeFromBlacklist(address addressToRemove)
        public
        onlyRole(BLACKLISTER_ROLE)
    {
        require(
            _blacklisted[addressToRemove],
            "This address is not blacklisted"
        );
        _blacklisted[addressToRemove] = false;
        emit Blacklisted(addressToRemove, false);
    }

    function isBlacklisted(address checkAddress) public view returns (bool) {
        return _blacklisted[checkAddress];
    }

    function addBatchToBlacklist(address[] memory multiAddrToBl)
        public
        onlyRole(BLACKLISTER_ROLE)
    {
        for (uint256 i = 0; i < multiAddrToBl.length; ++i) {
            if (_blacklisted[multiAddrToBl[i]]) {
                continue;
            }
            _blacklisted[multiAddrToBl[i]] = true;
            emit Blacklisted(multiAddrToBl[i], true);
        }
    }

    function removeBatchFromBlacklist(address[] memory multiAddrToRm)
        public
        onlyRole(BLACKLISTER_ROLE)
    {
        for (uint256 i = 0; i < multiAddrToRm.length; ++i) {
            if (!_blacklisted[multiAddrToRm[i]]) {
                continue;
            }
            _blacklisted[multiAddrToRm[i]] = false;
            emit Blacklisted(multiAddrToRm[i], false);
        }
    }
}
