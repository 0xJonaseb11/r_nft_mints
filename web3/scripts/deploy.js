
const hre = require("hardhat");

async function main() {

  const FiredGuys = await hre.ethers.getContractFactory('FiredGuys');
  const firedGuys = await FiredGuys.deploy();

  await firedGuys.deployed();
  
  console.log('FiredGuys deployed to: ', firedGuys.address);

}

const runMain = async () => {
  try {
    await main();
    process.exit(0)
  } catch (error) {
    process.exit(1);
    console.error(error);
  }
}
  
runMain();