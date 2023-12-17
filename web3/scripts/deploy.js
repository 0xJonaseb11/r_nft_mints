
const hre = require("hardhat");

async function main() {

  const FiredGuys = await hre.ethers.getContractFactory('FiredGuys');
  const firedGuys = await FiredGuys.deploy();

  await firedGuys.deployed();
  
  console.log('FiredGuys deployed to: ', firedGuys.address);

}

main()
  .