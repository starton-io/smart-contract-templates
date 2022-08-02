// @ts-ignore
const fs = require("fs"); // @ts-ignore
const path = require("path"); // @ts-ignore
const execSync = require("child_process").execSync;

// directory path
const dir = "contracts/";
const outDir = "flatten/";

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      if (file !== "utils") {
        arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
      }
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

function filterLicensesInFile(filePath) {
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
