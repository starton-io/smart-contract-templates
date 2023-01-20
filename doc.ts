import {
  Blockchain,
  SmartContractTemplateCategory,
} from "./scripts/smart-contract-template";

export default [
  {
    id: "ERC_721_METATRANSACTION",
    name: "ERC721 Metatransaction",
    description: "ERC721 Metatransaction",
    shortDescription: "ERC721 Metatransaction",
    blockchains: [Blockchain.ETHEREUM],
    tags: ["ERC721"],
    category: SmartContractTemplateCategory.NFT,
    compilationDetails: {
      contractName: "StartonERC721Base",
    },
  },
];
