import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";
import { expect } from "chai";

import {
  StartonMultiSendERC1155,
  StartonMultiSendERC1155__factory, // eslint-disable-line camelcase
  StartonERC1155Base,
  StartonERC1155Base__factory, // eslint-disable-line camelcase
} from "../typechain-types";

let Multisend: StartonMultiSendERC1155__factory; // eslint-disable-line camelcase
let ERC1155: StartonERC1155Base__factory; // eslint-disable-line camelcase

describe("StartonMultiSendERC1155", () => {
  let instanceMultisend: StartonMultiSendERC1155;
  let instanceERC1155: StartonERC1155Base;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let addrs: SignerWithAddress[];

  before(async () => {
    // Get the Signers here
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    // Create factory
    Multisend = new StartonMultiSendERC1155__factory(owner);
    ERC1155 = new StartonERC1155Base__factory(owner);
  });

  beforeEach(async () => {
    instanceMultisend = (await Multisend.deploy()) as StartonMultiSendERC1155;
    await instanceMultisend.deployed();

    instanceERC1155 = (await ERC1155.deploy(
      "StartonToken",
      "1000",
      owner.address,
      "https://ipfs.io/QmbWqibQSuvvsGVDUVvDCGdgcdCDCfycDFC3VV4v4Ghgc4/{id}",
      "https://ipfs.io/QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR",
      owner.address
    )) as StartonERC1155Base;
    await instanceERC1155.deployed();
  });

  describe("Deployment", () => {
    it("Should deploy", async () => {});
  });

  describe("MultiSend", () => {
    it("Shouldn't send tokens if arrays not equal ", async () => {
      // mint tokens
      await instanceERC1155["mint(address,uint256,uint256)"](
        owner.address,
        1536,
        11
      );
      await instanceERC1155["mint(address,uint256,uint256)"](
        owner.address,
        156,
        20
      );

      await instanceERC1155.setApprovalForAll(instanceMultisend.address, true);
      await expect(
        instanceMultisend.multiSend(
          instanceERC1155.address,
          [1536, 1536, 156],
          [4, 7, 20],
          [addr1.address, addr2.address]
        )
      ).to.be.revertedWith("Arrays must be of equal length");
    });

    it("Should send tokens to multiple addresses", async () => {
      // mint tokens
      await instanceERC1155["mint(address,uint256,uint256)"](
        owner.address,
        1536,
        11
      );
      await instanceERC1155["mint(address,uint256,uint256)"](
        owner.address,
        156,
        20
      );

      await instanceERC1155.setApprovalForAll(instanceMultisend.address, true);
      await instanceMultisend.multiSend(
        instanceERC1155.address,
        [1536, 1536, 156],
        [4, 7, 20],
        [addr1.address, addr2.address, addrs[3].address]
      );

      expect(await instanceERC1155.balanceOf(addr1.address, 1536)).to.equal(4);
      expect(await instanceERC1155.balanceOf(addr2.address, 1536)).to.equal(7);
      expect(await instanceERC1155.balanceOf(addrs[3].address, 156)).to.equal(
        20
      );
      expect(await instanceERC1155.balanceOf(owner.address, 1536)).to.equal(0);
      expect(await instanceERC1155.balanceOf(owner.address, 156)).to.equal(0);
    });
  });
});
