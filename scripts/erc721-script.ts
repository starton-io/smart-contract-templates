// @ts-ignore
import { run, ethers } from "hardhat"

async function main() {

  await run("compile")
  const StartonERC721 = await ethers.getContractFactory("StartonERC721");

  const nft = await StartonERC721.deploy("Starton nft", "NFT", "https://nft.starton.io/");

  await nft.deployed();
  console.log("Contract deployed to:", nft.address);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
