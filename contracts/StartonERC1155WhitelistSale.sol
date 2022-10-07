// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./interfaces/IStartonERC1155.sol";

/// @title StartonERC1155WhitelistSale
/// @author Starton
/// @notice Can sell ERC721 tokens through a whitelist sale with a limited avaible supply, start and end time as well as max tokens per address
contract StartonERC1155WhitelistSale {
    using SafeMath for uint256;

    address private immutable _feeReceiver;

    // Root of the merkle tree for the whitelisted address
    bytes32 private _merkleRoot;

    IStartonERC1155 public immutable token;

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
        // Check if the address of the feeReceiver is correct
        require(
            definitiveFeeReceiver != address(0),
            "Fee receiver address is not valid"
        );
        _feeReceiver = definitiveFeeReceiver;

        token = IStartonERC1155(definitiveTokenAddress);
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
     * @param id The id of the token
     * @param amount The amount of tokens to mint
     * @param merkleProof The merkle proof of the address in the whitelist
     */
    function mint(
        address to,
        uint256 id,
        uint256 amount,
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

        _mint(to, id, amount);
    }

    /**
     * @notice Mint multiple tokens to a given address for a price if the given address is whitelisted
     * @param to The address to mint the token to
     * @param ids The ids of the token to mint
     * @param amounts The amounts of tokens to mint
     * @param merkleProof The merkle proof of the address in the whitelist
     */
    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes32[] calldata merkleProof
    ) public payable {
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
        require(
            MerkleProof.verify(merkleProof, _merkleRoot, leaf),
            "Invalid proof"
        );

        require(startTime <= block.timestamp, "Minting not started");
        require(endTime >= block.timestamp, "Minting finished");

        uint256 totalAmount = 0;
        for (uint256 i = 0; i < ids.length; ++i) {
            totalAmount = totalAmount.add(price.mul(amounts[i]));
            require(msg.value >= totalAmount, "Insufficient funds");

            _mint(to, ids[i], amounts[i]);
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
     * @param id The id of the token
     * @param amount The amount of tokens to mint
     */
    function _mint(
        address to,
        uint256 id,
        uint256 amount
    ) internal {
        require(
            tokensClaimed[msg.sender].add(amount) <= maxTokensPerAddress,
            "Max tokens reached"
        );
        require(leftSupply >= amount, "Max supply reached");

        token.mint(to, id, amount);
        leftSupply = leftSupply.sub(amount);
        tokensClaimed[msg.sender] = tokensClaimed[msg.sender].add(amount);
    }
}
