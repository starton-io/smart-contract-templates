import {
  Blockchain,
  SmartContractTemplateCategory,
  SmartContractTemplate,
} from "./scripts/smart-contract-template";

const LIST: SmartContractTemplate[] = [
  {
    id: "ERC721_META_TRANSACTION",
    name: "ERC721 NFT smart contract",
    description: `<p>The smart contract standard to manage single-copy NFTs.</p>
        <p>This meta-transaction version enables you to send transactions on behalf of your users so they can use their NFT without paying gas fees.</p>
        <p>It also includes another feature which is called blacklist. It allows the owner to blacklist one or more addresses to transfer tokens on behalf of your users for example if you want to block the sales happening in a marketplace.</p>
        <p>Notice that we do not store any content in the smart contract. Smart contract store only references. It is up to smart contract readers to find the content using references.</p>
        <p>Starton provides an <a href="https://app.starton.io/ipfs">IPFS integration</a> in case you need to host your NFT content.</p>
        <p>Parameters:</p>
        <ul>
        <li><strong>DefinitiveName:</strong> The name of your smart contract which will be reflected on-chain.</li>
        <li><strong>initialTokenUri: </strong> Will be used to get the token URI. It must be in this exact format because {id} will then be replaced by the tokenId
        <ul>
        <li>Using IPFS: <code>ipfs://ipfs/CID/{id}</code></li>
        <li>Using a centralised server: <code>https://yourapi.com/endpoint/CID/{id}</code></li>
        </ul>
        </li>
        <li><strong>initialContractUri: </strong> The URI of the metadata that will be used to give more details about the description
        <ul>Example: { "name": "name of your collection", "description": "description of your collection", "image": "URL to image", "external_link": "external-link-URL", "seller_fee_basis_points": 100, // Indicates a 1% seller fee. "fee_recipient": "0xA97F337c39cccE66adfeCB2BF99C1DdC54C2D721" // Where seller fees will be paid to. }</ul>
        </li>
        <li><strong>initialOwnerOrMultisigContract: </strong> The address that will own the NFT Collection</li>
        </ul>`,
    shortDescription: `The smart contract template to deploy single-copy NFTs`,
    blockchains: [
      Blockchain.POLYGON,
      Blockchain.AVALANCHE,
      Blockchain.BINANCE,
      Blockchain.ETHEREUM,
    ],
    compilationDetails: {
      contractName: "StartonERC721Base",
    },
    isActivated: true,
    isAudited: false,
    order: 1,
    category: SmartContractTemplateCategory.NFT,
    tags: ["ERC721"],
  },
  {
    id: "ERC721_CAPPED_META_TRANSACTION",
    name: "ERC721 NFT with limited supply",
    description: `<p>The capped ERC721 NFT smart contract template for single-copy Non Fungible Tokens (NFT). In a video game, you can sell an NFT and pay for gas for the NFT receiver. Within this standard, the token is linked to its owner's address and to the URI (Unique Resource Identifier) which references the NFT content.</p>
    <p>This version enables you to send transactions on behalf of your users so they can use their NFT without having to pay for gas fees. In contrast to the standard version of meta-transaction where you can mint an infinite amount of NFTS, here you can set a maximum limit to the supply of NFTs.</p>
    <p>It also includes a blacklist feature. It allows the owner to blacklist one or more addresses to transfer tokens on behalf of your users for example if you want to block sales happening in a marketplace.</p>
    <p>Notice that we do not store any content in the smart contract. Smart contract store only references. It is up to smart contract readers to find the content using references.</p>
    <p>Starton provides an <a href="https://app.starton.io/ipfs">IPFS integration</a> in case you need to host your NFT content.</p>
    <p>Parameters:</p>
    <ul>
    <li><strong>DefinitiveName:</strong> The name of your smart contract which will be reflected on-chain.</li>
    <li><strong>DefinitiveSymbol: </strong> The symbol associated with the NFT or its collection.</li>
    <li><strong>DefinitiveMaxSupply: </strong> The maximum number of NFT that can be minted.</li>
    <li><strong>initialBaseTokenUri: </strong> Will be used to concatenate NFT URIs
    <ul>
    <li>Using IPFS: <code>ipfs://ipfs/</code></li>
    <li>Using a centralised server: <code>https://yourapi.com/endpoint/</code></li>
    </ul>
    </li>
    <li><strong>initialContractUri: </strong> The URI of the metadata that will be used to give more details about the description
    <ul>Example: { "name": "name of your collection", "description": "description of your collection", "image": "URL to image", "external_link": "external-link-URL", "seller_fee_basis_points": 100, // Indicates a 1% seller fee. "fee_recipient": "0xA97F337c39cccE66adfeCB2BF99C1DdC54C2D721" // Where seller fees will be paid to. }</ul>
    </li>
    <li><strong>initialOwnerOrMultisigContract: </strong> The address that will own the NFT Collection</li>
    </ul>`,
    shortDescription: `The capped ERC721 NFT smart contract template for single-copy Non Fungible Tokens (NFT).`,
    blockchains: [
      Blockchain.POLYGON,
      Blockchain.AVALANCHE,
      Blockchain.BINANCE,
      Blockchain.ETHEREUM,
    ],
    compilationDetails: {
      contractName: "StartonERC721Capped",
    },
    isActivated: true,
    isAudited: false,
    order: 2,
    category: SmartContractTemplateCategory.NFT,
    tags: ["ERC721"],
  },
  {
    id: "ERC1155_META_TRANSACTION",
    name: "ERC1155 NFTs collection",
    description: `<p>The smart contract template for multiple-copies of Non Fungible Tokens (NFT). In a video game, you can sell equipment and pay for gas in place of the equipment receiver. Within this standard, the token is linked to its owner's address and to URIs (Unique Resource Identifier), which references the NFT content.</p>
    <p>This meta-transaction version enables you to send transactions on behalf of your users so they can use their NFT without having to pay for gas fees.</p>
    <p>It also includes the blacklist feature. It allows the owner to block one or more addresses from transfering tokens on behalf of your users for example if you want to block the sales happening in a marketplace.</p>
    <p>Notice that we do not store any content in the smart contract. Smart contract store only references. It is up to smart contract readers to find the content using references.</p>
    <p>Starton provides an <a href="https://app.starton.io/ipfs">IPFS integration</a> in case you need to host your NFT content.</p>
    <p>Parameters:</p>
    <ul>
    <li><strong>DefinitiveName:</strong> The name of your smart contract which will be reflected on-chain.</li>
    <li><strong>DefinitiveSymbol: </strong> The symbol associated with the NFT or its collection.</li>
    <li><strong>initialBaseTokenUri: </strong> Will be used to concatenate NFT URIs
    <ul>
    <li>Using IPFS: <code>ipfs://ipfs/</code></li>
    <li>Using a centralised server: <code>https://yourapi.com/endpoint/</code></li>
    </ul>
    </li>
    <li><strong>initialContractUri: </strong> The URI of the metadata that will be used to give more details about the description
    <ul>Example: { "name": "name of your collection", "description": "description of your collection", "image": "url to image", "external_link": "external-link-url", "seller_fee_basis_points": 100, // Indicates a 1% seller fee. "fee_recipient": "0xA97F337c39cccE66adfeCB2BF99C1DdC54C2D721" // Where seller fees will be paid to. }</ul>
    </li>
    <li><strong>initialOwnerOrMultisigContract: </strong> The address that will own the NFT Collection</li>
    </ul>`,
    shortDescription: `The smart contract standard to manage multiple-copies NFTs.`,
    blockchains: [
      Blockchain.POLYGON,
      Blockchain.AVALANCHE,
      Blockchain.BINANCE,
      Blockchain.ETHEREUM,
    ],
    compilationDetails: {
      contractName: "StartonERC1155Base",
    },
    isActivated: true,
    isAudited: false,
    order: 3,
    category: SmartContractTemplateCategory.NFT,
    tags: ["ERC1155"],
  },
  {
    id: "ERC20_META_TRANSACTION",
    name: "ERC20 Token with fixed supply",
    description: `<p>The smart contract template for fungible tokens. No new tokens can be created after the initial emission. In a video game, fixed fungible tokens can represent gems available only in limited supply.</p>
    <p>This template includes meta-transaction that enables you to send transactions on behalf of your users so they can use their tokens without having to pay for gas fees.</p>
    <p>Parameters:</p>
    <ul>
    <li><strong>DefinitiveName:</strong> The name of your smart contract which will be reflected on-chain.</li>
    <li><strong>definitiveSymbol: </strong> The symbol of your smart contract which will be reflected on-chain</li>
    <li><strong>definitiveSupply: </strong> The total amount of tokens that will ever be minted.</li>
    <li><strong>initialOwnerOrMultisigContract: </strong> The address that will own the ERC20 contract</li>
    </ul>`,
    shortDescription: `The smart contract template for fungible tokens. No new tokens can be created after the initial emission.`,
    blockchains: [
      Blockchain.POLYGON,
      Blockchain.AVALANCHE,
      Blockchain.BINANCE,
      Blockchain.ETHEREUM,
    ],
    compilationDetails: {
      contractName: "StartonERC20Base",
    },
    isActivated: true,
    isAudited: false,
    order: 4,
    category: SmartContractTemplateCategory.FUNGIBLE,
    tags: ["ERC20"],
  },
  {
    id: "ERC20_MINT_META_TRANSACTION",
    name: "ERC20 Token with mintable supply",
    description: `<p>The smart contract template for fungible tokens. New tokens can be minted after the initial emission. In a video game, mintable fungible tokens can represent the currency gamers can spend in-game.</p>
    <p>This template includes meta-transaction that enables you to send transactions on behalf of your users so they can use their tokens without having to pay for gas fees.</p>
    <p>Parameters:</p>
    <ul>
    <li><strong>DefinitiveName:</strong> The name of your smart contract which will be reflected on-chain.</li>
    <li><strong>definitiveSymbol: </strong> The symbol of your smart contract which will be reflected on-chain</li>
    <li><strong>initialSupply: </strong> The amount of tokens that will be minted when the smart contract is deployed.</li>
    <li><strong>initialOwnerOrMultisigContract: </strong> The address that will own the ERC20 contract</li>
    </ul>`,
    shortDescription: `The smart contract template for fungible tokens. Admin can mint new tokens after initial emission.`,
    blockchains: [
      Blockchain.POLYGON,
      Blockchain.AVALANCHE,
      Blockchain.BINANCE,
      Blockchain.ETHEREUM,
    ],
    compilationDetails: {
      contractName: "StartonERC20Mintable",
    },
    isActivated: true,
    isAudited: false,
    order: 5,
    category: SmartContractTemplateCategory.FUNGIBLE,
    tags: ["ERC20"],
  },
  {
    id: "ERC721_SALE",
    name: "ERC721 single-copy NFT Sale",
    description: `<p>The smart contract to help you sell ERC721 tokens. In a video game, you can sell a piece of land.</p>
    <p>The sale version enables you to mint a new token and sell it to your users. It helps you set up a sale, select when it starts and ends, and set a maximum number of tokens that can be sold in total or to the same user.</p>
    <p>Notice that the baseURI of the ERC721 contract should be the URI that is linked to a directory on ipfs or your centralized server because when minting a new token, the URI will be added to the id. For example, https://ipfs.io/QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR/0</p>
    <p>Parameters:</p>
    <ul>
    <li><strong>definitiveTokenAddress:</strong> The token address of the ERC721 that you want sale</li>
    <li><strong>definitivePrice: </strong> The price that the NFTs will be sold for</li>
    <li><strong>definitiveStartTime: </strong> The time when the sale will begin and users can mint tokens</li>
    <li><strong>definitiveEndTime: </strong> The time when the sale will end and users couldn't mint any more tokens</li>
    <li><strong>definitiveMaxTokensPerAddres: </strong> The maximum amount of tokens that can be minted by a single address</li>
    <li><strong>definitiveMaxSupply: </strong> The maximum amount of tokens that can be minted during the sale</li>
    <li><strong>definitiveFeeReceiver: </strong> The address that will receive all the price paid to mint the NFTs</li>
    </ul>`,
    shortDescription: `The smart contract template for selling single-copy NFTs.`,
    blockchains: [
      Blockchain.POLYGON,
      Blockchain.AVALANCHE,
      Blockchain.BINANCE,
      Blockchain.ETHEREUM,
    ],
    compilationDetails: {
      contractName: "StartonERC721BaseSale",
    },
    isActivated: true,
    isAudited: false,
    order: 6,
    category: SmartContractTemplateCategory.SALE,
    tags: ["ERC721"],
  },
  {
    id: "ERC1155_SALE",
    name: "ERC1155 NFT Collection Sale",
    description: `<p>The smart contract to help you sell ERC1155 tokens.In a video game, you can sell a piece of equipment to another player.</p>
    <p>The sale version enables you to mint a new token and sell it to your users. It helps you set up a sale, select when it starts and ends, and set a maximum number of tokens that can be sold in total or to the same user.</p>
    <p>Notice that you must set the price of the tokens you want to sell after creating the contract by calling the setPrices function.</p>
    <p>Parameters:</p>
    <ul>
    <li><strong>definitiveTokenAddress:</strong> The token address of the ERC721 that you want sale</li>
    <li><strong>definitiveStartTime: </strong> The time when the sale will begin and users can mint tokens</li>
    <li><strong>definitiveEndTime: </strong> The time when the sale will end and users couldn't mint anymore tokens</li>
    <li><strong>definitiveMaxTokensPerAddres: </strong> The maximum amount of otkens that can be minted by a single address</li>
    <li><strong>definitiveMaxSupply: </strong> The maximum amount of tokens that can be minted during the sale</li>
    <li><strong>definitiveFeeReceiver: </strong> The address that will receive all the price paid to mint the NFTs</li>
    </ul>`,
    shortDescription: `The smart contract template for selling multiple-copies NFTs.`,
    blockchains: [
      Blockchain.POLYGON,
      Blockchain.AVALANCHE,
      Blockchain.BINANCE,
      Blockchain.ETHEREUM,
    ],
    compilationDetails: {
      contractName: "StartonERC1155BaseSale",
    },
    isActivated: true,
    isAudited: false,
    order: 7,
    category: SmartContractTemplateCategory.SALE,
    tags: ["ERC1155"],
  },
  {
    id: "ERC721_WHITELIST_SALE",
    name: "ERC721 Whitelist Sale",
    description: `<p>The smart contract template to sell NFTs only to selected users. In a video game, you can sell a piece of land only to players of an approved rank </p>	<p>This Whitelist version enables you to create a whitelist of users that can buy your tokens through a Merkle tree.</p>
    <p>This template enables you to mint a new token and sell it to your users. It helps you set up a sale, select when it starts and ends, and set a maximum number of tokens that can be sold in total or to the same user.</p>
    <p>Notice that the baseURI of the ERC721 contract should be the URI that is linked to a directory on ipfs or your centralized server because when minting a new token, the URI will be added to the id. For example,QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR/0</p>
    <p>Parameters:</p>
    <ul>
    <li><strong>definitiveTokenAddress:</strong>The token address of the ERC721 that you want sale</li>
    <li><strong>definitivePrice: </strong> The price that the NFTs will be sold for</li>
    <li><strong>definitiveMerkleRoot: </strong> The root of the Merkle tree that contains the list of the users that can buy the NFTs</li>
    <li><strong>definitiveStartTime: </strong> The time when the sale will begin and users can mint tokens</li>
    <li><strong>definitiveEndTime: </strong> The time when the sale will end and users couldn't mint any more tokens</li>
    <li><strong>definitiveMaxTokensPerAddres: </strong> The maximum amount of tokens that can be minted by a single address</li>
    <li><strong>definitiveMaxSupply: </strong> The maximum amount of tokens that can be minted during the sale</li>
    <li><strong>definitiveFeeReceiver: </strong> The address that will receive all the price paid to mint the NFTs</li>
    </ul>`,
    shortDescription: `The smart contract template to sell NFTs only to selected users.`,
    blockchains: [
      Blockchain.POLYGON,
      Blockchain.AVALANCHE,
      Blockchain.BINANCE,
      Blockchain.ETHEREUM,
    ],
    compilationDetails: {
      contractName: "StartonERC721WhitelistSale",
    },
    isActivated: true,
    isAudited: false,
    order: 8,
    category: SmartContractTemplateCategory.SALE,
    tags: ["ERC721"],
  },
  {
    id: "ERC1155_WHITELIST_SALE",
    name: "ERC1155 Whitelist Sale",
    description: `<p>The smart contract template to help sell ERC1155 tokens to a specified list of users. In a video game, you can sell a piece of equipment only to a list of approved players.</p>
    <p>This Whitelist version enables you to create a whitelist of users that can buy your tokens through a Merkle tree.</p>
    <p>This template enables you to mint a new token and sell it to your users. It helps you set up a sale, select when it starts and ends, and set a maximum number of tokens that can be sold in total or to the same user.</p>
    <p>Notice that you must set the price of the tokens you want to sell after creating the contract by calling the setPrices function.</p>
    <p>Parameters:</p>
    <ul>
    <li><strong>definitiveTokenAddress:</strong> The token address of the ERC721 that you want sale</li>
    <li><strong>definitiveMerkleRoot: </strong> The root of the merkle tree that contains the list of the users that can buy the NFTs</li>
    <li><strong>definitiveStartTime: </strong> The time when the sale will begin and users can mint tokens</li>
    <li><strong>definitiveEndTime: </strong> The time when the sale will end and users couldn't mint any more tokens</li>
    <li><strong>definitiveMaxTokensPerAddres: </strong> The maximum amount of tokens that can be minted by a single address</li>
    <li><strong>definitiveMaxSupply: </strong> The maximum amount of tokens that can be minted during the sale</li>
    <li><strong>definitiveFeeReceiver: </strong> The address that will receive all the price paid to mint the NFTs</li>
    </ul>`,
    shortDescription: `The smart contract template for selling multiple copies of NFTs only to a specified list of addresses.`,
    blockchains: [
      Blockchain.POLYGON,
      Blockchain.AVALANCHE,
      Blockchain.BINANCE,
      Blockchain.ETHEREUM,
    ],
    compilationDetails: {
      contractName: "StartonERC1155WhitelistSale",
    },
    isActivated: true,
    isAudited: false,
    order: 9,
    category: SmartContractTemplateCategory.SALE,
    tags: ["ERC1155"],
  },
  {
    id: "ERC721_AUCTION_SALE",
    name: "ERC721 NFT Sale in an Auction",
    description: `<p>The smart contract that can help you sell in the form of auction ERC721 tokens. This smart contract has to be chained with an ERC721 smart contract.</p>
    <p>Parameters:</p>
    <ul>
    <li><strong>definitiveTokenAddress:</strong> The token address of the ERC721 that you wants sale</li>
    <li><strong>definitiveFeeReceiver: </strong> The address that will receive all the price paid to mint the NFTs</li>
    <li><strong>initialStartingPrice: </strong> The initial price that the NFT will be sold for</li>
    <li><strong> initialMinPriceDifference: </strong> The price increase that a user needs to at least put to bid on top of the current auction winner</li>
    <li><strong>initialStartTime: </strong> The time when the sale will begin and users can bid</li>
    <li><strong>initialEndTime: </strong> The time when the sale will end and users couldn't bid anymore</li>
    <li><strong>initialTokenURI: </strong> the URI that will be appended at the end of the base token URI for the token that will be minted</li>
    </ul>`,
    shortDescription: `The smart contract to sell NFTs in a form of auction.`,
    blockchains: [
      Blockchain.POLYGON,
      Blockchain.AVALANCHE,
      Blockchain.BINANCE,
      Blockchain.ETHEREUM,
    ],
    compilationDetails: {
      contractName: "StartonERC721AuctionSale",
    },
    isActivated: true,
    isAudited: false,
    order: 10,
    category: SmartContractTemplateCategory.SALE,
    tags: ["ERC721"],
  },
  {
    id: "ERC1155_AUCTION_SALE",
    name: "ERC1155 NFT collection Sale in an Auction",
    description: `<p>The smart contract that can help you sell in the form of auction ERC1155 tokens. In a video game, you can sell a piece of equipment to the player placing the highest bid.</p>
    <p>Notice you can start a new auction by simply calling the startNewAuction function without having to deploy a new contract.</p>
    <p>Parameters:</p>
    <ul>
    <li><strong>definitiveTokenAddress:</strong> The token address of the ERC721 that you wants sale</li>
    <li><strong>definitiveFeeReceiver: </strong> The address that will receive all the price paid to mint the NFTs</li>
    <li><strong>initialStartingPrice: </strong> The initial price that the NFT will be sold for</li>
    <li><strong> initialMinPriceDifference: </strong> The price increase that a user needs to at least put to bid on top of the current auction winner</li>
    <li><strong>initialStartTime: </strong> The time when the sale will begin and users can bid</li>
    <li><strong>initialEndTime: </strong> The time when the sale will end and users couldn't bid anymore</li>
    <li><strong>initialTokenId: </strong> The URI that will be appended at the end of the base token URI for the token that will be minted</li>
    <li><strong>initialTokenAmount: </strong> The amount of tokens that will be minted to the winner of the auction</li>
    </ul>`,
    shortDescription: `The smart contract template for selling multiple copies of NFTs in the form of an Auction to the highest bidder in a time slot.`,
    blockchains: [
      Blockchain.POLYGON,
      Blockchain.AVALANCHE,
      Blockchain.BINANCE,
      Blockchain.ETHEREUM,
    ],
    compilationDetails: {
      contractName: "StartonERC1155AuctionSale",
    },
    isActivated: true,
    isAudited: false,
    order: 11,
    category: SmartContractTemplateCategory.SALE,
    tags: ["ERC1155"],
  },
  {
    id: "PAYMENT_SPLITTER",
    name: "Payment Splitter",
    description: `<p>The smart contract template to split all payments between a list of users with a defined share for each of them.</p>
          <p>Parameters:</p>
          <ul>
          <li><strong>payees:</strong> The list of addresses that will receive a split of all the payments.</li>
          <li><strong>shares: </strong> The share that each address will get from the payment.</li>
          </ul>`,
    shortDescription: `The smart contract template to split all payments between a list of users with a defined share for each of them.`,
    blockchains: [
      Blockchain.POLYGON,
      Blockchain.AVALANCHE,
      Blockchain.BINANCE,
      Blockchain.ETHEREUM,
    ],
    compilationDetails: {
      contractName: "StartonPaymentSplitter",
    },
    isActivated: true,
    isAudited: false,
    order: 12,
    category: SmartContractTemplateCategory.OTHER,
    tags: [],
  },
  {
    id: "sct_010e42e313cd4de3a4f191510848e9b6",
    name: "Child ERC1155",
    description: `<p>The ERC1155 is a smart contract standard which is specialised in multiple-copies Non Fungible Tokens (NFT).
        Within this standard, tokens are linked to addresses (the owners) and to URIs (references of the NFT contents).</p>
        <p>It is important to notice that we do not store any content directly inside the smart contract.
        Only references are stored. It is up to the smart contract readers to find the content by themselves using the references.</p>
        <p>Starton provides an <a href="https://app.starton.io/ipfs">IPFS integration</a> in case you need to host your NFT contents.</p>
        <p>Parameters :</p>
        <ul>
        <li><strong>Name</strong> : This is the name of your smart contract which will be reflected on-chain.</li>
        <li><strong>BaseUri</strong> : Will be used to concatenate NFT URIs and the ContractUriSuffix<ul>
        <li>Using IPFS: it should be <code>ipfs://ipfs/</code></li>
        <li>Using a centralised server: it should be like <code>https://yourapi.com/endpoint/</code></li>
        </ul>
        </li>
        <li><strong>ContractUriSuffix</strong> (will be concatenated with baseUri):<ul>
        <li>Using IPFS: it is the CID of the contract metadata (more info <a href="https://docs.opensea.io/docs/contract-level-metadata">here</a>)</li>
        <li>Using a centralised server: the path of the contract metadata json</li>
        </ul>
        </li>
        </ul>`,
    shortDescription: `The smart contract template for bridging multiple-copies Non Fungible Tokens (NFT) between Ethereum and Polygon. For example, at large scale, to reduce gas fees and increase speed, NFTs can be transferred from one blockchain network to another. `,
    blockchains: [Blockchain.POLYGON],
    compilationDetails: {
      contractName: "ChildStartonERC1155",
    },
    isActivated: true,
    isAudited: false,
    order: 92,
    category: SmartContractTemplateCategory.DEPRECATED,
    tags: [],
  },
  {
    id: "sct_743c793cffa741cbafcb7a91f6fd9629",
    name: "Child ERC20 Mintable Fungible tokens",
    description: `<p>The ERC20 is a smart contract standard made for fungible tokens (I.e: interchangeable tokens like coins).</p> <p>The mintable version of this standard allows the creator to mint new tokens whenever they want.</p> <p>This brings more usage flexibility but implies more trust towards the creators as well.</p> <p>Parameters :</p> <ul> <li><strong>Name</strong> : This is the name of your smart contract which will be reflected on-chain.</li> <li><strong>Symbol</strong> : This is the symbol associated to the NFT collection</li> <li><strong>Initial Supply</strong> : Initial amount of token emitted at the smart contract creation.</li> </ul> <p>You should add 18 trailing zeros to compensate the number of digits reserved to decimals.</p>`,
    shortDescription: `The smart contract template for bridging mintable fungible tokens between Ethereum and Polygon. For example, at large scale, to reduce gas fees and increase speed, tokens can be transferred from one blockchain network to another. `,
    blockchains: [Blockchain.POLYGON],
    compilationDetails: {
      contractName: "ChildStartonERC20MintBurnPause",
    },
    isActivated: true,
    isAudited: false,
    order: 93,
    category: SmartContractTemplateCategory.DEPRECATED,
    tags: [],
  },
  {
    id: "sct_935a8097313a4240b434fd4bf6f6ee62",
    name: "Child ERC20 Fungible token in Fixed Supply",
    description: `<p>The ERC20 is a smart contract standard made for fungible tokens (i.e: interchangeable tokens like coins). The fixed supply version of this standard guarantees no token will ever be created after the initial emission. Therefore some flexibility is sacrificed for the sake of more trust towards the token.</p> <p>Parameters :</p> <ul> <li><strong>Name</strong> : This is the name of your smart contract which will be reflected on-chain.</li> <li><strong>Symbol</strong> : This is the symbol associated to the NFT collection</li> <li><strong>Initial Supply</strong> : Initial amount of token emitted at the smart contract creation. You should add 18 trailing zeros to compensate the number of digits reserved to decimals.</li> </ul>`,
    shortDescription: `The smart contract template for bridging fixed fungible tokens between Ethereum and Polygon.For example, at large scale, to reduce gas fees and increase speed, tokens can be transferred from one blockchain network to another. `,
    blockchains: [Blockchain.POLYGON],
    compilationDetails: {
      contractName: "ChildStartonERC20BurnPause",
    },
    isActivated: true,
    isAudited: false,
    order: 94,
    category: SmartContractTemplateCategory.DEPRECATED,
    tags: [],
  },
  {
    id: "sct_b17f3cc1e0a44b03b309d20a854fda48",
    name: "Child ERC721",
    description: `<p>The ERC721 is a smart contract standard which is specialised in single-copy Non Fungible Tokens (NFT).
        Within this standard, tokens are linked to addresses (the owners) and to URIs (references of the NFT contents).</p>
        <p>It is important to notice that we do not store any content directly inside the smart contract.
        Only references are stored. It is up to the smart contract readers to find the content by themselves using the references.</p>
        <p>Starton provides an <a href="https://app.starton.io/ipfs">IPFS integration</a> in case you need to host your NFT contents.</p>
        <p>Parameters :</p>
        <ul>
        <li><strong>Name</strong> : This is the name of your smart contract which will be reflected on-chain.</li>
        <li><strong>Symbol</strong> : This is the symbol associated to the NFT collection</li>
        <li><strong>BaseUri</strong> : Will be used to concatenate NFT URIs and the ContractUriSuffix<ul>
        <li>Using IPFS: it should be <code>ipfs://ipfs/</code></li>
        <li>Using a centralised server: it should be like <code>https://yourapi.com/endpoint/</code></li>
        </ul>
        </li>
        <li><strong>ContractUriSuffix</strong> (will be concatenated with baseUri):<ul>
        <li>Using IPFS: it is the CID of the contract metadata (more info <a href="https://docs.opensea.io/docs/contract-level-metadata">here</a>)</li>
        <li>Using a centralised server: the path of the contract metadata json</li>
        </ul>
        </li>
        </ul>`,
    shortDescription: `The smart contract template for bridging single-copy Non-Fungible Tokens (NFT) between Ethereum and Polygon. For example, at large scale, to reduce gas fees and increase speed, NFTs can be transferred from one blockchain network to another. `,
    blockchains: [Blockchain.POLYGON],
    compilationDetails: {
      contractName: "ChildStartonERC721",
    },
    isActivated: true,
    isAudited: false,
    order: 95,
    category: SmartContractTemplateCategory.DEPRECATED,
    tags: [],
  },
  {
    id: "sct_81d50607677241beac764bfadd31a3a7",
    name: "Fungible Token with fixed supply (ERC20)",
    description: `<p>The ERC20 is a smart contract standard made for fungible tokens (i.e: interchangeable tokens like coins). The fixed supply version of this standard guarantees no token will ever be created after the initial emission. Therefore some flexibility is sacrificed for the sake of more trust towards the token.</p> <p>Parameters :</p> <ul> <li><strong>Name</strong> : This is the name of your smart contract which will be reflected on-chain.</li> <li><strong>Symbol</strong> : This is the symbol associated to the NFT collection</li> <li><strong>Initial Supply</strong> : Initial amount of token emitted at the smart contract creation. You should add 18 trailing zeros to compensate the number of digits reserved to decimals.</li> </ul>`,
    shortDescription: `The smart contract template for fungible tokens. No new token can be created after the initial emission. The smart contract template for fungible tokens. No new token can be created after the initial emission.`,
    blockchains: [
      Blockchain.POLYGON,
      Blockchain.AVALANCHE,
      Blockchain.BINANCE,
      Blockchain.ETHEREUM,
    ],
    compilationDetails: {
      contractName: "StartonERC20BurnPause",
    },
    isActivated: true,
    isAudited: false,
    order: 96,
    category: SmartContractTemplateCategory.DEPRECATED,
    tags: [],
  },
  {
    id: "sct_82bde80651bd40cca12f044cb80821bc",
    name: "Fungible Token with mintable supply (ERC20)",
    description: `<p>The ERC20 is a smart contract standard made for fungible tokens (I.e: interchangeable tokens like coins).</p> <p>The mintable version of this standard allows the creator to mint new tokens whenever they want.</p> <p>This brings more usage flexibility but implies more trust towards the creators as well.</p> <p>Parameters :</p> <ul> <li><strong>Name</strong> : This is the name of your smart contract which will be reflected on-chain.</li> <li><strong>Symbol</strong> : This is the symbol associated to the NFT collection</li> <li><strong>Initial Supply</strong> : Initial amount of token emitted at the smart contract creation.</li> </ul> <p>You should add 18 trailing zeros to compensate the number of digits reserved to decimals.</p>`,
    shortDescription: `The smart contract template for fungible tokens. Creators can mint new tokens after initial emission. In a video game, mintable fungible tokens can represent the currency gamers can spend in-game.`,
    blockchains: [
      Blockchain.POLYGON,
      Blockchain.AVALANCHE,
      Blockchain.BINANCE,
      Blockchain.ETHEREUM,
    ],
    compilationDetails: {
      contractName: "StartonERC20MintBurnPause",
    },
    isActivated: true,
    isAudited: false,
    order: 97,
    category: SmartContractTemplateCategory.DEPRECATED,
    tags: [],
  },
  {
    id: "sct_d4c1d5f2ed6f44d185bfb60eee2dbcaf",
    name: "One-to-many NFT Collection (ERC-1155)",
    description: `<p>The ERC1155 is a smart contract standard which is specialised in multiple-copies Non Fungible Tokens (NFT).
        Within this standard, tokens are linked to addresses (the owners) and to URIs (references of the NFT contents).</p>
        <p>It is important to notice that we do not store any content directly inside the smart contract.
        Only references are stored. It is up to the smart contract readers to find the content by themselves using the references.</p>
        <p>Starton provides an <a href="https://app.starton.io/ipfs">IPFS integration</a> in case you need to host your NFT contents.</p>
        <p>Parameters :</p>
        <ul>
        <li><strong>Name</strong> : This is the name of your smart contract which will be reflected on-chain.</li>
        <li><strong>BaseUri</strong> : Will be used to concatenate NFT URIs and the ContractUriSuffix<ul>
        <li>Using IPFS: it should be <code>ipfs://ipfs/</code></li>
        <li>Using a centralised server: it should be like <code>https://yourapi.com/endpoint/</code></li>
        </ul>
        </li>
        <li><strong>ContractUriSuffix</strong> (will be concatenated with baseUri):<ul>
        <li>Using IPFS: it is the CID of the contract metadata (more info <a href="https://docs.opensea.io/docs/contract-level-metadata">here</a>)</li>
        <li>Using a centralised server: the path of the contract metadata json</li>
        </ul>
        </li>
        </ul>`,
    shortDescription: `The smart contract standard to manage multiple-copies NFTs. Though their content is identical, each NFT has a different token ID. In a video game, it can be a piece of equipment won after an action such as a powerful sword after defeating an enemy. Every user defeating the enemy will own an edition of the sword with a different identifier. `,
    blockchains: [
      Blockchain.POLYGON,
      Blockchain.AVALANCHE,
      Blockchain.BINANCE,
      Blockchain.ETHEREUM,
    ],
    compilationDetails: {
      contractName: "StartonERC1155",
    },
    isActivated: true,
    isAudited: false,
    order: 98,
    category: SmartContractTemplateCategory.DEPRECATED,
    tags: [],
  },
  {
    id: "sct_e851adefe4494fc991207b2c37ed8a83",
    name: "One-to-one NFT Deployment (ERC-721)",
    description: `<p>The ERC721 is a smart contract standard which is specialised in single-copy Non Fungible Tokens (NFT).
        Within this standard, tokens are linked to addresses (the owners) and to URIs (references of the NFT contents).</p>
        <p>It is important to notice that we do not store any content directly inside the smart contract.
        Only references are stored. It is up to the smart contract readers to find the content by themselves using the references.</p>
        <p>Starton provides an <a href="https://app.starton.io/ipfs">IPFS integration</a> in case you need to host your NFT contents.</p>
        <p>Parameters :</p>
        <ul>
        <li><strong>Name</strong> : This is the name of your smart contract which will be reflected on-chain.</li>
        <li><strong>Symbol</strong> : This is the symbol associated to the NFT collection</li>
        <li><strong>BaseUri</strong> : Will be used to concatenate NFT URIs and the ContractUriSuffix<ul>
        <li>Using IPFS: it should be <code>ipfs://ipfs/</code></li>
        <li>Using a centralised server: it should be like <code>https://yourapi.com/endpoint/</code></li>
        </ul>
        </li>
        <li><strong>ContractUriSuffix</strong> (will be concatenated with baseUri):<ul>
        <li>Using IPFS: it is the CID of the contract metadata (more info <a href="https://docs.opensea.io/docs/contract-level-metadata">here</a>)</li>
        <li>Using a centralised server: the path of the contract metadata json</li>
        </ul>
        </li>
        </ul>`,
    shortDescription: `The smart contract template for single-copy Non Fungible Tokens (NFT). In a video game, one-of-one NFT can consist of a digital good only one player can own at a time such as a piece of land. `,
    blockchains: [
      Blockchain.POLYGON,
      Blockchain.AVALANCHE,
      Blockchain.BINANCE,
      Blockchain.ETHEREUM,
    ],
    compilationDetails: {
      contractName: "StartonERC721",
    },
    isActivated: true,
    isAudited: false,
    order: 99,
    category: SmartContractTemplateCategory.DEPRECATED,
    tags: [],
  },
];

export default LIST;
