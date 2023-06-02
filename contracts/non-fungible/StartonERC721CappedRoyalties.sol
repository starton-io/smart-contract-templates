// SPDX-License-Identifier: Apache-2.0

pragma solidity 0.8.17;

import "./StartonERC721BaseRoyalties.sol";

/// @title StartonERC721Capped
/// @author Starton
/// @notice ERC721 tokens that can be blacklisted, paused, locked, burned, have a access management, max number of tokens and handle meta transactions
contract StartonERC721CappedRoyalties is StartonERC721BaseRoyalties {
    using Counters for Counters.Counter;

    uint256 public immutable maxSupply;

    constructor(
        string memory definitiveName,
        string memory definitiveSymbol,
        uint96 definitiveRoyaltyFee,
        address definitiveFeeReceiver,
        uint256 definitiveMaxSupply,
        string memory initialBaseTokenURI,
        string memory initialContractURI,
        address initialOwnerOrMultiSigContract
    )
        StartonERC721BaseRoyalties(
            definitiveName,
            definitiveSymbol,
            definitiveRoyaltyFee,
            definitiveFeeReceiver,
            initialBaseTokenURI,
            initialContractURI,
            initialOwnerOrMultiSigContract
        )
    {
        require(definitiveMaxSupply > 0, "maxSupply must be greater than 0");

        maxSupply = definitiveMaxSupply;
    }

    /**
     * @notice Mint a new token to the given address and set the token metadata while minting is not locked
     * @param to The address that will receive the token
     * @param uri The URI of the token metadata
     * @custom:requires MINTER_ROLE
     */
    function mint(address to, string memory uri) public virtual override {
        require(_tokenIdCounter.current() < maxSupply, "Max supply reached");

        super.mint(to, uri);
    }
}
