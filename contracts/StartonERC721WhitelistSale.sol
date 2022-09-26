// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./interfaces/IStartonERC721.sol";

/// @title StartonERC721WhitelistSale
/// @author Starton
/// @notice Contract that can sell ERC721 tokens through a whitelist sale with a limited avaible supply, start and end time as well as max tokens per address
contract StartonERC721WhitelistSale {
    using SafeMath for uint256;

    address private immutable _feeReceiver;

    // Root of the merkle tree for the whitelisted address
    bytes32 private _merkleRoot;

    IStartonERC721 public immutable token;

    uint256 public immutable price;
    uint256 public immutable startTime;
    uint256 public immutable endTime;
    uint256 public immutable maxTokensPerAddress;

    uint256 public leftSupply;

    mapping(address => uint256) public tokensClaimed;

    constructor(
        address definitiveTokenAddress,
        bytes32 definitiveMerkleRoot,
        uint256 definitivePrice,
        uint256 definitiveStartTime,
        uint256 definitiveEndTime,
        uint256 definitiveMaxTokensPerAddress,
        uint256 definitiveMaxSupply,
        address definitiveFeeReceiver
    ) {
        // Check if the address of the feeReceiver correct
        require(
            definitiveFeeReceiver != address(0),
            "Fee receiver address is not valid"
        );
        _feeReceiver = definitiveFeeReceiver;

        token = IStartonERC721(definitiveTokenAddress);
        _merkleRoot = definitiveMerkleRoot;
        price = definitivePrice;
        startTime = definitiveStartTime;
        endTime = definitiveEndTime;
        maxTokensPerAddress = definitiveMaxTokensPerAddress;
        leftSupply = definitiveMaxSupply;
    }

    /**
     * @notice Mint a token to a given address for a price if the given address is whitelisted
     * @param to The address to mint the token to
     * @param tokenURI The token metadata URI
     * @param merkleProof The merkle proof of the address in the whitelist
     */
    function mint(
        address to,
        string memory tokenURI,
        bytes32[] calldata merkleProof
    ) public payable {
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
        require(
            MerkleProof.verify(merkleProof, _merkleRoot, leaf),
            "Invalid proof"
        );

        require(msg.value >= price, "Insufficient funds");
        require(startTime <= block.timestamp, "Minting not started");
        require(endTime >= block.timestamp, "Minting finished");

        _mint(to, tokenURI);
    }

    /**
     * @notice Mint multiple tokens to a given address for a price if the given address is whitelisted
     * @param to The address to mint the token to
     * @param tokenURIs The token metadata URI array
     * @param merkleProof The merkle proof of the address in the whitelist
     */
    function batchMint(
        address to,
        uint256 amount,
        string[] memory tokenURIs,
        bytes32[] calldata merkleProof
    ) public payable {
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
        require(
            MerkleProof.verify(merkleProof, _merkleRoot, leaf),
            "Invalid proof"
        );

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
