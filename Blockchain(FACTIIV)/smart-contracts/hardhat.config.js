require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const INFURA_API_KEY = process.env.INFURA_API_KEY;
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: `${INFURA_API_KEY}`,
      accounts: [`${RINKEBY_PRIVATE_KEY}`],
    },
  },
};
