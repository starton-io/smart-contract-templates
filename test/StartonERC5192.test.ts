import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";
import { expect } from "chai";

import {
  StartonERC5192,
  StartonERC5192__factory, // eslint-disable-line camelcase
} from "../typechain-types";

let ERC5192: StartonERC5192__factory; // eslint-disable-line camelcase

describe("StartonERC5192", () => {
  let instanceERC5192: StartonERC5192;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;

  before(async () => {
    // Get the Signers here
    [owner, addr1, addr2] = await ethers.getSigners();

    // Create factory
    ERC5192 = new StartonERC5192__factory(owner);
  });

  beforeEach(async () => {
    instanceERC5192 = (await ERC5192.deploy(
      "StartonToken",
      "ST",
      "1000",
      owner.address,
      "https://ipfs.io/",
      "https://ipfs.io/QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR",
      owner.address
    )) as StartonERC5192;
    await instanceERC5192.deployed();
  });

  describe("Deployment", () => {
    it("Should deploy", async () => {});

    it("Should set the correct owner", async () => {
      expect(await instanceERC5192.owner()).to.equal(owner.address);
    });
  });

  describe("Minting", () => {
    it("Should lock when minting", async () => {
      await expect(
        instanceERC5192.mint(
          addr1.address,
          "QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1"
        )
      ).to.emit(instanceERC5192, "Locked");
      expect(await instanceERC5192.locked(0)).to.equal(true);
    });
  });

  describe("Locked", () => {
    it("Should revert if token doesn't exist", async () => {
      await expect(instanceERC5192.locked(0)).to.be.revertedWith(
        "Token not found"
      );
    });
  });

  describe("SupportsInterface", () => {
    it("Should support ERC721", async () => {
      expect(await instanceERC5192.supportsInterface("0x80ac58cd")).to.equal(
        true
      );
    });

    it("should support ERC5192Enumerable", async () => {
      expect(await instanceERC5192.supportsInterface("0x780e9d63")).to.equal(
        true
      );
    });

    it("Should support AccessControl", async () => {
      expect(await instanceERC5192.supportsInterface("0x7965db0b")).to.equal(
        true
      );
    });

    it("Should support ERC5192", async () => {
      expect(await instanceERC5192.supportsInterface("0xb45a3c0e")).to.equal(
        true
      );
    });
  });

  describe("Transfer", () => {
    it("Shouldn't safeTransferFrom", async () => {
      await expect(
        instanceERC5192["safeTransferFrom(address,address,uint256)"](
          addr1.address,
          addr2.address,
          0
        )
      ).to.be.revertedWith("Token locked");
    });

    it("Shouldn't safeTransferFrom with data", async () => {
      await expect(
        instanceERC5192["safeTransferFrom(address,address,uint256,bytes)"](
          addr1.address,
          addr2.address,
          0,
          ethers.constants.AddressZero
        )
      ).to.be.revertedWith("Token locked");
    });

    it("Shouldn't transferFrom", async () => {
      await expect(
        instanceERC5192.transferFrom(addr1.address, addr2.address, 0)
      ).to.be.revertedWith("Token locked");
    });

    it("Shouldn't approve", async () => {
      await expect(
        instanceERC5192.approve(addr2.address, 0)
      ).to.be.revertedWith("Token locked");
    });

    it("Shouldn't setApprovalForAll", async () => {
      await expect(
        instanceERC5192.setApprovalForAll(addr2.address, true)
      ).to.be.revertedWith("Token locked");
    });
  });
});
