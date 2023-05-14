// SPDX-License-Identifier: Apache-2.0

pragma solidity 0.8.17;

import "../abstracts/AStartonWhitelist.sol";
import "./StartonERC721BaseSale.sol";

/// @title StartonERC721WhitelistSale
/// @author Starton
/// @notice Sell ERC721 tokens through a whitelist sale with a limited available supply, start and end time as well as max tokens per address
contract StartonERC721WhitelistSale is StartonERC721BaseSale, AStartonWhitelist {
    constructor(
        address definitiveTokenAddress,
        bytes32 definitiveMerkleRoot,
        uint256 definitivePrice,
        uint256 definitiveStartTime,
        uint256 definitiveEndTime,
        uint256 definitiveMaxTokensPerAddress,
        uint256 definitiveMaxSupply,
        address definitiveFeeReceiver
    )
        StartonERC721BaseSale(
            definitiveTokenAddress,
            definitivePrice,
            definitiveStartTime,
            definitiveEndTime,
            definitiveMaxTokensPerAddress,
            definitiveMaxSupply,
            definitiveFeeReceiver
        )
    {
        _merkleRoot = definitiveMerkleRoot;
    }

    /**
     * @notice Mint a token to a given address for a price if the given address is whitelisted
     * @param to The address to mint the token to
     * @param merkleProof The merkle proof of the address in the whitelist
     */
    function mint(address to, bytes32[] calldata merkleProof) public payable override isWhitelisted(merkleProof) {
        super.mint(to, merkleProof);
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
    ) public payable override isWhitelisted(merkleProof) {
        super.mintBatch(to, amount, merkleProof);
    }
}
