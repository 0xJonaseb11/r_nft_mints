const { expect }  = require("chai");
const { ethers } = require("hardhat");

describe("FiredGuys", function () {
    it("Should mint and transfer an NFT to someone", async function () {
        const FiredGuys = await ethers.getContractFactory("FiredGuys")
        const firedGuys = await FiredGuys.deploy();
        
        await firedGuys.deployed();
    });
});