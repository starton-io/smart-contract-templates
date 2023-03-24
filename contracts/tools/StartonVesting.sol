// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Context.sol";

contract StartonVesting is Context {
    /** @notice Type of tokens that can be vested */
    enum TypeOfToken {
        TOKEN,
        NATIVE
    }

    /** @notice Type of vesting */
    enum VestingType {
        CLIFF,
        LINEAR
    }

    /** @notice Structure of data that defines a vesting */
    struct VestingData {
        uint256 amount;
        TypeOfToken tokenType;
        VestingType vestingType;
        address tokenAddress;
        uint64 startTimestamp;
        uint64 endTimestamp;
        uint256 amountClaimed;
    }

    // Mapping of vestings
    mapping(address => VestingData[]) private _vestings;

    // List of the addresses that have a vesting
    address[] private _vestingBeneficiaries;

    /** @notice Event emitted when a new vesting has been added */
    event AddedVesting(
        address indexed beneficiary,
        uint256 indexed index,
        address token,
        uint256 totalAmount,
        uint64 startTimestamp,
        uint64 endTimestamp
    );

    /** @notice Event emitted when a vesting has been claimed */
    event ClaimedVesting(
        address indexed beneficiary,
        uint256 indexed index,
        address token,
        uint64 timestamp,
        uint256 amountClaimed
    );

    constructor() {}

    /**
     * @notice Get the amount of tokens that can be claimed from a vesting
     * @param amount The amount of tokens that are vested
     * @param startTimestamp The timestamp when the vesting will start
     * @param endTimestamp The timestamp when the vesting will end
     * @param amountClaimed The amount of tokens that have been claimed
     * @param vestingType The type of vesting
     * @return value The amount of tokens that can be claimed
     */
    function vestingAmount(
        uint256 amount,
        uint64 startTimestamp,
        uint64 endTimestamp,
        uint256 amountClaimed,
        VestingType vestingType
    ) public view returns (uint256 value) {
        if (vestingType == VestingType.LINEAR) {
            // If the vesting is finished, return the amount of tokens left
            // else returns the amount of tokens that can be claimed at the current time
            if (endTimestamp > block.timestamp) {
                if (block.timestamp < startTimestamp) {
                    value = 0;
                } else {
                    value =
                        (amount * (block.timestamp - startTimestamp)) /
                        (endTimestamp - startTimestamp) -
                        amountClaimed;
                }
            } else {
                value = amount - amountClaimed;
            }
        } else {
            // If the vesting is finished, return the total amount of tokens
            // else returns 0
            if (block.timestamp >= endTimestamp) {
                value = amount;
            } else {
                value = 0;
            }
        }
    }

    /**
     * @notice Get all the vestings from a beneficiary
     * @param beneficiary The account that have the vestings
     * @return The list of vestings data
     */
    function getVestings(address beneficiary) public view returns (VestingData[] memory) {
        return _vestings[beneficiary];
    }

    /**
     * @notice Get a vesting from a beneficiary
     * @param beneficiary The account that have the vesting
     * @param index The index of the vesting
     * @return The vesting data
     */
    function getVesting(address beneficiary, uint256 index) public view returns (VestingData memory) {
        require(index < _vestings[beneficiary].length, "Vesting doesn't exist");
        return _vestings[beneficiary][index];
    }

    /**
     * @notice Get the number of vestings from a beneficiary
     * @param beneficiary The account that have the vestings
     * @return The number of vestings
     */
    function getVestingNumber(address beneficiary) public view returns (uint256) {
        return _vestings[beneficiary].length;
    }

    /**
     * @notice Get the list of addresses that have at least one vesting
     * @return The list of addresses
     */
    function getVestingsBeneficiaries() public view virtual returns (address[] memory) {
        return _vestingBeneficiaries;
    }

    /**
     * @notice Add a token vesting to a beneficiary
     * @param beneficiary The account that will receive the tokens
     * @param token The token that will be vested
     * @param vestingType The type of vesting
     * @param startTimestamp The timestamp when the vesting will start
     * @param endTimestamp The timestamp when the vesting will end
     * @param amount The amount of tokens that will be vested
     */
    function addVesting(
        address beneficiary,
        address token,
        VestingType vestingType,
        uint64 startTimestamp,
        uint64 endTimestamp,
        uint256 amount
    ) public {
        // Check if the token can be transferred with the right amount
        IERC20 erc20Token = IERC20(token);
        require(erc20Token.balanceOf(_msgSender()) >= amount, "Not enough balance");
        require(erc20Token.allowance(_msgSender(), address(this)) >= amount, "Not enough allowance");

        _createVesting(beneficiary, token, startTimestamp, endTimestamp, amount, TypeOfToken.TOKEN, vestingType);

        bool success = erc20Token.transferFrom(_msgSender(), address(this), amount);
        require(success, "Transfer failed");
    }

    /**
     * @notice Add a native vesting to a beneficiary
     * @param beneficiary The account that will receive the tokens
     * @param vestingType The type of vesting
     * @param startTimestamp The timestamp when the vesting will start
     * @param endTimestamp The timestamp when the vesting will end
     */
    function addVesting(
        address beneficiary,
        VestingType vestingType,
        uint64 startTimestamp,
        uint64 endTimestamp
    ) public payable {
        _createVesting(
            beneficiary,
            address(0),
            startTimestamp,
            endTimestamp,
            msg.value,
            TypeOfToken.NATIVE,
            vestingType
        );
    }

    /**
     * @notice Add a batch of token vesting to a beneficiary
     * @param beneficiary The account that will receive the tokens
     * @param token The token that will be vested
     * @param vestingType The type of vesting
     * @param startTimestamps The timestamps when the vesting will start
     * @param endTimestamps The timestamps when the vesting will end
     * @param amounts The amounts of tokens that will be vested
     */
    function batchAddVesting(
        address beneficiary,
        address token,
        VestingType vestingType,
        uint64[] calldata startTimestamps,
        uint64[] calldata endTimestamps,
        uint256[] calldata amounts
    ) public {
        _isSameLength(startTimestamps, endTimestamps, amounts);

        uint256 nbVestings = startTimestamps.length;
        for (uint256 i = 0; i < nbVestings; ++i) {
            addVesting(beneficiary, token, vestingType, startTimestamps[i], endTimestamps[i], amounts[i]);
        }
    }

    /**
     * @notice Add a batch of native vesting to a beneficiary
     * @param beneficiary The account that will receive the tokens
     * @param vestingType The type of vesting
     * @param startTimestamps The timestamps when the vesting will start
     * @param endTimestamps The timestamps when the vesting will end
     * @param amounts The amounts of tokens that will be vested
     */
    function batchAddVesting(
        address beneficiary,
        VestingType vestingType,
        uint64[] calldata startTimestamps,
        uint64[] calldata endTimestamps,
        uint256[] calldata amounts
    ) external payable {
        _isSameLength(startTimestamps, endTimestamps, amounts);

        uint256 totalAmount = 0;
        for (uint256 i = 0; i < startTimestamps.length; ++i) {
            totalAmount += amounts[i];
            require(totalAmount <= msg.value, "Not enough value");
            _createVesting(
                beneficiary,
                address(0),
                startTimestamps[i],
                endTimestamps[i],
                amounts[i],
                TypeOfToken.NATIVE,
                vestingType
            );
        }
    }

    /**
     * @notice Claim a vesting
     * @param index The index of the vesting
     */
    function claimVesting(uint256 index) public {
        VestingData memory vesting = getVesting(_msgSender(), index);

        uint256 value = vestingAmount(
            vesting.amount,
            vesting.startTimestamp,
            vesting.endTimestamp,
            vesting.amountClaimed,
            vesting.vestingType
        );
        require(value != 0, "VestingAmount is zero");

        emit ClaimedVesting(_msgSender(), index, vesting.tokenAddress, uint64(block.timestamp), value);

        // If the vesting is finished, remove it from the list else update the amount claimed
        if (vesting.endTimestamp <= block.timestamp) {
            // remove the vesting from the list
            VestingData[] storage vestings = _vestings[_msgSender()];
            vestings[index] = vestings[vestings.length - 1];
            vestings.pop();

            // If the sender doesn't have any vesting, remove it from the list
            if (vestings.length == 0) {
                uint256 nbBeneficiaries = _vestingBeneficiaries.length;
                for (uint256 i = 0; i < nbBeneficiaries; ++i) {
                    if (_vestingBeneficiaries[i] == _msgSender()) {
                        _vestingBeneficiaries[i] = _vestingBeneficiaries[nbBeneficiaries - 1];
                        _vestingBeneficiaries.pop();
                        break;
                    }
                }
            }
        } else {
            // Update the amount claimed
            _vestings[_msgSender()][index].amountClaimed += value;
        }

        // Send the tokens to the sender
        if (vesting.tokenType == TypeOfToken.TOKEN) {
            bool success = IERC20(vesting.tokenAddress).transfer(_msgSender(), value);
            require(success, "Transfer failed");
        } else {
            (bool success, ) = payable(_msgSender()).call{value: value}("");
            require(success, "Transfer failed");
        }
    }

    /**
     * @notice Claim all the vestings of the sender
     */
    function claimAllVestings() public {
        uint256 length = _vestings[_msgSender()].length;
        uint256 totalPopped = 0;
        for (uint256 i = 0; i < length; ++i) {
            VestingData memory vesting = getVesting(_msgSender(), i - totalPopped);

            uint256 value = vestingAmount(
                vesting.amount,
                vesting.startTimestamp,
                vesting.endTimestamp,
                vesting.amountClaimed,
                vesting.vestingType
            );
            if (value != 0) claimVesting(i - totalPopped);
            if (vesting.endTimestamp <= block.timestamp) totalPopped += 1;
        }
    }

    function _createVesting(
        address beneficiary,
        address token,
        uint64 startTimestamp,
        uint64 endTimestamp,
        uint256 amount,
        TypeOfToken tokenType,
        VestingType vestingType
    ) internal {
        _isValidVesting(amount, startTimestamp, endTimestamp, beneficiary);

        _vestings[beneficiary].push(
            VestingData({
                amount: amount,
                tokenType: tokenType,
                vestingType: vestingType,
                tokenAddress: token,
                startTimestamp: startTimestamp,
                endTimestamp: endTimestamp,
                amountClaimed: 0
            })
        );

        // If the beneficiary is not already in the list, add it
        if (!_isBeneficiary(beneficiary)) _vestingBeneficiaries.push(beneficiary);

        emit AddedVesting(beneficiary, getVestingNumber(beneficiary) - 1, token, amount, startTimestamp, endTimestamp);
    }

    /**
     * @dev Check if a beneficiary have a vesting
     * @return bool True if the beneficiary have a vesting
     */
    function _isBeneficiary(address beneficiary) internal view virtual returns (bool) {
        uint256 nbBeneficiaries = _vestingBeneficiaries.length;
        for (uint256 i = 0; i < nbBeneficiaries; ++i) {
            if (_vestingBeneficiaries[i] == beneficiary) return true;
        }
        return false;
    }

    /**
     * @dev Reverts when the amount is insufficent or the timestamp is in the past
     * @param amount The amount of tokens
     * @param endTimestamp The end timestamp of the vesting
     * @param beneficiary The beneficiary of the vesting
     */
    function _isValidVesting(
        uint256 amount,
        uint64 startTimestamp,
        uint64 endTimestamp,
        address beneficiary
    ) internal view {
        require(amount != 0, "Amount is insufficent");
        require(startTimestamp >= block.timestamp, "Start timestamp is in the past");
        require(beneficiary != address(0), "Beneficiary is invalid");
        require(startTimestamp < endTimestamp, "Start timestamp is after end timestamp");
    }

    /**
     * @dev Reverts when the length of the arrays are not the same
     * @param startTimestamps The timestamps when the vesting will start
     * @param endTimestamps The timestamps when the vesting will end
     * @param amounts The amounts of tokens that will be vested
     */
    function _isSameLength(
        uint64[] calldata startTimestamps,
        uint64[] calldata endTimestamps,
        uint256[] calldata amounts
    ) internal pure {
        require(startTimestamps.length == endTimestamps.length, "Invalid array length");
        require(startTimestamps.length == amounts.length, "Invalid array length");
    }
}
