// @ts-ignore
import { run, ethers } from "hardhat"

async function main() {

  await run("compile")
  const StartonErc20MintBurnPause = await ethers.getContractFactory("StartonErc20MintBurnPause");

  const initialSupply = ethers.utils.parseUnits("100000", 18);
  const erc20 = await StartonErc20MintBurnPause.deploy("Starton test token", "STT", initialSupply);

  await erc20.deployed();
  console.log("Contract deployed to:", erc20.address);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
