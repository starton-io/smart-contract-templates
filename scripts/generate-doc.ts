import { exec } from "child_process";
import { readdirSync, readFileSync, writeFileSync } from "fs";
import doc from "../doc";
import {
  Blockchain,
  SmartContractTemplateCategory,
} from "./smart-contract-template";

function replaceAll(str: string, find: string, replace: string) {
  return str.replace(new RegExp(find, "g"), replace);
}

function parseAbi(contractMetadata: any): any {
  return contractMetadata.abi;
}

function parseBytecode(contractMetadata: any): string {
  return contractMetadata.evm.bytecode.object;
}

function parseRuns(fileContent: any): number {
  return fileContent.input.settings.optimizer.runs;
}

function parseOptimizer(fileContent: any): boolean {
  return fileContent.input.settings.optimizer.enabled;
}

function parseCompilerVersion(fileContent: any): string {
  return fileContent.solcLongVersion;
}

function parseSourceCode(contractFilePath: any): string {
  const fileContents = readFileSync(contractFilePath, {
    encoding: "utf8",
    flag: "r",
  }).toString();

  return fileContents.replace(/\n/g, "\\n").replace(/'/g, "\\'");
}

function getCompilationFileContent(contractName: string): any | undefined {
  const baseBuildPath = "./artifacts/build-info";
  const files = readdirSync(baseBuildPath);

  const compilationFiles: string[] = [];
  files.forEach((file) => {
    compilationFiles.push(
      readFileSync(baseBuildPath + "/" + file, {
        encoding: "utf8",
        flag: "r",
      }).toString()
    );
  });

  const compilationFile = compilationFiles.find((file) =>
    file.includes("/" + contractName + ".sol")
  );

  if (!compilationFile) {
    return undefined;
  }

  return JSON.parse(compilationFile);
}

function findOutputInsideCompilationFile(
  compilationFile: any,
  contractName: string
): any {
  let contractMetadata;
  for (const contract in compilationFile.output.contracts) {
    if (contract.includes("/" + contractName + ".sol")) {
      contractMetadata =
        compilationFile.output.contracts[contract][contractName];
    }
  }

  if (!contractMetadata) {
    throw new Error(
      `Contract ${contractName} not found inside compilation file`
    );
  }

  return contractMetadata;
}

function findFlattenPath(compilationFile: any, contractName: string): string {
  let contractMetadata;
  for (const contract in compilationFile.output.contracts) {
    if (contract.includes("/" + contractName + ".sol")) {
      contractMetadata = contract;
    }
  }

  if (!contractMetadata) {
    throw new Error(
      `Contract ${contractName} not found inside compilation file`
    );
  }

  return contractMetadata.replace("contracts/", "flatten/");
}

function printUsage(): void {
  console.log("USAGE\n\tts-node generate-doc output");
  console.log();
  console.log("DESCRIPTION\n\toutput\tThe output file");
}

function main() {
  if (
    process.argv.length !== 3 ||
    process.argv[1] === "--help" ||
    process.argv[1] === "-h"
  ) {
    printUsage();
    return;
  }

  doc.forEach((contract) => {
    console.log(
      `Handling the ${contract.compilationDetails.contractName} contract`
    );

    const compilationFile = getCompilationFileContent(
      contract.compilationDetails.contractName
    );

    if (!compilationFile) {
      return;
    }

    const flattenPath = findFlattenPath(
      compilationFile,
      contract.compilationDetails.contractName
    );

    contract.compilationDetails.runs = parseRuns(compilationFile);
    contract.compilationDetails.compilerVersion =
      parseCompilerVersion(compilationFile);
    contract.compilationDetails.optimizationUsed =
      parseOptimizer(compilationFile);

    const outputContractMetadata = findOutputInsideCompilationFile(
      compilationFile,
      contract.compilationDetails.contractName
    );

    contract.compilationDetails.bytecode = parseBytecode(
      outputContractMetadata
    );
    contract.abi = parseAbi(outputContractMetadata);

    contract.compilationDetails.source = parseSourceCode(flattenPath);
  });

  let stringifiedContent = JSON.stringify(doc, null, 2);

  // Remove the quotes of the enum values
  for (const item in Blockchain) {
    stringifiedContent = replaceAll(
      stringifiedContent,
      `"Blockchain.${item}"`,
      `Blockchain.${item}`
    );
  }
  for (const item in SmartContractTemplateCategory) {
    stringifiedContent = replaceAll(
      stringifiedContent,
      `"SmartContractTemplateCategory.${item}"`,
      `SmartContractTemplateCategory.${item}`
    );
  }

  writeFileSync(process.argv[2], "export default " + stringifiedContent + ";");

  exec("npx eslint " + process.argv[2] + " --fix", {
    encoding: "utf-8",
  });
}
main();
