import { readFileSync, writeFileSync } from "fs";

if (process.argv[1] === "-h" || process.argv[1] === "--help") {
  console.log("");
  console.log("\tUsage: single-line-contract CONTRACT OUT");
  console.log();
}

const contractFilePath = process.argv[2];
const outFilePath = process.argv[3];

const fileContents = readFileSync(contractFilePath, {
  encoding: "utf8",
  flag: "r",
}).toString();

writeFileSync(
  outFilePath,
  fileContents.replace(/\n/g, "\\n").replace(/'/g, "\\'")
);
