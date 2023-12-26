const { ethers } = require("ethers");

async function main() {
  try {
    // Connect to the local Ethereum network
    const provider = new ethers.providers.JsonRpcProvider("https://volta-rpc.energyweb.org/");

    // Set the default wallet with a private key (replace with your private key)
    const privateKey = "0x300de365cb6cb4ecdae7aaa6d15c5ef0107731fcc9c8d848833fcf6c07c987ff";
    const wallet = new ethers.Wallet(privateKey, provider);

    // Deploy the Voting contract
    const Voting = await ethers.getContractFactory("Voting");
    console.log(ethers)
    console.log("Voting contract bytecode:", Voting.bytecode); // Log bytecode
    const votingInstance = await Voting.deploy(["Mark", "Mike", "Gideon"], 20);

    // Wait for deployment
    await votingInstance.deployed();

    console.log(`Contract address: ${votingInstance.address}`);
  } catch (error) {
    console.error(error);
  }
}

// Execute the main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
