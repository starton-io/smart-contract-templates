// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/Context.sol";

contract StartonVestingLinear is Context {
    using SafeMath for uint256;

    enum TypeOfToken {
        ERC20,
        NATIVE
    }

    struct VestingData {
        uint256 amount;
        TypeOfToken tokenType;
        IERC20 token;
        uint64 startTimestamp;
        uint64 endTimestamp;
        address beneficiary;
        uint256 amountClaimed;
    }

    address[] private _vestingBeneficiaries;
    mapping(address => VestingData[]) private _vestings;

    constructor() {}

    function getVesting(address beneficiary, uint256 index)
        public
        view
        returns (VestingData memory)
    {
        require(index < _vestings[beneficiary].length, "Index out of bounds");
        return _vestings[beneficiary][index];
    }

    function getVestingsBeneficiary() public view returns (address[] memory) {
        return _vestingBeneficiaries;
    }

    function addVesting(
        address beneficiary,
        uint64 endTimestamp,
        uint256 amount,
        address token
    ) public payable {
        require(amount != 0, "Amount is zero");

        IERC20 erc20Token = IERC20(token);
        require(
            erc20Token.balanceOf(_msgSender()) >= amount,
            "Not enough tokens"
        );
        require(
            erc20Token.allowance(_msgSender(), address(this)) >= amount,
            "Not enough allowance"
        );

        bool success = erc20Token.transferFrom(
            _msgSender(),
            address(this),
            amount
        );
        require(success, "Transfer failed");

        _vestings[_msgSender()].push(
            VestingData({
                amount: amount,
                tokenType: TypeOfToken.ERC20,
                token: erc20Token,
                startTimestamp: uint64(block.timestamp),
                amountClaimed: 0,
                endTimestamp: endTimestamp,
                beneficiary: beneficiary
            })
        );
        _vestingBeneficiaries.push(beneficiary);
    }

    function addNativeVesting(address beneficiary, uint64 endTimestamp)
        public
        payable
    {
        require(msg.value != 0, "Amount is zero");
        require(endTimestamp > block.timestamp, "End timestamp is in the past");

        _vestings[_msgSender()].push(
            VestingData({
                amount: msg.value,
                tokenType: TypeOfToken.NATIVE,
                token: IERC20(address(0)),
                startTimestamp: uint64(block.timestamp),
                amountClaimed: 0,
                endTimestamp: endTimestamp,
                beneficiary: beneficiary
            })
        );
        _vestingBeneficiaries.push(beneficiary);
    }

    function claimVesting(uint256 index) public {
        require(index < _vestings[_msgSender()].length, "Index out of bounds");

        VestingData memory vesting = _vestings[_msgSender()][index];

        uint256 value;
        if (vesting.endTimestamp < block.timestamp) {
            value = vesting
                .amount
                .mul(block.timestamp.sub(vesting.startTimestamp))
                .div(vesting.endTimestamp - vesting.startTimestamp)
                .sub(vesting.amountClaimed);
        } else {
            value = vesting.amount - vesting.amountClaimed;
        }

        if (vesting.tokenType == TypeOfToken.ERC20) {
            bool success = vesting.token.transfer(vesting.beneficiary, value);
            require(success, "Transfer failed");
        } else {
            Address.sendValue(payable(vesting.beneficiary), value);
        }
        vesting.amountClaimed = vesting.amountClaimed.add(value);
    }

    function claimAllVestings() public {
        for (uint256 i = 0; i < _vestings[_msgSender()].length; ++i) {
            claimVesting(i);
        }
    }
}
