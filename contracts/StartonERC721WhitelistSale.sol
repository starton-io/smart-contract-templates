// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "./interfaces/IStartonERC721.sol";

/// @title StartonERC721WhitelistSale
/// @author Starton
/// @notice Sell ERC721 tokens through a whitelist sale with a limited available supply, start and end time as well as max tokens per address
contract StartonERC721WhitelistSale is Context {
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

    /** @dev Modifier that reverts when the block timestamp is not during the sale */
    modifier isTimeCorrect() {
        require(startTime <= block.timestamp, "Minting not started");
        require(endTime >= block.timestamp, "Minting finished");
        _;
    }

    /** @dev Modifier that reverts when the sender is not whitelisted */
    modifier isWhitelisted(bytes32[] calldata merkleProof) {
        bytes32 leaf = keccak256(abi.encodePacked(_msgSender()));
        require(
            MerkleProof.verify(merkleProof, _merkleRoot, leaf),
            "Invalid proof"
        );
        _;
    }

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
        token = IStartonERC721(definitiveTokenAddress);
        _feeReceiver = definitiveFeeReceiver;
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
     * @param merkleProof The merkle proof of the address in the whitelist
     */
    function mint(address to, bytes32[] calldata merkleProof)
        public
        payable
        isTimeCorrect
        isWhitelisted(merkleProof)
    {
        require(msg.value >= price, "Insufficient funds");

        if (token.totalSupply() == 0) {
            _mint(to, Strings.toString(0));
        } else {
            _mint(
                to,
                Strings.toString(
                    token.tokenByIndex(token.totalSupply().sub(1)).add(1)
                )
            );
        }
    }

    /**
     * @notice Mint multiple tokens to a given address for a price if the given address is whitelisted
     * @param to The address to mint the token to
     * @param merkleProof The merkle proof of the address in the whitelist
     */
    function mintBatch(
        address to,
        uint256 amount,
        bytes32[] calldata merkleProof
    ) public payable isTimeCorrect isWhitelisted(merkleProof) {
        bytes32 leaf = keccak256(abi.encodePacked(_msgSender()));
        require(
            MerkleProof.verify(merkleProof, _merkleRoot, leaf),
            "Invalid proof"
        );

        require(msg.value >= price.mul(amount), "Insufficient funds");

        // Compute the next token id
        uint256 tokenId;
        if (token.totalSupply() == 0) tokenId = 0;
        else tokenId = token.tokenByIndex(token.totalSupply().sub(1)).add(1);

        for (uint256 i = 0; i < amount; ++i) {
            _mint(to, Strings.toString(tokenId));
            tokenId += 1;
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

        leftSupply = leftSupply.sub(1);
        tokensClaimed[_msgSender()] = tokensClaimed[_msgSender()].add(1);
        token.mint(to, tokenURI);
    }
}
