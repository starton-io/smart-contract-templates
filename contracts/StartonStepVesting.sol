// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Context.sol";

contract StartonStepVesting is Context {
    /** @notice Type of tokens that can be vested */
    enum TypeOfToken {
        TOKEN,
        NATIVE
    }

    struct Nico {
        uint256 amountReleased;
        uint64 timestamp;
        bool isClaimed;
    }

    /** @notice Structure of data that defines a vesting */
    struct VestingData {
        uint256 amount;
        TypeOfToken tokenType;
        address tokenAddress;
        uint64 stepIndex;
        uint64 startTimestamp;
        uint256 amountClaimed;
        Nico[] steps;
    }

    // List of the addresses that have a vesting
    address[] private _vestingBeneficiaries;

    // Mapping of vestings
    mapping(address => VestingData[]) private _vestings;

    constructor() {}

    function _isValidVesting(
        address beneficiary,
        uint64[] calldata stepsTimestamps,
        uint256[] calldata stepsAmount
    ) internal pure {
        require(beneficiary != address(0), "Beneficiary is zero address");
        require(
            stepsTimestamps.length == stepsAmount.length,
            "Timestamps and amounts are not the same length"
        );
        require(stepsTimestamps.length != 0, "Steps are empty");
    }

    /**
     * @notice Add a token vesting to a beneficiary
     * @param beneficiary The account that will receive the tokens
     * @param token The token that will be vested
     * @param amount The amount of tokens that will be vested
     */
    function addTokenVesting(
        address beneficiary,
        uint256 amount,
        uint64[] calldata stepsTimestamps,
        uint256[] calldata stepsAmount,
        address token
    ) public payable {
        _isValidVesting(beneficiary, stepsTimestamps, stepsAmount);

        // Check if the token can be transferred with the right amount
        IERC20 erc20Token = IERC20(token);
        require(
            erc20Token.balanceOf(_msgSender()) >= amount,
            "Not enough balance"
        );
        require(
            erc20Token.allowance(_msgSender(), address(this)) >= amount,
            "Not enough allowance"
        );

        // Add the new vesting
        VestingData storage vesting = _vestings[beneficiary].push();

        uint256 totalAmount;
        for (uint256 i = 0; i < stepsTimestamps.length; ++i) {
            require(
                stepsTimestamps[i] > block.timestamp,
                "Timestamp is in the past"
            );
            require(stepsAmount[i] != 0, "Amount is insufficent");

            vesting.steps.push(
                Nico({
                    amountReleased: stepsAmount[i],
                    isClaimed: false,
                    timestamp: stepsTimestamps[i]
                })
            );
            totalAmount += stepsAmount[i];
        }
        require(totalAmount == amount, "Incorrect amount");

        vesting.amount = amount;
        vesting.tokenType = TypeOfToken.TOKEN;
        vesting.tokenAddress = token;
        vesting.startTimestamp = uint64(block.timestamp);

        // If the beneficiary is not already in the list, add it
        if (!_isBeneficiary(beneficiary))
            _vestingBeneficiaries.push(beneficiary);

        bool success = erc20Token.transferFrom(
            _msgSender(),
            address(this),
            amount
        );
        require(success, "Transfer failed");
    }

    /**
     * @notice Add a native vesting to a beneficiary
     * @param beneficiary The account that will receive the tokens
     */
    function addNativeVesting(
        address beneficiary,
        uint64[] calldata stepsTimestamps,
        uint256[] calldata stepsAmount
    ) public payable {
        _isValidVesting(beneficiary, stepsTimestamps, stepsAmount);

        // Add the new vesting
        VestingData storage vesting = _vestings[beneficiary].push();

        uint256 totalAmount;
        for (uint256 i = 0; i < stepsTimestamps.length; ++i) {
            require(
                stepsTimestamps[i] > block.timestamp,
                "Timestamp is in the past"
            );
            require(stepsAmount[i] != 0, "Amount is insufficent");

            vesting.steps.push(
                Nico({
                    amountReleased: stepsAmount[i],
                    isClaimed: false,
                    timestamp: stepsTimestamps[i]
                })
            );
            totalAmount += stepsAmount[i];
        }
        require(totalAmount == msg.value, "Incorrect amount");

        vesting.amount = msg.value;
        vesting.tokenType = TypeOfToken.NATIVE;
        vesting.startTimestamp = uint64(block.timestamp);

        // If the beneficiary is not already in the list, add it
        if (!_isBeneficiary(beneficiary))
            _vestingBeneficiaries.push(beneficiary);
    }

    /**
     * @notice Get the amount of tokens that can be claimed from a vesting
     * @return The amount of tokens that can be claimed
     */
    function vestingAmount(VestingData memory vesting)
        public
        view
        returns (uint256)
    {
        uint256 value = 0;
        uint256 length = vesting.steps.length;
        for (uint64 i = vesting.stepIndex; i < length; ++i) {
            Nico memory step = vesting.steps[i];
            if (step.timestamp > block.timestamp) {
                break;
            }
            if (!step.isClaimed) {
                value += step.amountReleased;
            }
        }
        return value;
    }

    /**
     * @notice Claim a vesting
     * @param index The index of the vesting
     */
    function claimVesting(uint256 index) public {
        require(
            index < _vestings[_msgSender()].length,
            "Vesting doesn't exist"
        );
        VestingData storage vesting = _vestings[_msgSender()][index];

        uint256 value = 0;
        uint256 length = vesting.steps.length;
        for (uint64 i = vesting.stepIndex; i < length; ++i) {
            Nico storage step = vesting.steps[i];

            if (step.timestamp > block.timestamp) {
                vesting.stepIndex = i;
                break;
            }

            if (!step.isClaimed) {
                value += step.amountReleased;
                step.isClaimed = true;
            }
        }
        require(value != 0, "VestingAmount is zero");

        // If the vesting is finished, remove it from the list else update the amount claimed
        if (vesting.stepIndex == length - 1) {
            // remove the vesting from the list
            VestingData[] storage vestings = _vestings[_msgSender()];
            vestings[index] = vestings[vestings.length - 1];
            vestings.pop();

            // If the sender doesn't have any vesting, remove it from the list
            if (vestings.length == 0) {
                uint256 nbBeneficiaries = _vestingBeneficiaries.length;
                for (uint256 i = 0; i < nbBeneficiaries; ++i) {
                    if (_vestingBeneficiaries[i] == _msgSender()) {
                        _vestingBeneficiaries[i] = _vestingBeneficiaries[
                            nbBeneficiaries - 1
                        ];
                        _vestingBeneficiaries.pop();
                        break;
                    }
                }
            }
        } else {
            vesting.amountClaimed += value;
        }

        // Send the tokens to the sender
        if (vesting.tokenType == TypeOfToken.TOKEN) {
            bool success = IERC20(vesting.tokenAddress).transfer(
                _msgSender(),
                value
            );
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
        for (uint256 i = 0; i < length; ++i) {
            claimVesting(i);
        }
    }

    /**
     * @notice Get the list of addresses that have at least one vesting
     * @return The list of addresses
     */
    function getVestingsBeneficiaries() public view returns (address[] memory) {
        return _vestingBeneficiaries;
    }

    /**
     * @notice Get all the vestings from a beneficiary
     * @param beneficiary The account that have the vestings
     * @return The list of vestings data
     */
    function getVestings(address beneficiary)
        public
        view
        returns (VestingData[] memory)
    {
        return _vestings[beneficiary];
    }

    /**
     * @notice Get a vesting from a beneficiary
     * @param beneficiary The account that have the vesting
     * @param index The index of the vesting
     * @return The vesting data
     */
    function getVesting(address beneficiary, uint256 index)
        public
        view
        returns (VestingData memory)
    {
        require(index < _vestings[beneficiary].length, "Vesting doesn't exist");
        return _vestings[beneficiary][index];
    }

    /**
     * @notice Get the number of vestings from a beneficiary
     * @param beneficiary The account that have the vestings
     * @return The number of vestings
     */
    function getVestingNumber(address beneficiary)
        public
        view
        returns (uint256)
    {
        return _vestings[beneficiary].length;
    }

    /**
     * @dev Check if a beneficiary have a vesting
     * @return bool True if the beneficiary have a vesting
     */
    function _isBeneficiary(address beneficiary) internal view returns (bool) {
        uint256 nbBeneficiaries = _vestingBeneficiaries.length;
        for (uint256 i = 0; i < nbBeneficiaries; ++i) {
            if (_vestingBeneficiaries[i] == beneficiary) return true;
        }
        return false;
    }
}
