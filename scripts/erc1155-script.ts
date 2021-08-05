// @ts-ignore
import { run, ethers } from "hardhat"

async function main() {

  await run("compile")
  const StartonERC1155 = await ethers.getContractFactory("StartonERC1155");

  const nft = await StartonERC1155.deploy("Starton nft", "https://nft.starton.io/");

  await nft.deployed();
  console.log("Contract deployed to:", nft.address);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
