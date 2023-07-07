/* eslint-disable no-unused-vars */

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
  githubUrl?: string;
  blockchains: string[];
  compilationDetails: CompilationDetails;
  tags: SmartContractTemplateCategory[];
  category: SmartContractTemplateCategory;
  abi?: Array<Record<string, any>>;
  form?: Record<string, any>;
  isAudited?: boolean;
  isActivated?: boolean;
  order?: number;
};

export { SmartContractTemplate, SmartContractTemplateCategory };
