import { readFileSync, writeFileSync } from "fs";

if (process.argv[1] === "-h" || process.argv[1] === "--help") {
  console.log("");
  console.log("\tUsage: single-line-contract CONTRACT OUT");
  console.log();
}

const filePath = process.argv[1];

const fileContents = readFileSync(filePath, {
  encoding: "utf8",
  flag: "r",
}).toString();

writeFileSync(
  "test.txt",
  fileContents.replace(/\n/g, "\\n").replace(/'/g, "\\'")
);
