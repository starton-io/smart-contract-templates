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


// File contracts/utils/AStartonVesting.sol

pragma solidity 0.8.9;

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


// File contracts/StartonLinearVesting.sol


pragma solidity 0.8.9;


contract StartonLinearVesting is AStartonVesting {
    /** @notice Type of tokens that can be vested */
    enum TypeOfToken {
        TOKEN,
        NATIVE
    }

    /** @notice Structure of data that defines a vesting */
    struct VestingData {
        uint256 amount;
        TypeOfToken tokenType;
        address tokenAddress;
        uint64 startTimestamp;
        uint64 endTimestamp;
        uint256 amountClaimed;
    }

    // Mapping of vestings
    mapping(address => VestingData[]) private _vestings;

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
     * @param endTimestamp The timestamp when the vesting will end
     * @param amount The amount of tokens that will be vested
     * @param token The token that will be vested
     */
    function addVesting(
        address beneficiary,
        uint64 endTimestamp,
        uint256 amount,
        address token
    ) public payable {
        _isValidVesting(amount, endTimestamp, beneficiary);

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

        _vestings[beneficiary].push(
            VestingData({
                amount: amount,
                tokenType: TypeOfToken.TOKEN,
                tokenAddress: token,
                startTimestamp: uint64(block.timestamp),
                amountClaimed: 0,
                endTimestamp: endTimestamp
            })
        );

        // If the beneficiary is not already in the list, add it
        if (!_isBeneficiary(beneficiary))
            _vestingBeneficiaries.push(beneficiary);

        emit AddedVesting(
            beneficiary,
            getVestingNumber(beneficiary) - 1,
            token,
            amount,
            uint64(block.timestamp),
            endTimestamp
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
     * @param endTimestamp The timestamp when the vesting will end
     */
    function addVesting(address beneficiary, uint64 endTimestamp)
        public
        payable
    {
        _isValidVesting(msg.value, endTimestamp, beneficiary);

        _vestings[beneficiary].push(
            VestingData({
                amount: msg.value,
                tokenType: TypeOfToken.NATIVE,
                tokenAddress: address(0),
                startTimestamp: uint64(block.timestamp),
                amountClaimed: 0,
                endTimestamp: endTimestamp
            })
        );

        // If the beneficiary is not already in the list, add it
        if (!_isBeneficiary(beneficiary))
            _vestingBeneficiaries.push(beneficiary);

        emit AddedVesting(
            beneficiary,
            getVestingNumber(beneficiary) - 1,
            address(0),
            msg.value,
            uint64(block.timestamp),
            endTimestamp
        );
    }

    /**
     * @notice Get the amount of tokens that can be claimed from a vesting
     * @param amount The total amount of tokens that can be claimed
     * @param startTimestamp The timestamp when the vesting started
     * @param endTimestamp The timestamp when the vesting will end
     * @param amountClaimed The amount of tokens that have already been claimed
     * @return value The amount of tokens that can be claimed
     */
    function vestingAmount(
        uint256 amount,
        uint64 startTimestamp,
        uint64 endTimestamp,
        uint256 amountClaimed
    ) public view returns (uint256 value) {
        // If the vesting is finished, return the amount of tokens left
        // else returns the amount of tokens that can be claimed at the current time
        if (endTimestamp > block.timestamp) {
            value =
                (amount * (block.timestamp - startTimestamp)) /
                (endTimestamp - startTimestamp) -
                amountClaimed;
        } else {
            value = amount - amountClaimed;
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
            vesting.amountClaimed
        );
        require(value != 0, "VestingAmount is zero");

        emit ClaimedVesting(
            _msgSender(),
            index,
            vesting.tokenAddress,
            uint64(block.timestamp),
            value
        );

        // If the vesting is finished, remove it from the list else update the amount claimed
        if (vesting.endTimestamp > block.timestamp) {
            _vestings[_msgSender()][index].amountClaimed =
                vesting.amountClaimed +
                value;
        } else {
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
                vesting.tokenAddress,
                uint64(block.timestamp),
                vesting.amount
            );
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
     * @param amount The amount of tokens
     * @param endTimestamp The end timestamp of the vesting
     * @param beneficiary The beneficiary of the vesting
     */
    function _isValidVesting(
        uint256 amount,
        uint64 endTimestamp,
        address beneficiary
    ) internal view {
        require(amount != 0, "Amount is insufficent");
        require(
            endTimestamp >= block.timestamp,
            "End timestamp is in the past"
        );
        require(beneficiary != address(0), "beneficiary is zero address");
    }
}
