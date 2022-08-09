// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./interfaces/IStartonERC721.sol";

/// @title StartonERC721AuctionSale
/// @author Starton
/// @notice Contract that can sell ERC721 tokens through a auction
contract StartonERC721AuctionSale is Ownable {
    address private immutable _feeReceiver;

    IStartonERC721 public immutable token;

    uint256 public currentPrice;
    address public currentAuctionWinner;
    uint256 public startTime;
    uint256 public endTime;

    // If the token as been claimed or not yet
    bool private _claimed;

    /** @notice Event when a auction started */
    event AuctionStarted(uint256 startTime, uint256 endTime);

    /** @notice Event when a auction winner has claimed his prize */
    event AuctionClaimed(address indexed winner, uint256 price);

    /** @notice Event when a account bided on a auction */
    event Bided(address indexed bidder, uint256 amount);

    constructor(
        address tokenAddress,
        uint256 startingPrice,
        uint256 startTime_,
        uint256 endTime_,
        address feeReceiver
    ) {
        // Check if the address of the feeReceiver is correct
        require(feeReceiver != address(0), "Fee receiver address is not valid");
        _feeReceiver = feeReceiver;

        token = IStartonERC721(tokenAddress);
        currentPrice = startingPrice;
        startTime = startTime_;
        endTime = endTime_;

        // Set inititial states of the auction to no winner and not claimed
        currentAuctionWinner = address(0);
        _claimed = false;

        // Emit the event when the auction starts
        emit AuctionStarted(startTime, endTime);
    }

    /**
     * @notice Bid for the current auction
     */
    function bid() public payable {
        require(startTime <= block.timestamp, "Bidding not started");
        require(endTime >= block.timestamp, "Bidding finished");
        require(currentPrice <= msg.value, "Bid is too low");

        currentPrice = msg.value;
        currentAuctionWinner = _msgSender();
        emit Bided(_msgSender(), msg.value);
    }

    /**
     * @notice Claim the prize of the current auction
     * @param to The address to send the prize to
     * @param tokenURI The tokenURI of the token to be sent
     */
    function safeMint(address to, string memory tokenURI) public {
        require(
            to == currentAuctionWinner,
            "destination address isn't the current auction winner"
        );
        require(endTime < block.timestamp, "Minting hasn't finished yet");

        token.safeMint(to, tokenURI);
        _claimed = true;
        emit AuctionClaimed(to, currentPrice);
    }

    /**
     * @notice Start a new auction for a new NFT
     * @param startingPrice the starting price of the new auction
     * @param startTime_ the time when the auction starts
     * @param endTime_ the time when the auction ends
     */
    function startNewAuction(
        uint256 startingPrice,
        uint256 startTime_,
        uint256 endTime_
    ) public onlyOwner {
        require(_claimed, "The auction hasn't been claimed yet");

        // Reset the state variables for a new auction to begin
        _claimed = false;
        currentPrice = startingPrice;
        currentAuctionWinner = address(0);
        startTime = startTime_;
        endTime = endTime_;

        emit AuctionStarted(startTime, endTime);
    }

    /**
     * @notice Wsithdraw funds from the smart contract to the feeReceiver
     */
    function withdraw() public {
        payable(_feeReceiver).transfer(address(this).balance);
    }
}
