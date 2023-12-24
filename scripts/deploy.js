const { ethers } = require("hardhat");

async function main() {
  // Deploy the Voting contract
  const Voting = await ethers.getContractFactory("Voting");
  const votingInstance = await Voting.deploy();

  // Wait for deployment
  await votingInstance.deployed();

  console.log(`Contract address: ${votingInstance.address}`);
}

// Execute the main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
