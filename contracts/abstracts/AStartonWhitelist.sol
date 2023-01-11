// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/Context.sol";

abstract contract AStartonWhitelist is Context {
    // Root of the merkle tree for the whitelisted address
    bytes32 internal _merkleRoot;

    /** @dev Modifier that reverts when the sender is not whitelisted */
    modifier isWhitelisted(bytes32[] memory merkleProof) {
        bytes32 leaf = keccak256(abi.encodePacked(_msgSender()));
        require(MerkleProof.verify(merkleProof, _merkleRoot, leaf), "Invalid proof");
        _;
    }
}
