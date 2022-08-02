// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./StartonERC721MetaTransaction.sol";

contract StartonERC721AuctionSale is Ownable {
    address private immutable _feeReceiver;

    StartonERC721MetaTransaction public token;

    uint256 public currentPrice;
    address public currentAuctionWinner;
    uint256 public startTime;
    uint256 public endTime;
    bool private _claimed;

    constructor(
        address tokenAddress,
        uint256 startingPrice,
        uint256 startTime_,
        uint256 endTime_,
        address feeReceiver
    ) {
        require(feeReceiver != address(0), "Fee receiver address is not valid");
        _feeReceiver = feeReceiver;

        token = StartonERC721MetaTransaction(tokenAddress);
        currentPrice = startingPrice;
        startTime = startTime_;
        endTime = endTime_;
        currentAuctionWinner = address(0);
        _claimed = false;
    }

    function bid() public payable {
        require(startTime <= block.timestamp, "Bidding not started");
        require(endTime >= block.timestamp, "Bidding finished");
        require(currentPrice <= msg.value, "Bid is too low");

        currentPrice = msg.value;
        currentAuctionWinner = _msgSender();
    }

    function safeMint(address to, string memory tokenURI) public {
        require(
            to == currentAuctionWinner,
            "destination address isn't the current auction winner"
        );
        require(endTime < block.timestamp, "Minting hasn't finished yet");

        token.safeMint(to, tokenURI);
        _claimed = true;
    }

    function startNewAuction(
        uint256 startingPrice,
        uint256 startTime_,
        uint256 endTime_
    ) public onlyOwner {
        require(_claimed, "The auction hasn't been claimed yet");

        _claimed = false;
        currentPrice = startingPrice;
        currentAuctionWinner = address(0);
        startTime = startTime_;
        endTime = endTime_;
    }

    function withdraw() public {
        payable(_feeReceiver).transfer(address(this).balance);
    }
}
