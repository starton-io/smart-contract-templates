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

  const StartonERC20BurnPause = await ethers.getContractFactory(
    "StartonERC20BurnPause"
  );

  const initialSupply = ethers.utils.parseUnits("100000", 18);
  const erc20 = await StartonERC20BurnPause.deploy(
    "Starton test token",
    "STT",
    initialSupply,
    timelock.address
  );

  await erc20.deployed();
  console.log("Contract deployed to:", erc20.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
