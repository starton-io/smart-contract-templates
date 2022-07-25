// @ts-ignore
import { run, ethers } from "hardhat";

async function main() {
  await run("compile");

  const ChildStartonERC721 = await ethers.getContractFactory(
    "contracts/v2/polygon/ChildStartonERC721.sol:ChildStartonERC721"
  );

  const nft = await ChildStartonERC721.deploy(
    "Test",
    "TEST",
    "https://ipfs.io/ipfs/",
    "QmVzRtDBSQzxPKcxfL7hWvfsYugiMMWyHZ5cUE5LFUjaVU",
    "0xb3ef93da6a2e7cbbf92ded6b3324bef50b18c61a"
  );

  await nft.deployed();

  console.log("Contract deployed to:", nft.address);

  console.log(await nft.functions.contractURI());
  console.log(
    await nft.functions.setBaseContractURI("https://gateway.pinata.cloud/ipfs/")
  );
  console.log(await nft.functions.contractURI());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
