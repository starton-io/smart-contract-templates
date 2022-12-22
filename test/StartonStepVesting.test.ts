import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { BigNumber } from "ethers";

import {
  StartonStepVesting,
  StartonStepVesting__factory, // eslint-disable-line camelcase
  StartonERC20Base,
  StartonERC20Base__factory, // eslint-disable-line camelcase
} from "../typechain-types";

let Vesting: StartonStepVesting__factory; // eslint-disable-line camelcase
let Token: StartonERC20Base__factory; // eslint-disable-line camelcase

describe("StartonStepVesting", () => {
  let instanceVesting: StartonStepVesting;
  let instanceToken: StartonERC20Base;
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

    Vesting = new StartonStepVesting__factory(owner);
  });

  beforeEach(async () => {
    // Reset the whole waffle for each test
    await ethers.provider.send("hardhat_reset", []);

    instanceVesting = (await Vesting.deploy()) as StartonStepVesting;
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
      it("Shouldn't add a native vesting if the amount is incorrect", async () => {
        const start = (now.valueOf() / 1000) | 0;
        const stepsTimestamps = [start + 1000, start + 2000, start + 3000];

        const stepsAmount = [
          ethers.utils.parseEther("1"),
          ethers.utils.parseEther("2"),
          ethers.utils.parseEther("3"),
        ];

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await expect(
          instanceVesting["addVesting(address,uint64[],uint256[])"](
            addr1.address,
            stepsTimestamps,
            stepsAmount,
            { value: ethers.utils.parseEther("5") }
          )
        ).to.be.revertedWith("Incorrect amount");
      });

      it("Shouldn't add a native vesting if no steps", async () => {
        const start = (now.valueOf() / 1000) | 0;

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await expect(
          instanceVesting["addVesting(address,uint64[],uint256[])"](
            addr1.address,
            [],
            []
          )
        ).to.be.revertedWith("Steps are empty");
      });

      it("Shouldn't add a native vesting if a step timestamp is in the past", async () => {
        const start = (now.valueOf() / 1000) | 0;
        const stepsTimestamps = [start + 1000, start - 2000, start + 3000];

        const stepsAmount = [
          ethers.utils.parseEther("1"),
          ethers.utils.parseEther("2"),
          ethers.utils.parseEther("3"),
        ];

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await expect(
          instanceVesting["addVesting(address,uint64[],uint256[])"](
            addr1.address,
            stepsTimestamps,
            stepsAmount,
            { value: ethers.utils.parseEther("6") }
          )
        ).to.be.revertedWith("Timestamp is in the past");
      });

      it("Shouldn't add a native vesting if a step amount is null", async () => {
        const start = (now.valueOf() / 1000) | 0;
        const stepsTimestamps = [start + 1000, start + 2000, start + 3000];

        const stepsAmount = [
          ethers.utils.parseEther("1"),
          0,
          ethers.utils.parseEther("3"),
        ];

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await expect(
          instanceVesting["addVesting(address,uint64[],uint256[])"](
            addr1.address,
            stepsTimestamps,
            stepsAmount,
            { value: ethers.utils.parseEther("4") }
          )
        ).to.be.revertedWith("Amount is insufficent");
      });

      it("Shouldn't add a native vesting if the steps timestamps aren't in order", async () => {
        const start = (now.valueOf() / 1000) | 0;
        const stepsTimestamps = [start + 2000, start + 1000, start + 3000];

        const stepsAmount = [
          ethers.utils.parseEther("1"),
          ethers.utils.parseEther("2"),
          ethers.utils.parseEther("3"),
        ];

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await expect(
          instanceVesting["addVesting(address,uint64[],uint256[])"](
            addr1.address,
            stepsTimestamps,
            stepsAmount,
            { value: ethers.utils.parseEther("6") }
          )
        ).to.be.revertedWith("Timestamps aren't in order");
      });

      it("Should add a native vesting", async () => {
        const start = (now.valueOf() / 1000) | 0;
        const stepsTimestamps = [start + 1000, start + 2000, start + 3000];

        const stepsAmount = [
          ethers.utils.parseEther("1"),
          ethers.utils.parseEther("2"),
          ethers.utils.parseEther("3"),
        ];

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await instanceVesting["addVesting(address,uint64[],uint256[])"](
          addr1.address,
          stepsTimestamps,
          stepsAmount,
          { value: ethers.utils.parseEther("6") }
        );

        const vesting = await instanceVesting.getVesting(addr1.address, 0);
        const vestings = await instanceVesting.getVestings(addr1.address);
        const vestingBeneficiaries =
          await instanceVesting.getVestingsBeneficiaries();
        const vestingNumber = await instanceVesting.getVestingNumber(
          addr1.address
        );
        const awaitedVesting = [
          ethers.utils.parseEther("6"),
          TypeOfToken.NATIVE,
          ethers.constants.AddressZero,
          0,
          start,
          [
            [stepsAmount[0], stepsTimestamps[0], false],
            [stepsAmount[1], stepsTimestamps[1], false],
            [stepsAmount[2], stepsTimestamps[2], false],
          ],
        ];
        const awaitedVestings = [awaitedVesting];
        const awaitedVestingNumber = 1;

        expect(vestingBeneficiaries).to.deep.equal([addr1.address]);
        expect(vesting).to.deep.equal(awaitedVesting);
        expect(vestings).to.deep.equal(awaitedVestings);
        expect(vestingNumber).to.deep.equal(awaitedVestingNumber);
      });
    });

    describe("Claim a native vesting", () => {
      it("Shouldn't claim a native vesting if the vesting doesn't exist", async () => {
        await expect(
          instanceVesting.connect(addr1).claimVesting(0)
        ).to.be.revertedWith("Vesting doesn't exist");
      });

      it("Shouldn't claim zero native vesting", async () => {
        const start = (now.valueOf() / 1000) | 0;
        const stepsTimestamps = [start + 1000, start + 2000, start + 3000];
        const stepsAmount = [
          ethers.utils.parseEther("1"),
          ethers.utils.parseEther("2"),
          ethers.utils.parseEther("3"),
        ];

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await instanceVesting["addVesting(address,uint64[],uint256[])"](
          addr1.address,
          stepsTimestamps,
          stepsAmount,
          { value: ethers.utils.parseEther("6") }
        );

        await ethers.provider.send("evm_setNextBlockTimestamp", [start + 1]);
        await expect(
          instanceVesting.connect(addr1).claimVesting(0)
        ).to.be.revertedWith("VestingAmount is zero");
      });

      it("Shouldn't claim twice token vesting", async () => {
        const start = (now.valueOf() / 1000) | 0;
        const stepsTimestamps = [start + 1000, start + 2000, start + 3000];
        const stepsAmount = [
          ethers.utils.parseEther("1"),
          ethers.utils.parseEther("2"),
          ethers.utils.parseEther("3"),
        ];

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await instanceVesting["addVesting(address,uint64[],uint256[])"](
          addr1.address,
          stepsTimestamps,
          stepsAmount,
          { value: ethers.utils.parseEther("6") }
        );

        await ethers.provider.send("evm_setNextBlockTimestamp", [start + 1000]);
        await instanceVesting.connect(addr1).claimVesting(0);

        await ethers.provider.send("evm_setNextBlockTimestamp", [start + 1001]);
        await expect(
          instanceVesting.connect(addr1).claimVesting(0)
        ).to.be.revertedWith("VestingAmount is zero");
      });

      it("Should claim a single step", async () => {
        const start = (now.valueOf() / 1000) | 0;
        const stepsTimestamps = [start + 1000, start + 2000, start + 3000];
        const stepsAmount = [
          ethers.utils.parseEther("1"),
          ethers.utils.parseEther("2"),
          ethers.utils.parseEther("3"),
        ];

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await instanceVesting["addVesting(address,uint64[],uint256[])"](
          addr1.address,
          stepsTimestamps,
          stepsAmount,
          { value: ethers.utils.parseEther("6") }
        );

        await ethers.provider.send("evm_setNextBlockTimestamp", [start + 1000]);

        const beforeBalance = await addr1.getBalance();
        const op = await instanceVesting.connect(addr1).claimVesting(0);
        expect(await addr1.getBalance()).to.be.equal(
          beforeBalance
            .add(stepsAmount[0])
            .sub(
              (await op.wait()).gasUsed.mul((await op.wait()).effectiveGasPrice)
            )
        );
      });

      it("Should claim every steps in multiple claims", async () => {
        const start = (now.valueOf() / 1000) | 0;
        const stepsTimestamps = [start + 1000, start + 2000, start + 3000];
        const stepsAmount = [
          ethers.utils.parseEther("1"),
          ethers.utils.parseEther("2"),
          ethers.utils.parseEther("3"),
        ];

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await instanceVesting["addVesting(address,uint64[],uint256[])"](
          addr1.address,
          stepsTimestamps,
          stepsAmount,
          { value: ethers.utils.parseEther("6") }
        );

        await ethers.provider.send("evm_setNextBlockTimestamp", [start + 1000]);

        const beforeBalance = await addr1.getBalance();
        const op = await instanceVesting.connect(addr1).claimVesting(0);
        expect(await addr1.getBalance()).to.be.equal(
          beforeBalance
            .add(stepsAmount[0])
            .sub(
              (await op.wait()).gasUsed.mul((await op.wait()).effectiveGasPrice)
            )
        );

        await ethers.provider.send("evm_setNextBlockTimestamp", [start + 3000]);

        const op2 = await instanceVesting.connect(addr1).claimVesting(0);
        expect(await addr1.getBalance()).to.be.equal(
          beforeBalance
            .add(stepsAmount[0].add(stepsAmount[1]).add(stepsAmount[2]))
            .sub(
              (await op2.wait()).gasUsed.mul(
                (await op2.wait()).effectiveGasPrice
              )
            )
            .sub(
              (await op.wait()).gasUsed.mul((await op.wait()).effectiveGasPrice)
            )
        );
        await expect(
          instanceVesting.getVesting(addr1.address, 0)
        ).to.be.revertedWith("Vesting doesn't exist");
      });

      it("Should claim every steps in a single claim", async () => {
        const start = (now.valueOf() / 1000) | 0;
        const stepsTimestamps = [start + 1000, start + 2000, start + 3000];
        const stepsAmount = [
          ethers.utils.parseEther("1"),
          ethers.utils.parseEther("2"),
          ethers.utils.parseEther("3"),
        ];

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await instanceVesting["addVesting(address,uint64[],uint256[])"](
          addr1.address,
          stepsTimestamps,
          stepsAmount,
          { value: ethers.utils.parseEther("6") }
        );

        await ethers.provider.send("evm_setNextBlockTimestamp", [start + 3000]);

        const beforeBalance = await addr1.getBalance();
        const op = await instanceVesting.connect(addr1).claimVesting(0);
        expect(await addr1.getBalance()).to.be.equal(
          beforeBalance
            .add(stepsAmount[0].add(stepsAmount[1]).add(stepsAmount[2]))
            .sub(
              (await op.wait()).gasUsed.mul((await op.wait()).effectiveGasPrice)
            )
        );
        await expect(
          instanceVesting.getVesting(addr1.address, 0)
        ).to.be.revertedWith("Vesting doesn't exist");
      });
    });
  });

  describe("TokenVesting", () => {
    before(async () => {
      Token = new StartonERC20Base__factory(owner);
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
      it("Shouldn't add a token vesting if the amount is incorrect", async () => {
        const start = (now.valueOf() / 1000) | 0;
        const stepsTimestamps = [start + 1000, start + 2000, start + 3000];

        const stepsAmount = [
          ethers.utils.parseEther("1"),
          ethers.utils.parseEther("2"),
          ethers.utils.parseEther("3"),
        ];

        await instanceToken.approve(
          instanceVesting.address,
          ethers.utils.parseEther("6")
        );
        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await expect(
          instanceVesting[
            "addVesting(address,uint256,uint64[],uint256[],address)"
          ](
            addr1.address,
            ethers.utils.parseEther("5"),
            stepsTimestamps,
            stepsAmount,
            instanceToken.address
          )
        ).to.be.revertedWith("Incorrect amount");
      });

      it("Shouldn't add a token vesting if no steps", async () => {
        const start = (now.valueOf() / 1000) | 0;

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await expect(
          instanceVesting[
            "addVesting(address,uint256,uint64[],uint256[],address)"
          ](addr1.address, 0, [], [], instanceVesting.address)
        ).to.be.revertedWith("Steps are empty");
      });

      it("Shouldn't add a token vesting if a step timestamp is in the past", async () => {
        const start = (now.valueOf() / 1000) | 0;
        const stepsTimestamps = [start + 1000, start - 2000, start + 3000];

        const stepsAmount = [
          ethers.utils.parseEther("1"),
          ethers.utils.parseEther("2"),
          ethers.utils.parseEther("3"),
        ];

        await instanceToken.approve(
          instanceVesting.address,
          ethers.utils.parseEther("6")
        );
        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await expect(
          instanceVesting[
            "addVesting(address,uint256,uint64[],uint256[],address)"
          ](
            addr1.address,
            ethers.utils.parseEther("6"),
            stepsTimestamps,
            stepsAmount,
            instanceToken.address
          )
        ).to.be.revertedWith("Timestamp is in the past");
      });

      it("Shouldn't add a token vesting if a step amount is null", async () => {
        const start = (now.valueOf() / 1000) | 0;
        const stepsTimestamps = [start + 1000, start + 2000, start + 3000];

        const stepsAmount = [
          ethers.utils.parseEther("1"),
          0,
          ethers.utils.parseEther("3"),
        ];

        await instanceToken.approve(
          instanceVesting.address,
          ethers.utils.parseEther("4")
        );
        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await expect(
          instanceVesting[
            "addVesting(address,uint256,uint64[],uint256[],address)"
          ](
            addr1.address,
            ethers.utils.parseEther("4"),
            stepsTimestamps,
            stepsAmount,
            instanceToken.address
          )
        ).to.be.revertedWith("Amount is insufficent");
      });

      it("Shouldn't add a token vesting if the steps timestamps aren't in order", async () => {
        const start = (now.valueOf() / 1000) | 0;
        const stepsTimestamps = [start + 2000, start + 1000, start + 3000];
        const stepsAmount = [
          ethers.utils.parseEther("1"),
          ethers.utils.parseEther("2"),
          ethers.utils.parseEther("3"),
        ];

        await instanceToken.approve(
          instanceVesting.address,
          ethers.utils.parseEther("6")
        );
        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await expect(
          instanceVesting[
            "addVesting(address,uint256,uint64[],uint256[],address)"
          ](
            addr1.address,
            ethers.utils.parseEther("6"),
            stepsTimestamps,
            stepsAmount,
            instanceToken.address
          )
        ).to.be.revertedWith("Timestamps aren't in order");
      });

      it("Shouldn't add a token vesting if the amount is not approved", async () => {
        const start = (now.valueOf() / 1000) | 0;
        const stepsTimestamps = [start + 1000, start + 2000, start + 3000];
        const stepsAmount = [
          ethers.utils.parseEther("1"),
          ethers.utils.parseEther("2"),
          ethers.utils.parseEther("3"),
        ];

        await instanceToken.approve(
          instanceVesting.address,
          ethers.utils.parseEther("5")
        );
        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await expect(
          instanceVesting[
            "addVesting(address,uint256,uint64[],uint256[],address)"
          ](
            addr1.address,
            ethers.utils.parseEther("6"),
            stepsTimestamps,
            stepsAmount,
            instanceToken.address
          )
        ).to.be.revertedWith("Not enough allowance");
      });

      it("Shouldn't add a token vesting if the sender doesn't have enough balance", async () => {
        const start = (now.valueOf() / 1000) | 0;
        const stepsTimestamps = [start + 1000, start + 2000, start + 3000];
        const stepsAmount = [
          ethers.utils.parseEther("1"),
          ethers.utils.parseEther("2"),
          ethers.utils.parseEther("3"),
        ];

        await instanceToken.approve(
          instanceVesting.address,
          ethers.utils.parseEther("6")
        );
        await instanceToken.transfer(
          addr2.address,
          BigNumber.from("1000000000000000000000000000")
        );
        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await expect(
          instanceVesting[
            "addVesting(address,uint256,uint64[],uint256[],address)"
          ](
            addr1.address,
            ethers.utils.parseEther("6"),
            stepsTimestamps,
            stepsAmount,
            instanceToken.address
          )
        ).to.be.revertedWith("Not enough balance");
      });

      it("Should add a token vesting", async () => {
        const start = (now.valueOf() / 1000) | 0;
        const stepsTimestamps = [start + 1000, start + 2000, start + 3000];
        const stepsAmount = [
          ethers.utils.parseEther("1"),
          ethers.utils.parseEther("2"),
          ethers.utils.parseEther("3"),
        ];

        await instanceToken.approve(
          instanceVesting.address,
          ethers.utils.parseEther("6")
        );
        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await instanceVesting[
          "addVesting(address,uint256,uint64[],uint256[],address)"
        ](
          addr1.address,
          ethers.utils.parseEther("6"),
          stepsTimestamps,
          stepsAmount,
          instanceToken.address
        );

        const vesting = await instanceVesting.getVesting(addr1.address, 0);
        const vestings = await instanceVesting.getVestings(addr1.address);
        const vestingBeneficiaries =
          await instanceVesting.getVestingsBeneficiaries();
        const vestingNumber = await instanceVesting.getVestingNumber(
          addr1.address
        );
        const awaitedVesting = [
          ethers.utils.parseEther("6"),
          TypeOfToken.TOKEN,
          instanceToken.address,
          0,
          start,
          [
            [stepsAmount[0], stepsTimestamps[0], false],
            [stepsAmount[1], stepsTimestamps[1], false],
            [stepsAmount[2], stepsTimestamps[2], false],
          ],
        ];
        const awaitedVestings = [awaitedVesting];
        const awaitedVestingNumber = 1;

        expect(vestingBeneficiaries).to.deep.equal([addr1.address]);
        expect(vesting).to.deep.equal(awaitedVesting);
        expect(vestings).to.deep.equal(awaitedVestings);
        expect(vestingNumber).to.equal(awaitedVestingNumber);
      });
    });

    describe("Claim a token vesting", () => {
      it("Shouldn't claim a token vesting if the vesting doesn't exist", async () => {
        await expect(
          instanceVesting.connect(addr1).claimVesting(0)
        ).to.be.revertedWith("Vesting doesn't exist");
      });

      it("Shouldn't claim zero token vesting", async () => {
        const start = (now.valueOf() / 1000) | 0;
        const stepsTimestamps = [start + 1000, start + 2000, start + 3000];
        const stepsAmount = [
          ethers.utils.parseEther("1"),
          ethers.utils.parseEther("2"),
          ethers.utils.parseEther("3"),
        ];

        await instanceToken.approve(
          instanceVesting.address,
          ethers.utils.parseEther("6")
        );
        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await instanceVesting[
          "addVesting(address,uint256,uint64[],uint256[],address)"
        ](
          addr1.address,
          ethers.utils.parseEther("6"),
          stepsTimestamps,
          stepsAmount,
          instanceToken.address
        );

        await ethers.provider.send("evm_setNextBlockTimestamp", [start + 1]);
        await expect(
          instanceVesting.connect(addr1).claimVesting(0)
        ).to.be.revertedWith("VestingAmount is zero");
      });

      it("Shouldn't claim twice token vesting", async () => {
        const start = (now.valueOf() / 1000) | 0;
        const stepsTimestamps = [start + 1000, start + 2000, start + 3000];
        const stepsAmount = [
          ethers.utils.parseEther("1"),
          ethers.utils.parseEther("2"),
          ethers.utils.parseEther("3"),
        ];

        await instanceToken.approve(
          instanceVesting.address,
          ethers.utils.parseEther("6")
        );
        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await instanceVesting[
          "addVesting(address,uint256,uint64[],uint256[],address)"
        ](
          addr1.address,
          ethers.utils.parseEther("6"),
          stepsTimestamps,
          stepsAmount,
          instanceToken.address
        );

        await ethers.provider.send("evm_setNextBlockTimestamp", [start + 1000]);
        await instanceVesting.connect(addr1).claimVesting(0);

        await ethers.provider.send("evm_setNextBlockTimestamp", [start + 1001]);
        await expect(
          instanceVesting.connect(addr1).claimVesting(0)
        ).to.be.revertedWith("VestingAmount is zero");
      });

      it("Should claim a single step", async () => {
        const start = (now.valueOf() / 1000) | 0;
        const stepsTimestamps = [start + 1000, start + 2000, start + 3000];
        const stepsAmount = [
          ethers.utils.parseEther("1"),
          ethers.utils.parseEther("2"),
          ethers.utils.parseEther("3"),
        ];

        await instanceToken.approve(
          instanceVesting.address,
          ethers.utils.parseEther("6")
        );
        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await instanceVesting[
          "addVesting(address,uint256,uint64[],uint256[],address)"
        ](
          addr1.address,
          ethers.utils.parseEther("6"),
          stepsTimestamps,
          stepsAmount,
          instanceToken.address
        );

        const beforeBalance = await instanceToken.balanceOf(addr1.address);
        await ethers.provider.send("evm_setNextBlockTimestamp", [start + 1000]);
        await instanceVesting.connect(addr1).claimVesting(0);
        expect(await instanceToken.balanceOf(addr1.address)).to.be.equal(
          beforeBalance.add(stepsAmount[0])
        );
      });

      it("Should claim every steps in multiple claims", async () => {
        const start = (now.valueOf() / 1000) | 0;
        const stepsTimestamps = [start + 1000, start + 2000, start + 3000];
        const stepsAmount = [
          ethers.utils.parseEther("1"),
          ethers.utils.parseEther("2"),
          ethers.utils.parseEther("3"),
        ];

        await instanceToken.approve(
          instanceVesting.address,
          ethers.utils.parseEther("6")
        );
        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await instanceVesting[
          "addVesting(address,uint256,uint64[],uint256[],address)"
        ](
          addr1.address,
          ethers.utils.parseEther("6"),
          stepsTimestamps,
          stepsAmount,
          instanceToken.address
        );

        const beforeBalance = await instanceToken.balanceOf(addr1.address);
        await ethers.provider.send("evm_setNextBlockTimestamp", [start + 1000]);
        await instanceVesting.connect(addr1).claimVesting(0);
        expect(await instanceToken.balanceOf(addr1.address)).to.be.equal(
          beforeBalance.add(stepsAmount[0])
        );

        await ethers.provider.send("evm_setNextBlockTimestamp", [start + 3000]);
        await instanceVesting.connect(addr1).claimVesting(0);
        expect(await instanceToken.balanceOf(addr1.address)).to.be.equal(
          beforeBalance
            .add(stepsAmount[0])
            .add(stepsAmount[1])
            .add(stepsAmount[2])
        );
        await expect(
          instanceVesting.getVesting(addr1.address, 0)
        ).to.be.revertedWith("Vesting doesn't exist");
      });

      it("Should claim every steps in a single claim", async () => {
        const start = (now.valueOf() / 1000) | 0;
        const stepsTimestamps = [start + 1000, start + 2000, start + 3000];
        const stepsAmount = [
          ethers.utils.parseEther("1"),
          ethers.utils.parseEther("2"),
          ethers.utils.parseEther("3"),
        ];

        await instanceToken.approve(
          instanceVesting.address,
          ethers.utils.parseEther("6")
        );
        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await instanceVesting[
          "addVesting(address,uint256,uint64[],uint256[],address)"
        ](
          addr1.address,
          ethers.utils.parseEther("6"),
          stepsTimestamps,
          stepsAmount,
          instanceToken.address
        );

        const beforeBalance = await instanceToken.balanceOf(addr1.address);
        await ethers.provider.send("evm_setNextBlockTimestamp", [start + 3000]);
        await instanceVesting.connect(addr1).claimVesting(0);
        expect(await instanceToken.balanceOf(addr1.address)).to.be.equal(
          beforeBalance
            .add(stepsAmount[0])
            .add(stepsAmount[1])
            .add(stepsAmount[2])
        );
        await expect(
          instanceVesting.getVesting(addr1.address, 0)
        ).to.be.revertedWith("Vesting doesn't exist");
      });
    });
  });
});
