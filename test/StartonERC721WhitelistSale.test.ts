import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { BigNumber } from "ethers";
import { keccak256 } from "ethers/lib/utils";
import { MerkleTree } from "merkletreejs";

import {
  StartonERC721Base,
  StartonERC721Base__factory, // eslint-disable-line camelcase
  StartonERC721WhitelistSale,
  StartonERC721WhitelistSale__factory, // eslint-disable-line camelcase
} from "../typechain-types";

let ERC721: StartonERC721Base__factory; // eslint-disable-line camelcase
let ERC721Sale: StartonERC721WhitelistSale__factory; // eslint-disable-line camelcase

describe("StartonERC721WhitelistSale", () => {
  let instanceERC721: StartonERC721Base;
  let instanceSale: StartonERC721WhitelistSale;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let addrs: SignerWithAddress[];

  // The current date of the test that will be used to mine blocks
  let now: Date;

  // Merkle tree of the whitelisted addresses
  let merkleTree: MerkleTree;

  before(async () => {
    // Get the Signers here
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    ERC721 = new StartonERC721Base__factory(owner);
    ERC721Sale = new StartonERC721WhitelistSale__factory(owner);
  });

  beforeEach(async () => {
    // Reset the whole waffle for each test
    await ethers.provider.send("hardhat_reset", []);

    instanceERC721 = (await ERC721.deploy(
      "StartonToken",
      "ST",
      "https://ipfs.io/",
      "https://ipfs.io/QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR",
      owner.address
    )) as StartonERC721Base;
    await instanceERC721.deployed();

    // Compute the root of the merkletree
    const addresses = [
      owner.address,
      addr1.address,
      addr2.address,
      addrs[3].address,
    ];
    const leaves = addresses.map((addr) => keccak256(addr));
    merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true });
    const rootHash = merkleTree.getRoot();

    now = new Date();
    instanceSale = (await ERC721Sale.deploy(
      instanceERC721.address,
      rootHash,
      BigNumber.from("1000"),
      now.valueOf(),
      now.valueOf() + 1000 * 60 * 60 * 24 * 7,
      BigNumber.from("3"),
      BigNumber.from("10"),
      owner.address
    )) as StartonERC721WhitelistSale;
    await instanceSale.deployed();

    const minterRole = await instanceERC721.MINTER_ROLE();
    await instanceERC721.grantRole(minterRole, instanceSale.address);
  });

  describe("Deployment", () => {
    it("Should deploy the contract", async () => {});

    it("Should set the token correctly", async () => {
      expect(await instanceSale.token()).to.be.equal(instanceERC721.address);
    });

    it("Should set the price correctly", async () => {
      expect(await instanceSale.price()).to.be.equal(BigNumber.from("1000"));
    });

    it("Should set the startTime correctly", async () => {
      expect(await instanceSale.startTime()).to.be.equal(now.valueOf());
    });

    it("Should set the endTime correctly", async () => {
      expect(await instanceSale.endTime()).to.be.equal(
        now.valueOf() + 1000 * 60 * 60 * 24 * 7
      );
    });

    it("Should set the maxTokensPerAddress correctly", async () => {
      expect(await instanceSale.maxTokensPerAddress()).to.be.equal(
        BigNumber.from("3")
      );
    });

    it("Should set the maxSupply correctly", async () => {
      expect(await instanceSale.leftSupply()).to.be.equal(BigNumber.from("10"));
    });
  });

  describe("Mint", () => {
    it("Shouldn't mint with a time before", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [
        now.valueOf() - 1,
      ]);

      const proof = merkleTree.getHexProof(keccak256(owner.address));

      await expect(
        instanceSale.mint(addr1.address, proof, {
          value: BigNumber.from("1000"),
        })
      ).to.be.revertedWith("Minting not started");
    });

    it("Shouldn't mint with a time after", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [
        now.valueOf() + 1000 * 60 * 60 * 24 * 7 + 1,
      ]);

      const proof = merkleTree.getHexProof(keccak256(owner.address));

      await expect(
        instanceSale.mint(addr1.address, proof, {
          value: BigNumber.from("1000"),
        })
      ).to.be.revertedWith("Minting finished");
    });

    it("Shouldn't mint with lower value than required", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      const proof = merkleTree.getHexProof(keccak256(owner.address));

      await expect(
        instanceSale.mint(addr1.address, proof, {
          value: BigNumber.from("999"),
        })
      ).to.be.revertedWith("Insufficient funds");
    });

    it("Shouldn't mint more than allowed per wallet", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      const proof = merkleTree.getHexProof(keccak256(owner.address));

      await instanceSale.mint(addr1.address, proof, {
        value: BigNumber.from("1000"),
      });
      await instanceSale.mint(addr1.address, proof, {
        value: BigNumber.from("1000"),
      });
      await instanceSale.mint(addr1.address, proof, {
        value: BigNumber.from("1000"),
      });
      await expect(
        instanceSale.mint(addr1.address, proof, {
          value: BigNumber.from("1000"),
        })
      ).to.be.revertedWith("Max tokens reached");
    });

    it("Shouldn't mint more than total supply", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      const proof = merkleTree.getHexProof(keccak256(owner.address));
      const proof2 = merkleTree.getHexProof(keccak256(addr1.address));
      const proof3 = merkleTree.getHexProof(keccak256(addr2.address));
      const proof4 = merkleTree.getHexProof(keccak256(addrs[3].address));

      await instanceSale.mint(addr1.address, proof, {
        value: BigNumber.from("1000"),
      });
      await instanceSale.mint(addr1.address, proof, {
        value: BigNumber.from("1000"),
      });
      await instanceSale.mint(addr1.address, proof, {
        value: BigNumber.from("1000"),
      });
      await instanceSale.connect(addr1).mint(addr1.address, proof2, {
        value: BigNumber.from("1000"),
      });
      await instanceSale.connect(addr1).mint(addr1.address, proof2, {
        value: BigNumber.from("1000"),
      });
      await instanceSale.connect(addr1).mint(addr1.address, proof2, {
        value: BigNumber.from("1000"),
      });
      await instanceSale.connect(addr2).mint(addr1.address, proof3, {
        value: BigNumber.from("1000"),
      });
      await instanceSale.connect(addr2).mint(addr1.address, proof3, {
        value: BigNumber.from("1000"),
      });
      await instanceSale.connect(addr2).mint(addr1.address, proof3, {
        value: BigNumber.from("1000"),
      });
      await instanceSale.connect(addrs[3]).mint(addr1.address, proof4, {
        value: BigNumber.from("1000"),
      });
      await expect(
        instanceSale.connect(addrs[3]).mint(addr1.address, proof4, {
          value: BigNumber.from("1000"),
        })
      ).to.be.revertedWith("Max supply reached");
    });

    it("Shouldn't mint with a wrong proof", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      const proof = merkleTree.getHexProof(keccak256(addrs[4].address));

      await expect(
        instanceSale.connect(addrs[4]).mint(addr1.address, proof, {
          value: BigNumber.from("1000"),
        })
      ).to.be.revertedWith("Invalid proof");
    });

    it("Shouldn't mint with a correct proof but not right sender", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      const proof = merkleTree.getHexProof(keccak256(owner.address));

      await expect(
        instanceSale.connect(addrs[4]).mint(addr1.address, proof, {
          value: BigNumber.from("1000"),
        })
      ).to.be.revertedWith("Invalid proof");
    });

    it("Should mint with a correct time and correct value and correct proof", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      const proof = merkleTree.getHexProof(keccak256(owner.address));

      await instanceSale.mint(addr1.address, proof, {
        value: BigNumber.from("1000"),
      });

      expect(await instanceERC721.balanceOf(addr1.address)).to.be.equal(1);

      await ethers.provider.send("evm_setNextBlockTimestamp", [
        now.valueOf() + 1000 * 60 * 60 * 24 * 7,
      ]);

      await instanceSale.mint(addr1.address, proof, {
        value: BigNumber.from("1000"),
      });

      expect(await instanceERC721.balanceOf(addr1.address)).to.be.equal(2);
      expect(await instanceERC721.tokenURI(0)).to.be.equal("https://ipfs.io/0");
      expect(await instanceERC721.tokenURI(1)).to.be.equal("https://ipfs.io/1");
    });
  });

  describe("MintBatch", () => {
    it("Shouldn't batch mint with a time before", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [
        now.valueOf() - 1,
      ]);

      const proof = merkleTree.getHexProof(keccak256(owner.address));

      await expect(
        instanceSale.mintBatch(addr1.address, 3, proof, {
          value: BigNumber.from("3000"),
        })
      ).to.be.revertedWith("Minting not started");
    });

    it("Shouldn't batch mint with a time after", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [
        now.valueOf() + 1000 * 60 * 60 * 24 * 7 + 1,
      ]);

      const proof = merkleTree.getHexProof(keccak256(owner.address));

      await expect(
        instanceSale.mintBatch(addr1.address, 3, proof, {
          value: BigNumber.from("3000"),
        })
      ).to.be.revertedWith("Minting finished");
    });

    it("Shouldn't batch mint with lower value than required", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      const proof = merkleTree.getHexProof(keccak256(owner.address));

      await expect(
        instanceSale.mintBatch(addr1.address, 3, proof, {
          value: BigNumber.from("2999"),
        })
      ).to.be.revertedWith("Insufficient funds");
    });

    it("Shouldn't batch mint more than allowed per wallet", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      const proof = merkleTree.getHexProof(keccak256(owner.address));

      await expect(
        instanceSale.mintBatch(addr1.address, 4, proof, {
          value: BigNumber.from("4000"),
        })
      ).to.be.revertedWith("Max tokens reached");
    });

    it("Shouldn't batch mint more than total supply", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      const proof = merkleTree.getHexProof(keccak256(owner.address));
      const proof2 = merkleTree.getHexProof(keccak256(addr1.address));
      const proof3 = merkleTree.getHexProof(keccak256(addr2.address));
      const proof4 = merkleTree.getHexProof(keccak256(addrs[3].address));

      await instanceSale.mintBatch(addr1.address, 3, proof, {
        value: BigNumber.from("3000"),
      });
      await instanceSale.connect(addr1).mintBatch(addr1.address, 3, proof2, {
        value: BigNumber.from("3000"),
      });
      await instanceSale.connect(addr2).mintBatch(addr1.address, 3, proof3, {
        value: BigNumber.from("3000"),
      });
      await instanceSale.connect(addrs[3]).mintBatch(addr1.address, 1, proof4, {
        value: BigNumber.from("3000"),
      });
      await expect(
        instanceSale.connect(addrs[3]).mintBatch(addr1.address, 1, proof4, {
          value: BigNumber.from("3000"),
        })
      ).to.be.revertedWith("Max supply reached");
    });

    it("Shouldn't mint with a wrong proof", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      const proof = merkleTree.getHexProof(keccak256(addrs[4].address));

      await expect(
        instanceSale.connect(addrs[4]).mintBatch(addr1.address, 3, proof, {
          value: BigNumber.from("3000"),
        })
      ).to.be.revertedWith("Invalid proof");
    });

    it("Shouldn't mint with a correct proof but not right sender", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      const proof = merkleTree.getHexProof(keccak256(owner.address));

      await expect(
        instanceSale.connect(addrs[4]).mintBatch(addr1.address, 3, proof, {
          value: BigNumber.from("3000"),
        })
      ).to.be.revertedWith("Invalid proof");
    });

    it("Should batch mint with a correct time and correct value", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      const proof = merkleTree.getHexProof(keccak256(owner.address));

      await instanceSale.mintBatch(addr1.address, 3, proof, {
        value: BigNumber.from("3000"),
      });

      expect(await instanceERC721.balanceOf(addr1.address)).to.be.equal(3);
      expect(await instanceERC721.tokenURI(0)).to.be.equal("https://ipfs.io/0");
      expect(await instanceERC721.tokenURI(1)).to.be.equal("https://ipfs.io/1");
      expect(await instanceERC721.tokenURI(2)).to.be.equal("https://ipfs.io/2");
    });
  });

  describe("Withdraw", () => {
    it("Should be able to withdraw the whole balance", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [now.valueOf()]);

      const ownerBalance = await owner.getBalance();

      const proof = merkleTree.getHexProof(keccak256(addr1.address));

      await instanceSale.connect(addr1).mint(addr1.address, proof, {
        value: ethers.utils.parseEther("0.26"),
      });

      await instanceSale.connect(addr1).mint(addr1.address, proof, {
        value: ethers.utils.parseEther("0.4"),
      });

      await instanceSale.connect(addr1).withdraw();
      expect(await owner.getBalance()).to.be.equal(
        ethers.utils.parseUnits("0.66").add(ownerBalance)
      );
    });
  });
});
