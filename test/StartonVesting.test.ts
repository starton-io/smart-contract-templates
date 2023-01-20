import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { BigNumber } from "ethers";

import {
  StartonVesting,
  StartonVesting__factory, // eslint-disable-line camelcase
  StartonERC20Base,
  StartonERC20Base__factory, // eslint-disable-line camelcase
} from "../typechain-types";

let Vesting: StartonVesting__factory; // eslint-disable-line camelcase
let Token: StartonERC20Base__factory; // eslint-disable-line camelcase

describe("StartonVesting", () => {
  let instanceVesting: StartonVesting;
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

  // eslint-disable-next-line no-unused-vars
  enum VestingType {
    CLIFF, // eslint-disable-line no-unused-vars
    LINEAR, // eslint-disable-line no-unused-vars
  }

  before(async () => {
    // Get the Signers here
    [owner, addr1, addr2] = await ethers.getSigners();

    Vesting = new StartonVesting__factory(owner);
  });

  beforeEach(async () => {
    // Reset the whole waffle for each test
    await ethers.provider.send("hardhat_reset", []);

    instanceVesting = (await Vesting.deploy()) as StartonVesting;
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

  describe("CliffVesting", () => {
    describe("NativeVesting", () => {
      describe("Add a new vesting", () => {
        it("Shouldn't add a native vesting if the vested amount is 0", async () => {
          const amount = ethers.utils.parseEther("0");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting["addVesting(address,uint8,uint64,uint64)"](
              addr1.address,
              VestingType.CLIFF,
              start,
              endTimestamp,
              {
                value: amount,
              }
            )
          ).to.be.revertedWith("Amount is insufficent");
        });

        it("Shouldn't add a native vesting if start is in the past", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting["addVesting(address,uint8,uint64,uint64)"](
              addr1.address,
              VestingType.CLIFF,
              start - 1,
              endTimestamp,
              {
                value: amount,
              }
            )
          ).to.be.revertedWith("Start timestamp is in the past");
        });

        it("Shouldn't add a native vesting if start is after end", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start - 1;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting["addVesting(address,uint8,uint64,uint64)"](
              addr1.address,
              VestingType.CLIFF,
              start,
              endTimestamp,
              {
                value: amount,
              }
            )
          ).to.be.revertedWith("Start timestamp is after end timestamp");
        });

        it("Shouldn't add a native vesting if beneficiary is invalid", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting["addVesting(address,uint8,uint64,uint64)"](
              ethers.constants.AddressZero,
              VestingType.CLIFF,
              start,
              endTimestamp,
              {
                value: amount,
              }
            )
          ).to.be.revertedWith("Beneficiary is invalid");
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
          await instanceVesting["addVesting(address,uint8,uint64,uint64)"](
            addr1.address,
            VestingType.CLIFF,
            start1,
            endTimestamp1,
            {
              value: amount1,
            }
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [start2]);
          await instanceVesting["addVesting(address,uint8,uint64,uint64)"](
            addr1.address,
            VestingType.CLIFF,
            start2,
            endTimestamp2,
            {
              value: amount2,
            }
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [start3]);
          await instanceVesting["addVesting(address,uint8,uint64,uint64)"](
            addr2.address,
            VestingType.CLIFF,
            start3,
            endTimestamp3,
            {
              value: amount3,
            }
          );

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
            VestingType.CLIFF,
            ethers.constants.AddressZero,
            BigNumber.from(start1),
            BigNumber.from(endTimestamp1),
            BigNumber.from("0"),
          ];
          const awaitedVesting2 = [
            amount2,
            TypeOfToken.NATIVE,
            VestingType.CLIFF,
            ethers.constants.AddressZero,
            BigNumber.from(start2),
            BigNumber.from(endTimestamp2),
            BigNumber.from("0"),
          ];
          const awaitedVesting3 = [
            amount3,
            TypeOfToken.NATIVE,
            VestingType.CLIFF,
            ethers.constants.AddressZero,
            BigNumber.from(start3),
            BigNumber.from(endTimestamp3),
            BigNumber.from("0"),
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

      describe("Batch add new vestings", () => {
        it("Shouldn't batch add native vesting if not same length of args", async () => {
          const amount = ethers.utils.parseEther("0.1");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "batchAddVesting(address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              VestingType.CLIFF,
              [start, start],
              [endTimestamp],
              [amount],
              {
                value: amount,
              }
            )
          ).to.be.revertedWith("Invalid array length");
          await expect(
            instanceVesting[
              "batchAddVesting(address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              VestingType.CLIFF,
              [start],
              [endTimestamp],
              [amount, amount],
              {
                value: amount,
              }
            )
          ).to.be.revertedWith("Invalid array length");
          await expect(
            instanceVesting[
              "batchAddVesting(address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              VestingType.CLIFF,
              [start],
              [endTimestamp, endTimestamp],
              [amount],
              {
                value: amount,
              }
            )
          ).to.be.revertedWith("Invalid array length");
        });

        it("Shouldn't batch add native vesting if not enough native tokens", async () => {
          const amount = ethers.utils.parseEther("0.1");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "batchAddVesting(address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              VestingType.CLIFF,
              [start, start],
              [endTimestamp, endTimestamp],
              [amount, amount],
              {
                value: amount.mul(2).sub(1),
              }
            )
          ).to.be.revertedWith("Not enough value");
        });

        it("Shouldn't batch add native vestings if the vested amount is 0", async () => {
          const amount = ethers.utils.parseEther("0.1");
          const amount2 = ethers.utils.parseEther("0");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "batchAddVesting(address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              VestingType.CLIFF,
              [start, start],
              [endTimestamp, endTimestamp],
              [amount, amount2],
              {
                value: amount.mul(2),
              }
            )
          ).to.be.revertedWith("Amount is insufficent");
        });

        it("Shouldn't batch add native vestings if start is in the past", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "batchAddVesting(address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              VestingType.CLIFF,
              [start, start - 1],
              [endTimestamp, endTimestamp],
              [amount, amount],
              {
                value: amount.mul(2),
              }
            )
          ).to.be.revertedWith("Start timestamp is in the past");
        });

        it("Shouldn't batch add native vestings if start is after end", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp1 = start + 100;
          const endTimestamp2 = start - 1;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "batchAddVesting(address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              VestingType.CLIFF,
              [start, start],
              [endTimestamp1, endTimestamp2],
              [amount, amount],
              {
                value: amount.mul(2),
              }
            )
          ).to.be.revertedWith("Start timestamp is after end timestamp");
        });

        it("Shouldn't batch add native vestings if beneficiary is invalid", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "batchAddVesting(address,uint8,uint64[],uint64[],uint256[])"
            ](
              ethers.constants.AddressZero,
              VestingType.CLIFF,
              [start, start],
              [endTimestamp, endTimestamp],
              [amount, amount],
              {
                value: amount.mul(2),
              }
            )
          ).to.be.revertedWith("Beneficiary is invalid");
        });

        it("Should batch add successfully native vestings", async () => {
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
          await instanceVesting[
            "batchAddVesting(address,uint8,uint64[],uint64[],uint256[])"
          ](
            addr1.address,
            VestingType.CLIFF,
            [start1, start2],
            [endTimestamp1, endTimestamp2],
            [amount1, amount2],
            {
              value: amount1.add(amount2),
            }
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [start3]);
          await instanceVesting[
            "batchAddVesting(address,uint8,uint64[],uint64[],uint256[])"
          ](
            addr2.address,
            VestingType.CLIFF,
            [start3],
            [endTimestamp3],
            [amount3],
            {
              value: amount3,
            }
          );

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
            VestingType.CLIFF,
            ethers.constants.AddressZero,
            BigNumber.from(start1),
            BigNumber.from(endTimestamp1),
            BigNumber.from("0"),
          ];
          const awaitedVesting2 = [
            amount2,
            TypeOfToken.NATIVE,
            VestingType.CLIFF,
            ethers.constants.AddressZero,
            BigNumber.from(start2),
            BigNumber.from(endTimestamp2),
            BigNumber.from("0"),
          ];
          const awaitedVesting3 = [
            amount3,
            TypeOfToken.NATIVE,
            VestingType.CLIFF,
            ethers.constants.AddressZero,
            BigNumber.from(start3),
            BigNumber.from(endTimestamp3),
            BigNumber.from("0"),
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

        it("Shouldn't claim a native vesting before the start", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 10000;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
          await instanceVesting["addVesting(address,uint8,uint64,uint64)"](
            addr1.address,
            VestingType.CLIFF,
            start + 100,
            endTimestamp,
            {
              value: amount,
            }
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [start + 1]);
          await expect(
            instanceVesting.connect(addr1).claimVesting(0)
          ).to.be.revertedWith("VestingAmount is zero");
        });

        it("Shouldn't claim twice a native vesting", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
          await instanceVesting["addVesting(address,uint8,uint64,uint64)"](
            addr1.address,
            VestingType.CLIFF,
            start,
            endTimestamp,
            {
              value: amount,
            }
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [
            endTimestamp,
          ]);
          await instanceVesting.connect(addr1).claimVesting(0);

          await expect(
            instanceVesting.connect(addr1).claimVesting(0)
          ).to.be.revertedWith("Vesting doesn't exist");
        });

        it("Shouldn't claim zero native vesting", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
          await instanceVesting["addVesting(address,uint8,uint64,uint64)"](
            addr1.address,
            VestingType.CLIFF,
            start,
            endTimestamp,
            {
              value: amount,
            }
          );

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
          await instanceVesting["addVesting(address,uint8,uint64,uint64)"](
            addr1.address,
            VestingType.CLIFF,
            start,
            endTimestamp,
            {
              value: amount,
            }
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [
            endTimestamp,
          ]);

          const beforeBalance = await addr1.getBalance();
          const tx = await instanceVesting.connect(addr1).claimVesting(0);
          const receipt = await tx.wait();
          expect(await addr1.getBalance()).to.be.equal(
            beforeBalance
              .add(amount)
              .sub(receipt.gasUsed.mul(receipt.effectiveGasPrice))
          );
        });
      });

      describe("Claim all native vesting", () => {
        it("Should claim all the vestings at the end", async () => {
          const amount = ethers.utils.parseEther("1000");
          const amount2 = ethers.utils.parseEther("1");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
          await instanceVesting["addVesting(address,uint8,uint64,uint64)"](
            addr1.address,
            VestingType.CLIFF,
            start,
            endTimestamp,
            {
              value: amount,
            }
          );
          await ethers.provider.send("evm_setNextBlockTimestamp", [start + 1]);
          await instanceVesting["addVesting(address,uint8,uint64,uint64)"](
            addr1.address,
            VestingType.CLIFF,
            start + 1,
            endTimestamp,
            {
              value: amount2,
            }
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [
            endTimestamp,
          ]);

          const beforeBalance = await addr1.getBalance();
          const tx = await instanceVesting.connect(addr1).claimAllVestings();
          const receipt = await tx.wait();
          expect(await addr1.getBalance()).to.be.equal(
            beforeBalance
              .add(amount.add(amount2))
              .sub(receipt.gasUsed.mul(receipt.effectiveGasPrice))
          );
        });

        it("Should claim all native vestings one finished and the other not", async () => {
          const amount = ethers.utils.parseEther("1000");
          const amount2 = ethers.utils.parseEther("1");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;
          const endTimestamp2 = start + 1000;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
          await instanceVesting["addVesting(address,uint8,uint64,uint64)"](
            addr1.address,
            VestingType.CLIFF,
            start,
            endTimestamp,
            {
              value: amount,
            }
          );
          await ethers.provider.send("evm_setNextBlockTimestamp", [start + 1]);
          await instanceVesting["addVesting(address,uint8,uint64,uint64)"](
            addr1.address,
            VestingType.CLIFF,
            start + 1,
            endTimestamp2,
            {
              value: amount2,
            }
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [
            endTimestamp,
          ]);

          const beforeBalance = await addr1.getBalance();
          const tx = await instanceVesting.connect(addr1).claimAllVestings();
          const receipt = await tx.wait();
          expect(await addr1.getBalance()).to.be.equal(
            beforeBalance
              .add(amount)
              .sub(receipt.gasUsed.mul(receipt.effectiveGasPrice))
          );
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
        it("Shouldn't add a token vesting if the vested amount is 0", async () => {
          const amount = ethers.utils.parseEther("0");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await instanceToken.approve(instanceVesting.address, amount);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "addVesting(address,address,uint8,uint64,uint64,uint256)"
            ](
              addr1.address,
              instanceToken.address,
              VestingType.CLIFF,
              start,
              endTimestamp,
              amount
            )
          ).to.be.revertedWith("Amount is insufficent");
        });

        it("Shouldn't add a token vesting if start is in the past", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await instanceToken.approve(instanceVesting.address, amount);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "addVesting(address,address,uint8,uint64,uint64,uint256)"
            ](
              addr1.address,
              instanceToken.address,
              VestingType.CLIFF,
              start - 1,
              endTimestamp,
              amount
            )
          ).to.be.revertedWith("Start timestamp is in the past");
        });

        it("Shouldn't add a token vesting if start is after end", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start - 1;

          await instanceToken.approve(instanceVesting.address, amount);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "addVesting(address,address,uint8,uint64,uint64,uint256)"
            ](
              addr1.address,
              instanceToken.address,
              VestingType.CLIFF,
              start,
              endTimestamp,
              amount
            )
          ).to.be.revertedWith("Start timestamp is after end timestamp");
        });

        it("Shouldn't add a token vesting if beneficiary is invalid", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await instanceToken.approve(instanceVesting.address, amount);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "addVesting(address,address,uint8,uint64,uint64,uint256)"
            ](
              ethers.constants.AddressZero,
              instanceToken.address,
              VestingType.CLIFF,
              start,
              endTimestamp,
              amount
            )
          ).to.be.revertedWith("Beneficiary is invalid");
        });

        it("Shouldn't add a token vesting if not enough allowance", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await instanceToken.approve(instanceVesting.address, amount.sub(1));

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "addVesting(address,address,uint8,uint64,uint64,uint256)"
            ](
              addr1.address,
              instanceToken.address,
              VestingType.CLIFF,
              start,
              endTimestamp,
              amount
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
            instanceVesting[
              "addVesting(address,address,uint8,uint64,uint64,uint256)"
            ](
              addr1.address,
              instanceToken.address,
              VestingType.CLIFF,
              start,
              endTimestamp,
              amount
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
          await instanceVesting[
            "addVesting(address,address,uint8,uint64,uint64,uint256)"
          ](
            addr1.address,
            instanceToken.address,
            VestingType.CLIFF,
            start1,
            endTimestamp1,
            amount1
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [start2]);
          await instanceVesting[
            "addVesting(address,address,uint8,uint64,uint64,uint256)"
          ](
            addr1.address,
            instanceToken.address,
            VestingType.CLIFF,
            start2,
            endTimestamp2,
            amount2
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [start3]);
          await instanceVesting[
            "addVesting(address,address,uint8,uint64,uint64,uint256)"
          ](
            addr2.address,
            instanceToken.address,
            VestingType.CLIFF,
            start3,
            endTimestamp3,
            amount3
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
            VestingType.CLIFF,
            instanceToken.address,
            BigNumber.from(start1),
            BigNumber.from(endTimestamp1),
            BigNumber.from("0"),
          ];
          const awaitedVesting2 = [
            amount2,
            TypeOfToken.TOKEN,
            VestingType.CLIFF,
            instanceToken.address,
            BigNumber.from(start2),
            BigNumber.from(endTimestamp2),
            BigNumber.from("0"),
          ];
          const awaitedVesting3 = [
            amount3,
            TypeOfToken.TOKEN,
            VestingType.CLIFF,
            instanceToken.address,
            BigNumber.from(start3),
            BigNumber.from(endTimestamp3),
            BigNumber.from("0"),
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

      describe("Batch add a new vesting", () => {
        it("Shouldn't batch add native vesting if not same length of args", async () => {
          const amount = ethers.utils.parseEther("0.1");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await instanceToken.approve(instanceVesting.address, amount);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "batchAddVesting(address,address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              instanceToken.address,
              VestingType.CLIFF,
              [start, start],
              [endTimestamp],
              [amount]
            )
          ).to.be.revertedWith("Invalid array length");
          await expect(
            instanceVesting[
              "batchAddVesting(address,address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              instanceToken.address,
              VestingType.CLIFF,
              [start],
              [endTimestamp],
              [amount, amount]
            )
          ).to.be.revertedWith("Invalid array length");
          await expect(
            instanceVesting[
              "batchAddVesting(address,address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              instanceToken.address,
              VestingType.CLIFF,
              [start],
              [endTimestamp, endTimestamp],
              [amount]
            )
          ).to.be.revertedWith("Invalid array length");
        });

        it("Shouldn't batch add token vestings if the vested amount is 0", async () => {
          const amount = ethers.utils.parseEther("0");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await instanceToken.approve(instanceVesting.address, amount);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "batchAddVesting(address,address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              instanceToken.address,
              VestingType.CLIFF,
              [start],
              [endTimestamp],
              [amount]
            )
          ).to.be.revertedWith("Amount is insufficent");
        });

        it("Shouldn't batch add token vestings if start is in the past", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await instanceToken.approve(instanceVesting.address, amount);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "batchAddVesting(address,address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              instanceToken.address,
              VestingType.CLIFF,
              [start - 1],
              [endTimestamp],
              [amount]
            )
          ).to.be.revertedWith("Start timestamp is in the past");
        });

        it("Shouldn't batch add token vestings if start is after end", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start - 1;

          await instanceToken.approve(instanceVesting.address, amount);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "batchAddVesting(address,address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              instanceToken.address,
              VestingType.CLIFF,
              [start],
              [endTimestamp],
              [amount]
            )
          ).to.be.revertedWith("Start timestamp is after end timestamp");
        });

        it("Shouldn't batch add token vestings if beneficiary is invalid", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await instanceToken.approve(instanceVesting.address, amount);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "batchAddVesting(address,address,uint8,uint64[],uint64[],uint256[])"
            ](
              ethers.constants.AddressZero,
              instanceToken.address,
              VestingType.CLIFF,
              [start],
              [endTimestamp],
              [amount]
            )
          ).to.be.revertedWith("Beneficiary is invalid");
        });

        it("Shouldn't batch add token vestings if not enough allowance", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await instanceToken.approve(instanceVesting.address, amount.sub(1));

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "batchAddVesting(address,address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              instanceToken.address,
              VestingType.CLIFF,
              [start],
              [endTimestamp],
              [amount]
            )
          ).to.be.revertedWith("Not enough allowance");
        });

        it("Shouldn't batch add token vestings if not enough balance", async () => {
          const amount = "1000000000000000000000000001";
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await instanceToken.approve(instanceVesting.address, amount);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "batchAddVesting(address,address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              instanceToken.address,
              VestingType.CLIFF,
              [start],
              [endTimestamp],
              [amount]
            )
          ).to.be.revertedWith("Not enough balance");
        });

        it("Should batch add successfully token vestings", async () => {
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
          await instanceVesting[
            "batchAddVesting(address,address,uint8,uint64[],uint64[],uint256[])"
          ](
            addr1.address,
            instanceToken.address,
            VestingType.CLIFF,
            [start1, start2],
            [endTimestamp1, endTimestamp2],
            [amount1, amount2]
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [start3]);
          await instanceVesting[
            "batchAddVesting(address,address,uint8,uint64[],uint64[],uint256[])"
          ](
            addr2.address,
            instanceToken.address,
            VestingType.CLIFF,
            [start3],
            [endTimestamp3],
            [amount3]
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
            VestingType.CLIFF,
            instanceToken.address,
            BigNumber.from(start1),
            BigNumber.from(endTimestamp1),
            BigNumber.from("0"),
          ];
          const awaitedVesting2 = [
            amount2,
            TypeOfToken.TOKEN,
            VestingType.CLIFF,
            instanceToken.address,
            BigNumber.from(start2),
            BigNumber.from(endTimestamp2),
            BigNumber.from("0"),
          ];
          const awaitedVesting3 = [
            amount3,
            TypeOfToken.TOKEN,
            VestingType.CLIFF,
            instanceToken.address,
            BigNumber.from(start3),
            BigNumber.from(endTimestamp3),
            BigNumber.from("0"),
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

        it("Shouldn't claim a token vesting before the start", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 10000;

          await instanceToken.approve(instanceVesting.address, amount);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
          await instanceVesting[
            "addVesting(address,address,uint8,uint64,uint64,uint256)"
          ](
            addr1.address,
            instanceToken.address,
            VestingType.CLIFF,
            start + 100,
            endTimestamp,
            amount
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [start + 1]);
          await expect(
            instanceVesting.connect(addr1).claimVesting(0)
          ).to.be.revertedWith("VestingAmount is zero");
        });

        it("Shouldn't claim zero token vesting", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await instanceToken.approve(instanceVesting.address, amount);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
          await instanceVesting[
            "addVesting(address,address,uint8,uint64,uint64,uint256)"
          ](
            addr1.address,
            instanceToken.address,
            VestingType.CLIFF,
            start,
            endTimestamp,
            amount
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
          await instanceVesting[
            "addVesting(address,address,uint8,uint64,uint64,uint256)"
          ](
            addr1.address,
            instanceToken.address,
            VestingType.CLIFF,
            start,
            endTimestamp,
            amount
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [
            endTimestamp,
          ]);

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
          await instanceVesting[
            "addVesting(address,address,uint8,uint64,uint64,uint256)"
          ](
            addr1.address,
            instanceToken.address,
            VestingType.CLIFF,
            start,
            endTimestamp,
            amount
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [
            endTimestamp,
          ]);

          const beforeBalance = await instanceToken.balanceOf(addr1.address);
          await instanceVesting.connect(addr1).claimVesting(0);
          expect(await instanceToken.balanceOf(addr1.address)).to.equal(
            beforeBalance.add(amount)
          );
        });
      });

      describe("Claim all token vesting", () => {
        it("Should claim all token vestings at the end", async () => {
          const amount = ethers.utils.parseEther("1000");
          const amount2 = ethers.utils.parseEther("10000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await instanceToken.approve(
            instanceVesting.address,
            amount.add(amount2)
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
          await instanceVesting[
            "addVesting(address,address,uint8,uint64,uint64,uint256)"
          ](
            addr1.address,
            instanceToken.address,
            VestingType.CLIFF,
            start,
            endTimestamp,
            amount
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [start + 1]);
          await instanceVesting[
            "addVesting(address,address,uint8,uint64,uint64,uint256)"
          ](
            addr1.address,
            instanceToken.address,
            VestingType.CLIFF,
            start + 1,
            endTimestamp,
            amount2
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [
            endTimestamp,
          ]);

          const beforeBalance = await instanceToken.balanceOf(addr1.address);
          await instanceVesting.connect(addr1).claimAllVestings();
          expect(await instanceToken.balanceOf(addr1.address)).to.equal(
            beforeBalance.add(amount.add(amount2))
          );
        });

        it("Should claim all token vestings one finished and the other not", async () => {
          const amount = ethers.utils.parseEther("1");
          const amount2 = ethers.utils.parseEther("10000");
          const start = now.valueOf();
          const endTimestamp = start + 100;
          const endTimestamp2 = start + 1000;

          await instanceToken.approve(
            instanceVesting.address,
            amount.add(amount2)
          );

          await ethers.provider.send("evm_setAutomine", [false]);
          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
          await instanceVesting[
            "addVesting(address,address,uint8,uint64,uint64,uint256)"
          ](
            addr1.address,
            instanceToken.address,
            VestingType.CLIFF,
            start,
            endTimestamp,
            amount
          );

          await instanceVesting[
            "addVesting(address,address,uint8,uint64,uint64,uint256)"
          ](
            addr1.address,
            instanceToken.address,
            VestingType.CLIFF,
            start,
            endTimestamp2,
            amount2
          );

          await ethers.provider.send("evm_mine", []);
          await ethers.provider.send("evm_setAutomine", [true]);

          await ethers.provider.send("evm_setNextBlockTimestamp", [
            endTimestamp,
          ]);

          const beforeBalance = await instanceToken.balanceOf(addr1.address);
          await instanceVesting.connect(addr1).claimAllVestings();
          expect(await instanceToken.balanceOf(addr1.address)).to.equal(
            beforeBalance.add(amount)
          );
        });
      });
    });
  });

  describe("LinearVesting", () => {
    describe("NativeVesting", () => {
      describe("Add a new vesting", () => {
        it("Shouldn't add a native vesting if the vested amount is 0", async () => {
          const amount = ethers.utils.parseEther("0");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting["addVesting(address,uint8,uint64,uint64)"](
              addr1.address,
              VestingType.LINEAR,
              start,
              endTimestamp,
              {
                value: amount,
              }
            )
          ).to.be.revertedWith("Amount is insufficent");
        });

        it("Shouldn't add a native vesting if start is in the past", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting["addVesting(address,uint8,uint64,uint64)"](
              addr1.address,
              VestingType.LINEAR,
              start - 1,
              endTimestamp,
              {
                value: amount,
              }
            )
          ).to.be.revertedWith("Start timestamp is in the past");
        });

        it("Shouldn't add a native vesting if start is after end", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start - 1;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting["addVesting(address,uint8,uint64,uint64)"](
              addr1.address,
              VestingType.LINEAR,
              start,
              endTimestamp,
              {
                value: amount,
              }
            )
          ).to.be.revertedWith("Start timestamp is after end timestamp");
        });

        it("Shouldn't add a native vesting if beneficiary is invalid", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting["addVesting(address,uint8,uint64,uint64)"](
              ethers.constants.AddressZero,
              VestingType.LINEAR,
              start,
              endTimestamp,
              {
                value: amount,
              }
            )
          ).to.be.revertedWith("Beneficiary is invalid");
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
          await instanceVesting["addVesting(address,uint8,uint64,uint64)"](
            addr1.address,
            VestingType.LINEAR,
            start1,
            endTimestamp1,
            {
              value: amount1,
            }
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [start2]);
          await instanceVesting["addVesting(address,uint8,uint64,uint64)"](
            addr1.address,
            VestingType.LINEAR,
            start2,
            endTimestamp2,
            {
              value: amount2,
            }
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [start3]);
          await instanceVesting["addVesting(address,uint8,uint64,uint64)"](
            addr2.address,
            VestingType.LINEAR,
            start3,
            endTimestamp3,
            {
              value: amount3,
            }
          );

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
            VestingType.LINEAR,
            ethers.constants.AddressZero,
            BigNumber.from(start1),
            BigNumber.from(endTimestamp1),
            BigNumber.from("0"),
          ];
          const awaitedVesting2 = [
            amount2,
            TypeOfToken.NATIVE,
            VestingType.LINEAR,
            ethers.constants.AddressZero,
            BigNumber.from(start2),
            BigNumber.from(endTimestamp2),
            BigNumber.from("0"),
          ];
          const awaitedVesting3 = [
            amount3,
            TypeOfToken.NATIVE,
            VestingType.LINEAR,
            ethers.constants.AddressZero,
            BigNumber.from(start3),
            BigNumber.from(endTimestamp3),
            BigNumber.from("0"),
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

      describe("Batch add new vestings", () => {
        it("Shouldn't batch add native vesting if not same length of args", async () => {
          const amount = ethers.utils.parseEther("0.1");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "batchAddVesting(address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              VestingType.LINEAR,
              [start, start],
              [endTimestamp],
              [amount],
              {
                value: amount,
              }
            )
          ).to.be.revertedWith("Invalid array length");
          await expect(
            instanceVesting[
              "batchAddVesting(address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              VestingType.LINEAR,
              [start],
              [endTimestamp],
              [amount, amount],
              {
                value: amount,
              }
            )
          ).to.be.revertedWith("Invalid array length");
          await expect(
            instanceVesting[
              "batchAddVesting(address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              VestingType.LINEAR,
              [start],
              [endTimestamp, endTimestamp],
              [amount],
              {
                value: amount,
              }
            )
          ).to.be.revertedWith("Invalid array length");
        });

        it("Shouldn't batch add native vesting if not enough native tokens", async () => {
          const amount = ethers.utils.parseEther("0.1");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "batchAddVesting(address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              VestingType.LINEAR,
              [start, start],
              [endTimestamp, endTimestamp],
              [amount, amount],
              {
                value: amount.mul(2).sub(1),
              }
            )
          ).to.be.revertedWith("Not enough value");
        });

        it("Shouldn't batch add native vestings if the vested amount is 0", async () => {
          const amount = ethers.utils.parseEther("0.1");
          const amount2 = ethers.utils.parseEther("0");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "batchAddVesting(address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              VestingType.LINEAR,
              [start, start],
              [endTimestamp, endTimestamp],
              [amount, amount2],
              {
                value: amount.mul(2),
              }
            )
          ).to.be.revertedWith("Amount is insufficent");
        });

        it("Shouldn't batch add native vestings if start is in the past", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "batchAddVesting(address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              VestingType.LINEAR,
              [start, start - 1],
              [endTimestamp, endTimestamp],
              [amount, amount],
              {
                value: amount.mul(2),
              }
            )
          ).to.be.revertedWith("Start timestamp is in the past");
        });

        it("Shouldn't batch add native vestings if start is after end", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp1 = start + 100;
          const endTimestamp2 = start - 1;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "batchAddVesting(address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              VestingType.LINEAR,
              [start, start],
              [endTimestamp1, endTimestamp2],
              [amount, amount],
              {
                value: amount.mul(2),
              }
            )
          ).to.be.revertedWith("Start timestamp is after end timestamp");
        });

        it("Shouldn't batch add native vestings if beneficiary is invalid", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "batchAddVesting(address,uint8,uint64[],uint64[],uint256[])"
            ](
              ethers.constants.AddressZero,
              VestingType.LINEAR,
              [start, start],
              [endTimestamp, endTimestamp],
              [amount, amount],
              {
                value: amount.mul(2),
              }
            )
          ).to.be.revertedWith("Beneficiary is invalid");
        });

        it("Should batch add successfully native vestings", async () => {
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
          await instanceVesting[
            "batchAddVesting(address,uint8,uint64[],uint64[],uint256[])"
          ](
            addr1.address,
            VestingType.LINEAR,
            [start1, start2],
            [endTimestamp1, endTimestamp2],
            [amount1, amount2],
            {
              value: amount1.add(amount2),
            }
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [start3]);
          await instanceVesting[
            "batchAddVesting(address,uint8,uint64[],uint64[],uint256[])"
          ](
            addr2.address,
            VestingType.LINEAR,
            [start3],
            [endTimestamp3],
            [amount3],
            {
              value: amount3,
            }
          );

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
            VestingType.LINEAR,
            ethers.constants.AddressZero,
            BigNumber.from(start1),
            BigNumber.from(endTimestamp1),
            BigNumber.from("0"),
          ];
          const awaitedVesting2 = [
            amount2,
            TypeOfToken.NATIVE,
            VestingType.LINEAR,
            ethers.constants.AddressZero,
            BigNumber.from(start2),
            BigNumber.from(endTimestamp2),
            BigNumber.from("0"),
          ];
          const awaitedVesting3 = [
            amount3,
            TypeOfToken.NATIVE,
            VestingType.LINEAR,
            ethers.constants.AddressZero,
            BigNumber.from(start3),
            BigNumber.from(endTimestamp3),
            BigNumber.from("0"),
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

        it("Shouldn't claim a native vesting before the start", async () => {
          const amount = ethers.utils.parseEther("1");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 10000;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await instanceVesting["addVesting(address,uint8,uint64,uint64)"](
            addr1.address,
            VestingType.LINEAR,
            start + 100,
            endTimestamp,
            {
              value: amount,
            }
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [start + 1]);
          await expect(
            instanceVesting.connect(addr1).claimVesting(0)
          ).to.be.revertedWith("VestingAmount is zero");
        });

        it("Shouldn't claim twice totally a native vesting", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
          await instanceVesting["addVesting(address,uint8,uint64,uint64)"](
            addr1.address,
            VestingType.LINEAR,
            start,
            endTimestamp,
            {
              value: amount,
            }
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [
            endTimestamp,
          ]);
          instanceVesting.connect(addr1).claimVesting(0);

          await expect(
            instanceVesting.connect(addr1).claimVesting(0)
          ).to.be.revertedWith("Vesting doesn't exist");
        });

        it("Shouldn't claim zero native vesting", async () => {
          const amount = ethers.utils.parseEther("1");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
          await ethers.provider.send("evm_setAutomine", [false]);
          await instanceVesting["addVesting(address,uint8,uint64,uint64)"](
            addr1.address,
            VestingType.LINEAR,
            start,
            endTimestamp,
            {
              value: amount,
            }
          );

          await expect(
            instanceVesting.connect(addr1).claimVesting(0)
          ).to.be.revertedWith("VestingAmount is zero");
        });

        it("Should claim partially a native vesting", async () => {
          const amount = ethers.utils.parseEther("1");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await instanceVesting["addVesting(address,uint8,uint64,uint64)"](
            addr1.address,
            VestingType.LINEAR,
            start,
            endTimestamp,
            {
              value: amount,
            }
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [start + 50]);

          const beforeBalance = await addr1.getBalance();
          const op = await instanceVesting.connect(addr1).claimVesting(0);
          expect(await addr1.getBalance()).to.be.equal(
            beforeBalance
              .add(amount.div(2))
              .sub(
                (await op.wait()).gasUsed.mul(
                  (await op.wait()).effectiveGasPrice
                )
              )
          );
          expect(
            await instanceVesting.getVesting(addr1.address, 0)
          ).to.deep.equal([
            amount,
            TypeOfToken.NATIVE,
            VestingType.LINEAR,
            ethers.constants.AddressZero,
            start,
            endTimestamp,
            amount.div(2),
          ]);
        });

        it("Should claim totally with multiple claims a native vesting", async () => {
          const amount = ethers.utils.parseEther("1");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await instanceVesting["addVesting(address,uint8,uint64,uint64)"](
            addr1.address,
            VestingType.LINEAR,
            start,
            endTimestamp,
            {
              value: amount,
            }
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [start + 50]);

          let beforeBalance = await addr1.getBalance();
          const op1 = await instanceVesting.connect(addr1).claimVesting(0);
          expect(await addr1.getBalance()).to.be.equal(
            beforeBalance
              .add(amount.div(10).mul(5))
              .sub(
                (await op1.wait()).gasUsed.mul(
                  (await op1.wait()).effectiveGasPrice
                )
              )
          );
          expect(
            await instanceVesting.getVesting(addr1.address, 0)
          ).to.deep.equal([
            amount,
            TypeOfToken.NATIVE,
            VestingType.LINEAR,
            ethers.constants.AddressZero,
            start,
            endTimestamp,
            amount.div(10).mul(5),
          ]);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start + 70]);

          beforeBalance = await addr1.getBalance();
          const op2 = await instanceVesting.connect(addr1).claimVesting(0);
          expect(await addr1.getBalance()).to.be.equal(
            beforeBalance
              .add(amount.div(10).mul(2))
              .sub(
                (await op2.wait()).gasUsed.mul(
                  (await op2.wait()).effectiveGasPrice
                )
              )
          );
          expect(
            await instanceVesting.getVesting(addr1.address, 0)
          ).to.deep.equal([
            amount,
            TypeOfToken.NATIVE,
            VestingType.LINEAR,
            ethers.constants.AddressZero,
            start,
            endTimestamp,
            amount.div(10).mul(7),
          ]);

          await ethers.provider.send("evm_setNextBlockTimestamp", [
            endTimestamp,
          ]);

          beforeBalance = await addr1.getBalance();
          const op3 = await instanceVesting.connect(addr1).claimVesting(0);
          expect(await addr1.getBalance()).to.be.equal(
            beforeBalance
              .add(amount.div(10).mul(3))
              .sub(
                (await op3.wait()).gasUsed.mul(
                  (await op3.wait()).effectiveGasPrice
                )
              )
          );
          await expect(
            instanceVesting.getVesting(addr1.address, 0)
          ).to.be.revertedWith("Vesting doesn't exist");
        });

        it("Should claim totally with a single claim a native vesting", async () => {
          const amount = ethers.utils.parseEther("1");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await instanceVesting["addVesting(address,uint8,uint64,uint64)"](
            addr1.address,
            VestingType.LINEAR,
            start,
            endTimestamp,
            {
              value: amount,
            }
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [
            endTimestamp,
          ]);

          const beforeBalance = await addr1.getBalance();
          const op = await instanceVesting.connect(addr1).claimVesting(0);
          expect(await addr1.getBalance()).to.be.equal(
            beforeBalance
              .add(amount)
              .sub(
                (await op.wait()).gasUsed.mul(
                  (await op.wait()).effectiveGasPrice
                )
              )
          );
          await expect(
            instanceVesting.getVesting(addr1.address, 0)
          ).to.be.revertedWith("Vesting doesn't exist");
        });
      });

      describe("Claim all native vesting", () => {
        it("Should claim all the vestings at the end", async () => {
          const amount = ethers.utils.parseEther("1000");
          const amount2 = ethers.utils.parseEther("1");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
          await instanceVesting["addVesting(address,uint8,uint64,uint64)"](
            addr1.address,
            VestingType.LINEAR,
            start,
            endTimestamp,
            {
              value: amount,
            }
          );
          await ethers.provider.send("evm_setNextBlockTimestamp", [start + 1]);
          await instanceVesting["addVesting(address,uint8,uint64,uint64)"](
            addr1.address,
            VestingType.LINEAR,
            start + 1,
            endTimestamp,
            {
              value: amount2,
            }
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [
            endTimestamp,
          ]);

          const beforeBalance = await addr1.getBalance();
          const tx = await instanceVesting.connect(addr1).claimAllVestings();
          const receipt = await tx.wait();
          expect(await addr1.getBalance()).to.be.equal(
            beforeBalance
              .add(amount.add(amount2))
              .sub(receipt.gasUsed.mul(receipt.effectiveGasPrice))
          );
        });

        it("Should claim all native vestings one finished and the other not", async () => {
          const amount = ethers.utils.parseEther("1000");
          const amount2 = ethers.utils.parseEther("1");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;
          const endTimestamp2 = start + 1000;

          await ethers.provider.send("evm_setAutomine", [false]);
          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
          await instanceVesting["addVesting(address,uint8,uint64,uint64)"](
            addr1.address,
            VestingType.LINEAR,
            start,
            endTimestamp,
            {
              value: amount,
            }
          );
          await instanceVesting["addVesting(address,uint8,uint64,uint64)"](
            addr1.address,
            VestingType.LINEAR,
            start,
            endTimestamp2,
            {
              value: amount2,
            }
          );

          await ethers.provider.send("evm_mine", []);
          await ethers.provider.send("evm_setAutomine", [true]);
          await ethers.provider.send("evm_setNextBlockTimestamp", [
            endTimestamp,
          ]);

          const beforeBalance = await addr1.getBalance();
          const tx = await instanceVesting.connect(addr1).claimAllVestings();
          const receipt = await tx.wait();
          expect(await addr1.getBalance()).to.be.equal(
            beforeBalance
              .add(amount)
              .add(ethers.utils.parseEther("0.1"))
              .sub(receipt.gasUsed.mul(receipt.effectiveGasPrice))
          );
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
        it("Shouldn't add a token vesting if the vested amount is 0", async () => {
          const amount = ethers.utils.parseEther("0");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await instanceToken.approve(instanceVesting.address, amount);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "addVesting(address,address,uint8,uint64,uint64,uint256)"
            ](
              addr1.address,
              instanceToken.address,
              VestingType.LINEAR,
              start,
              endTimestamp,
              amount
            )
          ).to.be.revertedWith("Amount is insufficent");
        });

        it("Shouldn't add a token vesting if start is in the past", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await instanceToken.approve(instanceVesting.address, amount);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "addVesting(address,address,uint8,uint64,uint64,uint256)"
            ](
              addr1.address,
              instanceToken.address,
              VestingType.LINEAR,
              start - 1,
              endTimestamp,
              amount
            )
          ).to.be.revertedWith("Start timestamp is in the past");
        });

        it("Shouldn't add a token vesting if start is after end", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start - 1;

          await instanceToken.approve(instanceVesting.address, amount);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "addVesting(address,address,uint8,uint64,uint64,uint256)"
            ](
              addr1.address,
              instanceToken.address,
              VestingType.LINEAR,
              start,
              endTimestamp,
              amount
            )
          ).to.be.revertedWith("Start timestamp is after end timestamp");
        });

        it("Shouldn't add a token vesting if beneficiary is invalid", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await instanceToken.approve(instanceVesting.address, amount);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "addVesting(address,address,uint8,uint64,uint64,uint256)"
            ](
              ethers.constants.AddressZero,
              instanceToken.address,
              VestingType.LINEAR,
              start,
              endTimestamp,
              amount
            )
          ).to.be.revertedWith("Beneficiary is invalid");
        });

        it("Shouldn't add a token vesting if not enough allowance", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await instanceToken.approve(instanceVesting.address, amount.sub(1));

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "addVesting(address,address,uint8,uint64,uint64,uint256)"
            ](
              addr1.address,
              instanceToken.address,
              VestingType.LINEAR,
              start,
              endTimestamp,
              amount
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
            instanceVesting[
              "addVesting(address,address,uint8,uint64,uint64,uint256)"
            ](
              addr1.address,
              instanceToken.address,
              VestingType.LINEAR,
              start,
              endTimestamp,
              amount
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
          await instanceVesting[
            "addVesting(address,address,uint8,uint64,uint64,uint256)"
          ](
            addr1.address,
            instanceToken.address,
            VestingType.LINEAR,
            start1,
            endTimestamp1,
            amount1
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [start2]);
          await instanceVesting[
            "addVesting(address,address,uint8,uint64,uint64,uint256)"
          ](
            addr1.address,
            instanceToken.address,
            VestingType.LINEAR,
            start2,
            endTimestamp2,
            amount2
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [start3]);
          await instanceVesting[
            "addVesting(address,address,uint8,uint64,uint64,uint256)"
          ](
            addr2.address,
            instanceToken.address,
            VestingType.LINEAR,
            start3,
            endTimestamp3,
            amount3
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
            VestingType.LINEAR,
            instanceToken.address,
            BigNumber.from(start1),
            BigNumber.from(endTimestamp1),
            BigNumber.from("0"),
          ];
          const awaitedVesting2 = [
            amount2,
            TypeOfToken.TOKEN,
            VestingType.LINEAR,
            instanceToken.address,
            BigNumber.from(start2),
            BigNumber.from(endTimestamp2),
            BigNumber.from("0"),
          ];
          const awaitedVesting3 = [
            amount3,
            TypeOfToken.TOKEN,
            VestingType.LINEAR,
            instanceToken.address,
            BigNumber.from(start3),
            BigNumber.from(endTimestamp3),
            BigNumber.from("0"),
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

      describe("Batch add a new vesting", () => {
        it("Shouldn't batch add native vesting if not same length of args", async () => {
          const amount = ethers.utils.parseEther("0.1");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await instanceToken.approve(instanceVesting.address, amount);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "batchAddVesting(address,address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              instanceToken.address,
              VestingType.LINEAR,
              [start, start],
              [endTimestamp],
              [amount]
            )
          ).to.be.revertedWith("Invalid array length");
          await expect(
            instanceVesting[
              "batchAddVesting(address,address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              instanceToken.address,
              VestingType.LINEAR,
              [start],
              [endTimestamp],
              [amount, amount]
            )
          ).to.be.revertedWith("Invalid array length");
          await expect(
            instanceVesting[
              "batchAddVesting(address,address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              instanceToken.address,
              VestingType.LINEAR,
              [start],
              [endTimestamp, endTimestamp],
              [amount]
            )
          ).to.be.revertedWith("Invalid array length");
        });

        it("Shouldn't batch add token vestings if the vested amount is 0", async () => {
          const amount = ethers.utils.parseEther("0");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await instanceToken.approve(instanceVesting.address, amount);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "batchAddVesting(address,address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              instanceToken.address,
              VestingType.LINEAR,
              [start],
              [endTimestamp],
              [amount]
            )
          ).to.be.revertedWith("Amount is insufficent");
        });

        it("Shouldn't batch add token vestings if start is in the past", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await instanceToken.approve(instanceVesting.address, amount);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "batchAddVesting(address,address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              instanceToken.address,
              VestingType.LINEAR,
              [start - 1],
              [endTimestamp],
              [amount]
            )
          ).to.be.revertedWith("Start timestamp is in the past");
        });

        it("Shouldn't batch add token vestings if start is after end", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start - 1;

          await instanceToken.approve(instanceVesting.address, amount);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "batchAddVesting(address,address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              instanceToken.address,
              VestingType.LINEAR,
              [start],
              [endTimestamp],
              [amount]
            )
          ).to.be.revertedWith("Start timestamp is after end timestamp");
        });

        it("Shouldn't batch add token vestings if beneficiary is invalid", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await instanceToken.approve(instanceVesting.address, amount);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "batchAddVesting(address,address,uint8,uint64[],uint64[],uint256[])"
            ](
              ethers.constants.AddressZero,
              instanceToken.address,
              VestingType.LINEAR,
              [start],
              [endTimestamp],
              [amount]
            )
          ).to.be.revertedWith("Beneficiary is invalid");
        });

        it("Shouldn't batch add token vestings if not enough allowance", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await instanceToken.approve(instanceVesting.address, amount.sub(1));

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "batchAddVesting(address,address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              instanceToken.address,
              VestingType.LINEAR,
              [start],
              [endTimestamp],
              [amount]
            )
          ).to.be.revertedWith("Not enough allowance");
        });

        it("Shouldn't batch add token vestings if not enough balance", async () => {
          const amount = "1000000000000000000000000001";
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await instanceToken.approve(instanceVesting.address, amount);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await expect(
            instanceVesting[
              "batchAddVesting(address,address,uint8,uint64[],uint64[],uint256[])"
            ](
              addr1.address,
              instanceToken.address,
              VestingType.LINEAR,
              [start],
              [endTimestamp],
              [amount]
            )
          ).to.be.revertedWith("Not enough balance");
        });

        it("Should batch add successfully token vestings", async () => {
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
          await instanceVesting[
            "batchAddVesting(address,address,uint8,uint64[],uint64[],uint256[])"
          ](
            addr1.address,
            instanceToken.address,
            VestingType.LINEAR,
            [start1, start2],
            [endTimestamp1, endTimestamp2],
            [amount1, amount2]
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [start3]);
          await instanceVesting[
            "batchAddVesting(address,address,uint8,uint64[],uint64[],uint256[])"
          ](
            addr2.address,
            instanceToken.address,
            VestingType.LINEAR,
            [start3],
            [endTimestamp3],
            [amount3]
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
            VestingType.LINEAR,
            instanceToken.address,
            BigNumber.from(start1),
            BigNumber.from(endTimestamp1),
            BigNumber.from("0"),
          ];
          const awaitedVesting2 = [
            amount2,
            TypeOfToken.TOKEN,
            VestingType.LINEAR,
            instanceToken.address,
            BigNumber.from(start2),
            BigNumber.from(endTimestamp2),
            BigNumber.from("0"),
          ];
          const awaitedVesting3 = [
            amount3,
            TypeOfToken.TOKEN,
            VestingType.LINEAR,
            instanceToken.address,
            BigNumber.from(start3),
            BigNumber.from(endTimestamp3),
            BigNumber.from("0"),
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

        it("Shouldn't claim a token vesting before the start", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 10000;

          await instanceToken.approve(instanceVesting.address, amount);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
          await instanceVesting[
            "addVesting(address,address,uint8,uint64,uint64,uint256)"
          ](
            addr1.address,
            instanceToken.address,
            VestingType.LINEAR,
            start + 100,
            endTimestamp,
            amount
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [start + 1]);
          await expect(
            instanceVesting.connect(addr1).claimVesting(0)
          ).to.be.revertedWith("VestingAmount is zero");
        });

        it("Shouldn't claim zero token vesting", async () => {
          const amount = ethers.utils.parseEther("1000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await instanceToken.approve(instanceVesting.address, amount);

          await ethers.provider.send("evm_setAutomine", [false]);
          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
          await instanceVesting[
            "addVesting(address,address,uint8,uint64,uint64,uint256)"
          ](
            addr1.address,
            instanceToken.address,
            VestingType.LINEAR,
            start,
            endTimestamp,
            amount
          );

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
          await instanceVesting[
            "addVesting(address,address,uint8,uint64,uint64,uint256)"
          ](
            addr1.address,
            instanceToken.address,
            VestingType.LINEAR,
            start,
            endTimestamp,
            amount
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [
            endTimestamp,
          ]);

          await instanceVesting.connect(addr1).claimVesting(0);

          await expect(
            instanceVesting.connect(addr1).claimVesting(0)
          ).to.be.revertedWith("Vesting doesn't exist");
        });

        it("Should claim partially a token vesting", async () => {
          const amount = ethers.utils.parseEther("1");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await instanceToken.approve(instanceVesting.address, amount);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await instanceVesting[
            "addVesting(address,address,uint8,uint64,uint64,uint256)"
          ](
            addr1.address,
            instanceToken.address,
            VestingType.LINEAR,
            start,
            endTimestamp,
            amount
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [start + 50]);

          const beforeBalance = await instanceToken.balanceOf(addr1.address);
          await instanceVesting.connect(addr1).claimVesting(0);
          expect(await instanceToken.balanceOf(addr1.address)).to.be.equal(
            beforeBalance.add(amount.div(2))
          );
          expect(
            await instanceVesting.getVesting(addr1.address, 0)
          ).to.deep.equal([
            amount,
            TypeOfToken.TOKEN,
            VestingType.LINEAR,
            instanceToken.address,
            start,
            endTimestamp,
            amount.div(2),
          ]);
        });

        it("Should claim totally with multiple claims a token vesting", async () => {
          const amount = ethers.utils.parseEther("1");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await instanceToken.approve(instanceVesting.address, amount);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await instanceVesting[
            "addVesting(address,address,uint8,uint64,uint64,uint256)"
          ](
            addr1.address,
            instanceToken.address,
            VestingType.LINEAR,
            start,
            endTimestamp,
            amount
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [start + 50]);

          let beforeBalance = await instanceToken.balanceOf(addr1.address);
          await instanceVesting.connect(addr1).claimVesting(0);
          expect(await instanceToken.balanceOf(addr1.address)).to.be.equal(
            beforeBalance.add(amount.div(10).mul(5))
          );
          expect(
            await instanceVesting.getVesting(addr1.address, 0)
          ).to.deep.equal([
            amount,
            TypeOfToken.TOKEN,
            VestingType.LINEAR,
            instanceToken.address,
            start,
            endTimestamp,
            amount.div(10).mul(5),
          ]);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start + 70]);

          beforeBalance = await instanceToken.balanceOf(addr1.address);
          await instanceVesting.connect(addr1).claimVesting(0);
          expect(await instanceToken.balanceOf(addr1.address)).to.be.equal(
            beforeBalance.add(amount.div(10).mul(2))
          );
          expect(
            await instanceVesting.getVesting(addr1.address, 0)
          ).to.deep.equal([
            amount,
            TypeOfToken.TOKEN,
            VestingType.LINEAR,
            instanceToken.address,
            start,
            endTimestamp,
            amount.div(10).mul(7),
          ]);

          await ethers.provider.send("evm_setNextBlockTimestamp", [
            endTimestamp,
          ]);

          beforeBalance = await instanceToken.balanceOf(addr1.address);
          await instanceVesting.connect(addr1).claimVesting(0);
          expect(await instanceToken.balanceOf(addr1.address)).to.be.equal(
            beforeBalance.add(amount.div(10).mul(3))
          );
          await expect(
            instanceVesting.getVesting(addr1.address, 0)
          ).to.be.revertedWith("Vesting doesn't exist");
        });

        it("Should claim totally with a single claim a token vesting", async () => {
          const amount = ethers.utils.parseEther("1");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await instanceToken.approve(instanceVesting.address, amount);

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

          await instanceVesting[
            "addVesting(address,address,uint8,uint64,uint64,uint256)"
          ](
            addr1.address,
            instanceToken.address,
            VestingType.LINEAR,
            start,
            endTimestamp,
            amount
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [
            endTimestamp,
          ]);

          const beforeBalance = await instanceToken.balanceOf(addr1.address);
          await instanceVesting.connect(addr1).claimVesting(0);
          expect(await instanceToken.balanceOf(addr1.address)).to.be.equal(
            beforeBalance.add(amount)
          );
          await expect(
            instanceVesting.getVesting(addr1.address, 0)
          ).to.be.revertedWith("Vesting doesn't exist");
        });
      });
      describe("Claim all token vesting", () => {
        it("Should claim all token vestings at the end", async () => {
          const amount = ethers.utils.parseEther("1000");
          const amount2 = ethers.utils.parseEther("10000");
          const start = (now.valueOf() / 1000) | 0;
          const endTimestamp = start + 100;

          await instanceToken.approve(
            instanceVesting.address,
            amount.add(amount2)
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
          await instanceVesting[
            "addVesting(address,address,uint8,uint64,uint64,uint256)"
          ](
            addr1.address,
            instanceToken.address,
            VestingType.LINEAR,
            start,
            endTimestamp,
            amount
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [start + 1]);
          await instanceVesting[
            "addVesting(address,address,uint8,uint64,uint64,uint256)"
          ](
            addr1.address,
            instanceToken.address,
            VestingType.LINEAR,
            start + 1,
            endTimestamp,
            amount2
          );

          await ethers.provider.send("evm_setNextBlockTimestamp", [
            endTimestamp,
          ]);

          const beforeBalance = await instanceToken.balanceOf(addr1.address);
          await instanceVesting.connect(addr1).claimAllVestings();
          expect(await instanceToken.balanceOf(addr1.address)).to.equal(
            beforeBalance.add(amount.add(amount2))
          );
        });

        it("Should claim all token vestings one finished and the other not", async () => {
          const amount = ethers.utils.parseEther("1000");
          const amount2 = ethers.utils.parseEther("1");
          const start = now.valueOf();
          const endTimestamp = start + 100;
          const endTimestamp2 = start + 1000;

          await instanceToken.approve(
            instanceVesting.address,
            amount.add(amount2)
          );

          await ethers.provider.send("evm_setAutomine", [false]);
          await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
          await instanceVesting[
            "addVesting(address,address,uint8,uint64,uint64,uint256)"
          ](
            addr1.address,
            instanceToken.address,
            VestingType.LINEAR,
            start,
            endTimestamp,
            amount
          );

          await instanceVesting[
            "addVesting(address,address,uint8,uint64,uint64,uint256)"
          ](
            addr1.address,
            instanceToken.address,
            VestingType.LINEAR,
            start,
            endTimestamp2,
            amount2
          );

          await ethers.provider.send("evm_mine", []);
          await ethers.provider.send("evm_setAutomine", [true]);
          await ethers.provider.send("evm_setNextBlockTimestamp", [
            endTimestamp,
          ]);

          const beforeBalance = await instanceToken.balanceOf(addr1.address);
          await instanceVesting.connect(addr1).claimAllVestings();
          expect(await instanceToken.balanceOf(addr1.address)).to.equal(
            beforeBalance.add(amount).add(ethers.utils.parseEther("0.1"))
          );
        });
      });
    });
  });
});
