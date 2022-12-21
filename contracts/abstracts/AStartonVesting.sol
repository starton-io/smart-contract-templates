// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@openzeppelin/contracts/utils/Context.sol";

abstract contract AStartonVesting is Context {
    // List of the addresses that have a vesting
    address[] internal _vestingBeneficiaries;

    /**
     * @notice Get the list of addresses that have at least one vesting
     * @return The list of addresses
     */
    function getVestingsBeneficiaries()
        public
        view
        virtual
        returns (address[] memory)
    {
        return _vestingBeneficiaries;
    }

    /**
     * @dev Check if a beneficiary have a vesting
     * @return bool True if the beneficiary have a vesting
     */
    function _isBeneficiary(address beneficiary)
        internal
        view
        virtual
        returns (bool)
    {
        uint256 nbBeneficiaries = _vestingBeneficiaries.length;
        for (uint256 i = 0; i < nbBeneficiaries; ++i) {
            if (_vestingBeneficiaries[i] == beneficiary) return true;
        }
        return false;
    }
}
