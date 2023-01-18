import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";
import { expect } from "chai";

import {
  StartonMultiSendERC20,
  StartonMultiSendERC20__factory, // eslint-disable-line camelcase
  StartonERC20Base,
  StartonERC20Base__factory, // eslint-disable-line camelcase
} from "../typechain-types";

let Multisend: StartonMultiSendERC20__factory; // eslint-disable-line camelcase
let ERC20: StartonERC20Base__factory; // eslint-disable-line camelcase

describe("StartonMultiSendERC20", () => {
  let instanceMultisend: StartonMultiSendERC20;
  let instanceERC20: StartonERC20Base;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let addrs: SignerWithAddress[];

  before(async () => {
    // Get the Signers here
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    // Create factory
    Multisend = new StartonMultiSendERC20__factory(owner);
    ERC20 = new StartonERC20Base__factory(owner);
  });

  beforeEach(async () => {
    instanceMultisend = (await Multisend.deploy()) as StartonMultiSendERC20;
    await instanceMultisend.deployed();

    instanceERC20 = (await ERC20.deploy(
      "StartonToken",
      "ST",
      "1000000000000000000000000000",
      owner.address
    )) as StartonERC20Base;
    await instanceERC20.deployed();
  });

  describe("Deployment", () => {
    it("Should deploy", async () => {});
  });

  describe("MultiSend", () => {
    it("Should send tokens to multiple addresses", async () => {
      await instanceERC20.approve(
        instanceMultisend.address,
        "1000000000000000000000000000"
      );
      await instanceMultisend.multiSend(
        instanceERC20.address,
        ["1000", "100000", "100"],
        [addr1.address, addr2.address, addrs[3].address]
      );

      expect(await instanceERC20.balanceOf(addr1.address)).to.equal("1000");
      expect(await instanceERC20.balanceOf(addr2.address)).to.equal("100000");
      expect(await instanceERC20.balanceOf(addrs[3].address)).to.equal("100");
    });
  });
});
