// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "../interfaces/IStartonERC5192.sol";
import "./StartonERC721Base.sol";

contract StartonERC5192 is StartonERC721Base, IStartonERC5192 {
    mapping(uint256 => bool) internal _tokensLocked;
    bool internal _isLockedByDefault;

    modifier checkLock(uint256 tokenId) {
        require(!_isLockedByDefault || !_tokensLocked[tokenId], "Token is locked");
        _;
    }

    constructor(
        string memory definitiveName,
        string memory definitiveSymbol,
        bool definitiveIsLockedByDefault,
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
    {
        _isLockedByDefault = definitiveIsLockedByDefault;
    }

    function lock(uint256 tokenId) public {
        require(!locked(tokenId), "Token is already locked");

        _tokensLocked[tokenId] = true;
    }

    function locked(uint256 tokenId) public view override returns (bool) {
        require(_exists(tokenId), "Token not found");
        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: caller is not token owner nor approved");

        if (_isLockedByDefault) return (true);
        else return (_tokensLocked[tokenId]);
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory data
    ) public override checkLock(tokenId) {
        super.safeTransferFrom(from, to, tokenId, data);
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override checkLock(tokenId) {
        super.safeTransferFrom(from, to, tokenId);
    }

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override checkLock(tokenId) {
        super.transferFrom(from, to, tokenId);
    }

    function approve(address approved, uint256 tokenId) public override checkLock(tokenId) {
        super.approve(approved, tokenId);
    }

    function setApprovalForAll(address operator, bool approved) public override checkLock(0) {
        super.setApprovalForAll(operator, approved);
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
        return interfaceId == type(IStartonERC5192).interfaceId || super.supportsInterface(interfaceId);
    }
}
