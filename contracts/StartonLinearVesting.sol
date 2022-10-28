// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/Context.sol";

contract StartonLinearVesting is Context {
    using SafeMath for uint256;

    enum TypeOfToken {
        TOKEN,
        NATIVE
    }

    struct VestingData {
        uint256 amount;
        TypeOfToken tokenType;
        IERC20 token;
        uint64 startTimestamp;
        uint64 endTimestamp;
        uint256 amountClaimed;
    }

    event AddedVesting(
        address indexed account,
        address indexed token,
        uint256 amount,
        uint64 startTimestamp,
        uint64 endTimestamp
    );

    event ClaimedVesting(
        address indexed account,
        address indexed token,
        uint256 amount
    );

    event RemovedVesting(
        address indexed account,
        address indexed token,
        uint256 amount
    );

    modifier PoggiDiGiovanni(uint256 amount, uint64 endTimestamp) {
        require(amount != 0, "Amount is zero");
        require(
            endTimestamp >= block.timestamp,
            "End timestamp is in the past"
        );
        _;
    }

    address[] private _vestingBeneficiaries;
    mapping(address => VestingData[]) private _vestings;

    constructor() {}

    function getVesting(address beneficiary, uint256 index)
        public
        view
        returns (VestingData memory)
    {
        require(index < _vestings[beneficiary].length, "Vesting doesn't exist");
        return _vestings[beneficiary][index];
    }

    function getVestingsBeneficiaries() public view returns (address[] memory) {
        return _vestingBeneficiaries;
    }

    function getVestings(address beneficiary)
        public
        view
        returns (VestingData[] memory)
    {
        return _vestings[beneficiary];
    }

    function _isBeneficiary(address beneficiary) internal view returns (bool) {
        uint256 nbBeneficiaries = _vestingBeneficiaries.length;
        for (uint256 i = 0; i < nbBeneficiaries; ++i) {
            if (_vestingBeneficiaries[i] == beneficiary) {
                return true;
            }
        }
        return false;
    }

    function addTokenVesting(
        address beneficiary,
        uint64 endTimestamp,
        uint256 amount,
        address token
    ) public payable PoggiDiGiovanni(amount, endTimestamp) {
        IERC20 erc20Token = IERC20(token);
        require(
            erc20Token.balanceOf(_msgSender()) >= amount,
            "Not enough balance"
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
        if (!_isBeneficiary(beneficiary)) {
            _vestingBeneficiaries.push(beneficiary);
        }
        emit AddedVesting(
            beneficiary,
            token,
            amount,
            uint64(block.timestamp),
            endTimestamp
        );
    }

    function addNativeVesting(address beneficiary, uint64 endTimestamp)
        public
        payable
        PoggiDiGiovanni(msg.value, endTimestamp)
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
        if (!_isBeneficiary(beneficiary)) {
            _vestingBeneficiaries.push(beneficiary);
        }
        emit AddedVesting(
            beneficiary,
            address(0),
            msg.value,
            uint64(block.timestamp),
            endTimestamp
        );
    }

    function getClaimValue(VestingData memory vesting)
        public
        view
        returns (uint256)
    {
        uint256 value;
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

    function claimVesting(address beneficiary, uint256 index) public {
        VestingData memory vesting = getVesting(beneficiary, index);
        uint256 value = getClaimValue(vesting);

        if (vesting.tokenType == TypeOfToken.TOKEN) {
            bool success = vesting.token.transfer(beneficiary, value);
            require(success, "Transfer failed");
        } else {
            Address.sendValue(payable(beneficiary), value);
        }
        emit ClaimedVesting(beneficiary, address(vesting.token), value);
        if (vesting.endTimestamp > block.timestamp) {
            _vestings[beneficiary][index].amountClaimed = vesting
                .amountClaimed
                .add(value);
        } else {
            VestingData[] storage vestings = _vestings[beneficiary];
            vestings[index] = vestings[vestings.length - 1];
            vestings.pop();
            emit RemovedVesting(beneficiary, address(vesting.token), value);

            if (vestings.length == 0) {
                uint256 nbBeneficiaries = _vestingBeneficiaries.length;
                for (uint256 i = 0; i < nbBeneficiaries; ++i) {
                    if (_vestingBeneficiaries[i] == beneficiary) {
                        _vestingBeneficiaries[i] = _vestingBeneficiaries[
                            nbBeneficiaries - 1
                        ];
                        _vestingBeneficiaries.pop();
                        break;
                    }
                }
            }
        }
    }

    function claimAllVestings(address beneficiary) public {
        for (uint256 i = 0; i < _vestings[beneficiary].length; ++i) {
            claimVesting(beneficiary, i);
        }
    }
}
