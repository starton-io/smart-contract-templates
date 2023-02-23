import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";
import { expect } from "chai";

import {
  StartonERC721Base,
  StartonERC721Base__factory, // eslint-disable-line camelcase
} from "../typechain-types";

let ERC721: StartonERC721Base__factory; // eslint-disable-line camelcase

describe("StartonERC721Base", () => {
  let instanceERC721: StartonERC721Base;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;

  before(async () => {
    // Get the Signers here
    [owner, addr1, addr2] = await ethers.getSigners();

    // Create factory
    ERC721 = new StartonERC721Base__factory(owner);
  });

  beforeEach(async () => {
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

    it("Should owner have admin role", async () => {
      const adminRole = await instanceERC721.DEFAULT_ADMIN_ROLE();

      expect(await instanceERC721.hasRole(adminRole, owner.address)).to.equal(
        true
      );
    });

    it("Should owner have default roles", async () => {
      const pauserRole = await instanceERC721.PAUSER_ROLE();
      const minterRole = await instanceERC721.MINTER_ROLE();
      const metadataRole = await instanceERC721.METADATA_ROLE();
      const lockerRole = await instanceERC721.LOCKER_ROLE();

      expect(await instanceERC721.hasRole(pauserRole, owner.address)).to.equal(
        true
      );
      expect(await instanceERC721.hasRole(minterRole, owner.address)).to.equal(
        true
      );
      expect(
        await instanceERC721.hasRole(metadataRole, owner.address)
      ).to.equal(true);
      expect(await instanceERC721.hasRole(lockerRole, owner.address)).to.equal(
        true
      );
    });

    it("Should set correctly the contractUri", async () => {
      expect(await instanceERC721.contractURI()).to.equal(
        "https://ipfs.io/QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR"
      );
    });

    it("Should set correctly the name", async () => {
      expect(await instanceERC721.name()).to.equal("StartonToken");
    });

    it("Should set correctly the symbol", async () => {
      expect(await instanceERC721.symbol()).to.equal("ST");
    });

    it("Should not be paused", async () => {
      expect(await instanceERC721.paused()).to.equal(false);
    });
  });

  describe("URI", () => {
    it("Should set correctly the contractUri", async () => {
      await instanceERC721.setContractURI(
        "https://ipfs.io/QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGPMnR"
      );
      expect(await instanceERC721.contractURI()).to.equal(
        "https://ipfs.io/QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGPMnR"
      );
    });

    it("Should set correctly the base uri", async () => {
      await instanceERC721.setBaseTokenURI("ipfs://");
    });
  });

  describe("Minting", () => {
    it("Should mint token correctly", async () => {
      await instanceERC721.mint(
        addr1.address,
        "QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1"
      );
      expect(
        await instanceERC721.tokenOfOwnerByIndex(addr1.address, 0)
      ).to.equal(0);
      expect(await instanceERC721.balanceOf(addr1.address)).to.equal(1);
      expect(await instanceERC721.ownerOf(0)).to.equal(addr1.address);
      expect(await instanceERC721.tokenURI(0)).to.equal(
        "https://ipfs.io/QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1"
      );
    });
  });

  describe("Transfer", () => {
    it("Shouldn't transfer without approval", async () => {
      await instanceERC721.mint(
        addr1.address,
        "QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1"
      );
      await expect(
        instanceERC721.functions["safeTransferFrom(address,address,uint256)"](
          addr1.address,
          addr2.address,
          0
        )
      ).to.be.revertedWith("ERC721: caller is not token owner or approved");
    });

    it("Should transfer without approval while owner", async () => {
      await instanceERC721.mint(
        addr1.address,
        "QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1"
      );
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

    it("Should transfer with approval", async () => {
      await instanceERC721.mint(
        addr1.address,
        "QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1"
      );
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

  describe("Pause", () => {
    it("Should pause correctly", async () => {
      await instanceERC721.pause();
      expect(await instanceERC721.paused()).to.equal(true);
    });

    it("Should unpause correctly", async () => {
      await instanceERC721.pause();
      await instanceERC721.unpause();

      expect(await instanceERC721.paused()).to.equal(false);
    });
  });

  describe("Lock", () => {
    it("Should lock the mint and not let anyone mint anymore", async () => {
      await instanceERC721.lockMint();
      await expect(
        instanceERC721.mint(
          addr1.address,
          "QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1"
        )
      ).to.be.revertedWith("Minting is locked");
    });

    it("Should lock the metadatas and not let anyone change metadatas anymore", async () => {
      await instanceERC721.lockMetadata();
      await expect(
        instanceERC721.setContractURI(
          "https://ipfs.io/QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGPMnR"
        )
      ).to.be.revertedWith("Metadatas are locked");
      await expect(
        instanceERC721.setBaseTokenURI("https://ipfs.io/")
      ).to.be.revertedWith("Metadatas are locked");
    });
  });

  describe("Roles", () => {
    it("Should assign roles accordingly", async () => {
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

    it("Should transfer ownership", async () => {
      const adminRole = await instanceERC721.DEFAULT_ADMIN_ROLE();

      await instanceERC721.transferOwnership(addr1.address);
      expect(await instanceERC721.hasRole(adminRole, addr1.address)).to.equal(
        true
      );
      expect(await instanceERC721.hasRole(adminRole, owner.address)).to.equal(
        false
      );
    });

    it("Should revoke roles accordingly", async () => {
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

    it("Shouldn't let anyone without the lock role to be able to lock the contract", async () => {
      await expect(instanceERC721.connect(addr1).lockMint()).to.be.reverted;
    });

    it("Should let anyone with the lock role to be able to lock the contract", async () => {
      const lockerRole = await instanceERC721.LOCKER_ROLE();
      await instanceERC721.grantRole(lockerRole, addr1.address);

      await instanceERC721.connect(addr1).lockMint();
    });

    it("Shouldn't let anyone without the pauser role to be able to pause or unpause the contract", async () => {
      await expect(instanceERC721.connect(addr1).pause()).to.be.reverted;
      await expect(instanceERC721.connect(addr1).unpause()).to.be.reverted;
    });

    it("Should let anyone with the pauser role to be able to pause or unpause the contract", async () => {
      const pauserRole = await instanceERC721.PAUSER_ROLE();
      await instanceERC721.grantRole(pauserRole, addr1.address);

      await instanceERC721.connect(addr1).pause();
      await instanceERC721.connect(addr1).unpause();
    });

    it("Shouldn't let anyone without the minter role to be able to mint or batch mint", async () => {
      await expect(
        instanceERC721
          .connect(addr1)
          .mint(addr2.address, "QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1")
      ).to.be.reverted;
    });

    it("Should let anyone with the minter role to be able to mint or batch mint", async () => {
      const minterRole = await instanceERC721.MINTER_ROLE();
      await instanceERC721.grantRole(minterRole, addr1.address);

      await instanceERC721
        .connect(addr1)
        .mint(addr2.address, "QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1");
    });

    it("Shouldn't let anyone without the metadata role to be able to set metadata", async () => {
      await expect(instanceERC721.connect(addr1).setBaseTokenURI("ipfs://")).to
        .be.reverted;
      await expect(
        instanceERC721
          .connect(addr1)
          .setContractURI(
            "https://ipfs.io/QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGPMnR"
          )
      ).to.be.reverted;
    });

    it("Should let anyone with the metadata role to be able to set metadata", async () => {
      const metadataRole = await instanceERC721.METADATA_ROLE();
      await instanceERC721.grantRole(metadataRole, addr1.address);

      await instanceERC721.connect(addr1).setBaseTokenURI("ipfs://");
      await instanceERC721
        .connect(addr1)
        .setContractURI(
          "https://ipfs.io/QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGPMnR"
        );
    });
  });

  describe("SupportsInterface", () => {
    it("Should support ERC721", async () => {
      expect(await instanceERC721.supportsInterface("0x80ac58cd")).to.equal(
        true
      );
    });

    it("Should support ERC2981", async () => {
      expect(await instanceERC721.supportsInterface("0x2a55205a")).to.equal(
        true
      );
    });

    it("should support ERC721Enumerable", async () => {
      expect(await instanceERC721.supportsInterface("0x780e9d63")).to.equal(
        true
      );
    });

    it("Should support AccessControl", async () => {
      expect(await instanceERC721.supportsInterface("0x7965db0b")).to.equal(
        true
      );
    });
  });

  describe("Royalties", () => {
    it("Should return the correct royalty amount", async () => {
      expect(await instanceERC721.royaltyInfo(1, 100)).to.deep.equal([
        owner.address,
        "10",
      ]);
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

  describe("Burn", () => {
    it("Should be able to burn tokens", async () => {
      await instanceERC721.mint(
        addr1.address,
        "QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1"
      );
      await instanceERC721.mint(
        addr2.address,
        "QmQT4UPwNY6614CFCA5MWKCnHExC4UME7m8hi6nYBm17u1"
      );

      await instanceERC721.connect(addr1).burn(0);

      expect(await instanceERC721.balanceOf(addr1.address)).to.equal(0);
      expect(await instanceERC721.balanceOf(addr2.address)).to.equal(1);
    });
  });
});
