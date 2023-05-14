// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import "../abstracts/AStartonWhitelist.sol";
import "./StartonERC1155BaseSale.sol";

/// @title StartonERC1155WhitelistSale
/// @author Starton
/// @notice Sell ERC721 tokens through a whitelist sale with a limited available supply, start and end time as well as max tokens per address
contract StartonERC1155WhitelistSale is StartonERC1155BaseSale, AStartonWhitelist {
    constructor(
        address definitiveTokenAddress,
        bytes32 definitiveMerkleRoot,
        uint256 definitiveStartTime,
        uint256 definitiveEndTime,
        uint256 definitiveMaxTokensPerAddress,
        uint256 definitiveMaxSupply,
        address definitiveFeeReceiver
    )
        StartonERC1155BaseSale(
            definitiveTokenAddress,
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
     * @param id The id of the token
     * @param amount The amount of tokens to mint
     * @param merkleProof The merkle proof of the address in the whitelist
     */
    function mint(
        address to,
        uint256 id,
        uint256 amount,
        bytes32[] calldata merkleProof
    ) public payable override isWhitelisted(merkleProof) {
        super.mint(to, id, amount, merkleProof);
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
        uint256[] calldata ids,
        uint256[] calldata amounts,
        bytes32[] calldata merkleProof
    ) public payable override isWhitelisted(merkleProof) {
        super.mintBatch(to, ids, amounts, merkleProof);
    }
}
