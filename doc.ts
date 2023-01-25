import {
  Blockchain,
  SmartContractTemplateCategory,
  SmartContractTemplate,
} from "./scripts/smart-contract-template";

const LIST: SmartContractTemplate[] = [
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

export default LIST;
