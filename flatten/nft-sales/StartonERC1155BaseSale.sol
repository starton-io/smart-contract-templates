// Sources flattened with hardhat v2.10.1 https://hardhat.org

// File @openzeppelin/contracts/utils/Context.sol@v4.8.1

// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)

pragma solidity ^0.8.0;

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}


// File @openzeppelin/contracts/utils/introspection/IERC165.sol@v4.8.1

// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)

pragma solidity ^0.8.0;

/**
 * @dev Interface of the ERC165 standard, as defined in the
 * https://eips.ethereum.org/EIPS/eip-165[EIP].
 *
 * Implementers can declare support of contract interfaces, which can then be
 * queried by others ({ERC165Checker}).
 *
 * For an implementation, see {ERC165}.
 */
interface IERC165 {
    /**
     * @dev Returns true if this contract implements the interface defined by
     * `interfaceId`. See the corresponding
     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]
     * to learn more about how these ids are created.
     *
     * This function call must use less than 30 000 gas.
     */
    function supportsInterface(bytes4 interfaceId) external view returns (bool);
}


// File @openzeppelin/contracts/token/ERC1155/IERC1155.sol@v4.8.1

// OpenZeppelin Contracts (last updated v4.7.0) (token/ERC1155/IERC1155.sol)

pragma solidity ^0.8.0;

/**
 * @dev Required interface of an ERC1155 compliant contract, as defined in the
 * https://eips.ethereum.org/EIPS/eip-1155[EIP].
 *
 * _Available since v3.1._
 */
interface IERC1155 is IERC165 {
    /**
     * @dev Emitted when `value` tokens of token type `id` are transferred from `from` to `to` by `operator`.
     */
    event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);

    /**
     * @dev Equivalent to multiple {TransferSingle} events, where `operator`, `from` and `to` are the same for all
     * transfers.
     */
    event TransferBatch(
        address indexed operator,
        address indexed from,
        address indexed to,
        uint256[] ids,
        uint256[] values
    );

    /**
     * @dev Emitted when `account` grants or revokes permission to `operator` to transfer their tokens, according to
     * `approved`.
     */
    event ApprovalForAll(address indexed account, address indexed operator, bool approved);

    /**
     * @dev Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI.
     *
     * If an {URI} event was emitted for `id`, the standard
     * https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that `value` will equal the value
     * returned by {IERC1155MetadataURI-uri}.
     */
    event URI(string value, uint256 indexed id);

    /**
     * @dev Returns the amount of tokens of token type `id` owned by `account`.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     */
    function balanceOf(address account, uint256 id) external view returns (uint256);

    /**
     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}.
     *
     * Requirements:
     *
     * - `accounts` and `ids` must have the same length.
     */
    function balanceOfBatch(address[] calldata accounts, uint256[] calldata ids)
        external
        view
        returns (uint256[] memory);

    /**
     * @dev Grants or revokes permission to `operator` to transfer the caller's tokens, according to `approved`,
     *
     * Emits an {ApprovalForAll} event.
     *
     * Requirements:
     *
     * - `operator` cannot be the caller.
     */
    function setApprovalForAll(address operator, bool approved) external;

    /**
     * @dev Returns true if `operator` is approved to transfer ``account``'s tokens.
     *
     * See {setApprovalForAll}.
     */
    function isApprovedForAll(address account, address operator) external view returns (bool);

    /**
     * @dev Transfers `amount` tokens of token type `id` from `from` to `to`.
     *
     * Emits a {TransferSingle} event.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - If the caller is not `from`, it must have been approved to spend ``from``'s tokens via {setApprovalForAll}.
     * - `from` must have a balance of tokens of type `id` of at least `amount`.
     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the
     * acceptance magic value.
     */
    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes calldata data
    ) external;

    /**
     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}.
     *
     * Emits a {TransferBatch} event.
     *
     * Requirements:
     *
     * - `ids` and `amounts` must have the same length.
     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the
     * acceptance magic value.
     */
    function safeBatchTransferFrom(
        address from,
        address to,
        uint256[] calldata ids,
        uint256[] calldata amounts,
        bytes calldata data
    ) external;
}


// File contracts/interfaces/IStartonERC1155.sol


pragma solidity ^0.8.0;

interface IStartonERC1155 is IERC1155 {
    function mint(
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) external;

    function mint(
        address to,
        uint256 id,
        uint256 amount
    ) external payable;

    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) external;

    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts
    ) external;
}


// File contracts/nft-sales/StartonERC1155BaseSale.sol


pragma solidity 0.8.17;


