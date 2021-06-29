/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");

require("./tasks/faucet");

module.exports = {
  solidity: "0.8.2",
  paths: {
    sources: "./contracts",
    tests: "./test",
    artifacts: "./src/artifacts"
  },
};
