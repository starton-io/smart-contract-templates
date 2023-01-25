import { readFileSync, writeFileSync } from "fs";

function printUsage(): void {
  console.log("USAGE\n\tts-node single-line-contract input out");
  console.log();
  console.log("DESCRIPTION\n\tinput\tThe input contract file to convert");
  console.log("\tout\tThe output file where to write the converted contract");
}

function main() {
  if (process.argv.length !== 4) {
    printUsage();
    return;
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
}
main();
