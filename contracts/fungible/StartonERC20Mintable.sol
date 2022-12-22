// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "./StartonERC20Base.sol";

/// @title StartonERC20Mintable
/// @author Starton
/// @notice ERC20 tokens that can be paused, locked, burned, have a access management and handle meta transactions
contract StartonERC20Mintable is StartonERC20Base {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant LOCKER_ROLE = keccak256("LOCKER_ROLE");

    bool private _isMintAllowed;

    /** @notice Event emitted when the minting is locked */
    event MintingLocked(address indexed account);

    /** @dev Modifier that reverts when the minting is locked */
    modifier mintingNotLocked() {
        require(_isMintAllowed, "Minting is locked");
        _;
    }

    constructor(
        string memory definitiveName,
        string memory definitiveSymbol,
        uint256 initialSupply,
        address initialOwnerOrMultiSigContract
    )
        StartonERC20Base(
            definitiveName,
            definitiveSymbol,
            initialSupply,
            initialOwnerOrMultiSigContract
        )
    {
        // Set all default roles for initialOwnerOrMultiSigContract
        _setupRole(MINTER_ROLE, initialOwnerOrMultiSigContract);
        _setupRole(LOCKER_ROLE, initialOwnerOrMultiSigContract);

        // Allow minting of new tokens
        _isMintAllowed = true;
    }

    /**
     * @notice Mint new tokens
     * @param to The address that will receive the minted tokens
     * @param amount The amount of tokens to mint
     * @custom:requires MINTER_ROLE
     */
    function mint(address to, uint256 amount)
        public
        mintingNotLocked
        onlyRole(MINTER_ROLE)
    {
        _mint(to, amount);
    }

    /**
     * @notice Lock the mint and won't allow any minting anymore if the contract is not paused
     * @custom:requires LOCKER_ROLE
     */
    function lockMint() public whenNotPaused onlyRole(LOCKER_ROLE) {
        _isMintAllowed = false;
        emit MintingLocked(_msgSender());
    }
}
