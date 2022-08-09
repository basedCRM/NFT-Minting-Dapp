const hre = require("hardhat");

async function main() {
  
  const ExsNFT = await hre.ethers.getContractFactory("ExsNFT");
  const exsNFT = await ExsNFT.deploy();

  await exsNFT.deployed();

  console.log("All of my Exs deployed to:", exsNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
