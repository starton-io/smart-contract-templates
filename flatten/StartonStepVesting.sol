// Sources flattened with hardhat v2.10.1 https://hardhat.org

// File @openzeppelin/contracts/token/ERC20/IERC20.sol@v4.7.1

// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.6.0) (token/ERC20/IERC20.sol)

pragma solidity ^0.8.0;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);

    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `from` to `to` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);
}


// File @openzeppelin/contracts/utils/Context.sol@v4.7.1

// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)

pragma solidity ^0.8.0;

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}


// File contracts/StartonStepVesting.sol


pragma solidity 0.8.9;


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
        Nico[] steps;
    }

    // List of the addresses that have a vesting
    address[] private _vestingBeneficiaries;

    // Mapping of vestings
    mapping(address => VestingData[]) private _vestings;

    constructor() {}

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
        uint256 length = stepsTimestamps.length;
        for (uint256 i = 0; i < length; ++i) {
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
        uint256 length = stepsTimestamps.length;
        for (uint256 i = 0; i < length; ++i) {
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
        TypeOfToken tokenType = vesting.tokenType;
        address tokenAddress = vesting.tokenAddress;

        uint256 value;
        uint256 length = vesting.steps.length;
        for (
            vesting.stepIndex = 0;
            vesting.stepIndex < length;
            ++vesting.stepIndex
        ) {
            Nico storage step = vesting.steps[vesting.stepIndex];

            if (step.timestamp > block.timestamp) {
                break;
            }

            if (!step.isClaimed) {
                value += step.amountReleased;
                step.isClaimed = true;
            }
        }
        require(value != 0, "VestingAmount is zero");

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
}
