// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./interfaces/IStartonERC721.sol";

/// @title StartonERC721Sale
/// @author Starton
/// @notice Contract that can sell ERC721 tokens through a public sale with a limited avaible supply, start and end time as well as max tokens per address
contract StartonERC721Sale {
    using SafeMath for uint256;

    address private immutable _feeReceiver;

    IStartonERC721 public immutable token;

    uint256 public immutable price;
    uint256 public immutable startTime;
    uint256 public immutable endTime;
    uint256 public immutable maxTokensPerAddress;

    uint256 public leftSupply;

    mapping(address => uint256) public tokensClaimed;

    constructor(
        address definitiveTokenAddress,
        uint256 definitivePrice,
        uint256 definitiveStartTime,
        uint256 definitiveEndTime,
        uint256 definitiveMaxTokensPerAddress,
        uint256 definitiveMaxSupply,
        address definitiveFeeReceiver
    ) {
        // Check if the address of the feeReceiver is correct
        require(
            definitiveFeeReceiver != address(0),
            "Fee receiver address is not valid"
        );
        _feeReceiver = definitiveFeeReceiver;

        token = IStartonERC721(definitiveTokenAddress);
        price = definitivePrice;
        startTime = definitiveStartTime;
        endTime = definitiveEndTime;
        maxTokensPerAddress = definitiveMaxTokensPerAddress;
        leftSupply = definitiveMaxSupply;
    }

    /**
     * @notice Mint a token to a given address for a price
     * @param to The address to mint the token to
     * @param tokenURI The token metadata URI
     */
    function mint(address to, string memory tokenURI) public payable {
        require(msg.value >= price, "Insufficient funds");
        require(startTime <= block.timestamp, "Minting not started");
        require(endTime >= block.timestamp, "Minting finished");

        _mint(to, tokenURI);
    }

    /**
     * @notice Mint multiple tokens to a given address for a price
     * @param to The address to mint the token to
     * @param tokenURIs The token metadata URI array
     */
    function batchMint(
        address to,
        uint256 amount,
        string[] memory tokenURIs
    ) public payable {
        require(msg.value >= price.mul(amount), "Insufficient funds");
        require(startTime <= block.timestamp, "Minting not started");
        require(endTime >= block.timestamp, "Minting finished");

        for (uint256 i = 0; i < amount; ++i) {
            _mint(to, tokenURIs[i]);
        }
    }

    /**
     * @notice Withdraw funds from the smart contract to the feeReceiver
     */
    function withdraw() public {
        payable(_feeReceiver).transfer(address(this).balance);
    }

    /**
     * @dev Mint a token to the given address and updates state variables for the sale
     * @param to The address to mint the token to
     * @param tokenURI The URI of the token
     */
    function _mint(address to, string memory tokenURI) internal {
        require(
            tokensClaimed[msg.sender] < maxTokensPerAddress,
            "Max tokens reached"
        );
        require(leftSupply != 0, "Max supply reached");

        token.mint(to, tokenURI);
        leftSupply = leftSupply.sub(1);
        tokensClaimed[msg.sender] = tokensClaimed[msg.sender].add(1);
    }
}
