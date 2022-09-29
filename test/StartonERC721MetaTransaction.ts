import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";
import { expect } from "chai";

import {
  StartonERC721MetaTransaction,
  StartonERC721MetaTransaction__factory, // eslint-disable-line camelcase
} from "../typechain-types";

let ERC721: StartonERC721MetaTransaction__factory; // eslint-disable-line camelcase

describe("StartonERC721MetaTransaction", function () {
  let instanceERC721: StartonERC721MetaTransaction;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let addrs: SignerWithAddress[];

  before(async () => {
    // Get the Signers here
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    // Create factory
    ERC721 = new StartonERC721MetaTransaction__factory(owner);
  });

  beforeEach(async function () {
    instanceERC721 = (await ERC721.deploy(
      "testContract",
      "TC",
      "rnd1",
      "rnd2",
      owner.address
    )) as StartonERC721MetaTransaction;
    await instanceERC721.deployed();
  });

  describe("Deployment", function () {
    it("Should deploy", async function () {});

    it("Should owner have admin role", async function () {
      const adminRole = await instanceERC721.DEFAULT_ADMIN_ROLE();

      expect(await instanceERC721.hasRole(adminRole, owner.address)).to.equal(
        true
      );
    });

    it("Should owner have default roles", async function () {
      expect(
        await instanceERC721.hasRole(
          ethers.utils.keccak256(ethers.utils.toUtf8Bytes("PAUSER_ROLE")),
          owner.address
        )
      ).to.equal(true);
      expect(
        await instanceERC721.hasRole(
          ethers.utils.keccak256(ethers.utils.toUtf8Bytes("MINTER_ROLE")),
          owner.address
        )
      ).to.equal(true);
      expect(
        await instanceERC721.hasRole(
          ethers.utils.keccak256(ethers.utils.toUtf8Bytes("METADATA_ROLE")),
          owner.address
        )
      ).to.equal(true);
      expect(
        await instanceERC721.hasRole(
          ethers.utils.keccak256(ethers.utils.toUtf8Bytes("LOCKER_ROLE")),
          owner.address
        )
      ).to.equal(true);
    });

    it("Should set correctly the contractUri", async function () {
      expect(await instanceERC721.contractURI()).to.equal("rnd2");
    });

    it("Should set correctly the name", async function () {
      expect(await instanceERC721.name()).to.equal("testContract");
    });

    it("Should set correctly the symbol", async function () {
      expect(await instanceERC721.symbol()).to.equal("TC");
    });

    it("Should not be paused", async function () {
      expect(await instanceERC721.paused()).to.equal(false);
    });
  });

  describe("URI", function () {
    it("Should set correctly the contractUri", async function () {
      await instanceERC721.setContractURI("comeon");
      expect(await instanceERC721.contractURI()).to.equal("comeon");
    });

    it("Should set correctly the uri", async function () {
      await instanceERC721.setBaseTokenURI("comeon");
    });
  });

  describe("Minting", function () {
    it("Should mint token correctly", async function () {
      await instanceERC721.mint(addr1.address, "");
      expect(
        await instanceERC721.tokenOfOwnerByIndex(addr1.address, 0)
      ).to.equal(0);
      expect(await instanceERC721.balanceOf(addr1.address)).to.equal(1);
      expect(await instanceERC721.ownerOf(0)).to.equal(addr1.address);
    });
  });

  describe("Transfer", function () {
    it("Shouldn't transfer without approval", async function () {
      await instanceERC721.mint(addr1.address, "");
      await expect(
        instanceERC721.functions["safeTransferFrom(address,address,uint256)"](
          addr1.address,
          addr2.address,
          0
        )
      ).to.be.revertedWith("ERC721: caller is not token owner nor approved");
    });

    it("Should transfer without approval while owner", async function () {
      await instanceERC721.mint(addr1.address, "");
      await instanceERC721
        .connect(addr1)
        .functions["safeTransferFrom(address,address,uint256)"](
          addr1.address,
          addr2.address,
          0
        );
      expect(await instanceERC721.balanceOf(addr1.address)).to.equal(0);
      expect(await instanceERC721.balanceOf(addr2.address)).to.equal(1);
    });

    it("Should transfer with approval", async function () {
      await instanceERC721.mint(addr1.address, "");
      await instanceERC721
        .connect(addr1)
        .setApprovalForAll(owner.address, true);
      await instanceERC721.functions[
        "safeTransferFrom(address,address,uint256)"
      ](addr1.address, addr2.address, 0);
      expect(await instanceERC721.balanceOf(addr1.address)).to.equal(0);
      expect(await instanceERC721.balanceOf(addr2.address)).to.equal(1);
    });
  });

  describe("BlackList", function () {
    it("Should not set any addresses as blacklisted", async function () {
      expect(await instanceERC721.isBlacklisted(addr1.address)).to.equal(false);
    });

    it("Should blacklist an address", async function () {
      await instanceERC721.addToBlacklist(addr1.address);
      expect(await instanceERC721.isBlacklisted(addr1.address)).to.equal(true);
    });

    it("Should batch blacklist an address", async function () {
      await instanceERC721.addBatchToBlacklist([
        addr1.address,
        addr2.address,
        addrs[3].address,
      ]);
      expect(await instanceERC721.isBlacklisted(addr1.address)).to.equal(true);
      expect(await instanceERC721.isBlacklisted(addr2.address)).to.equal(true);
      expect(await instanceERC721.isBlacklisted(addrs[3].address)).to.equal(
        true
      );
    });

    it("Should be able to remove from blacklist", async function () {
      await instanceERC721.addToBlacklist(addr1.address);
      expect(await instanceERC721.isBlacklisted(addr1.address)).to.equal(true);
      await instanceERC721.removeFromBlacklist(addr1.address);
      expect(await instanceERC721.isBlacklisted(addr1.address)).to.equal(false);
    });

    it("Should be able to batch remove blacklist", async function () {
      await instanceERC721.addBatchToBlacklist([
        addr1.address,
        addr2.address,
        addrs[3].address,
      ]);
      expect(await instanceERC721.isBlacklisted(addr1.address)).to.equal(true);
      expect(await instanceERC721.isBlacklisted(addr2.address)).to.equal(true);
      expect(await instanceERC721.isBlacklisted(addrs[3].address)).to.equal(
        true
      );

      await instanceERC721.removeBatchFromBlacklist([
        addr1.address,
        addr2.address,
      ]);
      expect(await instanceERC721.isBlacklisted(addr1.address)).to.equal(false);
      expect(await instanceERC721.isBlacklisted(addr2.address)).to.equal(false);
      expect(await instanceERC721.isBlacklisted(addrs[3].address)).to.equal(
        true
      );
    });

    it("Shouldn't approve while blacklisted", async function () {
      await instanceERC721.addToBlacklist(addr1.address);
      expect(await instanceERC721.isBlacklisted(addr1.address)).to.equal(true);
      await expect(
        instanceERC721.setApprovalForAll(addr1.address, true)
      ).to.be.revertedWith("The caller of the contract is blacklisted");
    });

    it("Shouldn't transfer while blacklisted", async function () {
      await instanceERC721.mint(addr2.address, "");
      await instanceERC721
        .connect(addr2)
        .setApprovalForAll(addr1.address, true);

      await instanceERC721.addToBlacklist(addr1.address);
      await expect(
        instanceERC721
          .connect(addr1)
          .functions["safeTransferFrom(address,address,uint256)"](
            addr2.address,
            addrs[3].address,
            0
          )
      ).to.be.revertedWith("The caller of the contract is blacklisted");
    });
  });

  describe("Pause", function () {
    it("Should pause correctly", async function () {
      await instanceERC721.pause();
      expect(await instanceERC721.paused()).to.equal(true);
    });

    it("Should unpause correctly", async function () {
      await instanceERC721.pause();
      await instanceERC721.unpause();

      expect(await instanceERC721.paused()).to.equal(false);
    });
  });

  describe("Lock", function () {
    it("Should lock the mint and not let anyone mint anymore", async function () {
      await instanceERC721.lockMint();
      await expect(instanceERC721.mint(addr1.address, "")).to.be.revertedWith(
        "Minting is locked"
      );
    });
  });

  describe("Roles", function () {
    it("Should assign roles accordingly", async function () {
      const pauserRole = await instanceERC721.PAUSER_ROLE();
      const minterRole = await instanceERC721.MINTER_ROLE();
      const metadataRole = await instanceERC721.METADATA_ROLE();
      const lockerRole = await instanceERC721.LOCKER_ROLE();

      await instanceERC721.grantRole(pauserRole, addr1.address);
      expect(await instanceERC721.hasRole(pauserRole, addr1.address)).to.equal(
        true
      );

      await instanceERC721.grantRole(minterRole, addr1.address);
      expect(await instanceERC721.hasRole(minterRole, addr1.address)).to.equal(
        true
      );

      await instanceERC721.grantRole(metadataRole, addr1.address);
      expect(
        await instanceERC721.hasRole(metadataRole, addr1.address)
      ).to.equal(true);

      await instanceERC721.grantRole(lockerRole, addr1.address);
      expect(await instanceERC721.hasRole(lockerRole, addr1.address)).to.equal(
        true
      );
    });

    it("Should revoke roles accordingly", async function () {
      const pauserRole = await instanceERC721.PAUSER_ROLE();
      const minterRole = await instanceERC721.MINTER_ROLE();
      const metadataRole = await instanceERC721.METADATA_ROLE();
      const lockerRole = await instanceERC721.LOCKER_ROLE();

      await instanceERC721.grantRole(pauserRole, addr1.address);
      await instanceERC721.grantRole(minterRole, addr1.address);
      await instanceERC721.grantRole(metadataRole, addr1.address);
      await instanceERC721.grantRole(lockerRole, addr1.address);

      await instanceERC721.revokeRole(pauserRole, addr1.address);
      expect(await instanceERC721.hasRole(pauserRole, addr1.address)).to.equal(
        false
      );

      await instanceERC721.revokeRole(minterRole, addr1.address);
      expect(await instanceERC721.hasRole(minterRole, addr1.address)).to.equal(
        false
      );

      await instanceERC721.revokeRole(metadataRole, addr1.address);
      expect(
        await instanceERC721.hasRole(metadataRole, addr1.address)
      ).to.equal(false);

      await instanceERC721.revokeRole(lockerRole, addr1.address);
      expect(await instanceERC721.hasRole(lockerRole, addr1.address)).to.equal(
        false
      );
    });

    it("Shouldn't let anyone without the lock role to be able to lock the contract", async function () {
      await expect(instanceERC721.connect(addr1).lockMint()).to.be.reverted;
    });

    it("Should let anyone with the lock role to be able to lock the contract", async function () {
      const lockerRole = await instanceERC721.LOCKER_ROLE();
      await instanceERC721.grantRole(lockerRole, addr1.address);

      await instanceERC721.connect(addr1).lockMint();
    });

    it("Shouldn't let anyone without the pauser role to be able to pause or unpause the contract", async function () {
      await expect(instanceERC721.connect(addr1).pause()).to.be.reverted;
      await expect(instanceERC721.connect(addr1).unpause()).to.be.reverted;
    });

    it("Should let anyone with the pauser role to be able to pause or unpause the contract", async function () {
      const pauserRole = await instanceERC721.PAUSER_ROLE();
      await instanceERC721.grantRole(pauserRole, addr1.address);

      await instanceERC721.connect(addr1).pause();
      await instanceERC721.connect(addr1).unpause();
    });

    it("Shouldn't let anyone without the minter role to be able to mint or batch mint", async function () {
      await expect(instanceERC721.connect(addr1).mint(addr2.address, "")).to.be
        .reverted;
    });

    it("Should let anyone with the minter role to be able to mint or batch mint", async function () {
      const minterRole = await instanceERC721.MINTER_ROLE();
      await instanceERC721.grantRole(minterRole, addr1.address);

      await instanceERC721.connect(addr1).mint(addr2.address, "");
    });

    it("Shouldn't let anyone without the metadata role to be able to set metadata", async function () {
      await expect(instanceERC721.connect(addr1).setBaseTokenURI("wow")).to.be
        .reverted;
      await expect(instanceERC721.connect(addr1).setContractURI("wow")).to.be
        .reverted;
    });

    it("Should let anyone with the metadata role to be able to set metadata", async function () {
      const metadataRole = await instanceERC721.METADATA_ROLE();
      await instanceERC721.grantRole(metadataRole, addr1.address);

      await instanceERC721.connect(addr1).setBaseTokenURI("wow");
      await instanceERC721.connect(addr1).setContractURI("wow");
    });

    it("Shouldn't let anyone without the blacklister role to be able to blacklist", async function () {
      await expect(instanceERC721.connect(addr1).addToBlacklist(addr2.address))
        .to.be.reverted;
      await expect(
        instanceERC721.connect(addr1).removeFromBlacklist(addr2.address)
      ).to.be.reverted;
      await expect(
        instanceERC721.connect(addr1).addBatchToBlacklist([addr2.address])
      ).to.be.reverted;
      await expect(
        instanceERC721.connect(addr1).removeBatchFromBlacklist([addr2.address])
      ).to.be.reverted;
    });

    it("Should let anyone with the blacklister role to be able to blacklist", async function () {
      const blacklisterRole = await instanceERC721.BLACKLISTER_ROLE();
      await instanceERC721.grantRole(blacklisterRole, addr1.address);

      await instanceERC721.connect(addr1).addToBlacklist(addr2.address);
      await instanceERC721.connect(addr1).removeFromBlacklist(addr2.address);
      await instanceERC721.connect(addr1).addBatchToBlacklist([addr2.address]);
      await instanceERC721
        .connect(addr1)
        .removeBatchFromBlacklist([addr2.address]);
    });
  });

  describe("Forwarder", function () {
    it("Should be able to send a forwarded transaction", async function () {
      const metaTransactionType = [
        {
          name: "nonce",
          type: "uint256",
        },
        {
          name: "from",
          type: "address",
        },
        {
          name: "functionSignature",
          type: "bytes",
        },
      ];

      const name = await instanceERC721.name();
      const nonce = await instanceERC721.getNonce(addr1.address);
      const { chainId } = await ethers.provider.getNetwork();

      const domainType = {
        name,
        version: "1",
        verifyingContract: instanceERC721.address,
        salt: "0x" + chainId.toString(16).padStart(64, "0"),
      };

      const functionSignature = instanceERC721.interface.encodeFunctionData(
        "setApprovalForAll",
        [addr2.address, true]
      );

      const signature = await addr1._signTypedData(
        domainType,
        {
          MetaTransaction: metaTransactionType,
        },
        {
          nonce: nonce.toString(),
          from: addr1.address,
          functionSignature,
        }
      );

      const { r, s, v } = ethers.utils.splitSignature(signature);

      await instanceERC721.executeMetaTransaction(
        addr1.address,
        functionSignature,
        r,
        s,
        v
      );

      expect(
        await instanceERC721.isApprovedForAll(addr1.address, addr2.address)
      ).to.equal(true);
    });
  });

  describe("Burn", function () {
    it("Should be able to burn tokens", async function () {
      await instanceERC721.mint(addr1.address, "");
      await instanceERC721.mint(addr2.address, "");

      await instanceERC721.connect(addr1).burn(0);

      expect(await instanceERC721.balanceOf(addr1.address)).to.equal(0);
      expect(await instanceERC721.balanceOf(addr2.address)).to.equal(1);
    });
  });
});
