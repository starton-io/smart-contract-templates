import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { BigNumber } from "ethers";

import {
  StartonERC1155Base,
  StartonERC1155Base__factory, // eslint-disable-line camelcase
  StartonERC1155AuctionSale,
  StartonERC1155AuctionSale__factory, // eslint-disable-line camelcase
} from "../typechain-types";

let ERC1155: StartonERC1155Base__factory; // eslint-disable-line camelcase
let ERC1155Sale: StartonERC1155AuctionSale__factory; // eslint-disable-line camelcase

describe("StartonERC1155AuctionSale", () => {
  let instanceERC1155: StartonERC1155Base;
  let instanceSale: StartonERC1155AuctionSale;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;

  // The current date of the test that will be used to mine blocks
  let now: Date;

  before(async () => {
    // Get the Signers here
    [owner, addr1, addr2] = await ethers.getSigners();

    ERC1155 = new StartonERC1155Base__factory(owner);
    ERC1155Sale = new StartonERC1155AuctionSale__factory(owner);
  });

  beforeEach(async () => {
    // Reset the whole waffle for each test
    await ethers.provider.send("hardhat_reset", []);

    instanceERC1155 = (await ERC1155.deploy(
      "StartonToken",
      "https://ipfs.io/QmbWqibQSuvvsGVDUVvDCGdgcdCDCfycDFC3VV4v4Ghgc4/{id}",
      "https://ipfs.io/QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR",
      owner.address
    )) as StartonERC1155Base;
    await instanceERC1155.deployed();

    now = new Date();
    instanceSale = (await ERC1155Sale.deploy(
      instanceERC1155.address,
      owner.address,
      BigNumber.from("1000"),
      BigNumber.from("100"),
      now.valueOf(),
      now.valueOf() + 1000 * 60 * 60 * 24 * 7,
      10,
      1
    )) as StartonERC1155AuctionSale;
    await instanceSale.deployed();

    const minterRole = await instanceERC1155.MINTER_ROLE();
    await instanceERC1155.grantRole(minterRole, instanceSale.address);
  });

  describe("Deployment", () => {
    it("Should deploy the contract", async () => {});

    it("Should set the token correctly", async () => {
      expect(await instanceSale.token()).to.be.equal(instanceERC1155.address);
    });

    it("Should set the currentPrice correctly", async () => {
      expect(await instanceSale.currentPrice()).to.be.equal(
        BigNumber.from("1000")
      );
    });

    it("Should set the minPriceDifference correctly", async () => {
      expect(await instanceSale.minPriceDifference()).to.be.equal(
        BigNumber.from("100")
      );
    });

    it("Should set the startTime correctly", async () => {
      expect(await instanceSale.startTime()).to.be.equal(now.valueOf());
    });

    it("Should set the endTime correctly", async () => {
      expect(await instanceSale.endTime()).to.be.equal(
        now.valueOf() + 1000 * 60 * 60 * 24 * 7
      );
    });

    it("Should set the currentAuctionWinner correctly", async () => {
      expect(await instanceSale.currentAuctionWinner()).to.be.equal(
        "0x0000000000000000000000000000000000000000"
      );
    });
  });

  describe("Bid", () => {
    it("Shouldn't bid with a time before", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [
        now.valueOf() - 1,
      ]);

      await expect(
        instanceSale.bid({ value: ethers.utils.parseEther("0.1") })
      ).to.be.revertedWith("Bidding not started");
    });

    it("Shouldn't bit with a time after", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [
        now.valueOf() + 1000 * 60 * 60 * 24 * 7 + 1,
      ]);

      await expect(
        instanceSale.bid({ value: ethers.utils.parseEther("0.1") })
      ).to.be.revertedWith("Bidding finished");
    });

    it("Shouldn't bid with a lower or equal value", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      await expect(
        instanceSale.bid({ value: BigNumber.from("1000") })
      ).to.be.revertedWith("Bid is too low");

      await expect(
        instanceSale.bid({ value: BigNumber.from("987") })
      ).to.be.revertedWith("Bid is too low");
    });

    it("Shouldn't bid if the minPriceDifference isn't fulfill", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      instanceSale.connect(addr1).bid({ value: BigNumber.from("1000") });

      await expect(
        instanceSale.bid({ value: BigNumber.from("1099") })
      ).to.be.revertedWith("Bid is too low");
    });

    it("Should bid if everything is correct", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      await instanceSale.bid({ value: ethers.utils.parseEther("0.1") });
      expect(await instanceSale.currentAuctionWinner()).to.be.equal(
        owner.address
      );
      expect(await instanceSale.currentPrice()).to.be.equal(
        ethers.utils.parseEther("0.1")
      );
    });

    it("Should send back the money of the last bid", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      await instanceSale.bid({ value: ethers.utils.parseEther("0.1") });

      const oldBalance = await owner.getBalance();
      await instanceSale
        .connect(addr1)
        .bid({ value: ethers.utils.parseEther("0.11") });
      expect(await owner.getBalance()).to.be.equal(
        oldBalance.add(ethers.utils.parseEther("0.1"))
      );
    });
  });

  describe("Claim", () => {
    it("Shouldn't claim if the auction hasn't finished", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      await instanceSale
        .connect(addr2)
        .bid({ value: ethers.utils.parseEther("0.11") });

      await ethers.provider.send("evm_setNextBlockTimestamp", [
        now.valueOf() + 1000 * 60 * 60 * 24 * 7,
      ]);
      await expect(instanceSale.claim()).to.be.revertedWith(
        "Minting hasn't finished yet"
      );
    });

    it("Shouldn't claim twice to the winner", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      await instanceSale
        .connect(addr2)
        .bid({ value: ethers.utils.parseEther("0.11") });

      await ethers.provider.send("evm_setNextBlockTimestamp", [
        now.valueOf() + 1000 * 60 * 60 * 24 * 7 + 1,
      ]);
      await instanceSale.claim();
      await expect(instanceSale.claim()).to.be.revertedWith(
        "Token has already been claimed"
      );
    });

    it("Should claim if everything is correct", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      await instanceSale
        .connect(addr2)
        .bid({ value: ethers.utils.parseEther("0.11") });

      await ethers.provider.send("evm_setNextBlockTimestamp", [
        now.valueOf() + 1000 * 60 * 60 * 24 * 7 + 1,
      ]);
      await instanceSale.claim();
      expect(await instanceERC1155.balanceOf(addr2.address, 10)).to.be.equal(1);
    });
  });

  describe("Withdraw", () => {
    it("Shouldn't transfer anything if there isn't any bid yet", async () => {
      const oldBalance = await owner.getBalance();
      await instanceSale.connect(addr1).withdraw();
      expect(await owner.getBalance()).to.be.equal(oldBalance);
    });

    it("Should transfer everything", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      await instanceSale
        .connect(addr2)
        .bid({ value: ethers.utils.parseEther("0.11") });

      await ethers.provider.send("evm_setNextBlockTimestamp", [
        now.valueOf() + 1000 * 60 * 60 * 24 * 7 + 1,
      ]);
      await instanceSale.claim();

      const oldBalance = await owner.getBalance();
      await instanceSale.connect(addr1).withdraw();
      expect(await owner.getBalance()).to.be.equal(
        oldBalance.add(ethers.utils.parseEther("0.11"))
      );
    });

    it("Should transfer the remaining when a auction is ongoing", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      await instanceSale
        .connect(addr2)
        .bid({ value: ethers.utils.parseEther("0.11") });

      await ethers.provider.send("evm_setNextBlockTimestamp", [
        now.valueOf() + 1000 * 60 * 60 * 24 * 7 + 1,
      ]);
      await instanceSale.claim();

      const start = now.valueOf() + 1000 * 60 * 60 * 24 * 7 + 100;
      const end = start + 1000;

      await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

      await instanceSale.startNewAuction("1000", "1", start, end, 10, 1);

      await instanceSale
        .connect(addr2)
        .bid({ value: ethers.utils.parseEther("0.2") });

      const oldBalance = await owner.getBalance();
      await instanceSale.connect(addr1).withdraw();
      expect(await owner.getBalance()).to.be.equal(
        oldBalance.add(ethers.utils.parseEther("0.11"))
      );
    });
  });

  describe("StartNewAuction", () => {
    it("Shouldn't start a new auction if the current one hasn't been claimed", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);
      await expect(
        instanceSale.startNewAuction(
          BigNumber.from("1000"),
          BigNumber.from("100"),
          now.valueOf(),
          now.valueOf() + 1000 * 60 * 60 * 24 * 7,
          10,
          1
        )
      ).to.be.revertedWith("The auction hasn't been claimed yet");
    });

    it("Shouldn't start a new auction if the end time is before the start time", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      await instanceSale
        .connect(addr2)
        .bid({ value: ethers.utils.parseEther("0.11") });

      await ethers.provider.send("evm_setNextBlockTimestamp", [
        now.valueOf() + 1000 * 60 * 60 * 24 * 7 + 1,
      ]);
      await instanceSale.claim();

      await expect(
        instanceSale.startNewAuction(
          BigNumber.from("1000"),
          BigNumber.from("100"),
          now.valueOf(),
          now.valueOf() - 10,
          10,
          1
        )
      ).to.be.revertedWith("Start time must be before end time");
    });

    it("Should start a new auction if everything is correct", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      await instanceSale
        .connect(addr2)
        .bid({ value: ethers.utils.parseEther("0.11") });

      await ethers.provider.send("evm_setNextBlockTimestamp", [
        now.valueOf() + 1000 * 60 * 60 * 24 * 7 + 1,
      ]);
      await instanceSale.claim();

      await instanceSale.startNewAuction(
        BigNumber.from("10000"),
        BigNumber.from("1000"),
        now.valueOf() + 1000 * 60 * 60 * 24 * 7 + 1,
        now.valueOf() + 1000 * 60 * 60 * 24 * 7 * 2 + 1,
        10,
        1
      );

      expect(await instanceSale.minPriceDifference()).to.be.equal(
        BigNumber.from("1000")
      );
      expect(await instanceSale.currentPrice()).to.be.equal(
        BigNumber.from("10000")
      );
      expect(await instanceSale.startTime()).to.be.equal(
        now.valueOf() + 1000 * 60 * 60 * 24 * 7 + 1
      );
      expect(await instanceSale.endTime()).to.be.equal(
        now.valueOf() + 1000 * 60 * 60 * 24 * 7 * 2 + 1
      );
      expect(await instanceSale.currentAuctionWinner()).to.be.equal(
        "0x0000000000000000000000000000000000000000"
      );
      expect(await instanceSale.tokenAmount()).to.be.equal(1);
      expect(await instanceSale.tokenId()).to.be.equal(10);
    });
  });
});
