// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.

const path = require("path");

async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  /*const Token = await ethers.getContractFactory("BankingApp");
  const token = await Token.deploy();
  await token.deployed();*/
  const Token = await ethers.getContractFactory("Inheritum");
  const token = await Token.deploy();
  await token.deployed();
  console.log("Token address:", token.address);
  const BankContract = await ethers.getContractFactory("BankingApp");
  const bankContract = await BankContract.deploy(token.address,token.getOwner()); // give contract address as argument
  await bankContract.deployed();

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(token,1);
  saveFrontendFiles(bankContract,2);
}
// bu sayede deploy edilen contract ın abi(application binary interface frontende kaydediliyor)
function saveFrontendFiles(token,num) {
  const fs = require("fs");
  const contractsDir = path.join(__dirname, "..","..", "frontend", "src", "contracts");

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    path.join(contractsDir, "contract-address.json"),
    JSON.stringify({ Token: token.address }, undefined, 2)
  );

  const TokenArtifact = artifacts.readArtifactSync("BankingApp");

    if (num == 1) {
      fs.writeFileSync(    
        path.join(contractsDir, "Inheritum.json"),
        JSON.stringify(TokenArtifact, null, 2)
      );
    }else if (num == 2) {
      fs.writeFileSync(    
        path.join(contractsDir, "BankingApp.json"),
        JSON.stringify(TokenArtifact, null, 2)
      );
    }

 
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


  // npx hardhat run scripts/deploy.js --network name

