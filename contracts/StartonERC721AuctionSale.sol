// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./interfaces/IStartonERC721.sol";

/// @title StartonERC721AuctionSale
/// @author Starton
/// @notice Contract that can sell ERC721 tokens through a auction
contract StartonERC721AuctionSale is Ownable {
    using SafeMath for uint256;

    address private immutable _feeReceiver;

    IStartonERC721 public immutable token;

    uint256 public currentPrice;
    uint256 public minPriceDifference;
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
        address definitiveTokenAddress,
        address definitiveFeeReceiver,
        uint256 initialStartingPrice,
        uint256 initialMinPriceDifference,
        uint256 initialStartTime,
        uint256 initialEndTime
    ) {
        // Check if the address of the feeReceiver is correct
        require(
            definitiveFeeReceiver != address(0),
            "Fee receiver address is not valid"
        );
        _feeReceiver = definitiveFeeReceiver;

        token = IStartonERC721(definitiveTokenAddress);
        currentPrice = initialStartingPrice;
        minPriceDifference = initialMinPriceDifference;
        startTime = initialStartTime;
        endTime = initialEndTime;

        // Set inititial states of the auction to no winner and not claimed
        currentAuctionWinner = address(0);
        _claimed = false;

        // Emit the event when the auction starts
        emit AuctionStarted(initialStartTime, initialEndTime);
    }

    /**
     * @notice Bid for the current auction
     */
    function bid() public payable {
        require(startTime <= block.timestamp, "Bidding not started");
        require(endTime >= block.timestamp, "Bidding finished");
        require(currentPrice.add(minPriceDifference) <= msg.value, "Bid is too low");

        // Store the old auction winner and price
        address oldAuctionWinner = currentAuctionWinner;
        uint256 oldPrice = currentPrice;

        currentPrice = msg.value;
        currentAuctionWinner = _msgSender();
        emit Bided(_msgSender(), msg.value);

        // If there is a current winner, send the money back
        if (oldAuctionWinner != address(0)) {
            payable(oldAuctionWinner).transfer(oldPrice);
        }
    }

    /**
     * @notice Claim the prize of the current auction
     * @param to The address to send the prize to
     * @param tokenURI The tokenURI of the token to be sent
     */
    function mint(address to, string memory tokenURI) public {
        require(
            to == currentAuctionWinner,
            "Destination address isn't the current auction winner"
        );
        require(endTime < block.timestamp, "Minting hasn't finished yet");
        require(!_claimed, "Token has already been claimed");

        token.mint(to, tokenURI);
        _claimed = true;
        emit AuctionClaimed(to, currentPrice);
    }

    /**
     * @notice Start a new auction for a new NFT
     * @param newStartingPrice the starting price of the new auction
     * @param newStartTime the time when the auction starts
     * @param newEndTime the time when the auction ends
     */
    function startNewAuction(
        uint256 newStartingPrice,
        uint256 newMinPriceDifference,
        uint256 newStartTime,
        uint256 newEndTime
    ) public onlyOwner {
        require(_claimed, "The auction hasn't been claimed yet");

        // Reset the state variables for a new auction to begin
        _claimed = false;
        currentPrice = newStartingPrice;
        minPriceDifference = newMinPriceDifference;
        currentAuctionWinner = address(0);
        startTime = newStartTime;
        endTime = newEndTime;

        emit AuctionStarted(startTime, endTime);
    }

    /**
     * @notice Withdraw funds from the smart contract to the feeReceiver
     */
    function withdraw() public {
        if (currentAuctionWinner != address(0) && !_claimed) {
            payable(_feeReceiver).transfer(
                address(this).balance - currentPrice
            );
        } else {
            payable(_feeReceiver).transfer(address(this).balance);
        }
    }
}
