// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import "../interfaces/IStartonERC5192.sol";
import "./StartonERC721Base.sol";

/// @title StartonERC5192
/// @author Starton
/// @notice ERC5192 token that is locked by default and which is based of the StartonERC721Base
contract StartonERC5192 is StartonERC721Base, IStartonERC5192 {
    using Counters for Counters.Counter;

    /** @dev Modifier that reverts because the token is locked */
    modifier checkLock() {
        revert("Token locked");
        _;
    }

    constructor(
        string memory definitiveName,
        string memory definitiveSymbol,
        uint96 definitiveRoyaltyFee,
        address definitiveFeeReceiver,
        string memory initialBaseTokenURI,
        string memory initialContractURI,
        address initialOwnerOrMultiSigContract
    )
        StartonERC721Base(
            definitiveName,
            definitiveSymbol,
            definitiveRoyaltyFee,
            definitiveFeeReceiver,
            initialBaseTokenURI,
            initialContractURI,
            initialOwnerOrMultiSigContract
        )
    {}

    /**
     * @notice Mint a new token to the given address and set the token metadata while minting is not locked
     * @param to The address that will receive the token
     * @param uri The URI of the token metadata
     * @custom:requires MINTER_ROLE
     */
    function mint(address to, string memory uri) public virtual override {
        super.mint(to, uri);

        emit Locked(_tokenIdCounter.current() - 1);
    }

    /**
     * @notice Check if a token is locked
     * @param tokenId The ID of the token to check
     * @return True if the token is locked
     */
    function locked(uint256 tokenId) public view override returns (bool) {
        require(_exists(tokenId), "Token not found");

        return (true);
    }

    /**
     * @notice Block the safeTransferFrom because it is a SBT
     */
    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory data
    ) public override checkLock {}

    /**
     * @notice Block the safeTransferFrom because it is a SBT
     */
    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override checkLock {}

    /**
     * @notice Block the transferFrom because it is a SBT
     */
    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override checkLock {}

    /**
     * @notice Block the approve because it is a SBT
     */
    function approve(address approved, uint256 tokenId) public override checkLock {}

    /**
     * @notice Block the setApprovalForAll because it is a SBT
     */
    function setApprovalForAll(address operator, bool approved) public override(ERC721, IERC721) checkLock {}

    /**
     * @dev Call the inherited contract supportsInterface function to know the interfaces as EIP165 says
     * Implements the IERC5192 interface
     * @return True if the interface is supported
     */
    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
        return interfaceId == type(IStartonERC5192).interfaceId || super.supportsInterface(interfaceId);
    }
}
