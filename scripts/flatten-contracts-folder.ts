import fs from "fs";
import path from "path";
import { exec, execSync } from "child_process";

// directory path
const dir = "contracts/";
const outDir = "flatten/";

function getAllFiles(dirPath: string, arrayOfFiles: string[]): string[] {
  const arrayOfDirectoriesToIgnore = [
    "utils",
    "abstracts",
    "deprecated",
    "interfaces",
  ];

  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      if (!arrayOfDirectoriesToIgnore.includes(file)) {
        arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
      }
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

function filterLicensesInFile(filePath: string): void {
  console.log("Filtering licenses lines in " + filePath);

  let fileContent = "";
  let isFirstLicenseOccurenceFound = false;

  fs.readFileSync(filePath)
    .toString()
    .split("\n")
    .forEach((line, index, arr) => {
      if (index === arr.length - 1 && line === "") {
        return;
      }

      if (line.indexOf("SPDX-License-Identifier") !== -1) {
        if (isFirstLicenseOccurenceFound) {
          return;
        } else {
          isFirstLicenseOccurenceFound = true;
        }
      }

      fileContent += line + "\n";
    });

  fs.writeFileSync(filePath, fileContent);
}

function printUsage(): void {
  console.log("USAGE\n\tts-node flatten-contracts-folder [--git] files ...");
  console.log();
  console.log("DESCRIPTION\n\t--git\tStage the files in git");
  console.log("\tfiles\tlist of files / directories to flatten");
}

function main() {
  if (process.argv.includes("--help") || process.argv.includes("-h")) {
    printUsage();
    return;
  }

  const git = process.argv.includes("--git");

  const filesToFlatten = getAllFiles(dir, []);

  console.log("Flattening files : " + filesToFlatten);

  for (const file of filesToFlatten) {
    const relativeFilePath = file.replace("\\", "/").split(dir)[1];
    const dest = outDir + relativeFilePath;
    const source = dir + relativeFilePath;

    console.log("Flattening : " + source + " to " + dest);
    exec(
      "npx hardhat flatten " + source + " > " + dest,
      {
        encoding: "utf-8",
      },
      () => {
        filterLicensesInFile(dest);
        if (git) execSync("git add " + dest);
      }
    );
  }
}
main();
