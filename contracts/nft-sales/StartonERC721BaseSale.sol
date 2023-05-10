// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "../interfaces/IStartonERC721.sol";

/// @title StartonERC721BaseSale
/// @author Starton
/// @notice Sell ERC721 tokens through a public sale with a limited available supply, start and end time as well as max tokens per address
contract StartonERC721BaseSale is Context {
    address private immutable _feeReceiver;

    IStartonERC721 public immutable token;

    uint256 public immutable price;
    uint256 public immutable startTime;
    uint256 public immutable endTime;
    uint256 public immutable maxTokensPerAddress;

    uint256 public leftSupply;

    mapping(address => uint256) public tokensClaimed;

    /** @dev Modifier that reverts when the block timestamp is not during the sale */
    modifier isTimeCorrect() {
        require(startTime <= block.timestamp, "Minting not started");
        require(endTime >= block.timestamp, "Minting finished");
        _;
    }

    constructor(
        address definitiveTokenAddress,
        uint256 definitivePrice,
        uint256 definitiveStartTime,
        uint256 definitiveEndTime,
        uint256 definitiveMaxTokensPerAddress,
        uint256 definitiveMaxSupply,
        address definitiveFeeReceiver
    ) {
        // Check if the end time is after the starting time
        require(definitiveStartTime < definitiveEndTime, "End time after start time");

        token = IStartonERC721(definitiveTokenAddress);
        _feeReceiver = definitiveFeeReceiver;
        price = definitivePrice;
        startTime = definitiveStartTime;
        endTime = definitiveEndTime;
        maxTokensPerAddress = definitiveMaxTokensPerAddress;
        leftSupply = definitiveMaxSupply;
    }

    /**
     * @notice Mint a token to a given address for a price
     * @param to The address to mint the token to
     */
    function mint(
        address to,
        bytes32[] calldata /*data*/
    ) public payable virtual isTimeCorrect {
        require(msg.value >= price, "Insufficient funds");

        uint256 totalSupply = token.totalSupply();
        if (totalSupply == 0) {
            _mint(to, Strings.toString(0));
        } else {
            _mint(to, Strings.toString(token.tokenByIndex(totalSupply - 1) + 1));
        }
    }

    /**
     * @notice Mint multiple tokens to a given address for a price
     * @param to The address to mint the token to
     */
    function mintBatch(
        address to,
        uint256 amount,
        bytes32[] calldata /*data*/
    ) public payable virtual isTimeCorrect {
        require(msg.value >= price * amount, "Insufficient funds");

        // Compute the next token id
        uint256 totalSupply = token.totalSupply();
        uint256 tokenId;
        if (totalSupply == 0) tokenId = 0;
        else tokenId = token.tokenByIndex(totalSupply - 1) + 1;

        for (uint256 i = 0; i < amount; ++i) {
            _mint(to, Strings.toString(tokenId));
            tokenId += 1;
        }
    }

    /**
     * @notice Withdraw funds from the smart contract to the feeReceiver
     */
    function withdraw() public virtual {
        payable(_feeReceiver).transfer(address(this).balance);
    }

    /**
     * @dev Mint a token to the given address and updates state variables for the sale
     * @param to The address to mint the token to
     * @param tokenURI The URI of the token
     */
    function _mint(address to, string memory tokenURI) internal virtual {
        require(tokensClaimed[_msgSender()] < maxTokensPerAddress, "Max tokens reached");
        require(leftSupply != 0, "Max supply reached");

        leftSupply -= 1;
        tokensClaimed[_msgSender()] += 1;
        token.mint(to, tokenURI);
    }
}
