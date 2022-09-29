import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { BigNumber } from "ethers";

import {
  StartonERC721MetaTransaction,
  StartonERC721MetaTransaction__factory, // eslint-disable-line camelcase
  StartonERC721AuctionSale,
  StartonERC721AuctionSale__factory, // eslint-disable-line camelcase
} from "../typechain-types";

let ERC721: StartonERC721MetaTransaction__factory; // eslint-disable-line camelcase
let ERC721Sale: StartonERC721AuctionSale__factory; // eslint-disable-line camelcase

describe("StartonERC721AuctionSale", () => {
  let instanceERC721: StartonERC721MetaTransaction;
  let instanceSale: StartonERC721AuctionSale;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let now: Date;

  before(async () => {
    // Get the Signers here
    [owner, addr1, addr2] = await ethers.getSigners();

    ERC721 = new StartonERC721MetaTransaction__factory(owner);
    ERC721Sale = new StartonERC721AuctionSale__factory(owner);
  });

  beforeEach(async () => {
    // Reset the whole waffle for each test
    await ethers.provider.send("hardhat_reset", []);

    instanceERC721 = (await ERC721.deploy(
      "testContract",
      "TC",
      "rnd1",
      "rnd2",
      owner.address
    )) as StartonERC721MetaTransaction;
    await instanceERC721.deployed();

    now = new Date();
    instanceSale = (await ERC721Sale.deploy(
      instanceERC721.address,
      owner.address,
      BigNumber.from("1000"),
      now.valueOf(),
      now.valueOf() + 1000 * 60 * 60 * 24 * 7
    )) as StartonERC721AuctionSale;
    await instanceSale.deployed();

    const minterRole = await instanceERC721.MINTER_ROLE();
    await instanceERC721.grantRole(minterRole, instanceSale.address);
  });

  describe("Deployment", () => {
    it("should deploy the contract", async () => {});

    it("should set the token correctly", async () => {
      expect(await instanceSale.token()).to.be.equal(instanceERC721.address);
    });

    it("should set the currentPrice correctly", async () => {
      expect(await instanceSale.currentPrice()).to.be.equal(
        BigNumber.from("1000")
      );
    });

    it("should set the startTime correctly", async () => {
      expect(await instanceSale.startTime()).to.be.equal(now.valueOf());
    });

    it("should set the endTime correctly", async () => {
      expect(await instanceSale.endTime()).to.be.equal(
        now.valueOf() + 1000 * 60 * 60 * 24 * 7
      );
    });

    it("should set the currentAuctionWinner correctly", async () => {
      expect(await instanceSale.currentAuctionWinner()).to.be.equal(
        "0x0000000000000000000000000000000000000000"
      );
    });
  });

  describe("bid", () => {
    it("shouldn't bid with a time before", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [
        now.valueOf() - 1,
      ]);

      await expect(
        instanceSale.bid({ value: ethers.utils.parseEther("0.1") })
      ).to.be.revertedWith("Bidding not started");
    });

    it("shouldn't bit with a time after", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [
        now.valueOf() + 1000 * 60 * 60 * 24 * 7 + 1,
      ]);

      await expect(
        instanceSale.bid({ value: ethers.utils.parseEther("0.1") })
      ).to.be.revertedWith("Bidding finished");
    });

    it("shouldn't bid with a lower or equal value", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      await expect(
        instanceSale.bid({ value: BigNumber.from("1000") })
      ).to.be.revertedWith("Bid is too low");

      await expect(
        instanceSale.bid({ value: BigNumber.from("987") })
      ).to.be.revertedWith("Bid is too low");
    });

    it("should bid if everything is correct", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      await instanceSale.bid({ value: ethers.utils.parseEther("0.1") });
      expect(await instanceSale.currentAuctionWinner()).to.be.equal(
        owner.address
      );
      expect(await instanceSale.currentPrice()).to.be.equal(
        ethers.utils.parseEther("0.1")
      );
    });

    it("should send back the money of the last bid", async () => {
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

  describe("mint", () => {
    it("shouldn't mint if the auction hasn't finished", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      await instanceSale
        .connect(addr2)
        .bid({ value: ethers.utils.parseEther("0.11") });

      await ethers.provider.send("evm_setNextBlockTimestamp", [
        now.valueOf() + 1000 * 60 * 60 * 24 * 7,
      ]);
      await expect(
        instanceSale.mint(addr2.address, "gvygvy")
      ).to.be.revertedWith("Minting hasn't finished yet");
    });

    it("shouldn't mint if the destination address isn't the winner", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      await instanceSale
        .connect(addr2)
        .bid({ value: ethers.utils.parseEther("0.11") });

      await ethers.provider.send("evm_setNextBlockTimestamp", [
        now.valueOf() + 1000 * 60 * 60 * 24 * 7 + 1,
      ]);
      await expect(
        instanceSale.mint(addr1.address, "gvygvy")
      ).to.be.revertedWith(
        "Destination address isn't the current auction winner"
      );
    });

    it("shouldn't mint twice to the winner", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      await instanceSale
        .connect(addr2)
        .bid({ value: ethers.utils.parseEther("0.11") });

      await ethers.provider.send("evm_setNextBlockTimestamp", [
        now.valueOf() + 1000 * 60 * 60 * 24 * 7 + 1,
      ]);
      await instanceSale.mint(addr2.address, "gvygvy");
      await expect(
        instanceSale.mint(addr2.address, "gvygvy")
      ).to.be.revertedWith("Token has already been claimed");
    });

    it("should mint if everything is correct", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      await instanceSale
        .connect(addr2)
        .bid({ value: ethers.utils.parseEther("0.11") });

      await ethers.provider.send("evm_setNextBlockTimestamp", [
        now.valueOf() + 1000 * 60 * 60 * 24 * 7 + 1,
      ]);
      await instanceSale.mint(addr2.address, "gvygvy");
      expect(await instanceERC721.ownerOf(0)).to.be.equal(addr2.address);
    });
  });

  describe("withdraw", () => {
    it("shouldn't transfer anything if there isn't any bid yet", async () => {
      const oldBalance = await owner.getBalance();
      await instanceSale.connect(addr1).withdraw();
      expect(await owner.getBalance()).to.be.equal(oldBalance);
    });

    it("should transfer everything", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      await instanceSale
        .connect(addr2)
        .bid({ value: ethers.utils.parseEther("0.11") });

      await ethers.provider.send("evm_setNextBlockTimestamp", [
        now.valueOf() + 1000 * 60 * 60 * 24 * 7 + 1,
      ]);
      await instanceSale.mint(addr2.address, "gvygvy");

      const oldBalance = await owner.getBalance();
      await instanceSale.connect(addr1).withdraw();
      expect(await owner.getBalance()).to.be.equal(
        oldBalance.add(ethers.utils.parseEther("0.11"))
      );
    });
  });

  describe("startNewAuction", () => {
    it("shouldn't start a new auction if the current one hasn't been claimed", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);
      await expect(
        instanceSale.startNewAuction(
          BigNumber.from("1000"),
          now.valueOf(),
          now.valueOf() + 1000 * 60 * 60 * 24 * 7
        )
      ).to.be.revertedWith("The auction hasn't been claimed yet");
    });

    it("should start a new auction if everything is correct", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      await instanceSale
        .connect(addr2)
        .bid({ value: ethers.utils.parseEther("0.11") });

      await ethers.provider.send("evm_setNextBlockTimestamp", [
        now.valueOf() + 1000 * 60 * 60 * 24 * 7 + 1,
      ]);
      await instanceSale.mint(addr2.address, "gvygvy");

      await instanceSale.startNewAuction(
        BigNumber.from("10000"),
        now.valueOf() + 1000 * 60 * 60 * 24 * 7 + 1,
        now.valueOf() + 1000 * 60 * 60 * 24 * 7 * 2 + 1
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
    });
  });
});
