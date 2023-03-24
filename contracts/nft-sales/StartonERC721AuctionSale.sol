// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "../interfaces/IStartonERC721.sol";

/// @title StartonERC721AuctionSale
/// @author Starton
/// @notice Sell ERC721 tokens through an auction
contract StartonERC721AuctionSale is Ownable, ReentrancyGuard {
    address private immutable _feeReceiver;

    IStartonERC721 public immutable token;

    uint256 public currentPrice;
    uint256 public minPriceDifference;
    address public currentAuctionWinner;
    uint256 public startTime;
    uint256 public endTime;

    // Information of the token to be sold
    string public tokenURI;

    // If the token as been claimed or not yet
    bool private _claimed;

    /** @notice Event emitted when an auction started */
    event AuctionStarted(uint256 startTime, uint256 endTime);

    /** @notice Event emitted when an auction winner has claimed his prize */
    event AuctionClaimed(address indexed winner, uint256 price);

    /** @notice Event emitted when an account bided on an auction */
    event Bided(address indexed bidder, uint256 amount);

    constructor(
        address definitiveTokenAddress,
        address definitiveFeeReceiver,
        uint256 initialStartingPrice,
        uint256 initialMinPriceDifference,
        uint256 initialStartTime,
        uint256 initialEndTime,
        string memory initialTokenURI
    ) {
        // Check if the end time is after the starting time
        require(initialStartTime < initialEndTime, "End time after start time");

        token = IStartonERC721(definitiveTokenAddress);
        _feeReceiver = definitiveFeeReceiver;
        currentPrice = initialStartingPrice;
        minPriceDifference = initialMinPriceDifference;
        startTime = initialStartTime;
        endTime = initialEndTime;
        tokenURI = initialTokenURI;

        // Set inititial states of the auction to no winner and not claimed
        currentAuctionWinner = address(0);
        _claimed = false;

        // Emit the event when the auction starts
        emit AuctionStarted(initialStartTime, initialEndTime);
    }

    /**
     * @notice Bid for the current auction
     */
    function bid() public payable nonReentrant {
        require(startTime <= block.timestamp, "Bidding not started");
        require(endTime >= block.timestamp, "Bidding finished");
        require(currentPrice + minPriceDifference <= msg.value, "Bid is too low");

        // Store the old auction winner and price
        address oldAuctionWinner = currentAuctionWinner;
        uint256 oldPrice = currentPrice;

        currentPrice = msg.value;
        currentAuctionWinner = _msgSender();
        emit Bided(_msgSender(), msg.value);

        // If there is a current winner, send the money back
        if (oldAuctionWinner != address(0)) {
            payable(oldAuctionWinner).call{value: oldPrice}("");
        }
    }

    /**
     * @notice Claim the prize of the current auction
     */
    function claim() public {
        require(endTime < block.timestamp, "Minting hasn't finished yet");
        require(!_claimed, "Token has already been claimed");

        _claimed = true;
        emit AuctionClaimed(currentAuctionWinner, currentPrice);
        token.mint(currentAuctionWinner, tokenURI);
    }

    /**
     * @notice Start a new auction for a new NFT
     * @param newStartingPrice the starting price of the new auction
     * @param newStartTime the time when the auction starts
     * @param newEndTime the time when the auction ends
     * @param newTokenURI the token URI of the new NFT
     */
    function startNewAuction(
        uint256 newStartingPrice,
        uint256 newMinPriceDifference,
        uint256 newStartTime,
        uint256 newEndTime,
        string memory newTokenURI
    ) public onlyOwner {
        require(_claimed, "The auction hasn't been claimed yet");
        require(newStartTime < newEndTime, "Start time must be before end time");

        // Reset the state variables for a new auction to begin
        _claimed = false;
        currentPrice = newStartingPrice;
        minPriceDifference = newMinPriceDifference;
        currentAuctionWinner = address(0);
        startTime = newStartTime;
        endTime = newEndTime;
        tokenURI = newTokenURI;

        emit AuctionStarted(startTime, endTime);
    }

    /**
     * @notice Withdraw funds from the smart contract to the feeReceiver
     * @dev send everything except the current price if there is an auction ongoing
     */
    function withdraw() public {
        if (currentAuctionWinner != address(0) && !_claimed) {
            payable(_feeReceiver).transfer(address(this).balance - currentPrice);
        } else {
            payable(_feeReceiver).transfer(address(this).balance);
        }
    }
}
