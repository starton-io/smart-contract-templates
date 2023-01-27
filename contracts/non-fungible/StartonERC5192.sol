// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "../interfaces/IStartonERC5192.sol";
import "./StartonERC721Base.sol";

contract StartonERC5192 is StartonERC721Base, IStartonERC5192 {
    using Counters for Counters.Counter;

    modifier checkLock() {
        revert("Token locked");
        _;
    }

    constructor(
        string memory definitiveName,
        string memory definitiveSymbol,
        string memory initialBaseTokenURI,
        string memory initialContractURI,
        address initialOwnerOrMultiSigContract
    )
        StartonERC721Base(
            definitiveName,
            definitiveSymbol,
            initialBaseTokenURI,
            initialContractURI,
            initialOwnerOrMultiSigContract
        )
    {}

    function mint(address to, string memory uri) public virtual override {
        super.mint(to, uri);

        emit Locked(_tokenIdCounter.current() - 1);
    }

    function locked(uint256 tokenId) public view override returns (bool) {
        require(_exists(tokenId), "Token not found");

        return (true);
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory data
    ) public override checkLock {}

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override checkLock {}

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override checkLock {}

    function approve(address approved, uint256 tokenId) public override checkLock {}

    function setApprovalForAll(address operator, bool approved) public override checkLock {}

    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
        return interfaceId == type(IStartonERC5192).interfaceId || super.supportsInterface(interfaceId);
    }
}
