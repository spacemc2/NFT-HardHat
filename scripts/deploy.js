// Import the Hardhat package
const hre = require("hardhat");

async function main() {
  // Using `hre` - Hardhat Runtime Environment - we find and deploy
  // a contract named `NFTee`
  const nftContract = await hre.ethers.deployContract("NFTee");

  // We wait for the contract to finish deploying
  await nftContract.waitForDeployment();

  // We print the address of the deployed contract to our console
  console.log("NFT Contract Address:", nftContract.target);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
