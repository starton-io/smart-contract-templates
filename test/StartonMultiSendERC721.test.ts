import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";
import { expect } from "chai";

import {
  StartonMultiSendERC721,
  StartonMultiSendERC721__factory, // eslint-disable-line camelcase
  StartonERC721Base,
  StartonERC721Base__factory, // eslint-disable-line camelcase
} from "../typechain-types";

let Multisend: StartonMultiSendERC721__factory; // eslint-disable-line camelcase
let ERC721: StartonERC721Base__factory; // eslint-disable-line camelcase

describe("StartonMultiSendERC721", () => {
  let instanceMultisend: StartonMultiSendERC721;
  let instanceERC721: StartonERC721Base;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let addrs: SignerWithAddress[];

  before(async () => {
    // Get the Signers here
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    // Create factory
    Multisend = new StartonMultiSendERC721__factory(owner);
    ERC721 = new StartonERC721Base__factory(owner);
  });

  beforeEach(async () => {
    instanceMultisend = (await Multisend.deploy()) as StartonMultiSendERC721;
    await instanceMultisend.deployed();

    instanceERC721 = (await ERC721.deploy(
      "StartonToken",
      "ST",
      "1000",
      owner.address,
      "https://ipfs.io/",
      "https://ipfs.io/QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR",
      owner.address
    )) as StartonERC721Base;
    await instanceERC721.deployed();
  });

  describe("Deployment", () => {
    it("Should deploy", async () => {});
  });

  describe("MultiSend", () => {
    it("Shouldn't send tokens if arrays not equal ", async () => {
      await instanceERC721.mint(
        owner.address,
        "QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1"
      );
      await instanceERC721.mint(
        owner.address,
        "QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1"
      );
      await instanceERC721.mint(
        owner.address,
        "QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1"
      );
      await instanceERC721.setApprovalForAll(instanceMultisend.address, true);

      await expect(
        instanceMultisend.multiSend(
          instanceERC721.address,
          [0, 1, 2],
          [addr1.address, addr2.address]
        )
      ).to.be.revertedWith("Arrays must be of equal length");
    });

    it("Should send tokens to multiple addresses", async () => {
      // mint tokens
      await instanceERC721.mint(
        owner.address,
        "QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1"
      );
      await instanceERC721.mint(
        owner.address,
        "QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1"
      );
      await instanceERC721.mint(
        owner.address,
        "QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1"
      );

      await instanceERC721.setApprovalForAll(instanceMultisend.address, true);
      await instanceMultisend.multiSend(
        instanceERC721.address,
        [0, 1, 2],
        [addr1.address, addr2.address, addrs[3].address]
      );

      expect(await instanceERC721.balanceOf(addr1.address)).to.equal(1);
      expect(await instanceERC721.balanceOf(addr2.address)).to.equal(1);
      expect(await instanceERC721.balanceOf(addrs[3].address)).to.equal(1);
      expect(await instanceERC721.balanceOf(owner.address)).to.equal(0);

      expect(await instanceERC721.ownerOf(0)).to.equal(addr1.address);
      expect(await instanceERC721.ownerOf(1)).to.equal(addr2.address);
      expect(await instanceERC721.ownerOf(2)).to.equal(addrs[3].address);
    });
  });
});
