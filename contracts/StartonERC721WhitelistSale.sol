// SPDX-License-Identifier: MIT
// StartonERC721WhitelistSale contract: version 0.0.1
// Creator: https://starton.io

pragma solidity 0.8.9;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./StartonERC721Blacklist.sol";

contract StartonERC721WhitelistSale is Ownable {
    using SafeMath for uint256;

    address private _feeReceiver;

    bytes32 private _merkleRoot;

    StartonERC721Blacklist public token;

    uint256 public price;
    uint256 public startTime;
    uint256 public endTime;
    uint256 public maxTokens;
    uint256 public maxSupply;

    mapping(address => uint256) public tokensClaimed;

    constructor(
        address tokenAddress,
        bytes32 merkleRoot_,
        uint256 price_,
        uint256 startTime_,
        uint256 endTime_,
        uint256 maxTokens_,
        uint256 maxSupply_,
        address feeReceiver_
    ) {
        token = StartonERC721Blacklist(tokenAddress);
        _merkleRoot = merkleRoot_;
        price = price_;
        startTime = startTime_;
        endTime = endTime_;
        maxTokens = maxTokens_;
        maxSupply = maxSupply_;
        _feeReceiver = feeReceiver_;
    }

    function safeMint(
        address to,
        string memory tokenURI,
        bytes32[] calldata merkleProof
    ) public payable {
        bytes32 leaf = keccak256(abi.encodePacked(to));
        require(
            MerkleProof.verify(merkleProof, _merkleRoot, leaf),
            "Invalid proof"
        );

        require(tokensClaimed[to] < maxTokens, "Max tokens reached");
        require(msg.value >= price, "Insufficient funds");
        require(startTime <= block.timestamp, "Minting not started");
        require(endTime >= block.timestamp, "Minting finished");
        require(token.totalSupply() < maxSupply, "Max supply reached");

        token.safeMint(to, tokenURI);
    }

    function safeBatchMint(
        address to,
        uint256 _amount,
        string[] memory tokenURI,
        bytes32[] calldata merkleProof
    ) public payable {
        bytes32 leaf = keccak256(abi.encodePacked(to));
        require(
            MerkleProof.verify(merkleProof, _merkleRoot, leaf),
            "Invalid proof"
        );

        require(tokensClaimed[to] < maxTokens, "Max tokens reached");
        require(msg.value >= price.mul(_amount), "Insufficient funds");
        require(startTime <= block.timestamp, "Minting not started");
        require(endTime >= block.timestamp, "Minting finished");

        for (uint256 i = 0; i < _amount; ++i) {
            require(token.totalSupply() < maxSupply, "Max supply reached");
            token.safeMint(to, tokenURI[i]);
        }
    }

    function safeAdminMint(address to, string memory tokenURI)
        public
        onlyOwner
    {
        token.safeMint(to, tokenURI);
    }

    function safeAdminBatchMint(
        address to,
        uint256 amount,
        string[] memory tokenURI
    ) public onlyOwner {
        for (uint256 i = 0; i < amount; ++i) {
            token.safeMint(to, tokenURI[i]);
        }
    }

    function changeFeeReceiver(address newFeeReceiver) public onlyOwner {
        _feeReceiver = newFeeReceiver;
    }

    function withdraw() public onlyOwner {
        payable(_feeReceiver).transfer(address(this).balance);
    }
}
