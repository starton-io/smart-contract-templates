import {
  SmartContractTemplateCategories,
  SmartContractTemplate,
} from "./scripts/smart-contract-template";

const LIST: SmartContractTemplate[] = [
  {
    id: "ERC721_META_TRANSACTION",
    name: "ERC721 NFT smart contract",
    description: "The smart contract template to deploy single-copy NFTs",
    shortDescription: "The smart contract template to deploy single-copy NFTs",
    githubUrl:
      "https://github.com/starton-io/smart-contract-templates/blob/master/contracts/non-fungible/StartonERC721Base.sol",
    blockchains: ["polygon", "avalanche", "binance", "ethereum"],
    compilationDetails: {
      contractName: "StartonERC721Base",
    },
    isActivated: true,
    isAudited: false,
    order: 1,
    category: SmartContractTemplateCategories.NFT,
    tags: [SmartContractTemplateCategories.NFT],
    form: {
      infos: {
        description:
          "The ERC721 smart contract standard is built for single-copy Non Fungible Tokens (NFT) and is out-of-the-box compatible with Opensea. With an ERC721, every NFT is unique, so you have to reference the content for each NFT. You can also send transactions on behalf of your users so they can use their tokens without having to pay for gas fees.",
        usecases: [
          "In a video game, one-of-one NFT can consist of a digital good only one player can own at a time such as a piece of land.",
        ],
        requirements: [
          "A wallet to fund the creation of your contract",
          "The URI of the metadata of your collection",
          "The URI of the content of the NFT",
          "The address of the initial owner",
          "The network on which you want to deploy",
        ],
        resources: {
          documentation: {
            href: "https://docs.starton.io/docs/Smart-contract/ERC721-Meta",
            alt: "Go to ERC721 NFT Smart Contract",
          },
          tutorials: {
            href: "https://docs.starton.io/docs/Tutorials/deploy-Nfts-with-Binance",
            alt: "Go to Deploy your NFTs with Starton",
          },
        },
      },
    },
  },
  {
    id: "ERC721_ROYALTIES_META_TRANSACTION",
    name: "ERC721 NFT smart contract (with Royalty)",
    description:
      "The smart contract template to deploy single-copy NFTs. This template integrates the NFT Royalty standard enabling you to perceive a fraction of the price received for the NFT.",
    shortDescription:
      "The smart contract template to deploy single-copy NFTs. This template integrates the NFT Royalty standard enabling you to perceive a fraction of the price received for the NFT.",
    githubUrl:
      "https://github.com/starton-io/smart-contract-templates/blob/master/contracts/non-fungible/StartonERC721BaseRoyalties.sol",
    blockchains: ["polygon", "avalanche", "binance", "ethereum"],
    compilationDetails: {
      contractName: "StartonERC721BaseRoyalties",
    },
    isActivated: true,
    isAudited: false,
    order: 4,
    category: SmartContractTemplateCategories.NFT,
    tags: [SmartContractTemplateCategories.NFT],
    form: {
      infos: {
        description:
          "The ERC721 smart contract standard is built for single-copy Non Fungible Tokens (NFT) and is out-of-the-box compatible with Opensea. With an ERC721, every NFT is unique, so you have to reference the content for each NFT. This template integrates the NFT Royalty standard enabling you to perceive a fraction of the price received for the NFT",
        usecases: [
          "In a video game, one-of-one NFT can consist of a digital good only one player can own at a time such as a piece of land.",
        ],
        requirements: [
          "A wallet to fund the creation of your contract",
          "The URI of the metadata of your collection",
          "The URI of the content of the NFT",
          "The address of the initial owner",
          "The network on which you want to deploy",
          "The fraction of sale price representing the royalty fees",
          "The address that will receive the royalty fees",
        ],
        resources: {
          documentation: {
            href: "https://docs.starton.io/docs/Smart-contract/ERC721_ROYALTIES_META_TRANSACTION",
            alt: "Go to ERC721 NFT Smart Contract",
          },
          tutorials: {
            href: "https://docs.starton.io/docs/Tutorials/deploy-Nfts-with-Binance",
            alt: "Go to Deploy your NFTs with Starton",
          },
        },
      },
    },
  },
  {
    id: "ERC721_CAPPED_META_TRANSACTION",
    name: "ERC721 NFT with limited supply",
    description:
      "The capped ERC721 NFT smart contract template for single-copy Non Fungible Tokens (NFT).",
    shortDescription:
      "The capped ERC721 NFT smart contract template for single-copy Non Fungible Tokens (NFT).",
    githubUrl:
      "https://github.com/starton-io/smart-contract-templates/blob/master/contracts/non-fungible/StartonERC721Capped.sol",
    blockchains: ["polygon", "avalanche", "binance", "ethereum"],
    compilationDetails: {
      contractName: "StartonERC721Capped",
    },
    isActivated: true,
    isAudited: false,
    order: 2,
    category: SmartContractTemplateCategories.NFT,
    tags: [SmartContractTemplateCategories.NFT],
    form: {
      infos: {
        description:
          "The NFT ERC721 smart contract where you can define the maximum supply of NFT you can mint.",
        usecases: [
          "In a video game, you can sell an NFT and pay for gas in place of the NFT receiver.",
        ],
        requirements: [
          "A wallet to fund the creation of your contract",
          "The URI of the metadata of your collection",
          "The URI of the content of the NFT",
          "The address of the initial owner",
          "The network on which you want to deploy",
          "The maximum supply of NFTs that can be minted",
        ],
        resources: {
          documentation: {
            href: "https://docs.starton.io/docs/Smart-contract/ERC721-Capped",
            alt: "Go to ERC721 NFT Capped Documentation",
          },
          tutorial: {
            href: "https://docs.starton.io/docs/Tutorials/Home",
            alt: "Go to Tutorials",
          },
        },
      },
    },
  },
  {
    id: "ERC721_ROYALTIES_CAPPED_META_TRANSACTION",
    name: "ERC721 NFT with limited supply (with Royalty)",
    description:
      "The capped ERC721 NFT smart contract template for single-copy Non Fungible Tokens (NFT). This template integrates the NFT Royalty standard enabling you to perceive a fraction of the price received for the NFT.",
    shortDescription:
      "The capped ERC721 NFT smart contract template for single-copy Non Fungible Tokens (NFT). This template integrates the NFT Royalty standard enabling you to perceive a fraction of the price received for the NFT.",
    githubUrl:
      "https://github.com/starton-io/smart-contract-templates/blob/master/contracts/non-fungible/StartonERC721CappedRoyalties.sol",
    blockchains: ["polygon", "avalanche", "binance", "ethereum"],
    compilationDetails: {
      contractName: "StartonERC721CappedRoyalties",
    },
    isActivated: true,
    isAudited: false,
    order: 5,
    category: SmartContractTemplateCategories.NFT,
    tags: [SmartContractTemplateCategories.NFT],
    form: {
      infos: {
        description:
          "The NFT ERC721 smart contract where you can define the maximum supply of NFT you can mint. This template integrates the NFT Royalty standard enabling you to perceive a fraction of the price received for the NFT",
        usecases: [
          "In a video game, you can sell an NFT and pay for gas in place of the NFT receiver.",
        ],
        requirements: [
          "A wallet to fund the creation of your contract",
          "The URI of the metadata of your collection",
          "The URI of the content of the NFT",
          "The address of the initial owner",
          "The network on which you want to deploy",
          "The maximum supply of NFTs that can be minted",
          "The fraction of sale price representing the royalty fees",
          "The address that will receive the royalty fees",
        ],
        resources: {
          documentation: {
            href: "https://docs.starton.io/docs/Smart-contract/ERC721_ROYALTIES_CAPPED_META_TRANSACTION",
            alt: "Go to ERC721 NFT Capped Documentation",
          },
          tutorial: {
            href: "https://docs.starton.io/docs/Tutorials/Home",
            alt: "Go to Tutorials",
          },
        },
      },
    },
  },
  {
    id: "ERC1155_META_TRANSACTION",
    name: "ERC1155 NFTs collection",
    description: "The smart contract standard to manage multiple-copies NFTs.",
    shortDescription:
      "The smart contract standard to manage multiple-copies NFTs.",
    githubUrl:
      "https://github.com/starton-io/smart-contract-templates/blob/master/contracts/non-fungible/StartonERC1155Base.sol",
    blockchains: ["polygon", "avalanche", "binance", "ethereum"],
    compilationDetails: {
      contractName: "StartonERC1155Base",
    },
    isActivated: true,
    isAudited: false,
    order: 3,
    category: SmartContractTemplateCategories.NFT,
    tags: [SmartContractTemplateCategories.NFT],
    form: {
      infos: {
        description:
          "The smart contract standard to manage multiple-copies NFTs. Though their content is identical, each NFT has a different token ID.",
        usecases: [
          "In a video game, it can be a piece of equipment won after an action such as a powerful sword after defeating an enemy. Every user defeating the enemy will own an edition of the sword with a different identifier.",
        ],
        requirements: [
          "A wallet to fund the creation of your contract",
          "The URI of the metadata of your collection",
          "The URI of the content of the NFT",
          "The address of the initial owner",
          "The network on which you want to deploy",
        ],
        resources: {
          documentation: {
            href: "https://docs.starton.io/docs/Smart-contract/ERC1155-Meta",
            alt: "Go to ERC1155 NFT Smart contract Documentation",
          },
          tutorial: {
            href: "https://docs.starton.io/docs/Tutorials/creating-NFT-collection",
            alt: "Go to Tutorials",
          },
        },
      },
    },
  },
  {
    id: "ERC1155_ROYALTIES_META_TRANSACTION",
    name: "ERC1155 NFTs collection (with Royalty)",
    description:
      "The smart contract standard to manage multiple-copies NFTs. This template integrates the NFT Royalty standard enabling you to perceive a fraction of the price received for the NFT.",
    shortDescription:
      "The smart contract standard to manage multiple-copies NFTs. This template integrates the NFT Royalty standard enabling you to perceive a fraction of the price received for the NFT.",
    githubUrl:
      "https://github.com/starton-io/smart-contract-templates/blob/master/contracts/non-fungible/StartonERC1155BaseRoyalties.sol",
    blockchains: ["polygon", "avalanche", "binance", "ethereum"],
    compilationDetails: {
      contractName: "StartonERC1155BaseRoyalties",
    },
    isActivated: true,
    isAudited: false,
    order: 6,
    category: SmartContractTemplateCategories.NFT,
    tags: [SmartContractTemplateCategories.NFT],
    form: {
      infos: {
        description:
          "The smart contract standard to manage multiple-copies NFTs. Though their content is identical, each NFT has a different token ID. This template integrates the NFT Royalty standard enabling you to perceive a fraction of the price received for the NFT",
        usecases: [
          "In a video game, it can be a piece of equipment won after an action such as a powerful sword after defeating an enemy. Every user defeating the enemy will own an edition of the sword with a different identifier.",
        ],
        requirements: [
          "A wallet to fund the creation of your contract",
          "The URI of the metadata of your collection",
          "The URI of the content of the NFT",
          "The address of the initial owner",
          "The network on which you want to deploy",
          "The fraction of sale price representing the royalty fees",
          "The address that will receive the royalty fees",
        ],
        resources: {
          documentation: {
            href: "https://docs.starton.io/docs/Smart-contract/ERC1155-Meta",
            alt: "Go to ERC1155 NFT Smart contract Documentation",
          },
          tutorial: {
            href: "https://docs.starton.io/docs/Tutorials/creating-NFT-collection",
            alt: "Go to Tutorials",
          },
        },
      },
    },
  },
  {
    id: "ERC20_META_TRANSACTION",
    name: "ERC20 Token with fixed supply",
    description:
      "The smart contract template for fungible tokens. No new tokens can be created after the initial emission.",
    shortDescription:
      "The smart contract template for fungible tokens. No new tokens can be created after the initial emission.",
    githubUrl:
      "https://github.com/starton-io/smart-contract-templates/blob/master/contracts/fungible/StartonERC20Base.sol",
    blockchains: ["polygon", "avalanche", "binance", "ethereum"],
    compilationDetails: {
      contractName: "StartonERC20Base",
    },
    isActivated: true,
    isAudited: false,
    order: 7,
    category: SmartContractTemplateCategories.FUNGIBLE,
    tags: [SmartContractTemplateCategories.FUNGIBLE],
    form: {
      infos: {
        description:
          "Create your own fungible token. You will set the supply at initial emission. You can also send transactions on behalf of your users so they can use their tokens without having to pay for gas fees.",
        tag: "ERC20, Fungible",
        usecases: [
          "In a video game, fixed fungible tokens can represent gems available only in limited supply",
        ],
        requirements: [
          "A name for your smart contract which will be reflected on-chain",
          "A symbol for your smart contract which will be reflected on-chain",
          "A number of tokens that will be minted",
          "The address that will own the ERC20 contract",
        ],
        resources: {
          documentation: {
            href: "https://docs.starton.io/docs/Smart-contract/ERC20-fixed-Meta",
            alt: "Documentation",
          },
          tutorial: {
            href: "https://docs.starton.io/docs/Tutorials/Home",
            alt: "Go to Tutorials",
          },
        },
      },
    },
  },
  {
    id: "ERC20_MINT_META_TRANSACTION",
    name: "ERC20 Token with mintable supply",
    description:
      "The smart contract template for fungible tokens. Admin can mint new tokens after initial emission.",
    shortDescription:
      "The smart contract template for fungible tokens. Admin can mint new tokens after initial emission.",
    githubUrl:
      "https://github.com/starton-io/smart-contract-templates/blob/master/contracts/fungible/StartonERC20Mintable.sol",
    blockchains: ["polygon", "avalanche", "binance", "ethereum"],
    compilationDetails: {
      contractName: "StartonERC20Mintable",
    },
    isActivated: true,
    isAudited: false,
    order: 8,
    category: SmartContractTemplateCategories.FUNGIBLE,
    tags: [SmartContractTemplateCategories.FUNGIBLE],
    form: {
      infos: {
        description:
          "Create your own fungible token, you can mint new tokens after the initial emission. You can also send transactions on behalf of your users so they can use their tokens without having to pay for gas fees.",
        tag: "ERC20, Fungible",
        "use cases": [
          "In a video game, mintable fungible tokens can represent the currency gamers can spend in-game.",
        ],
        requirements: [
          "A Name for your smart contract which will be reflected on-chain",
          "A Symbol for your smart contract which will be reflected on-chain",
          "A Number of tokens that will be minted when the smart contract is deployed",
          "The Address that will own the ERC20 contract",
        ],
        resources: {
          documentation: {
            href: "https://docs.starton.io/docs/Smart-contract/ERC20-mintable-Meta",
            alt: "Documentation",
          },
          tutorial: {
            href: "https://docs.starton.io/docs/Tutorials/Home",
            alt: "Go to Tutorials",
          },
        },
      },
    },
  },
  {
    id: "ERC721_SALE",
    name: "ERC721 single-copy NFT Sale",
    description: "The smart contract template for selling single-copy NFTs.",
    shortDescription:
      "The smart contract template for selling single-copy NFTs.",
    githubUrl:
      "https://github.com/starton-io/smart-contract-templates/blob/master/contracts/nft-sales/StartonERC721BaseSale.sol",
    blockchains: ["polygon", "avalanche", "binance", "ethereum"],
    compilationDetails: {
      contractName: "StartonERC721BaseSale",
    },
    isActivated: true,
    isAudited: false,
    order: 9,
    category: SmartContractTemplateCategories.SALE,
    tags: [SmartContractTemplateCategories.SALE],
    form: {
      infos: {
        description:
          "Set a price, a date, and a supply and you can sell your NFTs deployed using the ERC721 smart contract template.",
        tag: "ERC721, Sale",
        usecases: ["In a video game, you can sell a piece of land."],
        requirements: [
          "The address of the ERC721 smart contract of the NFT that you want to sell",
          "A price the NFTs will be sold for",
          "The time at which the sale will begin and end",
          "The maximum amount of tokens that can be minted by a single address",
          "The maximum amount of tokens that can be minted during the sale",
          "The address that will receive the payment for the NFTs",
        ],
        resources: {
          documentation: {
            href: "https://docs.starton.io/docs/Smart-contract/ERC721-Sale",
            alt: "Documentation",
          },
          tutorial: {
            href: "https://docs.starton.io/docs/Tutorials/Home",
            alt: "Go to Tutorials",
          },
        },
      },
    },
  },
  {
    id: "ERC1155_SALE",
    name: "ERC1155 NFT Collection Sale",
    description:
      "The smart contract template for selling multiple-copies NFTs.",
    shortDescription:
      "The smart contract template for selling multiple-copies NFTs.",
    githubUrl:
      "https://github.com/starton-io/smart-contract-templates/blob/master/contracts/nft-sales/StartonERC1155BaseSale.sol",
    blockchains: ["polygon", "avalanche", "binance", "ethereum"],
    compilationDetails: {
      contractName: "StartonERC1155BaseSale",
    },
    isActivated: true,
    isAudited: false,
    order: 10,
    category: SmartContractTemplateCategories.SALE,
    tags: [SmartContractTemplateCategories.SALE],
    form: {
      infos: {
        description:
          "Set a price, a date, and a supply and you can sell your NFT collections deployed using the ERC1155 smart contract template. ",
        tag: "ERC1155, Sale",
        usecases: [
          "In a video game, you can sell a piece of equipment to another player.",
        ],
        requirements: [
          "The token address of the ERC1155 that you want to sell",
          "The address that will receive the amount paid for the NFTs",
          "The initial price offered for the NFT",
          "The time at which the sale will begin and end, where users can bid. Timestamp in seconds",
          "The URI that will append at the end of the base token URI for the token that will be minted",
        ],
        resources: {
          documentation: {
            href: "https://docs.starton.io/docs/Smart-contract/ERC1155-Sale",
            alt: "Go to ERC1155 Sale Documentation",
          },
          tutorials: {
            href: "https://docs.starton.io/docs/Tutorials/create-an-NFT-collection-sale",
            alt: "Go to ERC1155 Tutorials",
          },
        },
      },
    },
  },
  {
    id: "ERC721_WHITELIST_SALE",
    name: "ERC721 Whitelist Sale",
    description:
      "The smart contract template to sell NFTs only to selected users.",
    shortDescription:
      "The smart contract template to sell NFTs only to selected users.",
    githubUrl:
      "https://github.com/starton-io/smart-contract-templates/blob/master/contracts/nft-sales/StartonERC721WhitelistSale.sol",
    blockchains: ["polygon", "avalanche", "binance", "ethereum"],
    compilationDetails: {
      contractName: "StartonERC721WhitelistSale",
    },
    isActivated: true,
    isAudited: false,
    order: 11,
    category: SmartContractTemplateCategories.SALE,
    tags: [SmartContractTemplateCategories.SALE],
    form: {
      infos: {
        description:
          "Select who can buy your NFT collection. Then set a price, a date and a supply and you can sell your NFTs, deployed using an ERC1155 NFT deployment template.",
        tag: "ERC1155, Sale",
        usecases: [
          "In a video game, you can sell a piece of equipment only to a list of approved players.",
        ],
        requirements: [
          "The token address of the ERC1155 that you want to sell",
          "The price that the NFTs will be sold for",
          "The root of the merkle tree that contains the list of the users that can buy the NFTs",
          "The start and end time for your sale (in timestamp seconds)",
          "The maximum amount of tokens that can be minted by a single address",
          "The maximum amount of tokens that can be minted during the sale",
          "The address that will receive all the price paid to mint the NFTs",
        ],
        resources: {
          documentation: {
            href: "https://docs.starton.io/docs/Smart-contract/ERC1155-Whitelist-Sale",
            alt: "ERC1155 Whitelist Sale Documentation",
          },
          tutorial: {
            href: "https://docs.starton.io/docs/Tutorials/Home",
            alt: "Go to Tutorials",
          },
        },
      },
    },
  },
  {
    id: "ERC1155_WHITELIST_SALE",
    name: "ERC1155 Whitelist Sale",
    description:
      "The smart contract template for selling multiple copies of NFTs only to a specified list of addresses.",
    shortDescription:
      "The smart contract template for selling multiple copies of NFTs only to a specified list of addresses.",
    githubUrl:
      "https://github.com/starton-io/smart-contract-templates/blob/master/contracts/nft-sales/StartonERC1155WhitelistSale.sol",
    blockchains: ["polygon", "avalanche", "binance", "ethereum"],
    compilationDetails: {
      contractName: "StartonERC1155WhitelistSale",
    },
    isActivated: true,
    isAudited: false,
    order: 12,
    category: SmartContractTemplateCategories.SALE,
    tags: [SmartContractTemplateCategories.SALE],
    form: {
      infos: {
        description:
          "Select who can buy your NFT collection. Then set a price, a date and a supply and you can sell your NFTs, deployed using an ERC1155 NFT deployment template.",
        tag: "ERC1155, Sale",
        usecases: [
          "In a video game, you can sell a piece of equipment only to a list of approved players.",
        ],
        requirements: [
          "The token address of the ERC1155 that you want to sell",
          "The price that the NFTs will be sold for",
          "The root of the merkle tree that contains the list of the users that can buy the NFTs",
          "The start and end time for your sale (in timestamp seconds)",
          "The maximum amount of tokens that can be minted by a single address",
          "The maximum amount of tokens that can be minted during the sale",
          "The address that will receive all the price paid to mint the NFTs",
        ],
        resources: {
          documentation: {
            href: "https://docs.starton.io/docs/Smart-contract/ERC1155-Whitelist-Sale",
            alt: "ERC1155 Whitelist Sale Documentation",
          },
          tutorials: {
            href: "https://docs.starton.io/docs/Tutorials/Home",
            alt: "Go to Tutorials",
          },
        },
      },
    },
  },
  {
    id: "ERC721_AUCTION_SALE",
    name: "ERC721 NFT Sale in an Auction",
    description: "The smart contract to sell NFTs in a form of auction.",
    shortDescription: "The smart contract to sell NFTs in a form of auction.",
    githubUrl:
      "https://github.com/starton-io/smart-contract-templates/blob/master/contracts/nft-sales/StartonERC721AuctionSale.sol",
    blockchains: ["polygon", "avalanche", "binance", "ethereum"],
    compilationDetails: {
      contractName: "StartonERC721AuctionSale",
    },
    isActivated: true,
    isAudited: false,
    order: 13,
    category: SmartContractTemplateCategories.SALE,
    tags: [SmartContractTemplateCategories.SALE],
    form: {
      infos: {
        description:
          "Set a starting price, a date and a supply and you can sell your NFTs, deployed using an ERC721 NFT deployment template. You can set the minimum bid increment to choose the pace of your auction.",
        tag: "ERC721, Sale",
        usecases: [
          "In a video game, you can sell a piece of land to the player placing the highest bid.",
        ],
        requirements: [
          "The token address of the ERC721 that you want to sell.",
          "The address that will receive the amount paid for the NFTs.",
          "The initial price offered for the NFT.",
          "The minimum bid increment to place a bid on top of the current maximum bid.",
          "The time at which the sale will begin and end, where users can bid. Timestamp in seconds.",
          "The URI that will be append in the end of the base token URI for the token that will be minted.",
        ],
        resources: {
          documentation: {
            href: "https://docs.starton.io/docs/Smart-contract/ERC721-Auction-Sale",
            alt: "Documentation",
          },
          tutorial: {
            href: "https://docs.starton.io/docs/Tutorials/create-an-NFT-auction",
            alt: "Go to Tutorials",
          },
        },
      },
    },
  },
  {
    id: "ERC1155_AUCTION_SALE",
    name: "ERC1155 NFT collection Sale in an Auction",
    description:
      "The smart contract template for selling multiple copies of NFTs in the form of an Auction to the highest bidder in a time slot.",
    shortDescription:
      "The smart contract template for selling multiple copies of NFTs in the form of an Auction to the highest bidder in a time slot.",
    githubUrl:
      "https://github.com/starton-io/smart-contract-templates/blob/master/contracts/nft-sales/StartonERC1155AuctionSale.sol",
    blockchains: ["polygon", "avalanche", "binance", "ethereum"],
    compilationDetails: {
      contractName: "StartonERC1155AuctionSale",
    },
    isActivated: true,
    isAudited: false,
    order: 14,
    category: SmartContractTemplateCategories.SALE,
    tags: [SmartContractTemplateCategories.SALE],
    form: {
      infos: {
        description:
          "Set a starting price, a date and a supply and you can sell your NFTs, deployed using an ERC1155 NFT deployment template. You can set the minimum bid increment to choose the pace of your auction.",
        usecases: [
          "In a video game, you can sell a piece of equipment to the player placing the highest bid.",
        ],
        requirements: [
          "The token address of the ERC1155 that you want to sell",
          "The address that will receive the amount paid for the NFTs",
          "The initial price offered for the NFT",
          "The minimum bid increment to place a bid on top of the current maximum bid",
          "The start and end time for your sale (in timestamp seconds)",
          "The URI that will append at the end of the base token URI for the token that will be minted",
        ],
        resources: {
          documentation: {
            href: "https://docs.starton.io/docs/Smart-contract/ERC1155-Auction",
            alt: "Go to ERC1155 Auction Sale Documentation",
          },
          tutorial: {
            href: "https://docs.starton.io/docs/Tutorials/Home",
            alt: "Go to Tutorials",
          },
        },
      },
    },
  },
  {
    id: "PAYMENT_SPLITTER",
    name: "Payment Splitter",
    description:
      "The smart contract template to split all payments between a list of users with a defined share for each of them.",
    shortDescription:
      "The smart contract template to split all payments between a list of users with a defined share for each of them.",
    githubUrl:
      "https://github.com/starton-io/smart-contract-templates/blob/master/contracts/tools/StartonPaymentSplitter.sol",
    blockchains: ["polygon", "avalanche", "binance", "ethereum"],
    compilationDetails: {
      contractName: "StartonPaymentSplitter",
    },
    isActivated: true,
    isAudited: false,
    order: 15,
    category: SmartContractTemplateCategories.OTHER,
    tags: [SmartContractTemplateCategories.OTHER],
    form: {
      infos: {
        description:
          "Split all payments between a list of users with a defined share for each of them. The sender is not aware that the payment is split. The contract handles the split in a transparent manner.",
        usecases: [
          "When selling NFTs for an artist, you can set up payments so that a percentage of the sale goes directly to the artist and a another percentage goes to the manager.",
        ],
        requirements: [
          "The list of addresses that will receive a split of all the payments",
          "The share that each address will get from the payment",
        ],
        resources: {
          documentation: {
            href: "https://docs.starton.io/docs/Smart-contract/payment-splitter",
            alt: "Go to Payment splitter documentation",
          },
          tutorial: {
            href: "https://docs.starton.io/docs/Tutorials/Home",
            alt: "Go to Tutorials",
          },
        },
      },
    },
  },
  {
    id: "sct_010e42e313cd4de3a4f191510848e9b6",
    name: "Child ERC1155",
    description:
      '<p>The ERC1155 is a smart contract standard which is specialised in multiple-copies Non Fungible Tokens (NFT).\n\t\t\tWithin this standard, tokens are linked to addresses (the owners) and to URIs (references of the NFT contents).</p>\n\t\t\t<p>It is important to notice that we do not store any content directly inside the smart contract.\n\t\t\tOnly references are stored. It is up to the smart contract readers to find the content by themselves using the references.</p>\n\t\t\t<p>Starton provides an <a href="https://app.starton.io/ipfs">IPFS integration</a> in case you need to host your NFT contents.</p>\n\t\t\t<p>Parameters :</p>\n\t\t\t<ul>\n\t\t\t<li><strong>Name</strong> : This is the name of your smart contract which will be reflected on-chain.</li>\n\t\t\t<li><strong>BaseUri</strong> : Will be used to concatenate NFT URIs and the ContractUriSuffix<ul>\n\t\t\t<li>Using IPFS: it should be <code>ipfs://ipfs/</code></li>\n\t\t\t<li>Using a centralised server: it should be like <code>https://yourapi.com/endpoint/</code></li>\n\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<li><strong>ContractUriSuffix</strong> (will be concatenated with baseUri):<ul>\n\t\t\t<li>Using IPFS: it is the CID of the contract metadata (more info <a href="https://docs.opensea.io/docs/contract-level-metadata">here</a>)</li>\n\t\t\t<li>Using a centralised server: the path of the contract metadata json</li>\n\t\t\t</ul>\n\t\t\t</li>\n\t\t\t</ul>',
    shortDescription:
      "The smart contract template for bridging multiple-copies Non Fungible Tokens (NFT) between Ethereum and Polygon. For example, at large scale, to reduce gas fees and increase speed, NFTs can be transferred from one blockchain network to another. ",
    blockchains: ["polygon"],
    abi: [
      {
        type: "constructor",
        inputs: [
          {
            name: "name",
            type: "string",
            internalType: "string",
          },
          {
            name: "baseUri",
            type: "string",
            internalType: "string",
          },
          {
            name: "contractUriSuffix",
            type: "string",
            internalType: "string",
          },
          {
            name: "ownerOrMultiSigContract",
            type: "address",
            internalType: "address",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "ApprovalForAll",
        type: "event",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "operator",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "approved",
            type: "bool",
            indexed: false,
            internalType: "bool",
          },
        ],
        anonymous: false,
      },
      {
        name: "Paused",
        type: "event",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: false,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "RoleAdminChanged",
        type: "event",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "previousAdminRole",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "newAdminRole",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
        ],
        anonymous: false,
      },
      {
        name: "RoleGranted",
        type: "event",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "sender",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "RoleRevoked",
        type: "event",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "sender",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "TransferBatch",
        type: "event",
        inputs: [
          {
            name: "operator",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "from",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "ids",
            type: "uint256[]",
            indexed: false,
            internalType: "uint256[]",
          },
          {
            name: "values",
            type: "uint256[]",
            indexed: false,
            internalType: "uint256[]",
          },
        ],
        anonymous: false,
      },
      {
        name: "TransferSingle",
        type: "event",
        inputs: [
          {
            name: "operator",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "from",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "id",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
          {
            name: "value",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        name: "URI",
        type: "event",
        inputs: [
          {
            name: "value",
            type: "string",
            indexed: false,
            internalType: "string",
          },
          {
            name: "id",
            type: "uint256",
            indexed: true,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        name: "Unpaused",
        type: "event",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: false,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "DEFAULT_ADMIN_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "DEPOSITOR_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "LOCKER_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "MINTER_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "PAUSER_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "URI_SETTER_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "balanceOf",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
          {
            name: "id",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "balanceOfBatch",
        type: "function",
        inputs: [
          {
            name: "accounts",
            type: "address[]",
            internalType: "address[]",
          },
          {
            name: "ids",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
        outputs: [
          {
            name: "",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "burn",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
          {
            name: "id",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "value",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "burnBatch",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
          {
            name: "ids",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "values",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "contractURI",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "string",
            internalType: "string",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "deposit",
        type: "function",
        inputs: [
          {
            name: "user",
            type: "address",
            internalType: "address",
          },
          {
            name: "depositData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "getRoleAdmin",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "grantRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "hasRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "isApprovedForAll",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
          {
            name: "operator",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "lockMint",
        type: "function",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "mint",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
          {
            name: "id",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "mintBatch",
        type: "function",
        inputs: [
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "ids",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "amounts",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "pause",
        type: "function",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "paused",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "renounceRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "revokeRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "safeBatchTransferFrom",
        type: "function",
        inputs: [
          {
            name: "from",
            type: "address",
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "ids",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "amounts",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "safeTransferFrom",
        type: "function",
        inputs: [
          {
            name: "from",
            type: "address",
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "id",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "setApprovalForAll",
        type: "function",
        inputs: [
          {
            name: "operator",
            type: "address",
            internalType: "address",
          },
          {
            name: "approved",
            type: "bool",
            internalType: "bool",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "setBaseContractURI",
        type: "function",
        inputs: [
          {
            name: "newBaseContractUri",
            type: "string",
            internalType: "string",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "setURI",
        type: "function",
        inputs: [
          {
            name: "newuri",
            type: "string",
            internalType: "string",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "supportsInterface",
        type: "function",
        inputs: [
          {
            name: "interfaceId",
            type: "bytes4",
            internalType: "bytes4",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "unpause",
        type: "function",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "uri",
        type: "function",
        inputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "string",
            internalType: "string",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "withdrawBatch",
        type: "function",
        inputs: [
          {
            name: "ids",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "amounts",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "withdrawSingle",
        type: "function",
        inputs: [
          {
            name: "id",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
    ],
    compilationDetails: {
      runs: 200,
      source:
        '// Sources flattened with hardhat v2.9.1 https://hardhat.org\n\n// File @openzeppelin/contracts/access/IAccessControl.sol@v4.5.0\n\n// SPDX-License-Identifier: MIT\n// OpenZeppelin Contracts v4.4.1 (access/IAccessControl.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev External interface of AccessControl declared to support ERC165 detection.\n */\ninterface IAccessControl {\n    /**\n     * @dev Emitted when `newAdminRole` is set as ``role``\'s admin role, replacing `previousAdminRole`\n     *\n     * `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite\n     * {RoleAdminChanged} not being emitted signaling this.\n     *\n     * _Available since v3.1._\n     */\n    event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole);\n\n    /**\n     * @dev Emitted when `account` is granted `role`.\n     *\n     * `sender` is the account that originated the contract call, an admin role\n     * bearer except when using {AccessControl-_setupRole}.\n     */\n    event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender);\n\n    /**\n     * @dev Emitted when `account` is revoked `role`.\n     *\n     * `sender` is the account that originated the contract call:\n     *   - if using `revokeRole`, it is the admin role bearer\n     *   - if using `renounceRole`, it is the role bearer (i.e. `account`)\n     */\n    event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender);\n\n    /**\n     * @dev Returns `true` if `account` has been granted `role`.\n     */\n    function hasRole(bytes32 role, address account) external view returns (bool);\n\n    /**\n     * @dev Returns the admin role that controls `role`. See {grantRole} and\n     * {revokeRole}.\n     *\n     * To change a role\'s admin, use {AccessControl-_setRoleAdmin}.\n     */\n    function getRoleAdmin(bytes32 role) external view returns (bytes32);\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function grantRole(bytes32 role, address account) external;\n\n    /**\n     * @dev Revokes `role` from `account`.\n     *\n     * If `account` had been granted `role`, emits a {RoleRevoked} event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function revokeRole(bytes32 role, address account) external;\n\n    /**\n     * @dev Revokes `role` from the calling account.\n     *\n     * Roles are often managed via {grantRole} and {revokeRole}: this function\'s\n     * purpose is to provide a mechanism for accounts to lose their privileges\n     * if they are compromised (such as when a trusted device is misplaced).\n     *\n     * If the calling account had been granted `role`, emits a {RoleRevoked}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must be `account`.\n     */\n    function renounceRole(bytes32 role, address account) external;\n}\n\n\n// File @openzeppelin/contracts/utils/Context.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Provides information about the current execution context, including the\n * sender of the transaction and its data. While these are generally available\n * via msg.sender and msg.data, they should not be accessed in such a direct\n * manner, since when dealing with meta-transactions the account sending and\n * paying for execution may not be the actual sender (as far as an application\n * is concerned).\n *\n * This contract is only required for intermediate, library-like contracts.\n */\nabstract contract Context {\n    function _msgSender() internal view virtual returns (address) {\n        return msg.sender;\n    }\n\n    function _msgData() internal view virtual returns (bytes calldata) {\n        return msg.data;\n    }\n}\n\n\n// File @openzeppelin/contracts/utils/Strings.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/Strings.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev String operations.\n */\nlibrary Strings {\n    bytes16 private constant _HEX_SYMBOLS = "0123456789abcdef";\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\n     */\n    function toString(uint256 value) internal pure returns (string memory) {\n        // Inspired by OraclizeAPI\'s implementation - MIT licence\n        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol\n\n        if (value == 0) {\n            return "0";\n        }\n        uint256 temp = value;\n        uint256 digits;\n        while (temp != 0) {\n            digits++;\n            temp /= 10;\n        }\n        bytes memory buffer = new bytes(digits);\n        while (value != 0) {\n            digits -= 1;\n            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));\n            value /= 10;\n        }\n        return string(buffer);\n    }\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\n     */\n    function toHexString(uint256 value) internal pure returns (string memory) {\n        if (value == 0) {\n            return "0x00";\n        }\n        uint256 temp = value;\n        uint256 length = 0;\n        while (temp != 0) {\n            length++;\n            temp >>= 8;\n        }\n        return toHexString(value, length);\n    }\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\n     */\n    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\n        bytes memory buffer = new bytes(2 * length + 2);\n        buffer[0] = "0";\n        buffer[1] = "x";\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\n            buffer[i] = _HEX_SYMBOLS[value & 0xf];\n            value >>= 4;\n        }\n        require(value == 0, "Strings: hex length insufficient");\n        return string(buffer);\n    }\n}\n\n\n// File @openzeppelin/contracts/utils/introspection/IERC165.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Interface of the ERC165 standard, as defined in the\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\n *\n * Implementers can declare support of contract interfaces, which can then be\n * queried by others ({ERC165Checker}).\n *\n * For an implementation, see {ERC165}.\n */\ninterface IERC165 {\n    /**\n     * @dev Returns true if this contract implements the interface defined by\n     * `interfaceId`. See the corresponding\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\n     * to learn more about how these ids are created.\n     *\n     * This function call must use less than 30 000 gas.\n     */\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\n}\n\n\n// File @openzeppelin/contracts/utils/introspection/ERC165.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Implementation of the {IERC165} interface.\n *\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\n * for the additional interface id that will be supported. For example:\n *\n * ```solidity\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\n * }\n * ```\n *\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\n */\nabstract contract ERC165 is IERC165 {\n    /**\n     * @dev See {IERC165-supportsInterface}.\n     */\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n        return interfaceId == type(IERC165).interfaceId;\n    }\n}\n\n\n// File @openzeppelin/contracts/access/AccessControl.sol@v4.5.0\n\n// OpenZeppelin Contracts (last updated v4.5.0) (access/AccessControl.sol)\n\npragma solidity ^0.8.0;\n\n\n\n\n/**\n * @dev Contract module that allows children to implement role-based access\n * control mechanisms. This is a lightweight version that doesn\'t allow enumerating role\n * members except through off-chain means by accessing the contract event logs. Some\n * applications may benefit from on-chain enumerability, for those cases see\n * {AccessControlEnumerable}.\n *\n * Roles are referred to by their `bytes32` identifier. These should be exposed\n * in the external API and be unique. The best way to achieve this is by\n * using `public constant` hash digests:\n *\n * ```\n * bytes32 public constant MY_ROLE = keccak256("MY_ROLE");\n * ```\n *\n * Roles can be used to represent a set of permissions. To restrict access to a\n * function call, use {hasRole}:\n *\n * ```\n * function foo() public {\n *     require(hasRole(MY_ROLE, msg.sender));\n *     ...\n * }\n * ```\n *\n * Roles can be granted and revoked dynamically via the {grantRole} and\n * {revokeRole} functions. Each role has an associated admin role, and only\n * accounts that have a role\'s admin role can call {grantRole} and {revokeRole}.\n *\n * By default, the admin role for all roles is `DEFAULT_ADMIN_ROLE`, which means\n * that only accounts with this role will be able to grant or revoke other\n * roles. More complex role relationships can be created by using\n * {_setRoleAdmin}.\n *\n * WARNING: The `DEFAULT_ADMIN_ROLE` is also its own admin: it has permission to\n * grant and revoke this role. Extra precautions should be taken to secure\n * accounts that have been granted it.\n */\nabstract contract AccessControl is Context, IAccessControl, ERC165 {\n    struct RoleData {\n        mapping(address => bool) members;\n        bytes32 adminRole;\n    }\n\n    mapping(bytes32 => RoleData) private _roles;\n\n    bytes32 public constant DEFAULT_ADMIN_ROLE = 0x00;\n\n    /**\n     * @dev Modifier that checks that an account has a specific role. Reverts\n     * with a standardized message including the required role.\n     *\n     * The format of the revert reason is given by the following regular expression:\n     *\n     *  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\n     *\n     * _Available since v4.1._\n     */\n    modifier onlyRole(bytes32 role) {\n        _checkRole(role, _msgSender());\n        _;\n    }\n\n    /**\n     * @dev See {IERC165-supportsInterface}.\n     */\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n        return interfaceId == type(IAccessControl).interfaceId || super.supportsInterface(interfaceId);\n    }\n\n    /**\n     * @dev Returns `true` if `account` has been granted `role`.\n     */\n    function hasRole(bytes32 role, address account) public view virtual override returns (bool) {\n        return _roles[role].members[account];\n    }\n\n    /**\n     * @dev Revert with a standard message if `account` is missing `role`.\n     *\n     * The format of the revert reason is given by the following regular expression:\n     *\n     *  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\n     */\n    function _checkRole(bytes32 role, address account) internal view virtual {\n        if (!hasRole(role, account)) {\n            revert(\n                string(\n                    abi.encodePacked(\n                        "AccessControl: account ",\n                        Strings.toHexString(uint160(account), 20),\n                        " is missing role ",\n                        Strings.toHexString(uint256(role), 32)\n                    )\n                )\n            );\n        }\n    }\n\n    /**\n     * @dev Returns the admin role that controls `role`. See {grantRole} and\n     * {revokeRole}.\n     *\n     * To change a role\'s admin, use {_setRoleAdmin}.\n     */\n    function getRoleAdmin(bytes32 role) public view virtual override returns (bytes32) {\n        return _roles[role].adminRole;\n    }\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function grantRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {\n        _grantRole(role, account);\n    }\n\n    /**\n     * @dev Revokes `role` from `account`.\n     *\n     * If `account` had been granted `role`, emits a {RoleRevoked} event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function revokeRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {\n        _revokeRole(role, account);\n    }\n\n    /**\n     * @dev Revokes `role` from the calling account.\n     *\n     * Roles are often managed via {grantRole} and {revokeRole}: this function\'s\n     * purpose is to provide a mechanism for accounts to lose their privileges\n     * if they are compromised (such as when a trusted device is misplaced).\n     *\n     * If the calling account had been revoked `role`, emits a {RoleRevoked}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must be `account`.\n     */\n    function renounceRole(bytes32 role, address account) public virtual override {\n        require(account == _msgSender(), "AccessControl: can only renounce roles for self");\n\n        _revokeRole(role, account);\n    }\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\n     * event. Note that unlike {grantRole}, this function doesn\'t perform any\n     * checks on the calling account.\n     *\n     * [WARNING]\n     * ====\n     * This function should only be called from the constructor when setting\n     * up the initial roles for the system.\n     *\n     * Using this function in any other way is effectively circumventing the admin\n     * system imposed by {AccessControl}.\n     * ====\n     *\n     * NOTE: This function is deprecated in favor of {_grantRole}.\n     */\n    function _setupRole(bytes32 role, address account) internal virtual {\n        _grantRole(role, account);\n    }\n\n    /**\n     * @dev Sets `adminRole` as ``role``\'s admin role.\n     *\n     * Emits a {RoleAdminChanged} event.\n     */\n    function _setRoleAdmin(bytes32 role, bytes32 adminRole) internal virtual {\n        bytes32 previousAdminRole = getRoleAdmin(role);\n        _roles[role].adminRole = adminRole;\n        emit RoleAdminChanged(role, previousAdminRole, adminRole);\n    }\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * Internal function without access restriction.\n     */\n    function _grantRole(bytes32 role, address account) internal virtual {\n        if (!hasRole(role, account)) {\n            _roles[role].members[account] = true;\n            emit RoleGranted(role, account, _msgSender());\n        }\n    }\n\n    /**\n     * @dev Revokes `role` from `account`.\n     *\n     * Internal function without access restriction.\n     */\n    function _revokeRole(bytes32 role, address account) internal virtual {\n        if (hasRole(role, account)) {\n            _roles[role].members[account] = false;\n            emit RoleRevoked(role, account, _msgSender());\n        }\n    }\n}\n\n\n// File @openzeppelin/contracts/security/Pausable.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (security/Pausable.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Contract module which allows children to implement an emergency stop\n * mechanism that can be triggered by an authorized account.\n *\n * This module is used through inheritance. It will make available the\n * modifiers `whenNotPaused` and `whenPaused`, which can be applied to\n * the functions of your contract. Note that they will not be pausable by\n * simply including this module, only once the modifiers are put in place.\n */\nabstract contract Pausable is Context {\n    /**\n     * @dev Emitted when the pause is triggered by `account`.\n     */\n    event Paused(address account);\n\n    /**\n     * @dev Emitted when the pause is lifted by `account`.\n     */\n    event Unpaused(address account);\n\n    bool private _paused;\n\n    /**\n     * @dev Initializes the contract in unpaused state.\n     */\n    constructor() {\n        _paused = false;\n    }\n\n    /**\n     * @dev Returns true if the contract is paused, and false otherwise.\n     */\n    function paused() public view virtual returns (bool) {\n        return _paused;\n    }\n\n    /**\n     * @dev Modifier to make a function callable only when the contract is not paused.\n     *\n     * Requirements:\n     *\n     * - The contract must not be paused.\n     */\n    modifier whenNotPaused() {\n        require(!paused(), "Pausable: paused");\n        _;\n    }\n\n    /**\n     * @dev Modifier to make a function callable only when the contract is paused.\n     *\n     * Requirements:\n     *\n     * - The contract must be paused.\n     */\n    modifier whenPaused() {\n        require(paused(), "Pausable: not paused");\n        _;\n    }\n\n    /**\n     * @dev Triggers stopped state.\n     *\n     * Requirements:\n     *\n     * - The contract must not be paused.\n     */\n    function _pause() internal virtual whenNotPaused {\n        _paused = true;\n        emit Paused(_msgSender());\n    }\n\n    /**\n     * @dev Returns to normal state.\n     *\n     * Requirements:\n     *\n     * - The contract must be paused.\n     */\n    function _unpause() internal virtual whenPaused {\n        _paused = false;\n        emit Unpaused(_msgSender());\n    }\n}\n\n\n// File @openzeppelin/contracts/token/ERC1155/IERC1155.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (token/ERC1155/IERC1155.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Required interface of an ERC1155 compliant contract, as defined in the\n * https://eips.ethereum.org/EIPS/eip-1155[EIP].\n *\n * _Available since v3.1._\n */\ninterface IERC1155 is IERC165 {\n    /**\n     * @dev Emitted when `value` tokens of token type `id` are transferred from `from` to `to` by `operator`.\n     */\n    event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);\n\n    /**\n     * @dev Equivalent to multiple {TransferSingle} events, where `operator`, `from` and `to` are the same for all\n     * transfers.\n     */\n    event TransferBatch(\n        address indexed operator,\n        address indexed from,\n        address indexed to,\n        uint256[] ids,\n        uint256[] values\n    );\n\n    /**\n     * @dev Emitted when `account` grants or revokes permission to `operator` to transfer their tokens, according to\n     * `approved`.\n     */\n    event ApprovalForAll(address indexed account, address indexed operator, bool approved);\n\n    /**\n     * @dev Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI.\n     *\n     * If an {URI} event was emitted for `id`, the standard\n     * https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that `value` will equal the value\n     * returned by {IERC1155MetadataURI-uri}.\n     */\n    event URI(string value, uint256 indexed id);\n\n    /**\n     * @dev Returns the amount of tokens of token type `id` owned by `account`.\n     *\n     * Requirements:\n     *\n     * - `account` cannot be the zero address.\n     */\n    function balanceOf(address account, uint256 id) external view returns (uint256);\n\n    /**\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}.\n     *\n     * Requirements:\n     *\n     * - `accounts` and `ids` must have the same length.\n     */\n    function balanceOfBatch(address[] calldata accounts, uint256[] calldata ids)\n        external\n        view\n        returns (uint256[] memory);\n\n    /**\n     * @dev Grants or revokes permission to `operator` to transfer the caller\'s tokens, according to `approved`,\n     *\n     * Emits an {ApprovalForAll} event.\n     *\n     * Requirements:\n     *\n     * - `operator` cannot be the caller.\n     */\n    function setApprovalForAll(address operator, bool approved) external;\n\n    /**\n     * @dev Returns true if `operator` is approved to transfer ``account``\'s tokens.\n     *\n     * See {setApprovalForAll}.\n     */\n    function isApprovedForAll(address account, address operator) external view returns (bool);\n\n    /**\n     * @dev Transfers `amount` tokens of token type `id` from `from` to `to`.\n     *\n     * Emits a {TransferSingle} event.\n     *\n     * Requirements:\n     *\n     * - `to` cannot be the zero address.\n     * - If the caller is not `from`, it must be have been approved to spend ``from``\'s tokens via {setApprovalForAll}.\n     * - `from` must have a balance of tokens of type `id` of at least `amount`.\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\n     * acceptance magic value.\n     */\n    function safeTransferFrom(\n        address from,\n        address to,\n        uint256 id,\n        uint256 amount,\n        bytes calldata data\n    ) external;\n\n    /**\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}.\n     *\n     * Emits a {TransferBatch} event.\n     *\n     * Requirements:\n     *\n     * - `ids` and `amounts` must have the same length.\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\n     * acceptance magic value.\n     */\n    function safeBatchTransferFrom(\n        address from,\n        address to,\n        uint256[] calldata ids,\n        uint256[] calldata amounts,\n        bytes calldata data\n    ) external;\n}\n\n\n// File @openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol@v4.5.0\n\n// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC1155/IERC1155Receiver.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev _Available since v3.1._\n */\ninterface IERC1155Receiver is IERC165 {\n    /**\n     * @dev Handles the receipt of a single ERC1155 token type. This function is\n     * called at the end of a `safeTransferFrom` after the balance has been updated.\n     *\n     * NOTE: To accept the transfer, this must return\n     * `bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))`\n     * (i.e. 0xf23a6e61, or its own function selector).\n     *\n     * @param operator The address which initiated the transfer (i.e. msg.sender)\n     * @param from The address which previously owned the token\n     * @param id The ID of the token being transferred\n     * @param value The amount of tokens being transferred\n     * @param data Additional data with no specified format\n     * @return `bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))` if transfer is allowed\n     */\n    function onERC1155Received(\n        address operator,\n        address from,\n        uint256 id,\n        uint256 value,\n        bytes calldata data\n    ) external returns (bytes4);\n\n    /**\n     * @dev Handles the receipt of a multiple ERC1155 token types. This function\n     * is called at the end of a `safeBatchTransferFrom` after the balances have\n     * been updated.\n     *\n     * NOTE: To accept the transfer(s), this must return\n     * `bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))`\n     * (i.e. 0xbc197c81, or its own function selector).\n     *\n     * @param operator The address which initiated the batch transfer (i.e. msg.sender)\n     * @param from The address which previously owned the token\n     * @param ids An array containing ids of each token being transferred (order and length must match values array)\n     * @param values An array containing amounts of each token being transferred (order and length must match ids array)\n     * @param data Additional data with no specified format\n     * @return `bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))` if transfer is allowed\n     */\n    function onERC1155BatchReceived(\n        address operator,\n        address from,\n        uint256[] calldata ids,\n        uint256[] calldata values,\n        bytes calldata data\n    ) external returns (bytes4);\n}\n\n\n// File @openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (token/ERC1155/extensions/IERC1155MetadataURI.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Interface of the optional ERC1155MetadataExtension interface, as defined\n * in the https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[EIP].\n *\n * _Available since v3.1._\n */\ninterface IERC1155MetadataURI is IERC1155 {\n    /**\n     * @dev Returns the URI for token type `id`.\n     *\n     * If the `\\{id\\}` substring is present in the URI, it must be replaced by\n     * clients with the actual token type ID.\n     */\n    function uri(uint256 id) external view returns (string memory);\n}\n\n\n// File @openzeppelin/contracts/utils/Address.sol@v4.5.0\n\n// OpenZeppelin Contracts (last updated v4.5.0) (utils/Address.sol)\n\npragma solidity ^0.8.1;\n\n/**\n * @dev Collection of functions related to the address type\n */\nlibrary Address {\n    /**\n     * @dev Returns true if `account` is a contract.\n     *\n     * [IMPORTANT]\n     * ====\n     * It is unsafe to assume that an address for which this function returns\n     * false is an externally-owned account (EOA) and not a contract.\n     *\n     * Among others, `isContract` will return false for the following\n     * types of addresses:\n     *\n     *  - an externally-owned account\n     *  - a contract in construction\n     *  - an address where a contract will be created\n     *  - an address where a contract lived, but was destroyed\n     * ====\n     *\n     * [IMPORTANT]\n     * ====\n     * You shouldn\'t rely on `isContract` to protect against flash loan attacks!\n     *\n     * Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets\n     * like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract\n     * constructor.\n     * ====\n     */\n    function isContract(address account) internal view returns (bool) {\n        // This method relies on extcodesize/address.code.length, which returns 0\n        // for contracts in construction, since the code is only stored at the end\n        // of the constructor execution.\n\n        return account.code.length > 0;\n    }\n\n    /**\n     * @dev Replacement for Solidity\'s `transfer`: sends `amount` wei to\n     * `recipient`, forwarding all available gas and reverting on errors.\n     *\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\n     * imposed by `transfer`, making them unable to receive funds via\n     * `transfer`. {sendValue} removes this limitation.\n     *\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\n     *\n     * IMPORTANT: because control is transferred to `recipient`, care must be\n     * taken to not create reentrancy vulnerabilities. Consider using\n     * {ReentrancyGuard} or the\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\n     */\n    function sendValue(address payable recipient, uint256 amount) internal {\n        require(address(this).balance >= amount, "Address: insufficient balance");\n\n        (bool success, ) = recipient.call{value: amount}("");\n        require(success, "Address: unable to send value, recipient may have reverted");\n    }\n\n    /**\n     * @dev Performs a Solidity function call using a low level `call`. A\n     * plain `call` is an unsafe replacement for a function call: use this\n     * function instead.\n     *\n     * If `target` reverts with a revert reason, it is bubbled up by this\n     * function (like regular Solidity function calls).\n     *\n     * Returns the raw returned data. To convert to the expected return value,\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\n     *\n     * Requirements:\n     *\n     * - `target` must be a contract.\n     * - calling `target` with `data` must not revert.\n     *\n     * _Available since v3.1._\n     */\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\n        return functionCall(target, data, "Address: low-level call failed");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\n     * `errorMessage` as a fallback revert reason when `target` reverts.\n     *\n     * _Available since v3.1._\n     */\n    function functionCall(\n        address target,\n        bytes memory data,\n        string memory errorMessage\n    ) internal returns (bytes memory) {\n        return functionCallWithValue(target, data, 0, errorMessage);\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n     * but also transferring `value` wei to `target`.\n     *\n     * Requirements:\n     *\n     * - the calling contract must have an ETH balance of at least `value`.\n     * - the called Solidity function must be `payable`.\n     *\n     * _Available since v3.1._\n     */\n    function functionCallWithValue(\n        address target,\n        bytes memory data,\n        uint256 value\n    ) internal returns (bytes memory) {\n        return functionCallWithValue(target, data, value, "Address: low-level call with value failed");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\n     *\n     * _Available since v3.1._\n     */\n    function functionCallWithValue(\n        address target,\n        bytes memory data,\n        uint256 value,\n        string memory errorMessage\n    ) internal returns (bytes memory) {\n        require(address(this).balance >= value, "Address: insufficient balance for call");\n        require(isContract(target), "Address: call to non-contract");\n\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\n        return verifyCallResult(success, returndata, errorMessage);\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n     * but performing a static call.\n     *\n     * _Available since v3.3._\n     */\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\n        return functionStaticCall(target, data, "Address: low-level static call failed");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\n     * but performing a static call.\n     *\n     * _Available since v3.3._\n     */\n    function functionStaticCall(\n        address target,\n        bytes memory data,\n        string memory errorMessage\n    ) internal view returns (bytes memory) {\n        require(isContract(target), "Address: static call to non-contract");\n\n        (bool success, bytes memory returndata) = target.staticcall(data);\n        return verifyCallResult(success, returndata, errorMessage);\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n     * but performing a delegate call.\n     *\n     * _Available since v3.4._\n     */\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\n        return functionDelegateCall(target, data, "Address: low-level delegate call failed");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\n     * but performing a delegate call.\n     *\n     * _Available since v3.4._\n     */\n    function functionDelegateCall(\n        address target,\n        bytes memory data,\n        string memory errorMessage\n    ) internal returns (bytes memory) {\n        require(isContract(target), "Address: delegate call to non-contract");\n\n        (bool success, bytes memory returndata) = target.delegatecall(data);\n        return verifyCallResult(success, returndata, errorMessage);\n    }\n\n    /**\n     * @dev Tool to verifies that a low level call was successful, and revert if it wasn\'t, either by bubbling the\n     * revert reason using the provided one.\n     *\n     * _Available since v4.3._\n     */\n    function verifyCallResult(\n        bool success,\n        bytes memory returndata,\n        string memory errorMessage\n    ) internal pure returns (bytes memory) {\n        if (success) {\n            return returndata;\n        } else {\n            // Look for revert reason and bubble it up if present\n            if (returndata.length > 0) {\n                // The easiest way to bubble the revert reason is using memory via assembly\n\n                assembly {\n                    let returndata_size := mload(returndata)\n                    revert(add(32, returndata), returndata_size)\n                }\n            } else {\n                revert(errorMessage);\n            }\n        }\n    }\n}\n\n\n// File @openzeppelin/contracts/token/ERC1155/ERC1155.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (token/ERC1155/ERC1155.sol)\n\npragma solidity ^0.8.0;\n\n\n\n\n\n\n/**\n * @dev Implementation of the basic standard multi-token.\n * See https://eips.ethereum.org/EIPS/eip-1155\n * Originally based on code by Enjin: https://github.com/enjin/erc-1155\n *\n * _Available since v3.1._\n */\ncontract ERC1155 is Context, ERC165, IERC1155, IERC1155MetadataURI {\n    using Address for address;\n\n    // Mapping from token ID to account balances\n    mapping(uint256 => mapping(address => uint256)) private _balances;\n\n    // Mapping from account to operator approvals\n    mapping(address => mapping(address => bool)) private _operatorApprovals;\n\n    // Used as the URI for all token types by relying on ID substitution, e.g. https://token-cdn-domain/{id}.json\n    string private _uri;\n\n    /**\n     * @dev See {_setURI}.\n     */\n    constructor(string memory uri_) {\n        _setURI(uri_);\n    }\n\n    /**\n     * @dev See {IERC165-supportsInterface}.\n     */\n    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {\n        return\n            interfaceId == type(IERC1155).interfaceId ||\n            interfaceId == type(IERC1155MetadataURI).interfaceId ||\n            super.supportsInterface(interfaceId);\n    }\n\n    /**\n     * @dev See {IERC1155MetadataURI-uri}.\n     *\n     * This implementation returns the same URI for *all* token types. It relies\n     * on the token type ID substitution mechanism\n     * https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP].\n     *\n     * Clients calling this function must replace the `\\{id\\}` substring with the\n     * actual token type ID.\n     */\n    function uri(uint256) public view virtual override returns (string memory) {\n        return _uri;\n    }\n\n    /**\n     * @dev See {IERC1155-balanceOf}.\n     *\n     * Requirements:\n     *\n     * - `account` cannot be the zero address.\n     */\n    function balanceOf(address account, uint256 id) public view virtual override returns (uint256) {\n        require(account != address(0), "ERC1155: balance query for the zero address");\n        return _balances[id][account];\n    }\n\n    /**\n     * @dev See {IERC1155-balanceOfBatch}.\n     *\n     * Requirements:\n     *\n     * - `accounts` and `ids` must have the same length.\n     */\n    function balanceOfBatch(address[] memory accounts, uint256[] memory ids)\n        public\n        view\n        virtual\n        override\n        returns (uint256[] memory)\n    {\n        require(accounts.length == ids.length, "ERC1155: accounts and ids length mismatch");\n\n        uint256[] memory batchBalances = new uint256[](accounts.length);\n\n        for (uint256 i = 0; i < accounts.length; ++i) {\n            batchBalances[i] = balanceOf(accounts[i], ids[i]);\n        }\n\n        return batchBalances;\n    }\n\n    /**\n     * @dev See {IERC1155-setApprovalForAll}.\n     */\n    function setApprovalForAll(address operator, bool approved) public virtual override {\n        _setApprovalForAll(_msgSender(), operator, approved);\n    }\n\n    /**\n     * @dev See {IERC1155-isApprovedForAll}.\n     */\n    function isApprovedForAll(address account, address operator) public view virtual override returns (bool) {\n        return _operatorApprovals[account][operator];\n    }\n\n    /**\n     * @dev See {IERC1155-safeTransferFrom}.\n     */\n    function safeTransferFrom(\n        address from,\n        address to,\n        uint256 id,\n        uint256 amount,\n        bytes memory data\n    ) public virtual override {\n        require(\n            from == _msgSender() || isApprovedForAll(from, _msgSender()),\n            "ERC1155: caller is not owner nor approved"\n        );\n        _safeTransferFrom(from, to, id, amount, data);\n    }\n\n    /**\n     * @dev See {IERC1155-safeBatchTransferFrom}.\n     */\n    function safeBatchTransferFrom(\n        address from,\n        address to,\n        uint256[] memory ids,\n        uint256[] memory amounts,\n        bytes memory data\n    ) public virtual override {\n        require(\n            from == _msgSender() || isApprovedForAll(from, _msgSender()),\n            "ERC1155: transfer caller is not owner nor approved"\n        );\n        _safeBatchTransferFrom(from, to, ids, amounts, data);\n    }\n\n    /**\n     * @dev Transfers `amount` tokens of token type `id` from `from` to `to`.\n     *\n     * Emits a {TransferSingle} event.\n     *\n     * Requirements:\n     *\n     * - `to` cannot be the zero address.\n     * - `from` must have a balance of tokens of type `id` of at least `amount`.\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\n     * acceptance magic value.\n     */\n    function _safeTransferFrom(\n        address from,\n        address to,\n        uint256 id,\n        uint256 amount,\n        bytes memory data\n    ) internal virtual {\n        require(to != address(0), "ERC1155: transfer to the zero address");\n\n        address operator = _msgSender();\n\n        _beforeTokenTransfer(operator, from, to, _asSingletonArray(id), _asSingletonArray(amount), data);\n\n        uint256 fromBalance = _balances[id][from];\n        require(fromBalance >= amount, "ERC1155: insufficient balance for transfer");\n        unchecked {\n            _balances[id][from] = fromBalance - amount;\n        }\n        _balances[id][to] += amount;\n\n        emit TransferSingle(operator, from, to, id, amount);\n\n        _doSafeTransferAcceptanceCheck(operator, from, to, id, amount, data);\n    }\n\n    /**\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_safeTransferFrom}.\n     *\n     * Emits a {TransferBatch} event.\n     *\n     * Requirements:\n     *\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\n     * acceptance magic value.\n     */\n    function _safeBatchTransferFrom(\n        address from,\n        address to,\n        uint256[] memory ids,\n        uint256[] memory amounts,\n        bytes memory data\n    ) internal virtual {\n        require(ids.length == amounts.length, "ERC1155: ids and amounts length mismatch");\n        require(to != address(0), "ERC1155: transfer to the zero address");\n\n        address operator = _msgSender();\n\n        _beforeTokenTransfer(operator, from, to, ids, amounts, data);\n\n        for (uint256 i = 0; i < ids.length; ++i) {\n            uint256 id = ids[i];\n            uint256 amount = amounts[i];\n\n            uint256 fromBalance = _balances[id][from];\n            require(fromBalance >= amount, "ERC1155: insufficient balance for transfer");\n            unchecked {\n                _balances[id][from] = fromBalance - amount;\n            }\n            _balances[id][to] += amount;\n        }\n\n        emit TransferBatch(operator, from, to, ids, amounts);\n\n        _doSafeBatchTransferAcceptanceCheck(operator, from, to, ids, amounts, data);\n    }\n\n    /**\n     * @dev Sets a new URI for all token types, by relying on the token type ID\n     * substitution mechanism\n     * https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP].\n     *\n     * By this mechanism, any occurrence of the `\\{id\\}` substring in either the\n     * URI or any of the amounts in the JSON file at said URI will be replaced by\n     * clients with the token type ID.\n     *\n     * For example, the `https://token-cdn-domain/\\{id\\}.json` URI would be\n     * interpreted by clients as\n     * `https://token-cdn-domain/000000000000000000000000000000000000000000000000000000000004cce0.json`\n     * for token type ID 0x4cce0.\n     *\n     * See {uri}.\n     *\n     * Because these URIs cannot be meaningfully represented by the {URI} event,\n     * this function emits no events.\n     */\n    function _setURI(string memory newuri) internal virtual {\n        _uri = newuri;\n    }\n\n    /**\n     * @dev Creates `amount` tokens of token type `id`, and assigns them to `to`.\n     *\n     * Emits a {TransferSingle} event.\n     *\n     * Requirements:\n     *\n     * - `to` cannot be the zero address.\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\n     * acceptance magic value.\n     */\n    function _mint(\n        address to,\n        uint256 id,\n        uint256 amount,\n        bytes memory data\n    ) internal virtual {\n        require(to != address(0), "ERC1155: mint to the zero address");\n\n        address operator = _msgSender();\n\n        _beforeTokenTransfer(operator, address(0), to, _asSingletonArray(id), _asSingletonArray(amount), data);\n\n        _balances[id][to] += amount;\n        emit TransferSingle(operator, address(0), to, id, amount);\n\n        _doSafeTransferAcceptanceCheck(operator, address(0), to, id, amount, data);\n    }\n\n    /**\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_mint}.\n     *\n     * Requirements:\n     *\n     * - `ids` and `amounts` must have the same length.\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\n     * acceptance magic value.\n     */\n    function _mintBatch(\n        address to,\n        uint256[] memory ids,\n        uint256[] memory amounts,\n        bytes memory data\n    ) internal virtual {\n        require(to != address(0), "ERC1155: mint to the zero address");\n        require(ids.length == amounts.length, "ERC1155: ids and amounts length mismatch");\n\n        address operator = _msgSender();\n\n        _beforeTokenTransfer(operator, address(0), to, ids, amounts, data);\n\n        for (uint256 i = 0; i < ids.length; i++) {\n            _balances[ids[i]][to] += amounts[i];\n        }\n\n        emit TransferBatch(operator, address(0), to, ids, amounts);\n\n        _doSafeBatchTransferAcceptanceCheck(operator, address(0), to, ids, amounts, data);\n    }\n\n    /**\n     * @dev Destroys `amount` tokens of token type `id` from `from`\n     *\n     * Requirements:\n     *\n     * - `from` cannot be the zero address.\n     * - `from` must have at least `amount` tokens of token type `id`.\n     */\n    function _burn(\n        address from,\n        uint256 id,\n        uint256 amount\n    ) internal virtual {\n        require(from != address(0), "ERC1155: burn from the zero address");\n\n        address operator = _msgSender();\n\n        _beforeTokenTransfer(operator, from, address(0), _asSingletonArray(id), _asSingletonArray(amount), "");\n\n        uint256 fromBalance = _balances[id][from];\n        require(fromBalance >= amount, "ERC1155: burn amount exceeds balance");\n        unchecked {\n            _balances[id][from] = fromBalance - amount;\n        }\n\n        emit TransferSingle(operator, from, address(0), id, amount);\n    }\n\n    /**\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_burn}.\n     *\n     * Requirements:\n     *\n     * - `ids` and `amounts` must have the same length.\n     */\n    function _burnBatch(\n        address from,\n        uint256[] memory ids,\n        uint256[] memory amounts\n    ) internal virtual {\n        require(from != address(0), "ERC1155: burn from the zero address");\n        require(ids.length == amounts.length, "ERC1155: ids and amounts length mismatch");\n\n        address operator = _msgSender();\n\n        _beforeTokenTransfer(operator, from, address(0), ids, amounts, "");\n\n        for (uint256 i = 0; i < ids.length; i++) {\n            uint256 id = ids[i];\n            uint256 amount = amounts[i];\n\n            uint256 fromBalance = _balances[id][from];\n            require(fromBalance >= amount, "ERC1155: burn amount exceeds balance");\n            unchecked {\n                _balances[id][from] = fromBalance - amount;\n            }\n        }\n\n        emit TransferBatch(operator, from, address(0), ids, amounts);\n    }\n\n    /**\n     * @dev Approve `operator` to operate on all of `owner` tokens\n     *\n     * Emits a {ApprovalForAll} event.\n     */\n    function _setApprovalForAll(\n        address owner,\n        address operator,\n        bool approved\n    ) internal virtual {\n        require(owner != operator, "ERC1155: setting approval status for self");\n        _operatorApprovals[owner][operator] = approved;\n        emit ApprovalForAll(owner, operator, approved);\n    }\n\n    /**\n     * @dev Hook that is called before any token transfer. This includes minting\n     * and burning, as well as batched variants.\n     *\n     * The same hook is called on both single and batched variants. For single\n     * transfers, the length of the `id` and `amount` arrays will be 1.\n     *\n     * Calling conditions (for each `id` and `amount` pair):\n     *\n     * - When `from` and `to` are both non-zero, `amount` of ``from``\'s tokens\n     * of token type `id` will be  transferred to `to`.\n     * - When `from` is zero, `amount` tokens of token type `id` will be minted\n     * for `to`.\n     * - when `to` is zero, `amount` of ``from``\'s tokens of token type `id`\n     * will be burned.\n     * - `from` and `to` are never both zero.\n     * - `ids` and `amounts` have the same, non-zero length.\n     *\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\n     */\n    function _beforeTokenTransfer(\n        address operator,\n        address from,\n        address to,\n        uint256[] memory ids,\n        uint256[] memory amounts,\n        bytes memory data\n    ) internal virtual {}\n\n    function _doSafeTransferAcceptanceCheck(\n        address operator,\n        address from,\n        address to,\n        uint256 id,\n        uint256 amount,\n        bytes memory data\n    ) private {\n        if (to.isContract()) {\n            try IERC1155Receiver(to).onERC1155Received(operator, from, id, amount, data) returns (bytes4 response) {\n                if (response != IERC1155Receiver.onERC1155Received.selector) {\n                    revert("ERC1155: ERC1155Receiver rejected tokens");\n                }\n            } catch Error(string memory reason) {\n                revert(reason);\n            } catch {\n                revert("ERC1155: transfer to non ERC1155Receiver implementer");\n            }\n        }\n    }\n\n    function _doSafeBatchTransferAcceptanceCheck(\n        address operator,\n        address from,\n        address to,\n        uint256[] memory ids,\n        uint256[] memory amounts,\n        bytes memory data\n    ) private {\n        if (to.isContract()) {\n            try IERC1155Receiver(to).onERC1155BatchReceived(operator, from, ids, amounts, data) returns (\n                bytes4 response\n            ) {\n                if (response != IERC1155Receiver.onERC1155BatchReceived.selector) {\n                    revert("ERC1155: ERC1155Receiver rejected tokens");\n                }\n            } catch Error(string memory reason) {\n                revert(reason);\n            } catch {\n                revert("ERC1155: transfer to non ERC1155Receiver implementer");\n            }\n        }\n    }\n\n    function _asSingletonArray(uint256 element) private pure returns (uint256[] memory) {\n        uint256[] memory array = new uint256[](1);\n        array[0] = element;\n\n        return array;\n    }\n}\n\n\n// File @openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (token/ERC1155/extensions/ERC1155Burnable.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Extension of {ERC1155} that allows token holders to destroy both their\n * own tokens and those that they have been approved to use.\n *\n * _Available since v3.1._\n */\nabstract contract ERC1155Burnable is ERC1155 {\n    function burn(\n        address account,\n        uint256 id,\n        uint256 value\n    ) public virtual {\n        require(\n            account == _msgSender() || isApprovedForAll(account, _msgSender()),\n            "ERC1155: caller is not owner nor approved"\n        );\n\n        _burn(account, id, value);\n    }\n\n    function burnBatch(\n        address account,\n        uint256[] memory ids,\n        uint256[] memory values\n    ) public virtual {\n        require(\n            account == _msgSender() || isApprovedForAll(account, _msgSender()),\n            "ERC1155: caller is not owner nor approved"\n        );\n\n        _burnBatch(account, ids, values);\n    }\n}\n\n\n// File contracts/polygon/ChildStartonERC1155.sol\n\npragma solidity ^0.8.0;\n\n\n\ncontract ChildStartonERC1155 is AccessControl, Pausable, ERC1155Burnable {\n    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");\n    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");\n    bytes32 public constant DEPOSITOR_ROLE = keccak256("DEPOSITOR_ROLE");\n    bytes32 public constant URI_SETTER_ROLE = keccak256("URI_SETTER_ROLE");\n    bytes32 public constant LOCKER_ROLE = keccak256("LOCKER_ROLE");\n\n    string private _contractUriSuffix;\n    string private _baseContractUri;\n\n    bool private _isMintAllowed;\n\n\n    constructor(string memory name, string memory baseUri, string memory contractUriSuffix, address ownerOrMultiSigContract) ERC1155(name) {\n        _setupRole(DEFAULT_ADMIN_ROLE, ownerOrMultiSigContract);\n        _setupRole(PAUSER_ROLE, ownerOrMultiSigContract);\n        _setupRole(MINTER_ROLE, ownerOrMultiSigContract);\n        _setupRole(URI_SETTER_ROLE, ownerOrMultiSigContract);\n        _setupRole(LOCKER_ROLE, ownerOrMultiSigContract);\n        _setURI(baseUri);\n        _contractUriSuffix = contractUriSuffix;\n        _baseContractUri = "https://ipfs.io/ipfs/";\n        _isMintAllowed = true;\n    }\n\n    function setURI(string memory newuri) public {\n        require(hasRole(URI_SETTER_ROLE, msg.sender));\n        _setURI(newuri);\n    }\n\n    function contractURI() public view returns (string memory) {\n        return bytes(_baseContractUri).length > 0\n            ? string(abi.encodePacked(_baseContractUri, _contractUriSuffix))\n            : \'\';\n    }\n\n    function setBaseContractURI(string memory newBaseContractUri) public {\n        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender));\n        \n        _baseContractUri = newBaseContractUri;\n    }\n\n    function pause() public {\n        require(hasRole(PAUSER_ROLE, msg.sender));\n        _pause();\n    }\n\n    function unpause() public {\n        require(hasRole(PAUSER_ROLE, msg.sender));\n        _unpause();\n    }\n\n    function lockMint() public {\n        require(hasRole(LOCKER_ROLE, msg.sender));\n        _isMintAllowed = false;\n    }\n\n    function mint(address account, uint256 id, uint256 amount, bytes memory data)\n        public\n    {\n        require(hasRole(MINTER_ROLE, msg.sender));\n        require(_isMintAllowed);\n\n        _mint(account, id, amount, data);\n    }\n\n    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)\n        public\n    {\n        require(hasRole(MINTER_ROLE, msg.sender));\n        require(_isMintAllowed);\n\n        _mintBatch(to, ids, amounts, data);\n    }\n\n    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)\n        internal\n        whenNotPaused\n        override\n    {\n        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);\n    }\n\n    function supportsInterface(bytes4 interfaceId)\n        public\n        view\n        override(ERC1155, AccessControl)\n        returns (bool)\n    {\n        return super.supportsInterface(interfaceId);\n    }\n\n     /**\n     * @notice called when tokens are deposited on root chain\n     * @dev Should be callable only by ChildChainManager\n     * Should handle deposit by minting the required tokens for user\n     * Make sure minting is done only by this function\n     * @param user user address for whom deposit is being done\n     * @param depositData abi encoded ids array and amounts array\n     */\n    function deposit(address user, bytes calldata depositData)\n        external\n    {\n        require(hasRole(DEPOSITOR_ROLE, msg.sender));\n\n        (\n            uint256[] memory ids,\n            uint256[] memory amounts,\n            bytes memory data\n        ) = abi.decode(depositData, (uint256[], uint256[], bytes));\n\n        require(\n            user != address(0),\n            "ChildMintableERC1155: INVALID_DEPOSIT_USER"\n        );\n\n        _mintBatch(user, ids, amounts, data);\n    }\n\n    /**\n     * @notice called when user wants to withdraw single token back to root chain\n     * @dev Should burn user\'s tokens. This transaction will be verified when exiting on root chain\n     * @param id id to withdraw\n     * @param amount amount to withdraw\n     */\n    function withdrawSingle(uint256 id, uint256 amount) external {\n        _burn(_msgSender(), id, amount);\n    }\n\n    /**\n     * @notice called when user wants to batch withdraw tokens back to root chain\n     * @dev Should burn user\'s tokens. This transaction will be verified when exiting on root chain\n     * @param ids ids to withdraw\n     * @param amounts amounts to withdraw\n     */\n    function withdrawBatch(uint256[] calldata ids, uint256[] calldata amounts)\n        external\n    {\n        _burnBatch(_msgSender(), ids, amounts);\n    }\n}\n',
      bytecode:
        "0x60806040523480156200001157600080fd5b50604051620030ef380380620030ef8339810160408190526200003491620003bd565b6001805460ff19169055836200004a8162000188565b5062000058600082620001a1565b620000847f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a82620001a1565b620000b07f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a682620001a1565b620000dc7f7804d923f43a17d325d77e781528e0793b2edd9890ab45fc64efd7b4b427744c82620001a1565b620001087faf9a8bb3cbd6b84fbccefa71ff73e26e798553c6914585a84886212a46a9027982620001a1565b620001138362000188565b8151620001289060059060208501906200024a565b506040805180820190915260158082527f68747470733a2f2f697066732e696f2f697066732f000000000000000000000060209092019182526200016f916006916200024a565b50506007805460ff1916600117905550620004ad915050565b80516200019d9060049060208401906200024a565b5050565b6000828152602081815260408083206001600160a01b03851684529091529020546200019d908390839060ff166200019d576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620002063390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b828054620002589062000470565b90600052602060002090601f0160209004810192826200027c5760008555620002c7565b82601f106200029757805160ff1916838001178555620002c7565b82800160010185558215620002c7579182015b82811115620002c7578251825591602001919060010190620002aa565b50620002d5929150620002d9565b5090565b5b80821115620002d55760008155600101620002da565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200031857600080fd5b81516001600160401b0380821115620003355762000335620002f0565b604051601f8301601f19908116603f01168101908282118183101715620003605762000360620002f0565b816040528381526020925086838588010111156200037d57600080fd5b600091505b83821015620003a1578582018301518183018401529082019062000382565b83821115620003b35760008385830101525b9695505050505050565b60008060008060808587031215620003d457600080fd5b84516001600160401b0380821115620003ec57600080fd5b620003fa8883890162000306565b955060208701519150808211156200041157600080fd5b6200041f8883890162000306565b945060408701519150808211156200043657600080fd5b50620004458782880162000306565b606087015190935090506001600160a01b03811681146200046557600080fd5b939692955090935050565b600181811c908216806200048557607f821691505b60208210811415620004a757634e487b7160e01b600052602260045260246000fd5b50919050565b612c3280620004bd6000396000f3fe608060405234801561001057600080fd5b50600436106101fa5760003560e01c8063731133e91161011a578063d5391393116100ad578063e8a3d4851161007c578063e8a3d4851461047e578063e985e9c514610486578063f242432a146104c2578063f3621367146104d5578063f5298aca146104fc57600080fd5b8063d539139314610415578063d547741f1461043c578063e0b6bb671461044f578063e63ab1e91461045757600080fd5b8063a217fddf116100e9578063a217fddf146103c0578063a22cb465146103c8578063a3b0b5a3146103db578063cf2c52cb1461040257600080fd5b8063731133e91461036b5780637f3457101461037e5780638456cb59146103a557806391d14854146103ad57600080fd5b80632eb2c2d6116101925780634e1273f4116101615780634e1273f41461031a5780635c5fb5211461033a5780635c975abb1461034d5780636b20c4541461035857600080fd5b80632eb2c2d6146102d95780632f2ff15d146102ec57806336568abe146102ff5780633f4ba83a1461031257600080fd5b80630e89341c116101ce5780630e89341c146102705780631f7fdffa146102905780632262f53f146102a3578063248a9ca3146102b657600080fd5b8062fdd58e146101ff57806301ffc9a71461022557806302fe5305146102485780630cd3a5381461025d575b600080fd5b61021261020d366004611da1565b61050f565b6040519081526020015b60405180910390f35b610238610233366004611de1565b6105a8565b604051901515815260200161021c565b61025b610256366004611e9d565b6105b9565b005b61025b61026b366004611e9d565b6105f8565b61028361027e366004611eed565b610623565b60405161021c9190611f5e565b61025b61029e366004612025565b6106b7565b61025b6102b13660046120bd565b61070b565b6102126102c4366004611eed565b60009081526020819052604090206001015490565b61025b6102e73660046120df565b610716565b61025b6102fa366004612188565b6107ad565b61025b61030d366004612188565b6107d8565b61025b610852565b61032d6103283660046121b4565b61088f565b60405161021c91906122b9565b61025b610348366004612317565b6109b8565b60015460ff16610238565b61025b610366366004612382565b610a26565b61025b6103793660046123f5565b610a69565b6102127f7804d923f43a17d325d77e781528e0793b2edd9890ab45fc64efd7b4b427744c81565b61025b610ab7565b6102386103bb366004612188565b610af2565b610212600081565b61025b6103d6366004612449565b610b1b565b6102127f8f4f2da22e8ac8f11e15f9fc141cddbb5deea8800186560abb6e68c5496619a981565b61025b610410366004612485565b610b26565b6102127f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61025b61044a366004612188565b610bed565b61025b610c13565b6102127f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b610283610c52565b610238610494366004612507565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205460ff1690565b61025b6104d0366004612531565b610ca6565b6102127faf9a8bb3cbd6b84fbccefa71ff73e26e798553c6914585a84886212a46a9027981565b61025b61050a366004612595565b610ceb565b60006001600160a01b0383166105805760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201526a65726f206164647265737360a81b60648201526084015b60405180910390fd5b5060009081526002602090815260408083206001600160a01b03949094168352929052205490565b60006105b382610d2e565b92915050565b6105e37f7804d923f43a17d325d77e781528e0793b2edd9890ab45fc64efd7b4b427744c33610af2565b6105ec57600080fd5b6105f581610d6e565b50565b610603600033610af2565b61060c57600080fd5b805161061f906006906020840190611cec565b5050565b606060048054610632906125c8565b80601f016020809104026020016040519081016040528092919081815260200182805461065e906125c8565b80156106ab5780601f10610680576101008083540402835291602001916106ab565b820191906000526020600020905b81548152906001019060200180831161068e57829003601f168201915b50505050509050919050565b6106e17f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610af2565b6106ea57600080fd5b60075460ff166106f957600080fd5b61070584848484610d81565b50505050565b61061f338383610edc565b6001600160a01b03851633148061073257506107328533610494565b6107995760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f74206044820152711bdddb995c881b9bdc88185c1c1c9bdd995960721b6064820152608401610577565b6107a68585858585610fe1565b5050505050565b6000828152602081905260409020600101546107c98133611186565b6107d383836111ea565b505050565b6001600160a01b03811633146108485760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610577565b61061f828261126e565b61087c7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610af2565b61088557600080fd5b61088d6112d3565b565b606081518351146108f45760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b6064820152608401610577565b600083516001600160401b0381111561090f5761090f611dfe565b604051908082528060200260200182016040528015610938578160200160208202803683370190505b50905060005b84518110156109b05761098385828151811061095c5761095c612603565b602002602001015185838151811061097657610976612603565b602002602001015161050f565b82828151811061099557610995612603565b60209081029190910101526109a98161262f565b905061093e565b509392505050565b610705338585808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505060408051602080890282810182019093528882529093508892508791829185019084908082843760009201919091525061136692505050565b6001600160a01b038316331480610a425750610a428333610494565b610a5e5760405162461bcd60e51b81526004016105779061264a565b6107d3838383611366565b610a937f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610af2565b610a9c57600080fd5b60075460ff16610aab57600080fd5b610705848484846114f7565b610ae17f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610af2565b610aea57600080fd5b61088d6115cf565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b61061f338383611648565b610b507f8f4f2da22e8ac8f11e15f9fc141cddbb5deea8800186560abb6e68c5496619a933610af2565b610b5957600080fd5b60008080610b6984860186612693565b919450925090506001600160a01b038616610bd95760405162461bcd60e51b815260206004820152602a60248201527f4368696c644d696e7461626c65455243313135353a20494e56414c49445f44456044820152692827a9a4aa2faaa9a2a960b11b6064820152608401610577565b610be586848484610d81565b505050505050565b600082815260208190526040902060010154610c098133611186565b6107d3838361126e565b610c3d7faf9a8bb3cbd6b84fbccefa71ff73e26e798553c6914585a84886212a46a9027933610af2565b610c4657600080fd5b6007805460ff19169055565b6060600060068054610c63906125c8565b905011610c7d575060408051602081019091526000815290565b60066005604051602001610c929291906127aa565b604051602081830303815290604052905090565b6001600160a01b038516331480610cc25750610cc28533610494565b610cde5760405162461bcd60e51b81526004016105779061264a565b6107a68585858585611729565b6001600160a01b038316331480610d075750610d078333610494565b610d235760405162461bcd60e51b81526004016105779061264a565b6107d3838383610edc565b60006001600160e01b03198216636cdb3d1360e11b1480610d5f57506001600160e01b031982166303a24d0760e21b145b806105b357506105b38261184a565b805161061f906004906020840190611cec565b6001600160a01b038416610da75760405162461bcd60e51b8152600401610577906127bf565b8151835114610dc85760405162461bcd60e51b815260040161057790612800565b33610dd88160008787878761187f565b60005b8451811015610e7457838181518110610df657610df6612603565b602002602001015160026000878481518110610e1457610e14612603565b602002602001015181526020019081526020016000206000886001600160a01b03166001600160a01b031681526020019081526020016000206000828254610e5c9190612848565b90915550819050610e6c8161262f565b915050610ddb565b50846001600160a01b031660006001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610ec5929190612860565b60405180910390a46107a6816000878787876118ca565b6001600160a01b038316610f025760405162461bcd60e51b81526004016105779061288e565b33610f3181856000610f1387611a35565b610f1c87611a35565b6040518060200160405280600081525061187f565b60008381526002602090815260408083206001600160a01b038816845290915290205482811015610f745760405162461bcd60e51b8152600401610577906128d1565b60008481526002602090815260408083206001600160a01b03898116808652918452828520888703905582518981529384018890529092908616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b81518351146110025760405162461bcd60e51b815260040161057790612800565b6001600160a01b0384166110285760405162461bcd60e51b815260040161057790612915565b3361103781878787878761187f565b60005b845181101561112057600085828151811061105757611057612603565b60200260200101519050600085838151811061107557611075612603565b60209081029190910181015160008481526002835260408082206001600160a01b038e1683529093529190912054909150818110156110c65760405162461bcd60e51b81526004016105779061295a565b60008381526002602090815260408083206001600160a01b038e8116855292528083208585039055908b16825281208054849290611105908490612848565b92505081905550505050806111199061262f565b905061103a565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051611170929190612860565b60405180910390a4610be58187878787876118ca565b6111908282610af2565b61061f576111a8816001600160a01b03166014611a80565b6111b3836020611a80565b6040516020016111c49291906129a4565b60408051601f198184030181529082905262461bcd60e51b825261057791600401611f5e565b6111f48282610af2565b61061f576000828152602081815260408083206001600160a01b03851684529091529020805460ff1916600117905561122a3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6112788282610af2565b1561061f576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60015460ff1661131c5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610577565b6001805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b03831661138c5760405162461bcd60e51b81526004016105779061288e565b80518251146113ad5760405162461bcd60e51b815260040161057790612800565b60003390506113d08185600086866040518060200160405280600081525061187f565b60005b83518110156114985760008482815181106113f0576113f0612603565b60200260200101519050600084838151811061140e5761140e612603565b60209081029190910181015160008481526002835260408082206001600160a01b038c16835290935291909120549091508181101561145f5760405162461bcd60e51b8152600401610577906128d1565b60009283526002602090815260408085206001600160a01b038b16865290915290922091039055806114908161262f565b9150506113d3565b5060006001600160a01b0316846001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb86866040516114e9929190612860565b60405180910390a450505050565b6001600160a01b03841661151d5760405162461bcd60e51b8152600401610577906127bf565b3361153d8160008761152e88611a35565b61153788611a35565b8761187f565b60008481526002602090815260408083206001600160a01b03891684529091528120805485929061156f908490612848565b909155505060408051858152602081018590526001600160a01b0380881692600092918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46107a681600087878787611c22565b60015460ff16156116155760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610577565b6001805460ff1916811790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25833611349565b816001600160a01b0316836001600160a01b031614156116bc5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b6064820152608401610577565b6001600160a01b03838116600081815260036020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b03841661174f5760405162461bcd60e51b815260040161057790612915565b3361175f81878761152e88611a35565b60008481526002602090815260408083206001600160a01b038a168452909152902054838110156117a25760405162461bcd60e51b81526004016105779061295a565b60008581526002602090815260408083206001600160a01b038b81168552925280832087850390559088168252812080548692906117e1908490612848565b909155505060408051868152602081018690526001600160a01b03808916928a821692918616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4611841828888888888611c22565b50505050505050565b60006001600160e01b03198216637965db0b60e01b14806105b357506301ffc9a760e01b6001600160e01b03198316146105b3565b60015460ff16156118c55760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610577565b610be5565b6001600160a01b0384163b15610be55760405163bc197c8160e01b81526001600160a01b0385169063bc197c819061190e9089908990889088908890600401612a19565b602060405180830381600087803b15801561192857600080fd5b505af1925050508015611958575060408051601f3d908101601f1916820190925261195591810190612a77565b60015b611a0557611964612a94565b806308c379a0141561199e5750611979612ab0565b8061198457506119a0565b8060405162461bcd60e51b81526004016105779190611f5e565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b6064820152608401610577565b6001600160e01b0319811663bc197c8160e01b146118415760405162461bcd60e51b815260040161057790612b39565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110611a6f57611a6f612603565b602090810291909101015292915050565b60606000611a8f836002612b81565b611a9a906002612848565b6001600160401b03811115611ab157611ab1611dfe565b6040519080825280601f01601f191660200182016040528015611adb576020820181803683370190505b509050600360fc1b81600081518110611af657611af6612603565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611b2557611b25612603565b60200101906001600160f81b031916908160001a9053506000611b49846002612b81565b611b54906001612848565b90505b6001811115611bcc576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611b8857611b88612603565b1a60f81b828281518110611b9e57611b9e612603565b60200101906001600160f81b031916908160001a90535060049490941c93611bc581612ba0565b9050611b57565b508315611c1b5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610577565b9392505050565b6001600160a01b0384163b15610be55760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190611c669089908990889088908890600401612bb7565b602060405180830381600087803b158015611c8057600080fd5b505af1925050508015611cb0575060408051601f3d908101601f19168201909252611cad91810190612a77565b60015b611cbc57611964612a94565b6001600160e01b0319811663f23a6e6160e01b146118415760405162461bcd60e51b815260040161057790612b39565b828054611cf8906125c8565b90600052602060002090601f016020900481019282611d1a5760008555611d60565b82601f10611d3357805160ff1916838001178555611d60565b82800160010185558215611d60579182015b82811115611d60578251825591602001919060010190611d45565b50611d6c929150611d70565b5090565b5b80821115611d6c5760008155600101611d71565b80356001600160a01b0381168114611d9c57600080fd5b919050565b60008060408385031215611db457600080fd5b611dbd83611d85565b946020939093013593505050565b6001600160e01b0319811681146105f557600080fd5b600060208284031215611df357600080fd5b8135611c1b81611dcb565b634e487b7160e01b600052604160045260246000fd5b601f8201601f191681016001600160401b0381118282101715611e3957611e39611dfe565b6040525050565b60006001600160401b03831115611e5957611e59611dfe565b604051611e70601f8501601f191660200182611e14565b809150838152848484011115611e8557600080fd5b83836020830137600060208583010152509392505050565b600060208284031215611eaf57600080fd5b81356001600160401b03811115611ec557600080fd5b8201601f81018413611ed657600080fd5b611ee584823560208401611e40565b949350505050565b600060208284031215611eff57600080fd5b5035919050565b60005b83811015611f21578181015183820152602001611f09565b838111156107055750506000910152565b60008151808452611f4a816020860160208601611f06565b601f01601f19169290920160200192915050565b602081526000611c1b6020830184611f32565b60006001600160401b03821115611f8a57611f8a611dfe565b5060051b60200190565b600082601f830112611fa557600080fd5b81356020611fb282611f71565b604051611fbf8282611e14565b83815260059390931b8501820192828101915086841115611fdf57600080fd5b8286015b84811015611ffa5780358352918301918301611fe3565b509695505050505050565b600082601f83011261201657600080fd5b611c1b83833560208501611e40565b6000806000806080858703121561203b57600080fd5b61204485611d85565b935060208501356001600160401b038082111561206057600080fd5b61206c88838901611f94565b9450604087013591508082111561208257600080fd5b61208e88838901611f94565b935060608701359150808211156120a457600080fd5b506120b187828801612005565b91505092959194509250565b600080604083850312156120d057600080fd5b50508035926020909101359150565b600080600080600060a086880312156120f757600080fd5b61210086611d85565b945061210e60208701611d85565b935060408601356001600160401b038082111561212a57600080fd5b61213689838a01611f94565b9450606088013591508082111561214c57600080fd5b61215889838a01611f94565b9350608088013591508082111561216e57600080fd5b5061217b88828901612005565b9150509295509295909350565b6000806040838503121561219b57600080fd5b823591506121ab60208401611d85565b90509250929050565b600080604083850312156121c757600080fd5b82356001600160401b03808211156121de57600080fd5b818501915085601f8301126121f257600080fd5b813560206121ff82611f71565b60405161220c8282611e14565b83815260059390931b850182019282810191508984111561222c57600080fd5b948201945b838610156122515761224286611d85565b82529482019490820190612231565b9650508601359250508082111561226757600080fd5b5061227485828601611f94565b9150509250929050565b600081518084526020808501945080840160005b838110156122ae57815187529582019590820190600101612292565b509495945050505050565b602081526000611c1b602083018461227e565b60008083601f8401126122de57600080fd5b5081356001600160401b038111156122f557600080fd5b6020830191508360208260051b850101111561231057600080fd5b9250929050565b6000806000806040858703121561232d57600080fd5b84356001600160401b038082111561234457600080fd5b612350888389016122cc565b9096509450602087013591508082111561236957600080fd5b50612376878288016122cc565b95989497509550505050565b60008060006060848603121561239757600080fd5b6123a084611d85565b925060208401356001600160401b03808211156123bc57600080fd5b6123c887838801611f94565b935060408601359150808211156123de57600080fd5b506123eb86828701611f94565b9150509250925092565b6000806000806080858703121561240b57600080fd5b61241485611d85565b9350602085013592506040850135915060608501356001600160401b0381111561243d57600080fd5b6120b187828801612005565b6000806040838503121561245c57600080fd5b61246583611d85565b91506020830135801515811461247a57600080fd5b809150509250929050565b60008060006040848603121561249a57600080fd5b6124a384611d85565b925060208401356001600160401b03808211156124bf57600080fd5b818601915086601f8301126124d357600080fd5b8135818111156124e257600080fd5b8760208285010111156124f457600080fd5b6020830194508093505050509250925092565b6000806040838503121561251a57600080fd5b61252383611d85565b91506121ab60208401611d85565b600080600080600060a0868803121561254957600080fd5b61255286611d85565b945061256060208701611d85565b9350604086013592506060860135915060808601356001600160401b0381111561258957600080fd5b61217b88828901612005565b6000806000606084860312156125aa57600080fd5b6125b384611d85565b95602085013595506040909401359392505050565b600181811c908216806125dc57607f821691505b602082108114156125fd57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060001982141561264357612643612619565b5060010190565b60208082526029908201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260408201526808185c1c1c9bdd995960ba1b606082015260800190565b6000806000606084860312156126a857600080fd5b83356001600160401b03808211156126bf57600080fd5b6126cb87838801611f94565b945060208601359150808211156126e157600080fd5b6126ed87838801611f94565b9350604086013591508082111561270357600080fd5b506123eb86828701612005565b8054600090600181811c908083168061272a57607f831692505b602080841082141561274c57634e487b7160e01b600052602260045260246000fd5b81801561276057600181146127715761279e565b60ff1986168952848901965061279e565b60008881526020902060005b868110156127965781548b82015290850190830161277d565b505084890196505b50505050505092915050565b6000611ee56127b98386612710565b84612710565b60208082526021908201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736040820152607360f81b606082015260800190565b60208082526028908201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206040820152670dad2e6dac2e8c6d60c31b606082015260800190565b6000821982111561285b5761285b612619565b500190565b604081526000612873604083018561227e565b8281036020840152612885818561227e565b95945050505050565b60208082526023908201527f455243313135353a206275726e2066726f6d20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526024908201527f455243313135353a206275726e20616d6f756e7420657863656564732062616c604082015263616e636560e01b606082015260800190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516129dc816017850160208801611f06565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351612a0d816028840160208801611f06565b01602801949350505050565b6001600160a01b0386811682528516602082015260a060408201819052600090612a459083018661227e565b8281036060840152612a57818661227e565b90508281036080840152612a6b8185611f32565b98975050505050505050565b600060208284031215612a8957600080fd5b8151611c1b81611dcb565b600060033d1115612aad5760046000803e5060005160e01c5b90565b600060443d1015612abe5790565b6040516003193d81016004833e81513d6001600160401b038160248401118184111715612aed57505050505090565b8285019150815181811115612b055750505050505090565b843d8701016020828501011115612b1f5750505050505090565b612b2e60208286010187611e14565b509095945050505050565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b6000816000190483118215151615612b9b57612b9b612619565b500290565b600081612baf57612baf612619565b506000190190565b6001600160a01b03868116825285166020820152604081018490526060810183905260a060808201819052600090612bf190830184611f32565b97965050505050505056fea264697066735822122060f6a2d8732f190012eea5b325761a8ffe10ebf63095cf3376b8b7a9d9ec062b64736f6c63430008090033",
      contractName: "ChildStartonERC1155",
      compilerVersion: "v0.8.9+commit.e5eed63a",
      optimizationUsed: true,
    },
    isActivated: true,
    isAudited: false,
    order: 92,
    tags: [SmartContractTemplateCategories.DEPRECATED],
    category: SmartContractTemplateCategories.DEPRECATED,
  },
  {
    id: "sct_743c793cffa741cbafcb7a91f6fd9629",
    name: "Child ERC20 Mintable Fungible tokens",
    description:
      "<p>The ERC20 is a smart contract standard made for fungible tokens (I.e: interchangeable tokens like coins).</p> <p>The mintable version of this standard allows the creator to mint new tokens whenever they want.</p> <p>This brings more usage flexibility but implies more trust towards the creators as well.</p> <p>Parameters :</p> <ul> <li><strong>Name</strong> : This is the name of your smart contract which will be reflected on-chain.</li> <li><strong>Symbol</strong> : This is the symbol associated to the NFT collection</li> <li><strong>Initial Supply</strong> : Initial amount of token emitted at the smart contract creation.</li> </ul> <p>You should add 18 trailing zeros to compensate the number of digits reserved to decimals.</p>",
    shortDescription:
      "The smart contract template for bridging mintable fungible tokens between Ethereum and Polygon. For example, at large scale, to reduce gas fees and increase speed, tokens can be transferred from one blockchain network to another. ",
    blockchains: ["polygon"],
    abi: [
      {
        type: "constructor",
        inputs: [
          {
            name: "name",
            type: "string",
            internalType: "string",
          },
          {
            name: "symbol",
            type: "string",
            internalType: "string",
          },
          {
            name: "initialSupply",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "ownerOrMultiSigContract",
            type: "address",
            internalType: "address",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "Approval",
        type: "event",
        inputs: [
          {
            name: "owner",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "spender",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "value",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        name: "Paused",
        type: "event",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: false,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "RoleAdminChanged",
        type: "event",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "previousAdminRole",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "newAdminRole",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
        ],
        anonymous: false,
      },
      {
        name: "RoleGranted",
        type: "event",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "sender",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "RoleRevoked",
        type: "event",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "sender",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "Transfer",
        type: "event",
        inputs: [
          {
            name: "from",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "value",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        name: "Unpaused",
        type: "event",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: false,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "DEFAULT_ADMIN_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "DEPOSITOR_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "MINTER_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "PAUSER_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "allowance",
        type: "function",
        inputs: [
          {
            name: "owner",
            type: "address",
            internalType: "address",
          },
          {
            name: "spender",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "approve",
        type: "function",
        inputs: [
          {
            name: "spender",
            type: "address",
            internalType: "address",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "balanceOf",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "burn",
        type: "function",
        inputs: [
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "burnFrom",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "decimals",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "uint8",
            internalType: "uint8",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "decreaseAllowance",
        type: "function",
        inputs: [
          {
            name: "spender",
            type: "address",
            internalType: "address",
          },
          {
            name: "subtractedValue",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "deposit",
        type: "function",
        inputs: [
          {
            name: "user",
            type: "address",
            internalType: "address",
          },
          {
            name: "depositData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "getRoleAdmin",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "grantRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "hasRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "increaseAllowance",
        type: "function",
        inputs: [
          {
            name: "spender",
            type: "address",
            internalType: "address",
          },
          {
            name: "addedValue",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "mint",
        type: "function",
        inputs: [
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "name",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "string",
            internalType: "string",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "pause",
        type: "function",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "paused",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "renounceRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "revokeRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "supportsInterface",
        type: "function",
        inputs: [
          {
            name: "interfaceId",
            type: "bytes4",
            internalType: "bytes4",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "symbol",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "string",
            internalType: "string",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "totalSupply",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "transfer",
        type: "function",
        inputs: [
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "transferFrom",
        type: "function",
        inputs: [
          {
            name: "from",
            type: "address",
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "unpause",
        type: "function",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "withdraw",
        type: "function",
        inputs: [
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
    ],
    compilationDetails: {
      runs: 200,
      source:
        '// Sources flattened with hardhat v2.9.1 https://hardhat.org\n\n// File @openzeppelin/contracts/token/ERC20/IERC20.sol@v4.5.0\n\n// SPDX-License-Identifier: MIT\n// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC20/IERC20.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Interface of the ERC20 standard as defined in the EIP.\n */\ninterface IERC20 {\n    /**\n     * @dev Returns the amount of tokens in existence.\n     */\n    function totalSupply() external view returns (uint256);\n\n    /**\n     * @dev Returns the amount of tokens owned by `account`.\n     */\n    function balanceOf(address account) external view returns (uint256);\n\n    /**\n     * @dev Moves `amount` tokens from the caller\'s account to `to`.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * Emits a {Transfer} event.\n     */\n    function transfer(address to, uint256 amount) external returns (bool);\n\n    /**\n     * @dev Returns the remaining number of tokens that `spender` will be\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\n     * zero by default.\n     *\n     * This value changes when {approve} or {transferFrom} are called.\n     */\n    function allowance(address owner, address spender) external view returns (uint256);\n\n    /**\n     * @dev Sets `amount` as the allowance of `spender` over the caller\'s tokens.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\n     * that someone may use both the old and the new allowance by unfortunate\n     * transaction ordering. One possible solution to mitigate this race\n     * condition is to first reduce the spender\'s allowance to 0 and set the\n     * desired value afterwards:\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n     *\n     * Emits an {Approval} event.\n     */\n    function approve(address spender, uint256 amount) external returns (bool);\n\n    /**\n     * @dev Moves `amount` tokens from `from` to `to` using the\n     * allowance mechanism. `amount` is then deducted from the caller\'s\n     * allowance.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * Emits a {Transfer} event.\n     */\n    function transferFrom(\n        address from,\n        address to,\n        uint256 amount\n    ) external returns (bool);\n\n    /**\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\n     * another (`to`).\n     *\n     * Note that `value` may be zero.\n     */\n    event Transfer(address indexed from, address indexed to, uint256 value);\n\n    /**\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\n     * a call to {approve}. `value` is the new allowance.\n     */\n    event Approval(address indexed owner, address indexed spender, uint256 value);\n}\n\n\n// File @openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (token/ERC20/extensions/IERC20Metadata.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Interface for the optional metadata functions from the ERC20 standard.\n *\n * _Available since v4.1._\n */\ninterface IERC20Metadata is IERC20 {\n    /**\n     * @dev Returns the name of the token.\n     */\n    function name() external view returns (string memory);\n\n    /**\n     * @dev Returns the symbol of the token.\n     */\n    function symbol() external view returns (string memory);\n\n    /**\n     * @dev Returns the decimals places of the token.\n     */\n    function decimals() external view returns (uint8);\n}\n\n\n// File @openzeppelin/contracts/utils/Context.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Provides information about the current execution context, including the\n * sender of the transaction and its data. While these are generally available\n * via msg.sender and msg.data, they should not be accessed in such a direct\n * manner, since when dealing with meta-transactions the account sending and\n * paying for execution may not be the actual sender (as far as an application\n * is concerned).\n *\n * This contract is only required for intermediate, library-like contracts.\n */\nabstract contract Context {\n    function _msgSender() internal view virtual returns (address) {\n        return msg.sender;\n    }\n\n    function _msgData() internal view virtual returns (bytes calldata) {\n        return msg.data;\n    }\n}\n\n\n// File @openzeppelin/contracts/token/ERC20/ERC20.sol@v4.5.0\n\n// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC20/ERC20.sol)\n\npragma solidity ^0.8.0;\n\n\n\n/**\n * @dev Implementation of the {IERC20} interface.\n *\n * This implementation is agnostic to the way tokens are created. This means\n * that a supply mechanism has to be added in a derived contract using {_mint}.\n * For a generic mechanism see {ERC20PresetMinterPauser}.\n *\n * TIP: For a detailed writeup see our guide\n * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How\n * to implement supply mechanisms].\n *\n * We have followed general OpenZeppelin Contracts guidelines: functions revert\n * instead returning `false` on failure. This behavior is nonetheless\n * conventional and does not conflict with the expectations of ERC20\n * applications.\n *\n * Additionally, an {Approval} event is emitted on calls to {transferFrom}.\n * This allows applications to reconstruct the allowance for all accounts just\n * by listening to said events. Other implementations of the EIP may not emit\n * these events, as it isn\'t required by the specification.\n *\n * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}\n * functions have been added to mitigate the well-known issues around setting\n * allowances. See {IERC20-approve}.\n */\ncontract ERC20 is Context, IERC20, IERC20Metadata {\n    mapping(address => uint256) private _balances;\n\n    mapping(address => mapping(address => uint256)) private _allowances;\n\n    uint256 private _totalSupply;\n\n    string private _name;\n    string private _symbol;\n\n    /**\n     * @dev Sets the values for {name} and {symbol}.\n     *\n     * The default value of {decimals} is 18. To select a different value for\n     * {decimals} you should overload it.\n     *\n     * All two of these values are immutable: they can only be set once during\n     * construction.\n     */\n    constructor(string memory name_, string memory symbol_) {\n        _name = name_;\n        _symbol = symbol_;\n    }\n\n    /**\n     * @dev Returns the name of the token.\n     */\n    function name() public view virtual override returns (string memory) {\n        return _name;\n    }\n\n    /**\n     * @dev Returns the symbol of the token, usually a shorter version of the\n     * name.\n     */\n    function symbol() public view virtual override returns (string memory) {\n        return _symbol;\n    }\n\n    /**\n     * @dev Returns the number of decimals used to get its user representation.\n     * For example, if `decimals` equals `2`, a balance of `505` tokens should\n     * be displayed to a user as `5.05` (`505 / 10 ** 2`).\n     *\n     * Tokens usually opt for a value of 18, imitating the relationship between\n     * Ether and Wei. This is the value {ERC20} uses, unless this function is\n     * overridden;\n     *\n     * NOTE: This information is only used for _display_ purposes: it in\n     * no way affects any of the arithmetic of the contract, including\n     * {IERC20-balanceOf} and {IERC20-transfer}.\n     */\n    function decimals() public view virtual override returns (uint8) {\n        return 18;\n    }\n\n    /**\n     * @dev See {IERC20-totalSupply}.\n     */\n    function totalSupply() public view virtual override returns (uint256) {\n        return _totalSupply;\n    }\n\n    /**\n     * @dev See {IERC20-balanceOf}.\n     */\n    function balanceOf(address account) public view virtual override returns (uint256) {\n        return _balances[account];\n    }\n\n    /**\n     * @dev See {IERC20-transfer}.\n     *\n     * Requirements:\n     *\n     * - `to` cannot be the zero address.\n     * - the caller must have a balance of at least `amount`.\n     */\n    function transfer(address to, uint256 amount) public virtual override returns (bool) {\n        address owner = _msgSender();\n        _transfer(owner, to, amount);\n        return true;\n    }\n\n    /**\n     * @dev See {IERC20-allowance}.\n     */\n    function allowance(address owner, address spender) public view virtual override returns (uint256) {\n        return _allowances[owner][spender];\n    }\n\n    /**\n     * @dev See {IERC20-approve}.\n     *\n     * NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on\n     * `transferFrom`. This is semantically equivalent to an infinite approval.\n     *\n     * Requirements:\n     *\n     * - `spender` cannot be the zero address.\n     */\n    function approve(address spender, uint256 amount) public virtual override returns (bool) {\n        address owner = _msgSender();\n        _approve(owner, spender, amount);\n        return true;\n    }\n\n    /**\n     * @dev See {IERC20-transferFrom}.\n     *\n     * Emits an {Approval} event indicating the updated allowance. This is not\n     * required by the EIP. See the note at the beginning of {ERC20}.\n     *\n     * NOTE: Does not update the allowance if the current allowance\n     * is the maximum `uint256`.\n     *\n     * Requirements:\n     *\n     * - `from` and `to` cannot be the zero address.\n     * - `from` must have a balance of at least `amount`.\n     * - the caller must have allowance for ``from``\'s tokens of at least\n     * `amount`.\n     */\n    function transferFrom(\n        address from,\n        address to,\n        uint256 amount\n    ) public virtual override returns (bool) {\n        address spender = _msgSender();\n        _spendAllowance(from, spender, amount);\n        _transfer(from, to, amount);\n        return true;\n    }\n\n    /**\n     * @dev Atomically increases the allowance granted to `spender` by the caller.\n     *\n     * This is an alternative to {approve} that can be used as a mitigation for\n     * problems described in {IERC20-approve}.\n     *\n     * Emits an {Approval} event indicating the updated allowance.\n     *\n     * Requirements:\n     *\n     * - `spender` cannot be the zero address.\n     */\n    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {\n        address owner = _msgSender();\n        _approve(owner, spender, _allowances[owner][spender] + addedValue);\n        return true;\n    }\n\n    /**\n     * @dev Atomically decreases the allowance granted to `spender` by the caller.\n     *\n     * This is an alternative to {approve} that can be used as a mitigation for\n     * problems described in {IERC20-approve}.\n     *\n     * Emits an {Approval} event indicating the updated allowance.\n     *\n     * Requirements:\n     *\n     * - `spender` cannot be the zero address.\n     * - `spender` must have allowance for the caller of at least\n     * `subtractedValue`.\n     */\n    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {\n        address owner = _msgSender();\n        uint256 currentAllowance = _allowances[owner][spender];\n        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");\n        unchecked {\n            _approve(owner, spender, currentAllowance - subtractedValue);\n        }\n\n        return true;\n    }\n\n    /**\n     * @dev Moves `amount` of tokens from `sender` to `recipient`.\n     *\n     * This internal function is equivalent to {transfer}, and can be used to\n     * e.g. implement automatic token fees, slashing mechanisms, etc.\n     *\n     * Emits a {Transfer} event.\n     *\n     * Requirements:\n     *\n     * - `from` cannot be the zero address.\n     * - `to` cannot be the zero address.\n     * - `from` must have a balance of at least `amount`.\n     */\n    function _transfer(\n        address from,\n        address to,\n        uint256 amount\n    ) internal virtual {\n        require(from != address(0), "ERC20: transfer from the zero address");\n        require(to != address(0), "ERC20: transfer to the zero address");\n\n        _beforeTokenTransfer(from, to, amount);\n\n        uint256 fromBalance = _balances[from];\n        require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");\n        unchecked {\n            _balances[from] = fromBalance - amount;\n        }\n        _balances[to] += amount;\n\n        emit Transfer(from, to, amount);\n\n        _afterTokenTransfer(from, to, amount);\n    }\n\n    /** @dev Creates `amount` tokens and assigns them to `account`, increasing\n     * the total supply.\n     *\n     * Emits a {Transfer} event with `from` set to the zero address.\n     *\n     * Requirements:\n     *\n     * - `account` cannot be the zero address.\n     */\n    function _mint(address account, uint256 amount) internal virtual {\n        require(account != address(0), "ERC20: mint to the zero address");\n\n        _beforeTokenTransfer(address(0), account, amount);\n\n        _totalSupply += amount;\n        _balances[account] += amount;\n        emit Transfer(address(0), account, amount);\n\n        _afterTokenTransfer(address(0), account, amount);\n    }\n\n    /**\n     * @dev Destroys `amount` tokens from `account`, reducing the\n     * total supply.\n     *\n     * Emits a {Transfer} event with `to` set to the zero address.\n     *\n     * Requirements:\n     *\n     * - `account` cannot be the zero address.\n     * - `account` must have at least `amount` tokens.\n     */\n    function _burn(address account, uint256 amount) internal virtual {\n        require(account != address(0), "ERC20: burn from the zero address");\n\n        _beforeTokenTransfer(account, address(0), amount);\n\n        uint256 accountBalance = _balances[account];\n        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");\n        unchecked {\n            _balances[account] = accountBalance - amount;\n        }\n        _totalSupply -= amount;\n\n        emit Transfer(account, address(0), amount);\n\n        _afterTokenTransfer(account, address(0), amount);\n    }\n\n    /**\n     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.\n     *\n     * This internal function is equivalent to `approve`, and can be used to\n     * e.g. set automatic allowances for certain subsystems, etc.\n     *\n     * Emits an {Approval} event.\n     *\n     * Requirements:\n     *\n     * - `owner` cannot be the zero address.\n     * - `spender` cannot be the zero address.\n     */\n    function _approve(\n        address owner,\n        address spender,\n        uint256 amount\n    ) internal virtual {\n        require(owner != address(0), "ERC20: approve from the zero address");\n        require(spender != address(0), "ERC20: approve to the zero address");\n\n        _allowances[owner][spender] = amount;\n        emit Approval(owner, spender, amount);\n    }\n\n    /**\n     * @dev Spend `amount` form the allowance of `owner` toward `spender`.\n     *\n     * Does not update the allowance amount in case of infinite allowance.\n     * Revert if not enough allowance is available.\n     *\n     * Might emit an {Approval} event.\n     */\n    function _spendAllowance(\n        address owner,\n        address spender,\n        uint256 amount\n    ) internal virtual {\n        uint256 currentAllowance = allowance(owner, spender);\n        if (currentAllowance != type(uint256).max) {\n            require(currentAllowance >= amount, "ERC20: insufficient allowance");\n            unchecked {\n                _approve(owner, spender, currentAllowance - amount);\n            }\n        }\n    }\n\n    /**\n     * @dev Hook that is called before any transfer of tokens. This includes\n     * minting and burning.\n     *\n     * Calling conditions:\n     *\n     * - when `from` and `to` are both non-zero, `amount` of ``from``\'s tokens\n     * will be transferred to `to`.\n     * - when `from` is zero, `amount` tokens will be minted for `to`.\n     * - when `to` is zero, `amount` of ``from``\'s tokens will be burned.\n     * - `from` and `to` are never both zero.\n     *\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\n     */\n    function _beforeTokenTransfer(\n        address from,\n        address to,\n        uint256 amount\n    ) internal virtual {}\n\n    /**\n     * @dev Hook that is called after any transfer of tokens. This includes\n     * minting and burning.\n     *\n     * Calling conditions:\n     *\n     * - when `from` and `to` are both non-zero, `amount` of ``from``\'s tokens\n     * has been transferred to `to`.\n     * - when `from` is zero, `amount` tokens have been minted for `to`.\n     * - when `to` is zero, `amount` of ``from``\'s tokens have been burned.\n     * - `from` and `to` are never both zero.\n     *\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\n     */\n    function _afterTokenTransfer(\n        address from,\n        address to,\n        uint256 amount\n    ) internal virtual {}\n}\n\n\n// File @openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol@v4.5.0\n\n// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC20/extensions/ERC20Burnable.sol)\n\npragma solidity ^0.8.0;\n\n\n/**\n * @dev Extension of {ERC20} that allows token holders to destroy both their own\n * tokens and those that they have an allowance for, in a way that can be\n * recognized off-chain (via event analysis).\n */\nabstract contract ERC20Burnable is Context, ERC20 {\n    /**\n     * @dev Destroys `amount` tokens from the caller.\n     *\n     * See {ERC20-_burn}.\n     */\n    function burn(uint256 amount) public virtual {\n        _burn(_msgSender(), amount);\n    }\n\n    /**\n     * @dev Destroys `amount` tokens from `account`, deducting from the caller\'s\n     * allowance.\n     *\n     * See {ERC20-_burn} and {ERC20-allowance}.\n     *\n     * Requirements:\n     *\n     * - the caller must have allowance for ``accounts``\'s tokens of at least\n     * `amount`.\n     */\n    function burnFrom(address account, uint256 amount) public virtual {\n        _spendAllowance(account, _msgSender(), amount);\n        _burn(account, amount);\n    }\n}\n\n\n// File @openzeppelin/contracts/security/Pausable.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (security/Pausable.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Contract module which allows children to implement an emergency stop\n * mechanism that can be triggered by an authorized account.\n *\n * This module is used through inheritance. It will make available the\n * modifiers `whenNotPaused` and `whenPaused`, which can be applied to\n * the functions of your contract. Note that they will not be pausable by\n * simply including this module, only once the modifiers are put in place.\n */\nabstract contract Pausable is Context {\n    /**\n     * @dev Emitted when the pause is triggered by `account`.\n     */\n    event Paused(address account);\n\n    /**\n     * @dev Emitted when the pause is lifted by `account`.\n     */\n    event Unpaused(address account);\n\n    bool private _paused;\n\n    /**\n     * @dev Initializes the contract in unpaused state.\n     */\n    constructor() {\n        _paused = false;\n    }\n\n    /**\n     * @dev Returns true if the contract is paused, and false otherwise.\n     */\n    function paused() public view virtual returns (bool) {\n        return _paused;\n    }\n\n    /**\n     * @dev Modifier to make a function callable only when the contract is not paused.\n     *\n     * Requirements:\n     *\n     * - The contract must not be paused.\n     */\n    modifier whenNotPaused() {\n        require(!paused(), "Pausable: paused");\n        _;\n    }\n\n    /**\n     * @dev Modifier to make a function callable only when the contract is paused.\n     *\n     * Requirements:\n     *\n     * - The contract must be paused.\n     */\n    modifier whenPaused() {\n        require(paused(), "Pausable: not paused");\n        _;\n    }\n\n    /**\n     * @dev Triggers stopped state.\n     *\n     * Requirements:\n     *\n     * - The contract must not be paused.\n     */\n    function _pause() internal virtual whenNotPaused {\n        _paused = true;\n        emit Paused(_msgSender());\n    }\n\n    /**\n     * @dev Returns to normal state.\n     *\n     * Requirements:\n     *\n     * - The contract must be paused.\n     */\n    function _unpause() internal virtual whenPaused {\n        _paused = false;\n        emit Unpaused(_msgSender());\n    }\n}\n\n\n// File @openzeppelin/contracts/access/IAccessControl.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (access/IAccessControl.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev External interface of AccessControl declared to support ERC165 detection.\n */\ninterface IAccessControl {\n    /**\n     * @dev Emitted when `newAdminRole` is set as ``role``\'s admin role, replacing `previousAdminRole`\n     *\n     * `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite\n     * {RoleAdminChanged} not being emitted signaling this.\n     *\n     * _Available since v3.1._\n     */\n    event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole);\n\n    /**\n     * @dev Emitted when `account` is granted `role`.\n     *\n     * `sender` is the account that originated the contract call, an admin role\n     * bearer except when using {AccessControl-_setupRole}.\n     */\n    event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender);\n\n    /**\n     * @dev Emitted when `account` is revoked `role`.\n     *\n     * `sender` is the account that originated the contract call:\n     *   - if using `revokeRole`, it is the admin role bearer\n     *   - if using `renounceRole`, it is the role bearer (i.e. `account`)\n     */\n    event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender);\n\n    /**\n     * @dev Returns `true` if `account` has been granted `role`.\n     */\n    function hasRole(bytes32 role, address account) external view returns (bool);\n\n    /**\n     * @dev Returns the admin role that controls `role`. See {grantRole} and\n     * {revokeRole}.\n     *\n     * To change a role\'s admin, use {AccessControl-_setRoleAdmin}.\n     */\n    function getRoleAdmin(bytes32 role) external view returns (bytes32);\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function grantRole(bytes32 role, address account) external;\n\n    /**\n     * @dev Revokes `role` from `account`.\n     *\n     * If `account` had been granted `role`, emits a {RoleRevoked} event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function revokeRole(bytes32 role, address account) external;\n\n    /**\n     * @dev Revokes `role` from the calling account.\n     *\n     * Roles are often managed via {grantRole} and {revokeRole}: this function\'s\n     * purpose is to provide a mechanism for accounts to lose their privileges\n     * if they are compromised (such as when a trusted device is misplaced).\n     *\n     * If the calling account had been granted `role`, emits a {RoleRevoked}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must be `account`.\n     */\n    function renounceRole(bytes32 role, address account) external;\n}\n\n\n// File @openzeppelin/contracts/utils/Strings.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/Strings.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev String operations.\n */\nlibrary Strings {\n    bytes16 private constant _HEX_SYMBOLS = "0123456789abcdef";\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\n     */\n    function toString(uint256 value) internal pure returns (string memory) {\n        // Inspired by OraclizeAPI\'s implementation - MIT licence\n        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol\n\n        if (value == 0) {\n            return "0";\n        }\n        uint256 temp = value;\n        uint256 digits;\n        while (temp != 0) {\n            digits++;\n            temp /= 10;\n        }\n        bytes memory buffer = new bytes(digits);\n        while (value != 0) {\n            digits -= 1;\n            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));\n            value /= 10;\n        }\n        return string(buffer);\n    }\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\n     */\n    function toHexString(uint256 value) internal pure returns (string memory) {\n        if (value == 0) {\n            return "0x00";\n        }\n        uint256 temp = value;\n        uint256 length = 0;\n        while (temp != 0) {\n            length++;\n            temp >>= 8;\n        }\n        return toHexString(value, length);\n    }\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\n     */\n    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\n        bytes memory buffer = new bytes(2 * length + 2);\n        buffer[0] = "0";\n        buffer[1] = "x";\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\n            buffer[i] = _HEX_SYMBOLS[value & 0xf];\n            value >>= 4;\n        }\n        require(value == 0, "Strings: hex length insufficient");\n        return string(buffer);\n    }\n}\n\n\n// File @openzeppelin/contracts/utils/introspection/IERC165.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Interface of the ERC165 standard, as defined in the\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\n *\n * Implementers can declare support of contract interfaces, which can then be\n * queried by others ({ERC165Checker}).\n *\n * For an implementation, see {ERC165}.\n */\ninterface IERC165 {\n    /**\n     * @dev Returns true if this contract implements the interface defined by\n     * `interfaceId`. See the corresponding\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\n     * to learn more about how these ids are created.\n     *\n     * This function call must use less than 30 000 gas.\n     */\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\n}\n\n\n// File @openzeppelin/contracts/utils/introspection/ERC165.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Implementation of the {IERC165} interface.\n *\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\n * for the additional interface id that will be supported. For example:\n *\n * ```solidity\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\n * }\n * ```\n *\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\n */\nabstract contract ERC165 is IERC165 {\n    /**\n     * @dev See {IERC165-supportsInterface}.\n     */\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n        return interfaceId == type(IERC165).interfaceId;\n    }\n}\n\n\n// File @openzeppelin/contracts/access/AccessControl.sol@v4.5.0\n\n// OpenZeppelin Contracts (last updated v4.5.0) (access/AccessControl.sol)\n\npragma solidity ^0.8.0;\n\n\n\n\n/**\n * @dev Contract module that allows children to implement role-based access\n * control mechanisms. This is a lightweight version that doesn\'t allow enumerating role\n * members except through off-chain means by accessing the contract event logs. Some\n * applications may benefit from on-chain enumerability, for those cases see\n * {AccessControlEnumerable}.\n *\n * Roles are referred to by their `bytes32` identifier. These should be exposed\n * in the external API and be unique. The best way to achieve this is by\n * using `public constant` hash digests:\n *\n * ```\n * bytes32 public constant MY_ROLE = keccak256("MY_ROLE");\n * ```\n *\n * Roles can be used to represent a set of permissions. To restrict access to a\n * function call, use {hasRole}:\n *\n * ```\n * function foo() public {\n *     require(hasRole(MY_ROLE, msg.sender));\n *     ...\n * }\n * ```\n *\n * Roles can be granted and revoked dynamically via the {grantRole} and\n * {revokeRole} functions. Each role has an associated admin role, and only\n * accounts that have a role\'s admin role can call {grantRole} and {revokeRole}.\n *\n * By default, the admin role for all roles is `DEFAULT_ADMIN_ROLE`, which means\n * that only accounts with this role will be able to grant or revoke other\n * roles. More complex role relationships can be created by using\n * {_setRoleAdmin}.\n *\n * WARNING: The `DEFAULT_ADMIN_ROLE` is also its own admin: it has permission to\n * grant and revoke this role. Extra precautions should be taken to secure\n * accounts that have been granted it.\n */\nabstract contract AccessControl is Context, IAccessControl, ERC165 {\n    struct RoleData {\n        mapping(address => bool) members;\n        bytes32 adminRole;\n    }\n\n    mapping(bytes32 => RoleData) private _roles;\n\n    bytes32 public constant DEFAULT_ADMIN_ROLE = 0x00;\n\n    /**\n     * @dev Modifier that checks that an account has a specific role. Reverts\n     * with a standardized message including the required role.\n     *\n     * The format of the revert reason is given by the following regular expression:\n     *\n     *  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\n     *\n     * _Available since v4.1._\n     */\n    modifier onlyRole(bytes32 role) {\n        _checkRole(role, _msgSender());\n        _;\n    }\n\n    /**\n     * @dev See {IERC165-supportsInterface}.\n     */\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n        return interfaceId == type(IAccessControl).interfaceId || super.supportsInterface(interfaceId);\n    }\n\n    /**\n     * @dev Returns `true` if `account` has been granted `role`.\n     */\n    function hasRole(bytes32 role, address account) public view virtual override returns (bool) {\n        return _roles[role].members[account];\n    }\n\n    /**\n     * @dev Revert with a standard message if `account` is missing `role`.\n     *\n     * The format of the revert reason is given by the following regular expression:\n     *\n     *  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\n     */\n    function _checkRole(bytes32 role, address account) internal view virtual {\n        if (!hasRole(role, account)) {\n            revert(\n                string(\n                    abi.encodePacked(\n                        "AccessControl: account ",\n                        Strings.toHexString(uint160(account), 20),\n                        " is missing role ",\n                        Strings.toHexString(uint256(role), 32)\n                    )\n                )\n            );\n        }\n    }\n\n    /**\n     * @dev Returns the admin role that controls `role`. See {grantRole} and\n     * {revokeRole}.\n     *\n     * To change a role\'s admin, use {_setRoleAdmin}.\n     */\n    function getRoleAdmin(bytes32 role) public view virtual override returns (bytes32) {\n        return _roles[role].adminRole;\n    }\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function grantRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {\n        _grantRole(role, account);\n    }\n\n    /**\n     * @dev Revokes `role` from `account`.\n     *\n     * If `account` had been granted `role`, emits a {RoleRevoked} event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function revokeRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {\n        _revokeRole(role, account);\n    }\n\n    /**\n     * @dev Revokes `role` from the calling account.\n     *\n     * Roles are often managed via {grantRole} and {revokeRole}: this function\'s\n     * purpose is to provide a mechanism for accounts to lose their privileges\n     * if they are compromised (such as when a trusted device is misplaced).\n     *\n     * If the calling account had been revoked `role`, emits a {RoleRevoked}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must be `account`.\n     */\n    function renounceRole(bytes32 role, address account) public virtual override {\n        require(account == _msgSender(), "AccessControl: can only renounce roles for self");\n\n        _revokeRole(role, account);\n    }\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\n     * event. Note that unlike {grantRole}, this function doesn\'t perform any\n     * checks on the calling account.\n     *\n     * [WARNING]\n     * ====\n     * This function should only be called from the constructor when setting\n     * up the initial roles for the system.\n     *\n     * Using this function in any other way is effectively circumventing the admin\n     * system imposed by {AccessControl}.\n     * ====\n     *\n     * NOTE: This function is deprecated in favor of {_grantRole}.\n     */\n    function _setupRole(bytes32 role, address account) internal virtual {\n        _grantRole(role, account);\n    }\n\n    /**\n     * @dev Sets `adminRole` as ``role``\'s admin role.\n     *\n     * Emits a {RoleAdminChanged} event.\n     */\n    function _setRoleAdmin(bytes32 role, bytes32 adminRole) internal virtual {\n        bytes32 previousAdminRole = getRoleAdmin(role);\n        _roles[role].adminRole = adminRole;\n        emit RoleAdminChanged(role, previousAdminRole, adminRole);\n    }\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * Internal function without access restriction.\n     */\n    function _grantRole(bytes32 role, address account) internal virtual {\n        if (!hasRole(role, account)) {\n            _roles[role].members[account] = true;\n            emit RoleGranted(role, account, _msgSender());\n        }\n    }\n\n    /**\n     * @dev Revokes `role` from `account`.\n     *\n     * Internal function without access restriction.\n     */\n    function _revokeRole(bytes32 role, address account) internal virtual {\n        if (hasRole(role, account)) {\n            _roles[role].members[account] = false;\n            emit RoleRevoked(role, account, _msgSender());\n        }\n    }\n}\n\n\n// File contracts/polygon/ChildStartonERC20MintBurnPause.sol\n\npragma solidity ^0.8.0;\n\n\n\ncontract ChildStartonERC20MintBurnPause is ERC20Burnable, Pausable, AccessControl {\n    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");\n    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");\n    bytes32 public constant DEPOSITOR_ROLE = keccak256("DEPOSITOR_ROLE");\n\n    constructor(string memory name, string memory symbol, uint256 initialSupply, address ownerOrMultiSigContract) ERC20(name, symbol) {\n        _setupRole(DEFAULT_ADMIN_ROLE, ownerOrMultiSigContract);\n        _setupRole(PAUSER_ROLE, ownerOrMultiSigContract);\n        _setupRole(MINTER_ROLE, ownerOrMultiSigContract);\n        _mint(ownerOrMultiSigContract, initialSupply);\n    }\n\n    function pause() public {\n        require(hasRole(PAUSER_ROLE, msg.sender));\n        _pause();\n    }\n\n    function unpause() public {\n        require(hasRole(PAUSER_ROLE, msg.sender));\n        _unpause();\n    }\n\n    function mint(address to, uint256 amount) public {\n        require(hasRole(MINTER_ROLE, msg.sender));\n        _mint(to, amount);\n    }\n\n    function _beforeTokenTransfer(address from, address to, uint256 amount)\n        internal\n        whenNotPaused\n        override\n    {\n        super._beforeTokenTransfer(from, to, amount);\n    }\n\n\n    /**\n     * @notice called when token is deposited on root chain\n     * @dev Should be callable only by ChildChainManager\n     * Should handle deposit by minting the required amount for user\n     * Make sure minting is done only by this function\n     * @param user user address for whom deposit is being done\n     * @param depositData abi encoded amount\n     */\n    function deposit(address user, bytes calldata depositData)\n        external\n        whenNotPaused\n    {\n        require(hasRole(DEPOSITOR_ROLE, msg.sender));\n        uint256 amount = abi.decode(depositData, (uint256));\n        _mint(user, amount);\n    }\n\n    /**\n     * @notice called when user wants to withdraw tokens back to root chain\n     * @dev Should burn user\'s tokens. This transaction will be verified when exiting on root chain\n     * @param amount amount of tokens to withdraw\n     */\n    function withdraw(uint256 amount) external whenNotPaused {\n        _burn(_msgSender(), amount);\n    }\n}\n',
      bytecode:
        "0x60806040523480156200001157600080fd5b5060405162001bdf38038062001bdf83398101604081905262000034916200046e565b8351849084906200004d906003906020850190620002fb565b50805162000063906004906020840190620002fb565b50506005805460ff19169055506200007d600082620000eb565b620000a97f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a82620000eb565b620000d57f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a682620000eb565b620000e18183620000fb565b5050505062000567565b620000f78282620001f2565b5050565b6001600160a01b038216620001575760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064015b60405180910390fd5b620001656000838362000296565b806002600082825462000179919062000503565b90915550506001600160a01b03821660009081526020819052604081208054839290620001a890849062000503565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b60008281526006602090815260408083206001600160a01b038516845290915290205460ff16620000f75760008281526006602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620002523390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60055460ff1615620002de5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016200014e565b620002f6838383620002f660201b620005c71760201c565b505050565b82805462000309906200052a565b90600052602060002090601f0160209004810192826200032d576000855562000378565b82601f106200034857805160ff191683800117855562000378565b8280016001018555821562000378579182015b82811115620003785782518255916020019190600101906200035b565b50620003869291506200038a565b5090565b5b808211156200038657600081556001016200038b565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620003c957600080fd5b81516001600160401b0380821115620003e657620003e6620003a1565b604051601f8301601f19908116603f01168101908282118183101715620004115762000411620003a1565b816040528381526020925086838588010111156200042e57600080fd5b600091505b8382101562000452578582018301518183018401529082019062000433565b83821115620004645760008385830101525b9695505050505050565b600080600080608085870312156200048557600080fd5b84516001600160401b03808211156200049d57600080fd5b620004ab88838901620003b7565b95506020870151915080821115620004c257600080fd5b50620004d187828801620003b7565b60408701516060880151919550935090506001600160a01b0381168114620004f857600080fd5b939692955090935050565b600082198211156200052557634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200053f57607f821691505b602082108114156200056157634e487b7160e01b600052602260045260246000fd5b50919050565b61166880620005776000396000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c80635c975abb11610104578063a3b0b5a3116100a2578063d539139311610071578063d5391393146103c9578063d547741f146103f0578063dd62ed3e14610403578063e63ab1e91461043c57600080fd5b8063a3b0b5a314610369578063a457c2d714610390578063a9059cbb146103a3578063cf2c52cb146103b657600080fd5b80638456cb59116100de5780638456cb591461033e57806391d148541461034657806395d89b4114610359578063a217fddf1461036157600080fd5b80635c975abb146102f757806370a082311461030257806379cc67901461032b57600080fd5b80632f2ff15d11610171578063395093511161014b57806339509351146102b65780633f4ba83a146102c957806340c10f19146102d157806342966c68146102e457600080fd5b80632f2ff15d14610281578063313ce5671461029457806336568abe146102a357600080fd5b806318160ddd116101ad57806318160ddd1461022457806323b872dd14610236578063248a9ca3146102495780632e1a7d4d1461026c57600080fd5b806301ffc9a7146101d457806306fdde03146101fc578063095ea7b314610211575b600080fd5b6101e76101e2366004611299565b610463565b60405190151581526020015b60405180910390f35b61020461049a565b6040516101f391906112ef565b6101e761021f36600461133e565b61052c565b6002545b6040519081526020016101f3565b6101e7610244366004611368565b610544565b6102286102573660046113a4565b60009081526006602052604090206001015490565b61027f61027a3660046113a4565b610568565b005b61027f61028f3660046113bd565b6105a1565b604051601281526020016101f3565b61027f6102b13660046113bd565b6105cc565b6101e76102c436600461133e565b61064a565b61027f610689565b61027f6102df36600461133e565b6106c6565b61027f6102f23660046113a4565b610594565b60055460ff166101e7565b6102286103103660046113e9565b6001600160a01b031660009081526020819052604090205490565b61027f61033936600461133e565b610703565b61027f610718565b6101e76103543660046113bd565b610753565b61020461077e565b610228600081565b6102287f8f4f2da22e8ac8f11e15f9fc141cddbb5deea8800186560abb6e68c5496619a981565b6101e761039e36600461133e565b61078d565b6101e76103b136600461133e565b61081f565b61027f6103c4366004611404565b61082d565b6102287f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61027f6103fe3660046113bd565b6108a3565b610228610411366004611487565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6102287f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b60006001600160e01b03198216637965db0b60e01b148061049457506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600380546104a9906114b1565b80601f01602080910402602001604051908101604052809291908181526020018280546104d5906114b1565b80156105225780601f106104f757610100808354040283529160200191610522565b820191906000526020600020905b81548152906001019060200180831161050557829003601f168201915b5050505050905090565b60003361053a8185856108c9565b5060019392505050565b6000336105528582856109ed565b61055d858585610a79565b506001949350505050565b60055460ff16156105945760405162461bcd60e51b815260040161058b906114ec565b60405180910390fd5b61059e3382610c52565b50565b6000828152600660205260409020600101546105bd8133610dac565b6105c78383610e10565b505050565b6001600160a01b038116331461063c5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b606482015260840161058b565b6106468282610e96565b5050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061053a908290869061068490879061152c565b6108c9565b6106b37f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610753565b6106bc57600080fd5b6106c4610efd565b565b6106f07f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610753565b6106f957600080fd5b6106468282610f90565b61070e8233836109ed565b6106468282610c52565b6107427f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610753565b61074b57600080fd5b6106c461107b565b60009182526006602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600480546104a9906114b1565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156108125760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161058b565b61055d82868684036108c9565b60003361053a818585610a79565b60055460ff16156108505760405162461bcd60e51b815260040161058b906114ec565b61087a7f8f4f2da22e8ac8f11e15f9fc141cddbb5deea8800186560abb6e68c5496619a933610753565b61088357600080fd5b6000610891828401846113a4565b905061089d8482610f90565b50505050565b6000828152600660205260409020600101546108bf8133610dac565b6105c78383610e96565b6001600160a01b03831661092b5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161058b565b6001600160a01b03821661098c5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161058b565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461089d5781811015610a6c5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161058b565b61089d84848484036108c9565b6001600160a01b038316610add5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161058b565b6001600160a01b038216610b3f5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161058b565b610b4a8383836110d3565b6001600160a01b03831660009081526020819052604090205481811015610bc25760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161058b565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610bf990849061152c565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c4591815260200190565b60405180910390a361089d565b6001600160a01b038216610cb25760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161058b565b610cbe826000836110d3565b6001600160a01b03821660009081526020819052604090205481811015610d325760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161058b565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610d61908490611544565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b610db68282610753565b61064657610dce816001600160a01b031660146110f6565b610dd98360206110f6565b604051602001610dea92919061155b565b60408051601f198184030181529082905262461bcd60e51b825261058b916004016112ef565b610e1a8282610753565b6106465760008281526006602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610e523390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610ea08282610753565b156106465760008281526006602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60055460ff16610f465760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015260640161058b565b6005805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b038216610fe65760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161058b565b610ff2600083836110d3565b8060026000828254611004919061152c565b90915550506001600160a01b0382166000908152602081905260408120805483929061103190849061152c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b60055460ff161561109e5760405162461bcd60e51b815260040161058b906114ec565b6005805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610f733390565b60055460ff16156105c75760405162461bcd60e51b815260040161058b906114ec565b606060006111058360026115d0565b61111090600261152c565b67ffffffffffffffff811115611128576111286115ef565b6040519080825280601f01601f191660200182016040528015611152576020820181803683370190505b509050600360fc1b8160008151811061116d5761116d611605565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061119c5761119c611605565b60200101906001600160f81b031916908160001a90535060006111c08460026115d0565b6111cb90600161152c565b90505b6001811115611243576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106111ff576111ff611605565b1a60f81b82828151811061121557611215611605565b60200101906001600160f81b031916908160001a90535060049490941c9361123c8161161b565b90506111ce565b5083156112925760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161058b565b9392505050565b6000602082840312156112ab57600080fd5b81356001600160e01b03198116811461129257600080fd5b60005b838110156112de5781810151838201526020016112c6565b8381111561089d5750506000910152565b602081526000825180602084015261130e8160408501602087016112c3565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461133957600080fd5b919050565b6000806040838503121561135157600080fd5b61135a83611322565b946020939093013593505050565b60008060006060848603121561137d57600080fd5b61138684611322565b925061139460208501611322565b9150604084013590509250925092565b6000602082840312156113b657600080fd5b5035919050565b600080604083850312156113d057600080fd5b823591506113e060208401611322565b90509250929050565b6000602082840312156113fb57600080fd5b61129282611322565b60008060006040848603121561141957600080fd5b61142284611322565b9250602084013567ffffffffffffffff8082111561143f57600080fd5b818601915086601f83011261145357600080fd5b81358181111561146257600080fd5b87602082850101111561147457600080fd5b6020830194508093505050509250925092565b6000806040838503121561149a57600080fd5b6114a383611322565b91506113e060208401611322565b600181811c908216806114c557607f821691505b602082108114156114e657634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6000821982111561153f5761153f611516565b500190565b60008282101561155657611556611516565b500390565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516115938160178501602088016112c3565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516115c48160288401602088016112c3565b01602801949350505050565b60008160001904831182151516156115ea576115ea611516565b500290565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b60008161162a5761162a611516565b50600019019056fea2646970667358221220c6635d8cdc9c66dd48e1dc0ee4ba489d154126eab71a92aa1d1d662d60ddb83264736f6c63430008090033",
      contractName: "ChildStartonERC20MintBurnPause",
      compilerVersion: "v0.8.9+commit.e5eed63a",
      optimizationUsed: true,
    },
    isActivated: true,
    isAudited: false,
    order: 93,
    tags: [SmartContractTemplateCategories.DEPRECATED],
    category: SmartContractTemplateCategories.DEPRECATED,
  },
  {
    id: "sct_935a8097313a4240b434fd4bf6f6ee62",
    name: "Child ERC20 Fungible token in Fixed Supply",
    description:
      "<p>The ERC20 is a smart contract standard made for fungible tokens (i.e: interchangeable tokens like coins). The fixed supply version of this standard guarantees no token will ever be created after the initial emission. Therefore some flexibility is sacrificed for the sake of more trust towards the token.</p> <p>Parameters :</p> <ul> <li><strong>Name</strong> : This is the name of your smart contract which will be reflected on-chain.</li> <li><strong>Symbol</strong> : This is the symbol associated to the NFT collection</li> <li><strong>Initial Supply</strong> : Initial amount of token emitted at the smart contract creation. You should add 18 trailing zeros to compensate the number of digits reserved to decimals.</li> </ul>",
    shortDescription:
      "The smart contract template for bridging fixed fungible tokens between Ethereum and Polygon.For example, at large scale, to reduce gas fees and increase speed, tokens can be transferred from one blockchain network to another. ",
    blockchains: ["polygon"],
    abi: [
      {
        type: "constructor",
        inputs: [
          {
            name: "name",
            type: "string",
            internalType: "string",
          },
          {
            name: "symbol",
            type: "string",
            internalType: "string",
          },
          {
            name: "initialSupply",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "ownerOrMultiSigContract",
            type: "address",
            internalType: "address",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "Approval",
        type: "event",
        inputs: [
          {
            name: "owner",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "spender",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "value",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        name: "Paused",
        type: "event",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: false,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "RoleAdminChanged",
        type: "event",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "previousAdminRole",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "newAdminRole",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
        ],
        anonymous: false,
      },
      {
        name: "RoleGranted",
        type: "event",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "sender",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "RoleRevoked",
        type: "event",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "sender",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "Transfer",
        type: "event",
        inputs: [
          {
            name: "from",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "value",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        name: "Unpaused",
        type: "event",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: false,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "DEFAULT_ADMIN_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "DEPOSITOR_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "PAUSER_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "allowance",
        type: "function",
        inputs: [
          {
            name: "owner",
            type: "address",
            internalType: "address",
          },
          {
            name: "spender",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "approve",
        type: "function",
        inputs: [
          {
            name: "spender",
            type: "address",
            internalType: "address",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "balanceOf",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "burn",
        type: "function",
        inputs: [
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "burnFrom",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "decimals",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "uint8",
            internalType: "uint8",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "decreaseAllowance",
        type: "function",
        inputs: [
          {
            name: "spender",
            type: "address",
            internalType: "address",
          },
          {
            name: "subtractedValue",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "deposit",
        type: "function",
        inputs: [
          {
            name: "user",
            type: "address",
            internalType: "address",
          },
          {
            name: "depositData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "getRoleAdmin",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "grantRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "hasRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "increaseAllowance",
        type: "function",
        inputs: [
          {
            name: "spender",
            type: "address",
            internalType: "address",
          },
          {
            name: "addedValue",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "name",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "string",
            internalType: "string",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "pause",
        type: "function",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "paused",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "renounceRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "revokeRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "supportsInterface",
        type: "function",
        inputs: [
          {
            name: "interfaceId",
            type: "bytes4",
            internalType: "bytes4",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "symbol",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "string",
            internalType: "string",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "totalSupply",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "transfer",
        type: "function",
        inputs: [
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "transferFrom",
        type: "function",
        inputs: [
          {
            name: "from",
            type: "address",
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "unpause",
        type: "function",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "withdraw",
        type: "function",
        inputs: [
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
    ],
    compilationDetails: {
      runs: 200,
      source:
        '// Sources flattened with hardhat v2.9.1 https://hardhat.org\n\n// File @openzeppelin/contracts/token/ERC20/IERC20.sol@v4.5.0\n\n// SPDX-License-Identifier: MIT\n// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC20/IERC20.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Interface of the ERC20 standard as defined in the EIP.\n */\ninterface IERC20 {\n    /**\n     * @dev Returns the amount of tokens in existence.\n     */\n    function totalSupply() external view returns (uint256);\n\n    /**\n     * @dev Returns the amount of tokens owned by `account`.\n     */\n    function balanceOf(address account) external view returns (uint256);\n\n    /**\n     * @dev Moves `amount` tokens from the caller\'s account to `to`.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * Emits a {Transfer} event.\n     */\n    function transfer(address to, uint256 amount) external returns (bool);\n\n    /**\n     * @dev Returns the remaining number of tokens that `spender` will be\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\n     * zero by default.\n     *\n     * This value changes when {approve} or {transferFrom} are called.\n     */\n    function allowance(address owner, address spender) external view returns (uint256);\n\n    /**\n     * @dev Sets `amount` as the allowance of `spender` over the caller\'s tokens.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\n     * that someone may use both the old and the new allowance by unfortunate\n     * transaction ordering. One possible solution to mitigate this race\n     * condition is to first reduce the spender\'s allowance to 0 and set the\n     * desired value afterwards:\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n     *\n     * Emits an {Approval} event.\n     */\n    function approve(address spender, uint256 amount) external returns (bool);\n\n    /**\n     * @dev Moves `amount` tokens from `from` to `to` using the\n     * allowance mechanism. `amount` is then deducted from the caller\'s\n     * allowance.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * Emits a {Transfer} event.\n     */\n    function transferFrom(\n        address from,\n        address to,\n        uint256 amount\n    ) external returns (bool);\n\n    /**\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\n     * another (`to`).\n     *\n     * Note that `value` may be zero.\n     */\n    event Transfer(address indexed from, address indexed to, uint256 value);\n\n    /**\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\n     * a call to {approve}. `value` is the new allowance.\n     */\n    event Approval(address indexed owner, address indexed spender, uint256 value);\n}\n\n\n// File @openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (token/ERC20/extensions/IERC20Metadata.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Interface for the optional metadata functions from the ERC20 standard.\n *\n * _Available since v4.1._\n */\ninterface IERC20Metadata is IERC20 {\n    /**\n     * @dev Returns the name of the token.\n     */\n    function name() external view returns (string memory);\n\n    /**\n     * @dev Returns the symbol of the token.\n     */\n    function symbol() external view returns (string memory);\n\n    /**\n     * @dev Returns the decimals places of the token.\n     */\n    function decimals() external view returns (uint8);\n}\n\n\n// File @openzeppelin/contracts/utils/Context.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Provides information about the current execution context, including the\n * sender of the transaction and its data. While these are generally available\n * via msg.sender and msg.data, they should not be accessed in such a direct\n * manner, since when dealing with meta-transactions the account sending and\n * paying for execution may not be the actual sender (as far as an application\n * is concerned).\n *\n * This contract is only required for intermediate, library-like contracts.\n */\nabstract contract Context {\n    function _msgSender() internal view virtual returns (address) {\n        return msg.sender;\n    }\n\n    function _msgData() internal view virtual returns (bytes calldata) {\n        return msg.data;\n    }\n}\n\n\n// File @openzeppelin/contracts/token/ERC20/ERC20.sol@v4.5.0\n\n// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC20/ERC20.sol)\n\npragma solidity ^0.8.0;\n\n\n\n/**\n * @dev Implementation of the {IERC20} interface.\n *\n * This implementation is agnostic to the way tokens are created. This means\n * that a supply mechanism has to be added in a derived contract using {_mint}.\n * For a generic mechanism see {ERC20PresetMinterPauser}.\n *\n * TIP: For a detailed writeup see our guide\n * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How\n * to implement supply mechanisms].\n *\n * We have followed general OpenZeppelin Contracts guidelines: functions revert\n * instead returning `false` on failure. This behavior is nonetheless\n * conventional and does not conflict with the expectations of ERC20\n * applications.\n *\n * Additionally, an {Approval} event is emitted on calls to {transferFrom}.\n * This allows applications to reconstruct the allowance for all accounts just\n * by listening to said events. Other implementations of the EIP may not emit\n * these events, as it isn\'t required by the specification.\n *\n * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}\n * functions have been added to mitigate the well-known issues around setting\n * allowances. See {IERC20-approve}.\n */\ncontract ERC20 is Context, IERC20, IERC20Metadata {\n    mapping(address => uint256) private _balances;\n\n    mapping(address => mapping(address => uint256)) private _allowances;\n\n    uint256 private _totalSupply;\n\n    string private _name;\n    string private _symbol;\n\n    /**\n     * @dev Sets the values for {name} and {symbol}.\n     *\n     * The default value of {decimals} is 18. To select a different value for\n     * {decimals} you should overload it.\n     *\n     * All two of these values are immutable: they can only be set once during\n     * construction.\n     */\n    constructor(string memory name_, string memory symbol_) {\n        _name = name_;\n        _symbol = symbol_;\n    }\n\n    /**\n     * @dev Returns the name of the token.\n     */\n    function name() public view virtual override returns (string memory) {\n        return _name;\n    }\n\n    /**\n     * @dev Returns the symbol of the token, usually a shorter version of the\n     * name.\n     */\n    function symbol() public view virtual override returns (string memory) {\n        return _symbol;\n    }\n\n    /**\n     * @dev Returns the number of decimals used to get its user representation.\n     * For example, if `decimals` equals `2`, a balance of `505` tokens should\n     * be displayed to a user as `5.05` (`505 / 10 ** 2`).\n     *\n     * Tokens usually opt for a value of 18, imitating the relationship between\n     * Ether and Wei. This is the value {ERC20} uses, unless this function is\n     * overridden;\n     *\n     * NOTE: This information is only used for _display_ purposes: it in\n     * no way affects any of the arithmetic of the contract, including\n     * {IERC20-balanceOf} and {IERC20-transfer}.\n     */\n    function decimals() public view virtual override returns (uint8) {\n        return 18;\n    }\n\n    /**\n     * @dev See {IERC20-totalSupply}.\n     */\n    function totalSupply() public view virtual override returns (uint256) {\n        return _totalSupply;\n    }\n\n    /**\n     * @dev See {IERC20-balanceOf}.\n     */\n    function balanceOf(address account) public view virtual override returns (uint256) {\n        return _balances[account];\n    }\n\n    /**\n     * @dev See {IERC20-transfer}.\n     *\n     * Requirements:\n     *\n     * - `to` cannot be the zero address.\n     * - the caller must have a balance of at least `amount`.\n     */\n    function transfer(address to, uint256 amount) public virtual override returns (bool) {\n        address owner = _msgSender();\n        _transfer(owner, to, amount);\n        return true;\n    }\n\n    /**\n     * @dev See {IERC20-allowance}.\n     */\n    function allowance(address owner, address spender) public view virtual override returns (uint256) {\n        return _allowances[owner][spender];\n    }\n\n    /**\n     * @dev See {IERC20-approve}.\n     *\n     * NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on\n     * `transferFrom`. This is semantically equivalent to an infinite approval.\n     *\n     * Requirements:\n     *\n     * - `spender` cannot be the zero address.\n     */\n    function approve(address spender, uint256 amount) public virtual override returns (bool) {\n        address owner = _msgSender();\n        _approve(owner, spender, amount);\n        return true;\n    }\n\n    /**\n     * @dev See {IERC20-transferFrom}.\n     *\n     * Emits an {Approval} event indicating the updated allowance. This is not\n     * required by the EIP. See the note at the beginning of {ERC20}.\n     *\n     * NOTE: Does not update the allowance if the current allowance\n     * is the maximum `uint256`.\n     *\n     * Requirements:\n     *\n     * - `from` and `to` cannot be the zero address.\n     * - `from` must have a balance of at least `amount`.\n     * - the caller must have allowance for ``from``\'s tokens of at least\n     * `amount`.\n     */\n    function transferFrom(\n        address from,\n        address to,\n        uint256 amount\n    ) public virtual override returns (bool) {\n        address spender = _msgSender();\n        _spendAllowance(from, spender, amount);\n        _transfer(from, to, amount);\n        return true;\n    }\n\n    /**\n     * @dev Atomically increases the allowance granted to `spender` by the caller.\n     *\n     * This is an alternative to {approve} that can be used as a mitigation for\n     * problems described in {IERC20-approve}.\n     *\n     * Emits an {Approval} event indicating the updated allowance.\n     *\n     * Requirements:\n     *\n     * - `spender` cannot be the zero address.\n     */\n    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {\n        address owner = _msgSender();\n        _approve(owner, spender, _allowances[owner][spender] + addedValue);\n        return true;\n    }\n\n    /**\n     * @dev Atomically decreases the allowance granted to `spender` by the caller.\n     *\n     * This is an alternative to {approve} that can be used as a mitigation for\n     * problems described in {IERC20-approve}.\n     *\n     * Emits an {Approval} event indicating the updated allowance.\n     *\n     * Requirements:\n     *\n     * - `spender` cannot be the zero address.\n     * - `spender` must have allowance for the caller of at least\n     * `subtractedValue`.\n     */\n    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {\n        address owner = _msgSender();\n        uint256 currentAllowance = _allowances[owner][spender];\n        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");\n        unchecked {\n            _approve(owner, spender, currentAllowance - subtractedValue);\n        }\n\n        return true;\n    }\n\n    /**\n     * @dev Moves `amount` of tokens from `sender` to `recipient`.\n     *\n     * This internal function is equivalent to {transfer}, and can be used to\n     * e.g. implement automatic token fees, slashing mechanisms, etc.\n     *\n     * Emits a {Transfer} event.\n     *\n     * Requirements:\n     *\n     * - `from` cannot be the zero address.\n     * - `to` cannot be the zero address.\n     * - `from` must have a balance of at least `amount`.\n     */\n    function _transfer(\n        address from,\n        address to,\n        uint256 amount\n    ) internal virtual {\n        require(from != address(0), "ERC20: transfer from the zero address");\n        require(to != address(0), "ERC20: transfer to the zero address");\n\n        _beforeTokenTransfer(from, to, amount);\n\n        uint256 fromBalance = _balances[from];\n        require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");\n        unchecked {\n            _balances[from] = fromBalance - amount;\n        }\n        _balances[to] += amount;\n\n        emit Transfer(from, to, amount);\n\n        _afterTokenTransfer(from, to, amount);\n    }\n\n    /** @dev Creates `amount` tokens and assigns them to `account`, increasing\n     * the total supply.\n     *\n     * Emits a {Transfer} event with `from` set to the zero address.\n     *\n     * Requirements:\n     *\n     * - `account` cannot be the zero address.\n     */\n    function _mint(address account, uint256 amount) internal virtual {\n        require(account != address(0), "ERC20: mint to the zero address");\n\n        _beforeTokenTransfer(address(0), account, amount);\n\n        _totalSupply += amount;\n        _balances[account] += amount;\n        emit Transfer(address(0), account, amount);\n\n        _afterTokenTransfer(address(0), account, amount);\n    }\n\n    /**\n     * @dev Destroys `amount` tokens from `account`, reducing the\n     * total supply.\n     *\n     * Emits a {Transfer} event with `to` set to the zero address.\n     *\n     * Requirements:\n     *\n     * - `account` cannot be the zero address.\n     * - `account` must have at least `amount` tokens.\n     */\n    function _burn(address account, uint256 amount) internal virtual {\n        require(account != address(0), "ERC20: burn from the zero address");\n\n        _beforeTokenTransfer(account, address(0), amount);\n\n        uint256 accountBalance = _balances[account];\n        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");\n        unchecked {\n            _balances[account] = accountBalance - amount;\n        }\n        _totalSupply -= amount;\n\n        emit Transfer(account, address(0), amount);\n\n        _afterTokenTransfer(account, address(0), amount);\n    }\n\n    /**\n     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.\n     *\n     * This internal function is equivalent to `approve`, and can be used to\n     * e.g. set automatic allowances for certain subsystems, etc.\n     *\n     * Emits an {Approval} event.\n     *\n     * Requirements:\n     *\n     * - `owner` cannot be the zero address.\n     * - `spender` cannot be the zero address.\n     */\n    function _approve(\n        address owner,\n        address spender,\n        uint256 amount\n    ) internal virtual {\n        require(owner != address(0), "ERC20: approve from the zero address");\n        require(spender != address(0), "ERC20: approve to the zero address");\n\n        _allowances[owner][spender] = amount;\n        emit Approval(owner, spender, amount);\n    }\n\n    /**\n     * @dev Spend `amount` form the allowance of `owner` toward `spender`.\n     *\n     * Does not update the allowance amount in case of infinite allowance.\n     * Revert if not enough allowance is available.\n     *\n     * Might emit an {Approval} event.\n     */\n    function _spendAllowance(\n        address owner,\n        address spender,\n        uint256 amount\n    ) internal virtual {\n        uint256 currentAllowance = allowance(owner, spender);\n        if (currentAllowance != type(uint256).max) {\n            require(currentAllowance >= amount, "ERC20: insufficient allowance");\n            unchecked {\n                _approve(owner, spender, currentAllowance - amount);\n            }\n        }\n    }\n\n    /**\n     * @dev Hook that is called before any transfer of tokens. This includes\n     * minting and burning.\n     *\n     * Calling conditions:\n     *\n     * - when `from` and `to` are both non-zero, `amount` of ``from``\'s tokens\n     * will be transferred to `to`.\n     * - when `from` is zero, `amount` tokens will be minted for `to`.\n     * - when `to` is zero, `amount` of ``from``\'s tokens will be burned.\n     * - `from` and `to` are never both zero.\n     *\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\n     */\n    function _beforeTokenTransfer(\n        address from,\n        address to,\n        uint256 amount\n    ) internal virtual {}\n\n    /**\n     * @dev Hook that is called after any transfer of tokens. This includes\n     * minting and burning.\n     *\n     * Calling conditions:\n     *\n     * - when `from` and `to` are both non-zero, `amount` of ``from``\'s tokens\n     * has been transferred to `to`.\n     * - when `from` is zero, `amount` tokens have been minted for `to`.\n     * - when `to` is zero, `amount` of ``from``\'s tokens have been burned.\n     * - `from` and `to` are never both zero.\n     *\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\n     */\n    function _afterTokenTransfer(\n        address from,\n        address to,\n        uint256 amount\n    ) internal virtual {}\n}\n\n\n// File @openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol@v4.5.0\n\n// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC20/extensions/ERC20Burnable.sol)\n\npragma solidity ^0.8.0;\n\n\n/**\n * @dev Extension of {ERC20} that allows token holders to destroy both their own\n * tokens and those that they have an allowance for, in a way that can be\n * recognized off-chain (via event analysis).\n */\nabstract contract ERC20Burnable is Context, ERC20 {\n    /**\n     * @dev Destroys `amount` tokens from the caller.\n     *\n     * See {ERC20-_burn}.\n     */\n    function burn(uint256 amount) public virtual {\n        _burn(_msgSender(), amount);\n    }\n\n    /**\n     * @dev Destroys `amount` tokens from `account`, deducting from the caller\'s\n     * allowance.\n     *\n     * See {ERC20-_burn} and {ERC20-allowance}.\n     *\n     * Requirements:\n     *\n     * - the caller must have allowance for ``accounts``\'s tokens of at least\n     * `amount`.\n     */\n    function burnFrom(address account, uint256 amount) public virtual {\n        _spendAllowance(account, _msgSender(), amount);\n        _burn(account, amount);\n    }\n}\n\n\n// File @openzeppelin/contracts/security/Pausable.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (security/Pausable.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Contract module which allows children to implement an emergency stop\n * mechanism that can be triggered by an authorized account.\n *\n * This module is used through inheritance. It will make available the\n * modifiers `whenNotPaused` and `whenPaused`, which can be applied to\n * the functions of your contract. Note that they will not be pausable by\n * simply including this module, only once the modifiers are put in place.\n */\nabstract contract Pausable is Context {\n    /**\n     * @dev Emitted when the pause is triggered by `account`.\n     */\n    event Paused(address account);\n\n    /**\n     * @dev Emitted when the pause is lifted by `account`.\n     */\n    event Unpaused(address account);\n\n    bool private _paused;\n\n    /**\n     * @dev Initializes the contract in unpaused state.\n     */\n    constructor() {\n        _paused = false;\n    }\n\n    /**\n     * @dev Returns true if the contract is paused, and false otherwise.\n     */\n    function paused() public view virtual returns (bool) {\n        return _paused;\n    }\n\n    /**\n     * @dev Modifier to make a function callable only when the contract is not paused.\n     *\n     * Requirements:\n     *\n     * - The contract must not be paused.\n     */\n    modifier whenNotPaused() {\n        require(!paused(), "Pausable: paused");\n        _;\n    }\n\n    /**\n     * @dev Modifier to make a function callable only when the contract is paused.\n     *\n     * Requirements:\n     *\n     * - The contract must be paused.\n     */\n    modifier whenPaused() {\n        require(paused(), "Pausable: not paused");\n        _;\n    }\n\n    /**\n     * @dev Triggers stopped state.\n     *\n     * Requirements:\n     *\n     * - The contract must not be paused.\n     */\n    function _pause() internal virtual whenNotPaused {\n        _paused = true;\n        emit Paused(_msgSender());\n    }\n\n    /**\n     * @dev Returns to normal state.\n     *\n     * Requirements:\n     *\n     * - The contract must be paused.\n     */\n    function _unpause() internal virtual whenPaused {\n        _paused = false;\n        emit Unpaused(_msgSender());\n    }\n}\n\n\n// File @openzeppelin/contracts/access/IAccessControl.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (access/IAccessControl.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev External interface of AccessControl declared to support ERC165 detection.\n */\ninterface IAccessControl {\n    /**\n     * @dev Emitted when `newAdminRole` is set as ``role``\'s admin role, replacing `previousAdminRole`\n     *\n     * `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite\n     * {RoleAdminChanged} not being emitted signaling this.\n     *\n     * _Available since v3.1._\n     */\n    event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole);\n\n    /**\n     * @dev Emitted when `account` is granted `role`.\n     *\n     * `sender` is the account that originated the contract call, an admin role\n     * bearer except when using {AccessControl-_setupRole}.\n     */\n    event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender);\n\n    /**\n     * @dev Emitted when `account` is revoked `role`.\n     *\n     * `sender` is the account that originated the contract call:\n     *   - if using `revokeRole`, it is the admin role bearer\n     *   - if using `renounceRole`, it is the role bearer (i.e. `account`)\n     */\n    event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender);\n\n    /**\n     * @dev Returns `true` if `account` has been granted `role`.\n     */\n    function hasRole(bytes32 role, address account) external view returns (bool);\n\n    /**\n     * @dev Returns the admin role that controls `role`. See {grantRole} and\n     * {revokeRole}.\n     *\n     * To change a role\'s admin, use {AccessControl-_setRoleAdmin}.\n     */\n    function getRoleAdmin(bytes32 role) external view returns (bytes32);\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function grantRole(bytes32 role, address account) external;\n\n    /**\n     * @dev Revokes `role` from `account`.\n     *\n     * If `account` had been granted `role`, emits a {RoleRevoked} event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function revokeRole(bytes32 role, address account) external;\n\n    /**\n     * @dev Revokes `role` from the calling account.\n     *\n     * Roles are often managed via {grantRole} and {revokeRole}: this function\'s\n     * purpose is to provide a mechanism for accounts to lose their privileges\n     * if they are compromised (such as when a trusted device is misplaced).\n     *\n     * If the calling account had been granted `role`, emits a {RoleRevoked}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must be `account`.\n     */\n    function renounceRole(bytes32 role, address account) external;\n}\n\n\n// File @openzeppelin/contracts/utils/Strings.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/Strings.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev String operations.\n */\nlibrary Strings {\n    bytes16 private constant _HEX_SYMBOLS = "0123456789abcdef";\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\n     */\n    function toString(uint256 value) internal pure returns (string memory) {\n        // Inspired by OraclizeAPI\'s implementation - MIT licence\n        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol\n\n        if (value == 0) {\n            return "0";\n        }\n        uint256 temp = value;\n        uint256 digits;\n        while (temp != 0) {\n            digits++;\n            temp /= 10;\n        }\n        bytes memory buffer = new bytes(digits);\n        while (value != 0) {\n            digits -= 1;\n            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));\n            value /= 10;\n        }\n        return string(buffer);\n    }\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\n     */\n    function toHexString(uint256 value) internal pure returns (string memory) {\n        if (value == 0) {\n            return "0x00";\n        }\n        uint256 temp = value;\n        uint256 length = 0;\n        while (temp != 0) {\n            length++;\n            temp >>= 8;\n        }\n        return toHexString(value, length);\n    }\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\n     */\n    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\n        bytes memory buffer = new bytes(2 * length + 2);\n        buffer[0] = "0";\n        buffer[1] = "x";\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\n            buffer[i] = _HEX_SYMBOLS[value & 0xf];\n            value >>= 4;\n        }\n        require(value == 0, "Strings: hex length insufficient");\n        return string(buffer);\n    }\n}\n\n\n// File @openzeppelin/contracts/utils/introspection/IERC165.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Interface of the ERC165 standard, as defined in the\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\n *\n * Implementers can declare support of contract interfaces, which can then be\n * queried by others ({ERC165Checker}).\n *\n * For an implementation, see {ERC165}.\n */\ninterface IERC165 {\n    /**\n     * @dev Returns true if this contract implements the interface defined by\n     * `interfaceId`. See the corresponding\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\n     * to learn more about how these ids are created.\n     *\n     * This function call must use less than 30 000 gas.\n     */\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\n}\n\n\n// File @openzeppelin/contracts/utils/introspection/ERC165.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Implementation of the {IERC165} interface.\n *\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\n * for the additional interface id that will be supported. For example:\n *\n * ```solidity\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\n * }\n * ```\n *\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\n */\nabstract contract ERC165 is IERC165 {\n    /**\n     * @dev See {IERC165-supportsInterface}.\n     */\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n        return interfaceId == type(IERC165).interfaceId;\n    }\n}\n\n\n// File @openzeppelin/contracts/access/AccessControl.sol@v4.5.0\n\n// OpenZeppelin Contracts (last updated v4.5.0) (access/AccessControl.sol)\n\npragma solidity ^0.8.0;\n\n\n\n\n/**\n * @dev Contract module that allows children to implement role-based access\n * control mechanisms. This is a lightweight version that doesn\'t allow enumerating role\n * members except through off-chain means by accessing the contract event logs. Some\n * applications may benefit from on-chain enumerability, for those cases see\n * {AccessControlEnumerable}.\n *\n * Roles are referred to by their `bytes32` identifier. These should be exposed\n * in the external API and be unique. The best way to achieve this is by\n * using `public constant` hash digests:\n *\n * ```\n * bytes32 public constant MY_ROLE = keccak256("MY_ROLE");\n * ```\n *\n * Roles can be used to represent a set of permissions. To restrict access to a\n * function call, use {hasRole}:\n *\n * ```\n * function foo() public {\n *     require(hasRole(MY_ROLE, msg.sender));\n *     ...\n * }\n * ```\n *\n * Roles can be granted and revoked dynamically via the {grantRole} and\n * {revokeRole} functions. Each role has an associated admin role, and only\n * accounts that have a role\'s admin role can call {grantRole} and {revokeRole}.\n *\n * By default, the admin role for all roles is `DEFAULT_ADMIN_ROLE`, which means\n * that only accounts with this role will be able to grant or revoke other\n * roles. More complex role relationships can be created by using\n * {_setRoleAdmin}.\n *\n * WARNING: The `DEFAULT_ADMIN_ROLE` is also its own admin: it has permission to\n * grant and revoke this role. Extra precautions should be taken to secure\n * accounts that have been granted it.\n */\nabstract contract AccessControl is Context, IAccessControl, ERC165 {\n    struct RoleData {\n        mapping(address => bool) members;\n        bytes32 adminRole;\n    }\n\n    mapping(bytes32 => RoleData) private _roles;\n\n    bytes32 public constant DEFAULT_ADMIN_ROLE = 0x00;\n\n    /**\n     * @dev Modifier that checks that an account has a specific role. Reverts\n     * with a standardized message including the required role.\n     *\n     * The format of the revert reason is given by the following regular expression:\n     *\n     *  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\n     *\n     * _Available since v4.1._\n     */\n    modifier onlyRole(bytes32 role) {\n        _checkRole(role, _msgSender());\n        _;\n    }\n\n    /**\n     * @dev See {IERC165-supportsInterface}.\n     */\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n        return interfaceId == type(IAccessControl).interfaceId || super.supportsInterface(interfaceId);\n    }\n\n    /**\n     * @dev Returns `true` if `account` has been granted `role`.\n     */\n    function hasRole(bytes32 role, address account) public view virtual override returns (bool) {\n        return _roles[role].members[account];\n    }\n\n    /**\n     * @dev Revert with a standard message if `account` is missing `role`.\n     *\n     * The format of the revert reason is given by the following regular expression:\n     *\n     *  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\n     */\n    function _checkRole(bytes32 role, address account) internal view virtual {\n        if (!hasRole(role, account)) {\n            revert(\n                string(\n                    abi.encodePacked(\n                        "AccessControl: account ",\n                        Strings.toHexString(uint160(account), 20),\n                        " is missing role ",\n                        Strings.toHexString(uint256(role), 32)\n                    )\n                )\n            );\n        }\n    }\n\n    /**\n     * @dev Returns the admin role that controls `role`. See {grantRole} and\n     * {revokeRole}.\n     *\n     * To change a role\'s admin, use {_setRoleAdmin}.\n     */\n    function getRoleAdmin(bytes32 role) public view virtual override returns (bytes32) {\n        return _roles[role].adminRole;\n    }\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function grantRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {\n        _grantRole(role, account);\n    }\n\n    /**\n     * @dev Revokes `role` from `account`.\n     *\n     * If `account` had been granted `role`, emits a {RoleRevoked} event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function revokeRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {\n        _revokeRole(role, account);\n    }\n\n    /**\n     * @dev Revokes `role` from the calling account.\n     *\n     * Roles are often managed via {grantRole} and {revokeRole}: this function\'s\n     * purpose is to provide a mechanism for accounts to lose their privileges\n     * if they are compromised (such as when a trusted device is misplaced).\n     *\n     * If the calling account had been revoked `role`, emits a {RoleRevoked}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must be `account`.\n     */\n    function renounceRole(bytes32 role, address account) public virtual override {\n        require(account == _msgSender(), "AccessControl: can only renounce roles for self");\n\n        _revokeRole(role, account);\n    }\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\n     * event. Note that unlike {grantRole}, this function doesn\'t perform any\n     * checks on the calling account.\n     *\n     * [WARNING]\n     * ====\n     * This function should only be called from the constructor when setting\n     * up the initial roles for the system.\n     *\n     * Using this function in any other way is effectively circumventing the admin\n     * system imposed by {AccessControl}.\n     * ====\n     *\n     * NOTE: This function is deprecated in favor of {_grantRole}.\n     */\n    function _setupRole(bytes32 role, address account) internal virtual {\n        _grantRole(role, account);\n    }\n\n    /**\n     * @dev Sets `adminRole` as ``role``\'s admin role.\n     *\n     * Emits a {RoleAdminChanged} event.\n     */\n    function _setRoleAdmin(bytes32 role, bytes32 adminRole) internal virtual {\n        bytes32 previousAdminRole = getRoleAdmin(role);\n        _roles[role].adminRole = adminRole;\n        emit RoleAdminChanged(role, previousAdminRole, adminRole);\n    }\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * Internal function without access restriction.\n     */\n    function _grantRole(bytes32 role, address account) internal virtual {\n        if (!hasRole(role, account)) {\n            _roles[role].members[account] = true;\n            emit RoleGranted(role, account, _msgSender());\n        }\n    }\n\n    /**\n     * @dev Revokes `role` from `account`.\n     *\n     * Internal function without access restriction.\n     */\n    function _revokeRole(bytes32 role, address account) internal virtual {\n        if (hasRole(role, account)) {\n            _roles[role].members[account] = false;\n            emit RoleRevoked(role, account, _msgSender());\n        }\n    }\n}\n\n\n// File contracts/polygon/ChildStartonERC20BurnPause.sol\n\npragma solidity ^0.8.0;\n\n\n\ncontract ChildStartonERC20BurnPause is ERC20Burnable, Pausable, AccessControl {\n    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");\n    bytes32 public constant DEPOSITOR_ROLE = keccak256("DEPOSITOR_ROLE");\n\n    constructor(string memory name, string memory symbol, uint256 initialSupply, address ownerOrMultiSigContract) ERC20(name, symbol) {\n        _setupRole(DEFAULT_ADMIN_ROLE, ownerOrMultiSigContract);\n        _setupRole(PAUSER_ROLE, ownerOrMultiSigContract);\n        _mint(ownerOrMultiSigContract, initialSupply);\n    }\n\n    function pause() public {\n        require(hasRole(PAUSER_ROLE, msg.sender));\n        _pause();\n    }\n\n    function unpause() public {\n        require(hasRole(PAUSER_ROLE, msg.sender));\n        _unpause();\n    }\n\n    function _beforeTokenTransfer(address from, address to, uint256 amount)\n        internal\n        whenNotPaused\n        override\n    {\n        super._beforeTokenTransfer(from, to, amount);\n    }\n\n  /**\n     * @notice called when token is deposited on root chain\n     * @dev Should be callable only by ChildChainManager\n     * Should handle deposit by minting the required amount for user\n     * Make sure minting is done only by this function\n     * @param user user address for whom deposit is being done\n     * @param depositData abi encoded amount\n     */\n    function deposit(address user, bytes calldata depositData)\n        external\n        whenNotPaused\n    {\n        require(hasRole(DEPOSITOR_ROLE, msg.sender));\n        uint256 amount = abi.decode(depositData, (uint256));\n        _mint(user, amount);\n    }\n\n    /**\n     * @notice called when user wants to withdraw tokens back to root chain\n     * @dev Should burn user\'s tokens. This transaction will be verified when exiting on root chain\n     * @param amount amount of tokens to withdraw\n     */\n    function withdraw(uint256 amount) external whenNotPaused {\n        _burn(_msgSender(), amount);\n    }\n}\n',
      bytecode:
        "0x60806040523480156200001157600080fd5b5060405162001b1638038062001b16833981016040819052620000349162000442565b8351849084906200004d906003906020850190620002cf565b50805162000063906004906020840190620002cf565b50506005805460ff19169055506200007d600082620000bf565b620000a97f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a82620000bf565b620000b58183620000cf565b505050506200053b565b620000cb8282620001c6565b5050565b6001600160a01b0382166200012b5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064015b60405180910390fd5b62000139600083836200026a565b80600260008282546200014d9190620004d7565b90915550506001600160a01b038216600090815260208190526040812080548392906200017c908490620004d7565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b60008281526006602090815260408083206001600160a01b038516845290915290205460ff16620000cb5760008281526006602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620002263390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60055460ff1615620002b25760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640162000122565b620002ca838383620002ca60201b620005671760201c565b505050565b828054620002dd90620004fe565b90600052602060002090601f0160209004810192826200030157600085556200034c565b82601f106200031c57805160ff19168380011785556200034c565b828001600101855582156200034c579182015b828111156200034c5782518255916020019190600101906200032f565b506200035a9291506200035e565b5090565b5b808211156200035a57600081556001016200035f565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200039d57600080fd5b81516001600160401b0380821115620003ba57620003ba62000375565b604051601f8301601f19908116603f01168101908282118183101715620003e557620003e562000375565b816040528381526020925086838588010111156200040257600080fd5b600091505b8382101562000426578582018301518183018401529082019062000407565b83821115620004385760008385830101525b9695505050505050565b600080600080608085870312156200045957600080fd5b84516001600160401b03808211156200047157600080fd5b6200047f888389016200038b565b955060208701519150808211156200049657600080fd5b50620004a5878288016200038b565b60408701516060880151919550935090506001600160a01b0381168114620004cc57600080fd5b939692955090935050565b60008219821115620004f957634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200051357607f821691505b602082108114156200053557634e487b7160e01b600052602260045260246000fd5b50919050565b6115cb806200054b6000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80635c975abb116100f9578063a3b0b5a311610097578063cf2c52cb11610071578063cf2c52cb1461037d578063d547741f14610390578063dd62ed3e146103a3578063e63ab1e9146103dc57600080fd5b8063a3b0b5a314610330578063a457c2d714610357578063a9059cbb1461036a57600080fd5b80638456cb59116100d35780638456cb591461030557806391d148541461030d57806395d89b4114610320578063a217fddf1461032857600080fd5b80635c975abb146102be57806370a08231146102c957806379cc6790146102f257600080fd5b80632e1a7d4d1161016657806336568abe1161014057806336568abe1461027d57806339509351146102905780633f4ba83a146102a357806342966c68146102ab57600080fd5b80632e1a7d4d146102465780632f2ff15d1461025b578063313ce5671461026e57600080fd5b806301ffc9a7146101ae57806306fdde03146101d6578063095ea7b3146101eb57806318160ddd146101fe57806323b872dd14610210578063248a9ca314610223575b600080fd5b6101c16101bc3660046111fc565b610403565b60405190151581526020015b60405180910390f35b6101de61043a565b6040516101cd9190611252565b6101c16101f93660046112a1565b6104cc565b6002545b6040519081526020016101cd565b6101c161021e3660046112cb565b6104e4565b610202610231366004611307565b60009081526006602052604090206001015490565b610259610254366004611307565b610508565b005b610259610269366004611320565b610541565b604051601281526020016101cd565b61025961028b366004611320565b61056c565b6101c161029e3660046112a1565b6105ea565b610259610629565b6102596102b9366004611307565b610534565b60055460ff166101c1565b6102026102d736600461134c565b6001600160a01b031660009081526020819052604090205490565b6102596103003660046112a1565b610666565b61025961067b565b6101c161031b366004611320565b6106b6565b6101de6106e1565b610202600081565b6102027f8f4f2da22e8ac8f11e15f9fc141cddbb5deea8800186560abb6e68c5496619a981565b6101c16103653660046112a1565b6106f0565b6101c16103783660046112a1565b610782565b61025961038b366004611367565b610790565b61025961039e366004611320565b610806565b6102026103b13660046113ea565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6102027f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b60006001600160e01b03198216637965db0b60e01b148061043457506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606003805461044990611414565b80601f016020809104026020016040519081016040528092919081815260200182805461047590611414565b80156104c25780601f10610497576101008083540402835291602001916104c2565b820191906000526020600020905b8154815290600101906020018083116104a557829003601f168201915b5050505050905090565b6000336104da81858561082c565b5060019392505050565b6000336104f2858285610950565b6104fd8585856109dc565b506001949350505050565b60055460ff16156105345760405162461bcd60e51b815260040161052b9061144f565b60405180910390fd5b61053e3382610bb5565b50565b60008281526006602052604090206001015461055d8133610d0f565b6105678383610d73565b505050565b6001600160a01b03811633146105dc5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b606482015260840161052b565b6105e68282610df9565b5050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906104da908290869061062490879061148f565b61082c565b6106537f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a336106b6565b61065c57600080fd5b610664610e60565b565b610671823383610950565b6105e68282610bb5565b6106a57f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a336106b6565b6106ae57600080fd5b610664610ef3565b60009182526006602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60606004805461044990611414565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156107755760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161052b565b6104fd828686840361082c565b6000336104da8185856109dc565b60055460ff16156107b35760405162461bcd60e51b815260040161052b9061144f565b6107dd7f8f4f2da22e8ac8f11e15f9fc141cddbb5deea8800186560abb6e68c5496619a9336106b6565b6107e657600080fd5b60006107f482840184611307565b90506108008482610f4b565b50505050565b6000828152600660205260409020600101546108228133610d0f565b6105678383610df9565b6001600160a01b03831661088e5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161052b565b6001600160a01b0382166108ef5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161052b565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461080057818110156109cf5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161052b565b610800848484840361082c565b6001600160a01b038316610a405760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161052b565b6001600160a01b038216610aa25760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161052b565b610aad838383611036565b6001600160a01b03831660009081526020819052604090205481811015610b255760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161052b565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610b5c90849061148f565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610ba891815260200190565b60405180910390a3610800565b6001600160a01b038216610c155760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161052b565b610c2182600083611036565b6001600160a01b03821660009081526020819052604090205481811015610c955760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161052b565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610cc49084906114a7565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b610d1982826106b6565b6105e657610d31816001600160a01b03166014611059565b610d3c836020611059565b604051602001610d4d9291906114be565b60408051601f198184030181529082905262461bcd60e51b825261052b91600401611252565b610d7d82826106b6565b6105e65760008281526006602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610db53390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610e0382826106b6565b156105e65760008281526006602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60055460ff16610ea95760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015260640161052b565b6005805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b60055460ff1615610f165760405162461bcd60e51b815260040161052b9061144f565b6005805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610ed63390565b6001600160a01b038216610fa15760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161052b565b610fad60008383611036565b8060026000828254610fbf919061148f565b90915550506001600160a01b03821660009081526020819052604081208054839290610fec90849061148f565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b60055460ff16156105675760405162461bcd60e51b815260040161052b9061144f565b60606000611068836002611533565b61107390600261148f565b67ffffffffffffffff81111561108b5761108b611552565b6040519080825280601f01601f1916602001820160405280156110b5576020820181803683370190505b509050600360fc1b816000815181106110d0576110d0611568565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106110ff576110ff611568565b60200101906001600160f81b031916908160001a9053506000611123846002611533565b61112e90600161148f565b90505b60018111156111a6576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061116257611162611568565b1a60f81b82828151811061117857611178611568565b60200101906001600160f81b031916908160001a90535060049490941c9361119f8161157e565b9050611131565b5083156111f55760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161052b565b9392505050565b60006020828403121561120e57600080fd5b81356001600160e01b0319811681146111f557600080fd5b60005b83811015611241578181015183820152602001611229565b838111156108005750506000910152565b6020815260008251806020840152611271816040850160208701611226565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461129c57600080fd5b919050565b600080604083850312156112b457600080fd5b6112bd83611285565b946020939093013593505050565b6000806000606084860312156112e057600080fd5b6112e984611285565b92506112f760208501611285565b9150604084013590509250925092565b60006020828403121561131957600080fd5b5035919050565b6000806040838503121561133357600080fd5b8235915061134360208401611285565b90509250929050565b60006020828403121561135e57600080fd5b6111f582611285565b60008060006040848603121561137c57600080fd5b61138584611285565b9250602084013567ffffffffffffffff808211156113a257600080fd5b818601915086601f8301126113b657600080fd5b8135818111156113c557600080fd5b8760208285010111156113d757600080fd5b6020830194508093505050509250925092565b600080604083850312156113fd57600080fd5b61140683611285565b915061134360208401611285565b600181811c9082168061142857607f821691505b6020821081141561144957634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600082198211156114a2576114a2611479565b500190565b6000828210156114b9576114b9611479565b500390565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516114f6816017850160208801611226565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611527816028840160208801611226565b01602801949350505050565b600081600019048311821515161561154d5761154d611479565b500290565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b60008161158d5761158d611479565b50600019019056fea264697066735822122056a0571dfb59ac70db46d7b0775f93caf9feb456a784b34757c234102bd436b464736f6c63430008090033",
      contractName: "ChildStartonERC20BurnPause",
      compilerVersion: "v0.8.9+commit.e5eed63a",
      optimizationUsed: true,
    },
    isActivated: true,
    isAudited: false,
    order: 94,
    tags: [SmartContractTemplateCategories.DEPRECATED],
    category: SmartContractTemplateCategories.DEPRECATED,
  },
  {
    id: "sct_b17f3cc1e0a44b03b309d20a854fda48",
    name: "Child ERC721",
    description:
      '<p>The ERC721 is a smart contract standard which is specialised in single-copy Non Fungible Tokens (NFT).\n\t\t\tWithin this standard, tokens are linked to addresses (the owners) and to URIs (references of the NFT contents).</p>\n\t\t\t<p>It is important to notice that we do not store any content directly inside the smart contract.\n\t\t\tOnly references are stored. It is up to the smart contract readers to find the content by themselves using the references.</p>\n\t\t\t<p>Starton provides an <a href="https://app.starton.io/ipfs">IPFS integration</a> in case you need to host your NFT contents.</p>\n\t\t\t<p>Parameters :</p>\n\t\t\t<ul>\n\t\t\t<li><strong>Name</strong> : This is the name of your smart contract which will be reflected on-chain.</li>\n\t\t\t<li><strong>Symbol</strong> : This is the symbol associated to the NFT collection</li>\n\t\t\t<li><strong>BaseUri</strong> : Will be used to concatenate NFT URIs and the ContractUriSuffix<ul>\n\t\t\t<li>Using IPFS: it should be <code>ipfs://ipfs/</code></li>\n\t\t\t<li>Using a centralised server: it should be like <code>https://yourapi.com/endpoint/</code></li>\n\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<li><strong>ContractUriSuffix</strong> (will be concatenated with baseUri):<ul>\n\t\t\t<li>Using IPFS: it is the CID of the contract metadata (more info <a href="https://docs.opensea.io/docs/contract-level-metadata">here</a>)</li>\n\t\t\t<li>Using a centralised server: the path of the contract metadata json</li>\n\t\t\t</ul>\n\t\t\t</li>\n\t\t\t</ul>',
    shortDescription:
      "The smart contract template for bridging single-copy Non-Fungible Tokens (NFT) between Ethereum and Polygon. For example, at large scale, to reduce gas fees and increase speed, NFTs can be transferred from one blockchain network to another. ",
    blockchains: ["polygon"],
    abi: [
      {
        type: "constructor",
        inputs: [
          {
            name: "name",
            type: "string",
            internalType: "string",
          },
          {
            name: "symbol",
            type: "string",
            internalType: "string",
          },
          {
            name: "baseUri",
            type: "string",
            internalType: "string",
          },
          {
            name: "contractUriSuffix",
            type: "string",
            internalType: "string",
          },
          {
            name: "ownerOrMultiSigContract",
            type: "address",
            internalType: "address",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "Approval",
        type: "event",
        inputs: [
          {
            name: "owner",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "approved",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "tokenId",
            type: "uint256",
            indexed: true,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        name: "ApprovalForAll",
        type: "event",
        inputs: [
          {
            name: "owner",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "operator",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "approved",
            type: "bool",
            indexed: false,
            internalType: "bool",
          },
        ],
        anonymous: false,
      },
      {
        name: "Paused",
        type: "event",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: false,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "RoleAdminChanged",
        type: "event",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "previousAdminRole",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "newAdminRole",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
        ],
        anonymous: false,
      },
      {
        name: "RoleGranted",
        type: "event",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "sender",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "RoleRevoked",
        type: "event",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "sender",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "Transfer",
        type: "event",
        inputs: [
          {
            name: "from",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "tokenId",
            type: "uint256",
            indexed: true,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        name: "TransferWithMetadata",
        type: "event",
        inputs: [
          {
            name: "from",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "tokenId",
            type: "uint256",
            indexed: true,
            internalType: "uint256",
          },
          {
            name: "metaData",
            type: "bytes",
            indexed: false,
            internalType: "bytes",
          },
        ],
        anonymous: false,
      },
      {
        name: "Unpaused",
        type: "event",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: false,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "WithdrawnBatch",
        type: "event",
        inputs: [
          {
            name: "user",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "tokenIds",
            type: "uint256[]",
            indexed: false,
            internalType: "uint256[]",
          },
        ],
        anonymous: false,
      },
      {
        name: "BATCH_LIMIT",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "DEFAULT_ADMIN_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "DEPOSITOR_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "LOCKER_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "MINTER_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "PAUSER_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "approve",
        type: "function",
        inputs: [
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "tokenId",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "balanceOf",
        type: "function",
        inputs: [
          {
            name: "owner",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "burn",
        type: "function",
        inputs: [
          {
            name: "tokenId",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "contractURI",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "string",
            internalType: "string",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "deposit",
        type: "function",
        inputs: [
          {
            name: "user",
            type: "address",
            internalType: "address",
          },
          {
            name: "depositData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "encodeTokenMetadata",
        type: "function",
        inputs: [
          {
            name: "tokenId",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "getApproved",
        type: "function",
        inputs: [
          {
            name: "tokenId",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "address",
            internalType: "address",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "getRoleAdmin",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "grantRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "hasRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "isApprovedForAll",
        type: "function",
        inputs: [
          {
            name: "owner",
            type: "address",
            internalType: "address",
          },
          {
            name: "operator",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "lockMint",
        type: "function",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "name",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "string",
            internalType: "string",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "ownerOf",
        type: "function",
        inputs: [
          {
            name: "tokenId",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "address",
            internalType: "address",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "pause",
        type: "function",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "paused",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "renounceRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "revokeRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "safeMint",
        type: "function",
        inputs: [
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "metadataURI",
            type: "string",
            internalType: "string",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "safeTransferFrom",
        type: "function",
        inputs: [
          {
            name: "from",
            type: "address",
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "tokenId",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "safeTransferFrom",
        type: "function",
        inputs: [
          {
            name: "from",
            type: "address",
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "tokenId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "_data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "setApprovalForAll",
        type: "function",
        inputs: [
          {
            name: "operator",
            type: "address",
            internalType: "address",
          },
          {
            name: "approved",
            type: "bool",
            internalType: "bool",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "setBaseContractURI",
        type: "function",
        inputs: [
          {
            name: "newBaseContractUri",
            type: "string",
            internalType: "string",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "supportsInterface",
        type: "function",
        inputs: [
          {
            name: "interfaceId",
            type: "bytes4",
            internalType: "bytes4",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "symbol",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "string",
            internalType: "string",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "tokenByIndex",
        type: "function",
        inputs: [
          {
            name: "index",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "tokenOfOwnerByIndex",
        type: "function",
        inputs: [
          {
            name: "owner",
            type: "address",
            internalType: "address",
          },
          {
            name: "index",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "tokenURI",
        type: "function",
        inputs: [
          {
            name: "tokenId",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "string",
            internalType: "string",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "totalSupply",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "transferFrom",
        type: "function",
        inputs: [
          {
            name: "from",
            type: "address",
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "tokenId",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "unpause",
        type: "function",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "withdraw",
        type: "function",
        inputs: [
          {
            name: "tokenId",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "withdrawBatch",
        type: "function",
        inputs: [
          {
            name: "tokenIds",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "withdrawWithMetadata",
        type: "function",
        inputs: [
          {
            name: "tokenId",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "withdrawnTokens",
        type: "function",
        inputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
    ],
    compilationDetails: {
      runs: 200,
      source:
        '// Sources flattened with hardhat v2.9.1 https://hardhat.org\n\n// File @openzeppelin/contracts/utils/introspection/IERC165.sol@v4.5.0\n\n// SPDX-License-Identifier: MIT\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Interface of the ERC165 standard, as defined in the\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\n *\n * Implementers can declare support of contract interfaces, which can then be\n * queried by others ({ERC165Checker}).\n *\n * For an implementation, see {ERC165}.\n */\ninterface IERC165 {\n    /**\n     * @dev Returns true if this contract implements the interface defined by\n     * `interfaceId`. See the corresponding\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\n     * to learn more about how these ids are created.\n     *\n     * This function call must use less than 30 000 gas.\n     */\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\n}\n\n\n// File @openzeppelin/contracts/token/ERC721/IERC721.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/IERC721.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Required interface of an ERC721 compliant contract.\n */\ninterface IERC721 is IERC165 {\n    /**\n     * @dev Emitted when `tokenId` token is transferred from `from` to `to`.\n     */\n    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);\n\n    /**\n     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.\n     */\n    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);\n\n    /**\n     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\n     */\n    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);\n\n    /**\n     * @dev Returns the number of tokens in ``owner``\'s account.\n     */\n    function balanceOf(address owner) external view returns (uint256 balance);\n\n    /**\n     * @dev Returns the owner of the `tokenId` token.\n     *\n     * Requirements:\n     *\n     * - `tokenId` must exist.\n     */\n    function ownerOf(uint256 tokenId) external view returns (address owner);\n\n    /**\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\n     *\n     * Requirements:\n     *\n     * - `from` cannot be the zero address.\n     * - `to` cannot be the zero address.\n     * - `tokenId` token must exist and be owned by `from`.\n     * - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}.\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\n     *\n     * Emits a {Transfer} event.\n     */\n    function safeTransferFrom(\n        address from,\n        address to,\n        uint256 tokenId\n    ) external;\n\n    /**\n     * @dev Transfers `tokenId` token from `from` to `to`.\n     *\n     * WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible.\n     *\n     * Requirements:\n     *\n     * - `from` cannot be the zero address.\n     * - `to` cannot be the zero address.\n     * - `tokenId` token must be owned by `from`.\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\n     *\n     * Emits a {Transfer} event.\n     */\n    function transferFrom(\n        address from,\n        address to,\n        uint256 tokenId\n    ) external;\n\n    /**\n     * @dev Gives permission to `to` to transfer `tokenId` token to another account.\n     * The approval is cleared when the token is transferred.\n     *\n     * Only a single account can be approved at a time, so approving the zero address clears previous approvals.\n     *\n     * Requirements:\n     *\n     * - The caller must own the token or be an approved operator.\n     * - `tokenId` must exist.\n     *\n     * Emits an {Approval} event.\n     */\n    function approve(address to, uint256 tokenId) external;\n\n    /**\n     * @dev Returns the account approved for `tokenId` token.\n     *\n     * Requirements:\n     *\n     * - `tokenId` must exist.\n     */\n    function getApproved(uint256 tokenId) external view returns (address operator);\n\n    /**\n     * @dev Approve or remove `operator` as an operator for the caller.\n     * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.\n     *\n     * Requirements:\n     *\n     * - The `operator` cannot be the caller.\n     *\n     * Emits an {ApprovalForAll} event.\n     */\n    function setApprovalForAll(address operator, bool _approved) external;\n\n    /**\n     * @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.\n     *\n     * See {setApprovalForAll}\n     */\n    function isApprovedForAll(address owner, address operator) external view returns (bool);\n\n    /**\n     * @dev Safely transfers `tokenId` token from `from` to `to`.\n     *\n     * Requirements:\n     *\n     * - `from` cannot be the zero address.\n     * - `to` cannot be the zero address.\n     * - `tokenId` token must exist and be owned by `from`.\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\n     *\n     * Emits a {Transfer} event.\n     */\n    function safeTransferFrom(\n        address from,\n        address to,\n        uint256 tokenId,\n        bytes calldata data\n    ) external;\n}\n\n\n// File @openzeppelin/contracts/token/ERC721/IERC721Receiver.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/IERC721Receiver.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @title ERC721 token receiver interface\n * @dev Interface for any contract that wants to support safeTransfers\n * from ERC721 asset contracts.\n */\ninterface IERC721Receiver {\n    /**\n     * @dev Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom}\n     * by `operator` from `from`, this function is called.\n     *\n     * It must return its Solidity selector to confirm the token transfer.\n     * If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted.\n     *\n     * The selector can be obtained in Solidity with `IERC721.onERC721Received.selector`.\n     */\n    function onERC721Received(\n        address operator,\n        address from,\n        uint256 tokenId,\n        bytes calldata data\n    ) external returns (bytes4);\n}\n\n\n// File @openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/extensions/IERC721Metadata.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @title ERC-721 Non-Fungible Token Standard, optional metadata extension\n * @dev See https://eips.ethereum.org/EIPS/eip-721\n */\ninterface IERC721Metadata is IERC721 {\n    /**\n     * @dev Returns the token collection name.\n     */\n    function name() external view returns (string memory);\n\n    /**\n     * @dev Returns the token collection symbol.\n     */\n    function symbol() external view returns (string memory);\n\n    /**\n     * @dev Returns the Uniform Resource Identifier (URI) for `tokenId` token.\n     */\n    function tokenURI(uint256 tokenId) external view returns (string memory);\n}\n\n\n// File @openzeppelin/contracts/utils/Address.sol@v4.5.0\n\n// OpenZeppelin Contracts (last updated v4.5.0) (utils/Address.sol)\n\npragma solidity ^0.8.1;\n\n/**\n * @dev Collection of functions related to the address type\n */\nlibrary Address {\n    /**\n     * @dev Returns true if `account` is a contract.\n     *\n     * [IMPORTANT]\n     * ====\n     * It is unsafe to assume that an address for which this function returns\n     * false is an externally-owned account (EOA) and not a contract.\n     *\n     * Among others, `isContract` will return false for the following\n     * types of addresses:\n     *\n     *  - an externally-owned account\n     *  - a contract in construction\n     *  - an address where a contract will be created\n     *  - an address where a contract lived, but was destroyed\n     * ====\n     *\n     * [IMPORTANT]\n     * ====\n     * You shouldn\'t rely on `isContract` to protect against flash loan attacks!\n     *\n     * Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets\n     * like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract\n     * constructor.\n     * ====\n     */\n    function isContract(address account) internal view returns (bool) {\n        // This method relies on extcodesize/address.code.length, which returns 0\n        // for contracts in construction, since the code is only stored at the end\n        // of the constructor execution.\n\n        return account.code.length > 0;\n    }\n\n    /**\n     * @dev Replacement for Solidity\'s `transfer`: sends `amount` wei to\n     * `recipient`, forwarding all available gas and reverting on errors.\n     *\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\n     * imposed by `transfer`, making them unable to receive funds via\n     * `transfer`. {sendValue} removes this limitation.\n     *\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\n     *\n     * IMPORTANT: because control is transferred to `recipient`, care must be\n     * taken to not create reentrancy vulnerabilities. Consider using\n     * {ReentrancyGuard} or the\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\n     */\n    function sendValue(address payable recipient, uint256 amount) internal {\n        require(address(this).balance >= amount, "Address: insufficient balance");\n\n        (bool success, ) = recipient.call{value: amount}("");\n        require(success, "Address: unable to send value, recipient may have reverted");\n    }\n\n    /**\n     * @dev Performs a Solidity function call using a low level `call`. A\n     * plain `call` is an unsafe replacement for a function call: use this\n     * function instead.\n     *\n     * If `target` reverts with a revert reason, it is bubbled up by this\n     * function (like regular Solidity function calls).\n     *\n     * Returns the raw returned data. To convert to the expected return value,\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\n     *\n     * Requirements:\n     *\n     * - `target` must be a contract.\n     * - calling `target` with `data` must not revert.\n     *\n     * _Available since v3.1._\n     */\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\n        return functionCall(target, data, "Address: low-level call failed");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\n     * `errorMessage` as a fallback revert reason when `target` reverts.\n     *\n     * _Available since v3.1._\n     */\n    function functionCall(\n        address target,\n        bytes memory data,\n        string memory errorMessage\n    ) internal returns (bytes memory) {\n        return functionCallWithValue(target, data, 0, errorMessage);\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n     * but also transferring `value` wei to `target`.\n     *\n     * Requirements:\n     *\n     * - the calling contract must have an ETH balance of at least `value`.\n     * - the called Solidity function must be `payable`.\n     *\n     * _Available since v3.1._\n     */\n    function functionCallWithValue(\n        address target,\n        bytes memory data,\n        uint256 value\n    ) internal returns (bytes memory) {\n        return functionCallWithValue(target, data, value, "Address: low-level call with value failed");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\n     *\n     * _Available since v3.1._\n     */\n    function functionCallWithValue(\n        address target,\n        bytes memory data,\n        uint256 value,\n        string memory errorMessage\n    ) internal returns (bytes memory) {\n        require(address(this).balance >= value, "Address: insufficient balance for call");\n        require(isContract(target), "Address: call to non-contract");\n\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\n        return verifyCallResult(success, returndata, errorMessage);\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n     * but performing a static call.\n     *\n     * _Available since v3.3._\n     */\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\n        return functionStaticCall(target, data, "Address: low-level static call failed");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\n     * but performing a static call.\n     *\n     * _Available since v3.3._\n     */\n    function functionStaticCall(\n        address target,\n        bytes memory data,\n        string memory errorMessage\n    ) internal view returns (bytes memory) {\n        require(isContract(target), "Address: static call to non-contract");\n\n        (bool success, bytes memory returndata) = target.staticcall(data);\n        return verifyCallResult(success, returndata, errorMessage);\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n     * but performing a delegate call.\n     *\n     * _Available since v3.4._\n     */\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\n        return functionDelegateCall(target, data, "Address: low-level delegate call failed");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\n     * but performing a delegate call.\n     *\n     * _Available since v3.4._\n     */\n    function functionDelegateCall(\n        address target,\n        bytes memory data,\n        string memory errorMessage\n    ) internal returns (bytes memory) {\n        require(isContract(target), "Address: delegate call to non-contract");\n\n        (bool success, bytes memory returndata) = target.delegatecall(data);\n        return verifyCallResult(success, returndata, errorMessage);\n    }\n\n    /**\n     * @dev Tool to verifies that a low level call was successful, and revert if it wasn\'t, either by bubbling the\n     * revert reason using the provided one.\n     *\n     * _Available since v4.3._\n     */\n    function verifyCallResult(\n        bool success,\n        bytes memory returndata,\n        string memory errorMessage\n    ) internal pure returns (bytes memory) {\n        if (success) {\n            return returndata;\n        } else {\n            // Look for revert reason and bubble it up if present\n            if (returndata.length > 0) {\n                // The easiest way to bubble the revert reason is using memory via assembly\n\n                assembly {\n                    let returndata_size := mload(returndata)\n                    revert(add(32, returndata), returndata_size)\n                }\n            } else {\n                revert(errorMessage);\n            }\n        }\n    }\n}\n\n\n// File @openzeppelin/contracts/utils/Context.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Provides information about the current execution context, including the\n * sender of the transaction and its data. While these are generally available\n * via msg.sender and msg.data, they should not be accessed in such a direct\n * manner, since when dealing with meta-transactions the account sending and\n * paying for execution may not be the actual sender (as far as an application\n * is concerned).\n *\n * This contract is only required for intermediate, library-like contracts.\n */\nabstract contract Context {\n    function _msgSender() internal view virtual returns (address) {\n        return msg.sender;\n    }\n\n    function _msgData() internal view virtual returns (bytes calldata) {\n        return msg.data;\n    }\n}\n\n\n// File @openzeppelin/contracts/utils/Strings.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/Strings.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev String operations.\n */\nlibrary Strings {\n    bytes16 private constant _HEX_SYMBOLS = "0123456789abcdef";\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\n     */\n    function toString(uint256 value) internal pure returns (string memory) {\n        // Inspired by OraclizeAPI\'s implementation - MIT licence\n        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol\n\n        if (value == 0) {\n            return "0";\n        }\n        uint256 temp = value;\n        uint256 digits;\n        while (temp != 0) {\n            digits++;\n            temp /= 10;\n        }\n        bytes memory buffer = new bytes(digits);\n        while (value != 0) {\n            digits -= 1;\n            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));\n            value /= 10;\n        }\n        return string(buffer);\n    }\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\n     */\n    function toHexString(uint256 value) internal pure returns (string memory) {\n        if (value == 0) {\n            return "0x00";\n        }\n        uint256 temp = value;\n        uint256 length = 0;\n        while (temp != 0) {\n            length++;\n            temp >>= 8;\n        }\n        return toHexString(value, length);\n    }\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\n     */\n    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\n        bytes memory buffer = new bytes(2 * length + 2);\n        buffer[0] = "0";\n        buffer[1] = "x";\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\n            buffer[i] = _HEX_SYMBOLS[value & 0xf];\n            value >>= 4;\n        }\n        require(value == 0, "Strings: hex length insufficient");\n        return string(buffer);\n    }\n}\n\n\n// File @openzeppelin/contracts/utils/introspection/ERC165.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Implementation of the {IERC165} interface.\n *\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\n * for the additional interface id that will be supported. For example:\n *\n * ```solidity\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\n * }\n * ```\n *\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\n */\nabstract contract ERC165 is IERC165 {\n    /**\n     * @dev See {IERC165-supportsInterface}.\n     */\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n        return interfaceId == type(IERC165).interfaceId;\n    }\n}\n\n\n// File @openzeppelin/contracts/token/ERC721/ERC721.sol@v4.5.0\n\n// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC721/ERC721.sol)\n\npragma solidity ^0.8.0;\n\n\n\n\n\n\n\n/**\n * @dev Implementation of https://eips.ethereum.org/EIPS/eip-721[ERC721] Non-Fungible Token Standard, including\n * the Metadata extension, but not including the Enumerable extension, which is available separately as\n * {ERC721Enumerable}.\n */\ncontract ERC721 is Context, ERC165, IERC721, IERC721Metadata {\n    using Address for address;\n    using Strings for uint256;\n\n    // Token name\n    string private _name;\n\n    // Token symbol\n    string private _symbol;\n\n    // Mapping from token ID to owner address\n    mapping(uint256 => address) private _owners;\n\n    // Mapping owner address to token count\n    mapping(address => uint256) private _balances;\n\n    // Mapping from token ID to approved address\n    mapping(uint256 => address) private _tokenApprovals;\n\n    // Mapping from owner to operator approvals\n    mapping(address => mapping(address => bool)) private _operatorApprovals;\n\n    /**\n     * @dev Initializes the contract by setting a `name` and a `symbol` to the token collection.\n     */\n    constructor(string memory name_, string memory symbol_) {\n        _name = name_;\n        _symbol = symbol_;\n    }\n\n    /**\n     * @dev See {IERC165-supportsInterface}.\n     */\n    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {\n        return\n            interfaceId == type(IERC721).interfaceId ||\n            interfaceId == type(IERC721Metadata).interfaceId ||\n            super.supportsInterface(interfaceId);\n    }\n\n    /**\n     * @dev See {IERC721-balanceOf}.\n     */\n    function balanceOf(address owner) public view virtual override returns (uint256) {\n        require(owner != address(0), "ERC721: balance query for the zero address");\n        return _balances[owner];\n    }\n\n    /**\n     * @dev See {IERC721-ownerOf}.\n     */\n    function ownerOf(uint256 tokenId) public view virtual override returns (address) {\n        address owner = _owners[tokenId];\n        require(owner != address(0), "ERC721: owner query for nonexistent token");\n        return owner;\n    }\n\n    /**\n     * @dev See {IERC721Metadata-name}.\n     */\n    function name() public view virtual override returns (string memory) {\n        return _name;\n    }\n\n    /**\n     * @dev See {IERC721Metadata-symbol}.\n     */\n    function symbol() public view virtual override returns (string memory) {\n        return _symbol;\n    }\n\n    /**\n     * @dev See {IERC721Metadata-tokenURI}.\n     */\n    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {\n        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");\n\n        string memory baseURI = _baseURI();\n        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString())) : "";\n    }\n\n    /**\n     * @dev Base URI for computing {tokenURI}. If set, the resulting URI for each\n     * token will be the concatenation of the `baseURI` and the `tokenId`. Empty\n     * by default, can be overriden in child contracts.\n     */\n    function _baseURI() internal view virtual returns (string memory) {\n        return "";\n    }\n\n    /**\n     * @dev See {IERC721-approve}.\n     */\n    function approve(address to, uint256 tokenId) public virtual override {\n        address owner = ERC721.ownerOf(tokenId);\n        require(to != owner, "ERC721: approval to current owner");\n\n        require(\n            _msgSender() == owner || isApprovedForAll(owner, _msgSender()),\n            "ERC721: approve caller is not owner nor approved for all"\n        );\n\n        _approve(to, tokenId);\n    }\n\n    /**\n     * @dev See {IERC721-getApproved}.\n     */\n    function getApproved(uint256 tokenId) public view virtual override returns (address) {\n        require(_exists(tokenId), "ERC721: approved query for nonexistent token");\n\n        return _tokenApprovals[tokenId];\n    }\n\n    /**\n     * @dev See {IERC721-setApprovalForAll}.\n     */\n    function setApprovalForAll(address operator, bool approved) public virtual override {\n        _setApprovalForAll(_msgSender(), operator, approved);\n    }\n\n    /**\n     * @dev See {IERC721-isApprovedForAll}.\n     */\n    function isApprovedForAll(address owner, address operator) public view virtual override returns (bool) {\n        return _operatorApprovals[owner][operator];\n    }\n\n    /**\n     * @dev See {IERC721-transferFrom}.\n     */\n    function transferFrom(\n        address from,\n        address to,\n        uint256 tokenId\n    ) public virtual override {\n        //solhint-disable-next-line max-line-length\n        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: transfer caller is not owner nor approved");\n\n        _transfer(from, to, tokenId);\n    }\n\n    /**\n     * @dev See {IERC721-safeTransferFrom}.\n     */\n    function safeTransferFrom(\n        address from,\n        address to,\n        uint256 tokenId\n    ) public virtual override {\n        safeTransferFrom(from, to, tokenId, "");\n    }\n\n    /**\n     * @dev See {IERC721-safeTransferFrom}.\n     */\n    function safeTransferFrom(\n        address from,\n        address to,\n        uint256 tokenId,\n        bytes memory _data\n    ) public virtual override {\n        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: transfer caller is not owner nor approved");\n        _safeTransfer(from, to, tokenId, _data);\n    }\n\n    /**\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\n     *\n     * `_data` is additional data, it has no specified format and it is sent in call to `to`.\n     *\n     * This internal function is equivalent to {safeTransferFrom}, and can be used to e.g.\n     * implement alternative mechanisms to perform token transfer, such as signature-based.\n     *\n     * Requirements:\n     *\n     * - `from` cannot be the zero address.\n     * - `to` cannot be the zero address.\n     * - `tokenId` token must exist and be owned by `from`.\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\n     *\n     * Emits a {Transfer} event.\n     */\n    function _safeTransfer(\n        address from,\n        address to,\n        uint256 tokenId,\n        bytes memory _data\n    ) internal virtual {\n        _transfer(from, to, tokenId);\n        require(_checkOnERC721Received(from, to, tokenId, _data), "ERC721: transfer to non ERC721Receiver implementer");\n    }\n\n    /**\n     * @dev Returns whether `tokenId` exists.\n     *\n     * Tokens can be managed by their owner or approved accounts via {approve} or {setApprovalForAll}.\n     *\n     * Tokens start existing when they are minted (`_mint`),\n     * and stop existing when they are burned (`_burn`).\n     */\n    function _exists(uint256 tokenId) internal view virtual returns (bool) {\n        return _owners[tokenId] != address(0);\n    }\n\n    /**\n     * @dev Returns whether `spender` is allowed to manage `tokenId`.\n     *\n     * Requirements:\n     *\n     * - `tokenId` must exist.\n     */\n    function _isApprovedOrOwner(address spender, uint256 tokenId) internal view virtual returns (bool) {\n        require(_exists(tokenId), "ERC721: operator query for nonexistent token");\n        address owner = ERC721.ownerOf(tokenId);\n        return (spender == owner || getApproved(tokenId) == spender || isApprovedForAll(owner, spender));\n    }\n\n    /**\n     * @dev Safely mints `tokenId` and transfers it to `to`.\n     *\n     * Requirements:\n     *\n     * - `tokenId` must not exist.\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\n     *\n     * Emits a {Transfer} event.\n     */\n    function _safeMint(address to, uint256 tokenId) internal virtual {\n        _safeMint(to, tokenId, "");\n    }\n\n    /**\n     * @dev Same as {xref-ERC721-_safeMint-address-uint256-}[`_safeMint`], with an additional `data` parameter which is\n     * forwarded in {IERC721Receiver-onERC721Received} to contract recipients.\n     */\n    function _safeMint(\n        address to,\n        uint256 tokenId,\n        bytes memory _data\n    ) internal virtual {\n        _mint(to, tokenId);\n        require(\n            _checkOnERC721Received(address(0), to, tokenId, _data),\n            "ERC721: transfer to non ERC721Receiver implementer"\n        );\n    }\n\n    /**\n     * @dev Mints `tokenId` and transfers it to `to`.\n     *\n     * WARNING: Usage of this method is discouraged, use {_safeMint} whenever possible\n     *\n     * Requirements:\n     *\n     * - `tokenId` must not exist.\n     * - `to` cannot be the zero address.\n     *\n     * Emits a {Transfer} event.\n     */\n    function _mint(address to, uint256 tokenId) internal virtual {\n        require(to != address(0), "ERC721: mint to the zero address");\n        require(!_exists(tokenId), "ERC721: token already minted");\n\n        _beforeTokenTransfer(address(0), to, tokenId);\n\n        _balances[to] += 1;\n        _owners[tokenId] = to;\n\n        emit Transfer(address(0), to, tokenId);\n\n        _afterTokenTransfer(address(0), to, tokenId);\n    }\n\n    /**\n     * @dev Destroys `tokenId`.\n     * The approval is cleared when the token is burned.\n     *\n     * Requirements:\n     *\n     * - `tokenId` must exist.\n     *\n     * Emits a {Transfer} event.\n     */\n    function _burn(uint256 tokenId) internal virtual {\n        address owner = ERC721.ownerOf(tokenId);\n\n        _beforeTokenTransfer(owner, address(0), tokenId);\n\n        // Clear approvals\n        _approve(address(0), tokenId);\n\n        _balances[owner] -= 1;\n        delete _owners[tokenId];\n\n        emit Transfer(owner, address(0), tokenId);\n\n        _afterTokenTransfer(owner, address(0), tokenId);\n    }\n\n    /**\n     * @dev Transfers `tokenId` from `from` to `to`.\n     *  As opposed to {transferFrom}, this imposes no restrictions on msg.sender.\n     *\n     * Requirements:\n     *\n     * - `to` cannot be the zero address.\n     * - `tokenId` token must be owned by `from`.\n     *\n     * Emits a {Transfer} event.\n     */\n    function _transfer(\n        address from,\n        address to,\n        uint256 tokenId\n    ) internal virtual {\n        require(ERC721.ownerOf(tokenId) == from, "ERC721: transfer from incorrect owner");\n        require(to != address(0), "ERC721: transfer to the zero address");\n\n        _beforeTokenTransfer(from, to, tokenId);\n\n        // Clear approvals from the previous owner\n        _approve(address(0), tokenId);\n\n        _balances[from] -= 1;\n        _balances[to] += 1;\n        _owners[tokenId] = to;\n\n        emit Transfer(from, to, tokenId);\n\n        _afterTokenTransfer(from, to, tokenId);\n    }\n\n    /**\n     * @dev Approve `to` to operate on `tokenId`\n     *\n     * Emits a {Approval} event.\n     */\n    function _approve(address to, uint256 tokenId) internal virtual {\n        _tokenApprovals[tokenId] = to;\n        emit Approval(ERC721.ownerOf(tokenId), to, tokenId);\n    }\n\n    /**\n     * @dev Approve `operator` to operate on all of `owner` tokens\n     *\n     * Emits a {ApprovalForAll} event.\n     */\n    function _setApprovalForAll(\n        address owner,\n        address operator,\n        bool approved\n    ) internal virtual {\n        require(owner != operator, "ERC721: approve to caller");\n        _operatorApprovals[owner][operator] = approved;\n        emit ApprovalForAll(owner, operator, approved);\n    }\n\n    /**\n     * @dev Internal function to invoke {IERC721Receiver-onERC721Received} on a target address.\n     * The call is not executed if the target address is not a contract.\n     *\n     * @param from address representing the previous owner of the given token ID\n     * @param to target address that will receive the tokens\n     * @param tokenId uint256 ID of the token to be transferred\n     * @param _data bytes optional data to send along with the call\n     * @return bool whether the call correctly returned the expected magic value\n     */\n    function _checkOnERC721Received(\n        address from,\n        address to,\n        uint256 tokenId,\n        bytes memory _data\n    ) private returns (bool) {\n        if (to.isContract()) {\n            try IERC721Receiver(to).onERC721Received(_msgSender(), from, tokenId, _data) returns (bytes4 retval) {\n                return retval == IERC721Receiver.onERC721Received.selector;\n            } catch (bytes memory reason) {\n                if (reason.length == 0) {\n                    revert("ERC721: transfer to non ERC721Receiver implementer");\n                } else {\n                    assembly {\n                        revert(add(32, reason), mload(reason))\n                    }\n                }\n            }\n        } else {\n            return true;\n        }\n    }\n\n    /**\n     * @dev Hook that is called before any token transfer. This includes minting\n     * and burning.\n     *\n     * Calling conditions:\n     *\n     * - When `from` and `to` are both non-zero, ``from``\'s `tokenId` will be\n     * transferred to `to`.\n     * - When `from` is zero, `tokenId` will be minted for `to`.\n     * - When `to` is zero, ``from``\'s `tokenId` will be burned.\n     * - `from` and `to` are never both zero.\n     *\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\n     */\n    function _beforeTokenTransfer(\n        address from,\n        address to,\n        uint256 tokenId\n    ) internal virtual {}\n\n    /**\n     * @dev Hook that is called after any transfer of tokens. This includes\n     * minting and burning.\n     *\n     * Calling conditions:\n     *\n     * - when `from` and `to` are both non-zero.\n     * - `from` and `to` are never both zero.\n     *\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\n     */\n    function _afterTokenTransfer(\n        address from,\n        address to,\n        uint256 tokenId\n    ) internal virtual {}\n}\n\n\n// File @openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol@v4.5.0\n\n// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC721/extensions/IERC721Enumerable.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @title ERC-721 Non-Fungible Token Standard, optional enumeration extension\n * @dev See https://eips.ethereum.org/EIPS/eip-721\n */\ninterface IERC721Enumerable is IERC721 {\n    /**\n     * @dev Returns the total amount of tokens stored by the contract.\n     */\n    function totalSupply() external view returns (uint256);\n\n    /**\n     * @dev Returns a token ID owned by `owner` at a given `index` of its token list.\n     * Use along with {balanceOf} to enumerate all of ``owner``\'s tokens.\n     */\n    function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256);\n\n    /**\n     * @dev Returns a token ID at a given `index` of all the tokens stored by the contract.\n     * Use along with {totalSupply} to enumerate all tokens.\n     */\n    function tokenByIndex(uint256 index) external view returns (uint256);\n}\n\n\n// File @openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/extensions/ERC721Enumerable.sol)\n\npragma solidity ^0.8.0;\n\n\n/**\n * @dev This implements an optional extension of {ERC721} defined in the EIP that adds\n * enumerability of all the token ids in the contract as well as all token ids owned by each\n * account.\n */\nabstract contract ERC721Enumerable is ERC721, IERC721Enumerable {\n    // Mapping from owner to list of owned token IDs\n    mapping(address => mapping(uint256 => uint256)) private _ownedTokens;\n\n    // Mapping from token ID to index of the owner tokens list\n    mapping(uint256 => uint256) private _ownedTokensIndex;\n\n    // Array with all token ids, used for enumeration\n    uint256[] private _allTokens;\n\n    // Mapping from token id to position in the allTokens array\n    mapping(uint256 => uint256) private _allTokensIndex;\n\n    /**\n     * @dev See {IERC165-supportsInterface}.\n     */\n    function supportsInterface(bytes4 interfaceId) public view virtual override(IERC165, ERC721) returns (bool) {\n        return interfaceId == type(IERC721Enumerable).interfaceId || super.supportsInterface(interfaceId);\n    }\n\n    /**\n     * @dev See {IERC721Enumerable-tokenOfOwnerByIndex}.\n     */\n    function tokenOfOwnerByIndex(address owner, uint256 index) public view virtual override returns (uint256) {\n        require(index < ERC721.balanceOf(owner), "ERC721Enumerable: owner index out of bounds");\n        return _ownedTokens[owner][index];\n    }\n\n    /**\n     * @dev See {IERC721Enumerable-totalSupply}.\n     */\n    function totalSupply() public view virtual override returns (uint256) {\n        return _allTokens.length;\n    }\n\n    /**\n     * @dev See {IERC721Enumerable-tokenByIndex}.\n     */\n    function tokenByIndex(uint256 index) public view virtual override returns (uint256) {\n        require(index < ERC721Enumerable.totalSupply(), "ERC721Enumerable: global index out of bounds");\n        return _allTokens[index];\n    }\n\n    /**\n     * @dev Hook that is called before any token transfer. This includes minting\n     * and burning.\n     *\n     * Calling conditions:\n     *\n     * - When `from` and `to` are both non-zero, ``from``\'s `tokenId` will be\n     * transferred to `to`.\n     * - When `from` is zero, `tokenId` will be minted for `to`.\n     * - When `to` is zero, ``from``\'s `tokenId` will be burned.\n     * - `from` cannot be the zero address.\n     * - `to` cannot be the zero address.\n     *\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\n     */\n    function _beforeTokenTransfer(\n        address from,\n        address to,\n        uint256 tokenId\n    ) internal virtual override {\n        super._beforeTokenTransfer(from, to, tokenId);\n\n        if (from == address(0)) {\n            _addTokenToAllTokensEnumeration(tokenId);\n        } else if (from != to) {\n            _removeTokenFromOwnerEnumeration(from, tokenId);\n        }\n        if (to == address(0)) {\n            _removeTokenFromAllTokensEnumeration(tokenId);\n        } else if (to != from) {\n            _addTokenToOwnerEnumeration(to, tokenId);\n        }\n    }\n\n    /**\n     * @dev Private function to add a token to this extension\'s ownership-tracking data structures.\n     * @param to address representing the new owner of the given token ID\n     * @param tokenId uint256 ID of the token to be added to the tokens list of the given address\n     */\n    function _addTokenToOwnerEnumeration(address to, uint256 tokenId) private {\n        uint256 length = ERC721.balanceOf(to);\n        _ownedTokens[to][length] = tokenId;\n        _ownedTokensIndex[tokenId] = length;\n    }\n\n    /**\n     * @dev Private function to add a token to this extension\'s token tracking data structures.\n     * @param tokenId uint256 ID of the token to be added to the tokens list\n     */\n    function _addTokenToAllTokensEnumeration(uint256 tokenId) private {\n        _allTokensIndex[tokenId] = _allTokens.length;\n        _allTokens.push(tokenId);\n    }\n\n    /**\n     * @dev Private function to remove a token from this extension\'s ownership-tracking data structures. Note that\n     * while the token is not assigned a new owner, the `_ownedTokensIndex` mapping is _not_ updated: this allows for\n     * gas optimizations e.g. when performing a transfer operation (avoiding double writes).\n     * This has O(1) time complexity, but alters the order of the _ownedTokens array.\n     * @param from address representing the previous owner of the given token ID\n     * @param tokenId uint256 ID of the token to be removed from the tokens list of the given address\n     */\n    function _removeTokenFromOwnerEnumeration(address from, uint256 tokenId) private {\n        // To prevent a gap in from\'s tokens array, we store the last token in the index of the token to delete, and\n        // then delete the last slot (swap and pop).\n\n        uint256 lastTokenIndex = ERC721.balanceOf(from) - 1;\n        uint256 tokenIndex = _ownedTokensIndex[tokenId];\n\n        // When the token to delete is the last token, the swap operation is unnecessary\n        if (tokenIndex != lastTokenIndex) {\n            uint256 lastTokenId = _ownedTokens[from][lastTokenIndex];\n\n            _ownedTokens[from][tokenIndex] = lastTokenId; // Move the last token to the slot of the to-delete token\n            _ownedTokensIndex[lastTokenId] = tokenIndex; // Update the moved token\'s index\n        }\n\n        // This also deletes the contents at the last position of the array\n        delete _ownedTokensIndex[tokenId];\n        delete _ownedTokens[from][lastTokenIndex];\n    }\n\n    /**\n     * @dev Private function to remove a token from this extension\'s token tracking data structures.\n     * This has O(1) time complexity, but alters the order of the _allTokens array.\n     * @param tokenId uint256 ID of the token to be removed from the tokens list\n     */\n    function _removeTokenFromAllTokensEnumeration(uint256 tokenId) private {\n        // To prevent a gap in the tokens array, we store the last token in the index of the token to delete, and\n        // then delete the last slot (swap and pop).\n\n        uint256 lastTokenIndex = _allTokens.length - 1;\n        uint256 tokenIndex = _allTokensIndex[tokenId];\n\n        // When the token to delete is the last token, the swap operation is unnecessary. However, since this occurs so\n        // rarely (when the last minted token is burnt) that we still do the swap here to avoid the gas cost of adding\n        // an \'if\' statement (like in _removeTokenFromOwnerEnumeration)\n        uint256 lastTokenId = _allTokens[lastTokenIndex];\n\n        _allTokens[tokenIndex] = lastTokenId; // Move the last token to the slot of the to-delete token\n        _allTokensIndex[lastTokenId] = tokenIndex; // Update the moved token\'s index\n\n        // This also deletes the contents at the last position of the array\n        delete _allTokensIndex[tokenId];\n        _allTokens.pop();\n    }\n}\n\n\n// File @openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/extensions/ERC721URIStorage.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev ERC721 token with storage based token URI management.\n */\nabstract contract ERC721URIStorage is ERC721 {\n    using Strings for uint256;\n\n    // Optional mapping for token URIs\n    mapping(uint256 => string) private _tokenURIs;\n\n    /**\n     * @dev See {IERC721Metadata-tokenURI}.\n     */\n    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {\n        require(_exists(tokenId), "ERC721URIStorage: URI query for nonexistent token");\n\n        string memory _tokenURI = _tokenURIs[tokenId];\n        string memory base = _baseURI();\n\n        // If there is no base URI, return the token URI.\n        if (bytes(base).length == 0) {\n            return _tokenURI;\n        }\n        // If both are set, concatenate the baseURI and tokenURI (via abi.encodePacked).\n        if (bytes(_tokenURI).length > 0) {\n            return string(abi.encodePacked(base, _tokenURI));\n        }\n\n        return super.tokenURI(tokenId);\n    }\n\n    /**\n     * @dev Sets `_tokenURI` as the tokenURI of `tokenId`.\n     *\n     * Requirements:\n     *\n     * - `tokenId` must exist.\n     */\n    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {\n        require(_exists(tokenId), "ERC721URIStorage: URI set of nonexistent token");\n        _tokenURIs[tokenId] = _tokenURI;\n    }\n\n    /**\n     * @dev Destroys `tokenId`.\n     * The approval is cleared when the token is burned.\n     *\n     * Requirements:\n     *\n     * - `tokenId` must exist.\n     *\n     * Emits a {Transfer} event.\n     */\n    function _burn(uint256 tokenId) internal virtual override {\n        super._burn(tokenId);\n\n        if (bytes(_tokenURIs[tokenId]).length != 0) {\n            delete _tokenURIs[tokenId];\n        }\n    }\n}\n\n\n// File @openzeppelin/contracts/security/Pausable.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (security/Pausable.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Contract module which allows children to implement an emergency stop\n * mechanism that can be triggered by an authorized account.\n *\n * This module is used through inheritance. It will make available the\n * modifiers `whenNotPaused` and `whenPaused`, which can be applied to\n * the functions of your contract. Note that they will not be pausable by\n * simply including this module, only once the modifiers are put in place.\n */\nabstract contract Pausable is Context {\n    /**\n     * @dev Emitted when the pause is triggered by `account`.\n     */\n    event Paused(address account);\n\n    /**\n     * @dev Emitted when the pause is lifted by `account`.\n     */\n    event Unpaused(address account);\n\n    bool private _paused;\n\n    /**\n     * @dev Initializes the contract in unpaused state.\n     */\n    constructor() {\n        _paused = false;\n    }\n\n    /**\n     * @dev Returns true if the contract is paused, and false otherwise.\n     */\n    function paused() public view virtual returns (bool) {\n        return _paused;\n    }\n\n    /**\n     * @dev Modifier to make a function callable only when the contract is not paused.\n     *\n     * Requirements:\n     *\n     * - The contract must not be paused.\n     */\n    modifier whenNotPaused() {\n        require(!paused(), "Pausable: paused");\n        _;\n    }\n\n    /**\n     * @dev Modifier to make a function callable only when the contract is paused.\n     *\n     * Requirements:\n     *\n     * - The contract must be paused.\n     */\n    modifier whenPaused() {\n        require(paused(), "Pausable: not paused");\n        _;\n    }\n\n    /**\n     * @dev Triggers stopped state.\n     *\n     * Requirements:\n     *\n     * - The contract must not be paused.\n     */\n    function _pause() internal virtual whenNotPaused {\n        _paused = true;\n        emit Paused(_msgSender());\n    }\n\n    /**\n     * @dev Returns to normal state.\n     *\n     * Requirements:\n     *\n     * - The contract must be paused.\n     */\n    function _unpause() internal virtual whenPaused {\n        _paused = false;\n        emit Unpaused(_msgSender());\n    }\n}\n\n\n// File @openzeppelin/contracts/access/IAccessControl.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (access/IAccessControl.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev External interface of AccessControl declared to support ERC165 detection.\n */\ninterface IAccessControl {\n    /**\n     * @dev Emitted when `newAdminRole` is set as ``role``\'s admin role, replacing `previousAdminRole`\n     *\n     * `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite\n     * {RoleAdminChanged} not being emitted signaling this.\n     *\n     * _Available since v3.1._\n     */\n    event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole);\n\n    /**\n     * @dev Emitted when `account` is granted `role`.\n     *\n     * `sender` is the account that originated the contract call, an admin role\n     * bearer except when using {AccessControl-_setupRole}.\n     */\n    event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender);\n\n    /**\n     * @dev Emitted when `account` is revoked `role`.\n     *\n     * `sender` is the account that originated the contract call:\n     *   - if using `revokeRole`, it is the admin role bearer\n     *   - if using `renounceRole`, it is the role bearer (i.e. `account`)\n     */\n    event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender);\n\n    /**\n     * @dev Returns `true` if `account` has been granted `role`.\n     */\n    function hasRole(bytes32 role, address account) external view returns (bool);\n\n    /**\n     * @dev Returns the admin role that controls `role`. See {grantRole} and\n     * {revokeRole}.\n     *\n     * To change a role\'s admin, use {AccessControl-_setRoleAdmin}.\n     */\n    function getRoleAdmin(bytes32 role) external view returns (bytes32);\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function grantRole(bytes32 role, address account) external;\n\n    /**\n     * @dev Revokes `role` from `account`.\n     *\n     * If `account` had been granted `role`, emits a {RoleRevoked} event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function revokeRole(bytes32 role, address account) external;\n\n    /**\n     * @dev Revokes `role` from the calling account.\n     *\n     * Roles are often managed via {grantRole} and {revokeRole}: this function\'s\n     * purpose is to provide a mechanism for accounts to lose their privileges\n     * if they are compromised (such as when a trusted device is misplaced).\n     *\n     * If the calling account had been granted `role`, emits a {RoleRevoked}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must be `account`.\n     */\n    function renounceRole(bytes32 role, address account) external;\n}\n\n\n// File @openzeppelin/contracts/access/AccessControl.sol@v4.5.0\n\n// OpenZeppelin Contracts (last updated v4.5.0) (access/AccessControl.sol)\n\npragma solidity ^0.8.0;\n\n\n\n\n/**\n * @dev Contract module that allows children to implement role-based access\n * control mechanisms. This is a lightweight version that doesn\'t allow enumerating role\n * members except through off-chain means by accessing the contract event logs. Some\n * applications may benefit from on-chain enumerability, for those cases see\n * {AccessControlEnumerable}.\n *\n * Roles are referred to by their `bytes32` identifier. These should be exposed\n * in the external API and be unique. The best way to achieve this is by\n * using `public constant` hash digests:\n *\n * ```\n * bytes32 public constant MY_ROLE = keccak256("MY_ROLE");\n * ```\n *\n * Roles can be used to represent a set of permissions. To restrict access to a\n * function call, use {hasRole}:\n *\n * ```\n * function foo() public {\n *     require(hasRole(MY_ROLE, msg.sender));\n *     ...\n * }\n * ```\n *\n * Roles can be granted and revoked dynamically via the {grantRole} and\n * {revokeRole} functions. Each role has an associated admin role, and only\n * accounts that have a role\'s admin role can call {grantRole} and {revokeRole}.\n *\n * By default, the admin role for all roles is `DEFAULT_ADMIN_ROLE`, which means\n * that only accounts with this role will be able to grant or revoke other\n * roles. More complex role relationships can be created by using\n * {_setRoleAdmin}.\n *\n * WARNING: The `DEFAULT_ADMIN_ROLE` is also its own admin: it has permission to\n * grant and revoke this role. Extra precautions should be taken to secure\n * accounts that have been granted it.\n */\nabstract contract AccessControl is Context, IAccessControl, ERC165 {\n    struct RoleData {\n        mapping(address => bool) members;\n        bytes32 adminRole;\n    }\n\n    mapping(bytes32 => RoleData) private _roles;\n\n    bytes32 public constant DEFAULT_ADMIN_ROLE = 0x00;\n\n    /**\n     * @dev Modifier that checks that an account has a specific role. Reverts\n     * with a standardized message including the required role.\n     *\n     * The format of the revert reason is given by the following regular expression:\n     *\n     *  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\n     *\n     * _Available since v4.1._\n     */\n    modifier onlyRole(bytes32 role) {\n        _checkRole(role, _msgSender());\n        _;\n    }\n\n    /**\n     * @dev See {IERC165-supportsInterface}.\n     */\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n        return interfaceId == type(IAccessControl).interfaceId || super.supportsInterface(interfaceId);\n    }\n\n    /**\n     * @dev Returns `true` if `account` has been granted `role`.\n     */\n    function hasRole(bytes32 role, address account) public view virtual override returns (bool) {\n        return _roles[role].members[account];\n    }\n\n    /**\n     * @dev Revert with a standard message if `account` is missing `role`.\n     *\n     * The format of the revert reason is given by the following regular expression:\n     *\n     *  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\n     */\n    function _checkRole(bytes32 role, address account) internal view virtual {\n        if (!hasRole(role, account)) {\n            revert(\n                string(\n                    abi.encodePacked(\n                        "AccessControl: account ",\n                        Strings.toHexString(uint160(account), 20),\n                        " is missing role ",\n                        Strings.toHexString(uint256(role), 32)\n                    )\n                )\n            );\n        }\n    }\n\n    /**\n     * @dev Returns the admin role that controls `role`. See {grantRole} and\n     * {revokeRole}.\n     *\n     * To change a role\'s admin, use {_setRoleAdmin}.\n     */\n    function getRoleAdmin(bytes32 role) public view virtual override returns (bytes32) {\n        return _roles[role].adminRole;\n    }\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function grantRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {\n        _grantRole(role, account);\n    }\n\n    /**\n     * @dev Revokes `role` from `account`.\n     *\n     * If `account` had been granted `role`, emits a {RoleRevoked} event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function revokeRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {\n        _revokeRole(role, account);\n    }\n\n    /**\n     * @dev Revokes `role` from the calling account.\n     *\n     * Roles are often managed via {grantRole} and {revokeRole}: this function\'s\n     * purpose is to provide a mechanism for accounts to lose their privileges\n     * if they are compromised (such as when a trusted device is misplaced).\n     *\n     * If the calling account had been revoked `role`, emits a {RoleRevoked}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must be `account`.\n     */\n    function renounceRole(bytes32 role, address account) public virtual override {\n        require(account == _msgSender(), "AccessControl: can only renounce roles for self");\n\n        _revokeRole(role, account);\n    }\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\n     * event. Note that unlike {grantRole}, this function doesn\'t perform any\n     * checks on the calling account.\n     *\n     * [WARNING]\n     * ====\n     * This function should only be called from the constructor when setting\n     * up the initial roles for the system.\n     *\n     * Using this function in any other way is effectively circumventing the admin\n     * system imposed by {AccessControl}.\n     * ====\n     *\n     * NOTE: This function is deprecated in favor of {_grantRole}.\n     */\n    function _setupRole(bytes32 role, address account) internal virtual {\n        _grantRole(role, account);\n    }\n\n    /**\n     * @dev Sets `adminRole` as ``role``\'s admin role.\n     *\n     * Emits a {RoleAdminChanged} event.\n     */\n    function _setRoleAdmin(bytes32 role, bytes32 adminRole) internal virtual {\n        bytes32 previousAdminRole = getRoleAdmin(role);\n        _roles[role].adminRole = adminRole;\n        emit RoleAdminChanged(role, previousAdminRole, adminRole);\n    }\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * Internal function without access restriction.\n     */\n    function _grantRole(bytes32 role, address account) internal virtual {\n        if (!hasRole(role, account)) {\n            _roles[role].members[account] = true;\n            emit RoleGranted(role, account, _msgSender());\n        }\n    }\n\n    /**\n     * @dev Revokes `role` from `account`.\n     *\n     * Internal function without access restriction.\n     */\n    function _revokeRole(bytes32 role, address account) internal virtual {\n        if (hasRole(role, account)) {\n            _roles[role].members[account] = false;\n            emit RoleRevoked(role, account, _msgSender());\n        }\n    }\n}\n\n\n// File @openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/extensions/ERC721Burnable.sol)\n\npragma solidity ^0.8.0;\n\n\n/**\n * @title ERC721 Burnable Token\n * @dev ERC721 Token that can be irreversibly burned (destroyed).\n */\nabstract contract ERC721Burnable is Context, ERC721 {\n    /**\n     * @dev Burns `tokenId`. See {ERC721-_burn}.\n     *\n     * Requirements:\n     *\n     * - The caller must own `tokenId` or be an approved operator.\n     */\n    function burn(uint256 tokenId) public virtual {\n        //solhint-disable-next-line max-line-length\n        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721Burnable: caller is not owner nor approved");\n        _burn(tokenId);\n    }\n}\n\n\n// File @openzeppelin/contracts/utils/Counters.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/Counters.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @title Counters\n * @author Matt Condon (@shrugs)\n * @dev Provides counters that can only be incremented, decremented or reset. This can be used e.g. to track the number\n * of elements in a mapping, issuing ERC721 ids, or counting request ids.\n *\n * Include with `using Counters for Counters.Counter;`\n */\nlibrary Counters {\n    struct Counter {\n        // This variable should never be directly accessed by users of the library: interactions must be restricted to\n        // the library\'s function. As of Solidity v0.5.2, this cannot be enforced, though there is a proposal to add\n        // this feature: see https://github.com/ethereum/solidity/issues/4637\n        uint256 _value; // default: 0\n    }\n\n    function current(Counter storage counter) internal view returns (uint256) {\n        return counter._value;\n    }\n\n    function increment(Counter storage counter) internal {\n        unchecked {\n            counter._value += 1;\n        }\n    }\n\n    function decrement(Counter storage counter) internal {\n        uint256 value = counter._value;\n        require(value > 0, "Counter: decrement overflow");\n        unchecked {\n            counter._value = value - 1;\n        }\n    }\n\n    function reset(Counter storage counter) internal {\n        counter._value = 0;\n    }\n}\n\n\n// File contracts/polygon/ChildStartonERC721.sol\n\npragma solidity ^0.8.0;\n\n\n\n\n\n\ncontract ChildStartonERC721 is ERC721Enumerable, ERC721URIStorage, Pausable, AccessControl, ERC721Burnable {\n    using Counters for Counters.Counter;\n\n    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");\n    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");\n    bytes32 public constant DEPOSITOR_ROLE = keccak256("DEPOSITOR_ROLE");\n    bytes32 public constant LOCKER_ROLE = keccak256("LOCKER_ROLE");\n\n    Counters.Counter private _tokenIdCounter;\n    string private _uri;\n    string private _contractUriSuffix;\n    string private _baseContractUri;\n\n    bool private _isMintAllowed;\n\n    mapping (uint256 => bool) public withdrawnTokens;\n\n    // limit batching of tokens due to gas limit restrictions\n    uint256 public constant BATCH_LIMIT = 20;\n\n    event WithdrawnBatch(address indexed user, uint256[] tokenIds);\n    event TransferWithMetadata(address indexed from, address indexed to, uint256 indexed tokenId, bytes metaData);\n\n    constructor(string memory name, string memory symbol, string memory baseUri, string memory contractUriSuffix, address ownerOrMultiSigContract) ERC721(name, symbol) {\n        _setupRole(DEFAULT_ADMIN_ROLE, ownerOrMultiSigContract);\n        _setupRole(PAUSER_ROLE, ownerOrMultiSigContract);\n        _setupRole(MINTER_ROLE, ownerOrMultiSigContract);\n        _setupRole(LOCKER_ROLE, ownerOrMultiSigContract);\n\n        _uri = baseUri;\n        _contractUriSuffix = contractUriSuffix;\n        _baseContractUri = "https://ipfs.io/ipfs/";\n        _isMintAllowed = true;\n    }\n\n    function contractURI() public view returns (string memory) {\n        return bytes(_baseContractUri).length > 0\n            ? string(abi.encodePacked(_baseContractUri, _contractUriSuffix))\n            : \'\';\n    }\n\n    function setBaseContractURI(string memory newBaseContractUri) public {\n        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender));\n        \n        _baseContractUri = newBaseContractUri;\n    }\n\n    function _baseURI() internal view override returns (string memory) {\n        return _uri;\n    }\n\n    function lockMint() public {\n        require(hasRole(LOCKER_ROLE, msg.sender));\n        _isMintAllowed = false;\n    }\n\n    function safeMint(address to, string memory metadataURI) public {\n        require(hasRole(MINTER_ROLE, msg.sender));\n        require(_isMintAllowed);\n\n        _safeMint(to, _tokenIdCounter.current());\n        _setTokenURI(_tokenIdCounter.current(), metadataURI);\n        _tokenIdCounter.increment();\n    }\n\n    function pause() public {\n        require(hasRole(PAUSER_ROLE, msg.sender));\n        _pause();\n    }\n\n    function unpause() public {\n        require(hasRole(PAUSER_ROLE, msg.sender));\n        _unpause();\n    }\n\n    function _beforeTokenTransfer(address from, address to, uint256 tokenId)\n        internal\n        whenNotPaused\n        override(ERC721, ERC721Enumerable)\n    {\n        super._beforeTokenTransfer(from, to, tokenId);\n    }\n\n    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {\n        super._burn(tokenId);\n    }\n\n    function tokenURI(uint256 tokenId)\n        public\n        view\n        override(ERC721, ERC721URIStorage)\n        returns (string memory)\n    {\n        return super.tokenURI(tokenId);\n    }\n\n    function supportsInterface(bytes4 interfaceId)\n        public\n        view\n        override(ERC721, ERC721Enumerable, AccessControl)\n        returns (bool)\n    {\n        return super.supportsInterface(interfaceId);\n    }\n\n    /**\n     * @notice called when token is deposited on root chain\n     * @dev Should be callable only by ChildChainManager\n     * Should handle deposit by minting the required tokenId(s) for user\n     * Should set `withdrawnTokens` mapping to `false` for the tokenId being deposited\n     * Minting can also be done by other functions\n     * @param user user address for whom deposit is being done\n     * @param depositData abi encoded tokenIds. Batch deposit also supported.\n     */\n    function deposit(address user, bytes calldata depositData)\n        external\n    {\n        require(hasRole(DEPOSITOR_ROLE, msg.sender));\n\n        // deposit single\n        if (depositData.length == 32) {\n            uint256 tokenId = abi.decode(depositData, (uint256));\n            withdrawnTokens[tokenId] = false;\n            _mint(user, tokenId);\n\n        // deposit batch\n        } else {\n            uint256[] memory tokenIds = abi.decode(depositData, (uint256[]));\n            uint256 length = tokenIds.length;\n            for (uint256 i; i < length; i++) {\n                withdrawnTokens[tokenIds[i]] = false;\n                _mint(user, tokenIds[i]);\n            }\n        }\n\n    }\n\n    /**\n     * @notice called when user wants to withdraw token back to root chain\n     * @dev Should handle withraw by burning user\'s token.\n     * Should set `withdrawnTokens` mapping to `true` for the tokenId being withdrawn\n     * This transaction will be verified when exiting on root chain\n     * @param tokenId tokenId to withdraw\n     */\n    function withdraw(uint256 tokenId) external {\n        require(_msgSender() == ownerOf(tokenId), "ChildMintableERC721: INVALID_TOKEN_OWNER");\n        withdrawnTokens[tokenId] = true;\n        _burn(tokenId);\n    }\n\n    /**\n     * @notice called when user wants to withdraw multiple tokens back to root chain\n     * @dev Should burn user\'s tokens. This transaction will be verified when exiting on root chain\n     * @param tokenIds tokenId list to withdraw\n     */\n    function withdrawBatch(uint256[] calldata tokenIds) external {\n\n        uint256 length = tokenIds.length;\n        require(length <= BATCH_LIMIT, "ChildMintableERC721: EXCEEDS_BATCH_LIMIT");\n\n        // Iteratively burn ERC721 tokens, for performing\n        // batch withdraw\n        for (uint256 i; i < length; i++) {\n\n            uint256 tokenId = tokenIds[i];\n\n            require(_msgSender() == ownerOf(tokenId), string(abi.encodePacked("ChildMintableERC721: INVALID_TOKEN_OWNER ", tokenId)));\n            withdrawnTokens[tokenId] = true;\n            _burn(tokenId);\n\n        }\n\n        // At last emit this event, which will be used\n        // in MintableERC721 predicate contract on L1\n        // while verifying burn proof\n        emit WithdrawnBatch(_msgSender(), tokenIds);\n\n    }\n\n    /**\n     * @notice called when user wants to withdraw token back to root chain with token URI\n     * @dev Should handle withraw by burning user\'s token.\n     * Should set `withdrawnTokens` mapping to `true` for the tokenId being withdrawn\n     * This transaction will be verified when exiting on root chain\n     *\n     * @param tokenId tokenId to withdraw\n     */\n    function withdrawWithMetadata(uint256 tokenId) external {\n\n        require(_msgSender() == ownerOf(tokenId), "ChildMintableERC721: INVALID_TOKEN_OWNER");\n        withdrawnTokens[tokenId] = true;\n\n        // Encoding metadata associated with tokenId & emitting event\n        emit TransferWithMetadata(ownerOf(tokenId), address(0), tokenId, this.encodeTokenMetadata(tokenId));\n\n        _burn(tokenId);\n\n    }\n\n    /**\n     * @notice This method is supposed to be called by client when withdrawing token with metadata\n     * and pass return value of this function as second paramter of `withdrawWithMetadata` method\n     *\n     * It can be overridden by clients to encode data in a different form, which needs to\n     * be decoded back by them correctly during exiting\n     *\n     * @param tokenId Token for which URI to be fetched\n     */\n    function encodeTokenMetadata(uint256 tokenId) external view virtual returns (bytes memory) {\n\n        // You\'re always free to change this default implementation\n        // and pack more data in byte array which can be decoded back\n        // in L1\n        return abi.encode(tokenURI(tokenId));\n\n    }\n}\n',
      bytecode:
        "0x60806040523480156200001157600080fd5b50604051620034be380380620034be8339810160408190526200003491620003b4565b8451859085906200004d90600090602085019062000241565b5080516200006390600190602084019062000241565b5050600b805460ff19169055506200007d6000826200018d565b620000a97f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a826200018d565b620000d57f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6826200018d565b620001017faf9a8bb3cbd6b84fbccefa71ff73e26e798553c6914585a84886212a46a90279826200018d565b82516200011690600e90602086019062000241565b5081516200012c90600f90602085019062000241565b506040805180820190915260158082527f68747470733a2f2f697066732e696f2f697066732f00000000000000000000006020909201918252620001739160109162000241565b50506011805460ff1916600117905550620004ce92505050565b6200019982826200019d565b5050565b6000828152600c602090815260408083206001600160a01b038516845290915290205460ff1662000199576000828152600c602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620001fd3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b8280546200024f9062000491565b90600052602060002090601f016020900481019282620002735760008555620002be565b82601f106200028e57805160ff1916838001178555620002be565b82800160010185558215620002be579182015b82811115620002be578251825591602001919060010190620002a1565b50620002cc929150620002d0565b5090565b5b80821115620002cc5760008155600101620002d1565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200030f57600080fd5b81516001600160401b03808211156200032c576200032c620002e7565b604051601f8301601f19908116603f01168101908282118183101715620003575762000357620002e7565b816040528381526020925086838588010111156200037457600080fd5b600091505b8382101562000398578582018301518183018401529082019062000379565b83821115620003aa5760008385830101525b9695505050505050565b600080600080600060a08688031215620003cd57600080fd5b85516001600160401b0380821115620003e557600080fd5b620003f389838a01620002fd565b965060208801519150808211156200040a57600080fd5b6200041889838a01620002fd565b955060408801519150808211156200042f57600080fd5b6200043d89838a01620002fd565b945060608801519150808211156200045457600080fd5b506200046388828901620002fd565b608088015190935090506001600160a01b03811681146200048357600080fd5b809150509295509295909350565b600181811c90821680620004a657607f821691505b60208210811415620004c857634e487b7160e01b600052602260045260246000fd5b50919050565b612fe080620004de6000396000f3fe608060405234801561001057600080fd5b50600436106102535760003560e01c806370a0823111610146578063b88d4fde116100c3578063d547741f11610087578063d547741f1461052a578063e0b6bb671461053d578063e63ab1e914610545578063e8a3d4851461056c578063e985e9c514610574578063f3621367146105b057600080fd5b8063b88d4fde146104b7578063c87b56dd146104ca578063cf2c52cb146104dd578063d204c45e146104f0578063d53913931461050357600080fd5b80639c8d41561161010a5780639c8d41561461044f578063a217fddf14610462578063a22cb4651461046a578063a3b0b5a31461047d578063a5e584dc146104a457600080fd5b806370a08231146104115780638456cb591461042457806391d148541461042c5780639559c0bd1461043f57806395d89b411461044757600080fd5b80632e1a7d4d116101d457806342842e0e1161019857806342842e0e146103ba57806342966c68146103cd5780634f6ccce7146103e05780635c975abb146103f35780636352211e146103fe57600080fd5b80632e1a7d4d146103665780632f2ff15d146103795780632f745c591461038c57806336568abe1461039f5780633f4ba83a146103b257600080fd5b80630cd3a5381161021b5780630cd3a538146102f85780631653c39a1461030b57806318160ddd1461031e57806323b872dd14610330578063248a9ca31461034357600080fd5b806301ffc9a71461025857806306fdde031461028057806307a974fc14610295578063081812fc146102b8578063095ea7b3146102e3575b600080fd5b61026b6102663660046125ea565b6105d7565b60405190151581526020015b60405180910390f35b6102886105e8565b604051610277919061265f565b61026b6102a3366004612672565b60126020526000908152604090205460ff1681565b6102cb6102c6366004612672565b61067a565b6040516001600160a01b039091168152602001610277565b6102f66102f13660046126a7565b610707565b005b6102f661030636600461279e565b61081d565b610288610319366004612672565b610848565b6008545b604051908152602001610277565b6102f661033e3660046127d3565b610879565b610322610351366004612672565b6000908152600c602052604090206001015490565b6102f6610374366004612672565b6108ab565b6102f661038736600461280f565b610909565b61032261039a3660046126a7565b61092f565b6102f66103ad36600461280f565b6109c5565b6102f6610a3f565b6102f66103c83660046127d3565b610a7c565b6102f66103db366004612672565b610a97565b6103226103ee366004612672565b610b0e565b600b5460ff1661026b565b6102cb61040c366004612672565b610ba1565b61032261041f36600461283b565b610c18565b6102f6610c9f565b61026b61043a36600461280f565b610cda565b610322601481565b610288610d05565b6102f661045d366004612856565b610d14565b610322600081565b6102f66104783660046128cb565b610eb7565b6103227f8f4f2da22e8ac8f11e15f9fc141cddbb5deea8800186560abb6e68c5496619a981565b6102f66104b2366004612672565b610ec2565b6102f66104c5366004612907565b610fe9565b6102886104d8366004612672565b611021565b6102f66104eb366004612983565b61102c565b6102f66104fe366004612a06565b611138565b6103227f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6102f661053836600461280f565b6111ac565b6102f66111d2565b6103227f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b610288611211565b61026b610582366004612a54565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6103227faf9a8bb3cbd6b84fbccefa71ff73e26e798553c6914585a84886212a46a9027981565b60006105e282611265565b92915050565b6060600080546105f790612a7e565b80601f016020809104026020016040519081016040528092919081815260200182805461062390612a7e565b80156106705780601f1061064557610100808354040283529160200191610670565b820191906000526020600020905b81548152906001019060200180831161065357829003601f168201915b5050505050905090565b60006106858261128a565b6106eb5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061071282610ba1565b9050806001600160a01b0316836001600160a01b031614156107805760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016106e2565b336001600160a01b038216148061079c575061079c8133610582565b61080e5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016106e2565b61081883836112a7565b505050565b610828600033610cda565b61083157600080fd5b8051610844906010906020840190612505565b5050565b606061085382611021565b604051602001610863919061265f565b6040516020818303038152906040529050919050565b610884335b82611315565b6108a05760405162461bcd60e51b81526004016106e290612ab9565b6108188383836113ff565b6108b481610ba1565b6001600160a01b0316336001600160a01b0316146108e45760405162461bcd60e51b81526004016106e290612b0a565b6000818152601260205260409020805460ff19166001179055610906816115a6565b50565b6000828152600c602052604090206001015461092581336115af565b6108188383611613565b600061093a83610c18565b821061099c5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b60648201526084016106e2565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b6001600160a01b0381163314610a355760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016106e2565b6108448282611699565b610a697f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610cda565b610a7257600080fd5b610a7a611700565b565b61081883838360405180602001604052806000815250610fe9565b610aa03361087e565b610b055760405162461bcd60e51b815260206004820152603060248201527f4552433732314275726e61626c653a2063616c6c6572206973206e6f74206f7760448201526f1b995c881b9bdc88185c1c1c9bdd995960821b60648201526084016106e2565b610906816115a6565b6000610b1960085490565b8210610b7c5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b60648201526084016106e2565b60088281548110610b8f57610b8f612b52565b90600052602060002001549050919050565b6000818152600260205260408120546001600160a01b0316806105e25760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016106e2565b60006001600160a01b038216610c835760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016106e2565b506001600160a01b031660009081526003602052604090205490565b610cc97f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610cda565b610cd257600080fd5b610a7a611793565b6000918252600c602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600180546105f790612a7e565b806014811115610d775760405162461bcd60e51b815260206004820152602860248201527f4368696c644d696e7461626c654552433732313a20455843454544535f42415460448201526710d217d31253525560c21b60648201526084016106e2565b60005b81811015610e6e576000848483818110610d9657610d96612b52565b905060200201359050610da881610ba1565b6001600160a01b0316336001600160a01b03161481604051602001610e0b91907f4368696c644d696e7461626c654552433732313a20494e56414c49445f544f4b815268022a72fa7aba722a9160bd1b6020820152602981019190915260490190565b60405160208183030381529060405290610e385760405162461bcd60e51b81526004016106e2919061265f565b506000818152601260205260409020805460ff19166001179055610e5b816115a6565b5080610e6681612b7e565b915050610d7a565b50336001600160a01b03167ff871896b17e9cb7a64941c62c188a4f5c621b86800e3d15452ece01ce56073df8484604051610eaa929190612b99565b60405180910390a2505050565b61084433838361180e565b610ecb81610ba1565b6001600160a01b0316336001600160a01b031614610efb5760405162461bcd60e51b81526004016106e290612b0a565b6000818152601260205260408120805460ff191660011790558190610f1f82610ba1565b6001600160a01b03167ff94915c6d1fd521cee85359239227480c7e8776d7caf1fc3bacad5c269b66a14306001600160a01b0316631653c39a866040518263ffffffff1660e01b8152600401610f7791815260200190565b60006040518083038186803b158015610f8f57600080fd5b505afa158015610fa3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610fcb9190810190612bd5565b604051610fd8919061265f565b60405180910390a4610906816115a6565b610ff33383611315565b61100f5760405162461bcd60e51b81526004016106e290612ab9565b61101b848484846118dd565b50505050565b60606105e282611910565b6110567f8f4f2da22e8ac8f11e15f9fc141cddbb5deea8800186560abb6e68c5496619a933610cda565b61105f57600080fd5b602081141561109857600061107682840184612672565b6000818152601260205260409020805460ff19169055905061101b8482611a72565b60006110a682840184612c4c565b805190915060005b81811015611130576000601260008584815181106110ce576110ce612b52565b6020026020010151815260200190815260200160002060006101000a81548160ff02191690831515021790555061111e8684838151811061111157611111612b52565b6020026020010151611a72565b8061112881612b7e565b9150506110ae565b505050505050565b6111627f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610cda565b61116b57600080fd5b60115460ff1661117a57600080fd5b61118c82611187600d5490565b611bb1565b61119e611198600d5490565b82611bcb565b610844600d80546001019055565b6000828152600c60205260409020600101546111c881336115af565b6108188383611699565b6111fc7faf9a8bb3cbd6b84fbccefa71ff73e26e798553c6914585a84886212a46a9027933610cda565b61120557600080fd5b6011805460ff19169055565b606060006010805461122290612a7e565b90501161123c575060408051602081019091526000815290565b6010600f604051602001611251929190612d8c565b604051602081830303815290604052905090565b60006001600160e01b03198216637965db0b60e01b14806105e257506105e282611c56565b6000908152600260205260409020546001600160a01b0316151590565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906112dc82610ba1565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006113208261128a565b6113815760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016106e2565b600061138c83610ba1565b9050806001600160a01b0316846001600160a01b031614806113c75750836001600160a01b03166113bc8461067a565b6001600160a01b0316145b806113f757506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b031661141282610ba1565b6001600160a01b0316146114765760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b60648201526084016106e2565b6001600160a01b0382166114d85760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016106e2565b6114e3838383611c7b565b6114ee6000826112a7565b6001600160a01b0383166000908152600360205260408120805460019290611517908490612da1565b90915550506001600160a01b0382166000908152600360205260408120805460019290611545908490612db8565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b61090681611ccc565b6115b98282610cda565b610844576115d1816001600160a01b03166014611d0c565b6115dc836020611d0c565b6040516020016115ed929190612dd0565b60408051601f198184030181529082905262461bcd60e51b82526106e29160040161265f565b61161d8282610cda565b610844576000828152600c602090815260408083206001600160a01b03851684529091529020805460ff191660011790556116553390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6116a38282610cda565b15610844576000828152600c602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b600b5460ff166117495760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016106e2565b600b805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600b5460ff16156117d95760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016106e2565b600b805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586117763390565b816001600160a01b0316836001600160a01b031614156118705760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016106e2565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6118e88484846113ff565b6118f484848484611eaf565b61101b5760405162461bcd60e51b81526004016106e290612e45565b606061191b8261128a565b6119815760405162461bcd60e51b815260206004820152603160248201527f45524337323155524953746f726167653a2055524920717565727920666f72206044820152703737b732bc34b9ba32b73a103a37b5b2b760791b60648201526084016106e2565b6000828152600a60205260408120805461199a90612a7e565b80601f01602080910402602001604051908101604052809291908181526020018280546119c690612a7e565b8015611a135780601f106119e857610100808354040283529160200191611a13565b820191906000526020600020905b8154815290600101906020018083116119f657829003601f168201915b505050505090506000611a24611fbc565b9050805160001415611a37575092915050565b815115611a69578082604051602001611a51929190612e97565b60405160208183030381529060405292505050919050565b6113f784611fcb565b6001600160a01b038216611ac85760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016106e2565b611ad18161128a565b15611b1e5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016106e2565b611b2a60008383611c7b565b6001600160a01b0382166000908152600360205260408120805460019290611b53908490612db8565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b610844828260405180602001604052806000815250612095565b611bd48261128a565b611c375760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b60648201526084016106e2565b6000828152600a60209081526040909120825161081892840190612505565b60006001600160e01b0319821663780e9d6360e01b14806105e257506105e2826120c8565b600b5460ff1615611cc15760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016106e2565b610818838383612118565b611cd5816121d0565b6000818152600a602052604090208054611cee90612a7e565b159050610906576000818152600a6020526040812061090691612589565b60606000611d1b836002612ec6565b611d26906002612db8565b67ffffffffffffffff811115611d3e57611d3e6126d1565b6040519080825280601f01601f191660200182016040528015611d68576020820181803683370190505b509050600360fc1b81600081518110611d8357611d83612b52565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611db257611db2612b52565b60200101906001600160f81b031916908160001a9053506000611dd6846002612ec6565b611de1906001612db8565b90505b6001811115611e59576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611e1557611e15612b52565b1a60f81b828281518110611e2b57611e2b612b52565b60200101906001600160f81b031916908160001a90535060049490941c93611e5281612ee5565b9050611de4565b508315611ea85760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016106e2565b9392505050565b60006001600160a01b0384163b15611fb157604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611ef3903390899088908890600401612efc565b602060405180830381600087803b158015611f0d57600080fd5b505af1925050508015611f3d575060408051601f3d908101601f19168201909252611f3a91810190612f39565b60015b611f97573d808015611f6b576040519150601f19603f3d011682016040523d82523d6000602084013e611f70565b606091505b508051611f8f5760405162461bcd60e51b81526004016106e290612e45565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506113f7565b506001949350505050565b6060600e80546105f790612a7e565b6060611fd68261128a565b61203a5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b60648201526084016106e2565b6000612044611fbc565b905060008151116120645760405180602001604052806000815250611ea8565b8061206e84612277565b60405160200161207f929190612e97565b6040516020818303038152906040529392505050565b61209f8383611a72565b6120ac6000848484611eaf565b6108185760405162461bcd60e51b81526004016106e290612e45565b60006001600160e01b031982166380ac58cd60e01b14806120f957506001600160e01b03198216635b5e139f60e01b145b806105e257506301ffc9a760e01b6001600160e01b03198316146105e2565b6001600160a01b0383166121735761216e81600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b612196565b816001600160a01b0316836001600160a01b031614612196576121968382612375565b6001600160a01b0382166121ad5761081881612412565b826001600160a01b0316826001600160a01b0316146108185761081882826124c1565b60006121db82610ba1565b90506121e981600084611c7b565b6121f46000836112a7565b6001600160a01b038116600090815260036020526040812080546001929061221d908490612da1565b909155505060008281526002602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60608161229b5750506040805180820190915260018152600360fc1b602082015290565b8160005b81156122c557806122af81612b7e565b91506122be9050600a83612f6c565b915061229f565b60008167ffffffffffffffff8111156122e0576122e06126d1565b6040519080825280601f01601f19166020018201604052801561230a576020820181803683370190505b5090505b84156113f75761231f600183612da1565b915061232c600a86612f80565b612337906030612db8565b60f81b81838151811061234c5761234c612b52565b60200101906001600160f81b031916908160001a90535061236e600a86612f6c565b945061230e565b6000600161238284610c18565b61238c9190612da1565b6000838152600760205260409020549091508082146123df576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b60085460009061242490600190612da1565b6000838152600960205260408120546008805493945090928490811061244c5761244c612b52565b90600052602060002001549050806008838154811061246d5761246d612b52565b60009182526020808320909101929092558281526009909152604080822084905585825281205560088054806124a5576124a5612f94565b6001900381819060005260206000200160009055905550505050565b60006124cc83610c18565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b82805461251190612a7e565b90600052602060002090601f0160209004810192826125335760008555612579565b82601f1061254c57805160ff1916838001178555612579565b82800160010185558215612579579182015b8281111561257957825182559160200191906001019061255e565b506125859291506125bf565b5090565b50805461259590612a7e565b6000825580601f106125a5575050565b601f01602090049060005260206000209081019061090691905b5b8082111561258557600081556001016125c0565b6001600160e01b03198116811461090657600080fd5b6000602082840312156125fc57600080fd5b8135611ea8816125d4565b60005b8381101561262257818101518382015260200161260a565b8381111561101b5750506000910152565b6000815180845261264b816020860160208601612607565b601f01601f19169290920160200192915050565b602081526000611ea86020830184612633565b60006020828403121561268457600080fd5b5035919050565b80356001600160a01b03811681146126a257600080fd5b919050565b600080604083850312156126ba57600080fd5b6126c38361268b565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715612710576127106126d1565b604052919050565b600067ffffffffffffffff821115612732576127326126d1565b50601f01601f191660200190565b600061275361274e84612718565b6126e7565b905082815283838301111561276757600080fd5b828260208301376000602084830101529392505050565b600082601f83011261278f57600080fd5b611ea883833560208501612740565b6000602082840312156127b057600080fd5b813567ffffffffffffffff8111156127c757600080fd5b6113f78482850161277e565b6000806000606084860312156127e857600080fd5b6127f18461268b565b92506127ff6020850161268b565b9150604084013590509250925092565b6000806040838503121561282257600080fd5b823591506128326020840161268b565b90509250929050565b60006020828403121561284d57600080fd5b611ea88261268b565b6000806020838503121561286957600080fd5b823567ffffffffffffffff8082111561288157600080fd5b818501915085601f83011261289557600080fd5b8135818111156128a457600080fd5b8660208260051b85010111156128b957600080fd5b60209290920196919550909350505050565b600080604083850312156128de57600080fd5b6128e78361268b565b9150602083013580151581146128fc57600080fd5b809150509250929050565b6000806000806080858703121561291d57600080fd5b6129268561268b565b93506129346020860161268b565b925060408501359150606085013567ffffffffffffffff81111561295757600080fd5b8501601f8101871361296857600080fd5b61297787823560208401612740565b91505092959194509250565b60008060006040848603121561299857600080fd5b6129a18461268b565b9250602084013567ffffffffffffffff808211156129be57600080fd5b818601915086601f8301126129d257600080fd5b8135818111156129e157600080fd5b8760208285010111156129f357600080fd5b6020830194508093505050509250925092565b60008060408385031215612a1957600080fd5b612a228361268b565b9150602083013567ffffffffffffffff811115612a3e57600080fd5b612a4a8582860161277e565b9150509250929050565b60008060408385031215612a6757600080fd5b612a708361268b565b91506128326020840161268b565b600181811c90821680612a9257607f821691505b60208210811415612ab357634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60208082526028908201527f4368696c644d696e7461626c654552433732313a20494e56414c49445f544f4b60408201526722a72fa7aba722a960c11b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415612b9257612b92612b68565b5060010190565b6020808252810182905260006001600160fb1b03831115612bb957600080fd5b8260051b80856040850137600092016040019182525092915050565b600060208284031215612be757600080fd5b815167ffffffffffffffff811115612bfe57600080fd5b8201601f81018413612c0f57600080fd5b8051612c1d61274e82612718565b818152856020838501011115612c3257600080fd5b612c43826020830160208601612607565b95945050505050565b60006020808385031215612c5f57600080fd5b823567ffffffffffffffff80821115612c7757600080fd5b818501915085601f830112612c8b57600080fd5b813581811115612c9d57612c9d6126d1565b8060051b9150612cae8483016126e7565b8181529183018401918481019088841115612cc857600080fd5b938501935b83851015612ce657843582529385019390850190612ccd565b98975050505050505050565b8054600090600181811c9080831680612d0c57607f831692505b6020808410821415612d2e57634e487b7160e01b600052602260045260246000fd5b818015612d425760018114612d5357612d80565b60ff19861689528489019650612d80565b60008881526020902060005b86811015612d785781548b820152908501908301612d5f565b505084890196505b50505050505092915050565b60006113f7612d9b8386612cf2565b84612cf2565b600082821015612db357612db3612b68565b500390565b60008219821115612dcb57612dcb612b68565b500190565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351612e08816017850160208801612607565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351612e39816028840160208801612607565b01602801949350505050565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60008351612ea9818460208801612607565b835190830190612ebd818360208801612607565b01949350505050565b6000816000190483118215151615612ee057612ee0612b68565b500290565b600081612ef457612ef4612b68565b506000190190565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090612f2f90830184612633565b9695505050505050565b600060208284031215612f4b57600080fd5b8151611ea8816125d4565b634e487b7160e01b600052601260045260246000fd5b600082612f7b57612f7b612f56565b500490565b600082612f8f57612f8f612f56565b500690565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220b215bc7302863311acfb06401f44df71fb8380bbb3c292bbcf2cc26ccb51e70264736f6c63430008090033",
      contractName: "ChildStartonERC721",
      compilerVersion: "v0.8.9+commit.e5eed63a",
      optimizationUsed: true,
    },
    isActivated: true,
    isAudited: false,
    order: 95,
    tags: [SmartContractTemplateCategories.DEPRECATED],
    category: SmartContractTemplateCategories.DEPRECATED,
  },
  {
    id: "sct_81d50607677241beac764bfadd31a3a7",
    name: "Fungible Token with fixed supply (ERC20)",
    description:
      "<p>The ERC20 is a smart contract standard made for fungible tokens (i.e: interchangeable tokens like coins). The fixed supply version of this standard guarantees no token will ever be created after the initial emission. Therefore some flexibility is sacrificed for the sake of more trust towards the token.</p> <p>Parameters :</p> <ul> <li><strong>Name</strong> : This is the name of your smart contract which will be reflected on-chain.</li> <li><strong>Symbol</strong> : This is the symbol associated to the NFT collection</li> <li><strong>Initial Supply</strong> : Initial amount of token emitted at the smart contract creation. You should add 18 trailing zeros to compensate the number of digits reserved to decimals.</li> </ul>",
    shortDescription:
      "The smart contract template for fungible tokens. No new token can be created after the initial emission. The smart contract template for fungible tokens. No new token can be created after the initial emission.",
    blockchains: ["polygon", "avalanche", "binance", "ethereum"],
    abi: [
      {
        type: "constructor",
        inputs: [
          {
            name: "name",
            type: "string",
            internalType: "string",
          },
          {
            name: "symbol",
            type: "string",
            internalType: "string",
          },
          {
            name: "initialSupply",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "ownerOrMultiSigContract",
            type: "address",
            internalType: "address",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "Approval",
        type: "event",
        inputs: [
          {
            name: "owner",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "spender",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "value",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        name: "Paused",
        type: "event",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: false,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "RoleAdminChanged",
        type: "event",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "previousAdminRole",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "newAdminRole",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
        ],
        anonymous: false,
      },
      {
        name: "RoleGranted",
        type: "event",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "sender",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "RoleRevoked",
        type: "event",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "sender",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "Transfer",
        type: "event",
        inputs: [
          {
            name: "from",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "value",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        name: "Unpaused",
        type: "event",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: false,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "DEFAULT_ADMIN_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "PAUSER_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "allowance",
        type: "function",
        inputs: [
          {
            name: "owner",
            type: "address",
            internalType: "address",
          },
          {
            name: "spender",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "approve",
        type: "function",
        inputs: [
          {
            name: "spender",
            type: "address",
            internalType: "address",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "balanceOf",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "burn",
        type: "function",
        inputs: [
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "burnFrom",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "decimals",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "uint8",
            internalType: "uint8",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "decreaseAllowance",
        type: "function",
        inputs: [
          {
            name: "spender",
            type: "address",
            internalType: "address",
          },
          {
            name: "subtractedValue",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "getRoleAdmin",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "grantRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "hasRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "increaseAllowance",
        type: "function",
        inputs: [
          {
            name: "spender",
            type: "address",
            internalType: "address",
          },
          {
            name: "addedValue",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "name",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "string",
            internalType: "string",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "pause",
        type: "function",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "paused",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "renounceRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "revokeRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "supportsInterface",
        type: "function",
        inputs: [
          {
            name: "interfaceId",
            type: "bytes4",
            internalType: "bytes4",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "symbol",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "string",
            internalType: "string",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "totalSupply",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "transfer",
        type: "function",
        inputs: [
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "transferFrom",
        type: "function",
        inputs: [
          {
            name: "from",
            type: "address",
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "unpause",
        type: "function",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
    ],
    compilationDetails: {
      runs: 200,
      source:
        '// Sources flattened with hardhat v2.9.1 https://hardhat.org\n\n// File @openzeppelin/contracts/token/ERC20/IERC20.sol@v4.5.0\n\n// SPDX-License-Identifier: MIT\n// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC20/IERC20.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Interface of the ERC20 standard as defined in the EIP.\n */\ninterface IERC20 {\n    /**\n     * @dev Returns the amount of tokens in existence.\n     */\n    function totalSupply() external view returns (uint256);\n\n    /**\n     * @dev Returns the amount of tokens owned by `account`.\n     */\n    function balanceOf(address account) external view returns (uint256);\n\n    /**\n     * @dev Moves `amount` tokens from the caller\'s account to `to`.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * Emits a {Transfer} event.\n     */\n    function transfer(address to, uint256 amount) external returns (bool);\n\n    /**\n     * @dev Returns the remaining number of tokens that `spender` will be\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\n     * zero by default.\n     *\n     * This value changes when {approve} or {transferFrom} are called.\n     */\n    function allowance(address owner, address spender) external view returns (uint256);\n\n    /**\n     * @dev Sets `amount` as the allowance of `spender` over the caller\'s tokens.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\n     * that someone may use both the old and the new allowance by unfortunate\n     * transaction ordering. One possible solution to mitigate this race\n     * condition is to first reduce the spender\'s allowance to 0 and set the\n     * desired value afterwards:\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n     *\n     * Emits an {Approval} event.\n     */\n    function approve(address spender, uint256 amount) external returns (bool);\n\n    /**\n     * @dev Moves `amount` tokens from `from` to `to` using the\n     * allowance mechanism. `amount` is then deducted from the caller\'s\n     * allowance.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * Emits a {Transfer} event.\n     */\n    function transferFrom(\n        address from,\n        address to,\n        uint256 amount\n    ) external returns (bool);\n\n    /**\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\n     * another (`to`).\n     *\n     * Note that `value` may be zero.\n     */\n    event Transfer(address indexed from, address indexed to, uint256 value);\n\n    /**\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\n     * a call to {approve}. `value` is the new allowance.\n     */\n    event Approval(address indexed owner, address indexed spender, uint256 value);\n}\n\n\n// File @openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (token/ERC20/extensions/IERC20Metadata.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Interface for the optional metadata functions from the ERC20 standard.\n *\n * _Available since v4.1._\n */\ninterface IERC20Metadata is IERC20 {\n    /**\n     * @dev Returns the name of the token.\n     */\n    function name() external view returns (string memory);\n\n    /**\n     * @dev Returns the symbol of the token.\n     */\n    function symbol() external view returns (string memory);\n\n    /**\n     * @dev Returns the decimals places of the token.\n     */\n    function decimals() external view returns (uint8);\n}\n\n\n// File @openzeppelin/contracts/utils/Context.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Provides information about the current execution context, including the\n * sender of the transaction and its data. While these are generally available\n * via msg.sender and msg.data, they should not be accessed in such a direct\n * manner, since when dealing with meta-transactions the account sending and\n * paying for execution may not be the actual sender (as far as an application\n * is concerned).\n *\n * This contract is only required for intermediate, library-like contracts.\n */\nabstract contract Context {\n    function _msgSender() internal view virtual returns (address) {\n        return msg.sender;\n    }\n\n    function _msgData() internal view virtual returns (bytes calldata) {\n        return msg.data;\n    }\n}\n\n\n// File @openzeppelin/contracts/token/ERC20/ERC20.sol@v4.5.0\n\n// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC20/ERC20.sol)\n\npragma solidity ^0.8.0;\n\n\n\n/**\n * @dev Implementation of the {IERC20} interface.\n *\n * This implementation is agnostic to the way tokens are created. This means\n * that a supply mechanism has to be added in a derived contract using {_mint}.\n * For a generic mechanism see {ERC20PresetMinterPauser}.\n *\n * TIP: For a detailed writeup see our guide\n * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How\n * to implement supply mechanisms].\n *\n * We have followed general OpenZeppelin Contracts guidelines: functions revert\n * instead returning `false` on failure. This behavior is nonetheless\n * conventional and does not conflict with the expectations of ERC20\n * applications.\n *\n * Additionally, an {Approval} event is emitted on calls to {transferFrom}.\n * This allows applications to reconstruct the allowance for all accounts just\n * by listening to said events. Other implementations of the EIP may not emit\n * these events, as it isn\'t required by the specification.\n *\n * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}\n * functions have been added to mitigate the well-known issues around setting\n * allowances. See {IERC20-approve}.\n */\ncontract ERC20 is Context, IERC20, IERC20Metadata {\n    mapping(address => uint256) private _balances;\n\n    mapping(address => mapping(address => uint256)) private _allowances;\n\n    uint256 private _totalSupply;\n\n    string private _name;\n    string private _symbol;\n\n    /**\n     * @dev Sets the values for {name} and {symbol}.\n     *\n     * The default value of {decimals} is 18. To select a different value for\n     * {decimals} you should overload it.\n     *\n     * All two of these values are immutable: they can only be set once during\n     * construction.\n     */\n    constructor(string memory name_, string memory symbol_) {\n        _name = name_;\n        _symbol = symbol_;\n    }\n\n    /**\n     * @dev Returns the name of the token.\n     */\n    function name() public view virtual override returns (string memory) {\n        return _name;\n    }\n\n    /**\n     * @dev Returns the symbol of the token, usually a shorter version of the\n     * name.\n     */\n    function symbol() public view virtual override returns (string memory) {\n        return _symbol;\n    }\n\n    /**\n     * @dev Returns the number of decimals used to get its user representation.\n     * For example, if `decimals` equals `2`, a balance of `505` tokens should\n     * be displayed to a user as `5.05` (`505 / 10 ** 2`).\n     *\n     * Tokens usually opt for a value of 18, imitating the relationship between\n     * Ether and Wei. This is the value {ERC20} uses, unless this function is\n     * overridden;\n     *\n     * NOTE: This information is only used for _display_ purposes: it in\n     * no way affects any of the arithmetic of the contract, including\n     * {IERC20-balanceOf} and {IERC20-transfer}.\n     */\n    function decimals() public view virtual override returns (uint8) {\n        return 18;\n    }\n\n    /**\n     * @dev See {IERC20-totalSupply}.\n     */\n    function totalSupply() public view virtual override returns (uint256) {\n        return _totalSupply;\n    }\n\n    /**\n     * @dev See {IERC20-balanceOf}.\n     */\n    function balanceOf(address account) public view virtual override returns (uint256) {\n        return _balances[account];\n    }\n\n    /**\n     * @dev See {IERC20-transfer}.\n     *\n     * Requirements:\n     *\n     * - `to` cannot be the zero address.\n     * - the caller must have a balance of at least `amount`.\n     */\n    function transfer(address to, uint256 amount) public virtual override returns (bool) {\n        address owner = _msgSender();\n        _transfer(owner, to, amount);\n        return true;\n    }\n\n    /**\n     * @dev See {IERC20-allowance}.\n     */\n    function allowance(address owner, address spender) public view virtual override returns (uint256) {\n        return _allowances[owner][spender];\n    }\n\n    /**\n     * @dev See {IERC20-approve}.\n     *\n     * NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on\n     * `transferFrom`. This is semantically equivalent to an infinite approval.\n     *\n     * Requirements:\n     *\n     * - `spender` cannot be the zero address.\n     */\n    function approve(address spender, uint256 amount) public virtual override returns (bool) {\n        address owner = _msgSender();\n        _approve(owner, spender, amount);\n        return true;\n    }\n\n    /**\n     * @dev See {IERC20-transferFrom}.\n     *\n     * Emits an {Approval} event indicating the updated allowance. This is not\n     * required by the EIP. See the note at the beginning of {ERC20}.\n     *\n     * NOTE: Does not update the allowance if the current allowance\n     * is the maximum `uint256`.\n     *\n     * Requirements:\n     *\n     * - `from` and `to` cannot be the zero address.\n     * - `from` must have a balance of at least `amount`.\n     * - the caller must have allowance for ``from``\'s tokens of at least\n     * `amount`.\n     */\n    function transferFrom(\n        address from,\n        address to,\n        uint256 amount\n    ) public virtual override returns (bool) {\n        address spender = _msgSender();\n        _spendAllowance(from, spender, amount);\n        _transfer(from, to, amount);\n        return true;\n    }\n\n    /**\n     * @dev Atomically increases the allowance granted to `spender` by the caller.\n     *\n     * This is an alternative to {approve} that can be used as a mitigation for\n     * problems described in {IERC20-approve}.\n     *\n     * Emits an {Approval} event indicating the updated allowance.\n     *\n     * Requirements:\n     *\n     * - `spender` cannot be the zero address.\n     */\n    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {\n        address owner = _msgSender();\n        _approve(owner, spender, _allowances[owner][spender] + addedValue);\n        return true;\n    }\n\n    /**\n     * @dev Atomically decreases the allowance granted to `spender` by the caller.\n     *\n     * This is an alternative to {approve} that can be used as a mitigation for\n     * problems described in {IERC20-approve}.\n     *\n     * Emits an {Approval} event indicating the updated allowance.\n     *\n     * Requirements:\n     *\n     * - `spender` cannot be the zero address.\n     * - `spender` must have allowance for the caller of at least\n     * `subtractedValue`.\n     */\n    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {\n        address owner = _msgSender();\n        uint256 currentAllowance = _allowances[owner][spender];\n        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");\n        unchecked {\n            _approve(owner, spender, currentAllowance - subtractedValue);\n        }\n\n        return true;\n    }\n\n    /**\n     * @dev Moves `amount` of tokens from `sender` to `recipient`.\n     *\n     * This internal function is equivalent to {transfer}, and can be used to\n     * e.g. implement automatic token fees, slashing mechanisms, etc.\n     *\n     * Emits a {Transfer} event.\n     *\n     * Requirements:\n     *\n     * - `from` cannot be the zero address.\n     * - `to` cannot be the zero address.\n     * - `from` must have a balance of at least `amount`.\n     */\n    function _transfer(\n        address from,\n        address to,\n        uint256 amount\n    ) internal virtual {\n        require(from != address(0), "ERC20: transfer from the zero address");\n        require(to != address(0), "ERC20: transfer to the zero address");\n\n        _beforeTokenTransfer(from, to, amount);\n\n        uint256 fromBalance = _balances[from];\n        require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");\n        unchecked {\n            _balances[from] = fromBalance - amount;\n        }\n        _balances[to] += amount;\n\n        emit Transfer(from, to, amount);\n\n        _afterTokenTransfer(from, to, amount);\n    }\n\n    /** @dev Creates `amount` tokens and assigns them to `account`, increasing\n     * the total supply.\n     *\n     * Emits a {Transfer} event with `from` set to the zero address.\n     *\n     * Requirements:\n     *\n     * - `account` cannot be the zero address.\n     */\n    function _mint(address account, uint256 amount) internal virtual {\n        require(account != address(0), "ERC20: mint to the zero address");\n\n        _beforeTokenTransfer(address(0), account, amount);\n\n        _totalSupply += amount;\n        _balances[account] += amount;\n        emit Transfer(address(0), account, amount);\n\n        _afterTokenTransfer(address(0), account, amount);\n    }\n\n    /**\n     * @dev Destroys `amount` tokens from `account`, reducing the\n     * total supply.\n     *\n     * Emits a {Transfer} event with `to` set to the zero address.\n     *\n     * Requirements:\n     *\n     * - `account` cannot be the zero address.\n     * - `account` must have at least `amount` tokens.\n     */\n    function _burn(address account, uint256 amount) internal virtual {\n        require(account != address(0), "ERC20: burn from the zero address");\n\n        _beforeTokenTransfer(account, address(0), amount);\n\n        uint256 accountBalance = _balances[account];\n        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");\n        unchecked {\n            _balances[account] = accountBalance - amount;\n        }\n        _totalSupply -= amount;\n\n        emit Transfer(account, address(0), amount);\n\n        _afterTokenTransfer(account, address(0), amount);\n    }\n\n    /**\n     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.\n     *\n     * This internal function is equivalent to `approve`, and can be used to\n     * e.g. set automatic allowances for certain subsystems, etc.\n     *\n     * Emits an {Approval} event.\n     *\n     * Requirements:\n     *\n     * - `owner` cannot be the zero address.\n     * - `spender` cannot be the zero address.\n     */\n    function _approve(\n        address owner,\n        address spender,\n        uint256 amount\n    ) internal virtual {\n        require(owner != address(0), "ERC20: approve from the zero address");\n        require(spender != address(0), "ERC20: approve to the zero address");\n\n        _allowances[owner][spender] = amount;\n        emit Approval(owner, spender, amount);\n    }\n\n    /**\n     * @dev Spend `amount` form the allowance of `owner` toward `spender`.\n     *\n     * Does not update the allowance amount in case of infinite allowance.\n     * Revert if not enough allowance is available.\n     *\n     * Might emit an {Approval} event.\n     */\n    function _spendAllowance(\n        address owner,\n        address spender,\n        uint256 amount\n    ) internal virtual {\n        uint256 currentAllowance = allowance(owner, spender);\n        if (currentAllowance != type(uint256).max) {\n            require(currentAllowance >= amount, "ERC20: insufficient allowance");\n            unchecked {\n                _approve(owner, spender, currentAllowance - amount);\n            }\n        }\n    }\n\n    /**\n     * @dev Hook that is called before any transfer of tokens. This includes\n     * minting and burning.\n     *\n     * Calling conditions:\n     *\n     * - when `from` and `to` are both non-zero, `amount` of ``from``\'s tokens\n     * will be transferred to `to`.\n     * - when `from` is zero, `amount` tokens will be minted for `to`.\n     * - when `to` is zero, `amount` of ``from``\'s tokens will be burned.\n     * - `from` and `to` are never both zero.\n     *\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\n     */\n    function _beforeTokenTransfer(\n        address from,\n        address to,\n        uint256 amount\n    ) internal virtual {}\n\n    /**\n     * @dev Hook that is called after any transfer of tokens. This includes\n     * minting and burning.\n     *\n     * Calling conditions:\n     *\n     * - when `from` and `to` are both non-zero, `amount` of ``from``\'s tokens\n     * has been transferred to `to`.\n     * - when `from` is zero, `amount` tokens have been minted for `to`.\n     * - when `to` is zero, `amount` of ``from``\'s tokens have been burned.\n     * - `from` and `to` are never both zero.\n     *\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\n     */\n    function _afterTokenTransfer(\n        address from,\n        address to,\n        uint256 amount\n    ) internal virtual {}\n}\n\n\n// File @openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol@v4.5.0\n\n// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC20/extensions/ERC20Burnable.sol)\n\npragma solidity ^0.8.0;\n\n\n/**\n * @dev Extension of {ERC20} that allows token holders to destroy both their own\n * tokens and those that they have an allowance for, in a way that can be\n * recognized off-chain (via event analysis).\n */\nabstract contract ERC20Burnable is Context, ERC20 {\n    /**\n     * @dev Destroys `amount` tokens from the caller.\n     *\n     * See {ERC20-_burn}.\n     */\n    function burn(uint256 amount) public virtual {\n        _burn(_msgSender(), amount);\n    }\n\n    /**\n     * @dev Destroys `amount` tokens from `account`, deducting from the caller\'s\n     * allowance.\n     *\n     * See {ERC20-_burn} and {ERC20-allowance}.\n     *\n     * Requirements:\n     *\n     * - the caller must have allowance for ``accounts``\'s tokens of at least\n     * `amount`.\n     */\n    function burnFrom(address account, uint256 amount) public virtual {\n        _spendAllowance(account, _msgSender(), amount);\n        _burn(account, amount);\n    }\n}\n\n\n// File @openzeppelin/contracts/security/Pausable.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (security/Pausable.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Contract module which allows children to implement an emergency stop\n * mechanism that can be triggered by an authorized account.\n *\n * This module is used through inheritance. It will make available the\n * modifiers `whenNotPaused` and `whenPaused`, which can be applied to\n * the functions of your contract. Note that they will not be pausable by\n * simply including this module, only once the modifiers are put in place.\n */\nabstract contract Pausable is Context {\n    /**\n     * @dev Emitted when the pause is triggered by `account`.\n     */\n    event Paused(address account);\n\n    /**\n     * @dev Emitted when the pause is lifted by `account`.\n     */\n    event Unpaused(address account);\n\n    bool private _paused;\n\n    /**\n     * @dev Initializes the contract in unpaused state.\n     */\n    constructor() {\n        _paused = false;\n    }\n\n    /**\n     * @dev Returns true if the contract is paused, and false otherwise.\n     */\n    function paused() public view virtual returns (bool) {\n        return _paused;\n    }\n\n    /**\n     * @dev Modifier to make a function callable only when the contract is not paused.\n     *\n     * Requirements:\n     *\n     * - The contract must not be paused.\n     */\n    modifier whenNotPaused() {\n        require(!paused(), "Pausable: paused");\n        _;\n    }\n\n    /**\n     * @dev Modifier to make a function callable only when the contract is paused.\n     *\n     * Requirements:\n     *\n     * - The contract must be paused.\n     */\n    modifier whenPaused() {\n        require(paused(), "Pausable: not paused");\n        _;\n    }\n\n    /**\n     * @dev Triggers stopped state.\n     *\n     * Requirements:\n     *\n     * - The contract must not be paused.\n     */\n    function _pause() internal virtual whenNotPaused {\n        _paused = true;\n        emit Paused(_msgSender());\n    }\n\n    /**\n     * @dev Returns to normal state.\n     *\n     * Requirements:\n     *\n     * - The contract must be paused.\n     */\n    function _unpause() internal virtual whenPaused {\n        _paused = false;\n        emit Unpaused(_msgSender());\n    }\n}\n\n\n// File @openzeppelin/contracts/access/IAccessControl.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (access/IAccessControl.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev External interface of AccessControl declared to support ERC165 detection.\n */\ninterface IAccessControl {\n    /**\n     * @dev Emitted when `newAdminRole` is set as ``role``\'s admin role, replacing `previousAdminRole`\n     *\n     * `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite\n     * {RoleAdminChanged} not being emitted signaling this.\n     *\n     * _Available since v3.1._\n     */\n    event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole);\n\n    /**\n     * @dev Emitted when `account` is granted `role`.\n     *\n     * `sender` is the account that originated the contract call, an admin role\n     * bearer except when using {AccessControl-_setupRole}.\n     */\n    event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender);\n\n    /**\n     * @dev Emitted when `account` is revoked `role`.\n     *\n     * `sender` is the account that originated the contract call:\n     *   - if using `revokeRole`, it is the admin role bearer\n     *   - if using `renounceRole`, it is the role bearer (i.e. `account`)\n     */\n    event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender);\n\n    /**\n     * @dev Returns `true` if `account` has been granted `role`.\n     */\n    function hasRole(bytes32 role, address account) external view returns (bool);\n\n    /**\n     * @dev Returns the admin role that controls `role`. See {grantRole} and\n     * {revokeRole}.\n     *\n     * To change a role\'s admin, use {AccessControl-_setRoleAdmin}.\n     */\n    function getRoleAdmin(bytes32 role) external view returns (bytes32);\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function grantRole(bytes32 role, address account) external;\n\n    /**\n     * @dev Revokes `role` from `account`.\n     *\n     * If `account` had been granted `role`, emits a {RoleRevoked} event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function revokeRole(bytes32 role, address account) external;\n\n    /**\n     * @dev Revokes `role` from the calling account.\n     *\n     * Roles are often managed via {grantRole} and {revokeRole}: this function\'s\n     * purpose is to provide a mechanism for accounts to lose their privileges\n     * if they are compromised (such as when a trusted device is misplaced).\n     *\n     * If the calling account had been granted `role`, emits a {RoleRevoked}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must be `account`.\n     */\n    function renounceRole(bytes32 role, address account) external;\n}\n\n\n// File @openzeppelin/contracts/utils/Strings.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/Strings.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev String operations.\n */\nlibrary Strings {\n    bytes16 private constant _HEX_SYMBOLS = "0123456789abcdef";\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\n     */\n    function toString(uint256 value) internal pure returns (string memory) {\n        // Inspired by OraclizeAPI\'s implementation - MIT licence\n        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol\n\n        if (value == 0) {\n            return "0";\n        }\n        uint256 temp = value;\n        uint256 digits;\n        while (temp != 0) {\n            digits++;\n            temp /= 10;\n        }\n        bytes memory buffer = new bytes(digits);\n        while (value != 0) {\n            digits -= 1;\n            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));\n            value /= 10;\n        }\n        return string(buffer);\n    }\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\n     */\n    function toHexString(uint256 value) internal pure returns (string memory) {\n        if (value == 0) {\n            return "0x00";\n        }\n        uint256 temp = value;\n        uint256 length = 0;\n        while (temp != 0) {\n            length++;\n            temp >>= 8;\n        }\n        return toHexString(value, length);\n    }\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\n     */\n    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\n        bytes memory buffer = new bytes(2 * length + 2);\n        buffer[0] = "0";\n        buffer[1] = "x";\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\n            buffer[i] = _HEX_SYMBOLS[value & 0xf];\n            value >>= 4;\n        }\n        require(value == 0, "Strings: hex length insufficient");\n        return string(buffer);\n    }\n}\n\n\n// File @openzeppelin/contracts/utils/introspection/IERC165.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Interface of the ERC165 standard, as defined in the\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\n *\n * Implementers can declare support of contract interfaces, which can then be\n * queried by others ({ERC165Checker}).\n *\n * For an implementation, see {ERC165}.\n */\ninterface IERC165 {\n    /**\n     * @dev Returns true if this contract implements the interface defined by\n     * `interfaceId`. See the corresponding\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\n     * to learn more about how these ids are created.\n     *\n     * This function call must use less than 30 000 gas.\n     */\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\n}\n\n\n// File @openzeppelin/contracts/utils/introspection/ERC165.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Implementation of the {IERC165} interface.\n *\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\n * for the additional interface id that will be supported. For example:\n *\n * ```solidity\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\n * }\n * ```\n *\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\n */\nabstract contract ERC165 is IERC165 {\n    /**\n     * @dev See {IERC165-supportsInterface}.\n     */\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n        return interfaceId == type(IERC165).interfaceId;\n    }\n}\n\n\n// File @openzeppelin/contracts/access/AccessControl.sol@v4.5.0\n\n// OpenZeppelin Contracts (last updated v4.5.0) (access/AccessControl.sol)\n\npragma solidity ^0.8.0;\n\n\n\n\n/**\n * @dev Contract module that allows children to implement role-based access\n * control mechanisms. This is a lightweight version that doesn\'t allow enumerating role\n * members except through off-chain means by accessing the contract event logs. Some\n * applications may benefit from on-chain enumerability, for those cases see\n * {AccessControlEnumerable}.\n *\n * Roles are referred to by their `bytes32` identifier. These should be exposed\n * in the external API and be unique. The best way to achieve this is by\n * using `public constant` hash digests:\n *\n * ```\n * bytes32 public constant MY_ROLE = keccak256("MY_ROLE");\n * ```\n *\n * Roles can be used to represent a set of permissions. To restrict access to a\n * function call, use {hasRole}:\n *\n * ```\n * function foo() public {\n *     require(hasRole(MY_ROLE, msg.sender));\n *     ...\n * }\n * ```\n *\n * Roles can be granted and revoked dynamically via the {grantRole} and\n * {revokeRole} functions. Each role has an associated admin role, and only\n * accounts that have a role\'s admin role can call {grantRole} and {revokeRole}.\n *\n * By default, the admin role for all roles is `DEFAULT_ADMIN_ROLE`, which means\n * that only accounts with this role will be able to grant or revoke other\n * roles. More complex role relationships can be created by using\n * {_setRoleAdmin}.\n *\n * WARNING: The `DEFAULT_ADMIN_ROLE` is also its own admin: it has permission to\n * grant and revoke this role. Extra precautions should be taken to secure\n * accounts that have been granted it.\n */\nabstract contract AccessControl is Context, IAccessControl, ERC165 {\n    struct RoleData {\n        mapping(address => bool) members;\n        bytes32 adminRole;\n    }\n\n    mapping(bytes32 => RoleData) private _roles;\n\n    bytes32 public constant DEFAULT_ADMIN_ROLE = 0x00;\n\n    /**\n     * @dev Modifier that checks that an account has a specific role. Reverts\n     * with a standardized message including the required role.\n     *\n     * The format of the revert reason is given by the following regular expression:\n     *\n     *  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\n     *\n     * _Available since v4.1._\n     */\n    modifier onlyRole(bytes32 role) {\n        _checkRole(role, _msgSender());\n        _;\n    }\n\n    /**\n     * @dev See {IERC165-supportsInterface}.\n     */\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n        return interfaceId == type(IAccessControl).interfaceId || super.supportsInterface(interfaceId);\n    }\n\n    /**\n     * @dev Returns `true` if `account` has been granted `role`.\n     */\n    function hasRole(bytes32 role, address account) public view virtual override returns (bool) {\n        return _roles[role].members[account];\n    }\n\n    /**\n     * @dev Revert with a standard message if `account` is missing `role`.\n     *\n     * The format of the revert reason is given by the following regular expression:\n     *\n     *  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\n     */\n    function _checkRole(bytes32 role, address account) internal view virtual {\n        if (!hasRole(role, account)) {\n            revert(\n                string(\n                    abi.encodePacked(\n                        "AccessControl: account ",\n                        Strings.toHexString(uint160(account), 20),\n                        " is missing role ",\n                        Strings.toHexString(uint256(role), 32)\n                    )\n                )\n            );\n        }\n    }\n\n    /**\n     * @dev Returns the admin role that controls `role`. See {grantRole} and\n     * {revokeRole}.\n     *\n     * To change a role\'s admin, use {_setRoleAdmin}.\n     */\n    function getRoleAdmin(bytes32 role) public view virtual override returns (bytes32) {\n        return _roles[role].adminRole;\n    }\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function grantRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {\n        _grantRole(role, account);\n    }\n\n    /**\n     * @dev Revokes `role` from `account`.\n     *\n     * If `account` had been granted `role`, emits a {RoleRevoked} event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function revokeRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {\n        _revokeRole(role, account);\n    }\n\n    /**\n     * @dev Revokes `role` from the calling account.\n     *\n     * Roles are often managed via {grantRole} and {revokeRole}: this function\'s\n     * purpose is to provide a mechanism for accounts to lose their privileges\n     * if they are compromised (such as when a trusted device is misplaced).\n     *\n     * If the calling account had been revoked `role`, emits a {RoleRevoked}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must be `account`.\n     */\n    function renounceRole(bytes32 role, address account) public virtual override {\n        require(account == _msgSender(), "AccessControl: can only renounce roles for self");\n\n        _revokeRole(role, account);\n    }\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\n     * event. Note that unlike {grantRole}, this function doesn\'t perform any\n     * checks on the calling account.\n     *\n     * [WARNING]\n     * ====\n     * This function should only be called from the constructor when setting\n     * up the initial roles for the system.\n     *\n     * Using this function in any other way is effectively circumventing the admin\n     * system imposed by {AccessControl}.\n     * ====\n     *\n     * NOTE: This function is deprecated in favor of {_grantRole}.\n     */\n    function _setupRole(bytes32 role, address account) internal virtual {\n        _grantRole(role, account);\n    }\n\n    /**\n     * @dev Sets `adminRole` as ``role``\'s admin role.\n     *\n     * Emits a {RoleAdminChanged} event.\n     */\n    function _setRoleAdmin(bytes32 role, bytes32 adminRole) internal virtual {\n        bytes32 previousAdminRole = getRoleAdmin(role);\n        _roles[role].adminRole = adminRole;\n        emit RoleAdminChanged(role, previousAdminRole, adminRole);\n    }\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * Internal function without access restriction.\n     */\n    function _grantRole(bytes32 role, address account) internal virtual {\n        if (!hasRole(role, account)) {\n            _roles[role].members[account] = true;\n            emit RoleGranted(role, account, _msgSender());\n        }\n    }\n\n    /**\n     * @dev Revokes `role` from `account`.\n     *\n     * Internal function without access restriction.\n     */\n    function _revokeRole(bytes32 role, address account) internal virtual {\n        if (hasRole(role, account)) {\n            _roles[role].members[account] = false;\n            emit RoleRevoked(role, account, _msgSender());\n        }\n    }\n}\n\n\n// File contracts/StartonERC20BurnPause.sol\n\npragma solidity ^0.8.0;\n\n\n\ncontract StartonERC20BurnPause is ERC20Burnable, Pausable, AccessControl {\n    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");\n\n    constructor(string memory name, string memory symbol, uint256 initialSupply, address ownerOrMultiSigContract) ERC20(name, symbol) {\n        _setupRole(DEFAULT_ADMIN_ROLE, ownerOrMultiSigContract);\n        _setupRole(PAUSER_ROLE, ownerOrMultiSigContract);\n        _mint(ownerOrMultiSigContract, initialSupply);\n    }\n\n    function pause() public {\n        require(hasRole(PAUSER_ROLE, msg.sender));\n        _pause();\n    }\n\n    function unpause() public {\n        require(hasRole(PAUSER_ROLE, msg.sender));\n        _unpause();\n    }\n\n    function _beforeTokenTransfer(address from, address to, uint256 amount)\n        internal\n        whenNotPaused\n        override\n    {\n        super._beforeTokenTransfer(from, to, amount);\n    }\n}\n',
      bytecode:
        "0x60806040523480156200001157600080fd5b506040516200188f3803806200188f833981016040819052620000349162000442565b8351849084906200004d906003906020850190620002cf565b50805162000063906004906020840190620002cf565b50506005805460ff19169055506200007d600082620000bf565b620000a97f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a82620000bf565b620000b58183620000cf565b505050506200053b565b620000cb8282620001c6565b5050565b6001600160a01b0382166200012b5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064015b60405180910390fd5b62000139600083836200026a565b80600260008282546200014d9190620004d7565b90915550506001600160a01b038216600090815260208190526040812080548392906200017c908490620004d7565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b60008281526006602090815260408083206001600160a01b038516845290915290205460ff16620000cb5760008281526006602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620002263390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60055460ff1615620002b25760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640162000122565b620002ca838383620002ca60201b620004901760201c565b505050565b828054620002dd90620004fe565b90600052602060002090601f0160209004810192826200030157600085556200034c565b82601f106200031c57805160ff19168380011785556200034c565b828001600101855582156200034c579182015b828111156200034c5782518255916020019190600101906200032f565b506200035a9291506200035e565b5090565b5b808211156200035a57600081556001016200035f565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200039d57600080fd5b81516001600160401b0380821115620003ba57620003ba62000375565b604051601f8301601f19908116603f01168101908282118183101715620003e557620003e562000375565b816040528381526020925086838588010111156200040257600080fd5b600091505b8382101562000426578582018301518183018401529082019062000407565b83821115620004385760008385830101525b9695505050505050565b600080600080608085870312156200045957600080fd5b84516001600160401b03808211156200047157600080fd5b6200047f888389016200038b565b955060208701519150808211156200049657600080fd5b50620004a5878288016200038b565b60408701516060880151919550935090506001600160a01b0381168114620004cc57600080fd5b939692955090935050565b60008219821115620004f957634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200051357607f821691505b602082108114156200053557634e487b7160e01b600052602260045260246000fd5b50919050565b611344806200054b6000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c80635c975abb116100c3578063a217fddf1161007c578063a217fddf146102c4578063a457c2d7146102cc578063a9059cbb146102df578063d547741f146102f2578063dd62ed3e14610305578063e63ab1e91461033e57600080fd5b80635c975abb1461025a57806370a082311461026557806379cc67901461028e5780638456cb59146102a157806391d14854146102a957806395d89b41146102bc57600080fd5b80632f2ff15d116101155780632f2ff15d146101f5578063313ce5671461020a57806336568abe14610219578063395093511461022c5780633f4ba83a1461023f57806342966c681461024757600080fd5b806301ffc9a71461015d57806306fdde0314610185578063095ea7b31461019a57806318160ddd146101ad57806323b872dd146101bf578063248a9ca3146101d2575b600080fd5b61017061016b366004611022565b610365565b60405190151581526020015b60405180910390f35b61018d61039c565b60405161017c9190611078565b6101706101a83660046110c7565b61042e565b6002545b60405190815260200161017c565b6101706101cd3660046110f1565b610446565b6101b16101e036600461112d565b60009081526006602052604090206001015490565b610208610203366004611146565b61046a565b005b6040516012815260200161017c565b610208610227366004611146565b610495565b61017061023a3660046110c7565b610518565b610208610557565b61020861025536600461112d565b610594565b60055460ff16610170565b6101b1610273366004611172565b6001600160a01b031660009081526020819052604090205490565b61020861029c3660046110c7565b6105a1565b6102086105b6565b6101706102b7366004611146565b6105f1565b61018d61061c565b6101b1600081565b6101706102da3660046110c7565b61062b565b6101706102ed3660046110c7565b6106bd565b610208610300366004611146565b6106cb565b6101b161031336600461118d565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101b17f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b60006001600160e01b03198216637965db0b60e01b148061039657506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600380546103ab906111b7565b80601f01602080910402602001604051908101604052809291908181526020018280546103d7906111b7565b80156104245780601f106103f957610100808354040283529160200191610424565b820191906000526020600020905b81548152906001019060200180831161040757829003601f168201915b5050505050905090565b60003361043c8185856106f1565b5060019392505050565b600033610454858285610815565b61045f8585856108a7565b506001949350505050565b6000828152600660205260409020600101546104868133610a80565b6104908383610ae4565b505050565b6001600160a01b038116331461050a5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6105148282610b6a565b5050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061043c9082908690610552908790611208565b6106f1565b6105817f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a336105f1565b61058a57600080fd5b610592610bd1565b565b61059e3382610c64565b50565b6105ac823383610815565b6105148282610c64565b6105e07f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a336105f1565b6105e957600080fd5b610592610dbe565b60009182526006602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600480546103ab906111b7565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156106b05760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610501565b61045f82868684036106f1565b60003361043c8185856108a7565b6000828152600660205260409020600101546106e78133610a80565b6104908383610b6a565b6001600160a01b0383166107535760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610501565b6001600160a01b0382166107b45760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610501565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146108a157818110156108945760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610501565b6108a184848484036106f1565b50505050565b6001600160a01b03831661090b5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610501565b6001600160a01b03821661096d5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610501565b610978838383610e39565b6001600160a01b038316600090815260208190526040902054818110156109f05760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610501565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610a27908490611208565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a7391815260200190565b60405180910390a36108a1565b610a8a82826105f1565b61051457610aa2816001600160a01b03166014610e7f565b610aad836020610e7f565b604051602001610abe929190611220565b60408051601f198184030181529082905262461bcd60e51b825261050191600401611078565b610aee82826105f1565b6105145760008281526006602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610b263390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610b7482826105f1565b156105145760008281526006602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60055460ff16610c1a5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610501565b6005805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b038216610cc45760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610501565b610cd082600083610e39565b6001600160a01b03821660009081526020819052604090205481811015610d445760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610501565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610d73908490611295565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b60055460ff1615610e045760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610501565b6005805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610c473390565b60055460ff16156104905760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610501565b60606000610e8e8360026112ac565b610e99906002611208565b67ffffffffffffffff811115610eb157610eb16112cb565b6040519080825280601f01601f191660200182016040528015610edb576020820181803683370190505b509050600360fc1b81600081518110610ef657610ef66112e1565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610f2557610f256112e1565b60200101906001600160f81b031916908160001a9053506000610f498460026112ac565b610f54906001611208565b90505b6001811115610fcc576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610f8857610f886112e1565b1a60f81b828281518110610f9e57610f9e6112e1565b60200101906001600160f81b031916908160001a90535060049490941c93610fc5816112f7565b9050610f57565b50831561101b5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610501565b9392505050565b60006020828403121561103457600080fd5b81356001600160e01b03198116811461101b57600080fd5b60005b8381101561106757818101518382015260200161104f565b838111156108a15750506000910152565b602081526000825180602084015261109781604085016020870161104c565b601f01601f19169190910160400192915050565b80356001600160a01b03811681146110c257600080fd5b919050565b600080604083850312156110da57600080fd5b6110e3836110ab565b946020939093013593505050565b60008060006060848603121561110657600080fd5b61110f846110ab565b925061111d602085016110ab565b9150604084013590509250925092565b60006020828403121561113f57600080fd5b5035919050565b6000806040838503121561115957600080fd5b82359150611169602084016110ab565b90509250929050565b60006020828403121561118457600080fd5b61101b826110ab565b600080604083850312156111a057600080fd5b6111a9836110ab565b9150611169602084016110ab565b600181811c908216806111cb57607f821691505b602082108114156111ec57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561121b5761121b6111f2565b500190565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161125881601785016020880161104c565b7001034b99036b4b9b9b4b733903937b6329607d1b601791840191820152835161128981602884016020880161104c565b01602801949350505050565b6000828210156112a7576112a76111f2565b500390565b60008160001904831182151516156112c6576112c66111f2565b500290565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600081611306576113066111f2565b50600019019056fea264697066735822122044f40636d7b3ad6355507d4f9cc2b715b8fd5e424f2d5f62578f0026f11b9ae664736f6c63430008090033",
      contractName: "StartonERC20BurnPause",
      compilerVersion: "v0.8.9+commit.e5eed63a",
      optimizationUsed: true,
    },
    isActivated: true,
    isAudited: false,
    order: 96,
    tags: [SmartContractTemplateCategories.DEPRECATED],
    category: SmartContractTemplateCategories.DEPRECATED,
  },
  {
    id: "sct_82bde80651bd40cca12f044cb80821bc",
    name: "Fungible Token with mintable supply (ERC20)",
    description:
      "<p>The ERC20 is a smart contract standard made for fungible tokens (I.e: interchangeable tokens like coins).</p> <p>The mintable version of this standard allows the creator to mint new tokens whenever they want.</p> <p>This brings more usage flexibility but implies more trust towards the creators as well.</p> <p>Parameters :</p> <ul> <li><strong>Name</strong> : This is the name of your smart contract which will be reflected on-chain.</li> <li><strong>Symbol</strong> : This is the symbol associated to the NFT collection</li> <li><strong>Initial Supply</strong> : Initial amount of token emitted at the smart contract creation.</li> </ul> <p>You should add 18 trailing zeros to compensate the number of digits reserved to decimals.</p>",
    shortDescription:
      "The smart contract template for fungible tokens. Creators can mint new tokens after initial emission. In a video game, mintable fungible tokens can represent the currency gamers can spend in-game.",
    blockchains: ["polygon", "avalanche", "binance", "ethereum"],
    abi: [
      {
        type: "constructor",
        inputs: [
          {
            name: "name",
            type: "string",
            internalType: "string",
          },
          {
            name: "symbol",
            type: "string",
            internalType: "string",
          },
          {
            name: "initialSupply",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "ownerOrMultiSigContract",
            type: "address",
            internalType: "address",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "Approval",
        type: "event",
        inputs: [
          {
            name: "owner",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "spender",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "value",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        name: "Paused",
        type: "event",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: false,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "RoleAdminChanged",
        type: "event",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "previousAdminRole",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "newAdminRole",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
        ],
        anonymous: false,
      },
      {
        name: "RoleGranted",
        type: "event",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "sender",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "RoleRevoked",
        type: "event",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "sender",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "Transfer",
        type: "event",
        inputs: [
          {
            name: "from",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "value",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        name: "Unpaused",
        type: "event",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: false,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "DEFAULT_ADMIN_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "MINTER_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "PAUSER_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "allowance",
        type: "function",
        inputs: [
          {
            name: "owner",
            type: "address",
            internalType: "address",
          },
          {
            name: "spender",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "approve",
        type: "function",
        inputs: [
          {
            name: "spender",
            type: "address",
            internalType: "address",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "balanceOf",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "burn",
        type: "function",
        inputs: [
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "burnFrom",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "decimals",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "uint8",
            internalType: "uint8",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "decreaseAllowance",
        type: "function",
        inputs: [
          {
            name: "spender",
            type: "address",
            internalType: "address",
          },
          {
            name: "subtractedValue",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "getRoleAdmin",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "grantRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "hasRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "increaseAllowance",
        type: "function",
        inputs: [
          {
            name: "spender",
            type: "address",
            internalType: "address",
          },
          {
            name: "addedValue",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "mint",
        type: "function",
        inputs: [
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "name",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "string",
            internalType: "string",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "pause",
        type: "function",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "paused",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "renounceRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "revokeRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "supportsInterface",
        type: "function",
        inputs: [
          {
            name: "interfaceId",
            type: "bytes4",
            internalType: "bytes4",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "symbol",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "string",
            internalType: "string",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "totalSupply",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "transfer",
        type: "function",
        inputs: [
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "transferFrom",
        type: "function",
        inputs: [
          {
            name: "from",
            type: "address",
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "unpause",
        type: "function",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
    ],
    compilationDetails: {
      runs: 200,
      source:
        '// Sources flattened with hardhat v2.9.1 https://hardhat.org\n\n// File @openzeppelin/contracts/token/ERC20/IERC20.sol@v4.5.0\n\n// SPDX-License-Identifier: MIT\n// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC20/IERC20.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Interface of the ERC20 standard as defined in the EIP.\n */\ninterface IERC20 {\n    /**\n     * @dev Returns the amount of tokens in existence.\n     */\n    function totalSupply() external view returns (uint256);\n\n    /**\n     * @dev Returns the amount of tokens owned by `account`.\n     */\n    function balanceOf(address account) external view returns (uint256);\n\n    /**\n     * @dev Moves `amount` tokens from the caller\'s account to `to`.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * Emits a {Transfer} event.\n     */\n    function transfer(address to, uint256 amount) external returns (bool);\n\n    /**\n     * @dev Returns the remaining number of tokens that `spender` will be\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\n     * zero by default.\n     *\n     * This value changes when {approve} or {transferFrom} are called.\n     */\n    function allowance(address owner, address spender) external view returns (uint256);\n\n    /**\n     * @dev Sets `amount` as the allowance of `spender` over the caller\'s tokens.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\n     * that someone may use both the old and the new allowance by unfortunate\n     * transaction ordering. One possible solution to mitigate this race\n     * condition is to first reduce the spender\'s allowance to 0 and set the\n     * desired value afterwards:\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n     *\n     * Emits an {Approval} event.\n     */\n    function approve(address spender, uint256 amount) external returns (bool);\n\n    /**\n     * @dev Moves `amount` tokens from `from` to `to` using the\n     * allowance mechanism. `amount` is then deducted from the caller\'s\n     * allowance.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * Emits a {Transfer} event.\n     */\n    function transferFrom(\n        address from,\n        address to,\n        uint256 amount\n    ) external returns (bool);\n\n    /**\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\n     * another (`to`).\n     *\n     * Note that `value` may be zero.\n     */\n    event Transfer(address indexed from, address indexed to, uint256 value);\n\n    /**\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\n     * a call to {approve}. `value` is the new allowance.\n     */\n    event Approval(address indexed owner, address indexed spender, uint256 value);\n}\n\n\n// File @openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (token/ERC20/extensions/IERC20Metadata.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Interface for the optional metadata functions from the ERC20 standard.\n *\n * _Available since v4.1._\n */\ninterface IERC20Metadata is IERC20 {\n    /**\n     * @dev Returns the name of the token.\n     */\n    function name() external view returns (string memory);\n\n    /**\n     * @dev Returns the symbol of the token.\n     */\n    function symbol() external view returns (string memory);\n\n    /**\n     * @dev Returns the decimals places of the token.\n     */\n    function decimals() external view returns (uint8);\n}\n\n\n// File @openzeppelin/contracts/utils/Context.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Provides information about the current execution context, including the\n * sender of the transaction and its data. While these are generally available\n * via msg.sender and msg.data, they should not be accessed in such a direct\n * manner, since when dealing with meta-transactions the account sending and\n * paying for execution may not be the actual sender (as far as an application\n * is concerned).\n *\n * This contract is only required for intermediate, library-like contracts.\n */\nabstract contract Context {\n    function _msgSender() internal view virtual returns (address) {\n        return msg.sender;\n    }\n\n    function _msgData() internal view virtual returns (bytes calldata) {\n        return msg.data;\n    }\n}\n\n\n// File @openzeppelin/contracts/token/ERC20/ERC20.sol@v4.5.0\n\n// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC20/ERC20.sol)\n\npragma solidity ^0.8.0;\n\n\n\n/**\n * @dev Implementation of the {IERC20} interface.\n *\n * This implementation is agnostic to the way tokens are created. This means\n * that a supply mechanism has to be added in a derived contract using {_mint}.\n * For a generic mechanism see {ERC20PresetMinterPauser}.\n *\n * TIP: For a detailed writeup see our guide\n * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How\n * to implement supply mechanisms].\n *\n * We have followed general OpenZeppelin Contracts guidelines: functions revert\n * instead returning `false` on failure. This behavior is nonetheless\n * conventional and does not conflict with the expectations of ERC20\n * applications.\n *\n * Additionally, an {Approval} event is emitted on calls to {transferFrom}.\n * This allows applications to reconstruct the allowance for all accounts just\n * by listening to said events. Other implementations of the EIP may not emit\n * these events, as it isn\'t required by the specification.\n *\n * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}\n * functions have been added to mitigate the well-known issues around setting\n * allowances. See {IERC20-approve}.\n */\ncontract ERC20 is Context, IERC20, IERC20Metadata {\n    mapping(address => uint256) private _balances;\n\n    mapping(address => mapping(address => uint256)) private _allowances;\n\n    uint256 private _totalSupply;\n\n    string private _name;\n    string private _symbol;\n\n    /**\n     * @dev Sets the values for {name} and {symbol}.\n     *\n     * The default value of {decimals} is 18. To select a different value for\n     * {decimals} you should overload it.\n     *\n     * All two of these values are immutable: they can only be set once during\n     * construction.\n     */\n    constructor(string memory name_, string memory symbol_) {\n        _name = name_;\n        _symbol = symbol_;\n    }\n\n    /**\n     * @dev Returns the name of the token.\n     */\n    function name() public view virtual override returns (string memory) {\n        return _name;\n    }\n\n    /**\n     * @dev Returns the symbol of the token, usually a shorter version of the\n     * name.\n     */\n    function symbol() public view virtual override returns (string memory) {\n        return _symbol;\n    }\n\n    /**\n     * @dev Returns the number of decimals used to get its user representation.\n     * For example, if `decimals` equals `2`, a balance of `505` tokens should\n     * be displayed to a user as `5.05` (`505 / 10 ** 2`).\n     *\n     * Tokens usually opt for a value of 18, imitating the relationship between\n     * Ether and Wei. This is the value {ERC20} uses, unless this function is\n     * overridden;\n     *\n     * NOTE: This information is only used for _display_ purposes: it in\n     * no way affects any of the arithmetic of the contract, including\n     * {IERC20-balanceOf} and {IERC20-transfer}.\n     */\n    function decimals() public view virtual override returns (uint8) {\n        return 18;\n    }\n\n    /**\n     * @dev See {IERC20-totalSupply}.\n     */\n    function totalSupply() public view virtual override returns (uint256) {\n        return _totalSupply;\n    }\n\n    /**\n     * @dev See {IERC20-balanceOf}.\n     */\n    function balanceOf(address account) public view virtual override returns (uint256) {\n        return _balances[account];\n    }\n\n    /**\n     * @dev See {IERC20-transfer}.\n     *\n     * Requirements:\n     *\n     * - `to` cannot be the zero address.\n     * - the caller must have a balance of at least `amount`.\n     */\n    function transfer(address to, uint256 amount) public virtual override returns (bool) {\n        address owner = _msgSender();\n        _transfer(owner, to, amount);\n        return true;\n    }\n\n    /**\n     * @dev See {IERC20-allowance}.\n     */\n    function allowance(address owner, address spender) public view virtual override returns (uint256) {\n        return _allowances[owner][spender];\n    }\n\n    /**\n     * @dev See {IERC20-approve}.\n     *\n     * NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on\n     * `transferFrom`. This is semantically equivalent to an infinite approval.\n     *\n     * Requirements:\n     *\n     * - `spender` cannot be the zero address.\n     */\n    function approve(address spender, uint256 amount) public virtual override returns (bool) {\n        address owner = _msgSender();\n        _approve(owner, spender, amount);\n        return true;\n    }\n\n    /**\n     * @dev See {IERC20-transferFrom}.\n     *\n     * Emits an {Approval} event indicating the updated allowance. This is not\n     * required by the EIP. See the note at the beginning of {ERC20}.\n     *\n     * NOTE: Does not update the allowance if the current allowance\n     * is the maximum `uint256`.\n     *\n     * Requirements:\n     *\n     * - `from` and `to` cannot be the zero address.\n     * - `from` must have a balance of at least `amount`.\n     * - the caller must have allowance for ``from``\'s tokens of at least\n     * `amount`.\n     */\n    function transferFrom(\n        address from,\n        address to,\n        uint256 amount\n    ) public virtual override returns (bool) {\n        address spender = _msgSender();\n        _spendAllowance(from, spender, amount);\n        _transfer(from, to, amount);\n        return true;\n    }\n\n    /**\n     * @dev Atomically increases the allowance granted to `spender` by the caller.\n     *\n     * This is an alternative to {approve} that can be used as a mitigation for\n     * problems described in {IERC20-approve}.\n     *\n     * Emits an {Approval} event indicating the updated allowance.\n     *\n     * Requirements:\n     *\n     * - `spender` cannot be the zero address.\n     */\n    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {\n        address owner = _msgSender();\n        _approve(owner, spender, _allowances[owner][spender] + addedValue);\n        return true;\n    }\n\n    /**\n     * @dev Atomically decreases the allowance granted to `spender` by the caller.\n     *\n     * This is an alternative to {approve} that can be used as a mitigation for\n     * problems described in {IERC20-approve}.\n     *\n     * Emits an {Approval} event indicating the updated allowance.\n     *\n     * Requirements:\n     *\n     * - `spender` cannot be the zero address.\n     * - `spender` must have allowance for the caller of at least\n     * `subtractedValue`.\n     */\n    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {\n        address owner = _msgSender();\n        uint256 currentAllowance = _allowances[owner][spender];\n        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");\n        unchecked {\n            _approve(owner, spender, currentAllowance - subtractedValue);\n        }\n\n        return true;\n    }\n\n    /**\n     * @dev Moves `amount` of tokens from `sender` to `recipient`.\n     *\n     * This internal function is equivalent to {transfer}, and can be used to\n     * e.g. implement automatic token fees, slashing mechanisms, etc.\n     *\n     * Emits a {Transfer} event.\n     *\n     * Requirements:\n     *\n     * - `from` cannot be the zero address.\n     * - `to` cannot be the zero address.\n     * - `from` must have a balance of at least `amount`.\n     */\n    function _transfer(\n        address from,\n        address to,\n        uint256 amount\n    ) internal virtual {\n        require(from != address(0), "ERC20: transfer from the zero address");\n        require(to != address(0), "ERC20: transfer to the zero address");\n\n        _beforeTokenTransfer(from, to, amount);\n\n        uint256 fromBalance = _balances[from];\n        require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");\n        unchecked {\n            _balances[from] = fromBalance - amount;\n        }\n        _balances[to] += amount;\n\n        emit Transfer(from, to, amount);\n\n        _afterTokenTransfer(from, to, amount);\n    }\n\n    /** @dev Creates `amount` tokens and assigns them to `account`, increasing\n     * the total supply.\n     *\n     * Emits a {Transfer} event with `from` set to the zero address.\n     *\n     * Requirements:\n     *\n     * - `account` cannot be the zero address.\n     */\n    function _mint(address account, uint256 amount) internal virtual {\n        require(account != address(0), "ERC20: mint to the zero address");\n\n        _beforeTokenTransfer(address(0), account, amount);\n\n        _totalSupply += amount;\n        _balances[account] += amount;\n        emit Transfer(address(0), account, amount);\n\n        _afterTokenTransfer(address(0), account, amount);\n    }\n\n    /**\n     * @dev Destroys `amount` tokens from `account`, reducing the\n     * total supply.\n     *\n     * Emits a {Transfer} event with `to` set to the zero address.\n     *\n     * Requirements:\n     *\n     * - `account` cannot be the zero address.\n     * - `account` must have at least `amount` tokens.\n     */\n    function _burn(address account, uint256 amount) internal virtual {\n        require(account != address(0), "ERC20: burn from the zero address");\n\n        _beforeTokenTransfer(account, address(0), amount);\n\n        uint256 accountBalance = _balances[account];\n        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");\n        unchecked {\n            _balances[account] = accountBalance - amount;\n        }\n        _totalSupply -= amount;\n\n        emit Transfer(account, address(0), amount);\n\n        _afterTokenTransfer(account, address(0), amount);\n    }\n\n    /**\n     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.\n     *\n     * This internal function is equivalent to `approve`, and can be used to\n     * e.g. set automatic allowances for certain subsystems, etc.\n     *\n     * Emits an {Approval} event.\n     *\n     * Requirements:\n     *\n     * - `owner` cannot be the zero address.\n     * - `spender` cannot be the zero address.\n     */\n    function _approve(\n        address owner,\n        address spender,\n        uint256 amount\n    ) internal virtual {\n        require(owner != address(0), "ERC20: approve from the zero address");\n        require(spender != address(0), "ERC20: approve to the zero address");\n\n        _allowances[owner][spender] = amount;\n        emit Approval(owner, spender, amount);\n    }\n\n    /**\n     * @dev Spend `amount` form the allowance of `owner` toward `spender`.\n     *\n     * Does not update the allowance amount in case of infinite allowance.\n     * Revert if not enough allowance is available.\n     *\n     * Might emit an {Approval} event.\n     */\n    function _spendAllowance(\n        address owner,\n        address spender,\n        uint256 amount\n    ) internal virtual {\n        uint256 currentAllowance = allowance(owner, spender);\n        if (currentAllowance != type(uint256).max) {\n            require(currentAllowance >= amount, "ERC20: insufficient allowance");\n            unchecked {\n                _approve(owner, spender, currentAllowance - amount);\n            }\n        }\n    }\n\n    /**\n     * @dev Hook that is called before any transfer of tokens. This includes\n     * minting and burning.\n     *\n     * Calling conditions:\n     *\n     * - when `from` and `to` are both non-zero, `amount` of ``from``\'s tokens\n     * will be transferred to `to`.\n     * - when `from` is zero, `amount` tokens will be minted for `to`.\n     * - when `to` is zero, `amount` of ``from``\'s tokens will be burned.\n     * - `from` and `to` are never both zero.\n     *\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\n     */\n    function _beforeTokenTransfer(\n        address from,\n        address to,\n        uint256 amount\n    ) internal virtual {}\n\n    /**\n     * @dev Hook that is called after any transfer of tokens. This includes\n     * minting and burning.\n     *\n     * Calling conditions:\n     *\n     * - when `from` and `to` are both non-zero, `amount` of ``from``\'s tokens\n     * has been transferred to `to`.\n     * - when `from` is zero, `amount` tokens have been minted for `to`.\n     * - when `to` is zero, `amount` of ``from``\'s tokens have been burned.\n     * - `from` and `to` are never both zero.\n     *\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\n     */\n    function _afterTokenTransfer(\n        address from,\n        address to,\n        uint256 amount\n    ) internal virtual {}\n}\n\n\n// File @openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol@v4.5.0\n\n// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC20/extensions/ERC20Burnable.sol)\n\npragma solidity ^0.8.0;\n\n\n/**\n * @dev Extension of {ERC20} that allows token holders to destroy both their own\n * tokens and those that they have an allowance for, in a way that can be\n * recognized off-chain (via event analysis).\n */\nabstract contract ERC20Burnable is Context, ERC20 {\n    /**\n     * @dev Destroys `amount` tokens from the caller.\n     *\n     * See {ERC20-_burn}.\n     */\n    function burn(uint256 amount) public virtual {\n        _burn(_msgSender(), amount);\n    }\n\n    /**\n     * @dev Destroys `amount` tokens from `account`, deducting from the caller\'s\n     * allowance.\n     *\n     * See {ERC20-_burn} and {ERC20-allowance}.\n     *\n     * Requirements:\n     *\n     * - the caller must have allowance for ``accounts``\'s tokens of at least\n     * `amount`.\n     */\n    function burnFrom(address account, uint256 amount) public virtual {\n        _spendAllowance(account, _msgSender(), amount);\n        _burn(account, amount);\n    }\n}\n\n\n// File @openzeppelin/contracts/security/Pausable.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (security/Pausable.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Contract module which allows children to implement an emergency stop\n * mechanism that can be triggered by an authorized account.\n *\n * This module is used through inheritance. It will make available the\n * modifiers `whenNotPaused` and `whenPaused`, which can be applied to\n * the functions of your contract. Note that they will not be pausable by\n * simply including this module, only once the modifiers are put in place.\n */\nabstract contract Pausable is Context {\n    /**\n     * @dev Emitted when the pause is triggered by `account`.\n     */\n    event Paused(address account);\n\n    /**\n     * @dev Emitted when the pause is lifted by `account`.\n     */\n    event Unpaused(address account);\n\n    bool private _paused;\n\n    /**\n     * @dev Initializes the contract in unpaused state.\n     */\n    constructor() {\n        _paused = false;\n    }\n\n    /**\n     * @dev Returns true if the contract is paused, and false otherwise.\n     */\n    function paused() public view virtual returns (bool) {\n        return _paused;\n    }\n\n    /**\n     * @dev Modifier to make a function callable only when the contract is not paused.\n     *\n     * Requirements:\n     *\n     * - The contract must not be paused.\n     */\n    modifier whenNotPaused() {\n        require(!paused(), "Pausable: paused");\n        _;\n    }\n\n    /**\n     * @dev Modifier to make a function callable only when the contract is paused.\n     *\n     * Requirements:\n     *\n     * - The contract must be paused.\n     */\n    modifier whenPaused() {\n        require(paused(), "Pausable: not paused");\n        _;\n    }\n\n    /**\n     * @dev Triggers stopped state.\n     *\n     * Requirements:\n     *\n     * - The contract must not be paused.\n     */\n    function _pause() internal virtual whenNotPaused {\n        _paused = true;\n        emit Paused(_msgSender());\n    }\n\n    /**\n     * @dev Returns to normal state.\n     *\n     * Requirements:\n     *\n     * - The contract must be paused.\n     */\n    function _unpause() internal virtual whenPaused {\n        _paused = false;\n        emit Unpaused(_msgSender());\n    }\n}\n\n\n// File @openzeppelin/contracts/access/IAccessControl.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (access/IAccessControl.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev External interface of AccessControl declared to support ERC165 detection.\n */\ninterface IAccessControl {\n    /**\n     * @dev Emitted when `newAdminRole` is set as ``role``\'s admin role, replacing `previousAdminRole`\n     *\n     * `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite\n     * {RoleAdminChanged} not being emitted signaling this.\n     *\n     * _Available since v3.1._\n     */\n    event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole);\n\n    /**\n     * @dev Emitted when `account` is granted `role`.\n     *\n     * `sender` is the account that originated the contract call, an admin role\n     * bearer except when using {AccessControl-_setupRole}.\n     */\n    event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender);\n\n    /**\n     * @dev Emitted when `account` is revoked `role`.\n     *\n     * `sender` is the account that originated the contract call:\n     *   - if using `revokeRole`, it is the admin role bearer\n     *   - if using `renounceRole`, it is the role bearer (i.e. `account`)\n     */\n    event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender);\n\n    /**\n     * @dev Returns `true` if `account` has been granted `role`.\n     */\n    function hasRole(bytes32 role, address account) external view returns (bool);\n\n    /**\n     * @dev Returns the admin role that controls `role`. See {grantRole} and\n     * {revokeRole}.\n     *\n     * To change a role\'s admin, use {AccessControl-_setRoleAdmin}.\n     */\n    function getRoleAdmin(bytes32 role) external view returns (bytes32);\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function grantRole(bytes32 role, address account) external;\n\n    /**\n     * @dev Revokes `role` from `account`.\n     *\n     * If `account` had been granted `role`, emits a {RoleRevoked} event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function revokeRole(bytes32 role, address account) external;\n\n    /**\n     * @dev Revokes `role` from the calling account.\n     *\n     * Roles are often managed via {grantRole} and {revokeRole}: this function\'s\n     * purpose is to provide a mechanism for accounts to lose their privileges\n     * if they are compromised (such as when a trusted device is misplaced).\n     *\n     * If the calling account had been granted `role`, emits a {RoleRevoked}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must be `account`.\n     */\n    function renounceRole(bytes32 role, address account) external;\n}\n\n\n// File @openzeppelin/contracts/utils/Strings.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/Strings.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev String operations.\n */\nlibrary Strings {\n    bytes16 private constant _HEX_SYMBOLS = "0123456789abcdef";\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\n     */\n    function toString(uint256 value) internal pure returns (string memory) {\n        // Inspired by OraclizeAPI\'s implementation - MIT licence\n        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol\n\n        if (value == 0) {\n            return "0";\n        }\n        uint256 temp = value;\n        uint256 digits;\n        while (temp != 0) {\n            digits++;\n            temp /= 10;\n        }\n        bytes memory buffer = new bytes(digits);\n        while (value != 0) {\n            digits -= 1;\n            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));\n            value /= 10;\n        }\n        return string(buffer);\n    }\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\n     */\n    function toHexString(uint256 value) internal pure returns (string memory) {\n        if (value == 0) {\n            return "0x00";\n        }\n        uint256 temp = value;\n        uint256 length = 0;\n        while (temp != 0) {\n            length++;\n            temp >>= 8;\n        }\n        return toHexString(value, length);\n    }\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\n     */\n    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\n        bytes memory buffer = new bytes(2 * length + 2);\n        buffer[0] = "0";\n        buffer[1] = "x";\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\n            buffer[i] = _HEX_SYMBOLS[value & 0xf];\n            value >>= 4;\n        }\n        require(value == 0, "Strings: hex length insufficient");\n        return string(buffer);\n    }\n}\n\n\n// File @openzeppelin/contracts/utils/introspection/IERC165.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Interface of the ERC165 standard, as defined in the\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\n *\n * Implementers can declare support of contract interfaces, which can then be\n * queried by others ({ERC165Checker}).\n *\n * For an implementation, see {ERC165}.\n */\ninterface IERC165 {\n    /**\n     * @dev Returns true if this contract implements the interface defined by\n     * `interfaceId`. See the corresponding\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\n     * to learn more about how these ids are created.\n     *\n     * This function call must use less than 30 000 gas.\n     */\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\n}\n\n\n// File @openzeppelin/contracts/utils/introspection/ERC165.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Implementation of the {IERC165} interface.\n *\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\n * for the additional interface id that will be supported. For example:\n *\n * ```solidity\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\n * }\n * ```\n *\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\n */\nabstract contract ERC165 is IERC165 {\n    /**\n     * @dev See {IERC165-supportsInterface}.\n     */\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n        return interfaceId == type(IERC165).interfaceId;\n    }\n}\n\n\n// File @openzeppelin/contracts/access/AccessControl.sol@v4.5.0\n\n// OpenZeppelin Contracts (last updated v4.5.0) (access/AccessControl.sol)\n\npragma solidity ^0.8.0;\n\n\n\n\n/**\n * @dev Contract module that allows children to implement role-based access\n * control mechanisms. This is a lightweight version that doesn\'t allow enumerating role\n * members except through off-chain means by accessing the contract event logs. Some\n * applications may benefit from on-chain enumerability, for those cases see\n * {AccessControlEnumerable}.\n *\n * Roles are referred to by their `bytes32` identifier. These should be exposed\n * in the external API and be unique. The best way to achieve this is by\n * using `public constant` hash digests:\n *\n * ```\n * bytes32 public constant MY_ROLE = keccak256("MY_ROLE");\n * ```\n *\n * Roles can be used to represent a set of permissions. To restrict access to a\n * function call, use {hasRole}:\n *\n * ```\n * function foo() public {\n *     require(hasRole(MY_ROLE, msg.sender));\n *     ...\n * }\n * ```\n *\n * Roles can be granted and revoked dynamically via the {grantRole} and\n * {revokeRole} functions. Each role has an associated admin role, and only\n * accounts that have a role\'s admin role can call {grantRole} and {revokeRole}.\n *\n * By default, the admin role for all roles is `DEFAULT_ADMIN_ROLE`, which means\n * that only accounts with this role will be able to grant or revoke other\n * roles. More complex role relationships can be created by using\n * {_setRoleAdmin}.\n *\n * WARNING: The `DEFAULT_ADMIN_ROLE` is also its own admin: it has permission to\n * grant and revoke this role. Extra precautions should be taken to secure\n * accounts that have been granted it.\n */\nabstract contract AccessControl is Context, IAccessControl, ERC165 {\n    struct RoleData {\n        mapping(address => bool) members;\n        bytes32 adminRole;\n    }\n\n    mapping(bytes32 => RoleData) private _roles;\n\n    bytes32 public constant DEFAULT_ADMIN_ROLE = 0x00;\n\n    /**\n     * @dev Modifier that checks that an account has a specific role. Reverts\n     * with a standardized message including the required role.\n     *\n     * The format of the revert reason is given by the following regular expression:\n     *\n     *  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\n     *\n     * _Available since v4.1._\n     */\n    modifier onlyRole(bytes32 role) {\n        _checkRole(role, _msgSender());\n        _;\n    }\n\n    /**\n     * @dev See {IERC165-supportsInterface}.\n     */\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n        return interfaceId == type(IAccessControl).interfaceId || super.supportsInterface(interfaceId);\n    }\n\n    /**\n     * @dev Returns `true` if `account` has been granted `role`.\n     */\n    function hasRole(bytes32 role, address account) public view virtual override returns (bool) {\n        return _roles[role].members[account];\n    }\n\n    /**\n     * @dev Revert with a standard message if `account` is missing `role`.\n     *\n     * The format of the revert reason is given by the following regular expression:\n     *\n     *  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\n     */\n    function _checkRole(bytes32 role, address account) internal view virtual {\n        if (!hasRole(role, account)) {\n            revert(\n                string(\n                    abi.encodePacked(\n                        "AccessControl: account ",\n                        Strings.toHexString(uint160(account), 20),\n                        " is missing role ",\n                        Strings.toHexString(uint256(role), 32)\n                    )\n                )\n            );\n        }\n    }\n\n    /**\n     * @dev Returns the admin role that controls `role`. See {grantRole} and\n     * {revokeRole}.\n     *\n     * To change a role\'s admin, use {_setRoleAdmin}.\n     */\n    function getRoleAdmin(bytes32 role) public view virtual override returns (bytes32) {\n        return _roles[role].adminRole;\n    }\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function grantRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {\n        _grantRole(role, account);\n    }\n\n    /**\n     * @dev Revokes `role` from `account`.\n     *\n     * If `account` had been granted `role`, emits a {RoleRevoked} event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function revokeRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {\n        _revokeRole(role, account);\n    }\n\n    /**\n     * @dev Revokes `role` from the calling account.\n     *\n     * Roles are often managed via {grantRole} and {revokeRole}: this function\'s\n     * purpose is to provide a mechanism for accounts to lose their privileges\n     * if they are compromised (such as when a trusted device is misplaced).\n     *\n     * If the calling account had been revoked `role`, emits a {RoleRevoked}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must be `account`.\n     */\n    function renounceRole(bytes32 role, address account) public virtual override {\n        require(account == _msgSender(), "AccessControl: can only renounce roles for self");\n\n        _revokeRole(role, account);\n    }\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\n     * event. Note that unlike {grantRole}, this function doesn\'t perform any\n     * checks on the calling account.\n     *\n     * [WARNING]\n     * ====\n     * This function should only be called from the constructor when setting\n     * up the initial roles for the system.\n     *\n     * Using this function in any other way is effectively circumventing the admin\n     * system imposed by {AccessControl}.\n     * ====\n     *\n     * NOTE: This function is deprecated in favor of {_grantRole}.\n     */\n    function _setupRole(bytes32 role, address account) internal virtual {\n        _grantRole(role, account);\n    }\n\n    /**\n     * @dev Sets `adminRole` as ``role``\'s admin role.\n     *\n     * Emits a {RoleAdminChanged} event.\n     */\n    function _setRoleAdmin(bytes32 role, bytes32 adminRole) internal virtual {\n        bytes32 previousAdminRole = getRoleAdmin(role);\n        _roles[role].adminRole = adminRole;\n        emit RoleAdminChanged(role, previousAdminRole, adminRole);\n    }\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * Internal function without access restriction.\n     */\n    function _grantRole(bytes32 role, address account) internal virtual {\n        if (!hasRole(role, account)) {\n            _roles[role].members[account] = true;\n            emit RoleGranted(role, account, _msgSender());\n        }\n    }\n\n    /**\n     * @dev Revokes `role` from `account`.\n     *\n     * Internal function without access restriction.\n     */\n    function _revokeRole(bytes32 role, address account) internal virtual {\n        if (hasRole(role, account)) {\n            _roles[role].members[account] = false;\n            emit RoleRevoked(role, account, _msgSender());\n        }\n    }\n}\n\n\n// File contracts/StartonERC20MintBurnPause.sol\n\npragma solidity ^0.8.0;\n\n\n\ncontract StartonERC20MintBurnPause is ERC20Burnable, Pausable, AccessControl {\n    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");\n    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");\n\n    constructor(string memory name, string memory symbol, uint256 initialSupply, address ownerOrMultiSigContract) ERC20(name, symbol) {\n        _setupRole(DEFAULT_ADMIN_ROLE, ownerOrMultiSigContract);\n        _setupRole(PAUSER_ROLE, ownerOrMultiSigContract);\n        _setupRole(MINTER_ROLE, ownerOrMultiSigContract);\n        _mint(ownerOrMultiSigContract, initialSupply);\n    }\n\n    function pause() public {\n        require(hasRole(PAUSER_ROLE, msg.sender));\n        _pause();\n    }\n\n    function unpause() public {\n        require(hasRole(PAUSER_ROLE, msg.sender));\n        _unpause();\n    }\n\n    function mint(address to, uint256 amount) public {\n        require(hasRole(MINTER_ROLE, msg.sender));\n        _mint(to, amount);\n    }\n\n    function _beforeTokenTransfer(address from, address to, uint256 amount)\n        internal\n        whenNotPaused\n        override\n    {\n        super._beforeTokenTransfer(from, to, amount);\n    }\n}\n',
      bytecode:
        "0x60806040523480156200001157600080fd5b5060405162001a5338038062001a5383398101604081905262000034916200046e565b8351849084906200004d906003906020850190620002fb565b50805162000063906004906020840190620002fb565b50506005805460ff19169055506200007d600082620000eb565b620000a97f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a82620000eb565b620000d57f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a682620000eb565b620000e18183620000fb565b5050505062000567565b620000f78282620001f2565b5050565b6001600160a01b038216620001575760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064015b60405180910390fd5b620001656000838362000296565b806002600082825462000179919062000503565b90915550506001600160a01b03821660009081526020819052604081208054839290620001a890849062000503565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b60008281526006602090815260408083206001600160a01b038516845290915290205460ff16620000f75760008281526006602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620002523390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60055460ff1615620002de5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016200014e565b620002f6838383620002f660201b620005001760201c565b505050565b82805462000309906200052a565b90600052602060002090601f0160209004810192826200032d576000855562000378565b82601f106200034857805160ff191683800117855562000378565b8280016001018555821562000378579182015b82811115620003785782518255916020019190600101906200035b565b50620003869291506200038a565b5090565b5b808211156200038657600081556001016200038b565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620003c957600080fd5b81516001600160401b0380821115620003e657620003e6620003a1565b604051601f8301601f19908116603f01168101908282118183101715620004115762000411620003a1565b816040528381526020925086838588010111156200042e57600080fd5b600091505b8382101562000452578582018301518183018401529082019062000433565b83821115620004645760008385830101525b9695505050505050565b600080600080608085870312156200048557600080fd5b84516001600160401b03808211156200049d57600080fd5b620004ab88838901620003b7565b95506020870151915080821115620004c257600080fd5b50620004d187828801620003b7565b60408701516060880151919550935090506001600160a01b0381168114620004f857600080fd5b939692955090935050565b600082198211156200052557634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200053f57607f821691505b602082108114156200056157634e487b7160e01b600052602260045260246000fd5b50919050565b6114dc80620005776000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80635c975abb116100de578063a217fddf11610097578063d539139311610071578063d53913931461033b578063d547741f14610362578063dd62ed3e14610375578063e63ab1e9146103ae57600080fd5b8063a217fddf1461030d578063a457c2d714610315578063a9059cbb1461032857600080fd5b80635c975abb146102a357806370a08231146102ae57806379cc6790146102d75780638456cb59146102ea57806391d14854146102f257806395d89b411461030557600080fd5b80632f2ff15d1161014b578063395093511161012557806339509351146102625780633f4ba83a1461027557806340c10f191461027d57806342966c681461029057600080fd5b80632f2ff15d1461022b578063313ce5671461024057806336568abe1461024f57600080fd5b806301ffc9a71461019357806306fdde03146101bb578063095ea7b3146101d057806318160ddd146101e357806323b872dd146101f5578063248a9ca314610208575b600080fd5b6101a66101a13660046111ba565b6103d5565b60405190151581526020015b60405180910390f35b6101c361040c565b6040516101b29190611210565b6101a66101de36600461125f565b61049e565b6002545b6040519081526020016101b2565b6101a6610203366004611289565b6104b6565b6101e76102163660046112c5565b60009081526006602052604090206001015490565b61023e6102393660046112de565b6104da565b005b604051601281526020016101b2565b61023e61025d3660046112de565b610505565b6101a661027036600461125f565b610588565b61023e6105c7565b61023e61028b36600461125f565b610604565b61023e61029e3660046112c5565b610641565b60055460ff166101a6565b6101e76102bc36600461130a565b6001600160a01b031660009081526020819052604090205490565b61023e6102e536600461125f565b61064e565b61023e610663565b6101a66103003660046112de565b61069e565b6101c36106c9565b6101e7600081565b6101a661032336600461125f565b6106d8565b6101a661033636600461125f565b61076a565b6101e77f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61023e6103703660046112de565b610778565b6101e7610383366004611325565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101e77f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b60006001600160e01b03198216637965db0b60e01b148061040657506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606003805461041b9061134f565b80601f01602080910402602001604051908101604052809291908181526020018280546104479061134f565b80156104945780601f1061046957610100808354040283529160200191610494565b820191906000526020600020905b81548152906001019060200180831161047757829003601f168201915b5050505050905090565b6000336104ac81858561079e565b5060019392505050565b6000336104c48582856108c2565b6104cf858585610954565b506001949350505050565b6000828152600660205260409020600101546104f68133610b2d565b6105008383610b91565b505050565b6001600160a01b038116331461057a5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6105848282610c17565b5050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906104ac90829086906105c29087906113a0565b61079e565b6105f17f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a3361069e565b6105fa57600080fd5b610602610c7e565b565b61062e7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a63361069e565b61063757600080fd5b6105848282610d11565b61064b3382610dfc565b50565b6106598233836108c2565b6105848282610dfc565b61068d7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a3361069e565b61069657600080fd5b610602610f56565b60009182526006602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60606004805461041b9061134f565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091908381101561075d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610571565b6104cf828686840361079e565b6000336104ac818585610954565b6000828152600660205260409020600101546107948133610b2d565b6105008383610c17565b6001600160a01b0383166108005760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610571565b6001600160a01b0382166108615760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610571565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461094e57818110156109415760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610571565b61094e848484840361079e565b50505050565b6001600160a01b0383166109b85760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610571565b6001600160a01b038216610a1a5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610571565b610a25838383610fd1565b6001600160a01b03831660009081526020819052604090205481811015610a9d5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610571565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610ad49084906113a0565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b2091815260200190565b60405180910390a361094e565b610b37828261069e565b61058457610b4f816001600160a01b03166014611017565b610b5a836020611017565b604051602001610b6b9291906113b8565b60408051601f198184030181529082905262461bcd60e51b825261057191600401611210565b610b9b828261069e565b6105845760008281526006602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610bd33390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610c21828261069e565b156105845760008281526006602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60055460ff16610cc75760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610571565b6005805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b038216610d675760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610571565b610d7360008383610fd1565b8060026000828254610d8591906113a0565b90915550506001600160a01b03821660009081526020819052604081208054839290610db29084906113a0565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610e5c5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610571565b610e6882600083610fd1565b6001600160a01b03821660009081526020819052604090205481811015610edc5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610571565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610f0b90849061142d565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b60055460ff1615610f9c5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610571565b6005805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610cf43390565b60055460ff16156105005760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610571565b60606000611026836002611444565b6110319060026113a0565b67ffffffffffffffff81111561104957611049611463565b6040519080825280601f01601f191660200182016040528015611073576020820181803683370190505b509050600360fc1b8160008151811061108e5761108e611479565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106110bd576110bd611479565b60200101906001600160f81b031916908160001a90535060006110e1846002611444565b6110ec9060016113a0565b90505b6001811115611164576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061112057611120611479565b1a60f81b82828151811061113657611136611479565b60200101906001600160f81b031916908160001a90535060049490941c9361115d8161148f565b90506110ef565b5083156111b35760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610571565b9392505050565b6000602082840312156111cc57600080fd5b81356001600160e01b0319811681146111b357600080fd5b60005b838110156111ff5781810151838201526020016111e7565b8381111561094e5750506000910152565b602081526000825180602084015261122f8160408501602087016111e4565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461125a57600080fd5b919050565b6000806040838503121561127257600080fd5b61127b83611243565b946020939093013593505050565b60008060006060848603121561129e57600080fd5b6112a784611243565b92506112b560208501611243565b9150604084013590509250925092565b6000602082840312156112d757600080fd5b5035919050565b600080604083850312156112f157600080fd5b8235915061130160208401611243565b90509250929050565b60006020828403121561131c57600080fd5b6111b382611243565b6000806040838503121561133857600080fd5b61134183611243565b915061130160208401611243565b600181811c9082168061136357607f821691505b6020821081141561138457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156113b3576113b361138a565b500190565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516113f08160178501602088016111e4565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516114218160288401602088016111e4565b01602801949350505050565b60008282101561143f5761143f61138a565b500390565b600081600019048311821515161561145e5761145e61138a565b500290565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b60008161149e5761149e61138a565b50600019019056fea26469706673582212207f44ab53edd95cfa387d75a83f7984b9eb36b087b5631d86ec77aaa1bc5dd7f264736f6c63430008090033",
      contractName: "StartonERC20MintBurnPause",
      compilerVersion: "v0.8.9+commit.e5eed63a",
      optimizationUsed: true,
    },
    isActivated: true,
    isAudited: false,
    order: 97,
    tags: [SmartContractTemplateCategories.DEPRECATED],
    category: SmartContractTemplateCategories.DEPRECATED,
  },
  {
    id: "sct_d4c1d5f2ed6f44d185bfb60eee2dbcaf",
    name: "One-to-many NFT Collection (ERC-1155)",
    description:
      '<p>The ERC1155 is a smart contract standard which is specialised in multiple-copies Non Fungible Tokens (NFT).\n\t\t\tWithin this standard, tokens are linked to addresses (the owners) and to URIs (references of the NFT contents).</p>\n\t\t\t<p>It is important to notice that we do not store any content directly inside the smart contract.\n\t\t\tOnly references are stored. It is up to the smart contract readers to find the content by themselves using the references.</p>\n\t\t\t<p>Starton provides an <a href="https://app.starton.io/ipfs">IPFS integration</a> in case you need to host your NFT contents.</p>\n\t\t\t<p>Parameters :</p>\n\t\t\t<ul>\n\t\t\t<li><strong>Name</strong> : This is the name of your smart contract which will be reflected on-chain.</li>\n\t\t\t<li><strong>BaseUri</strong> : Will be used to concatenate NFT URIs and the ContractUriSuffix<ul>\n\t\t\t<li>Using IPFS: it should be <code>ipfs://ipfs/</code></li>\n\t\t\t<li>Using a centralised server: it should be like <code>https://yourapi.com/endpoint/</code></li>\n\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<li><strong>ContractUriSuffix</strong> (will be concatenated with baseUri):<ul>\n\t\t\t<li>Using IPFS: it is the CID of the contract metadata (more info <a href="https://docs.opensea.io/docs/contract-level-metadata">here</a>)</li>\n\t\t\t<li>Using a centralised server: the path of the contract metadata json</li>\n\t\t\t</ul>\n\t\t\t</li>\n\t\t\t</ul>',
    shortDescription:
      "The smart contract standard to manage multiple-copies NFTs. Though their content is identical, each NFT has a different token ID. In a video game, it can be a piece of equipment won after an action such as a powerful sword after defeating an enemy. Every user defeating the enemy will own an edition of the sword with a different identifier. ",
    blockchains: ["polygon", "avalanche", "binance", "ethereum"],
    abi: [
      {
        type: "constructor",
        inputs: [
          {
            name: "name",
            type: "string",
            internalType: "string",
          },
          {
            name: "baseUri",
            type: "string",
            internalType: "string",
          },
          {
            name: "contractUriSuffix",
            type: "string",
            internalType: "string",
          },
          {
            name: "ownerOrMultiSigContract",
            type: "address",
            internalType: "address",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "ApprovalForAll",
        type: "event",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "operator",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "approved",
            type: "bool",
            indexed: false,
            internalType: "bool",
          },
        ],
        anonymous: false,
      },
      {
        name: "Paused",
        type: "event",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: false,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "RoleAdminChanged",
        type: "event",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "previousAdminRole",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "newAdminRole",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
        ],
        anonymous: false,
      },
      {
        name: "RoleGranted",
        type: "event",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "sender",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "RoleRevoked",
        type: "event",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "sender",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "TransferBatch",
        type: "event",
        inputs: [
          {
            name: "operator",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "from",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "ids",
            type: "uint256[]",
            indexed: false,
            internalType: "uint256[]",
          },
          {
            name: "values",
            type: "uint256[]",
            indexed: false,
            internalType: "uint256[]",
          },
        ],
        anonymous: false,
      },
      {
        name: "TransferSingle",
        type: "event",
        inputs: [
          {
            name: "operator",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "from",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "id",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
          {
            name: "value",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        name: "URI",
        type: "event",
        inputs: [
          {
            name: "value",
            type: "string",
            indexed: false,
            internalType: "string",
          },
          {
            name: "id",
            type: "uint256",
            indexed: true,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        name: "Unpaused",
        type: "event",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: false,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "DEFAULT_ADMIN_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "LOCKER_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "MINTER_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "PAUSER_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "URI_SETTER_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "balanceOf",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
          {
            name: "id",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "balanceOfBatch",
        type: "function",
        inputs: [
          {
            name: "accounts",
            type: "address[]",
            internalType: "address[]",
          },
          {
            name: "ids",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
        outputs: [
          {
            name: "",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "burn",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
          {
            name: "id",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "value",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "burnBatch",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
          {
            name: "ids",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "values",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "contractURI",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "string",
            internalType: "string",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "getRoleAdmin",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "grantRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "hasRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "isApprovedForAll",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
          {
            name: "operator",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "lockMint",
        type: "function",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "mint",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
          {
            name: "id",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "mintBatch",
        type: "function",
        inputs: [
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "ids",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "amounts",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "pause",
        type: "function",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "paused",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "renounceRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "revokeRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "safeBatchTransferFrom",
        type: "function",
        inputs: [
          {
            name: "from",
            type: "address",
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "ids",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "amounts",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "safeTransferFrom",
        type: "function",
        inputs: [
          {
            name: "from",
            type: "address",
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "id",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "setApprovalForAll",
        type: "function",
        inputs: [
          {
            name: "operator",
            type: "address",
            internalType: "address",
          },
          {
            name: "approved",
            type: "bool",
            internalType: "bool",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "setBaseContractURI",
        type: "function",
        inputs: [
          {
            name: "newBaseContractUri",
            type: "string",
            internalType: "string",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "setURI",
        type: "function",
        inputs: [
          {
            name: "newuri",
            type: "string",
            internalType: "string",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "supportsInterface",
        type: "function",
        inputs: [
          {
            name: "interfaceId",
            type: "bytes4",
            internalType: "bytes4",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "unpause",
        type: "function",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "uri",
        type: "function",
        inputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "string",
            internalType: "string",
          },
        ],
        stateMutability: "view",
      },
    ],
    compilationDetails: {
      runs: 200,
      source:
        '// Sources flattened with hardhat v2.9.1 https://hardhat.org\n\n// File @openzeppelin/contracts/access/IAccessControl.sol@v4.5.0\n\n// SPDX-License-Identifier: MIT\n// OpenZeppelin Contracts v4.4.1 (access/IAccessControl.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev External interface of AccessControl declared to support ERC165 detection.\n */\ninterface IAccessControl {\n    /**\n     * @dev Emitted when `newAdminRole` is set as ``role``\'s admin role, replacing `previousAdminRole`\n     *\n     * `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite\n     * {RoleAdminChanged} not being emitted signaling this.\n     *\n     * _Available since v3.1._\n     */\n    event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole);\n\n    /**\n     * @dev Emitted when `account` is granted `role`.\n     *\n     * `sender` is the account that originated the contract call, an admin role\n     * bearer except when using {AccessControl-_setupRole}.\n     */\n    event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender);\n\n    /**\n     * @dev Emitted when `account` is revoked `role`.\n     *\n     * `sender` is the account that originated the contract call:\n     *   - if using `revokeRole`, it is the admin role bearer\n     *   - if using `renounceRole`, it is the role bearer (i.e. `account`)\n     */\n    event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender);\n\n    /**\n     * @dev Returns `true` if `account` has been granted `role`.\n     */\n    function hasRole(bytes32 role, address account) external view returns (bool);\n\n    /**\n     * @dev Returns the admin role that controls `role`. See {grantRole} and\n     * {revokeRole}.\n     *\n     * To change a role\'s admin, use {AccessControl-_setRoleAdmin}.\n     */\n    function getRoleAdmin(bytes32 role) external view returns (bytes32);\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function grantRole(bytes32 role, address account) external;\n\n    /**\n     * @dev Revokes `role` from `account`.\n     *\n     * If `account` had been granted `role`, emits a {RoleRevoked} event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function revokeRole(bytes32 role, address account) external;\n\n    /**\n     * @dev Revokes `role` from the calling account.\n     *\n     * Roles are often managed via {grantRole} and {revokeRole}: this function\'s\n     * purpose is to provide a mechanism for accounts to lose their privileges\n     * if they are compromised (such as when a trusted device is misplaced).\n     *\n     * If the calling account had been granted `role`, emits a {RoleRevoked}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must be `account`.\n     */\n    function renounceRole(bytes32 role, address account) external;\n}\n\n\n// File @openzeppelin/contracts/utils/Context.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Provides information about the current execution context, including the\n * sender of the transaction and its data. While these are generally available\n * via msg.sender and msg.data, they should not be accessed in such a direct\n * manner, since when dealing with meta-transactions the account sending and\n * paying for execution may not be the actual sender (as far as an application\n * is concerned).\n *\n * This contract is only required for intermediate, library-like contracts.\n */\nabstract contract Context {\n    function _msgSender() internal view virtual returns (address) {\n        return msg.sender;\n    }\n\n    function _msgData() internal view virtual returns (bytes calldata) {\n        return msg.data;\n    }\n}\n\n\n// File @openzeppelin/contracts/utils/Strings.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/Strings.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev String operations.\n */\nlibrary Strings {\n    bytes16 private constant _HEX_SYMBOLS = "0123456789abcdef";\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\n     */\n    function toString(uint256 value) internal pure returns (string memory) {\n        // Inspired by OraclizeAPI\'s implementation - MIT licence\n        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol\n\n        if (value == 0) {\n            return "0";\n        }\n        uint256 temp = value;\n        uint256 digits;\n        while (temp != 0) {\n            digits++;\n            temp /= 10;\n        }\n        bytes memory buffer = new bytes(digits);\n        while (value != 0) {\n            digits -= 1;\n            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));\n            value /= 10;\n        }\n        return string(buffer);\n    }\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\n     */\n    function toHexString(uint256 value) internal pure returns (string memory) {\n        if (value == 0) {\n            return "0x00";\n        }\n        uint256 temp = value;\n        uint256 length = 0;\n        while (temp != 0) {\n            length++;\n            temp >>= 8;\n        }\n        return toHexString(value, length);\n    }\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\n     */\n    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\n        bytes memory buffer = new bytes(2 * length + 2);\n        buffer[0] = "0";\n        buffer[1] = "x";\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\n            buffer[i] = _HEX_SYMBOLS[value & 0xf];\n            value >>= 4;\n        }\n        require(value == 0, "Strings: hex length insufficient");\n        return string(buffer);\n    }\n}\n\n\n// File @openzeppelin/contracts/utils/introspection/IERC165.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Interface of the ERC165 standard, as defined in the\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\n *\n * Implementers can declare support of contract interfaces, which can then be\n * queried by others ({ERC165Checker}).\n *\n * For an implementation, see {ERC165}.\n */\ninterface IERC165 {\n    /**\n     * @dev Returns true if this contract implements the interface defined by\n     * `interfaceId`. See the corresponding\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\n     * to learn more about how these ids are created.\n     *\n     * This function call must use less than 30 000 gas.\n     */\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\n}\n\n\n// File @openzeppelin/contracts/utils/introspection/ERC165.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Implementation of the {IERC165} interface.\n *\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\n * for the additional interface id that will be supported. For example:\n *\n * ```solidity\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\n * }\n * ```\n *\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\n */\nabstract contract ERC165 is IERC165 {\n    /**\n     * @dev See {IERC165-supportsInterface}.\n     */\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n        return interfaceId == type(IERC165).interfaceId;\n    }\n}\n\n\n// File @openzeppelin/contracts/access/AccessControl.sol@v4.5.0\n\n// OpenZeppelin Contracts (last updated v4.5.0) (access/AccessControl.sol)\n\npragma solidity ^0.8.0;\n\n\n\n\n/**\n * @dev Contract module that allows children to implement role-based access\n * control mechanisms. This is a lightweight version that doesn\'t allow enumerating role\n * members except through off-chain means by accessing the contract event logs. Some\n * applications may benefit from on-chain enumerability, for those cases see\n * {AccessControlEnumerable}.\n *\n * Roles are referred to by their `bytes32` identifier. These should be exposed\n * in the external API and be unique. The best way to achieve this is by\n * using `public constant` hash digests:\n *\n * ```\n * bytes32 public constant MY_ROLE = keccak256("MY_ROLE");\n * ```\n *\n * Roles can be used to represent a set of permissions. To restrict access to a\n * function call, use {hasRole}:\n *\n * ```\n * function foo() public {\n *     require(hasRole(MY_ROLE, msg.sender));\n *     ...\n * }\n * ```\n *\n * Roles can be granted and revoked dynamically via the {grantRole} and\n * {revokeRole} functions. Each role has an associated admin role, and only\n * accounts that have a role\'s admin role can call {grantRole} and {revokeRole}.\n *\n * By default, the admin role for all roles is `DEFAULT_ADMIN_ROLE`, which means\n * that only accounts with this role will be able to grant or revoke other\n * roles. More complex role relationships can be created by using\n * {_setRoleAdmin}.\n *\n * WARNING: The `DEFAULT_ADMIN_ROLE` is also its own admin: it has permission to\n * grant and revoke this role. Extra precautions should be taken to secure\n * accounts that have been granted it.\n */\nabstract contract AccessControl is Context, IAccessControl, ERC165 {\n    struct RoleData {\n        mapping(address => bool) members;\n        bytes32 adminRole;\n    }\n\n    mapping(bytes32 => RoleData) private _roles;\n\n    bytes32 public constant DEFAULT_ADMIN_ROLE = 0x00;\n\n    /**\n     * @dev Modifier that checks that an account has a specific role. Reverts\n     * with a standardized message including the required role.\n     *\n     * The format of the revert reason is given by the following regular expression:\n     *\n     *  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\n     *\n     * _Available since v4.1._\n     */\n    modifier onlyRole(bytes32 role) {\n        _checkRole(role, _msgSender());\n        _;\n    }\n\n    /**\n     * @dev See {IERC165-supportsInterface}.\n     */\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n        return interfaceId == type(IAccessControl).interfaceId || super.supportsInterface(interfaceId);\n    }\n\n    /**\n     * @dev Returns `true` if `account` has been granted `role`.\n     */\n    function hasRole(bytes32 role, address account) public view virtual override returns (bool) {\n        return _roles[role].members[account];\n    }\n\n    /**\n     * @dev Revert with a standard message if `account` is missing `role`.\n     *\n     * The format of the revert reason is given by the following regular expression:\n     *\n     *  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\n     */\n    function _checkRole(bytes32 role, address account) internal view virtual {\n        if (!hasRole(role, account)) {\n            revert(\n                string(\n                    abi.encodePacked(\n                        "AccessControl: account ",\n                        Strings.toHexString(uint160(account), 20),\n                        " is missing role ",\n                        Strings.toHexString(uint256(role), 32)\n                    )\n                )\n            );\n        }\n    }\n\n    /**\n     * @dev Returns the admin role that controls `role`. See {grantRole} and\n     * {revokeRole}.\n     *\n     * To change a role\'s admin, use {_setRoleAdmin}.\n     */\n    function getRoleAdmin(bytes32 role) public view virtual override returns (bytes32) {\n        return _roles[role].adminRole;\n    }\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function grantRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {\n        _grantRole(role, account);\n    }\n\n    /**\n     * @dev Revokes `role` from `account`.\n     *\n     * If `account` had been granted `role`, emits a {RoleRevoked} event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function revokeRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {\n        _revokeRole(role, account);\n    }\n\n    /**\n     * @dev Revokes `role` from the calling account.\n     *\n     * Roles are often managed via {grantRole} and {revokeRole}: this function\'s\n     * purpose is to provide a mechanism for accounts to lose their privileges\n     * if they are compromised (such as when a trusted device is misplaced).\n     *\n     * If the calling account had been revoked `role`, emits a {RoleRevoked}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must be `account`.\n     */\n    function renounceRole(bytes32 role, address account) public virtual override {\n        require(account == _msgSender(), "AccessControl: can only renounce roles for self");\n\n        _revokeRole(role, account);\n    }\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\n     * event. Note that unlike {grantRole}, this function doesn\'t perform any\n     * checks on the calling account.\n     *\n     * [WARNING]\n     * ====\n     * This function should only be called from the constructor when setting\n     * up the initial roles for the system.\n     *\n     * Using this function in any other way is effectively circumventing the admin\n     * system imposed by {AccessControl}.\n     * ====\n     *\n     * NOTE: This function is deprecated in favor of {_grantRole}.\n     */\n    function _setupRole(bytes32 role, address account) internal virtual {\n        _grantRole(role, account);\n    }\n\n    /**\n     * @dev Sets `adminRole` as ``role``\'s admin role.\n     *\n     * Emits a {RoleAdminChanged} event.\n     */\n    function _setRoleAdmin(bytes32 role, bytes32 adminRole) internal virtual {\n        bytes32 previousAdminRole = getRoleAdmin(role);\n        _roles[role].adminRole = adminRole;\n        emit RoleAdminChanged(role, previousAdminRole, adminRole);\n    }\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * Internal function without access restriction.\n     */\n    function _grantRole(bytes32 role, address account) internal virtual {\n        if (!hasRole(role, account)) {\n            _roles[role].members[account] = true;\n            emit RoleGranted(role, account, _msgSender());\n        }\n    }\n\n    /**\n     * @dev Revokes `role` from `account`.\n     *\n     * Internal function without access restriction.\n     */\n    function _revokeRole(bytes32 role, address account) internal virtual {\n        if (hasRole(role, account)) {\n            _roles[role].members[account] = false;\n            emit RoleRevoked(role, account, _msgSender());\n        }\n    }\n}\n\n\n// File @openzeppelin/contracts/security/Pausable.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (security/Pausable.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Contract module which allows children to implement an emergency stop\n * mechanism that can be triggered by an authorized account.\n *\n * This module is used through inheritance. It will make available the\n * modifiers `whenNotPaused` and `whenPaused`, which can be applied to\n * the functions of your contract. Note that they will not be pausable by\n * simply including this module, only once the modifiers are put in place.\n */\nabstract contract Pausable is Context {\n    /**\n     * @dev Emitted when the pause is triggered by `account`.\n     */\n    event Paused(address account);\n\n    /**\n     * @dev Emitted when the pause is lifted by `account`.\n     */\n    event Unpaused(address account);\n\n    bool private _paused;\n\n    /**\n     * @dev Initializes the contract in unpaused state.\n     */\n    constructor() {\n        _paused = false;\n    }\n\n    /**\n     * @dev Returns true if the contract is paused, and false otherwise.\n     */\n    function paused() public view virtual returns (bool) {\n        return _paused;\n    }\n\n    /**\n     * @dev Modifier to make a function callable only when the contract is not paused.\n     *\n     * Requirements:\n     *\n     * - The contract must not be paused.\n     */\n    modifier whenNotPaused() {\n        require(!paused(), "Pausable: paused");\n        _;\n    }\n\n    /**\n     * @dev Modifier to make a function callable only when the contract is paused.\n     *\n     * Requirements:\n     *\n     * - The contract must be paused.\n     */\n    modifier whenPaused() {\n        require(paused(), "Pausable: not paused");\n        _;\n    }\n\n    /**\n     * @dev Triggers stopped state.\n     *\n     * Requirements:\n     *\n     * - The contract must not be paused.\n     */\n    function _pause() internal virtual whenNotPaused {\n        _paused = true;\n        emit Paused(_msgSender());\n    }\n\n    /**\n     * @dev Returns to normal state.\n     *\n     * Requirements:\n     *\n     * - The contract must be paused.\n     */\n    function _unpause() internal virtual whenPaused {\n        _paused = false;\n        emit Unpaused(_msgSender());\n    }\n}\n\n\n// File @openzeppelin/contracts/token/ERC1155/IERC1155.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (token/ERC1155/IERC1155.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Required interface of an ERC1155 compliant contract, as defined in the\n * https://eips.ethereum.org/EIPS/eip-1155[EIP].\n *\n * _Available since v3.1._\n */\ninterface IERC1155 is IERC165 {\n    /**\n     * @dev Emitted when `value` tokens of token type `id` are transferred from `from` to `to` by `operator`.\n     */\n    event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);\n\n    /**\n     * @dev Equivalent to multiple {TransferSingle} events, where `operator`, `from` and `to` are the same for all\n     * transfers.\n     */\n    event TransferBatch(\n        address indexed operator,\n        address indexed from,\n        address indexed to,\n        uint256[] ids,\n        uint256[] values\n    );\n\n    /**\n     * @dev Emitted when `account` grants or revokes permission to `operator` to transfer their tokens, according to\n     * `approved`.\n     */\n    event ApprovalForAll(address indexed account, address indexed operator, bool approved);\n\n    /**\n     * @dev Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI.\n     *\n     * If an {URI} event was emitted for `id`, the standard\n     * https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that `value` will equal the value\n     * returned by {IERC1155MetadataURI-uri}.\n     */\n    event URI(string value, uint256 indexed id);\n\n    /**\n     * @dev Returns the amount of tokens of token type `id` owned by `account`.\n     *\n     * Requirements:\n     *\n     * - `account` cannot be the zero address.\n     */\n    function balanceOf(address account, uint256 id) external view returns (uint256);\n\n    /**\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}.\n     *\n     * Requirements:\n     *\n     * - `accounts` and `ids` must have the same length.\n     */\n    function balanceOfBatch(address[] calldata accounts, uint256[] calldata ids)\n        external\n        view\n        returns (uint256[] memory);\n\n    /**\n     * @dev Grants or revokes permission to `operator` to transfer the caller\'s tokens, according to `approved`,\n     *\n     * Emits an {ApprovalForAll} event.\n     *\n     * Requirements:\n     *\n     * - `operator` cannot be the caller.\n     */\n    function setApprovalForAll(address operator, bool approved) external;\n\n    /**\n     * @dev Returns true if `operator` is approved to transfer ``account``\'s tokens.\n     *\n     * See {setApprovalForAll}.\n     */\n    function isApprovedForAll(address account, address operator) external view returns (bool);\n\n    /**\n     * @dev Transfers `amount` tokens of token type `id` from `from` to `to`.\n     *\n     * Emits a {TransferSingle} event.\n     *\n     * Requirements:\n     *\n     * - `to` cannot be the zero address.\n     * - If the caller is not `from`, it must be have been approved to spend ``from``\'s tokens via {setApprovalForAll}.\n     * - `from` must have a balance of tokens of type `id` of at least `amount`.\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\n     * acceptance magic value.\n     */\n    function safeTransferFrom(\n        address from,\n        address to,\n        uint256 id,\n        uint256 amount,\n        bytes calldata data\n    ) external;\n\n    /**\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}.\n     *\n     * Emits a {TransferBatch} event.\n     *\n     * Requirements:\n     *\n     * - `ids` and `amounts` must have the same length.\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\n     * acceptance magic value.\n     */\n    function safeBatchTransferFrom(\n        address from,\n        address to,\n        uint256[] calldata ids,\n        uint256[] calldata amounts,\n        bytes calldata data\n    ) external;\n}\n\n\n// File @openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol@v4.5.0\n\n// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC1155/IERC1155Receiver.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev _Available since v3.1._\n */\ninterface IERC1155Receiver is IERC165 {\n    /**\n     * @dev Handles the receipt of a single ERC1155 token type. This function is\n     * called at the end of a `safeTransferFrom` after the balance has been updated.\n     *\n     * NOTE: To accept the transfer, this must return\n     * `bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))`\n     * (i.e. 0xf23a6e61, or its own function selector).\n     *\n     * @param operator The address which initiated the transfer (i.e. msg.sender)\n     * @param from The address which previously owned the token\n     * @param id The ID of the token being transferred\n     * @param value The amount of tokens being transferred\n     * @param data Additional data with no specified format\n     * @return `bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))` if transfer is allowed\n     */\n    function onERC1155Received(\n        address operator,\n        address from,\n        uint256 id,\n        uint256 value,\n        bytes calldata data\n    ) external returns (bytes4);\n\n    /**\n     * @dev Handles the receipt of a multiple ERC1155 token types. This function\n     * is called at the end of a `safeBatchTransferFrom` after the balances have\n     * been updated.\n     *\n     * NOTE: To accept the transfer(s), this must return\n     * `bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))`\n     * (i.e. 0xbc197c81, or its own function selector).\n     *\n     * @param operator The address which initiated the batch transfer (i.e. msg.sender)\n     * @param from The address which previously owned the token\n     * @param ids An array containing ids of each token being transferred (order and length must match values array)\n     * @param values An array containing amounts of each token being transferred (order and length must match ids array)\n     * @param data Additional data with no specified format\n     * @return `bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))` if transfer is allowed\n     */\n    function onERC1155BatchReceived(\n        address operator,\n        address from,\n        uint256[] calldata ids,\n        uint256[] calldata values,\n        bytes calldata data\n    ) external returns (bytes4);\n}\n\n\n// File @openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (token/ERC1155/extensions/IERC1155MetadataURI.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Interface of the optional ERC1155MetadataExtension interface, as defined\n * in the https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[EIP].\n *\n * _Available since v3.1._\n */\ninterface IERC1155MetadataURI is IERC1155 {\n    /**\n     * @dev Returns the URI for token type `id`.\n     *\n     * If the `\\{id\\}` substring is present in the URI, it must be replaced by\n     * clients with the actual token type ID.\n     */\n    function uri(uint256 id) external view returns (string memory);\n}\n\n\n// File @openzeppelin/contracts/utils/Address.sol@v4.5.0\n\n// OpenZeppelin Contracts (last updated v4.5.0) (utils/Address.sol)\n\npragma solidity ^0.8.1;\n\n/**\n * @dev Collection of functions related to the address type\n */\nlibrary Address {\n    /**\n     * @dev Returns true if `account` is a contract.\n     *\n     * [IMPORTANT]\n     * ====\n     * It is unsafe to assume that an address for which this function returns\n     * false is an externally-owned account (EOA) and not a contract.\n     *\n     * Among others, `isContract` will return false for the following\n     * types of addresses:\n     *\n     *  - an externally-owned account\n     *  - a contract in construction\n     *  - an address where a contract will be created\n     *  - an address where a contract lived, but was destroyed\n     * ====\n     *\n     * [IMPORTANT]\n     * ====\n     * You shouldn\'t rely on `isContract` to protect against flash loan attacks!\n     *\n     * Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets\n     * like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract\n     * constructor.\n     * ====\n     */\n    function isContract(address account) internal view returns (bool) {\n        // This method relies on extcodesize/address.code.length, which returns 0\n        // for contracts in construction, since the code is only stored at the end\n        // of the constructor execution.\n\n        return account.code.length > 0;\n    }\n\n    /**\n     * @dev Replacement for Solidity\'s `transfer`: sends `amount` wei to\n     * `recipient`, forwarding all available gas and reverting on errors.\n     *\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\n     * imposed by `transfer`, making them unable to receive funds via\n     * `transfer`. {sendValue} removes this limitation.\n     *\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\n     *\n     * IMPORTANT: because control is transferred to `recipient`, care must be\n     * taken to not create reentrancy vulnerabilities. Consider using\n     * {ReentrancyGuard} or the\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\n     */\n    function sendValue(address payable recipient, uint256 amount) internal {\n        require(address(this).balance >= amount, "Address: insufficient balance");\n\n        (bool success, ) = recipient.call{value: amount}("");\n        require(success, "Address: unable to send value, recipient may have reverted");\n    }\n\n    /**\n     * @dev Performs a Solidity function call using a low level `call`. A\n     * plain `call` is an unsafe replacement for a function call: use this\n     * function instead.\n     *\n     * If `target` reverts with a revert reason, it is bubbled up by this\n     * function (like regular Solidity function calls).\n     *\n     * Returns the raw returned data. To convert to the expected return value,\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\n     *\n     * Requirements:\n     *\n     * - `target` must be a contract.\n     * - calling `target` with `data` must not revert.\n     *\n     * _Available since v3.1._\n     */\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\n        return functionCall(target, data, "Address: low-level call failed");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\n     * `errorMessage` as a fallback revert reason when `target` reverts.\n     *\n     * _Available since v3.1._\n     */\n    function functionCall(\n        address target,\n        bytes memory data,\n        string memory errorMessage\n    ) internal returns (bytes memory) {\n        return functionCallWithValue(target, data, 0, errorMessage);\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n     * but also transferring `value` wei to `target`.\n     *\n     * Requirements:\n     *\n     * - the calling contract must have an ETH balance of at least `value`.\n     * - the called Solidity function must be `payable`.\n     *\n     * _Available since v3.1._\n     */\n    function functionCallWithValue(\n        address target,\n        bytes memory data,\n        uint256 value\n    ) internal returns (bytes memory) {\n        return functionCallWithValue(target, data, value, "Address: low-level call with value failed");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\n     *\n     * _Available since v3.1._\n     */\n    function functionCallWithValue(\n        address target,\n        bytes memory data,\n        uint256 value,\n        string memory errorMessage\n    ) internal returns (bytes memory) {\n        require(address(this).balance >= value, "Address: insufficient balance for call");\n        require(isContract(target), "Address: call to non-contract");\n\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\n        return verifyCallResult(success, returndata, errorMessage);\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n     * but performing a static call.\n     *\n     * _Available since v3.3._\n     */\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\n        return functionStaticCall(target, data, "Address: low-level static call failed");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\n     * but performing a static call.\n     *\n     * _Available since v3.3._\n     */\n    function functionStaticCall(\n        address target,\n        bytes memory data,\n        string memory errorMessage\n    ) internal view returns (bytes memory) {\n        require(isContract(target), "Address: static call to non-contract");\n\n        (bool success, bytes memory returndata) = target.staticcall(data);\n        return verifyCallResult(success, returndata, errorMessage);\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n     * but performing a delegate call.\n     *\n     * _Available since v3.4._\n     */\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\n        return functionDelegateCall(target, data, "Address: low-level delegate call failed");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\n     * but performing a delegate call.\n     *\n     * _Available since v3.4._\n     */\n    function functionDelegateCall(\n        address target,\n        bytes memory data,\n        string memory errorMessage\n    ) internal returns (bytes memory) {\n        require(isContract(target), "Address: delegate call to non-contract");\n\n        (bool success, bytes memory returndata) = target.delegatecall(data);\n        return verifyCallResult(success, returndata, errorMessage);\n    }\n\n    /**\n     * @dev Tool to verifies that a low level call was successful, and revert if it wasn\'t, either by bubbling the\n     * revert reason using the provided one.\n     *\n     * _Available since v4.3._\n     */\n    function verifyCallResult(\n        bool success,\n        bytes memory returndata,\n        string memory errorMessage\n    ) internal pure returns (bytes memory) {\n        if (success) {\n            return returndata;\n        } else {\n            // Look for revert reason and bubble it up if present\n            if (returndata.length > 0) {\n                // The easiest way to bubble the revert reason is using memory via assembly\n\n                assembly {\n                    let returndata_size := mload(returndata)\n                    revert(add(32, returndata), returndata_size)\n                }\n            } else {\n                revert(errorMessage);\n            }\n        }\n    }\n}\n\n\n// File @openzeppelin/contracts/token/ERC1155/ERC1155.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (token/ERC1155/ERC1155.sol)\n\npragma solidity ^0.8.0;\n\n\n\n\n\n\n/**\n * @dev Implementation of the basic standard multi-token.\n * See https://eips.ethereum.org/EIPS/eip-1155\n * Originally based on code by Enjin: https://github.com/enjin/erc-1155\n *\n * _Available since v3.1._\n */\ncontract ERC1155 is Context, ERC165, IERC1155, IERC1155MetadataURI {\n    using Address for address;\n\n    // Mapping from token ID to account balances\n    mapping(uint256 => mapping(address => uint256)) private _balances;\n\n    // Mapping from account to operator approvals\n    mapping(address => mapping(address => bool)) private _operatorApprovals;\n\n    // Used as the URI for all token types by relying on ID substitution, e.g. https://token-cdn-domain/{id}.json\n    string private _uri;\n\n    /**\n     * @dev See {_setURI}.\n     */\n    constructor(string memory uri_) {\n        _setURI(uri_);\n    }\n\n    /**\n     * @dev See {IERC165-supportsInterface}.\n     */\n    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {\n        return\n            interfaceId == type(IERC1155).interfaceId ||\n            interfaceId == type(IERC1155MetadataURI).interfaceId ||\n            super.supportsInterface(interfaceId);\n    }\n\n    /**\n     * @dev See {IERC1155MetadataURI-uri}.\n     *\n     * This implementation returns the same URI for *all* token types. It relies\n     * on the token type ID substitution mechanism\n     * https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP].\n     *\n     * Clients calling this function must replace the `\\{id\\}` substring with the\n     * actual token type ID.\n     */\n    function uri(uint256) public view virtual override returns (string memory) {\n        return _uri;\n    }\n\n    /**\n     * @dev See {IERC1155-balanceOf}.\n     *\n     * Requirements:\n     *\n     * - `account` cannot be the zero address.\n     */\n    function balanceOf(address account, uint256 id) public view virtual override returns (uint256) {\n        require(account != address(0), "ERC1155: balance query for the zero address");\n        return _balances[id][account];\n    }\n\n    /**\n     * @dev See {IERC1155-balanceOfBatch}.\n     *\n     * Requirements:\n     *\n     * - `accounts` and `ids` must have the same length.\n     */\n    function balanceOfBatch(address[] memory accounts, uint256[] memory ids)\n        public\n        view\n        virtual\n        override\n        returns (uint256[] memory)\n    {\n        require(accounts.length == ids.length, "ERC1155: accounts and ids length mismatch");\n\n        uint256[] memory batchBalances = new uint256[](accounts.length);\n\n        for (uint256 i = 0; i < accounts.length; ++i) {\n            batchBalances[i] = balanceOf(accounts[i], ids[i]);\n        }\n\n        return batchBalances;\n    }\n\n    /**\n     * @dev See {IERC1155-setApprovalForAll}.\n     */\n    function setApprovalForAll(address operator, bool approved) public virtual override {\n        _setApprovalForAll(_msgSender(), operator, approved);\n    }\n\n    /**\n     * @dev See {IERC1155-isApprovedForAll}.\n     */\n    function isApprovedForAll(address account, address operator) public view virtual override returns (bool) {\n        return _operatorApprovals[account][operator];\n    }\n\n    /**\n     * @dev See {IERC1155-safeTransferFrom}.\n     */\n    function safeTransferFrom(\n        address from,\n        address to,\n        uint256 id,\n        uint256 amount,\n        bytes memory data\n    ) public virtual override {\n        require(\n            from == _msgSender() || isApprovedForAll(from, _msgSender()),\n            "ERC1155: caller is not owner nor approved"\n        );\n        _safeTransferFrom(from, to, id, amount, data);\n    }\n\n    /**\n     * @dev See {IERC1155-safeBatchTransferFrom}.\n     */\n    function safeBatchTransferFrom(\n        address from,\n        address to,\n        uint256[] memory ids,\n        uint256[] memory amounts,\n        bytes memory data\n    ) public virtual override {\n        require(\n            from == _msgSender() || isApprovedForAll(from, _msgSender()),\n            "ERC1155: transfer caller is not owner nor approved"\n        );\n        _safeBatchTransferFrom(from, to, ids, amounts, data);\n    }\n\n    /**\n     * @dev Transfers `amount` tokens of token type `id` from `from` to `to`.\n     *\n     * Emits a {TransferSingle} event.\n     *\n     * Requirements:\n     *\n     * - `to` cannot be the zero address.\n     * - `from` must have a balance of tokens of type `id` of at least `amount`.\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\n     * acceptance magic value.\n     */\n    function _safeTransferFrom(\n        address from,\n        address to,\n        uint256 id,\n        uint256 amount,\n        bytes memory data\n    ) internal virtual {\n        require(to != address(0), "ERC1155: transfer to the zero address");\n\n        address operator = _msgSender();\n\n        _beforeTokenTransfer(operator, from, to, _asSingletonArray(id), _asSingletonArray(amount), data);\n\n        uint256 fromBalance = _balances[id][from];\n        require(fromBalance >= amount, "ERC1155: insufficient balance for transfer");\n        unchecked {\n            _balances[id][from] = fromBalance - amount;\n        }\n        _balances[id][to] += amount;\n\n        emit TransferSingle(operator, from, to, id, amount);\n\n        _doSafeTransferAcceptanceCheck(operator, from, to, id, amount, data);\n    }\n\n    /**\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_safeTransferFrom}.\n     *\n     * Emits a {TransferBatch} event.\n     *\n     * Requirements:\n     *\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\n     * acceptance magic value.\n     */\n    function _safeBatchTransferFrom(\n        address from,\n        address to,\n        uint256[] memory ids,\n        uint256[] memory amounts,\n        bytes memory data\n    ) internal virtual {\n        require(ids.length == amounts.length, "ERC1155: ids and amounts length mismatch");\n        require(to != address(0), "ERC1155: transfer to the zero address");\n\n        address operator = _msgSender();\n\n        _beforeTokenTransfer(operator, from, to, ids, amounts, data);\n\n        for (uint256 i = 0; i < ids.length; ++i) {\n            uint256 id = ids[i];\n            uint256 amount = amounts[i];\n\n            uint256 fromBalance = _balances[id][from];\n            require(fromBalance >= amount, "ERC1155: insufficient balance for transfer");\n            unchecked {\n                _balances[id][from] = fromBalance - amount;\n            }\n            _balances[id][to] += amount;\n        }\n\n        emit TransferBatch(operator, from, to, ids, amounts);\n\n        _doSafeBatchTransferAcceptanceCheck(operator, from, to, ids, amounts, data);\n    }\n\n    /**\n     * @dev Sets a new URI for all token types, by relying on the token type ID\n     * substitution mechanism\n     * https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP].\n     *\n     * By this mechanism, any occurrence of the `\\{id\\}` substring in either the\n     * URI or any of the amounts in the JSON file at said URI will be replaced by\n     * clients with the token type ID.\n     *\n     * For example, the `https://token-cdn-domain/\\{id\\}.json` URI would be\n     * interpreted by clients as\n     * `https://token-cdn-domain/000000000000000000000000000000000000000000000000000000000004cce0.json`\n     * for token type ID 0x4cce0.\n     *\n     * See {uri}.\n     *\n     * Because these URIs cannot be meaningfully represented by the {URI} event,\n     * this function emits no events.\n     */\n    function _setURI(string memory newuri) internal virtual {\n        _uri = newuri;\n    }\n\n    /**\n     * @dev Creates `amount` tokens of token type `id`, and assigns them to `to`.\n     *\n     * Emits a {TransferSingle} event.\n     *\n     * Requirements:\n     *\n     * - `to` cannot be the zero address.\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\n     * acceptance magic value.\n     */\n    function _mint(\n        address to,\n        uint256 id,\n        uint256 amount,\n        bytes memory data\n    ) internal virtual {\n        require(to != address(0), "ERC1155: mint to the zero address");\n\n        address operator = _msgSender();\n\n        _beforeTokenTransfer(operator, address(0), to, _asSingletonArray(id), _asSingletonArray(amount), data);\n\n        _balances[id][to] += amount;\n        emit TransferSingle(operator, address(0), to, id, amount);\n\n        _doSafeTransferAcceptanceCheck(operator, address(0), to, id, amount, data);\n    }\n\n    /**\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_mint}.\n     *\n     * Requirements:\n     *\n     * - `ids` and `amounts` must have the same length.\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\n     * acceptance magic value.\n     */\n    function _mintBatch(\n        address to,\n        uint256[] memory ids,\n        uint256[] memory amounts,\n        bytes memory data\n    ) internal virtual {\n        require(to != address(0), "ERC1155: mint to the zero address");\n        require(ids.length == amounts.length, "ERC1155: ids and amounts length mismatch");\n\n        address operator = _msgSender();\n\n        _beforeTokenTransfer(operator, address(0), to, ids, amounts, data);\n\n        for (uint256 i = 0; i < ids.length; i++) {\n            _balances[ids[i]][to] += amounts[i];\n        }\n\n        emit TransferBatch(operator, address(0), to, ids, amounts);\n\n        _doSafeBatchTransferAcceptanceCheck(operator, address(0), to, ids, amounts, data);\n    }\n\n    /**\n     * @dev Destroys `amount` tokens of token type `id` from `from`\n     *\n     * Requirements:\n     *\n     * - `from` cannot be the zero address.\n     * - `from` must have at least `amount` tokens of token type `id`.\n     */\n    function _burn(\n        address from,\n        uint256 id,\n        uint256 amount\n    ) internal virtual {\n        require(from != address(0), "ERC1155: burn from the zero address");\n\n        address operator = _msgSender();\n\n        _beforeTokenTransfer(operator, from, address(0), _asSingletonArray(id), _asSingletonArray(amount), "");\n\n        uint256 fromBalance = _balances[id][from];\n        require(fromBalance >= amount, "ERC1155: burn amount exceeds balance");\n        unchecked {\n            _balances[id][from] = fromBalance - amount;\n        }\n\n        emit TransferSingle(operator, from, address(0), id, amount);\n    }\n\n    /**\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_burn}.\n     *\n     * Requirements:\n     *\n     * - `ids` and `amounts` must have the same length.\n     */\n    function _burnBatch(\n        address from,\n        uint256[] memory ids,\n        uint256[] memory amounts\n    ) internal virtual {\n        require(from != address(0), "ERC1155: burn from the zero address");\n        require(ids.length == amounts.length, "ERC1155: ids and amounts length mismatch");\n\n        address operator = _msgSender();\n\n        _beforeTokenTransfer(operator, from, address(0), ids, amounts, "");\n\n        for (uint256 i = 0; i < ids.length; i++) {\n            uint256 id = ids[i];\n            uint256 amount = amounts[i];\n\n            uint256 fromBalance = _balances[id][from];\n            require(fromBalance >= amount, "ERC1155: burn amount exceeds balance");\n            unchecked {\n                _balances[id][from] = fromBalance - amount;\n            }\n        }\n\n        emit TransferBatch(operator, from, address(0), ids, amounts);\n    }\n\n    /**\n     * @dev Approve `operator` to operate on all of `owner` tokens\n     *\n     * Emits a {ApprovalForAll} event.\n     */\n    function _setApprovalForAll(\n        address owner,\n        address operator,\n        bool approved\n    ) internal virtual {\n        require(owner != operator, "ERC1155: setting approval status for self");\n        _operatorApprovals[owner][operator] = approved;\n        emit ApprovalForAll(owner, operator, approved);\n    }\n\n    /**\n     * @dev Hook that is called before any token transfer. This includes minting\n     * and burning, as well as batched variants.\n     *\n     * The same hook is called on both single and batched variants. For single\n     * transfers, the length of the `id` and `amount` arrays will be 1.\n     *\n     * Calling conditions (for each `id` and `amount` pair):\n     *\n     * - When `from` and `to` are both non-zero, `amount` of ``from``\'s tokens\n     * of token type `id` will be  transferred to `to`.\n     * - When `from` is zero, `amount` tokens of token type `id` will be minted\n     * for `to`.\n     * - when `to` is zero, `amount` of ``from``\'s tokens of token type `id`\n     * will be burned.\n     * - `from` and `to` are never both zero.\n     * - `ids` and `amounts` have the same, non-zero length.\n     *\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\n     */\n    function _beforeTokenTransfer(\n        address operator,\n        address from,\n        address to,\n        uint256[] memory ids,\n        uint256[] memory amounts,\n        bytes memory data\n    ) internal virtual {}\n\n    function _doSafeTransferAcceptanceCheck(\n        address operator,\n        address from,\n        address to,\n        uint256 id,\n        uint256 amount,\n        bytes memory data\n    ) private {\n        if (to.isContract()) {\n            try IERC1155Receiver(to).onERC1155Received(operator, from, id, amount, data) returns (bytes4 response) {\n                if (response != IERC1155Receiver.onERC1155Received.selector) {\n                    revert("ERC1155: ERC1155Receiver rejected tokens");\n                }\n            } catch Error(string memory reason) {\n                revert(reason);\n            } catch {\n                revert("ERC1155: transfer to non ERC1155Receiver implementer");\n            }\n        }\n    }\n\n    function _doSafeBatchTransferAcceptanceCheck(\n        address operator,\n        address from,\n        address to,\n        uint256[] memory ids,\n        uint256[] memory amounts,\n        bytes memory data\n    ) private {\n        if (to.isContract()) {\n            try IERC1155Receiver(to).onERC1155BatchReceived(operator, from, ids, amounts, data) returns (\n                bytes4 response\n            ) {\n                if (response != IERC1155Receiver.onERC1155BatchReceived.selector) {\n                    revert("ERC1155: ERC1155Receiver rejected tokens");\n                }\n            } catch Error(string memory reason) {\n                revert(reason);\n            } catch {\n                revert("ERC1155: transfer to non ERC1155Receiver implementer");\n            }\n        }\n    }\n\n    function _asSingletonArray(uint256 element) private pure returns (uint256[] memory) {\n        uint256[] memory array = new uint256[](1);\n        array[0] = element;\n\n        return array;\n    }\n}\n\n\n// File @openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (token/ERC1155/extensions/ERC1155Burnable.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Extension of {ERC1155} that allows token holders to destroy both their\n * own tokens and those that they have been approved to use.\n *\n * _Available since v3.1._\n */\nabstract contract ERC1155Burnable is ERC1155 {\n    function burn(\n        address account,\n        uint256 id,\n        uint256 value\n    ) public virtual {\n        require(\n            account == _msgSender() || isApprovedForAll(account, _msgSender()),\n            "ERC1155: caller is not owner nor approved"\n        );\n\n        _burn(account, id, value);\n    }\n\n    function burnBatch(\n        address account,\n        uint256[] memory ids,\n        uint256[] memory values\n    ) public virtual {\n        require(\n            account == _msgSender() || isApprovedForAll(account, _msgSender()),\n            "ERC1155: caller is not owner nor approved"\n        );\n\n        _burnBatch(account, ids, values);\n    }\n}\n\n\n// File contracts/StartonERC1155.sol\n\npragma solidity ^0.8.0;\n\n\n\ncontract StartonERC1155 is AccessControl, Pausable, ERC1155Burnable {\n    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");\n    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");\n    bytes32 public constant URI_SETTER_ROLE = keccak256("URI_SETTER_ROLE");\n    bytes32 public constant LOCKER_ROLE = keccak256("LOCKER_ROLE");\n\n\n    string private _contractUriSuffix;\n    string private _baseContractUri;\n\n    bool private _isMintAllowed;\n\n    constructor(string memory name, string memory baseUri, string memory contractUriSuffix, address ownerOrMultiSigContract) ERC1155(name) {\n        _setupRole(DEFAULT_ADMIN_ROLE, ownerOrMultiSigContract);\n        _setupRole(PAUSER_ROLE, ownerOrMultiSigContract);\n        _setupRole(MINTER_ROLE, ownerOrMultiSigContract);\n        _setupRole(URI_SETTER_ROLE, ownerOrMultiSigContract);\n        _setupRole(LOCKER_ROLE, ownerOrMultiSigContract);\n\n        _setURI(baseUri);\n        _contractUriSuffix = contractUriSuffix;\n        _baseContractUri = "https://ipfs.io/ipfs/";\n        _isMintAllowed = true;\n    }\n\n    function setURI(string memory newuri) public {\n        require(hasRole(URI_SETTER_ROLE, msg.sender));\n        _setURI(newuri);\n    }\n\n    function contractURI() public view returns (string memory) {\n        return bytes(_baseContractUri).length > 0\n            ? string(abi.encodePacked(_baseContractUri, _contractUriSuffix))\n            : \'\';\n    }\n\n    function setBaseContractURI(string memory newBaseContractUri) public {\n        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender));\n        \n        _baseContractUri = newBaseContractUri;\n    }\n\n    function pause() public {\n        require(hasRole(PAUSER_ROLE, msg.sender));\n        _pause();\n    }\n\n    function unpause() public {\n        require(hasRole(PAUSER_ROLE, msg.sender));\n        _unpause();\n    }\n\n    function lockMint() public {\n        require(hasRole(LOCKER_ROLE, msg.sender));\n        _isMintAllowed = false;\n    }\n\n    function mint(address account, uint256 id, uint256 amount, bytes memory data)\n        public\n    {\n        require(hasRole(MINTER_ROLE, msg.sender));\n        require(_isMintAllowed);\n\n        _mint(account, id, amount, data);\n    }\n\n    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)\n        public\n    {\n        require(hasRole(MINTER_ROLE, msg.sender));\n        require(_isMintAllowed);\n\n        _mintBatch(to, ids, amounts, data);\n    }\n\n    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)\n        internal\n        whenNotPaused\n        override\n    {\n        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);\n    }\n\n    function supportsInterface(bytes4 interfaceId)\n        public\n        view\n        override(ERC1155, AccessControl)\n        returns (bool)\n    {\n        return super.supportsInterface(interfaceId);\n    }\n}\n',
      bytecode:
        "0x60806040523480156200001157600080fd5b5060405162002d5438038062002d548339810160408190526200003491620003bd565b6001805460ff19169055836200004a8162000188565b5062000058600082620001a1565b620000847f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a82620001a1565b620000b07f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a682620001a1565b620000dc7f7804d923f43a17d325d77e781528e0793b2edd9890ab45fc64efd7b4b427744c82620001a1565b620001087faf9a8bb3cbd6b84fbccefa71ff73e26e798553c6914585a84886212a46a9027982620001a1565b620001138362000188565b8151620001289060059060208501906200024a565b506040805180820190915260158082527f68747470733a2f2f697066732e696f2f697066732f000000000000000000000060209092019182526200016f916006916200024a565b50506007805460ff1916600117905550620004ad915050565b80516200019d9060049060208401906200024a565b5050565b6000828152602081815260408083206001600160a01b03851684529091529020546200019d908390839060ff166200019d576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620002063390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b828054620002589062000470565b90600052602060002090601f0160209004810192826200027c5760008555620002c7565b82601f106200029757805160ff1916838001178555620002c7565b82800160010185558215620002c7579182015b82811115620002c7578251825591602001919060010190620002aa565b50620002d5929150620002d9565b5090565b5b80821115620002d55760008155600101620002da565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200031857600080fd5b81516001600160401b0380821115620003355762000335620002f0565b604051601f8301601f19908116603f01168101908282118183101715620003605762000360620002f0565b816040528381526020925086838588010111156200037d57600080fd5b600091505b83821015620003a1578582018301518183018401529082019062000382565b83821115620003b35760008385830101525b9695505050505050565b60008060008060808587031215620003d457600080fd5b84516001600160401b0380821115620003ec57600080fd5b620003fa8883890162000306565b955060208701519150808211156200041157600080fd5b6200041f8883890162000306565b945060408701519150808211156200043657600080fd5b50620004458782880162000306565b606087015190935090506001600160a01b03811681146200046557600080fd5b939692955090935050565b600181811c908216806200048557607f821691505b60208210811415620004a757634e487b7160e01b600052602260045260246000fd5b50919050565b61289780620004bd6000396000f3fe608060405234801561001057600080fd5b50600436106101ce5760003560e01c8063731133e911610104578063d547741f116100a2578063e985e9c511610071578063e985e9c5146103fa578063f242432a14610436578063f362136714610449578063f5298aca1461047057600080fd5b8063d547741f146103b0578063e0b6bb67146103c3578063e63ab1e9146103cb578063e8a3d485146103f257600080fd5b806391d14854116100de57806391d148541461035b578063a217fddf1461036e578063a22cb46514610376578063d53913931461038957600080fd5b8063731133e9146103195780637f3457101461032c5780638456cb591461035357600080fd5b80632eb2c2d6116101715780633f4ba83a1161014b5780633f4ba83a146102d35780634e1273f4146102db5780635c975abb146102fb5780636b20c4541461030657600080fd5b80632eb2c2d61461029a5780632f2ff15d146102ad57806336568abe146102c057600080fd5b80630cd3a538116101ad5780630cd3a538146102315780630e89341c146102445780631f7fdffa14610264578063248a9ca31461027757600080fd5b8062fdd58e146101d357806301ffc9a7146101f957806302fe53051461021c575b600080fd5b6101e66101e1366004611bdd565b610483565b6040519081526020015b60405180910390f35b61020c610207366004611c1d565b61051c565b60405190151581526020016101f0565b61022f61022a366004611cd9565b61052d565b005b61022f61023f366004611cd9565b61056c565b610257610252366004611d29565b610597565b6040516101f09190611d9a565b61022f610272366004611e61565b61062b565b6101e6610285366004611d29565b60009081526020819052604090206001015490565b61022f6102a8366004611ef9565b61067f565b61022f6102bb366004611fa2565b610716565b61022f6102ce366004611fa2565b610741565b61022f6107bb565b6102ee6102e9366004611fce565b6107f8565b6040516101f091906120d3565b60015460ff1661020c565b61022f6103143660046120e6565b610921565b61022f610327366004612159565b610964565b6101e67f7804d923f43a17d325d77e781528e0793b2edd9890ab45fc64efd7b4b427744c81565b61022f6109b2565b61020c610369366004611fa2565b6109ed565b6101e6600081565b61022f6103843660046121ad565b610a16565b6101e67f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61022f6103be366004611fa2565b610a21565b61022f610a47565b6101e67f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b610257610a86565b61020c6104083660046121e9565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205460ff1690565b61022f610444366004612213565b610ada565b6101e67faf9a8bb3cbd6b84fbccefa71ff73e26e798553c6914585a84886212a46a9027981565b61022f61047e366004612277565b610b1f565b60006001600160a01b0383166104f45760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201526a65726f206164647265737360a81b60648201526084015b60405180910390fd5b5060009081526002602090815260408083206001600160a01b03949094168352929052205490565b600061052782610b62565b92915050565b6105577f7804d923f43a17d325d77e781528e0793b2edd9890ab45fc64efd7b4b427744c336109ed565b61056057600080fd5b61056981610ba2565b50565b6105776000336109ed565b61058057600080fd5b8051610593906006906020840190611b28565b5050565b6060600480546105a6906122aa565b80601f01602080910402602001604051908101604052809291908181526020018280546105d2906122aa565b801561061f5780601f106105f45761010080835404028352916020019161061f565b820191906000526020600020905b81548152906001019060200180831161060257829003601f168201915b50505050509050919050565b6106557f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336109ed565b61065e57600080fd5b60075460ff1661066d57600080fd5b61067984848484610bb5565b50505050565b6001600160a01b03851633148061069b575061069b8533610408565b6107025760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f74206044820152711bdddb995c881b9bdc88185c1c1c9bdd995960721b60648201526084016104eb565b61070f8585858585610d10565b5050505050565b6000828152602081905260409020600101546107328133610ebd565b61073c8383610f21565b505050565b6001600160a01b03811633146107b15760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016104eb565b6105938282610fa5565b6107e57f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a336109ed565b6107ee57600080fd5b6107f661100a565b565b6060815183511461085d5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b60648201526084016104eb565b600083516001600160401b0381111561087857610878611c3a565b6040519080825280602002602001820160405280156108a1578160200160208202803683370190505b50905060005b8451811015610919576108ec8582815181106108c5576108c56122e5565b60200260200101518583815181106108df576108df6122e5565b6020026020010151610483565b8282815181106108fe576108fe6122e5565b602090810291909101015261091281612311565b90506108a7565b509392505050565b6001600160a01b03831633148061093d575061093d8333610408565b6109595760405162461bcd60e51b81526004016104eb9061232c565b61073c83838361109d565b61098e7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336109ed565b61099757600080fd5b60075460ff166109a657600080fd5b6106798484848461122e565b6109dc7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a336109ed565b6109e557600080fd5b6107f6611306565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b61059333838361137f565b600082815260208190526040902060010154610a3d8133610ebd565b61073c8383610fa5565b610a717faf9a8bb3cbd6b84fbccefa71ff73e26e798553c6914585a84886212a46a90279336109ed565b610a7a57600080fd5b6007805460ff19169055565b6060600060068054610a97906122aa565b905011610ab1575060408051602081019091526000815290565b60066005604051602001610ac692919061240f565b604051602081830303815290604052905090565b6001600160a01b038516331480610af65750610af68533610408565b610b125760405162461bcd60e51b81526004016104eb9061232c565b61070f8585858585611460565b6001600160a01b038316331480610b3b5750610b3b8333610408565b610b575760405162461bcd60e51b81526004016104eb9061232c565b61073c838383611581565b60006001600160e01b03198216636cdb3d1360e11b1480610b9357506001600160e01b031982166303a24d0760e21b145b80610527575061052782611686565b8051610593906004906020840190611b28565b6001600160a01b038416610bdb5760405162461bcd60e51b81526004016104eb90612424565b8151835114610bfc5760405162461bcd60e51b81526004016104eb90612465565b33610c0c816000878787876116bb565b60005b8451811015610ca857838181518110610c2a57610c2a6122e5565b602002602001015160026000878481518110610c4857610c486122e5565b602002602001015181526020019081526020016000206000886001600160a01b03166001600160a01b031681526020019081526020016000206000828254610c9091906124ad565b90915550819050610ca081612311565b915050610c0f565b50846001600160a01b031660006001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610cf99291906124c5565b60405180910390a461070f81600087878787611706565b8151835114610d315760405162461bcd60e51b81526004016104eb90612465565b6001600160a01b038416610d575760405162461bcd60e51b81526004016104eb906124f3565b33610d668187878787876116bb565b60005b8451811015610e4f576000858281518110610d8657610d866122e5565b602002602001015190506000858381518110610da457610da46122e5565b60209081029190910181015160008481526002835260408082206001600160a01b038e168352909352919091205490915081811015610df55760405162461bcd60e51b81526004016104eb90612538565b60008381526002602090815260408083206001600160a01b038e8116855292528083208585039055908b16825281208054849290610e349084906124ad565b9250508190555050505080610e4890612311565b9050610d69565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610e9f9291906124c5565b60405180910390a4610eb5818787878787611706565b505050505050565b610ec782826109ed565b61059357610edf816001600160a01b03166014611871565b610eea836020611871565b604051602001610efb929190612582565b60408051601f198184030181529082905262461bcd60e51b82526104eb91600401611d9a565b610f2b82826109ed565b610593576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610f613390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610faf82826109ed565b15610593576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60015460ff166110535760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016104eb565b6001805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b0383166110c35760405162461bcd60e51b81526004016104eb906125f7565b80518251146110e45760405162461bcd60e51b81526004016104eb90612465565b6000339050611107818560008686604051806020016040528060008152506116bb565b60005b83518110156111cf576000848281518110611127576111276122e5565b602002602001015190506000848381518110611145576111456122e5565b60209081029190910181015160008481526002835260408082206001600160a01b038c1683529093529190912054909150818110156111965760405162461bcd60e51b81526004016104eb9061263a565b60009283526002602090815260408085206001600160a01b038b16865290915290922091039055806111c781612311565b91505061110a565b5060006001600160a01b0316846001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb86866040516112209291906124c5565b60405180910390a450505050565b6001600160a01b0384166112545760405162461bcd60e51b81526004016104eb90612424565b336112748160008761126588611a13565b61126e88611a13565b876116bb565b60008481526002602090815260408083206001600160a01b0389168452909152812080548592906112a69084906124ad565b909155505060408051858152602081018590526001600160a01b0380881692600092918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a461070f81600087878787611a5e565b60015460ff161561134c5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104eb565b6001805460ff1916811790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25833611080565b816001600160a01b0316836001600160a01b031614156113f35760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b60648201526084016104eb565b6001600160a01b03838116600081815260036020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0384166114865760405162461bcd60e51b81526004016104eb906124f3565b3361149681878761126588611a13565b60008481526002602090815260408083206001600160a01b038a168452909152902054838110156114d95760405162461bcd60e51b81526004016104eb90612538565b60008581526002602090815260408083206001600160a01b038b81168552925280832087850390559088168252812080548692906115189084906124ad565b909155505060408051868152602081018690526001600160a01b03808916928a821692918616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4611578828888888888611a5e565b50505050505050565b6001600160a01b0383166115a75760405162461bcd60e51b81526004016104eb906125f7565b336115d6818560006115b887611a13565b6115c187611a13565b604051806020016040528060008152506116bb565b60008381526002602090815260408083206001600160a01b0388168452909152902054828110156116195760405162461bcd60e51b81526004016104eb9061263a565b60008481526002602090815260408083206001600160a01b03898116808652918452828520888703905582518981529384018890529092908616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b60006001600160e01b03198216637965db0b60e01b148061052757506301ffc9a760e01b6001600160e01b0319831614610527565b60015460ff16156117015760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104eb565b610eb5565b6001600160a01b0384163b15610eb55760405163bc197c8160e01b81526001600160a01b0385169063bc197c819061174a908990899088908890889060040161267e565b602060405180830381600087803b15801561176457600080fd5b505af1925050508015611794575060408051601f3d908101601f19168201909252611791918101906126dc565b60015b611841576117a06126f9565b806308c379a014156117da57506117b5612715565b806117c057506117dc565b8060405162461bcd60e51b81526004016104eb9190611d9a565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b60648201526084016104eb565b6001600160e01b0319811663bc197c8160e01b146115785760405162461bcd60e51b81526004016104eb9061279e565b606060006118808360026127e6565b61188b9060026124ad565b6001600160401b038111156118a2576118a2611c3a565b6040519080825280601f01601f1916602001820160405280156118cc576020820181803683370190505b509050600360fc1b816000815181106118e7576118e76122e5565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611916576119166122e5565b60200101906001600160f81b031916908160001a905350600061193a8460026127e6565b6119459060016124ad565b90505b60018111156119bd576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611979576119796122e5565b1a60f81b82828151811061198f5761198f6122e5565b60200101906001600160f81b031916908160001a90535060049490941c936119b681612805565b9050611948565b508315611a0c5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016104eb565b9392505050565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110611a4d57611a4d6122e5565b602090810291909101015292915050565b6001600160a01b0384163b15610eb55760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190611aa2908990899088908890889060040161281c565b602060405180830381600087803b158015611abc57600080fd5b505af1925050508015611aec575060408051601f3d908101601f19168201909252611ae9918101906126dc565b60015b611af8576117a06126f9565b6001600160e01b0319811663f23a6e6160e01b146115785760405162461bcd60e51b81526004016104eb9061279e565b828054611b34906122aa565b90600052602060002090601f016020900481019282611b565760008555611b9c565b82601f10611b6f57805160ff1916838001178555611b9c565b82800160010185558215611b9c579182015b82811115611b9c578251825591602001919060010190611b81565b50611ba8929150611bac565b5090565b5b80821115611ba85760008155600101611bad565b80356001600160a01b0381168114611bd857600080fd5b919050565b60008060408385031215611bf057600080fd5b611bf983611bc1565b946020939093013593505050565b6001600160e01b03198116811461056957600080fd5b600060208284031215611c2f57600080fd5b8135611a0c81611c07565b634e487b7160e01b600052604160045260246000fd5b601f8201601f191681016001600160401b0381118282101715611c7557611c75611c3a565b6040525050565b60006001600160401b03831115611c9557611c95611c3a565b604051611cac601f8501601f191660200182611c50565b809150838152848484011115611cc157600080fd5b83836020830137600060208583010152509392505050565b600060208284031215611ceb57600080fd5b81356001600160401b03811115611d0157600080fd5b8201601f81018413611d1257600080fd5b611d2184823560208401611c7c565b949350505050565b600060208284031215611d3b57600080fd5b5035919050565b60005b83811015611d5d578181015183820152602001611d45565b838111156106795750506000910152565b60008151808452611d86816020860160208601611d42565b601f01601f19169290920160200192915050565b602081526000611a0c6020830184611d6e565b60006001600160401b03821115611dc657611dc6611c3a565b5060051b60200190565b600082601f830112611de157600080fd5b81356020611dee82611dad565b604051611dfb8282611c50565b83815260059390931b8501820192828101915086841115611e1b57600080fd5b8286015b84811015611e365780358352918301918301611e1f565b509695505050505050565b600082601f830112611e5257600080fd5b611a0c83833560208501611c7c565b60008060008060808587031215611e7757600080fd5b611e8085611bc1565b935060208501356001600160401b0380821115611e9c57600080fd5b611ea888838901611dd0565b94506040870135915080821115611ebe57600080fd5b611eca88838901611dd0565b93506060870135915080821115611ee057600080fd5b50611eed87828801611e41565b91505092959194509250565b600080600080600060a08688031215611f1157600080fd5b611f1a86611bc1565b9450611f2860208701611bc1565b935060408601356001600160401b0380821115611f4457600080fd5b611f5089838a01611dd0565b94506060880135915080821115611f6657600080fd5b611f7289838a01611dd0565b93506080880135915080821115611f8857600080fd5b50611f9588828901611e41565b9150509295509295909350565b60008060408385031215611fb557600080fd5b82359150611fc560208401611bc1565b90509250929050565b60008060408385031215611fe157600080fd5b82356001600160401b0380821115611ff857600080fd5b818501915085601f83011261200c57600080fd5b8135602061201982611dad565b6040516120268282611c50565b83815260059390931b850182019282810191508984111561204657600080fd5b948201945b8386101561206b5761205c86611bc1565b8252948201949082019061204b565b9650508601359250508082111561208157600080fd5b5061208e85828601611dd0565b9150509250929050565b600081518084526020808501945080840160005b838110156120c8578151875295820195908201906001016120ac565b509495945050505050565b602081526000611a0c6020830184612098565b6000806000606084860312156120fb57600080fd5b61210484611bc1565b925060208401356001600160401b038082111561212057600080fd5b61212c87838801611dd0565b9350604086013591508082111561214257600080fd5b5061214f86828701611dd0565b9150509250925092565b6000806000806080858703121561216f57600080fd5b61217885611bc1565b9350602085013592506040850135915060608501356001600160401b038111156121a157600080fd5b611eed87828801611e41565b600080604083850312156121c057600080fd5b6121c983611bc1565b9150602083013580151581146121de57600080fd5b809150509250929050565b600080604083850312156121fc57600080fd5b61220583611bc1565b9150611fc560208401611bc1565b600080600080600060a0868803121561222b57600080fd5b61223486611bc1565b945061224260208701611bc1565b9350604086013592506060860135915060808601356001600160401b0381111561226b57600080fd5b611f9588828901611e41565b60008060006060848603121561228c57600080fd5b61229584611bc1565b95602085013595506040909401359392505050565b600181811c908216806122be57607f821691505b602082108114156122df57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415612325576123256122fb565b5060010190565b60208082526029908201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260408201526808185c1c1c9bdd995960ba1b606082015260800190565b8054600090600181811c908083168061238f57607f831692505b60208084108214156123b157634e487b7160e01b600052602260045260246000fd5b8180156123c557600181146123d657612403565b60ff19861689528489019650612403565b60008881526020902060005b868110156123fb5781548b8201529085019083016123e2565b505084890196505b50505050505092915050565b6000611d2161241e8386612375565b84612375565b60208082526021908201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736040820152607360f81b606082015260800190565b60208082526028908201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206040820152670dad2e6dac2e8c6d60c31b606082015260800190565b600082198211156124c0576124c06122fb565b500190565b6040815260006124d86040830185612098565b82810360208401526124ea8185612098565b95945050505050565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516125ba816017850160208801611d42565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516125eb816028840160208801611d42565b01602801949350505050565b60208082526023908201527f455243313135353a206275726e2066726f6d20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526024908201527f455243313135353a206275726e20616d6f756e7420657863656564732062616c604082015263616e636560e01b606082015260800190565b6001600160a01b0386811682528516602082015260a0604082018190526000906126aa90830186612098565b82810360608401526126bc8186612098565b905082810360808401526126d08185611d6e565b98975050505050505050565b6000602082840312156126ee57600080fd5b8151611a0c81611c07565b600060033d11156127125760046000803e5060005160e01c5b90565b600060443d10156127235790565b6040516003193d81016004833e81513d6001600160401b03816024840111818411171561275257505050505090565b828501915081518181111561276a5750505050505090565b843d87010160208285010111156127845750505050505090565b61279360208286010187611c50565b509095945050505050565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b6000816000190483118215151615612800576128006122fb565b500290565b600081612814576128146122fb565b506000190190565b6001600160a01b03868116825285166020820152604081018490526060810183905260a06080820181905260009061285690830184611d6e565b97965050505050505056fea2646970667358221220141eca01b0e256dcdbc6e96ac7a8703c26539ee3910efb823d8ca10e8538020c64736f6c63430008090033",
      contractName: "StartonERC1155",
      compilerVersion: "v0.8.9+commit.e5eed63a",
      optimizationUsed: true,
    },
    isActivated: true,
    isAudited: false,
    order: 98,
    tags: [SmartContractTemplateCategories.DEPRECATED],
    category: SmartContractTemplateCategories.DEPRECATED,
  },
  {
    id: "sct_e851adefe4494fc991207b2c37ed8a83",
    name: "One-to-one NFT Deployment (ERC-721)",
    description:
      '<p>The ERC721 is a smart contract standard which is specialised in single-copy Non Fungible Tokens (NFT).\n\t\t\tWithin this standard, tokens are linked to addresses (the owners) and to URIs (references of the NFT contents).</p>\n\t\t\t<p>It is important to notice that we do not store any content directly inside the smart contract.\n\t\t\tOnly references are stored. It is up to the smart contract readers to find the content by themselves using the references.</p>\n\t\t\t<p>Starton provides an <a href="https://app.starton.io/ipfs">IPFS integration</a> in case you need to host your NFT contents.</p>\n\t\t\t<p>Parameters :</p>\n\t\t\t<ul>\n\t\t\t<li><strong>Name</strong> : This is the name of your smart contract which will be reflected on-chain.</li>\n\t\t\t<li><strong>Symbol</strong> : This is the symbol associated to the NFT collection</li>\n\t\t\t<li><strong>BaseUri</strong> : Will be used to concatenate NFT URIs and the ContractUriSuffix<ul>\n\t\t\t<li>Using IPFS: it should be <code>ipfs://ipfs/</code></li>\n\t\t\t<li>Using a centralised server: it should be like <code>https://yourapi.com/endpoint/</code></li>\n\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<li><strong>ContractUriSuffix</strong> (will be concatenated with baseUri):<ul>\n\t\t\t<li>Using IPFS: it is the CID of the contract metadata (more info <a href="https://docs.opensea.io/docs/contract-level-metadata">here</a>)</li>\n\t\t\t<li>Using a centralised server: the path of the contract metadata json</li>\n\t\t\t</ul>\n\t\t\t</li>\n\t\t\t</ul>',
    shortDescription:
      "The smart contract template for single-copy Non Fungible Tokens (NFT). In a video game, one-of-one NFT can consist of a digital good only one player can own at a time such as a piece of land. ",
    blockchains: ["polygon", "avalanche", "binance", "ethereum"],
    abi: [
      {
        type: "constructor",
        inputs: [
          {
            name: "name",
            type: "string",
            internalType: "string",
          },
          {
            name: "symbol",
            type: "string",
            internalType: "string",
          },
          {
            name: "baseUri",
            type: "string",
            internalType: "string",
          },
          {
            name: "contractUriSuffix",
            type: "string",
            internalType: "string",
          },
          {
            name: "ownerOrMultiSigContract",
            type: "address",
            internalType: "address",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        name: "Approval",
        type: "event",
        inputs: [
          {
            name: "owner",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "approved",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "tokenId",
            type: "uint256",
            indexed: true,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        name: "ApprovalForAll",
        type: "event",
        inputs: [
          {
            name: "owner",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "operator",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "approved",
            type: "bool",
            indexed: false,
            internalType: "bool",
          },
        ],
        anonymous: false,
      },
      {
        name: "Paused",
        type: "event",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: false,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "RoleAdminChanged",
        type: "event",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "previousAdminRole",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "newAdminRole",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
        ],
        anonymous: false,
      },
      {
        name: "RoleGranted",
        type: "event",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "sender",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "RoleRevoked",
        type: "event",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "sender",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "Transfer",
        type: "event",
        inputs: [
          {
            name: "from",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "tokenId",
            type: "uint256",
            indexed: true,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        name: "Unpaused",
        type: "event",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: false,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        name: "DEFAULT_ADMIN_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "LOCKER_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "MINTER_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "PAUSER_ROLE",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "approve",
        type: "function",
        inputs: [
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "tokenId",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "balanceOf",
        type: "function",
        inputs: [
          {
            name: "owner",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "burn",
        type: "function",
        inputs: [
          {
            name: "tokenId",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "contractURI",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "string",
            internalType: "string",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "getApproved",
        type: "function",
        inputs: [
          {
            name: "tokenId",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "address",
            internalType: "address",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "getRoleAdmin",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "grantRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "hasRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "isApprovedForAll",
        type: "function",
        inputs: [
          {
            name: "owner",
            type: "address",
            internalType: "address",
          },
          {
            name: "operator",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "lockMint",
        type: "function",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "name",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "string",
            internalType: "string",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "ownerOf",
        type: "function",
        inputs: [
          {
            name: "tokenId",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "address",
            internalType: "address",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "pause",
        type: "function",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "paused",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "renounceRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "revokeRole",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "safeMint",
        type: "function",
        inputs: [
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "metadataURI",
            type: "string",
            internalType: "string",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "safeTransferFrom",
        type: "function",
        inputs: [
          {
            name: "from",
            type: "address",
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "tokenId",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "safeTransferFrom",
        type: "function",
        inputs: [
          {
            name: "from",
            type: "address",
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "tokenId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "_data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "setApprovalForAll",
        type: "function",
        inputs: [
          {
            name: "operator",
            type: "address",
            internalType: "address",
          },
          {
            name: "approved",
            type: "bool",
            internalType: "bool",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "setBaseContractURI",
        type: "function",
        inputs: [
          {
            name: "newBaseContractUri",
            type: "string",
            internalType: "string",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "supportsInterface",
        type: "function",
        inputs: [
          {
            name: "interfaceId",
            type: "bytes4",
            internalType: "bytes4",
          },
        ],
        outputs: [
          {
            name: "",
            type: "bool",
            internalType: "bool",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "symbol",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "string",
            internalType: "string",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "tokenByIndex",
        type: "function",
        inputs: [
          {
            name: "index",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "tokenOfOwnerByIndex",
        type: "function",
        inputs: [
          {
            name: "owner",
            type: "address",
            internalType: "address",
          },
          {
            name: "index",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "tokenURI",
        type: "function",
        inputs: [
          {
            name: "tokenId",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "",
            type: "string",
            internalType: "string",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "totalSupply",
        type: "function",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "view",
      },
      {
        name: "transferFrom",
        type: "function",
        inputs: [
          {
            name: "from",
            type: "address",
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "tokenId",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        name: "unpause",
        type: "function",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
    ],
    compilationDetails: {
      runs: 200,
      source:
        '// Sources flattened with hardhat v2.9.1 https://hardhat.org\n\n// File @openzeppelin/contracts/utils/introspection/IERC165.sol@v4.5.0\n\n// SPDX-License-Identifier: MIT\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Interface of the ERC165 standard, as defined in the\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\n *\n * Implementers can declare support of contract interfaces, which can then be\n * queried by others ({ERC165Checker}).\n *\n * For an implementation, see {ERC165}.\n */\ninterface IERC165 {\n    /**\n     * @dev Returns true if this contract implements the interface defined by\n     * `interfaceId`. See the corresponding\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\n     * to learn more about how these ids are created.\n     *\n     * This function call must use less than 30 000 gas.\n     */\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\n}\n\n\n// File @openzeppelin/contracts/token/ERC721/IERC721.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/IERC721.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Required interface of an ERC721 compliant contract.\n */\ninterface IERC721 is IERC165 {\n    /**\n     * @dev Emitted when `tokenId` token is transferred from `from` to `to`.\n     */\n    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);\n\n    /**\n     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.\n     */\n    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);\n\n    /**\n     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\n     */\n    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);\n\n    /**\n     * @dev Returns the number of tokens in ``owner``\'s account.\n     */\n    function balanceOf(address owner) external view returns (uint256 balance);\n\n    /**\n     * @dev Returns the owner of the `tokenId` token.\n     *\n     * Requirements:\n     *\n     * - `tokenId` must exist.\n     */\n    function ownerOf(uint256 tokenId) external view returns (address owner);\n\n    /**\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\n     *\n     * Requirements:\n     *\n     * - `from` cannot be the zero address.\n     * - `to` cannot be the zero address.\n     * - `tokenId` token must exist and be owned by `from`.\n     * - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}.\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\n     *\n     * Emits a {Transfer} event.\n     */\n    function safeTransferFrom(\n        address from,\n        address to,\n        uint256 tokenId\n    ) external;\n\n    /**\n     * @dev Transfers `tokenId` token from `from` to `to`.\n     *\n     * WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible.\n     *\n     * Requirements:\n     *\n     * - `from` cannot be the zero address.\n     * - `to` cannot be the zero address.\n     * - `tokenId` token must be owned by `from`.\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\n     *\n     * Emits a {Transfer} event.\n     */\n    function transferFrom(\n        address from,\n        address to,\n        uint256 tokenId\n    ) external;\n\n    /**\n     * @dev Gives permission to `to` to transfer `tokenId` token to another account.\n     * The approval is cleared when the token is transferred.\n     *\n     * Only a single account can be approved at a time, so approving the zero address clears previous approvals.\n     *\n     * Requirements:\n     *\n     * - The caller must own the token or be an approved operator.\n     * - `tokenId` must exist.\n     *\n     * Emits an {Approval} event.\n     */\n    function approve(address to, uint256 tokenId) external;\n\n    /**\n     * @dev Returns the account approved for `tokenId` token.\n     *\n     * Requirements:\n     *\n     * - `tokenId` must exist.\n     */\n    function getApproved(uint256 tokenId) external view returns (address operator);\n\n    /**\n     * @dev Approve or remove `operator` as an operator for the caller.\n     * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.\n     *\n     * Requirements:\n     *\n     * - The `operator` cannot be the caller.\n     *\n     * Emits an {ApprovalForAll} event.\n     */\n    function setApprovalForAll(address operator, bool _approved) external;\n\n    /**\n     * @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.\n     *\n     * See {setApprovalForAll}\n     */\n    function isApprovedForAll(address owner, address operator) external view returns (bool);\n\n    /**\n     * @dev Safely transfers `tokenId` token from `from` to `to`.\n     *\n     * Requirements:\n     *\n     * - `from` cannot be the zero address.\n     * - `to` cannot be the zero address.\n     * - `tokenId` token must exist and be owned by `from`.\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\n     *\n     * Emits a {Transfer} event.\n     */\n    function safeTransferFrom(\n        address from,\n        address to,\n        uint256 tokenId,\n        bytes calldata data\n    ) external;\n}\n\n\n// File @openzeppelin/contracts/token/ERC721/IERC721Receiver.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/IERC721Receiver.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @title ERC721 token receiver interface\n * @dev Interface for any contract that wants to support safeTransfers\n * from ERC721 asset contracts.\n */\ninterface IERC721Receiver {\n    /**\n     * @dev Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom}\n     * by `operator` from `from`, this function is called.\n     *\n     * It must return its Solidity selector to confirm the token transfer.\n     * If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted.\n     *\n     * The selector can be obtained in Solidity with `IERC721.onERC721Received.selector`.\n     */\n    function onERC721Received(\n        address operator,\n        address from,\n        uint256 tokenId,\n        bytes calldata data\n    ) external returns (bytes4);\n}\n\n\n// File @openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/extensions/IERC721Metadata.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @title ERC-721 Non-Fungible Token Standard, optional metadata extension\n * @dev See https://eips.ethereum.org/EIPS/eip-721\n */\ninterface IERC721Metadata is IERC721 {\n    /**\n     * @dev Returns the token collection name.\n     */\n    function name() external view returns (string memory);\n\n    /**\n     * @dev Returns the token collection symbol.\n     */\n    function symbol() external view returns (string memory);\n\n    /**\n     * @dev Returns the Uniform Resource Identifier (URI) for `tokenId` token.\n     */\n    function tokenURI(uint256 tokenId) external view returns (string memory);\n}\n\n\n// File @openzeppelin/contracts/utils/Address.sol@v4.5.0\n\n// OpenZeppelin Contracts (last updated v4.5.0) (utils/Address.sol)\n\npragma solidity ^0.8.1;\n\n/**\n * @dev Collection of functions related to the address type\n */\nlibrary Address {\n    /**\n     * @dev Returns true if `account` is a contract.\n     *\n     * [IMPORTANT]\n     * ====\n     * It is unsafe to assume that an address for which this function returns\n     * false is an externally-owned account (EOA) and not a contract.\n     *\n     * Among others, `isContract` will return false for the following\n     * types of addresses:\n     *\n     *  - an externally-owned account\n     *  - a contract in construction\n     *  - an address where a contract will be created\n     *  - an address where a contract lived, but was destroyed\n     * ====\n     *\n     * [IMPORTANT]\n     * ====\n     * You shouldn\'t rely on `isContract` to protect against flash loan attacks!\n     *\n     * Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets\n     * like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract\n     * constructor.\n     * ====\n     */\n    function isContract(address account) internal view returns (bool) {\n        // This method relies on extcodesize/address.code.length, which returns 0\n        // for contracts in construction, since the code is only stored at the end\n        // of the constructor execution.\n\n        return account.code.length > 0;\n    }\n\n    /**\n     * @dev Replacement for Solidity\'s `transfer`: sends `amount` wei to\n     * `recipient`, forwarding all available gas and reverting on errors.\n     *\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\n     * imposed by `transfer`, making them unable to receive funds via\n     * `transfer`. {sendValue} removes this limitation.\n     *\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\n     *\n     * IMPORTANT: because control is transferred to `recipient`, care must be\n     * taken to not create reentrancy vulnerabilities. Consider using\n     * {ReentrancyGuard} or the\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\n     */\n    function sendValue(address payable recipient, uint256 amount) internal {\n        require(address(this).balance >= amount, "Address: insufficient balance");\n\n        (bool success, ) = recipient.call{value: amount}("");\n        require(success, "Address: unable to send value, recipient may have reverted");\n    }\n\n    /**\n     * @dev Performs a Solidity function call using a low level `call`. A\n     * plain `call` is an unsafe replacement for a function call: use this\n     * function instead.\n     *\n     * If `target` reverts with a revert reason, it is bubbled up by this\n     * function (like regular Solidity function calls).\n     *\n     * Returns the raw returned data. To convert to the expected return value,\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\n     *\n     * Requirements:\n     *\n     * - `target` must be a contract.\n     * - calling `target` with `data` must not revert.\n     *\n     * _Available since v3.1._\n     */\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\n        return functionCall(target, data, "Address: low-level call failed");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\n     * `errorMessage` as a fallback revert reason when `target` reverts.\n     *\n     * _Available since v3.1._\n     */\n    function functionCall(\n        address target,\n        bytes memory data,\n        string memory errorMessage\n    ) internal returns (bytes memory) {\n        return functionCallWithValue(target, data, 0, errorMessage);\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n     * but also transferring `value` wei to `target`.\n     *\n     * Requirements:\n     *\n     * - the calling contract must have an ETH balance of at least `value`.\n     * - the called Solidity function must be `payable`.\n     *\n     * _Available since v3.1._\n     */\n    function functionCallWithValue(\n        address target,\n        bytes memory data,\n        uint256 value\n    ) internal returns (bytes memory) {\n        return functionCallWithValue(target, data, value, "Address: low-level call with value failed");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\n     *\n     * _Available since v3.1._\n     */\n    function functionCallWithValue(\n        address target,\n        bytes memory data,\n        uint256 value,\n        string memory errorMessage\n    ) internal returns (bytes memory) {\n        require(address(this).balance >= value, "Address: insufficient balance for call");\n        require(isContract(target), "Address: call to non-contract");\n\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\n        return verifyCallResult(success, returndata, errorMessage);\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n     * but performing a static call.\n     *\n     * _Available since v3.3._\n     */\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\n        return functionStaticCall(target, data, "Address: low-level static call failed");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\n     * but performing a static call.\n     *\n     * _Available since v3.3._\n     */\n    function functionStaticCall(\n        address target,\n        bytes memory data,\n        string memory errorMessage\n    ) internal view returns (bytes memory) {\n        require(isContract(target), "Address: static call to non-contract");\n\n        (bool success, bytes memory returndata) = target.staticcall(data);\n        return verifyCallResult(success, returndata, errorMessage);\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n     * but performing a delegate call.\n     *\n     * _Available since v3.4._\n     */\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\n        return functionDelegateCall(target, data, "Address: low-level delegate call failed");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\n     * but performing a delegate call.\n     *\n     * _Available since v3.4._\n     */\n    function functionDelegateCall(\n        address target,\n        bytes memory data,\n        string memory errorMessage\n    ) internal returns (bytes memory) {\n        require(isContract(target), "Address: delegate call to non-contract");\n\n        (bool success, bytes memory returndata) = target.delegatecall(data);\n        return verifyCallResult(success, returndata, errorMessage);\n    }\n\n    /**\n     * @dev Tool to verifies that a low level call was successful, and revert if it wasn\'t, either by bubbling the\n     * revert reason using the provided one.\n     *\n     * _Available since v4.3._\n     */\n    function verifyCallResult(\n        bool success,\n        bytes memory returndata,\n        string memory errorMessage\n    ) internal pure returns (bytes memory) {\n        if (success) {\n            return returndata;\n        } else {\n            // Look for revert reason and bubble it up if present\n            if (returndata.length > 0) {\n                // The easiest way to bubble the revert reason is using memory via assembly\n\n                assembly {\n                    let returndata_size := mload(returndata)\n                    revert(add(32, returndata), returndata_size)\n                }\n            } else {\n                revert(errorMessage);\n            }\n        }\n    }\n}\n\n\n// File @openzeppelin/contracts/utils/Context.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Provides information about the current execution context, including the\n * sender of the transaction and its data. While these are generally available\n * via msg.sender and msg.data, they should not be accessed in such a direct\n * manner, since when dealing with meta-transactions the account sending and\n * paying for execution may not be the actual sender (as far as an application\n * is concerned).\n *\n * This contract is only required for intermediate, library-like contracts.\n */\nabstract contract Context {\n    function _msgSender() internal view virtual returns (address) {\n        return msg.sender;\n    }\n\n    function _msgData() internal view virtual returns (bytes calldata) {\n        return msg.data;\n    }\n}\n\n\n// File @openzeppelin/contracts/utils/Strings.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/Strings.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev String operations.\n */\nlibrary Strings {\n    bytes16 private constant _HEX_SYMBOLS = "0123456789abcdef";\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\n     */\n    function toString(uint256 value) internal pure returns (string memory) {\n        // Inspired by OraclizeAPI\'s implementation - MIT licence\n        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol\n\n        if (value == 0) {\n            return "0";\n        }\n        uint256 temp = value;\n        uint256 digits;\n        while (temp != 0) {\n            digits++;\n            temp /= 10;\n        }\n        bytes memory buffer = new bytes(digits);\n        while (value != 0) {\n            digits -= 1;\n            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));\n            value /= 10;\n        }\n        return string(buffer);\n    }\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\n     */\n    function toHexString(uint256 value) internal pure returns (string memory) {\n        if (value == 0) {\n            return "0x00";\n        }\n        uint256 temp = value;\n        uint256 length = 0;\n        while (temp != 0) {\n            length++;\n            temp >>= 8;\n        }\n        return toHexString(value, length);\n    }\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\n     */\n    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\n        bytes memory buffer = new bytes(2 * length + 2);\n        buffer[0] = "0";\n        buffer[1] = "x";\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\n            buffer[i] = _HEX_SYMBOLS[value & 0xf];\n            value >>= 4;\n        }\n        require(value == 0, "Strings: hex length insufficient");\n        return string(buffer);\n    }\n}\n\n\n// File @openzeppelin/contracts/utils/introspection/ERC165.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Implementation of the {IERC165} interface.\n *\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\n * for the additional interface id that will be supported. For example:\n *\n * ```solidity\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\n * }\n * ```\n *\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\n */\nabstract contract ERC165 is IERC165 {\n    /**\n     * @dev See {IERC165-supportsInterface}.\n     */\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n        return interfaceId == type(IERC165).interfaceId;\n    }\n}\n\n\n// File @openzeppelin/contracts/token/ERC721/ERC721.sol@v4.5.0\n\n// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC721/ERC721.sol)\n\npragma solidity ^0.8.0;\n\n\n\n\n\n\n\n/**\n * @dev Implementation of https://eips.ethereum.org/EIPS/eip-721[ERC721] Non-Fungible Token Standard, including\n * the Metadata extension, but not including the Enumerable extension, which is available separately as\n * {ERC721Enumerable}.\n */\ncontract ERC721 is Context, ERC165, IERC721, IERC721Metadata {\n    using Address for address;\n    using Strings for uint256;\n\n    // Token name\n    string private _name;\n\n    // Token symbol\n    string private _symbol;\n\n    // Mapping from token ID to owner address\n    mapping(uint256 => address) private _owners;\n\n    // Mapping owner address to token count\n    mapping(address => uint256) private _balances;\n\n    // Mapping from token ID to approved address\n    mapping(uint256 => address) private _tokenApprovals;\n\n    // Mapping from owner to operator approvals\n    mapping(address => mapping(address => bool)) private _operatorApprovals;\n\n    /**\n     * @dev Initializes the contract by setting a `name` and a `symbol` to the token collection.\n     */\n    constructor(string memory name_, string memory symbol_) {\n        _name = name_;\n        _symbol = symbol_;\n    }\n\n    /**\n     * @dev See {IERC165-supportsInterface}.\n     */\n    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {\n        return\n            interfaceId == type(IERC721).interfaceId ||\n            interfaceId == type(IERC721Metadata).interfaceId ||\n            super.supportsInterface(interfaceId);\n    }\n\n    /**\n     * @dev See {IERC721-balanceOf}.\n     */\n    function balanceOf(address owner) public view virtual override returns (uint256) {\n        require(owner != address(0), "ERC721: balance query for the zero address");\n        return _balances[owner];\n    }\n\n    /**\n     * @dev See {IERC721-ownerOf}.\n     */\n    function ownerOf(uint256 tokenId) public view virtual override returns (address) {\n        address owner = _owners[tokenId];\n        require(owner != address(0), "ERC721: owner query for nonexistent token");\n        return owner;\n    }\n\n    /**\n     * @dev See {IERC721Metadata-name}.\n     */\n    function name() public view virtual override returns (string memory) {\n        return _name;\n    }\n\n    /**\n     * @dev See {IERC721Metadata-symbol}.\n     */\n    function symbol() public view virtual override returns (string memory) {\n        return _symbol;\n    }\n\n    /**\n     * @dev See {IERC721Metadata-tokenURI}.\n     */\n    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {\n        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");\n\n        string memory baseURI = _baseURI();\n        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString())) : "";\n    }\n\n    /**\n     * @dev Base URI for computing {tokenURI}. If set, the resulting URI for each\n     * token will be the concatenation of the `baseURI` and the `tokenId`. Empty\n     * by default, can be overriden in child contracts.\n     */\n    function _baseURI() internal view virtual returns (string memory) {\n        return "";\n    }\n\n    /**\n     * @dev See {IERC721-approve}.\n     */\n    function approve(address to, uint256 tokenId) public virtual override {\n        address owner = ERC721.ownerOf(tokenId);\n        require(to != owner, "ERC721: approval to current owner");\n\n        require(\n            _msgSender() == owner || isApprovedForAll(owner, _msgSender()),\n            "ERC721: approve caller is not owner nor approved for all"\n        );\n\n        _approve(to, tokenId);\n    }\n\n    /**\n     * @dev See {IERC721-getApproved}.\n     */\n    function getApproved(uint256 tokenId) public view virtual override returns (address) {\n        require(_exists(tokenId), "ERC721: approved query for nonexistent token");\n\n        return _tokenApprovals[tokenId];\n    }\n\n    /**\n     * @dev See {IERC721-setApprovalForAll}.\n     */\n    function setApprovalForAll(address operator, bool approved) public virtual override {\n        _setApprovalForAll(_msgSender(), operator, approved);\n    }\n\n    /**\n     * @dev See {IERC721-isApprovedForAll}.\n     */\n    function isApprovedForAll(address owner, address operator) public view virtual override returns (bool) {\n        return _operatorApprovals[owner][operator];\n    }\n\n    /**\n     * @dev See {IERC721-transferFrom}.\n     */\n    function transferFrom(\n        address from,\n        address to,\n        uint256 tokenId\n    ) public virtual override {\n        //solhint-disable-next-line max-line-length\n        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: transfer caller is not owner nor approved");\n\n        _transfer(from, to, tokenId);\n    }\n\n    /**\n     * @dev See {IERC721-safeTransferFrom}.\n     */\n    function safeTransferFrom(\n        address from,\n        address to,\n        uint256 tokenId\n    ) public virtual override {\n        safeTransferFrom(from, to, tokenId, "");\n    }\n\n    /**\n     * @dev See {IERC721-safeTransferFrom}.\n     */\n    function safeTransferFrom(\n        address from,\n        address to,\n        uint256 tokenId,\n        bytes memory _data\n    ) public virtual override {\n        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: transfer caller is not owner nor approved");\n        _safeTransfer(from, to, tokenId, _data);\n    }\n\n    /**\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\n     *\n     * `_data` is additional data, it has no specified format and it is sent in call to `to`.\n     *\n     * This internal function is equivalent to {safeTransferFrom}, and can be used to e.g.\n     * implement alternative mechanisms to perform token transfer, such as signature-based.\n     *\n     * Requirements:\n     *\n     * - `from` cannot be the zero address.\n     * - `to` cannot be the zero address.\n     * - `tokenId` token must exist and be owned by `from`.\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\n     *\n     * Emits a {Transfer} event.\n     */\n    function _safeTransfer(\n        address from,\n        address to,\n        uint256 tokenId,\n        bytes memory _data\n    ) internal virtual {\n        _transfer(from, to, tokenId);\n        require(_checkOnERC721Received(from, to, tokenId, _data), "ERC721: transfer to non ERC721Receiver implementer");\n    }\n\n    /**\n     * @dev Returns whether `tokenId` exists.\n     *\n     * Tokens can be managed by their owner or approved accounts via {approve} or {setApprovalForAll}.\n     *\n     * Tokens start existing when they are minted (`_mint`),\n     * and stop existing when they are burned (`_burn`).\n     */\n    function _exists(uint256 tokenId) internal view virtual returns (bool) {\n        return _owners[tokenId] != address(0);\n    }\n\n    /**\n     * @dev Returns whether `spender` is allowed to manage `tokenId`.\n     *\n     * Requirements:\n     *\n     * - `tokenId` must exist.\n     */\n    function _isApprovedOrOwner(address spender, uint256 tokenId) internal view virtual returns (bool) {\n        require(_exists(tokenId), "ERC721: operator query for nonexistent token");\n        address owner = ERC721.ownerOf(tokenId);\n        return (spender == owner || getApproved(tokenId) == spender || isApprovedForAll(owner, spender));\n    }\n\n    /**\n     * @dev Safely mints `tokenId` and transfers it to `to`.\n     *\n     * Requirements:\n     *\n     * - `tokenId` must not exist.\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\n     *\n     * Emits a {Transfer} event.\n     */\n    function _safeMint(address to, uint256 tokenId) internal virtual {\n        _safeMint(to, tokenId, "");\n    }\n\n    /**\n     * @dev Same as {xref-ERC721-_safeMint-address-uint256-}[`_safeMint`], with an additional `data` parameter which is\n     * forwarded in {IERC721Receiver-onERC721Received} to contract recipients.\n     */\n    function _safeMint(\n        address to,\n        uint256 tokenId,\n        bytes memory _data\n    ) internal virtual {\n        _mint(to, tokenId);\n        require(\n            _checkOnERC721Received(address(0), to, tokenId, _data),\n            "ERC721: transfer to non ERC721Receiver implementer"\n        );\n    }\n\n    /**\n     * @dev Mints `tokenId` and transfers it to `to`.\n     *\n     * WARNING: Usage of this method is discouraged, use {_safeMint} whenever possible\n     *\n     * Requirements:\n     *\n     * - `tokenId` must not exist.\n     * - `to` cannot be the zero address.\n     *\n     * Emits a {Transfer} event.\n     */\n    function _mint(address to, uint256 tokenId) internal virtual {\n        require(to != address(0), "ERC721: mint to the zero address");\n        require(!_exists(tokenId), "ERC721: token already minted");\n\n        _beforeTokenTransfer(address(0), to, tokenId);\n\n        _balances[to] += 1;\n        _owners[tokenId] = to;\n\n        emit Transfer(address(0), to, tokenId);\n\n        _afterTokenTransfer(address(0), to, tokenId);\n    }\n\n    /**\n     * @dev Destroys `tokenId`.\n     * The approval is cleared when the token is burned.\n     *\n     * Requirements:\n     *\n     * - `tokenId` must exist.\n     *\n     * Emits a {Transfer} event.\n     */\n    function _burn(uint256 tokenId) internal virtual {\n        address owner = ERC721.ownerOf(tokenId);\n\n        _beforeTokenTransfer(owner, address(0), tokenId);\n\n        // Clear approvals\n        _approve(address(0), tokenId);\n\n        _balances[owner] -= 1;\n        delete _owners[tokenId];\n\n        emit Transfer(owner, address(0), tokenId);\n\n        _afterTokenTransfer(owner, address(0), tokenId);\n    }\n\n    /**\n     * @dev Transfers `tokenId` from `from` to `to`.\n     *  As opposed to {transferFrom}, this imposes no restrictions on msg.sender.\n     *\n     * Requirements:\n     *\n     * - `to` cannot be the zero address.\n     * - `tokenId` token must be owned by `from`.\n     *\n     * Emits a {Transfer} event.\n     */\n    function _transfer(\n        address from,\n        address to,\n        uint256 tokenId\n    ) internal virtual {\n        require(ERC721.ownerOf(tokenId) == from, "ERC721: transfer from incorrect owner");\n        require(to != address(0), "ERC721: transfer to the zero address");\n\n        _beforeTokenTransfer(from, to, tokenId);\n\n        // Clear approvals from the previous owner\n        _approve(address(0), tokenId);\n\n        _balances[from] -= 1;\n        _balances[to] += 1;\n        _owners[tokenId] = to;\n\n        emit Transfer(from, to, tokenId);\n\n        _afterTokenTransfer(from, to, tokenId);\n    }\n\n    /**\n     * @dev Approve `to` to operate on `tokenId`\n     *\n     * Emits a {Approval} event.\n     */\n    function _approve(address to, uint256 tokenId) internal virtual {\n        _tokenApprovals[tokenId] = to;\n        emit Approval(ERC721.ownerOf(tokenId), to, tokenId);\n    }\n\n    /**\n     * @dev Approve `operator` to operate on all of `owner` tokens\n     *\n     * Emits a {ApprovalForAll} event.\n     */\n    function _setApprovalForAll(\n        address owner,\n        address operator,\n        bool approved\n    ) internal virtual {\n        require(owner != operator, "ERC721: approve to caller");\n        _operatorApprovals[owner][operator] = approved;\n        emit ApprovalForAll(owner, operator, approved);\n    }\n\n    /**\n     * @dev Internal function to invoke {IERC721Receiver-onERC721Received} on a target address.\n     * The call is not executed if the target address is not a contract.\n     *\n     * @param from address representing the previous owner of the given token ID\n     * @param to target address that will receive the tokens\n     * @param tokenId uint256 ID of the token to be transferred\n     * @param _data bytes optional data to send along with the call\n     * @return bool whether the call correctly returned the expected magic value\n     */\n    function _checkOnERC721Received(\n        address from,\n        address to,\n        uint256 tokenId,\n        bytes memory _data\n    ) private returns (bool) {\n        if (to.isContract()) {\n            try IERC721Receiver(to).onERC721Received(_msgSender(), from, tokenId, _data) returns (bytes4 retval) {\n                return retval == IERC721Receiver.onERC721Received.selector;\n            } catch (bytes memory reason) {\n                if (reason.length == 0) {\n                    revert("ERC721: transfer to non ERC721Receiver implementer");\n                } else {\n                    assembly {\n                        revert(add(32, reason), mload(reason))\n                    }\n                }\n            }\n        } else {\n            return true;\n        }\n    }\n\n    /**\n     * @dev Hook that is called before any token transfer. This includes minting\n     * and burning.\n     *\n     * Calling conditions:\n     *\n     * - When `from` and `to` are both non-zero, ``from``\'s `tokenId` will be\n     * transferred to `to`.\n     * - When `from` is zero, `tokenId` will be minted for `to`.\n     * - When `to` is zero, ``from``\'s `tokenId` will be burned.\n     * - `from` and `to` are never both zero.\n     *\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\n     */\n    function _beforeTokenTransfer(\n        address from,\n        address to,\n        uint256 tokenId\n    ) internal virtual {}\n\n    /**\n     * @dev Hook that is called after any transfer of tokens. This includes\n     * minting and burning.\n     *\n     * Calling conditions:\n     *\n     * - when `from` and `to` are both non-zero.\n     * - `from` and `to` are never both zero.\n     *\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\n     */\n    function _afterTokenTransfer(\n        address from,\n        address to,\n        uint256 tokenId\n    ) internal virtual {}\n}\n\n\n// File @openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol@v4.5.0\n\n// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC721/extensions/IERC721Enumerable.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @title ERC-721 Non-Fungible Token Standard, optional enumeration extension\n * @dev See https://eips.ethereum.org/EIPS/eip-721\n */\ninterface IERC721Enumerable is IERC721 {\n    /**\n     * @dev Returns the total amount of tokens stored by the contract.\n     */\n    function totalSupply() external view returns (uint256);\n\n    /**\n     * @dev Returns a token ID owned by `owner` at a given `index` of its token list.\n     * Use along with {balanceOf} to enumerate all of ``owner``\'s tokens.\n     */\n    function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256);\n\n    /**\n     * @dev Returns a token ID at a given `index` of all the tokens stored by the contract.\n     * Use along with {totalSupply} to enumerate all tokens.\n     */\n    function tokenByIndex(uint256 index) external view returns (uint256);\n}\n\n\n// File @openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/extensions/ERC721Enumerable.sol)\n\npragma solidity ^0.8.0;\n\n\n/**\n * @dev This implements an optional extension of {ERC721} defined in the EIP that adds\n * enumerability of all the token ids in the contract as well as all token ids owned by each\n * account.\n */\nabstract contract ERC721Enumerable is ERC721, IERC721Enumerable {\n    // Mapping from owner to list of owned token IDs\n    mapping(address => mapping(uint256 => uint256)) private _ownedTokens;\n\n    // Mapping from token ID to index of the owner tokens list\n    mapping(uint256 => uint256) private _ownedTokensIndex;\n\n    // Array with all token ids, used for enumeration\n    uint256[] private _allTokens;\n\n    // Mapping from token id to position in the allTokens array\n    mapping(uint256 => uint256) private _allTokensIndex;\n\n    /**\n     * @dev See {IERC165-supportsInterface}.\n     */\n    function supportsInterface(bytes4 interfaceId) public view virtual override(IERC165, ERC721) returns (bool) {\n        return interfaceId == type(IERC721Enumerable).interfaceId || super.supportsInterface(interfaceId);\n    }\n\n    /**\n     * @dev See {IERC721Enumerable-tokenOfOwnerByIndex}.\n     */\n    function tokenOfOwnerByIndex(address owner, uint256 index) public view virtual override returns (uint256) {\n        require(index < ERC721.balanceOf(owner), "ERC721Enumerable: owner index out of bounds");\n        return _ownedTokens[owner][index];\n    }\n\n    /**\n     * @dev See {IERC721Enumerable-totalSupply}.\n     */\n    function totalSupply() public view virtual override returns (uint256) {\n        return _allTokens.length;\n    }\n\n    /**\n     * @dev See {IERC721Enumerable-tokenByIndex}.\n     */\n    function tokenByIndex(uint256 index) public view virtual override returns (uint256) {\n        require(index < ERC721Enumerable.totalSupply(), "ERC721Enumerable: global index out of bounds");\n        return _allTokens[index];\n    }\n\n    /**\n     * @dev Hook that is called before any token transfer. This includes minting\n     * and burning.\n     *\n     * Calling conditions:\n     *\n     * - When `from` and `to` are both non-zero, ``from``\'s `tokenId` will be\n     * transferred to `to`.\n     * - When `from` is zero, `tokenId` will be minted for `to`.\n     * - When `to` is zero, ``from``\'s `tokenId` will be burned.\n     * - `from` cannot be the zero address.\n     * - `to` cannot be the zero address.\n     *\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\n     */\n    function _beforeTokenTransfer(\n        address from,\n        address to,\n        uint256 tokenId\n    ) internal virtual override {\n        super._beforeTokenTransfer(from, to, tokenId);\n\n        if (from == address(0)) {\n            _addTokenToAllTokensEnumeration(tokenId);\n        } else if (from != to) {\n            _removeTokenFromOwnerEnumeration(from, tokenId);\n        }\n        if (to == address(0)) {\n            _removeTokenFromAllTokensEnumeration(tokenId);\n        } else if (to != from) {\n            _addTokenToOwnerEnumeration(to, tokenId);\n        }\n    }\n\n    /**\n     * @dev Private function to add a token to this extension\'s ownership-tracking data structures.\n     * @param to address representing the new owner of the given token ID\n     * @param tokenId uint256 ID of the token to be added to the tokens list of the given address\n     */\n    function _addTokenToOwnerEnumeration(address to, uint256 tokenId) private {\n        uint256 length = ERC721.balanceOf(to);\n        _ownedTokens[to][length] = tokenId;\n        _ownedTokensIndex[tokenId] = length;\n    }\n\n    /**\n     * @dev Private function to add a token to this extension\'s token tracking data structures.\n     * @param tokenId uint256 ID of the token to be added to the tokens list\n     */\n    function _addTokenToAllTokensEnumeration(uint256 tokenId) private {\n        _allTokensIndex[tokenId] = _allTokens.length;\n        _allTokens.push(tokenId);\n    }\n\n    /**\n     * @dev Private function to remove a token from this extension\'s ownership-tracking data structures. Note that\n     * while the token is not assigned a new owner, the `_ownedTokensIndex` mapping is _not_ updated: this allows for\n     * gas optimizations e.g. when performing a transfer operation (avoiding double writes).\n     * This has O(1) time complexity, but alters the order of the _ownedTokens array.\n     * @param from address representing the previous owner of the given token ID\n     * @param tokenId uint256 ID of the token to be removed from the tokens list of the given address\n     */\n    function _removeTokenFromOwnerEnumeration(address from, uint256 tokenId) private {\n        // To prevent a gap in from\'s tokens array, we store the last token in the index of the token to delete, and\n        // then delete the last slot (swap and pop).\n\n        uint256 lastTokenIndex = ERC721.balanceOf(from) - 1;\n        uint256 tokenIndex = _ownedTokensIndex[tokenId];\n\n        // When the token to delete is the last token, the swap operation is unnecessary\n        if (tokenIndex != lastTokenIndex) {\n            uint256 lastTokenId = _ownedTokens[from][lastTokenIndex];\n\n            _ownedTokens[from][tokenIndex] = lastTokenId; // Move the last token to the slot of the to-delete token\n            _ownedTokensIndex[lastTokenId] = tokenIndex; // Update the moved token\'s index\n        }\n\n        // This also deletes the contents at the last position of the array\n        delete _ownedTokensIndex[tokenId];\n        delete _ownedTokens[from][lastTokenIndex];\n    }\n\n    /**\n     * @dev Private function to remove a token from this extension\'s token tracking data structures.\n     * This has O(1) time complexity, but alters the order of the _allTokens array.\n     * @param tokenId uint256 ID of the token to be removed from the tokens list\n     */\n    function _removeTokenFromAllTokensEnumeration(uint256 tokenId) private {\n        // To prevent a gap in the tokens array, we store the last token in the index of the token to delete, and\n        // then delete the last slot (swap and pop).\n\n        uint256 lastTokenIndex = _allTokens.length - 1;\n        uint256 tokenIndex = _allTokensIndex[tokenId];\n\n        // When the token to delete is the last token, the swap operation is unnecessary. However, since this occurs so\n        // rarely (when the last minted token is burnt) that we still do the swap here to avoid the gas cost of adding\n        // an \'if\' statement (like in _removeTokenFromOwnerEnumeration)\n        uint256 lastTokenId = _allTokens[lastTokenIndex];\n\n        _allTokens[tokenIndex] = lastTokenId; // Move the last token to the slot of the to-delete token\n        _allTokensIndex[lastTokenId] = tokenIndex; // Update the moved token\'s index\n\n        // This also deletes the contents at the last position of the array\n        delete _allTokensIndex[tokenId];\n        _allTokens.pop();\n    }\n}\n\n\n// File @openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/extensions/ERC721URIStorage.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev ERC721 token with storage based token URI management.\n */\nabstract contract ERC721URIStorage is ERC721 {\n    using Strings for uint256;\n\n    // Optional mapping for token URIs\n    mapping(uint256 => string) private _tokenURIs;\n\n    /**\n     * @dev See {IERC721Metadata-tokenURI}.\n     */\n    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {\n        require(_exists(tokenId), "ERC721URIStorage: URI query for nonexistent token");\n\n        string memory _tokenURI = _tokenURIs[tokenId];\n        string memory base = _baseURI();\n\n        // If there is no base URI, return the token URI.\n        if (bytes(base).length == 0) {\n            return _tokenURI;\n        }\n        // If both are set, concatenate the baseURI and tokenURI (via abi.encodePacked).\n        if (bytes(_tokenURI).length > 0) {\n            return string(abi.encodePacked(base, _tokenURI));\n        }\n\n        return super.tokenURI(tokenId);\n    }\n\n    /**\n     * @dev Sets `_tokenURI` as the tokenURI of `tokenId`.\n     *\n     * Requirements:\n     *\n     * - `tokenId` must exist.\n     */\n    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {\n        require(_exists(tokenId), "ERC721URIStorage: URI set of nonexistent token");\n        _tokenURIs[tokenId] = _tokenURI;\n    }\n\n    /**\n     * @dev Destroys `tokenId`.\n     * The approval is cleared when the token is burned.\n     *\n     * Requirements:\n     *\n     * - `tokenId` must exist.\n     *\n     * Emits a {Transfer} event.\n     */\n    function _burn(uint256 tokenId) internal virtual override {\n        super._burn(tokenId);\n\n        if (bytes(_tokenURIs[tokenId]).length != 0) {\n            delete _tokenURIs[tokenId];\n        }\n    }\n}\n\n\n// File @openzeppelin/contracts/security/Pausable.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (security/Pausable.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Contract module which allows children to implement an emergency stop\n * mechanism that can be triggered by an authorized account.\n *\n * This module is used through inheritance. It will make available the\n * modifiers `whenNotPaused` and `whenPaused`, which can be applied to\n * the functions of your contract. Note that they will not be pausable by\n * simply including this module, only once the modifiers are put in place.\n */\nabstract contract Pausable is Context {\n    /**\n     * @dev Emitted when the pause is triggered by `account`.\n     */\n    event Paused(address account);\n\n    /**\n     * @dev Emitted when the pause is lifted by `account`.\n     */\n    event Unpaused(address account);\n\n    bool private _paused;\n\n    /**\n     * @dev Initializes the contract in unpaused state.\n     */\n    constructor() {\n        _paused = false;\n    }\n\n    /**\n     * @dev Returns true if the contract is paused, and false otherwise.\n     */\n    function paused() public view virtual returns (bool) {\n        return _paused;\n    }\n\n    /**\n     * @dev Modifier to make a function callable only when the contract is not paused.\n     *\n     * Requirements:\n     *\n     * - The contract must not be paused.\n     */\n    modifier whenNotPaused() {\n        require(!paused(), "Pausable: paused");\n        _;\n    }\n\n    /**\n     * @dev Modifier to make a function callable only when the contract is paused.\n     *\n     * Requirements:\n     *\n     * - The contract must be paused.\n     */\n    modifier whenPaused() {\n        require(paused(), "Pausable: not paused");\n        _;\n    }\n\n    /**\n     * @dev Triggers stopped state.\n     *\n     * Requirements:\n     *\n     * - The contract must not be paused.\n     */\n    function _pause() internal virtual whenNotPaused {\n        _paused = true;\n        emit Paused(_msgSender());\n    }\n\n    /**\n     * @dev Returns to normal state.\n     *\n     * Requirements:\n     *\n     * - The contract must be paused.\n     */\n    function _unpause() internal virtual whenPaused {\n        _paused = false;\n        emit Unpaused(_msgSender());\n    }\n}\n\n\n// File @openzeppelin/contracts/access/IAccessControl.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (access/IAccessControl.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @dev External interface of AccessControl declared to support ERC165 detection.\n */\ninterface IAccessControl {\n    /**\n     * @dev Emitted when `newAdminRole` is set as ``role``\'s admin role, replacing `previousAdminRole`\n     *\n     * `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite\n     * {RoleAdminChanged} not being emitted signaling this.\n     *\n     * _Available since v3.1._\n     */\n    event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole);\n\n    /**\n     * @dev Emitted when `account` is granted `role`.\n     *\n     * `sender` is the account that originated the contract call, an admin role\n     * bearer except when using {AccessControl-_setupRole}.\n     */\n    event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender);\n\n    /**\n     * @dev Emitted when `account` is revoked `role`.\n     *\n     * `sender` is the account that originated the contract call:\n     *   - if using `revokeRole`, it is the admin role bearer\n     *   - if using `renounceRole`, it is the role bearer (i.e. `account`)\n     */\n    event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender);\n\n    /**\n     * @dev Returns `true` if `account` has been granted `role`.\n     */\n    function hasRole(bytes32 role, address account) external view returns (bool);\n\n    /**\n     * @dev Returns the admin role that controls `role`. See {grantRole} and\n     * {revokeRole}.\n     *\n     * To change a role\'s admin, use {AccessControl-_setRoleAdmin}.\n     */\n    function getRoleAdmin(bytes32 role) external view returns (bytes32);\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function grantRole(bytes32 role, address account) external;\n\n    /**\n     * @dev Revokes `role` from `account`.\n     *\n     * If `account` had been granted `role`, emits a {RoleRevoked} event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function revokeRole(bytes32 role, address account) external;\n\n    /**\n     * @dev Revokes `role` from the calling account.\n     *\n     * Roles are often managed via {grantRole} and {revokeRole}: this function\'s\n     * purpose is to provide a mechanism for accounts to lose their privileges\n     * if they are compromised (such as when a trusted device is misplaced).\n     *\n     * If the calling account had been granted `role`, emits a {RoleRevoked}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must be `account`.\n     */\n    function renounceRole(bytes32 role, address account) external;\n}\n\n\n// File @openzeppelin/contracts/access/AccessControl.sol@v4.5.0\n\n// OpenZeppelin Contracts (last updated v4.5.0) (access/AccessControl.sol)\n\npragma solidity ^0.8.0;\n\n\n\n\n/**\n * @dev Contract module that allows children to implement role-based access\n * control mechanisms. This is a lightweight version that doesn\'t allow enumerating role\n * members except through off-chain means by accessing the contract event logs. Some\n * applications may benefit from on-chain enumerability, for those cases see\n * {AccessControlEnumerable}.\n *\n * Roles are referred to by their `bytes32` identifier. These should be exposed\n * in the external API and be unique. The best way to achieve this is by\n * using `public constant` hash digests:\n *\n * ```\n * bytes32 public constant MY_ROLE = keccak256("MY_ROLE");\n * ```\n *\n * Roles can be used to represent a set of permissions. To restrict access to a\n * function call, use {hasRole}:\n *\n * ```\n * function foo() public {\n *     require(hasRole(MY_ROLE, msg.sender));\n *     ...\n * }\n * ```\n *\n * Roles can be granted and revoked dynamically via the {grantRole} and\n * {revokeRole} functions. Each role has an associated admin role, and only\n * accounts that have a role\'s admin role can call {grantRole} and {revokeRole}.\n *\n * By default, the admin role for all roles is `DEFAULT_ADMIN_ROLE`, which means\n * that only accounts with this role will be able to grant or revoke other\n * roles. More complex role relationships can be created by using\n * {_setRoleAdmin}.\n *\n * WARNING: The `DEFAULT_ADMIN_ROLE` is also its own admin: it has permission to\n * grant and revoke this role. Extra precautions should be taken to secure\n * accounts that have been granted it.\n */\nabstract contract AccessControl is Context, IAccessControl, ERC165 {\n    struct RoleData {\n        mapping(address => bool) members;\n        bytes32 adminRole;\n    }\n\n    mapping(bytes32 => RoleData) private _roles;\n\n    bytes32 public constant DEFAULT_ADMIN_ROLE = 0x00;\n\n    /**\n     * @dev Modifier that checks that an account has a specific role. Reverts\n     * with a standardized message including the required role.\n     *\n     * The format of the revert reason is given by the following regular expression:\n     *\n     *  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\n     *\n     * _Available since v4.1._\n     */\n    modifier onlyRole(bytes32 role) {\n        _checkRole(role, _msgSender());\n        _;\n    }\n\n    /**\n     * @dev See {IERC165-supportsInterface}.\n     */\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n        return interfaceId == type(IAccessControl).interfaceId || super.supportsInterface(interfaceId);\n    }\n\n    /**\n     * @dev Returns `true` if `account` has been granted `role`.\n     */\n    function hasRole(bytes32 role, address account) public view virtual override returns (bool) {\n        return _roles[role].members[account];\n    }\n\n    /**\n     * @dev Revert with a standard message if `account` is missing `role`.\n     *\n     * The format of the revert reason is given by the following regular expression:\n     *\n     *  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\n     */\n    function _checkRole(bytes32 role, address account) internal view virtual {\n        if (!hasRole(role, account)) {\n            revert(\n                string(\n                    abi.encodePacked(\n                        "AccessControl: account ",\n                        Strings.toHexString(uint160(account), 20),\n                        " is missing role ",\n                        Strings.toHexString(uint256(role), 32)\n                    )\n                )\n            );\n        }\n    }\n\n    /**\n     * @dev Returns the admin role that controls `role`. See {grantRole} and\n     * {revokeRole}.\n     *\n     * To change a role\'s admin, use {_setRoleAdmin}.\n     */\n    function getRoleAdmin(bytes32 role) public view virtual override returns (bytes32) {\n        return _roles[role].adminRole;\n    }\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function grantRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {\n        _grantRole(role, account);\n    }\n\n    /**\n     * @dev Revokes `role` from `account`.\n     *\n     * If `account` had been granted `role`, emits a {RoleRevoked} event.\n     *\n     * Requirements:\n     *\n     * - the caller must have ``role``\'s admin role.\n     */\n    function revokeRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {\n        _revokeRole(role, account);\n    }\n\n    /**\n     * @dev Revokes `role` from the calling account.\n     *\n     * Roles are often managed via {grantRole} and {revokeRole}: this function\'s\n     * purpose is to provide a mechanism for accounts to lose their privileges\n     * if they are compromised (such as when a trusted device is misplaced).\n     *\n     * If the calling account had been revoked `role`, emits a {RoleRevoked}\n     * event.\n     *\n     * Requirements:\n     *\n     * - the caller must be `account`.\n     */\n    function renounceRole(bytes32 role, address account) public virtual override {\n        require(account == _msgSender(), "AccessControl: can only renounce roles for self");\n\n        _revokeRole(role, account);\n    }\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\n     * event. Note that unlike {grantRole}, this function doesn\'t perform any\n     * checks on the calling account.\n     *\n     * [WARNING]\n     * ====\n     * This function should only be called from the constructor when setting\n     * up the initial roles for the system.\n     *\n     * Using this function in any other way is effectively circumventing the admin\n     * system imposed by {AccessControl}.\n     * ====\n     *\n     * NOTE: This function is deprecated in favor of {_grantRole}.\n     */\n    function _setupRole(bytes32 role, address account) internal virtual {\n        _grantRole(role, account);\n    }\n\n    /**\n     * @dev Sets `adminRole` as ``role``\'s admin role.\n     *\n     * Emits a {RoleAdminChanged} event.\n     */\n    function _setRoleAdmin(bytes32 role, bytes32 adminRole) internal virtual {\n        bytes32 previousAdminRole = getRoleAdmin(role);\n        _roles[role].adminRole = adminRole;\n        emit RoleAdminChanged(role, previousAdminRole, adminRole);\n    }\n\n    /**\n     * @dev Grants `role` to `account`.\n     *\n     * Internal function without access restriction.\n     */\n    function _grantRole(bytes32 role, address account) internal virtual {\n        if (!hasRole(role, account)) {\n            _roles[role].members[account] = true;\n            emit RoleGranted(role, account, _msgSender());\n        }\n    }\n\n    /**\n     * @dev Revokes `role` from `account`.\n     *\n     * Internal function without access restriction.\n     */\n    function _revokeRole(bytes32 role, address account) internal virtual {\n        if (hasRole(role, account)) {\n            _roles[role].members[account] = false;\n            emit RoleRevoked(role, account, _msgSender());\n        }\n    }\n}\n\n\n// File @openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/extensions/ERC721Burnable.sol)\n\npragma solidity ^0.8.0;\n\n\n/**\n * @title ERC721 Burnable Token\n * @dev ERC721 Token that can be irreversibly burned (destroyed).\n */\nabstract contract ERC721Burnable is Context, ERC721 {\n    /**\n     * @dev Burns `tokenId`. See {ERC721-_burn}.\n     *\n     * Requirements:\n     *\n     * - The caller must own `tokenId` or be an approved operator.\n     */\n    function burn(uint256 tokenId) public virtual {\n        //solhint-disable-next-line max-line-length\n        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721Burnable: caller is not owner nor approved");\n        _burn(tokenId);\n    }\n}\n\n\n// File @openzeppelin/contracts/utils/Counters.sol@v4.5.0\n\n// OpenZeppelin Contracts v4.4.1 (utils/Counters.sol)\n\npragma solidity ^0.8.0;\n\n/**\n * @title Counters\n * @author Matt Condon (@shrugs)\n * @dev Provides counters that can only be incremented, decremented or reset. This can be used e.g. to track the number\n * of elements in a mapping, issuing ERC721 ids, or counting request ids.\n *\n * Include with `using Counters for Counters.Counter;`\n */\nlibrary Counters {\n    struct Counter {\n        // This variable should never be directly accessed by users of the library: interactions must be restricted to\n        // the library\'s function. As of Solidity v0.5.2, this cannot be enforced, though there is a proposal to add\n        // this feature: see https://github.com/ethereum/solidity/issues/4637\n        uint256 _value; // default: 0\n    }\n\n    function current(Counter storage counter) internal view returns (uint256) {\n        return counter._value;\n    }\n\n    function increment(Counter storage counter) internal {\n        unchecked {\n            counter._value += 1;\n        }\n    }\n\n    function decrement(Counter storage counter) internal {\n        uint256 value = counter._value;\n        require(value > 0, "Counter: decrement overflow");\n        unchecked {\n            counter._value = value - 1;\n        }\n    }\n\n    function reset(Counter storage counter) internal {\n        counter._value = 0;\n    }\n}\n\n\n// File contracts/StartonERC721.sol\n\npragma solidity ^0.8.0;\n\n\n\n\n\n\ncontract StartonERC721 is ERC721Enumerable, ERC721URIStorage, Pausable, AccessControl, ERC721Burnable {\n    using Counters for Counters.Counter;\n\n    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");\n    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");\n    bytes32 public constant LOCKER_ROLE = keccak256("LOCKER_ROLE");\n    Counters.Counter private _tokenIdCounter;\n    \n    string private _uri;\n    string private _contractUriSuffix;\n    string private _baseContractUri;\n\n    bool private _isMintAllowed;\n\n    constructor(string memory name, string memory symbol, string memory baseUri, string memory contractUriSuffix, address ownerOrMultiSigContract) ERC721(name, symbol) {\n        _setupRole(DEFAULT_ADMIN_ROLE, ownerOrMultiSigContract);\n        _setupRole(PAUSER_ROLE, ownerOrMultiSigContract);\n        _setupRole(MINTER_ROLE, ownerOrMultiSigContract);\n        _setupRole(LOCKER_ROLE, ownerOrMultiSigContract);\n        _uri = baseUri;\n        _contractUriSuffix = contractUriSuffix;\n        _baseContractUri = "https://ipfs.io/ipfs/";\n        _isMintAllowed = true;\n    }\n\n    function lockMint() public {\n        require(hasRole(LOCKER_ROLE, msg.sender));\n        _isMintAllowed = false;\n    }\n\n    function contractURI() public view returns (string memory) {\n        return bytes(_baseContractUri).length > 0\n            ? string(abi.encodePacked(_baseContractUri, _contractUriSuffix))\n            : \'\';\n    }\n\n    function setBaseContractURI(string memory newBaseContractUri) public {\n        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender));\n        \n        _baseContractUri = newBaseContractUri;\n    }\n\n    function _baseURI() internal view override returns (string memory) {\n        return _uri;\n    }\n\n    function safeMint(address to, string memory metadataURI) public {\n        require(hasRole(MINTER_ROLE, msg.sender));\n        require(_isMintAllowed);\n\n        _safeMint(to, _tokenIdCounter.current());\n        _setTokenURI(_tokenIdCounter.current(), metadataURI);\n        _tokenIdCounter.increment();\n    }\n\n    function pause() public {\n        require(hasRole(PAUSER_ROLE, msg.sender));\n        _pause();\n    }\n\n    function unpause() public {\n        require(hasRole(PAUSER_ROLE, msg.sender));\n        _unpause();\n    }\n\n    function _beforeTokenTransfer(address from, address to, uint256 tokenId)\n        internal\n        whenNotPaused\n        override(ERC721, ERC721Enumerable)\n    {\n        super._beforeTokenTransfer(from, to, tokenId);\n    }\n\n    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {\n        super._burn(tokenId);\n    }\n\n    function tokenURI(uint256 tokenId)\n        public\n        view\n        override(ERC721, ERC721URIStorage)\n        returns (string memory)\n    {\n        return super.tokenURI(tokenId);\n    }\n\n    function supportsInterface(bytes4 interfaceId)\n        public\n        view\n        override(ERC721, ERC721Enumerable, AccessControl)\n        returns (bool)\n    {\n        return super.supportsInterface(interfaceId);\n    }\n}\n',
      bytecode:
        "0x60806040523480156200001157600080fd5b5060405162002c9938038062002c998339810160408190526200003491620003b4565b8451859085906200004d90600090602085019062000241565b5080516200006390600190602084019062000241565b5050600b805460ff19169055506200007d6000826200018d565b620000a97f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a826200018d565b620000d57f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6826200018d565b620001017faf9a8bb3cbd6b84fbccefa71ff73e26e798553c6914585a84886212a46a90279826200018d565b82516200011690600e90602086019062000241565b5081516200012c90600f90602085019062000241565b506040805180820190915260158082527f68747470733a2f2f697066732e696f2f697066732f00000000000000000000006020909201918252620001739160109162000241565b50506011805460ff1916600117905550620004ce92505050565b6200019982826200019d565b5050565b6000828152600c602090815260408083206001600160a01b038516845290915290205460ff1662000199576000828152600c602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620001fd3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b8280546200024f9062000491565b90600052602060002090601f016020900481019282620002735760008555620002be565b82601f106200028e57805160ff1916838001178555620002be565b82800160010185558215620002be579182015b82811115620002be578251825591602001919060010190620002a1565b50620002cc929150620002d0565b5090565b5b80821115620002cc5760008155600101620002d1565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200030f57600080fd5b81516001600160401b03808211156200032c576200032c620002e7565b604051601f8301601f19908116603f01168101908282118183101715620003575762000357620002e7565b816040528381526020925086838588010111156200037457600080fd5b600091505b8382101562000398578582018301518183018401529082019062000379565b83821115620003aa5760008385830101525b9695505050505050565b600080600080600060a08688031215620003cd57600080fd5b85516001600160401b0380821115620003e557600080fd5b620003f389838a01620002fd565b965060208801519150808211156200040a57600080fd5b6200041889838a01620002fd565b955060408801519150808211156200042f57600080fd5b6200043d89838a01620002fd565b945060608801519150808211156200045457600080fd5b506200046388828901620002fd565b608088015190935090506001600160a01b03811681146200048357600080fd5b809150509295509295909350565b600181811c90821680620004a657607f821691505b60208210811415620004c857634e487b7160e01b600052602260045260246000fd5b50919050565b6127bb80620004de6000396000f3fe608060405234801561001057600080fd5b50600436106101fb5760003560e01c80636352211e1161011a578063c87b56dd116100ad578063e0b6bb671161007c578063e0b6bb6714610434578063e63ab1e91461043c578063e8a3d48514610463578063e985e9c51461046b578063f3621367146104a757600080fd5b8063c87b56dd146103d4578063d204c45e146103e7578063d5391393146103fa578063d547741f1461042157600080fd5b806395d89b41116100e957806395d89b411461039e578063a217fddf146103a6578063a22cb465146103ae578063b88d4fde146103c157600080fd5b80636352211e1461035d57806370a08231146103705780638456cb591461038357806391d148541461038b57600080fd5b80632f2ff15d1161019257806342842e0e1161016157806342842e0e1461031957806342966c681461032c5780634f6ccce71461033f5780635c975abb1461035257600080fd5b80632f2ff15d146102d85780632f745c59146102eb57806336568abe146102fe5780633f4ba83a1461031157600080fd5b80630cd3a538116101ce5780630cd3a5381461027d57806318160ddd1461029057806323b872dd146102a2578063248a9ca3146102b557600080fd5b806301ffc9a71461020057806306fdde0314610228578063081812fc1461023d578063095ea7b314610268575b600080fd5b61021361020e36600461207f565b6104ce565b60405190151581526020015b60405180910390f35b6102306104df565b60405161021f91906120f4565b61025061024b366004612107565b610571565b6040516001600160a01b03909116815260200161021f565b61027b61027636600461213c565b6105fe565b005b61027b61028b366004612212565b610714565b6008545b60405190815260200161021f565b61027b6102b0366004612247565b61073f565b6102946102c3366004612107565b6000908152600c602052604090206001015490565b61027b6102e6366004612283565b610771565b6102946102f936600461213c565b610797565b61027b61030c366004612283565b61082d565b61027b6108a7565b61027b610327366004612247565b6108e4565b61027b61033a366004612107565b6108ff565b61029461034d366004612107565b610979565b600b5460ff16610213565b61025061036b366004612107565b610a0c565b61029461037e3660046122af565b610a83565b61027b610b0a565b610213610399366004612283565b610b45565b610230610b70565b610294600081565b61027b6103bc3660046122ca565b610b7f565b61027b6103cf366004612306565b610b8a565b6102306103e2366004612107565b610bc2565b61027b6103f5366004612382565b610bcd565b6102947f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61027b61042f366004612283565b610c41565b61027b610c67565b6102947f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b610230610ca6565b6102136104793660046123d0565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6102947faf9a8bb3cbd6b84fbccefa71ff73e26e798553c6914585a84886212a46a9027981565b60006104d982610cfa565b92915050565b6060600080546104ee906123fa565b80601f016020809104026020016040519081016040528092919081815260200182805461051a906123fa565b80156105675780601f1061053c57610100808354040283529160200191610567565b820191906000526020600020905b81548152906001019060200180831161054a57829003601f168201915b5050505050905090565b600061057c82610d1f565b6105e25760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061060982610a0c565b9050806001600160a01b0316836001600160a01b031614156106775760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016105d9565b336001600160a01b038216148061069357506106938133610479565b6107055760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016105d9565b61070f8383610d3c565b505050565b61071f600033610b45565b61072857600080fd5b805161073b906010906020840190611f9a565b5050565b61074a335b82610daa565b6107665760405162461bcd60e51b81526004016105d990612435565b61070f838383610e94565b6000828152600c602052604090206001015461078d813361103b565b61070f838361109f565b60006107a283610a83565b82106108045760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b60648201526084016105d9565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b6001600160a01b038116331461089d5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016105d9565b61073b8282611125565b6108d17f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610b45565b6108da57600080fd5b6108e261118c565b565b61070f83838360405180602001604052806000815250610b8a565b61090833610744565b61096d5760405162461bcd60e51b815260206004820152603060248201527f4552433732314275726e61626c653a2063616c6c6572206973206e6f74206f7760448201526f1b995c881b9bdc88185c1c1c9bdd995960821b60648201526084016105d9565b6109768161121f565b50565b600061098460085490565b82106109e75760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b60648201526084016105d9565b600882815481106109fa576109fa612486565b90600052602060002001549050919050565b6000818152600260205260408120546001600160a01b0316806104d95760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016105d9565b60006001600160a01b038216610aee5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016105d9565b506001600160a01b031660009081526003602052604090205490565b610b347f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610b45565b610b3d57600080fd5b6108e2611228565b6000918252600c602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600180546104ee906123fa565b61073b3383836112a3565b610b943383610daa565b610bb05760405162461bcd60e51b81526004016105d990612435565b610bbc84848484611372565b50505050565b60606104d9826113a5565b610bf77f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610b45565b610c0057600080fd5b60115460ff16610c0f57600080fd5b610c2182610c1c600d5490565b611507565b610c33610c2d600d5490565b82611521565b61073b600d80546001019055565b6000828152600c6020526040902060010154610c5d813361103b565b61070f8383611125565b610c917faf9a8bb3cbd6b84fbccefa71ff73e26e798553c6914585a84886212a46a9027933610b45565b610c9a57600080fd5b6011805460ff19169055565b6060600060108054610cb7906123fa565b905011610cd1575060408051602081019091526000815290565b6010600f604051602001610ce6929190612536565b604051602081830303815290604052905090565b60006001600160e01b03198216637965db0b60e01b14806104d957506104d9826115ac565b6000908152600260205260409020546001600160a01b0316151590565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610d7182610a0c565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610db582610d1f565b610e165760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016105d9565b6000610e2183610a0c565b9050806001600160a01b0316846001600160a01b03161480610e5c5750836001600160a01b0316610e5184610571565b6001600160a01b0316145b80610e8c57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b0316610ea782610a0c565b6001600160a01b031614610f0b5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b60648201526084016105d9565b6001600160a01b038216610f6d5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016105d9565b610f788383836115d1565b610f83600082610d3c565b6001600160a01b0383166000908152600360205260408120805460019290610fac908490612561565b90915550506001600160a01b0382166000908152600360205260408120805460019290610fda908490612578565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6110458282610b45565b61073b5761105d816001600160a01b03166014611622565b611068836020611622565b604051602001611079929190612590565b60408051601f198184030181529082905262461bcd60e51b82526105d9916004016120f4565b6110a98282610b45565b61073b576000828152600c602090815260408083206001600160a01b03851684529091529020805460ff191660011790556110e13390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61112f8282610b45565b1561073b576000828152600c602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b600b5460ff166111d55760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016105d9565b600b805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b610976816117c5565b600b5460ff161561126e5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016105d9565b600b805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586112023390565b816001600160a01b0316836001600160a01b031614156113055760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016105d9565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b61137d848484610e94565b61138984848484611805565b610bbc5760405162461bcd60e51b81526004016105d990612605565b60606113b082610d1f565b6114165760405162461bcd60e51b815260206004820152603160248201527f45524337323155524953746f726167653a2055524920717565727920666f72206044820152703737b732bc34b9ba32b73a103a37b5b2b760791b60648201526084016105d9565b6000828152600a60205260408120805461142f906123fa565b80601f016020809104026020016040519081016040528092919081815260200182805461145b906123fa565b80156114a85780601f1061147d576101008083540402835291602001916114a8565b820191906000526020600020905b81548152906001019060200180831161148b57829003601f168201915b5050505050905060006114b9611912565b90508051600014156114cc575092915050565b8151156114fe5780826040516020016114e6929190612657565b60405160208183030381529060405292505050919050565b610e8c84611921565b61073b8282604051806020016040528060008152506119eb565b61152a82610d1f565b61158d5760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b60648201526084016105d9565b6000828152600a60209081526040909120825161070f92840190611f9a565b60006001600160e01b0319821663780e9d6360e01b14806104d957506104d982611a1e565b600b5460ff16156116175760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016105d9565b61070f838383611a6e565b60606000611631836002612686565b61163c906002612578565b67ffffffffffffffff81111561165457611654612166565b6040519080825280601f01601f19166020018201604052801561167e576020820181803683370190505b509050600360fc1b8160008151811061169957611699612486565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106116c8576116c8612486565b60200101906001600160f81b031916908160001a90535060006116ec846002612686565b6116f7906001612578565b90505b600181111561176f576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061172b5761172b612486565b1a60f81b82828151811061174157611741612486565b60200101906001600160f81b031916908160001a90535060049490941c93611768816126a5565b90506116fa565b5083156117be5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016105d9565b9392505050565b6117ce81611b26565b6000818152600a6020526040902080546117e7906123fa565b159050610976576000818152600a602052604081206109769161201e565b60006001600160a01b0384163b1561190757604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906118499033908990889088906004016126bc565b602060405180830381600087803b15801561186357600080fd5b505af1925050508015611893575060408051601f3d908101601f19168201909252611890918101906126f9565b60015b6118ed573d8080156118c1576040519150601f19603f3d011682016040523d82523d6000602084013e6118c6565b606091505b5080516118e55760405162461bcd60e51b81526004016105d990612605565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610e8c565b506001949350505050565b6060600e80546104ee906123fa565b606061192c82610d1f565b6119905760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b60648201526084016105d9565b600061199a611912565b905060008151116119ba57604051806020016040528060008152506117be565b806119c484611bcd565b6040516020016119d5929190612657565b6040516020818303038152906040529392505050565b6119f58383611ccb565b611a026000848484611805565b61070f5760405162461bcd60e51b81526004016105d990612605565b60006001600160e01b031982166380ac58cd60e01b1480611a4f57506001600160e01b03198216635b5e139f60e01b145b806104d957506301ffc9a760e01b6001600160e01b03198316146104d9565b6001600160a01b038316611ac957611ac481600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b611aec565b816001600160a01b0316836001600160a01b031614611aec57611aec8382611e0a565b6001600160a01b038216611b035761070f81611ea7565b826001600160a01b0316826001600160a01b03161461070f5761070f8282611f56565b6000611b3182610a0c565b9050611b3f816000846115d1565b611b4a600083610d3c565b6001600160a01b0381166000908152600360205260408120805460019290611b73908490612561565b909155505060008281526002602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b606081611bf15750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611c1b5780611c0581612716565b9150611c149050600a83612747565b9150611bf5565b60008167ffffffffffffffff811115611c3657611c36612166565b6040519080825280601f01601f191660200182016040528015611c60576020820181803683370190505b5090505b8415610e8c57611c75600183612561565b9150611c82600a8661275b565b611c8d906030612578565b60f81b818381518110611ca257611ca2612486565b60200101906001600160f81b031916908160001a905350611cc4600a86612747565b9450611c64565b6001600160a01b038216611d215760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016105d9565b611d2a81610d1f565b15611d775760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016105d9565b611d83600083836115d1565b6001600160a01b0382166000908152600360205260408120805460019290611dac908490612578565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006001611e1784610a83565b611e219190612561565b600083815260076020526040902054909150808214611e74576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b600854600090611eb990600190612561565b60008381526009602052604081205460088054939450909284908110611ee157611ee1612486565b906000526020600020015490508060088381548110611f0257611f02612486565b6000918252602080832090910192909255828152600990915260408082208490558582528120556008805480611f3a57611f3a61276f565b6001900381819060005260206000200160009055905550505050565b6000611f6183610a83565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b828054611fa6906123fa565b90600052602060002090601f016020900481019282611fc8576000855561200e565b82601f10611fe157805160ff191683800117855561200e565b8280016001018555821561200e579182015b8281111561200e578251825591602001919060010190611ff3565b5061201a929150612054565b5090565b50805461202a906123fa565b6000825580601f1061203a575050565b601f01602090049060005260206000209081019061097691905b5b8082111561201a5760008155600101612055565b6001600160e01b03198116811461097657600080fd5b60006020828403121561209157600080fd5b81356117be81612069565b60005b838110156120b757818101518382015260200161209f565b83811115610bbc5750506000910152565b600081518084526120e081602086016020860161209c565b601f01601f19169290920160200192915050565b6020815260006117be60208301846120c8565b60006020828403121561211957600080fd5b5035919050565b80356001600160a01b038116811461213757600080fd5b919050565b6000806040838503121561214f57600080fd5b61215883612120565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff8084111561219757612197612166565b604051601f8501601f19908116603f011681019082821181831017156121bf576121bf612166565b816040528093508581528686860111156121d857600080fd5b858560208301376000602087830101525050509392505050565b600082601f83011261220357600080fd5b6117be8383356020850161217c565b60006020828403121561222457600080fd5b813567ffffffffffffffff81111561223b57600080fd5b610e8c848285016121f2565b60008060006060848603121561225c57600080fd5b61226584612120565b925061227360208501612120565b9150604084013590509250925092565b6000806040838503121561229657600080fd5b823591506122a660208401612120565b90509250929050565b6000602082840312156122c157600080fd5b6117be82612120565b600080604083850312156122dd57600080fd5b6122e683612120565b9150602083013580151581146122fb57600080fd5b809150509250929050565b6000806000806080858703121561231c57600080fd5b61232585612120565b935061233360208601612120565b925060408501359150606085013567ffffffffffffffff81111561235657600080fd5b8501601f8101871361236757600080fd5b6123768782356020840161217c565b91505092959194509250565b6000806040838503121561239557600080fd5b61239e83612120565b9150602083013567ffffffffffffffff8111156123ba57600080fd5b6123c6858286016121f2565b9150509250929050565b600080604083850312156123e357600080fd5b6123ec83612120565b91506122a660208401612120565b600181811c9082168061240e57607f821691505b6020821081141561242f57634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b8054600090600181811c90808316806124b657607f831692505b60208084108214156124d857634e487b7160e01b600052602260045260246000fd5b8180156124ec57600181146124fd5761252a565b60ff1986168952848901965061252a565b60008881526020902060005b868110156125225781548b820152908501908301612509565b505084890196505b50505050505092915050565b6000610e8c612545838661249c565b8461249c565b634e487b7160e01b600052601160045260246000fd5b6000828210156125735761257361254b565b500390565b6000821982111561258b5761258b61254b565b500190565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516125c881601785016020880161209c565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516125f981602884016020880161209c565b01602801949350505050565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6000835161266981846020880161209c565b83519083019061267d81836020880161209c565b01949350505050565b60008160001904831182151516156126a0576126a061254b565b500290565b6000816126b4576126b461254b565b506000190190565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906126ef908301846120c8565b9695505050505050565b60006020828403121561270b57600080fd5b81516117be81612069565b600060001982141561272a5761272a61254b565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261275657612756612731565b500490565b60008261276a5761276a612731565b500690565b634e487b7160e01b600052603160045260246000fdfea264697066735822122014ab2103d70e426d25cc34905aa377e8bbd6152fb78479d06657c953a2aa9cdc64736f6c63430008090033",
      contractName: "StartonERC721",
      compilerVersion: "v0.8.9+commit.e5eed63a",
      optimizationUsed: true,
    },
    isActivated: true,
    isAudited: false,
    order: 99,
    tags: [SmartContractTemplateCategories.DEPRECATED],
    category: SmartContractTemplateCategories.DEPRECATED,
  },
];

export default LIST;
