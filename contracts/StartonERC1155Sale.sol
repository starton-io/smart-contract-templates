// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "./interfaces/IStartonERC1155.sol";

/// @title StartonERC1155Sale
/// @author Starton
/// @notice Sell ERC1155 tokens through a public sale with a limited available supply, start and end time as well as max tokens per address
contract StartonERC1155Sale is Context {
    using SafeMath for uint256;

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

    constructor(
        address definitiveTokenAddress,
        uint256 definitiveStartTime,
        uint256 definitiveEndTime,
        uint256 definitiveMaxTokensPerAddress,
        uint256 definitiveMaxSupply,
        address definitiveFeeReceiver
    ) {
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
     */
    function mint(
        address to,
        uint256 id,
        uint256 amount
    ) public payable isPriceSet(id) {
        require(
            msg.value >= _pricePerToken[id].price.mul(amount),
            "Insufficient funds"
        );
        require(startTime <= block.timestamp, "Minting not started");
        require(endTime >= block.timestamp, "Minting finished");

        _mint(to, id, amount);
    }

    /**
     * @notice Mint multiple tokens to a given address for a price
     * @param to The address to mint the tokens to
     * @param ids The ids of the token to mint
     * @param amounts The amounts of tokens to mint
     */
    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts
    ) public payable {
        require(
            ids.length == amounts.length,
            "ids and amounts length mismatch"
        );
        require(startTime <= block.timestamp, "Minting not started");
        require(endTime >= block.timestamp, "Minting finished");

        uint256 value = msg.value;
        uint256 totalAmount = 0;
        for (uint256 i = 0; i < ids.length; ++i) {
            require(_pricePerToken[ids[i]].isSet, "Price not set");

            totalAmount = totalAmount.add(
                _pricePerToken[ids[i]].price.mul(amounts[i])
            );
            require(value >= totalAmount, "Insufficient funds");

            _mint(to, ids[i], amounts[i]);
        }
    }

    /**
     * @notice Set the price of a batch of tokens
     * @param ids The ids of the tokens
     * @param prices The prices of the tokens
     */
    function setPrices(uint256[] memory ids, uint256[] memory prices) public {
        require(ids.length == prices.length, "Ids and prices length mismatch");

        for (uint256 i = 0; i < ids.length; ++i) {
            _pricePerToken[ids[i]] = TokenInformations(prices[i], true);
        }
    }

    /**
     * @notice Withdraw funds from the smart contract to the feeReceiver
     */
    function withdraw() public {
        payable(_feeReceiver).transfer(address(this).balance);
    }

    /**
     * @notice Get the price of a token
     * @param id The id of the token
     * @return The price of the token
     */
    function pricePerToken(uint256 id)
        public
        view
        isPriceSet(id)
        returns (uint256)
    {
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
    ) internal {
        require(
            tokensClaimed[_msgSender()].add(amount) <= maxTokensPerAddress,
            "Max tokens reached"
        );
        require(leftSupply >= amount, "Max supply reached");

        leftSupply = leftSupply.sub(amount);
        tokensClaimed[_msgSender()] = tokensClaimed[_msgSender()].add(amount);
        token.mint(to, id, amount);
    }
}
