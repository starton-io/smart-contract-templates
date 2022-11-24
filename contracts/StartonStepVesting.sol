// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./utils/AStartonVesting.sol";

contract StartonStepVesting is AStartonVesting {
    /** @notice Type of tokens that can be vested */
    enum TypeOfToken {
        TOKEN,
        NATIVE
    }

    /** @notice Structure of data that defines a vesting step */
    struct VestingStep {
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
        VestingStep[] steps;
    }

    // Mapping of vestings
    mapping(address => VestingData[]) private _vestings;

    /** @notice Event emitted when a new vesting has been added */
    event AddedVesting(
        address indexed beneficiary,
        uint256 indexed index,
        address token,
        uint256 totalAmount,
        uint64 startTimestamp
    );

    /** @notice Event emitted when a vesting has been claimed */
    event ClaimedVesting(
        address indexed beneficiary,
        uint256 indexed index,
        address token,
        uint64 timestamp,
        uint256 amountClaimed
    );

    /** @notice Event emitted when a vesting has been fully claimed */
    event FinishedVesting(
        address indexed beneficiary,
        uint256 indexed index,
        address token,
        uint64 timestamp,
        uint256 totalAmount
    );

    constructor() {}

    /**
     * @notice Add a token vesting to a beneficiary
     * @param beneficiary The account that will receive the tokens
     * @param amount The amount of tokens that will be vested
     * @param stepsTimestamps Array of timestamps for every steps
     * @param stepsAmount Array of amounts of tokens to be vested for every steps
     * @param token The token that will be vested
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

        // Add all the steps into the current vesting
        _addSteps(vesting, stepsTimestamps, stepsAmount, amount);

        vesting.amount = amount;
        vesting.tokenType = TypeOfToken.TOKEN;
        vesting.tokenAddress = token;
        vesting.startTimestamp = uint64(block.timestamp);

        // If the beneficiary is not already in the list, add it
        if (!_isBeneficiary(beneficiary))
            _vestingBeneficiaries.push(beneficiary);

        emit AddedVesting(
            beneficiary,
            _vestings[beneficiary].length - 1,
            token,
            amount,
            uint64(block.timestamp)
        );

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
     * @param stepsTimestamps Array of timestamps for every steps
     * @param stepsAmount Array of amounts of tokens to be vested for every steps
     */
    function addNativeVesting(
        address beneficiary,
        uint64[] calldata stepsTimestamps,
        uint256[] calldata stepsAmount
    ) public payable {
        _isValidVesting(beneficiary, stepsTimestamps, stepsAmount);

        // Add the new vesting
        VestingData storage vesting = _vestings[beneficiary].push();

        // Add all the steps into the current vesting
        _addSteps(vesting, stepsTimestamps, stepsAmount, msg.value);

        vesting.amount = msg.value;
        vesting.tokenType = TypeOfToken.NATIVE;
        vesting.startTimestamp = uint64(block.timestamp);

        // If the beneficiary is not already in the list, add it
        if (!_isBeneficiary(beneficiary))
            _vestingBeneficiaries.push(beneficiary);

        emit AddedVesting(
            beneficiary,
            _vestings[beneficiary].length - 1,
            address(0),
            msg.value,
            uint64(block.timestamp)
        );
    }

    /**
     * @notice Get the amount of tokens that can be claimed from a vesting
     * @param steps Array of steps of a vesting
     * @param stepIndex Index of the step to start from
     * @return value The amount of tokens that can be claimed
     */
    function vestingAmount(VestingStep[] memory steps, uint64 stepIndex)
        public
        view
        returns (uint256 value)
    {
        uint256 length = steps.length;
        for (uint64 i = stepIndex; i < length; ++i) {
            VestingStep memory step = steps[i];
            if (step.timestamp > block.timestamp) {
                break;
            }
            if (!step.isClaimed) {
                value += step.amountReleased;
            }
        }
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

        TypeOfToken tokenType = vesting.tokenType;
        address tokenAddress = vesting.tokenAddress;

        uint256 value = 0;
        uint256 length = vesting.steps.length;
        for (
            vesting.stepIndex = 0;
            vesting.stepIndex < length;
            ++vesting.stepIndex
        ) {
            VestingStep storage step = vesting.steps[vesting.stepIndex];

            if (step.timestamp > block.timestamp) {
                break;
            }

            if (!step.isClaimed) {
                value += step.amountReleased;
                step.isClaimed = true;
            }
        }
        require(value != 0, "VestingAmount is zero");

        emit ClaimedVesting(
            _msgSender(),
            index,
            tokenAddress,
            uint64(block.timestamp),
            value
        );

        // If the vesting is finished, remove it from the list else update the amount claimed
        if (vesting.stepIndex == length) {
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
            emit FinishedVesting(
                _msgSender(),
                index,
                tokenAddress,
                uint64(block.timestamp),
                vesting.amount
            );
        }

        // Send the tokens to the sender
        if (tokenType == TypeOfToken.TOKEN) {
            bool success = IERC20(tokenAddress).transfer(_msgSender(), value);
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
     * @dev Reverts when the amount is insufficent or the timestamp is in the past
     * @param beneficiary The beneficiary of the vesting
     * @param stepsTimestamps Array of timestamps for every steps
     * @param stepsAmount Array of amounts of tokens to be vested for every steps
     */
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
     * @dev Add steps to a vesting and check if everything is correct
     * @param vesting The vesting to add steps to
     * @param stepsTimestamps Array of timestamps for every steps
     * @param stepsAmount Array of amounts of tokens to be vested for every steps
     * @param expectedAmount The expected amount of tokens to be vested
     */
    function _addSteps(
        VestingData storage vesting,
        uint64[] calldata stepsTimestamps,
        uint256[] calldata stepsAmount,
        uint256 expectedAmount
    ) internal {
        uint64 lastTimestamp = 0;
        uint256 totalAmount = 0;
        uint256 length = stepsTimestamps.length;
        for (uint256 i = 0; i < length; ++i) {
            require(
                stepsTimestamps[i] > block.timestamp,
                "Timestamp is in the past"
            );
            require(stepsAmount[i] != 0, "Amount is insufficent");
            require(
                stepsTimestamps[i] > lastTimestamp,
                "Timestamps aren't in order"
            );

            lastTimestamp = stepsTimestamps[i];
            vesting.steps.push(
                VestingStep({
                    amountReleased: stepsAmount[i],
                    isClaimed: false,
                    timestamp: stepsTimestamps[i]
                })
            );
            totalAmount += stepsAmount[i];
        }
        require(totalAmount == expectedAmount, "Incorrect amount");
    }
}
