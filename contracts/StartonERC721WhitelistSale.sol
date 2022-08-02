// SPDX-License-Identifier: MIT
// StartonERC721WhitelistSale contract: version 0.0.1
// Creator: https://starton.io

pragma solidity 0.8.9;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "./StartonERC721MetaTransaction.sol";

contract StartonERC721WhitelistSale is Context {
    using SafeMath for uint256;

    address private immutable _feeReceiver;

    bytes32 private _merkleRoot;

    StartonERC721MetaTransaction public token;

    uint256 public price;
    uint256 public startTime;
    uint256 public endTime;
    uint256 public maxTokensPerAddress;
    uint256 public leftSupply;

    mapping(address => uint256) public tokensClaimed;

    constructor(
        address tokenAddress,
        bytes32 merkleRoot_,
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
        _merkleRoot = merkleRoot_;
        price = price_;
        startTime = startTime_;
        endTime = endTime_;
        maxTokensPerAddress = maxTokensPerAddress_;
        leftSupply = maxSupply;
    }

    function safeMint(
        address to,
        string memory tokenURI,
        bytes32[] calldata merkleProof
    ) public payable {
        bytes32 leaf = keccak256(abi.encodePacked(_msgSender()));
        require(
            MerkleProof.verify(merkleProof, _merkleRoot, leaf),
            "Invalid proof"
        );

        require(msg.value >= price, "Insufficient funds");
        require(startTime <= block.timestamp, "Minting not started");
        require(endTime >= block.timestamp, "Minting finished");

        _mint(to, tokenURI);
    }

    function safeBatchMint(
        address to,
        uint256 amount,
        string[] memory tokenURI,
        bytes32[] calldata merkleProof
    ) public payable {
        bytes32 leaf = keccak256(abi.encodePacked(_msgSender()));
        require(
            MerkleProof.verify(merkleProof, _merkleRoot, leaf),
            "Invalid proof"
        );

        require(msg.value >= price.mul(amount), "Insufficient funds");
        require(startTime <= block.timestamp, "Minting not started");
        require(endTime >= block.timestamp, "Minting finished");

        for (uint256 i = 0; i < amount; ++i) {
            _mint(to, tokenURI[i]);
        }
    }

    function withdraw() public {
        payable(_feeReceiver).transfer(address(this).balance);
    }

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
