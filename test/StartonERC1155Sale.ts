import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { BigNumber } from "ethers";

import {
  StartonERC1155MetaTransaction,
  StartonERC1155MetaTransaction__factory, // eslint-disable-line camelcase
  StartonERC1155Sale,
  StartonERC1155Sale__factory, // eslint-disable-line camelcase
} from "../typechain-types";

let ERC1155: StartonERC1155MetaTransaction__factory; // eslint-disable-line camelcase
let ERC1155Sale: StartonERC1155Sale__factory; // eslint-disable-line camelcase

describe("StartonERC1155Sale", () => {
  let instanceERC1155: StartonERC1155MetaTransaction;
  let instanceSale: StartonERC1155Sale;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let addrs: SignerWithAddress[];
  let now: Date;

  before(async () => {
    // Get the Signers here
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    ERC1155 = new StartonERC1155MetaTransaction__factory(owner);
    ERC1155Sale = new StartonERC1155Sale__factory(owner);
  });

  beforeEach(async () => {
    // Reset the whole waffle for each test
    await ethers.provider.send("hardhat_reset", []);

    instanceERC1155 = (await ERC1155.deploy(
      "testContract",
      "rnd1",
      "rnd2",
      owner.address
    )) as StartonERC1155MetaTransaction;
    await instanceERC1155.deployed();

    now = new Date();
    instanceSale = (await ERC1155Sale.deploy(
      instanceERC1155.address,
      BigNumber.from("1000"),
      now.valueOf(),
      now.valueOf() + 1000 * 60 * 60 * 24 * 7,
      BigNumber.from("3"),
      BigNumber.from("10"),
      owner.address
    )) as StartonERC1155Sale;
    await instanceSale.deployed();

    const minterRole = await instanceERC1155.MINTER_ROLE();
    await instanceERC1155.grantRole(minterRole, instanceSale.address);
  });

  describe("Deployment", () => {
    it("should deploy the contract", async () => {});

    it("should set the token correctly", async () => {
      expect(await instanceSale.token()).to.be.equal(instanceERC1155.address);
    });

    it("should set the price correctly", async () => {
      expect(await instanceSale.price()).to.be.equal(BigNumber.from("1000"));
    });

    it("should set the startTime correctly", async () => {
      expect(await instanceSale.startTime()).to.be.equal(now.valueOf());
    });

    it("should set the endTime correctly", async () => {
      expect(await instanceSale.endTime()).to.be.equal(
        now.valueOf() + 1000 * 60 * 60 * 24 * 7
      );
    });

    it("should set the maxTokensPerAddress correctly", async () => {
      expect(await instanceSale.maxTokensPerAddress()).to.be.equal(
        BigNumber.from("3")
      );
    });

    it("should set the maxSupply correctly", async () => {
      expect(await instanceSale.leftSupply()).to.be.equal(BigNumber.from("10"));
    });
  });

  describe("mint", () => {
    it("shouldn't mint with a time before", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [
        now.valueOf() - 1,
      ]);

      await expect(
        instanceSale.mint(addr1.address, 10, 1, {
          value: BigNumber.from("1000"),
        })
      ).to.be.revertedWith("Minting not started");
    });

    it("shouldn't mint with a time after", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [
        now.valueOf() + 1000 * 60 * 60 * 24 * 7 + 1,
      ]);

      await expect(
        instanceSale.mint(addr1.address, 10, 1, {
          value: BigNumber.from("1000"),
        })
      ).to.be.revertedWith("Minting finished");
    });

    it("shouldn't mint with lower value than required", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      await expect(
        instanceSale.mint(addr1.address, 10, 1, {
          value: BigNumber.from("999"),
        })
      ).to.be.revertedWith("Insufficient funds");
    });

    it("shouldn't mint more than allowed per wallet", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      await expect(
        instanceSale.mint(addr1.address, 10, 4, {
          value: BigNumber.from("4000"),
        })
      ).to.be.revertedWith("Max tokens reached");
    });

    it("shouldn't mint more than total supply", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      await instanceSale.mint(addr1.address, 10, 3, {
        value: BigNumber.from("3000"),
      });
      await instanceSale.connect(addr1).mint(addr1.address, 10, 3, {
        value: BigNumber.from("3000"),
      });
      await instanceSale.connect(addr2).mint(addr1.address, 10, 3, {
        value: BigNumber.from("3000"),
      });
      await expect(
        instanceSale.connect(addrs[3]).mint(addr1.address, 10, 2, {
          value: BigNumber.from("2000"),
        })
      ).to.be.revertedWith("Max supply reached");
    });

    it("should mint with a correct time and correct value", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      await instanceSale.mint(addr1.address, 10, 1, {
        value: BigNumber.from("1000"),
      });

      expect(await instanceERC1155.balanceOf(addr1.address, 10)).to.be.equal(1);

      await ethers.provider.send("evm_setNextBlockTimestamp", [
        now.valueOf() + 1000 * 60 * 60 * 24 * 7,
      ]);

      await instanceSale.mint(addr1.address, 10, 1, {
        value: BigNumber.from("1000"),
      });

      expect(await instanceERC1155.balanceOf(addr1.address, 10)).to.be.equal(2);
    });
  });

  describe("mintBatch", () => {
    it("shouldn't batch mint with a time before", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [
        now.valueOf() - 1,
      ]);

      await expect(
        instanceSale.mintBatch(addr1.address, [10, 11], [1, 2], {
          value: BigNumber.from("3000"),
        })
      ).to.be.revertedWith("Minting not started");
    });

    it("shouldn't batch mint with a time after", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [
        now.valueOf() + 1000 * 60 * 60 * 24 * 7 + 1,
      ]);

      await expect(
        instanceSale.mintBatch(addr1.address, [10, 11], [1, 2], {
          value: BigNumber.from("3000"),
        })
      ).to.be.revertedWith("Minting finished");
    });

    it("shouldn't batch mint with lower value than required", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      await expect(
        instanceSale.mintBatch(addr1.address, [10, 11], [1, 2], {
          value: BigNumber.from("2999"),
        })
      ).to.be.revertedWith("Insufficient funds");
    });

    it("shouldn't batch mint more than allowed per wallet", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      await expect(
        instanceSale.mintBatch(addr1.address, [10, 11], [2, 2], {
          value: BigNumber.from("4000"),
        })
      ).to.be.revertedWith("Max tokens reached");
    });

    it("shouldn't batch mint more than total supply", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      instanceSale.mintBatch(addr1.address, [10, 11], [1, 2], {
        value: BigNumber.from("3000"),
      });
      instanceSale.connect(addr1).mintBatch(addr1.address, [10, 11], [1, 2], {
        value: BigNumber.from("3000"),
      });
      instanceSale.connect(addr2).mintBatch(addr1.address, [10, 11], [1, 2], {
        value: BigNumber.from("3000"),
      });
      await expect(
        instanceSale.connect(addrs[3]).mintBatch(addr1.address, [10], [2], {
          value: BigNumber.from("2000"),
        })
      ).to.be.revertedWith("Max supply reached");
    });

    it("should batch mint with a correct time and correct value", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      await instanceSale.mintBatch(addr1.address, [10, 11], [2, 1], {
        value: BigNumber.from("3000"),
      });

      expect(await instanceERC1155.balanceOf(addr1.address, 10)).to.be.equal(2);
      expect(await instanceERC1155.balanceOf(addr1.address, 11)).to.be.equal(1);
    });
  });

  describe("withdraw", () => {
    it("shoud be able to withdraw the whole balance", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      const ownerBalance = await owner.getBalance();

      await instanceSale.connect(addr1).mint(addr1.address, 10, 1, {
        value: ethers.utils.parseEther("0.26"),
      });

      await instanceSale.connect(addr1).mint(addr1.address, 10, 1, {
        value: ethers.utils.parseEther("0.4"),
      });

      await instanceSale.connect(addr1).withdraw();
      expect(await owner.getBalance()).to.be.equal(
        ethers.utils.parseUnits("0.66").add(ownerBalance)
      );
    });
  });
});
