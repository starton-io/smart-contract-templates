// SPDX-License-Identifier: Apache-2.0

pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/common/ERC2981.sol";
import "./StartonERC1155Base.sol";

/// @title StartonERC1155Base
/// @author Starton
/// @notice ERC1155 tokens that can be blacklisted, paused, locked, burned, have a access management and handle meta transactions
contract StartonERC1155BaseRoyalties is StartonERC1155Base, ERC2981 {
    constructor(
        string memory definitiveName,
        uint96 definitiveRoyaltyFee,
        address definitiveFeeReceiver,
        string memory initialTokenURI,
        string memory initialContractURI,
        address initialOwnerOrMultiSigContract
    ) StartonERC1155Base(definitiveName, initialTokenURI, initialContractURI, initialOwnerOrMultiSigContract) {
        // Set the royalty fee and the fee receiver
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
        override(StartonERC1155Base, ERC2981)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
