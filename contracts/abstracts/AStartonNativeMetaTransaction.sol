// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.0;

import "./AStartonEIP712Base.sol";

/// @title AStartonNativeMetaTransaction
/// @author Starton
/// @notice Utility smart contract that enable gasless transactions
abstract contract AStartonNativeMetaTransaction is AStartonEIP712Base {
    bytes32 private constant _META_TRANSACTION_TYPEHASH =
        keccak256(bytes("MetaTransaction(uint256 nonce,address from,bytes functionSignature)"));
    event MetaTransactionExecuted(address userAddress, address payable relayerAddress, bytes functionSignature);
    mapping(address => uint256) private _nonces;

    /*
     * Meta transaction structure.
     * No point of including value field here as if user is doing value transfer then he has the funds to pay for gas
     * He should call the desired function directly in that case.
     */
    struct MetaTransaction {
        uint256 nonce;
        address from;
        bytes functionSignature;
    }

    function executeMetaTransaction(
        address userAddress,
        bytes memory functionSignature,
        bytes32 sigR,
        bytes32 sigS,
        uint8 sigV
    ) public payable returns (bytes memory) {
        MetaTransaction memory metaTx = MetaTransaction({
            nonce: _nonces[userAddress],
            from: userAddress,
            functionSignature: functionSignature
        });

        require(_verify(userAddress, metaTx, sigR, sigS, sigV), "Signer and signature do not match");

        // increase nonce for user (to avoid re-use)
        _nonces[userAddress] = _nonces[userAddress] + 1;

        emit MetaTransactionExecuted(userAddress, payable(msg.sender), functionSignature);

        // Append userAddress and relayer address at the end to extract it from calling context
        (bool success, bytes memory returnData) = address(this).call(abi.encodePacked(functionSignature, userAddress));
        require(success, "Function call not successful");

        return returnData;
    }

    function _hashMetaTransaction(MetaTransaction memory metaTx) internal pure returns (bytes32) {
        return
            keccak256(
                abi.encode(_META_TRANSACTION_TYPEHASH, metaTx.nonce, metaTx.from, keccak256(metaTx.functionSignature))
            );
    }

    function getNonce(address user) public view returns (uint256 nonce) {
        nonce = _nonces[user];
    }

    function _verify(
        address signer,
        MetaTransaction memory metaTx,
        bytes32 sigR,
        bytes32 sigS,
        uint8 sigV
    ) internal view returns (bool) {
        require(signer != address(0), "NativeMetaTransaction: INVALID_SIGNER");
        return signer == ecrecover(_toTypedMessageHash(_hashMetaTransaction(metaTx)), sigV, sigR, sigS);
    }
}
