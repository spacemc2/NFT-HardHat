require("@nomicfoundation/hardhat-toolbox");

// dotenv reads the `.env` file and makes it available to the NodeJS Environment
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    // Define the sepolia network parameters here
    sepolia: {
      url: process.env.QUICKNODE_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
