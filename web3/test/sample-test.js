const { expect }  = require("chai");
const { ethers } = require("hardhat");

describe("FiredGuys", function () {
    it("Should mint and transfer an NFT to someone", async function () {
        const FiredGuys = await ethers.getContractFactory("FiredGuys")
        const firedGuys = await FiredGuys.deploy();
        
        await firedGuys.deployed();

        const recipient = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
        const metadataURI = 'cid/test.png';

        let balance =  await firedGuys.balanceOf(recipient);
        // when user purchased any nft
        expect(balance).to.equal(0);

        const newlyMintedToken = await firedGuys.payToMint(recipient, metadataURI, {value: ethers.utils.parseEther('0.05')});
        
        // wait until the transaction is fully mined
        await newlyMintedToken.wait();
        expect(balance).to.equal(1);

        expect(await firedGuys.isContentOwned(metadataURI)).to.equal(true);
        


    });
});