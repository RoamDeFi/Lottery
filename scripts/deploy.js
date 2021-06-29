
// This is a script for deploying contracts. 
// You can adapt it to deploy or create anew.

async function main() {

  let frequency = 1;
  let price = ethers.utils.parseEther("1");
  let fee = ethers.utils.parseEther("0.03");
  let name = "Roam Fantom Lottery";
  let recipient = '0x19FF17645bd4930745e632284422555466675e44';
  let modulus = 2;

  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is avaialble in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Lotto = await ethers.getContractFactory("FantomLottery");
  const lottery = await Lotto.deploy(name, frequency, ethers.utils.parseEther("1"), modulus, ethers.utils.parseEther("0.03"), recipient);

  await lottery.deployed();

  console.log("Lotto address:", lottery.address);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(lottery);
}

function saveFrontendFiles(lotto) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify({ Lotto: lotto.address }, undefined, 2)
  );

  const LottoArtifact = artifacts.readArtifactSync("FantomLottery");

  fs.writeFileSync(
    __dirname + "/../src/artifacts/contracts/FantomLottery.sol/FantomLottery.json",
    JSON.stringify(LottoArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
