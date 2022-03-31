import "@nomiclabs/hardhat-waffle";
import { task } from "hardhat/config";
import * as dotenv from 'dotenv'

dotenv.config()
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
export default {
  solidity: {
    version: "0.8.9", // v0.8.9+commit.e5eed63a
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    ropsten: {
      url: process.env.ROPSTEN_PROVIDER,
      accounts: {
          mnemonic: process.env.MNEMONIC
      },
    }
  },
  paths: {
    sources: "./flatten",
  }
};

