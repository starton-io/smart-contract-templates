// @ts-ignore
import { run, ethers } from "hardhat";

async function main() {
  await run("compile");

  const StartonTimelockController = await ethers.getContractFactory(
    "StartonTimelockController"
  );
  const [owner, addr1, addr2] = await ethers.getSigners();
  const timelock = await StartonTimelockController.deploy(
    172800,
    [owner.address, addr1.address, addr2.address],
    [owner.address, addr1.address, addr2.address]
  );

  const StartonERC721 = await ethers.getContractFactory("StartonERC721");

  const nft = await StartonERC721.deploy(
    "Starton nft",
    "NFT",
    "ipfs://ipfs/",
    timelock.address
  );

  await nft.deployed();
  console.log("Contract deployed to:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
