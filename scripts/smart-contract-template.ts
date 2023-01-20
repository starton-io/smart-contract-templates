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
  DEPECRECATED = "SmartContractTemplateCategory.DEPECRECATED",
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
  githubUrl?: string;
  blockchains: Blockchain[];
  tags: string[];
  category: SmartContractTemplateCategory;
  abi?: Array<Record<string, any>>;
  form?: Record<string, any>;
  compilationDetails: CompilationDetails;
  isAudited?: boolean;
  isActivated?: boolean;
  order?: number;
};

export { SmartContractTemplate, SmartContractTemplateCategory, Blockchain };
