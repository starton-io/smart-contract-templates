import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { BigNumber } from "ethers";

import {
  StartonFinalVesting,
  StartonFinalVesting__factory, // eslint-disable-line camelcase
  StartonERC20Pause,
  StartonERC20Pause__factory, // eslint-disable-line camelcase
} from "../typechain-types";

let Vesting: StartonFinalVesting__factory; // eslint-disable-line camelcase
let Token: StartonERC20Pause__factory; // eslint-disable-line camelcase

describe("StartonFinalVesting", () => {
  let instanceVesting: StartonFinalVesting;
  let instanceToken: StartonERC20Pause;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let now: Date;

  // eslint-disable-next-line no-unused-vars
  enum TypeOfToken {
    TOKEN, // eslint-disable-line no-unused-vars
    NATIVE, // eslint-disable-line no-unused-vars
  }

  before(async () => {
    // Get the Signers here
    [owner, addr1, addr2] = await ethers.getSigners();

    Vesting = new StartonFinalVesting__factory(owner);
  });

  beforeEach(async () => {
    // Reset the whole waffle for each test
    await ethers.provider.send("hardhat_reset", []);

    instanceVesting = (await Vesting.deploy()) as StartonFinalVesting;
    await instanceVesting.deployed();

    now = new Date();
  });

  describe("Deployment", () => {
    it("Should deploy the contract", async () => {});

    it("Should be a empty array of vestingBeneficiaries", async () => {
      const vestingBeneficiaries =
        await instanceVesting.getVestingsBeneficiaries();
      expect(vestingBeneficiaries).to.deep.equal([]);
    });
  });

  describe("NativeVesting", () => {
    describe("Add a new vesting", () => {
      it("Shouldn't add a native vesting if the vested amount is 0", async () => {
        const amount = ethers.utils.parseEther("0");
        const start = (now.valueOf() / 1000) | 0;
        const endTimestamp = start + 100;

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

        await expect(
          instanceVesting.addNativeVesting(addr1.address, endTimestamp, {
            value: amount,
          })
        ).to.be.revertedWith("Amount is insufficent");
      });

      it("Shouldn't add a native vesting if end is in the past", async () => {
        const amount = ethers.utils.parseEther("1000");
        const start = (now.valueOf() / 1000) | 0;
        const endTimestamp = start - 100;

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

        await expect(
          instanceVesting.addNativeVesting(addr1.address, endTimestamp, {
            value: amount,
          })
        ).to.be.revertedWith("End timestamp is in the past");
      });

      it("Should add successfully native vestings", async () => {
        const amount1 = ethers.utils.parseEther("0.1");
        const start1 = (now.valueOf() / 1000) | 0;
        const endTimestamp1 = start1 + 100;
        const amount2 = ethers.utils.parseEther("1");
        const start2 = start1 + 100;
        const endTimestamp2 = start1 + 1000;
        const amount3 = ethers.utils.parseEther("10");
        const start3 = start2 + 1;
        const endTimestamp3 = start1 + 10000;

        await ethers.provider.send("evm_setNextBlockTimestamp", [start1]);
        await instanceVesting.addNativeVesting(addr1.address, endTimestamp1, {
          value: amount1,
        });

        await ethers.provider.send("evm_setNextBlockTimestamp", [start2]);
        await instanceVesting.addNativeVesting(addr1.address, endTimestamp2, {
          value: amount2,
        });

        await ethers.provider.send("evm_setNextBlockTimestamp", [start3]);
        await instanceVesting.addNativeVesting(addr2.address, endTimestamp3, {
          value: amount3,
        });

        const vestingNb1 = await instanceVesting.getVestingNumber(
          addr1.address
        );
        const vestingNb2 = await instanceVesting.getVestingNumber(
          addr2.address
        );
        const vesting1 = await instanceVesting.getVesting(addr1.address, 0);
        const vesting2 = await instanceVesting.getVesting(addr1.address, 1);
        const vesting3 = await instanceVesting.getVesting(addr2.address, 0);
        const vestings1 = await instanceVesting.getVestings(addr1.address);
        const vestings2 = await instanceVesting.getVestings(addr2.address);
        const vestingBeneficiary =
          await instanceVesting.getVestingsBeneficiaries();
        const awaitedVesting1 = [
          amount1,
          TypeOfToken.NATIVE,
          ethers.constants.AddressZero,
          start1,
          endTimestamp1,
        ];
        const awaitedVesting2 = [
          amount2,
          TypeOfToken.NATIVE,
          ethers.constants.AddressZero,
          start2,
          endTimestamp2,
        ];
        const awaitedVesting3 = [
          amount3,
          TypeOfToken.NATIVE,
          ethers.constants.AddressZero,
          start3,
          endTimestamp3,
        ];

        expect(vestingNb1).to.deep.equal(2);
        expect(vestingNb2).to.deep.equal(1);
        expect(vesting1).to.deep.equal(awaitedVesting1);
        expect(vesting2).to.deep.equal(awaitedVesting2);
        expect(vesting3).to.deep.equal(awaitedVesting3);
        expect(vestings1).to.deep.equal([awaitedVesting1, awaitedVesting2]);
        expect(vestings2).to.deep.equal([awaitedVesting3]);
        expect(vestingBeneficiary).to.deep.equal([
          addr1.address,
          addr2.address,
        ]);
      });
    });

    describe("Claim a native vesting", () => {
      it("Shouldn't claim a native vesting if the vesting doesn't exist", async () => {
        await expect(
          instanceVesting.connect(addr1).claimVesting(0)
        ).to.be.revertedWith("Vesting doesn't exist");
      });

      it("Shouldn't claim twice a native vesting", async () => {
        const amount = ethers.utils.parseEther("1000");
        const start = (now.valueOf() / 1000) | 0;
        const endTimestamp = start + 100;

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await instanceVesting.addNativeVesting(addr1.address, endTimestamp, {
          value: amount,
        });

        await ethers.provider.send("evm_setNextBlockTimestamp", [endTimestamp]);
        instanceVesting.connect(addr1).claimVesting(0);

        await expect(
          instanceVesting.connect(addr1).claimVesting(0)
        ).to.be.revertedWith("Vesting doesn't exist");
      });

      it("Shouldn't claim zero native vesting", async () => {
        const amount = ethers.utils.parseEther("1000");
        const start = (now.valueOf() / 1000) | 0;
        const endTimestamp = start + 100;

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await instanceVesting.addNativeVesting(addr1.address, endTimestamp, {
          value: amount,
        });

        await ethers.provider.send("evm_setNextBlockTimestamp", [start + 1]);

        await expect(
          instanceVesting.connect(addr1).claimVesting(0)
        ).to.be.revertedWith("VestingAmount is zero");
      });

      it("Should claim the vesting at the end", async () => {
        const amount = ethers.utils.parseEther("1000");
        const start = (now.valueOf() / 1000) | 0;
        const endTimestamp = start + 100;

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await instanceVesting.addNativeVesting(addr1.address, endTimestamp, {
          value: amount,
        });

        await ethers.provider.send("evm_setNextBlockTimestamp", [endTimestamp]);

        instanceVesting.connect(addr1).claimVesting(0);
      });
    });
  });

  describe("TokenVesting", () => {
    before(async () => {
      Token = new StartonERC20Pause__factory(owner);
    });

    beforeEach(async () => {
      instanceToken = await Token.deploy(
        "StartonToken",
        "ST",
        BigNumber.from("1000000000000000000000000000"),
        owner.address
      );
      await instanceToken.deployed();
    });

    describe("Add a new vesting", () => {
      it("Shouldn't add a token vesting if the vested amount is 0", async () => {
        const amount = ethers.utils.parseEther("0");
        const start = (now.valueOf() / 1000) | 0;
        const endTimestamp = start + 100;

        await instanceToken.approve(instanceVesting.address, amount);

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

        await expect(
          instanceVesting.addTokenVesting(
            addr1.address,
            endTimestamp,
            amount,
            instanceToken.address
          )
        ).to.be.revertedWith("Amount is insufficent");
      });

      it("Shouldn't add a token vesting if end is in the past", async () => {
        const amount = ethers.utils.parseEther("1000");
        const start = (now.valueOf() / 1000) | 0;
        const endTimestamp = start - 100;

        await instanceToken.approve(instanceVesting.address, amount);

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

        await expect(
          instanceVesting.addTokenVesting(
            addr1.address,
            endTimestamp,
            amount,
            instanceToken.address
          )
        ).to.be.revertedWith("End timestamp is in the past");
      });

      it("Shouldn't add a token vesting if not enough allowance", async () => {
        const amount = ethers.utils.parseEther("1000");
        const start = (now.valueOf() / 1000) | 0;
        const endTimestamp = start + 100;

        await instanceToken.approve(instanceVesting.address, amount.sub(1));

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

        await expect(
          instanceVesting.addTokenVesting(
            addr1.address,
            endTimestamp,
            amount,
            instanceToken.address
          )
        ).to.be.revertedWith("Not enough allowance");
      });

      it("Shouldn't add a token vesting if not enough balance", async () => {
        const amount = "1000000000000000000000000001";
        const start = (now.valueOf() / 1000) | 0;
        const endTimestamp = start + 100;

        await instanceToken.approve(instanceVesting.address, amount);

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

        await expect(
          instanceVesting.addTokenVesting(
            addr1.address,
            endTimestamp,
            amount,
            instanceToken.address
          )
        ).to.be.revertedWith("Not enough balance");
      });

      it("Should add successfully token vestings", async () => {
        const amount1 = ethers.utils.parseEther("0.1");
        const start1 = (now.valueOf() / 1000) | 0;
        const endTimestamp1 = start1 + 100;
        const amount2 = ethers.utils.parseEther("1");
        const start2 = start1 + 100;
        const endTimestamp2 = start1 + 1000;
        const amount3 = ethers.utils.parseEther("10");
        const start3 = start2 + 1;
        const endTimestamp3 = start1 + 10000;

        await instanceToken.approve(
          instanceVesting.address,
          amount1.add(amount2).add(amount3)
        );

        await ethers.provider.send("evm_setNextBlockTimestamp", [start1]);
        await instanceVesting.addTokenVesting(
          addr1.address,
          endTimestamp1,
          amount1,
          instanceToken.address
        );

        await ethers.provider.send("evm_setNextBlockTimestamp", [start2]);
        await instanceVesting.addTokenVesting(
          addr1.address,
          endTimestamp2,
          amount2,
          instanceToken.address
        );

        await ethers.provider.send("evm_setNextBlockTimestamp", [start3]);
        await instanceVesting.addTokenVesting(
          addr2.address,
          endTimestamp3,
          amount3,
          instanceToken.address
        );

        const vesting1 = await instanceVesting.getVesting(addr1.address, 0);
        const vesting2 = await instanceVesting.getVesting(addr1.address, 1);
        const vesting3 = await instanceVesting.getVesting(addr2.address, 0);
        const vestings1 = await instanceVesting.getVestings(addr1.address);
        const vestings2 = await instanceVesting.getVestings(addr2.address);
        const vestingBeneficiary =
          await instanceVesting.getVestingsBeneficiaries();
        const awaitedVesting1 = [
          amount1,
          TypeOfToken.TOKEN,
          instanceToken.address,
          start1,
          endTimestamp1,
        ];
        const awaitedVesting2 = [
          amount2,
          TypeOfToken.TOKEN,
          instanceToken.address,
          start2,
          endTimestamp2,
        ];
        const awaitedVesting3 = [
          amount3,
          TypeOfToken.TOKEN,
          instanceToken.address,
          start3,
          endTimestamp3,
        ];

        expect(vesting1).to.deep.equal(awaitedVesting1);
        expect(vesting2).to.deep.equal(awaitedVesting2);
        expect(vesting3).to.deep.equal(awaitedVesting3);
        expect(vestings1).to.deep.equal([awaitedVesting1, awaitedVesting2]);
        expect(vestings2).to.deep.equal([awaitedVesting3]);
        expect(vestingBeneficiary).to.deep.equal([
          addr1.address,
          addr2.address,
        ]);
      });
    });

    describe("Claim a token vesting", () => {
      it("Shouldn't claim a token vesting if the vesting doesn't exist", async () => {
        await expect(
          instanceVesting.connect(addr1).claimVesting(0)
        ).to.be.revertedWith("Vesting doesn't exist");
      });

      it("Shouldn't claim zero token vesting", async () => {
        const amount = ethers.utils.parseEther("1000");
        const start = (now.valueOf() / 1000) | 0;
        const endTimestamp = start + 100;

        await instanceToken.approve(instanceVesting.address, amount);

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await instanceVesting.addTokenVesting(
          addr1.address,
          endTimestamp,
          amount,
          instanceToken.address
        );

        await ethers.provider.send("evm_setNextBlockTimestamp", [start + 1]);

        await expect(
          instanceVesting.connect(addr1).claimVesting(0)
        ).to.be.revertedWith("VestingAmount is zero");
      });

      it("Shouldn't claim twice a token vesting", async () => {
        const amount = ethers.utils.parseEther("1000");
        const start = (now.valueOf() / 1000) | 0;
        const endTimestamp = start + 100;

        await instanceToken.approve(instanceVesting.address, amount);

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await instanceVesting.addTokenVesting(
          addr1.address,
          endTimestamp,
          amount,
          instanceToken.address
        );

        await ethers.provider.send("evm_setNextBlockTimestamp", [endTimestamp]);

        await instanceVesting.connect(addr1).claimVesting(0);

        await expect(
          instanceVesting.connect(addr1).claimVesting(0)
        ).to.be.revertedWith("Vesting doesn't exist");
      });

      it("Should claim token vesting at the end", async () => {
        const amount = ethers.utils.parseEther("1000");
        const start = (now.valueOf() / 1000) | 0;
        const endTimestamp = start + 100;

        await instanceToken.approve(instanceVesting.address, amount);

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await instanceVesting.addTokenVesting(
          addr1.address,
          endTimestamp,
          amount,
          instanceToken.address
        );

        await ethers.provider.send("evm_setNextBlockTimestamp", [endTimestamp]);

        instanceVesting.connect(addr1).claimVesting(0);
      });
    });
  });
});
