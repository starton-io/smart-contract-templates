// SPDX-License-Identifier: Apache-2.0

pragma solidity 0.8.17;

import "./StartonERC721BaseRoyalties.sol";
import "../interfaces/IERC4907.sol";

/// @title StartonERC4907
/// @author Starton
/// @notice This contract allows to rent NFTs
contract StartonERC4907 is StartonERC721BaseRoyalties, IERC4907 {
    /** @notice Structure of data reprensenting the user and expiration of usage */
    struct UserInfo {
        address user;
        uint64 expires;
    }

    mapping(uint256 => UserInfo) internal _users;

    constructor(
        string memory definitiveName,
        string memory definitiveSymbol,
        uint96 definitiveRoyaltyFee,
        address definitiveFeeReceiver,
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
    {}

    /**
     * @notice Get the user address of an NFT
     * @dev The zero address indicates that there is no user or the user is expired
     * @param tokenId The NFT to get the user address for
     * @return The user address for this NFT
     */
    function userOf(uint256 tokenId) public view virtual returns (address) {
        if (uint256(_users[tokenId].expires) >= block.timestamp) {
            return _users[tokenId].user;
        } else {
            return address(0);
        }
    }

    /**
     * @notice Get the user expires of an NFT
     * @dev The zero value indicates that there is no user
     * @param tokenId The NFT to get the user expires for
     * @return The user expires for this NFT
     */
    function userExpires(uint256 tokenId) public view virtual returns (uint256) {
        return _users[tokenId].expires;
    }

    /**
     * @dev Call the inherited contract supportsInterface function to know the interfaces as EIP165 says
     * @return True if the interface is supported
     */
    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
        return interfaceId == type(IERC4907).interfaceId || super.supportsInterface(interfaceId);
    }

    /**
     * @notice Set the user and expires of an NFT
     * @dev The zero address indicates there is no user
     * Throws if `tokenId` is not valid NFT
     * @param user  The new user of the NFT
     * @param expires UNIX timestamp, The new user could use the NFT before expires
     */
    function setUser(
        uint256 tokenId,
        address user,
        uint64 expires
    ) public virtual {
        require(_isApprovedOrOwner(_msgSender(), tokenId), "Caller is not owner nor approved");

        UserInfo storage info = _users[tokenId];
        info.user = user;
        info.expires = expires;
        emit UpdateUser(tokenId, user, expires);
    }

    /**
     * @dev Call the inherited contract _beforeTokenTransfer function
     * then delete the user of the NFT if the transfer is not a mint or a burn
     * @param from The address that owns the NFT
     * @param to The address that will receive the NFT
     * @param tokenId The NFT to transfer
     * @param batchSize The number of NFTs to transfer
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal virtual override {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);

        if (from != to && _users[tokenId].user != address(0)) {
            delete _users[tokenId];
            emit UpdateUser(tokenId, address(0), 0);
        }
    }
}
