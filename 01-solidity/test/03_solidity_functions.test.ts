import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("SolidityFunctions", function () {
  async function deploy() {
    const [account1] = await hre.ethers.getSigners();
    const SolidityFunctions = await hre.ethers.getContractFactory("SolidityFunctions");
    const INITIAL_BALANCE = 50_000;
    const ctcSolidityFunctions = await SolidityFunctions.deploy(INITIAL_BALANCE);
    return { ctcSolidityFunctions, account1 };
  }

  describe("Deployment", function () {
    it("01 CONSTRUCTOR EXECUTED", async function () {
      const { ctcSolidityFunctions } = await loadFixture(deploy);
      expect(ctcSolidityFunctions).not.to.be.undefined;
      //smartContract.function()
      const balance = await ctcSolidityFunctions.getBalance();
      console.log("initial balance is now ", balance);
    });
    
    it(" 02CONSTRUCTOR EXECUTED", async function () {
      const { ctcSolidityFunctions } = await loadFixture(deploy);
      expect(ctcSolidityFunctions).not.to.be.undefined;
      //smartContract.function()      
    });

    it("perform operations", async function () {
      const { ctcSolidityFunctions } = await loadFixture(deploy);
      await ctcSolidityFunctions.calculator(1,25_000);
       let balance = await ctcSolidityFunctions.getBalance();
       console.log("current balance ", balance);
      await ctcSolidityFunctions.calculator(2,25_000);
       balance = await ctcSolidityFunctions.getBalance();
       console.log("current balance ", balance);
      await ctcSolidityFunctions.calculator(3,25_000);
       balance = await ctcSolidityFunctions.getBalance();
       console.log("current balance ", balance);
      await ctcSolidityFunctions.calculator(4,25_000);
       balance = await ctcSolidityFunctions.getBalance();
      console.log("current balance ", balance);
    });
  });
});