/// @title StartonERC1155BaseSale
/// @author Starton
/// @notice Sell ERC1155 tokens through a public sale with a limited available supply, start and end time as well as max tokens per address
contract StartonERC1155BaseSale is Context {
    struct TokenInformations {
        uint256 price;
        bool isSet;
    }

    mapping(uint256 => TokenInformations) private _pricePerToken;

    address private immutable _feeReceiver;

    IStartonERC1155 public immutable token;

    uint256 public immutable startTime;
    uint256 public immutable endTime;
    uint256 public immutable maxTokensPerAddress;

    uint256 public leftSupply;

    mapping(address => uint256) public tokensClaimed;

    /** @dev Modifier that reverts when the pice is not set yet */
    modifier isPriceSet(uint256 id) {
        require(_pricePerToken[id].isSet, "Price not set");
        _;
    }

    /** @dev Modifier that reverts when the block timestamp is not during the sale */
    modifier isTimeCorrect() {
        require(startTime <= block.timestamp, "Minting not started");
        require(endTime >= block.timestamp, "Minting finished");
        _;
    }

    constructor(
        address definitiveTokenAddress,
        uint256 definitiveStartTime,
        uint256 definitiveEndTime,
        uint256 definitiveMaxTokensPerAddress,
        uint256 definitiveMaxSupply,
        address definitiveFeeReceiver
    ) {
        // Check if the end time is after the starting time
        require(definitiveStartTime < definitiveEndTime, "End time after start time");

        token = IStartonERC1155(definitiveTokenAddress);
        _feeReceiver = definitiveFeeReceiver;
        startTime = definitiveStartTime;
        endTime = definitiveEndTime;
        maxTokensPerAddress = definitiveMaxTokensPerAddress;
        leftSupply = definitiveMaxSupply;
    }

    /**
     * @notice Mint a token to a given address for a price
     * @param to The address to mint the token to
     * @param id The id of the token
     * @param amount The amount of tokens to mint
     * @param data The data to pass to the token (optional)
     */
    function mint(
        address to,
        uint256 id,
        uint256 amount,
        bytes32[] memory data
    ) public payable virtual isPriceSet(id) isTimeCorrect {
        require(msg.value >= _pricePerToken[id].price * amount, "Insufficient funds");

        _mint(to, id, amount);
    }

    /**
     * @notice Mint multiple tokens to a given address for a price
     * @param to The address to mint the tokens to
     * @param ids The ids of the token to mint
     * @param amounts The amounts of tokens to mint
     * @param data The data to pass to the token (optional)
     */
    function mintBatch(
        address to,
        uint256[] calldata ids,
        uint256[] calldata amounts,
        bytes32[] memory data
    ) public payable virtual isTimeCorrect {
        require(ids.length == amounts.length, "Ids and amounts length mismatch");

        uint256 value = msg.value;
        uint256 totalAmount = 0;
        for (uint256 i = 0; i < ids.length; ++i) {
            require(_pricePerToken[ids[i]].isSet, "Price not set");

            totalAmount += _pricePerToken[ids[i]].price * amounts[i];
            require(value >= totalAmount, "Insufficient funds");

            _mint(to, ids[i], amounts[i]);
        }
    }

    /**
     * @notice Set the price of a batch of tokens
     * @param ids The ids of the tokens
     * @param prices The prices of the tokens
     */
    function setPrices(uint256[] calldata ids, uint256[] calldata prices) public virtual {
        require(ids.length == prices.length, "Ids and prices length mismatch");

        for (uint256 i = 0; i < ids.length; ++i) {
            _pricePerToken[ids[i]] = TokenInformations(prices[i], true);
        }
    }

    /**
     * @notice Withdraw funds from the smart contract to the feeReceiver
     */
    function withdraw() public virtual {
        payable(_feeReceiver).transfer(address(this).balance);
    }

    /**
     * @notice Get the price of a token
     * @param id The id of the token
     * @return The price of the token
     */
    function pricePerToken(uint256 id) public view virtual isPriceSet(id) returns (uint256) {
        return _pricePerToken[id].price;
    }

    /**
     * @dev Mint a token to the given address and updates state variables for the sale
     * @param to The address to mint the token to
     * @param id The id of the token
     * @param amount The amount of tokens to mint
     */
    function _mint(
        address to,
        uint256 id,
        uint256 amount
    ) internal virtual {
        require(tokensClaimed[_msgSender()] + amount <= maxTokensPerAddress, "Max tokens reached");
        require(leftSupply >= amount, "Max supply reached");

        unchecked {
            leftSupply -= amount;
        }
        tokensClaimed[_msgSender()] += amount;
        token.mint(to, id, amount);
    }
}
