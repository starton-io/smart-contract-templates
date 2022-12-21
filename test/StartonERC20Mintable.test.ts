import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { BigNumber } from "ethers";

import {
  StartonERC20Mintable,
  StartonERC20Mintable__factory, // eslint-disable-line camelcase
} from "../typechain-types";

let ERC20: StartonERC20Mintable__factory; // eslint-disable-line camelcase

describe("StartonERC20Mintable", () => {
  let instanceERC20: StartonERC20Mintable;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;

  before(async () => {
    // Get the Signers here
    [owner, addr1, addr2] = await ethers.getSigners();

    // Create factory
    ERC20 = new StartonERC20Mintable__factory(owner);
  });

  beforeEach(async () => {
    instanceERC20 = (await ERC20.deploy(
      "StartonToken",
      "ST",
      BigNumber.from("1000000000000000000000000000"),
      owner.address
    )) as StartonERC20Mintable;
    await instanceERC20.deployed();
  });

  describe("Deployment", () => {
    it("Should deploy", async () => {});

    it("Should set admin role to owner", async () => {
      const adminRole = await instanceERC20.DEFAULT_ADMIN_ROLE();

      expect(await instanceERC20.hasRole(adminRole, owner.address)).to.equal(
        true
      );
    });

    it("Should set default roles to owner", async () => {
      const pauserRole = await instanceERC20.PAUSER_ROLE();
      const lockerRole = await instanceERC20.LOCKER_ROLE();
      const minterRole = await instanceERC20.MINTER_ROLE();

      expect(await instanceERC20.hasRole(pauserRole, owner.address)).to.equal(
        true
      );
      expect(await instanceERC20.hasRole(lockerRole, owner.address)).to.equal(
        true
      );
      expect(await instanceERC20.hasRole(minterRole, owner.address)).to.equal(
        true
      );
    });

    it("Should set correctly the name", async () => {
      expect(await instanceERC20.name()).to.equal("StartonToken");
    });

    it("Should set correctly the symbol", async () => {
      expect(await instanceERC20.symbol()).to.equal("ST");
    });

    it("Should not be paused", async () => {
      expect(await instanceERC20.paused()).to.equal(false);
    });

    it("Should set correctly the total supply", async () => {
      expect(await instanceERC20.totalSupply()).to.equal(
        BigNumber.from("1000000000000000000000000000")
      );
    });
  });

  describe("Allowance", () => {
    it("Should return 0", async () => {
      expect(
        await instanceERC20.allowance(owner.address, addr1.address)
      ).to.equal(0);
    });

    it("Should increase allowance", async () => {
      await instanceERC20.increaseAllowance(
        addr1.address,
        BigNumber.from("100")
      );
      expect(
        await instanceERC20.allowance(owner.address, addr1.address)
      ).to.equal(BigNumber.from("100"));

      await instanceERC20.increaseAllowance(
        addr1.address,
        BigNumber.from("100")
      );
      expect(
        await instanceERC20.allowance(owner.address, addr1.address)
      ).to.equal(BigNumber.from("200"));
    });

    it("Should approve the correct amount", async () => {
      await instanceERC20.approve(addr1.address, BigNumber.from("100"));
      expect(
        await instanceERC20.allowance(owner.address, addr1.address)
      ).to.equal(BigNumber.from("100"));
    });
  });

  describe("Transfer", () => {
    it("Shouldn't transferFrom without enough allowance", async () => {
      await expect(
        instanceERC20
          .connect(addr2)
          .transferFrom(
            addr1.address,
            addr2.address,
            BigNumber.from("1000000000000000000000000000")
          )
      ).to.be.revertedWith("ERC20: insufficient allowance");
    });

    it("Should transfer without approval while owner", async () => {
      await instanceERC20.transfer(
        addr2.address,
        BigNumber.from("1000000000000000000000000000")
      );
      expect(await instanceERC20.balanceOf(owner.address)).to.equal(0);
      expect(await instanceERC20.balanceOf(addr2.address)).to.equal(
        BigNumber.from("1000000000000000000000000000")
      );
    });

    it("Should transfer with approval", async () => {
      await instanceERC20.approve(
        addr1.address,
        BigNumber.from("1000000000000000000000000000")
      );
      await instanceERC20
        .connect(addr1)
        .transferFrom(
          owner.address,
          addr2.address,
          BigNumber.from("1000000000000000000000000000")
        );
      expect(await instanceERC20.balanceOf(owner.address)).to.equal(0);
      expect(await instanceERC20.balanceOf(addr2.address)).to.equal(
        BigNumber.from("1000000000000000000000000000")
      );
    });
  });

  describe("Minting", () => {
    it("Should mint token correctly", async () => {
      await instanceERC20.mint(addr1.address, "100000000000000");
      expect(await instanceERC20.balanceOf(addr1.address)).to.equal(
        "100000000000000"
      );
    });
  });

  describe("Pause", () => {
    it("Should pause correctly", async () => {
      await instanceERC20.pause();
      expect(await instanceERC20.paused()).to.equal(true);
    });

    it("Should unpause correctly", async () => {
      await instanceERC20.pause();
      await instanceERC20.unpause();

      expect(await instanceERC20.paused()).to.equal(false);
    });
  });

  describe("Lock", () => {
    it("Should lock the mint and not let anyone mint anymore", async () => {
      await instanceERC20.lockMint();
      await expect(
        instanceERC20.mint(addr1.address, BigNumber.from("100"))
      ).to.be.revertedWith("Minting is locked");
    });
  });

  describe("Roles", () => {
    it("Should assign roles accordingly", async () => {
      const pauserRole = await instanceERC20.PAUSER_ROLE();
      const lockerRole = await instanceERC20.LOCKER_ROLE();
      const minterRole = await instanceERC20.MINTER_ROLE();

      await instanceERC20.grantRole(pauserRole, addr1.address);
      expect(await instanceERC20.hasRole(pauserRole, addr1.address)).to.equal(
        true
      );
      await instanceERC20.grantRole(lockerRole, addr1.address);
      expect(await instanceERC20.hasRole(lockerRole, addr1.address)).to.equal(
        true
      );
      await instanceERC20.grantRole(minterRole, addr1.address);
      expect(await instanceERC20.hasRole(minterRole, addr1.address)).to.equal(
        true
      );
    });

    it("Should transfer ownership", async () => {
      const adminRole = await instanceERC20.DEFAULT_ADMIN_ROLE();

      await instanceERC20.transferOwnership(addr1.address);
      expect(await instanceERC20.hasRole(adminRole, addr1.address)).to.equal(
        true
      );
      expect(await instanceERC20.hasRole(adminRole, owner.address)).to.equal(
        false
      );
    });

    it("Should revoke roles accordingly", async () => {
      const pauserRole = await instanceERC20.PAUSER_ROLE();

      await instanceERC20.grantRole(pauserRole, addr1.address);

      await instanceERC20.revokeRole(pauserRole, addr1.address);
      expect(await instanceERC20.hasRole(pauserRole, addr1.address)).to.equal(
        false
      );
    });

    it("Shouldn't let anyone without the pauser role to be able to pause or unpause the contract", async () => {
      await expect(instanceERC20.connect(addr1).pause()).to.be.reverted;
      await expect(instanceERC20.connect(addr1).unpause()).to.be.reverted;
    });

    it("Shouldn't let anyone without the minter role to be able to mint new tokens", async () => {
      await expect(
        instanceERC20.connect(addr1).mint(addr1.address, BigNumber.from("100"))
      ).to.be.reverted;
    });

    it("Shouldn't let anyone without the locker role to be able to lock", async () => {
      await expect(instanceERC20.connect(addr1).lockMint()).to.be.reverted;
    });
  });

  describe("Burn", () => {
    it("Should be able to burn tokens", async () => {
      await instanceERC20.burn(BigNumber.from("1000000000000000000000000000"));

      expect(await instanceERC20.balanceOf(owner.address)).to.equal(0);
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

      const name = await instanceERC20.name();
      const nonce = await instanceERC20.getNonce(addr1.address);
      const { chainId } = await ethers.provider.getNetwork();

      const domainType = {
        name,
        version: "1",
        verifyingContract: instanceERC20.address,
        salt: "0x" + chainId.toString(16).padStart(64, "0"),
      };

      const functionSignature = instanceERC20.interface.encodeFunctionData(
        "approve",
        [addr2.address, BigNumber.from("1000000000000000000000000000")]
      );

      // Create the signature of the transaction
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

      // Sign the transaction by the destiner user
      const { r, s, v } = ethers.utils.splitSignature(signature);

      await instanceERC20.executeMetaTransaction(
        addr1.address,
        functionSignature,
        r,
        s,
        v
      );

      expect(
        await instanceERC20.allowance(addr1.address, addr2.address)
      ).to.equal(BigNumber.from("1000000000000000000000000000"));
    });
  });
});
