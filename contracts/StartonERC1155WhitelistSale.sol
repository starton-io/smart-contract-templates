// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "./interfaces/IStartonERC1155.sol";

/// @title StartonERC1155WhitelistSale
/// @author Starton
/// @notice Sell ERC721 tokens through a whitelist sale with a limited available supply, start and end time as well as max tokens per address
contract StartonERC1155WhitelistSale is Context {
    using SafeMath for uint256;

    address private immutable _feeReceiver;

    // Root of the merkle tree for the whitelisted address
    bytes32 private _merkleRoot;

    IStartonERC1155 public immutable token;

    struct TokenInformations {
        uint256 price;
        bool isSet;
    }

    mapping(uint256 => TokenInformations) public pricePerToken;

    uint256 public immutable startTime;
    uint256 public immutable endTime;
    uint256 public immutable maxTokensPerAddress;

    uint256 public leftSupply;

    mapping(address => uint256) public tokensClaimed;

    constructor(
        address definitiveTokenAddress,
        bytes32 definitiveMerkleRoot,
        uint256 definitiveStartTime,
        uint256 definitiveEndTime,
        uint256 definitiveMaxTokensPerAddress,
        uint256 definitiveMaxSupply,
        address definitiveFeeReceiver
    ) {
        token = IStartonERC1155(definitiveTokenAddress);
        _feeReceiver = definitiveFeeReceiver;
        _merkleRoot = definitiveMerkleRoot;
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
        bytes32 leaf = keccak256(abi.encodePacked(_msgSender()));
        require(
            MerkleProof.verify(merkleProof, _merkleRoot, leaf),
            "Invalid proof"
        );

        require(pricePerToken[id].isSet, "Price not set");
        require(
            msg.value >= pricePerToken[id].price.mul(amount),
            "Insufficient funds"
        );
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
        require(
            ids.length == amounts.length,
            "ids and amounts length mismatch"
        );

        bytes32 leaf = keccak256(abi.encodePacked(_msgSender()));
        require(
            MerkleProof.verify(merkleProof, _merkleRoot, leaf),
            "Invalid proof"
        );

        require(startTime <= block.timestamp, "Minting not started");
        require(endTime >= block.timestamp, "Minting finished");

        uint256 value = msg.value;
        uint256 totalAmount = 0;
        for (uint256 i = 0; i < ids.length; ++i) {
            require(pricePerToken[ids[i]].isSet, "Price not set");

            totalAmount = totalAmount.add(
                pricePerToken[ids[i]].price.mul(amounts[i])
            );
            require(value >= totalAmount, "Insufficient funds");

            _mint(to, ids[i], amounts[i]);
        }
    }

    /**
     * @notice Set the price of a batch of tokens
     * @param ids The ids of the tokens
     * @param prices The prices of the tokens
     */
    function setPrices(uint256[] memory ids, uint256[] memory prices) public {
        require(ids.length == prices.length, "Ids and prices length mismatch");

        for (uint256 i = 0; i < ids.length; ++i) {
            pricePerToken[ids[i]] = TokenInformations(prices[i], true);
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
            tokensClaimed[_msgSender()].add(amount) <= maxTokensPerAddress,
            "Max tokens reached"
        );
        require(leftSupply >= amount, "Max supply reached");

        leftSupply = leftSupply.sub(amount);
        tokensClaimed[_msgSender()] = tokensClaimed[_msgSender()].add(amount);
        token.mint(to, id, amount);
    }
}
