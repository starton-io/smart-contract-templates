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

    bytes32 private _merkleRoot;
    StartonERC721Blacklist public token;
    uint256 public price;
    uint256 public startTime;
    uint256 public endTime;
    uint256 public maxTokens;
    address payable private _feeReceiver;
    uint256 public maxSupply;

    mapping(address => uint256) public tokensClaimed;

    constructor(
        address _token,
        bytes32 _root,
        uint256 _price,
        uint256 _startTime,
        uint256 _endTime,
        uint256 _maxTokens,
        uint256 _maxSupply,
        address payable _receiver
    ) {
        token = StartonERC721Blacklist(_token);
        _merkleRoot = _root;
        price = _price;
        startTime = _startTime;
        endTime = _endTime;
        maxTokens = _maxTokens;
        maxSupply = _maxSupply;
        _feeReceiver = _receiver;
    }

    function mint(
        address _receiver,
        string memory _metadataURI,
        bytes32[] calldata _merkleProof
    ) public payable {
        bytes32 leaf = keccak256(abi.encodePacked(_receiver));
        require(
            MerkleProof.verify(_merkleProof, _merkleRoot, leaf),
            "Invalid proof"
        );
        require(tokensClaimed[_receiver] < maxTokens, "Max tokens reached");
        require(msg.value >= price, "Insufficient funds");
        require(startTime <= block.timestamp, "Minting not started");
        require(endTime >= block.timestamp, "Minting finished");
        require(token.totalSupply() < maxSupply, "Max supply reached");

        token.safeMint(_receiver, _metadataURI);
    }

    function batchMint(
        address _receiver,
        uint256 _amount,
        string[] memory _metadataURI,
        bytes32[] calldata _merkleProof
    ) public payable {
        bytes32 leaf = keccak256(abi.encodePacked(_receiver));
        require(
            MerkleProof.verify(_merkleProof, _merkleRoot, leaf),
            "Invalid proof"
        );
        require(tokensClaimed[_receiver] < maxTokens, "Max tokens reached");
        require(msg.value >= price.mul(_amount), "Insufficient funds");
        require(startTime <= block.timestamp, "Minting not started");
        require(endTime >= block.timestamp, "Minting finished");

        for (uint256 i = 0; i < _amount; ++i) {
            require(token.totalSupply() < maxSupply, "Max supply reached");
            token.safeMint(_receiver, _metadataURI[i]);
        }
    }

    function withdraw() public onlyOwner {
        _feeReceiver.transfer(address(this).balance);
    }

    function adminMint(address _receiver, string memory _metaDataURI)
        public
        onlyOwner
    {
        token.safeMint(_receiver, _metaDataURI);
    }

    function adminBatchMint(
        address _receiver,
        uint256 _amount,
        string[] memory _metadataURI
    ) public onlyOwner {
        for (uint256 i = 0; i < _amount; ++i) {
            token.safeMint(_receiver, _metadataURI[i]);
        }
    }
}
