const hre = require("hardhat");

async function main() {
  
  const ArchetypesNFT = await hre.ethers.getContractFactory("ArchetypesNFT");
  const archetypesNFT = await ArchetypesNFT.deploy();

  await archetypesNFT.deployed();

  console.log("ArchetypesNFT deployed to:", archetypesNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
