/* eslint-disable no-unused-vars */

enum SmartContractTemplateCategories {
  OTHER = "SmartContractTemplateCategories.OTHER",
  FUNGIBLE = "SmartContractTemplateCategories.FUNGIBLE",
  SALE = "SmartContractTemplateCategories.SALE",
  NFT = "SmartContractTemplateCategories.NFT",
  DEPRECATED = "SmartContractTemplateCategories.DEPRECATED",
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
  blockchains: string[];
  compilationDetails: CompilationDetails;
  tags: SmartContractTemplateCategories[];
  category: SmartContractTemplateCategories;
  abi?: Array<Record<string, any>>;
  form?: Record<string, any>;
  isAudited?: boolean;
  isActivated?: boolean;
  order?: number;
};

export { SmartContractTemplate, SmartContractTemplateCategories };
