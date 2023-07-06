import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";
import { expect } from "chai";

import {
  StartonERC4907,
  StartonERC4907__factory, // eslint-disable-line camelcase
} from "../typechain-types";

let ERC4907: StartonERC4907__factory; // eslint-disable-line camelcase

describe("StartonERC4907", () => {
  let instanceERC4907: StartonERC4907;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;

  before(async () => {
    // Get the Signers here
    [owner, addr1, addr2] = await ethers.getSigners();

    // Create factory
    ERC4907 = new StartonERC4907__factory(owner);
  });

  beforeEach(async () => {
    instanceERC4907 = (await ERC4907.deploy(
      "StartonToken",
      "ST",
      "1000",
      owner.address,
      "https://ipfs.io/",
      "https://ipfs.io/QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR",
      owner.address
    )) as StartonERC4907;
    await instanceERC4907.deployed();
  });

  describe("Deployment", () => {
    it("Should deploy", async () => {});

    it("Should set the correct owner", async () => {
      expect(await instanceERC4907.owner()).to.equal(owner.address);
    });

    it("Should owner have admin role", async () => {
      const adminRole = await instanceERC4907.DEFAULT_ADMIN_ROLE();

      expect(await instanceERC4907.hasRole(adminRole, owner.address)).to.equal(
        true
      );
    });

    it("Should owner have default roles", async () => {
      const pauserRole = await instanceERC4907.PAUSER_ROLE();
      const minterRole = await instanceERC4907.MINTER_ROLE();
      const metadataRole = await instanceERC4907.METADATA_ROLE();
      const lockerRole = await instanceERC4907.LOCKER_ROLE();

      expect(await instanceERC4907.hasRole(pauserRole, owner.address)).to.equal(
        true
      );
      expect(await instanceERC4907.hasRole(minterRole, owner.address)).to.equal(
        true
      );
      expect(
        await instanceERC4907.hasRole(metadataRole, owner.address)
      ).to.equal(true);
      expect(await instanceERC4907.hasRole(lockerRole, owner.address)).to.equal(
        true
      );
    });

    it("Should set correctly the contractUri", async () => {
      expect(await instanceERC4907.contractURI()).to.equal(
        "https://ipfs.io/QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR"
      );
    });

    it("Should set correctly the name", async () => {
      expect(await instanceERC4907.name()).to.equal("StartonToken");
    });

    it("Should set correctly the symbol", async () => {
      expect(await instanceERC4907.symbol()).to.equal("ST");
    });

    it("Should not be paused", async () => {
      expect(await instanceERC4907.paused()).to.equal(false);
    });
  });

  describe("URI", () => {
    it("Should set correctly the contractUri", async () => {
      await instanceERC4907.setContractURI(
        "https://ipfs.io/QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGPMnR"
      );
      expect(await instanceERC4907.contractURI()).to.equal(
        "https://ipfs.io/QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGPMnR"
      );
    });

    it("Should set correctly the base uri", async () => {
      await instanceERC4907.setBaseTokenURI("ipfs://");
    });
  });

  describe("Minting", () => {
    it("Should mint token correctly", async () => {
      await instanceERC4907.mint(
        addr1.address,
        "QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1"
      );
      expect(
        await instanceERC4907.tokenOfOwnerByIndex(addr1.address, 0)
      ).to.equal(0);
      expect(await instanceERC4907.balanceOf(addr1.address)).to.equal(1);
      expect(await instanceERC4907.ownerOf(0)).to.equal(addr1.address);
      expect(await instanceERC4907.tokenURI(0)).to.equal(
        "https://ipfs.io/QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1"
      );
    });
  });

  describe("Transfer", () => {
    it("Shouldn't transfer without approval", async () => {
      await instanceERC4907.mint(
        addr1.address,
        "QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1"
      );
      await expect(
        instanceERC4907.functions["safeTransferFrom(address,address,uint256)"](
          addr1.address,
          addr2.address,
          0
        )
      ).to.be.revertedWith("ERC721: caller is not token owner or approved");
    });

    it("Should transfer without approval while owner", async () => {
      await instanceERC4907.mint(
        addr1.address,
        "QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1"
      );
      await instanceERC4907
        .connect(addr1)
        .functions["safeTransferFrom(address,address,uint256)"](
          addr1.address,
          addr2.address,
          0
        );
      expect(await instanceERC4907.balanceOf(addr1.address)).to.equal(0);
      expect(await instanceERC4907.balanceOf(addr2.address)).to.equal(1);
    });

    it("Should transfer with approval", async () => {
      await instanceERC4907.mint(
        addr1.address,
        "QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1"
      );
      await instanceERC4907
        .connect(addr1)
        .setApprovalForAll(owner.address, true);
      await instanceERC4907.functions[
        "safeTransferFrom(address,address,uint256)"
      ](addr1.address, addr2.address, 0);
      expect(await instanceERC4907.balanceOf(addr1.address)).to.equal(0);
      expect(await instanceERC4907.balanceOf(addr2.address)).to.equal(1);
    });
  });

  describe("Renting", () => {
    let now: Date;

    beforeEach(async () => {
      await instanceERC4907.mint(
        owner.address,
        "QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1"
      );

      now = new Date();
    });

    it("Shouldn't rent if not approved", async () => {
      const expired = now.valueOf() + 1000;

      await expect(
        instanceERC4907.connect(addr1).setUser(0, addr1.address, expired)
      ).to.be.revertedWith("Caller is not owner nor approved");
    });

    it("Should rent to user", async () => {
      const expired = now.valueOf() + 1000;

      await instanceERC4907.setUser(0, addr1.address, expired);

      expect(await instanceERC4907.userOf(0)).to.equal(addr1.address);
      expect(await instanceERC4907.userExpires(0)).to.equal(expired);
    });

    it("Should delete user if transfer", async () => {
      const expired = now.valueOf() + 1000;

      await instanceERC4907.setUser(0, addr1.address, expired);

      await instanceERC4907.transferFrom(owner.address, addr2.address, 0);

      expect(await instanceERC4907.userOf(0)).to.equal(
        ethers.constants.AddressZero
      );
    });
  });

  describe("Pause", () => {
    it("Should pause correctly", async () => {
      await instanceERC4907.pause();
      expect(await instanceERC4907.paused()).to.equal(true);
    });

    it("Should unpause correctly", async () => {
      await instanceERC4907.pause();
      await instanceERC4907.unpause();

      expect(await instanceERC4907.paused()).to.equal(false);
    });
  });

  describe("Lock", () => {
    it("Should lock the mint and not let anyone mint anymore", async () => {
      await instanceERC4907.lockMint();
      await expect(
        instanceERC4907.mint(
          addr1.address,
          "QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1"
        )
      ).to.be.revertedWith("Minting is locked");
    });

    it("Should lock the metadatas and not let anyone change metadatas anymore", async () => {
      await instanceERC4907.lockMetadata();
      await expect(
        instanceERC4907.setContractURI(
          "https://ipfs.io/QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGPMnR"
        )
      ).to.be.revertedWith("Metadatas are locked");
      await expect(
        instanceERC4907.setBaseTokenURI("https://ipfs.io/")
      ).to.be.revertedWith("Metadatas are locked");
    });
  });

  describe("Roles", () => {
    it("Should assign roles accordingly", async () => {
      const pauserRole = await instanceERC4907.PAUSER_ROLE();
      const minterRole = await instanceERC4907.MINTER_ROLE();
      const metadataRole = await instanceERC4907.METADATA_ROLE();
      const lockerRole = await instanceERC4907.LOCKER_ROLE();

      await instanceERC4907.grantRole(pauserRole, addr1.address);
      expect(await instanceERC4907.hasRole(pauserRole, addr1.address)).to.equal(
        true
      );

      await instanceERC4907.grantRole(minterRole, addr1.address);
      expect(await instanceERC4907.hasRole(minterRole, addr1.address)).to.equal(
        true
      );

      await instanceERC4907.grantRole(metadataRole, addr1.address);
      expect(
        await instanceERC4907.hasRole(metadataRole, addr1.address)
      ).to.equal(true);

      await instanceERC4907.grantRole(lockerRole, addr1.address);
      expect(await instanceERC4907.hasRole(lockerRole, addr1.address)).to.equal(
        true
      );
    });

    it("Should transfer ownership", async () => {
      const adminRole = await instanceERC4907.DEFAULT_ADMIN_ROLE();

      await instanceERC4907.transferOwnership(addr1.address);
      expect(await instanceERC4907.hasRole(adminRole, addr1.address)).to.equal(
        true
      );
      expect(await instanceERC4907.hasRole(adminRole, owner.address)).to.equal(
        false
      );
    });

    it("Should revoke roles accordingly", async () => {
      const pauserRole = await instanceERC4907.PAUSER_ROLE();
      const minterRole = await instanceERC4907.MINTER_ROLE();
      const metadataRole = await instanceERC4907.METADATA_ROLE();
      const lockerRole = await instanceERC4907.LOCKER_ROLE();

      await instanceERC4907.grantRole(pauserRole, addr1.address);
      await instanceERC4907.grantRole(minterRole, addr1.address);
      await instanceERC4907.grantRole(metadataRole, addr1.address);
      await instanceERC4907.grantRole(lockerRole, addr1.address);

      await instanceERC4907.revokeRole(pauserRole, addr1.address);
      expect(await instanceERC4907.hasRole(pauserRole, addr1.address)).to.equal(
        false
      );

      await instanceERC4907.revokeRole(minterRole, addr1.address);
      expect(await instanceERC4907.hasRole(minterRole, addr1.address)).to.equal(
        false
      );

      await instanceERC4907.revokeRole(metadataRole, addr1.address);
      expect(
        await instanceERC4907.hasRole(metadataRole, addr1.address)
      ).to.equal(false);

      await instanceERC4907.revokeRole(lockerRole, addr1.address);
      expect(await instanceERC4907.hasRole(lockerRole, addr1.address)).to.equal(
        false
      );
    });

    it("Shouldn't let anyone without the lock role to be able to lock the contract", async () => {
      await expect(instanceERC4907.connect(addr1).lockMint()).to.be.reverted;
    });

    it("Should let anyone with the lock role to be able to lock the contract", async () => {
      const lockerRole = await instanceERC4907.LOCKER_ROLE();
      await instanceERC4907.grantRole(lockerRole, addr1.address);

      await instanceERC4907.connect(addr1).lockMint();
    });

    it("Shouldn't let anyone without the pauser role to be able to pause or unpause the contract", async () => {
      await expect(instanceERC4907.connect(addr1).pause()).to.be.reverted;
      await expect(instanceERC4907.connect(addr1).unpause()).to.be.reverted;
    });

    it("Should let anyone with the pauser role to be able to pause or unpause the contract", async () => {
      const pauserRole = await instanceERC4907.PAUSER_ROLE();
      await instanceERC4907.grantRole(pauserRole, addr1.address);

      await instanceERC4907.connect(addr1).pause();
      await instanceERC4907.connect(addr1).unpause();
    });

    it("Shouldn't let anyone without the minter role to be able to mint or batch mint", async () => {
      await expect(
        instanceERC4907
          .connect(addr1)
          .mint(addr2.address, "QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1")
      ).to.be.reverted;
    });

    it("Should let anyone with the minter role to be able to mint or batch mint", async () => {
      const minterRole = await instanceERC4907.MINTER_ROLE();
      await instanceERC4907.grantRole(minterRole, addr1.address);

      await instanceERC4907
        .connect(addr1)
        .mint(addr2.address, "QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1");
    });

    it("Shouldn't let anyone without the metadata role to be able to set metadata", async () => {
      await expect(instanceERC4907.connect(addr1).setBaseTokenURI("ipfs://")).to
        .be.reverted;
      await expect(
        instanceERC4907
          .connect(addr1)
          .setContractURI(
            "https://ipfs.io/QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGPMnR"
          )
      ).to.be.reverted;
    });

    it("Should let anyone with the metadata role to be able to set metadata", async () => {
      const metadataRole = await instanceERC4907.METADATA_ROLE();
      await instanceERC4907.grantRole(metadataRole, addr1.address);

      await instanceERC4907.connect(addr1).setBaseTokenURI("ipfs://");
      await instanceERC4907
        .connect(addr1)
        .setContractURI(
          "https://ipfs.io/QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGPMnR"
        );
    });
  });

  describe("SupportsInterface", () => {
    it("Should support ERC721", async () => {
      expect(await instanceERC4907.supportsInterface("0x80ac58cd")).to.equal(
        true
      );
    });

    it("Should support ERC4907", async () => {
      expect(await instanceERC4907.supportsInterface("0xad092b5c")).to.equal(
        true
      );
    });

    it("should support ERC721Enumerable", async () => {
      expect(await instanceERC4907.supportsInterface("0x780e9d63")).to.equal(
        true
      );
    });

    it("Should support AccessControl", async () => {
      expect(await instanceERC4907.supportsInterface("0x7965db0b")).to.equal(
        true
      );
    });
  });

  describe("Forwarder", () => {
    it("Should be able to send a forwarded transaction", async () => {
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

      const name = await instanceERC4907.name();
      const nonce = await instanceERC4907.getNonce(addr1.address);
      const { chainId } = await ethers.provider.getNetwork();

      const domainType = {
        name,
        version: "1",
        verifyingContract: instanceERC4907.address,
        salt: "0x" + chainId.toString(16).padStart(64, "0"),
      };

      const functionSignature = instanceERC4907.interface.encodeFunctionData(
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

      await instanceERC4907.executeMetaTransaction(
        addr1.address,
        functionSignature,
        r,
        s,
        v
      );

      expect(
        await instanceERC4907.isApprovedForAll(addr1.address, addr2.address)
      ).to.equal(true);
    });
  });

  describe("Burn", () => {
    it("Should be able to burn tokens", async () => {
      await instanceERC4907.mint(
        addr1.address,
        "QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1"
      );
      await instanceERC4907.mint(
        addr2.address,
        "QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1"
      );

      await instanceERC4907.connect(addr1).burn(0);

      expect(await instanceERC4907.balanceOf(addr1.address)).to.equal(0);
      expect(await instanceERC4907.balanceOf(addr2.address)).to.equal(1);
    });
  });
});
