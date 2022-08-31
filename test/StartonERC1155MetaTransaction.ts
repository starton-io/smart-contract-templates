import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";
import { expect } from "chai";

import {
  StartonERC1155MetaTransaction,
  StartonERC1155MetaTransaction__factory, // eslint-disable-line camelcase
} from "../typechain-types";

let ERC1155: StartonERC1155MetaTransaction__factory; // eslint-disable-line camelcase

describe("StartonERC1155MetaTransaction", function () {
  let instanceERC1155: StartonERC1155MetaTransaction;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let addrs: SignerWithAddress[];

  before(async () => {
    // Get the Signers here
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    // Create factory
    ERC1155 = new StartonERC1155MetaTransaction__factory(owner);
  });

  beforeEach(async function () {
    instanceERC1155 = (await ERC1155.deploy(
      "testContract",
      "rnd",
      "rnd2",
      owner.address
    )) as StartonERC1155MetaTransaction;
    await instanceERC1155.deployed();
  });

  describe("Deployment", function () {
    it("Should deploy", async function () {});

    it("Should owner have admin role", async function () {
      const adminRole = await instanceERC1155.DEFAULT_ADMIN_ROLE();

      expect(await instanceERC1155.hasRole(adminRole, owner.address)).to.equal(
        true
      );
    });

    it("Should owner have default roles", async function () {
      expect(
        await instanceERC1155.hasRole(
          ethers.utils.keccak256(ethers.utils.toUtf8Bytes("PAUSER_ROLE")),
          owner.address
        )
      ).to.equal(true);
      expect(
        await instanceERC1155.hasRole(
          ethers.utils.keccak256(ethers.utils.toUtf8Bytes("MINTER_ROLE")),
          owner.address
        )
      ).to.equal(true);
      expect(
        await instanceERC1155.hasRole(
          ethers.utils.keccak256(ethers.utils.toUtf8Bytes("METADATA_ROLE")),
          owner.address
        )
      ).to.equal(true);
      expect(
        await instanceERC1155.hasRole(
          ethers.utils.keccak256(ethers.utils.toUtf8Bytes("LOCKER_ROLE")),
          owner.address
        )
      ).to.equal(true);
    });

    it("Should set correctly the contractUri", async function () {
      expect(await instanceERC1155.contractURI()).to.equal("rnd2");
    });

    it("Should set correctly the uri", async function () {
      expect(await instanceERC1155.uri(0)).to.equal("rnd");
    });

    it("Should not be paused", async function () {
      expect(await instanceERC1155.paused()).to.equal(false);
    });
  });

  describe("URI", function () {
    it("Should set correctly the contractUri", async function () {
      await instanceERC1155.setContractURI("comeon");
      expect(await instanceERC1155.contractURI()).to.equal("comeon");
    });

    it("Should set correctly the uri", async function () {
      await instanceERC1155.setURI("comeon");
      expect(await instanceERC1155.uri(0)).to.equal("comeon");
    });
  });

  describe("Minting", function () {
    it("Should mint unique token correctly", async function () {
      await instanceERC1155["mint(address,uint256,uint256)"](
        addr1.address,
        1536,
        1
      );
      expect(await instanceERC1155.balanceOf(addr1.address, 1536)).to.equal(1);
    });

    it("Should mint multiples token correctly", async function () {
      await instanceERC1155["mint(address,uint256,uint256)"](
        addr1.address,
        1536,
        11
      );
      expect(await instanceERC1155.balanceOf(addr1.address, 1536)).to.equal(11);
    });

    it("Batch minting should go accordingly", async function () {
      await instanceERC1155["mintBatch(address,uint256[],uint256[])"](
        addr1.address,
        [1536, 100, 10, 164658, 184],
        [2747, 29, 957, 284, 2945]
      );
      expect(await instanceERC1155.balanceOf(addr1.address, 1536)).to.equal(
        2747
      );
      expect(await instanceERC1155.balanceOf(addr1.address, 100)).to.equal(29);
      expect(await instanceERC1155.balanceOf(addr1.address, 10)).to.equal(957);
      expect(await instanceERC1155.balanceOf(addr1.address, 164658)).to.equal(
        284
      );
      expect(await instanceERC1155.balanceOf(addr1.address, 184)).to.equal(
        2945
      );
    });
  });

  describe("Transfer", function () {
    it("Shouldn't transfer without approval", async function () {
      await instanceERC1155["mint(address,uint256,uint256)"](
        addr1.address,
        1536,
        11
      );
      await expect(
        instanceERC1155.safeTransferFrom(
          addr1.address,
          addr2.address,
          1536,
          5,
          ethers.utils.formatBytes32String("")
        )
      ).to.be.revertedWith("ERC1155: caller is not token owner nor approved");
    });

    it("Shouldn't transfer more than owned", async function () {
      await instanceERC1155["mint(address,uint256,uint256)"](
        addr1.address,
        1536,
        11
      );
      await expect(
        instanceERC1155
          .connect(addr1)
          .safeTransferFrom(
            addr1.address,
            addr2.address,
            1536,
            12,
            ethers.utils.formatBytes32String("")
          )
      ).to.be.revertedWith("ERC1155: insufficient balance for transfer");
    });

    it("Should transfer without approval while owner", async function () {
      await instanceERC1155["mint(address,uint256,uint256)"](
        addr1.address,
        1536,
        11
      );
      await instanceERC1155
        .connect(addr1)
        .safeTransferFrom(
          addr1.address,
          addr2.address,
          1536,
          5,
          ethers.utils.formatBytes32String("")
        );
      expect(await instanceERC1155.balanceOf(addr1.address, 1536)).to.equal(6);
      expect(await instanceERC1155.balanceOf(addr2.address, 1536)).to.equal(5);
    });

    it("Should transfer with approval", async function () {
      await instanceERC1155["mint(address,uint256,uint256)"](
        addr1.address,
        1536,
        11
      );
      await instanceERC1155
        .connect(addr1)
        .setApprovalForAll(owner.address, true);
      await instanceERC1155.safeTransferFrom(
        addr1.address,
        addr2.address,
        1536,
        5,
        ethers.utils.formatBytes32String("")
      );
      expect(await instanceERC1155.balanceOf(addr1.address, 1536)).to.equal(6);
      expect(await instanceERC1155.balanceOf(addr2.address, 1536)).to.equal(5);
    });

    it("Should batch transfer without approval while owner", async function () {
      await instanceERC1155["mintBatch(address,uint256[],uint256[])"](
        addr1.address,
        [1536, 100, 10, 164658, 184],
        [2747, 29, 957, 284, 2945]
      );
      await instanceERC1155
        .connect(addr1)
        .safeBatchTransferFrom(
          addr1.address,
          addr2.address,
          [1536, 100, 10, 164658, 184],
          [5, 10, 300, 200, 2000],
          ethers.utils.formatBytes32String("")
        );

      expect(await instanceERC1155.balanceOf(addr1.address, 1536)).to.equal(
        2747 - 5
      );
      expect(await instanceERC1155.balanceOf(addr1.address, 100)).to.equal(
        29 - 10
      );
      expect(await instanceERC1155.balanceOf(addr1.address, 10)).to.equal(
        957 - 300
      );
      expect(await instanceERC1155.balanceOf(addr1.address, 164658)).to.equal(
        284 - 200
      );
      expect(await instanceERC1155.balanceOf(addr1.address, 184)).to.equal(
        2945 - 2000
      );

      expect(await instanceERC1155.balanceOf(addr2.address, 1536)).to.equal(5);
      expect(await instanceERC1155.balanceOf(addr2.address, 100)).to.equal(10);
      expect(await instanceERC1155.balanceOf(addr2.address, 10)).to.equal(300);
      expect(await instanceERC1155.balanceOf(addr2.address, 164658)).to.equal(
        200
      );
      expect(await instanceERC1155.balanceOf(addr2.address, 184)).to.equal(
        2000
      );
    });

    it("Should batch transfer with approval", async function () {
      await instanceERC1155["mintBatch(address,uint256[],uint256[])"](
        addr1.address,
        [1536, 100, 10, 164658, 184],
        [2747, 29, 957, 284, 2945]
      );
      await instanceERC1155
        .connect(addr1)
        .setApprovalForAll(owner.address, true);
      await instanceERC1155.safeBatchTransferFrom(
        addr1.address,
        addr2.address,
        [1536, 100, 10, 164658, 184],
        [5, 10, 300, 200, 2000],
        ethers.utils.formatBytes32String("")
      );

      expect(await instanceERC1155.balanceOf(addr1.address, 1536)).to.equal(
        2747 - 5
      );
      expect(await instanceERC1155.balanceOf(addr1.address, 100)).to.equal(
        29 - 10
      );
      expect(await instanceERC1155.balanceOf(addr1.address, 10)).to.equal(
        957 - 300
      );
      expect(await instanceERC1155.balanceOf(addr1.address, 164658)).to.equal(
        284 - 200
      );
      expect(await instanceERC1155.balanceOf(addr1.address, 184)).to.equal(
        2945 - 2000
      );

      expect(await instanceERC1155.balanceOf(addr2.address, 1536)).to.equal(5);
      expect(await instanceERC1155.balanceOf(addr2.address, 100)).to.equal(10);
      expect(await instanceERC1155.balanceOf(addr2.address, 10)).to.equal(300);
      expect(await instanceERC1155.balanceOf(addr2.address, 164658)).to.equal(
        200
      );
      expect(await instanceERC1155.balanceOf(addr2.address, 184)).to.equal(
        2000
      );
    });
  });

  describe("BlackList", function () {
    it("Should not set any addresses as blacklisted", async function () {
      expect(await instanceERC1155.isBlacklisted(addr1.address)).to.equal(
        false
      );
    });

    it("Should blacklist an address", async function () {
      await instanceERC1155.addToBlacklist(addr1.address);
      expect(await instanceERC1155.isBlacklisted(addr1.address)).to.equal(true);
    });

    it("Should batch blacklist an address", async function () {
      await instanceERC1155.addBatchToBlacklist([
        addr1.address,
        addr2.address,
        addrs[3].address,
      ]);
      expect(await instanceERC1155.isBlacklisted(addr1.address)).to.equal(true);
      expect(await instanceERC1155.isBlacklisted(addr2.address)).to.equal(true);
      expect(await instanceERC1155.isBlacklisted(addrs[3].address)).to.equal(
        true
      );
    });

    it("Should be able to remove from blacklist", async function () {
      await instanceERC1155.addToBlacklist(addr1.address);
      expect(await instanceERC1155.isBlacklisted(addr1.address)).to.equal(true);
      await instanceERC1155.removeFromBlacklist(addr1.address);
      expect(await instanceERC1155.isBlacklisted(addr1.address)).to.equal(
        false
      );
    });

    it("Should be able to batch remove blacklist", async function () {
      await instanceERC1155.addBatchToBlacklist([
        addr1.address,
        addr2.address,
        addrs[3].address,
      ]);
      expect(await instanceERC1155.isBlacklisted(addr1.address)).to.equal(true);
      expect(await instanceERC1155.isBlacklisted(addr2.address)).to.equal(true);
      expect(await instanceERC1155.isBlacklisted(addrs[3].address)).to.equal(
        true
      );

      await instanceERC1155.removeBatchFromBlacklist([
        addr1.address,
        addr2.address,
      ]);
      expect(await instanceERC1155.isBlacklisted(addr1.address)).to.equal(
        false
      );
      expect(await instanceERC1155.isBlacklisted(addr2.address)).to.equal(
        false
      );
      expect(await instanceERC1155.isBlacklisted(addrs[3].address)).to.equal(
        true
      );
    });

    it("Shouldn't approve while blacklisted", async function () {
      await instanceERC1155.addToBlacklist(addr1.address);
      expect(await instanceERC1155.isBlacklisted(addr1.address)).to.equal(true);
      await expect(
        instanceERC1155.setApprovalForAll(addr1.address, true)
      ).to.be.revertedWith("The caller of the contract is blacklisted");
    });

    it("Shouldn't transfer while blacklisted", async function () {
      await instanceERC1155["mint(address,uint256,uint256)"](
        addr2.address,
        1536,
        11
      );
      await instanceERC1155
        .connect(addr2)
        .setApprovalForAll(addr1.address, true);

      await instanceERC1155.addToBlacklist(addr1.address);
      await expect(
        instanceERC1155
          .connect(addr1)
          .safeTransferFrom(
            addr2.address,
            addrs[3].address,
            1536,
            5,
            ethers.utils.formatBytes32String("")
          )
      ).to.be.revertedWith("The caller of the contract is blacklisted");
    });
  });

  describe("Pause", function () {
    it("Should pause correctly", async function () {
      await instanceERC1155.pause();
      expect(await instanceERC1155.paused()).to.equal(true);
    });

    it("Should unpause correctly", async function () {
      await instanceERC1155.pause();
      await instanceERC1155.unpause();

      expect(await instanceERC1155.paused()).to.equal(false);
    });
  });

  describe("Lock", function () {
    it("Should lock the mint and not let anyone mint anymore", async function () {
      await instanceERC1155.lockMint();
      await expect(
        instanceERC1155["mint(address,uint256,uint256)"](addr1.address, 254, 10)
      ).to.be.revertedWith("Minting is locked");
    });

    it("Should lock the mint and not let anyone batch mint anymore", async function () {
      await instanceERC1155.lockMint();
      await expect(
        instanceERC1155["mintBatch(address,uint256[],uint256[])"](
          addr1.address,
          [1536, 100, 10, 164658, 184],
          [2747, 29, 957, 284, 2945]
        )
      ).to.be.revertedWith("Minting is locked");
    });
  });

  describe("Roles", function () {
    it("Should assign roles accordingly", async function () {
      const pauserRole = await instanceERC1155.PAUSER_ROLE();
      const minterRole = await instanceERC1155.MINTER_ROLE();
      const metadataRole = await instanceERC1155.METADATA_ROLE();
      const lockerRole = await instanceERC1155.LOCKER_ROLE();

      await instanceERC1155.grantRole(pauserRole, addr1.address);
      expect(await instanceERC1155.hasRole(pauserRole, addr1.address)).to.equal(
        true
      );

      await instanceERC1155.grantRole(minterRole, addr1.address);
      expect(await instanceERC1155.hasRole(minterRole, addr1.address)).to.equal(
        true
      );

      await instanceERC1155.grantRole(metadataRole, addr1.address);
      expect(
        await instanceERC1155.hasRole(metadataRole, addr1.address)
      ).to.equal(true);

      await instanceERC1155.grantRole(lockerRole, addr1.address);
      expect(await instanceERC1155.hasRole(lockerRole, addr1.address)).to.equal(
        true
      );
    });

    it("Should revoke roles accordingly", async function () {
      const pauserRole = await instanceERC1155.PAUSER_ROLE();
      const minterRole = await instanceERC1155.MINTER_ROLE();
      const metadataRole = await instanceERC1155.METADATA_ROLE();
      const lockerRole = await instanceERC1155.LOCKER_ROLE();

      await instanceERC1155.grantRole(pauserRole, addr1.address);
      await instanceERC1155.grantRole(minterRole, addr1.address);
      await instanceERC1155.grantRole(metadataRole, addr1.address);
      await instanceERC1155.grantRole(lockerRole, addr1.address);

      await instanceERC1155.revokeRole(pauserRole, addr1.address);
      expect(await instanceERC1155.hasRole(pauserRole, addr1.address)).to.equal(
        false
      );

      await instanceERC1155.revokeRole(minterRole, addr1.address);
      expect(await instanceERC1155.hasRole(minterRole, addr1.address)).to.equal(
        false
      );

      await instanceERC1155.revokeRole(metadataRole, addr1.address);
      expect(
        await instanceERC1155.hasRole(metadataRole, addr1.address)
      ).to.equal(false);

      await instanceERC1155.revokeRole(lockerRole, addr1.address);
      expect(await instanceERC1155.hasRole(lockerRole, addr1.address)).to.equal(
        false
      );
    });

    it("Shouldn't let anyone without the lock role to be able to lock the contract", async function () {
      await expect(instanceERC1155.connect(addr1).lockMint()).to.be.reverted;
    });

    it("Should let anyone with the lock role to be able to lock the contract", async function () {
      const lockerRole = await instanceERC1155.LOCKER_ROLE();
      await instanceERC1155.grantRole(lockerRole, addr1.address);

      await instanceERC1155.connect(addr1).lockMint();
    });

    it("Shouldn't let anyone without the pauser role to be able to pause or unpause the contract", async function () {
      await expect(instanceERC1155.connect(addr1).pause()).to.be.reverted;
      await expect(instanceERC1155.connect(addr1).unpause()).to.be.reverted;
    });

    it("Should let anyone with the pauser role to be able to pause or unpause the contract", async function () {
      const pauserRole = await instanceERC1155.PAUSER_ROLE();
      await instanceERC1155.grantRole(pauserRole, addr1.address);

      await instanceERC1155.connect(addr1).pause();
      await instanceERC1155.connect(addr1).unpause();
    });

    it("Shouldn't let anyone without the minter role to be able to mint or batch mint", async function () {
      await expect(
        instanceERC1155
          .connect(addr1)
          ["mint(address,uint256,uint256)"](addr2.address, 1536, 11)
      ).to.be.reverted;
      await expect(
        instanceERC1155
          .connect(addr1)
          ["mintBatch(address,uint256[],uint256[])"](
            addr2.address,
            [1536, 100, 10, 164658, 184],
            [2747, 29, 957, 284, 2945]
          )
      ).to.be.reverted;
    });

    it("Should let anyone with the minter role to be able to mint or batch mint", async function () {
      const minterRole = await instanceERC1155.MINTER_ROLE();
      await instanceERC1155.grantRole(minterRole, addr1.address);

      await instanceERC1155
        .connect(addr1)
        ["mint(address,uint256,uint256)"](addr2.address, 1536, 11);
      await instanceERC1155
        .connect(addr1)
        ["mintBatch(address,uint256[],uint256[])"](
          addr2.address,
          [1536, 100, 10, 164658, 184],
          [2747, 29, 957, 284, 2945]
        );
    });

    it("Shouldn't let anyone without the metadata role to be able to set metadata", async function () {
      await expect(instanceERC1155.connect(addr1).setURI("wow")).to.be.reverted;
      await expect(instanceERC1155.connect(addr1).setContractURI("wow")).to.be
        .reverted;
    });

    it("Should let anyone with the metadata role to be able to set metadata", async function () {
      const metadataRole = await instanceERC1155.METADATA_ROLE();
      await instanceERC1155.grantRole(metadataRole, addr1.address);

      await instanceERC1155.connect(addr1).setURI("wow");
      await instanceERC1155.connect(addr1).setContractURI("wow");
    });

    it("Shouldn't let anyone without the blacklister role to be able to blacklist", async function () {
      await expect(instanceERC1155.connect(addr1).addToBlacklist(addr2.address))
        .to.be.reverted;
      await expect(
        instanceERC1155.connect(addr1).removeFromBlacklist(addr2.address)
      ).to.be.reverted;
      await expect(
        instanceERC1155.connect(addr1).addBatchToBlacklist([addr2.address])
      ).to.be.reverted;
      await expect(
        instanceERC1155.connect(addr1).removeBatchFromBlacklist([addr2.address])
      ).to.be.reverted;
    });

    it("Should let anyone with the blacklister role to be able to blacklist", async function () {
      const blacklisterRole = await instanceERC1155.BLACKLISTER_ROLE();
      await instanceERC1155.grantRole(blacklisterRole, addr1.address);

      await instanceERC1155.connect(addr1).addToBlacklist(addr2.address);
      await instanceERC1155.connect(addr1).removeFromBlacklist(addr2.address);
      await instanceERC1155.connect(addr1).addBatchToBlacklist([addr2.address]);
      await instanceERC1155
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

      const name = await instanceERC1155.name();
      const nonce = await instanceERC1155.getNonce(addr1.address);
      const { chainId } = await ethers.provider.getNetwork();

      const domainType = {
        name,
        version: "1",
        verifyingContract: instanceERC1155.address,
        salt: "0x" + chainId.toString(16).padStart(64, "0"),
      };

      const functionSignature = instanceERC1155.interface.encodeFunctionData(
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

      await instanceERC1155.executeMetaTransaction(
        addr1.address,
        functionSignature,
        r,
        s,
        v
      );

      expect(
        await instanceERC1155.isApprovedForAll(addr1.address, addr2.address)
      ).to.equal(true);
    });
  });
});
