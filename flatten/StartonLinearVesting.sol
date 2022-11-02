// Sources flattened with hardhat v2.10.1 https://hardhat.org

// File @openzeppelin/contracts/utils/math/SafeMath.sol@v4.7.1

// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.6.0) (utils/math/SafeMath.sol)

pragma solidity ^0.8.0;

// CAUTION
// This version of SafeMath should only be used with Solidity 0.8 or later,
// because it relies on the compiler's built in overflow checks.

/**
 * @dev Wrappers over Solidity's arithmetic operations.
 *
 * NOTE: `SafeMath` is generally not needed starting with Solidity 0.8, since the compiler
 * now has built in overflow checking.
 */
library SafeMath {
    /**
     * @dev Returns the addition of two unsigned integers, with an overflow flag.
     *
     * _Available since v3.4._
     */
    function tryAdd(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            uint256 c = a + b;
            if (c < a) return (false, 0);
            return (true, c);
        }
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, with an overflow flag.
     *
     * _Available since v3.4._
     */
    function trySub(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b > a) return (false, 0);
            return (true, a - b);
        }
    }

    /**
     * @dev Returns the multiplication of two unsigned integers, with an overflow flag.
     *
     * _Available since v3.4._
     */
    function tryMul(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
            // benefit is lost if 'b' is also tested.
            // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522
            if (a == 0) return (true, 0);
            uint256 c = a * b;
            if (c / a != b) return (false, 0);
            return (true, c);
        }
    }

    /**
     * @dev Returns the division of two unsigned integers, with a division by zero flag.
     *
     * _Available since v3.4._
     */
    function tryDiv(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b == 0) return (false, 0);
            return (true, a / b);
        }
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers, with a division by zero flag.
     *
     * _Available since v3.4._
     */
    function tryMod(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b == 0) return (false, 0);
            return (true, a % b);
        }
    }

    /**
     * @dev Returns the addition of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `+` operator.
     *
     * Requirements:
     *
     * - Addition cannot overflow.
     */
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        return a + b;
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting on
     * overflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     *
     * - Subtraction cannot overflow.
     */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        return a - b;
    }

    /**
     * @dev Returns the multiplication of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `*` operator.
     *
     * Requirements:
     *
     * - Multiplication cannot overflow.
     */
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        return a * b;
    }

    /**
     * @dev Returns the integer division of two unsigned integers, reverting on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator.
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return a / b;
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * reverting when dividing by zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        return a % b;
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on
     * overflow (when the result is negative).
     *
     * CAUTION: This function is deprecated because it requires allocating memory for the error
     * message unnecessarily. For custom revert reasons use {trySub}.
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     *
     * - Subtraction cannot overflow.
     */
    function sub(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        unchecked {
            require(b <= a, errorMessage);
            return a - b;
        }
    }

    /**
     * @dev Returns the integer division of two unsigned integers, reverting with custom message on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function div(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        unchecked {
            require(b > 0, errorMessage);
            return a / b;
        }
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * reverting with custom message when dividing by zero.
     *
     * CAUTION: This function is deprecated because it requires allocating memory for the error
     * message unnecessarily. For custom revert reasons use {tryMod}.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function mod(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        unchecked {
            require(b > 0, errorMessage);
            return a % b;
        }
    }
}


// File @openzeppelin/contracts/token/ERC20/IERC20.sol@v4.7.1

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


// File @openzeppelin/contracts/utils/Address.sol@v4.7.1

// OpenZeppelin Contracts (last updated v4.7.0) (utils/Address.sol)

pragma solidity ^0.8.1;

/**
 * @dev Collection of functions related to the address type
 */
