// SPDX-License-Identifier: Apache-2.0

pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/common/ERC2981.sol";
import "./StartonERC721Base.sol";

/// @title StartonERC721Base
/// @author Starton
/// @notice ERC721 tokens that can be blacklisted, paused, locked, burned, have a access management and handle meta transactions
contract StartonERC721BaseRoyalties is StartonERC721Base, ERC2981 {
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
            initialBaseTokenURI,
            initialContractURI,
            initialOwnerOrMultiSigContract
        )
    {
        // Set the default royalty fee and receiver
        _setDefaultRoyalty(definitiveFeeReceiver, definitiveRoyaltyFee);
    }

    /**
     * @dev Call the inherited contract supportsInterface function to know the interfaces as EIP165 says
     * @return True if the interface is supported
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(StartonERC721Base, ERC2981)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
