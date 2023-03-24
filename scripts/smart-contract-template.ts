/* eslint-disable no-unused-vars */

enum Blockchain {
  POLYGON = "Blockchain.POLYGON",
  AVALANCHE = "Blockchain.AVALANCHE",
  BINANCE = "Blockchain.BINANCE",
  ETHEREUM = "Blockchain.ETHEREUM",
}

enum SmartContractTemplateCategory {
  OTHER = "SmartContractTemplateCategory.OTHER",
  FUNGIBLE = "SmartContractTemplateCategory.FUNGIBLE",
  SALE = "SmartContractTemplateCategory.SALE",
  NFT = "SmartContractTemplateCategory.NFT",
  DEPRECATED = "SmartContractTemplateCategory.DEPRECATED",
}

type CompilationDetails = {
  runs?: number;
  source?: string;
  bytecode?: string;
  contractName: string;
  compilerVersion?: string;
  optimizationUsed?: boolean;
};

type SmartContractTemplate = {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  blockchains: Blockchain[];
  compilationDetails: CompilationDetails;
  tags: SmartContractTemplateCategory[];
  category: SmartContractTemplateCategory;
  abi?: Array<Record<string, any>>;
  form?: Record<string, any>;
  isAudited?: boolean;
  isActivated?: boolean;
  order?: number;
};

export { SmartContractTemplate, SmartContractTemplateCategory, Blockchain };