library Address {
    /**
     * @dev Returns true if `account` is a contract.
     *
     * [IMPORTANT]
     * ====
     * It is unsafe to assume that an address for which this function returns
     * false is an externally-owned account (EOA) and not a contract.
     *
     * Among others, `isContract` will return false for the following
     * types of addresses:
     *
     *  - an externally-owned account
     *  - a contract in construction
     *  - an address where a contract will be created
     *  - an address where a contract lived, but was destroyed
     * ====
     *
     * [IMPORTANT]
     * ====
     * You shouldn't rely on `isContract` to protect against flash loan attacks!
     *
     * Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets
     * like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract
     * constructor.
     * ====
     */
    function isContract(address account) internal view returns (bool) {
        // This method relies on extcodesize/address.code.length, which returns 0
        // for contracts in construction, since the code is only stored at the end
        // of the constructor execution.

        return account.code.length > 0;
    }

    /**
     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to
     * `recipient`, forwarding all available gas and reverting on errors.
     *
     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost
     * of certain opcodes, possibly making contracts go over the 2300 gas limit
     * imposed by `transfer`, making them unable to receive funds via
     * `transfer`. {sendValue} removes this limitation.
     *
     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].
     *
     * IMPORTANT: because control is transferred to `recipient`, care must be
     * taken to not create reentrancy vulnerabilities. Consider using
     * {ReentrancyGuard} or the
     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].
     */
    function sendValue(address payable recipient, uint256 amount) internal {
        require(address(this).balance >= amount, "Address: insufficient balance");

        (bool success, ) = recipient.call{value: amount}("");
        require(success, "Address: unable to send value, recipient may have reverted");
    }

    /**
     * @dev Performs a Solidity function call using a low level `call`. A
     * plain `call` is an unsafe replacement for a function call: use this
     * function instead.
     *
     * If `target` reverts with a revert reason, it is bubbled up by this
     * function (like regular Solidity function calls).
     *
     * Returns the raw returned data. To convert to the expected return value,
     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].
     *
     * Requirements:
     *
     * - `target` must be a contract.
     * - calling `target` with `data` must not revert.
     *
     * _Available since v3.1._
     */
    function functionCall(address target, bytes memory data) internal returns (bytes memory) {
        return functionCall(target, data, "Address: low-level call failed");
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with
     * `errorMessage` as a fallback revert reason when `target` reverts.
     *
     * _Available since v3.1._
     */
    function functionCall(
        address target,
        bytes memory data,
        string memory errorMessage
    ) internal returns (bytes memory) {
        return functionCallWithValue(target, data, 0, errorMessage);
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],
     * but also transferring `value` wei to `target`.
     *
     * Requirements:
     *
     * - the calling contract must have an ETH balance of at least `value`.
     * - the called Solidity function must be `payable`.
     *
     * _Available since v3.1._
     */
    function functionCallWithValue(
        address target,
        bytes memory data,
        uint256 value
    ) internal returns (bytes memory) {
        return functionCallWithValue(target, data, value, "Address: low-level call with value failed");
    }

    /**
     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but
     * with `errorMessage` as a fallback revert reason when `target` reverts.
     *
     * _Available since v3.1._
     */
    function functionCallWithValue(
        address target,
        bytes memory data,
        uint256 value,
        string memory errorMessage
    ) internal returns (bytes memory) {
        require(address(this).balance >= value, "Address: insufficient balance for call");
        require(isContract(target), "Address: call to non-contract");

        (bool success, bytes memory returndata) = target.call{value: value}(data);
        return verifyCallResult(success, returndata, errorMessage);
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],
     * but performing a static call.
     *
     * _Available since v3.3._
     */
    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {
        return functionStaticCall(target, data, "Address: low-level static call failed");
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],
     * but performing a static call.
     *
     * _Available since v3.3._
     */
    function functionStaticCall(
        address target,
        bytes memory data,
        string memory errorMessage
    ) internal view returns (bytes memory) {
        require(isContract(target), "Address: static call to non-contract");

        (bool success, bytes memory returndata) = target.staticcall(data);
        return verifyCallResult(success, returndata, errorMessage);
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],
     * but performing a delegate call.
     *
     * _Available since v3.4._
     */
    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {
        return functionDelegateCall(target, data, "Address: low-level delegate call failed");
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],
     * but performing a delegate call.
     *
     * _Available since v3.4._
     */
    function functionDelegateCall(
        address target,
        bytes memory data,
        string memory errorMessage
    ) internal returns (bytes memory) {
        require(isContract(target), "Address: delegate call to non-contract");

        (bool success, bytes memory returndata) = target.delegatecall(data);
        return verifyCallResult(success, returndata, errorMessage);
    }

    /**
     * @dev Tool to verifies that a low level call was successful, and revert if it wasn't, either by bubbling the
     * revert reason using the provided one.
     *
     * _Available since v4.3._
     */
    function verifyCallResult(
        bool success,
        bytes memory returndata,
        string memory errorMessage
    ) internal pure returns (bytes memory) {
        if (success) {
            return returndata;
        } else {
            // Look for revert reason and bubble it up if present
            if (returndata.length > 0) {
                // The easiest way to bubble the revert reason is using memory via assembly
                /// @solidity memory-safe-assembly
                assembly {
                    let returndata_size := mload(returndata)
                    revert(add(32, returndata), returndata_size)
                }
            } else {
                revert(errorMessage);
            }
        }
    }
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


// File contracts/StartonLinearVesting.sol


pragma solidity 0.8.9;




contract StartonLinearVesting is Context {
    using SafeMath for uint256;

    /** @notice Type of tokens that can be vested */
    enum TypeOfToken {
        TOKEN,
        NATIVE
    }

    /** @notice Structure of data that defines a vesting */
    struct VestingData {
        uint256 amount;
        TypeOfToken tokenType;
        IERC20 token;
        uint64 startTimestamp;
        uint64 endTimestamp;
        uint256 amountClaimed;
    }

    // List of the addresses that have a vesting
    address[] private _vestingBeneficiaries;

    // Mapping of vestings
    mapping(address => VestingData[]) private _vestings;

    /** @dev Modifier that reverts when the amount is insufficent or the timestamp is in the past */
    modifier isValidVesting(uint256 amount, uint64 endTimestamp) {
        require(amount != 0, "Amount is insufficent");
        require(
            endTimestamp >= block.timestamp,
            "End timestamp is in the past"
        );
        _;
    }

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
        uint256 amountClaimed
    );

    /** @notice Event emitted when a vesting has been fully claimed */
    event FinishedVesting(
        address indexed beneficiary,
        uint256 indexed index,
        address token,
        uint256 totalAmount
    );

    constructor() {}

    /**
     * @notice Add a token vesting to a beneficiary
     * @param beneficiary The account that will receive the tokens
     * @param token The token that will be vested
     * @param amount The amount of tokens that will be vested
     * @param endTimestamp The timestamp when the vesting will end
     */
    function addTokenVesting(
        address beneficiary,
        uint64 endTimestamp,
        uint256 amount,
        address token
    ) public payable isValidVesting(amount, endTimestamp) {
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
                token: erc20Token,
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
            getVestingsNumber(beneficiary) - 1,
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
    function addNativeVesting(address beneficiary, uint64 endTimestamp)
        public
        payable
        isValidVesting(msg.value, endTimestamp)
    {
        _vestings[beneficiary].push(
            VestingData({
                amount: msg.value,
                tokenType: TypeOfToken.NATIVE,
                token: IERC20(address(0)),
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
            getVestingsNumber(beneficiary) - 1,
            address(0),
            msg.value,
            uint64(block.timestamp),
            endTimestamp
        );
    }

    /**
     * @notice Get the amount of tokens that can be claimed from a vesting
     * @return The amount of tokens that can be claimed
     */
    function getClaimValue(VestingData memory vesting)
        public
        view
        returns (uint256)
    {
        uint256 value;

        // If the vesting is finished, return the amount of tokens left
        // else returns the amount of tokens that can be claimed at the current time
        if (vesting.endTimestamp > block.timestamp) {
            value = vesting
                .amount
                .mul(block.timestamp.sub(vesting.startTimestamp))
                .div(vesting.endTimestamp - vesting.startTimestamp)
                .sub(vesting.amountClaimed);
        } else {
            value = vesting.amount - vesting.amountClaimed;
        }
        return value;
    }

    /**
     * @notice Claim a vesting
     * @param index The index of the vesting
     */
    function claimVesting(uint256 index) public {
        VestingData memory vesting = getVesting(_msgSender(), index);
        uint256 value = getClaimValue(vesting);

        emit ClaimedVesting(_msgSender(), index, address(vesting.token), value);

        // If the vesting is finished, remove it from the list else update the amount claimed
        if (vesting.endTimestamp > block.timestamp) {
            _vestings[_msgSender()][index].amountClaimed = vesting
                .amountClaimed
                .add(value);
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
            emit FinishedVesting(_msgSender(), index, address(vesting.token), vesting.amount);
        }

        // Send the tokens to the sender
        if (vesting.tokenType == TypeOfToken.TOKEN) {
            bool success = vesting.token.transfer(_msgSender(), value);
            require(success, "Transfer failed");
        } else {
            Address.sendValue(payable(_msgSender()), value);
        }
    }

    /**
     * @notice Claim all the vestings of the sender
     */
    function claimAllVestings() public {
        uint256 length = _vestings[_msgSender()].length;
        for (uint256 i = 0; i < length; ++i) claimVesting(i);
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
    function getVestingsNumber(address beneficiary)
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
        for (uint256 i = 0; i < nbBeneficiaries; ++i)
            if (_vestingBeneficiaries[i] == beneficiary) return true;
        return false;
    }
}
