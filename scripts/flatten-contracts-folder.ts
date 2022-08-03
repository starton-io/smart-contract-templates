import fs from "fs";
import path from "path";
import { execSync } from "child_process";

// directory path
const dir = "contracts/";
const outDir = "flatten/";

function getAllFiles(dirPath: string, arrayOfFiles: string[]) {
  const files = fs.readdirSync(dirPath);

  const arrayOfDirectoriesToIgnore = ["utils", "interfaces"];

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

function filterLicensesInFile(filePath: string) {
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

const filesToFlatten = getAllFiles(dir, []);

for (const file of filesToFlatten) {
  const relativeFilePath = file.split(dir)[1];
  const dest = outDir + relativeFilePath;
  const source = dir + relativeFilePath;

  console.log("Flattening : " + source + " to " + dest);
  execSync("npx hardhat flatten " + source + " > " + dest, {
    encoding: "utf-8",
  });

  filterLicensesInFile(dest);
}
