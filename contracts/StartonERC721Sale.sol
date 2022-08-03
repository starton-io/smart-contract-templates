// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "./StartonERC721MetaTransaction.sol";

/// @title StartonERC721Sale
/// @author Starton
/// @notice Contract that can sell ERC721 tokens through a public sale with a limited avaible supply, start and end time as well as max tokens per address
contract StartonERC721Sale is Context {
    using SafeMath for uint256;

    address private immutable _feeReceiver;

    StartonERC721MetaTransaction public token;

    uint256 public price;
    uint256 public startTime;
    uint256 public endTime;
    uint256 public maxTokensPerAddress;
    uint256 public leftSupply;

    mapping(address => uint256) public tokensClaimed;

    constructor(
        address tokenAddress,
        uint256 price_,
        uint256 startTime_,
        uint256 endTime_,
        uint256 maxTokensPerAddress_,
        uint256 maxSupply,
        address feeReceiver
    ) {
        require(feeReceiver != address(0), "Fee receiver address is not valid");
        _feeReceiver = feeReceiver;

        token = StartonERC721MetaTransaction(tokenAddress);
        price = price_;
        startTime = startTime_;
        endTime = endTime_;
        maxTokensPerAddress = maxTokensPerAddress_;
        leftSupply = maxSupply;
    }

    /**
     * @notice Mint a token to a given address for a price
     * @param to The address to mint the token to
     * @param tokenURI The token metadata URI
     */
    function safeMint(address to, string memory tokenURI) public payable {
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
    function safeBatchMint(
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
            tokensClaimed[_msgSender()] < maxTokensPerAddress,
            "Max tokens reached"
        );
        require(leftSupply != 0, "Max supply reached");

        token.safeMint(to, tokenURI);
        leftSupply.sub(1);
        tokensClaimed[_msgSender()].add(1);
    }
}
