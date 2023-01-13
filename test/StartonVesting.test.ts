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
    it("Should deploy the contract", async () => { });

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
          instanceVesting["addVesting(address,uint64,uint64)"](
            addr1.address,
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
          instanceVesting["addVesting(address,uint64,uint64)"](
            addr1.address,
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
          instanceVesting["addVesting(address,uint64,uint64)"](
            addr1.address,
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
          instanceVesting["addVesting(address,uint64,uint64)"](
            "0x0000000000000000000000000000000000000000",
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
        await instanceVesting["addVesting(address,uint64,uint64)"](
          addr1.address,
          start1,
          endTimestamp1,
          {
            value: amount1,
          }
        );

        await ethers.provider.send("evm_setNextBlockTimestamp", [start2]);
        await instanceVesting["addVesting(address,uint64,uint64)"](
          addr1.address,
          start2,
          endTimestamp2,
          {
            value: amount2,
          }
        );

        await ethers.provider.send("evm_setNextBlockTimestamp", [start3]);
        await instanceVesting["addVesting(address,uint64,uint64)"](
          addr2.address,
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

    describe("Batch add new vestings", () => {
      it("Shouldn't batch add native vesting if not same length of args", async () => {
        const amount = ethers.utils.parseEther("0.1");
        const start = (now.valueOf() / 1000) | 0;
        const endTimestamp = start + 100;

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

        await expect(
          instanceVesting[
            "addBatchVesting(address,uint64[],uint64[],uint256[])"
          ](addr1.address, [start, start], [endTimestamp], [amount], {
            value: amount,
          })
        ).to.be.revertedWith("Invalid array length");
        await expect(
          instanceVesting[
            "addBatchVesting(address,uint64[],uint64[],uint256[])"
          ](addr1.address, [start], [endTimestamp], [amount, amount], {
            value: amount,
          })
        ).to.be.revertedWith("Invalid array length");
        await expect(
          instanceVesting[
            "addBatchVesting(address,uint64[],uint64[],uint256[])"
          ](addr1.address, [start], [endTimestamp, endTimestamp], [amount], {
            value: amount,
          })
        ).to.be.revertedWith("Invalid array length");
      });

      it("Shouldn't batch add native vesting if not enough native tokens", async () => {
        const amount = ethers.utils.parseEther("0.1");
        const start = (now.valueOf() / 1000) | 0;
        const endTimestamp = start + 100;

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

        await expect(
          instanceVesting[
            "addBatchVesting(address,uint64[],uint64[],uint256[])"
          ](
            addr1.address,
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
            "addBatchVesting(address,uint64[],uint64[],uint256[])"
          ](
            addr1.address,
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
            "addBatchVesting(address,uint64[],uint64[],uint256[])"
          ](
            addr1.address,
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
            "addBatchVesting(address,uint64[],uint64[],uint256[])"
          ](
            addr1.address,
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
            "addBatchVesting(address,uint64[],uint64[],uint256[])"
          ](
            "0x0000000000000000000000000000000000000000",
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
          "addBatchVesting(address,uint64[],uint64[],uint256[])"
        ](
          addr1.address,
          [start1, start2],
          [endTimestamp1, endTimestamp2],
          [amount1, amount2],
          {
            value: amount1.add(amount2),
          }
        );

        await ethers.provider.send("evm_setNextBlockTimestamp", [start3]);
        await instanceVesting[
          "addBatchVesting(address,uint64[],uint64[],uint256[])"
        ](addr2.address, [start3], [endTimestamp3], [amount3], {
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
        await instanceVesting["addVesting(address,uint64,uint64)"](
          addr1.address,
          start,
          endTimestamp,
          {
            value: amount,
          }
        );

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
        await instanceVesting["addVesting(address,uint64,uint64)"](
          addr1.address,
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
        await instanceVesting["addVesting(address,uint64,uint64)"](
          addr1.address,
          start,
          endTimestamp,
          {
            value: amount,
          }
        );

        await ethers.provider.send("evm_setNextBlockTimestamp", [endTimestamp]);

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
        await instanceVesting["addVesting(address,uint64,uint64)"](
          addr1.address,
          start,
          endTimestamp,
          {
            value: amount,
          }
        );
        await ethers.provider.send("evm_setNextBlockTimestamp", [start + 1]);
        await instanceVesting["addVesting(address,uint64,uint64)"](
          addr1.address,
          start + 1,
          endTimestamp,
          {
            value: amount2,
          }
        );

        await ethers.provider.send("evm_setNextBlockTimestamp", [endTimestamp]);

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
        await instanceVesting["addVesting(address,uint64,uint64)"](
          addr1.address,
          start,
          endTimestamp,
          {
            value: amount,
          }
        );
        await ethers.provider.send("evm_setNextBlockTimestamp", [start + 1]);
        await instanceVesting["addVesting(address,uint64,uint64)"](
          addr1.address,
          start + 1,
          endTimestamp2,
          {
            value: amount2,
          }
        );

        await ethers.provider.send("evm_setNextBlockTimestamp", [endTimestamp]);

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
          instanceVesting["addVesting(address,address,uint64,uint64,uint256)"](
            addr1.address,
            instanceToken.address,
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
          instanceVesting["addVesting(address,address,uint64,uint64,uint256)"](
            addr1.address,
            instanceToken.address,
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
          instanceVesting["addVesting(address,address,uint64,uint64,uint256)"](
            addr1.address,
            instanceToken.address,
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
          instanceVesting["addVesting(address,address,uint64,uint64,uint256)"](
            "0x0000000000000000000000000000000000000000",
            instanceToken.address,
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
          instanceVesting["addVesting(address,address,uint64,uint64,uint256)"](
            addr1.address,
            instanceToken.address,
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
          instanceVesting["addVesting(address,address,uint64,uint64,uint256)"](
            addr1.address,
            instanceToken.address,
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
          "addVesting(address,address,uint64,uint64,uint256)"
        ](addr1.address, instanceToken.address, start1, endTimestamp1, amount1);

        await ethers.provider.send("evm_setNextBlockTimestamp", [start2]);
        await instanceVesting[
          "addVesting(address,address,uint64,uint64,uint256)"
        ](addr1.address, instanceToken.address, start2, endTimestamp2, amount2);

        await ethers.provider.send("evm_setNextBlockTimestamp", [start3]);
        await instanceVesting[
          "addVesting(address,address,uint64,uint64,uint256)"
        ](addr2.address, instanceToken.address, start3, endTimestamp3, amount3);

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

    describe("Batch add a new vesting", () => {
      it("Shouldn't batch add native vesting if not same length of args", async () => {
        const amount = ethers.utils.parseEther("0.1");
        const start = (now.valueOf() / 1000) | 0;
        const endTimestamp = start + 100;

        await instanceToken.approve(instanceVesting.address, amount);

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);

        await expect(
          instanceVesting[
            "addBatchVesting(address,address,uint64[],uint64[],uint256[])"
          ](
            addr1.address,
            instanceToken.address,
            [start, start],
            [endTimestamp],
            [amount]
          )
        ).to.be.revertedWith("Invalid array length");
        await expect(
          instanceVesting[
            "addBatchVesting(address,address,uint64[],uint64[],uint256[])"
          ](
            addr1.address,
            instanceToken.address,
            [start],
            [endTimestamp],
            [amount, amount]
          )
        ).to.be.revertedWith("Invalid array length");
        await expect(
          instanceVesting[
            "addBatchVesting(address,address,uint64[],uint64[],uint256[])"
          ](
            addr1.address,
            instanceToken.address,
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
            "addBatchVesting(address,address,uint64[],uint64[],uint256[])"
          ](
            addr1.address,
            instanceToken.address,
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
            "addBatchVesting(address,address,uint64[],uint64[],uint256[])"
          ](
            addr1.address,
            instanceToken.address,
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
            "addBatchVesting(address,address,uint64[],uint64[],uint256[])"
          ](
            addr1.address,
            instanceToken.address,
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
            "addBatchVesting(address,address,uint64[],uint64[],uint256[])"
          ](
            "0x0000000000000000000000000000000000000000",
            instanceToken.address,
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
            "addBatchVesting(address,address,uint64[],uint64[],uint256[])"
          ](
            addr1.address,
            instanceToken.address,
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
            "addBatchVesting(address,address,uint64[],uint64[],uint256[])"
          ](
            addr1.address,
            instanceToken.address,
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
          "addBatchVesting(address,address,uint64[],uint64[],uint256[])"
        ](
          addr1.address,
          instanceToken.address,
          [start1, start2],
          [endTimestamp1, endTimestamp2],
          [amount1, amount2]
        );

        await ethers.provider.send("evm_setNextBlockTimestamp", [start3]);
        await instanceVesting[
          "addBatchVesting(address,address,uint64[],uint64[],uint256[])"
        ](
          addr2.address,
          instanceToken.address,
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
        await instanceVesting[
          "addVesting(address,address,uint64,uint64,uint256)"
        ](addr1.address, instanceToken.address, start, endTimestamp, amount);

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
          "addVesting(address,address,uint64,uint64,uint256)"
        ](addr1.address, instanceToken.address, start, endTimestamp, amount);

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
        await instanceVesting[
          "addVesting(address,address,uint64,uint64,uint256)"
        ](addr1.address, instanceToken.address, start, endTimestamp, amount);

        await ethers.provider.send("evm_setNextBlockTimestamp", [endTimestamp]);

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
          "addVesting(address,address,uint64,uint64,uint256)"
        ](addr1.address, instanceToken.address, start, endTimestamp, amount);

        await ethers.provider.send("evm_setNextBlockTimestamp", [start + 1]);
        await instanceVesting[
          "addVesting(address,address,uint64,uint64,uint256)"
        ](
          addr1.address,
          instanceToken.address,
          start + 1,
          endTimestamp,
          amount2
        );

        await ethers.provider.send("evm_setNextBlockTimestamp", [endTimestamp]);

        const beforeBalance = await instanceToken.balanceOf(addr1.address);
        await instanceVesting.connect(addr1).claimAllVestings();
        expect(await instanceToken.balanceOf(addr1.address)).to.equal(
          beforeBalance.add(amount.add(amount2))
        );
      });

      it("Should claim all token vestings one finished and the other not", async () => {
        const amount = ethers.utils.parseEther("1000");
        const amount2 = ethers.utils.parseEther("10000");
        const start = now.valueOf();
        const endTimestamp = start + 100;
        const endTimestamp2 = start + 1000;

        await instanceToken.approve(
          instanceVesting.address,
          amount.add(amount2)
        );

        await ethers.provider.send("evm_setNextBlockTimestamp", [start]);
        await instanceVesting[
          "addVesting(address,address,uint64,uint64,uint256)"
        ](addr1.address, instanceToken.address, start, endTimestamp, amount);

        await ethers.provider.send("evm_setNextBlockTimestamp", [start + 1]);
        await instanceVesting[
          "addVesting(address,address,uint64,uint64,uint256)"
        ](
          addr1.address,
          instanceToken.address,
          start + 1,
          endTimestamp2,
          amount2
        );

        await ethers.provider.send("evm_setNextBlockTimestamp", [endTimestamp]);

        const beforeBalance = await instanceToken.balanceOf(addr1.address);
        await instanceVesting.connect(addr1).claimAllVestings();
        expect(await instanceToken.balanceOf(addr1.address)).to.equal(
          beforeBalance.add(amount)
        );
      });
    });
  });
});
