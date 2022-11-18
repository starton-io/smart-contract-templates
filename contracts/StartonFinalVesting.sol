// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Context.sol";

contract StartonFinalVesting is Context {
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
    }

    // List of the addresses that have a vesting
    address[] private _vestingBeneficiaries;

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
    function addNativeVesting(address beneficiary, uint64 endTimestamp)
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
     * @param vesting The vesting to get the amount from
     * @return value The amount of tokens that can be claimed
     */
    function vestingAmount(VestingData memory vesting)
        public
        view
        returns (uint256 value)
    {
        // If the vesting is finished, return the amount of tokens left
        // else returns the amount of tokens that can be claimed at the current time
        if (block.timestamp >= vesting.endTimestamp) {
            value = vesting.amount;
        } else {
            value = 0;
        }
    }

    /**
     * @notice Claim a vesting
     * @param index The index of the vesting
     */
    function claimVesting(uint256 index) public {
        VestingData memory vesting = getVesting(_msgSender(), index);
        uint256 value = vestingAmount(vesting);
        require(value != 0, "VestingAmount is zero");

        emit ClaimedVesting(
            _msgSender(),
            index,
            vesting.tokenAddress,
            uint64(block.timestamp),
            value
        );

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
