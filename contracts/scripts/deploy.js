import hre from "hardhat";

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer?.address);

  // You will need to replace this with the actual ERC20 token address 
  // you are using for payroll, and the actual TEE Relayer address.
  const MOCK_PAYROLL_TOKEN = "0x0000000000000000000000000000000000000001";
  const MOCK_TEE_RELAYER = "0x0000000000000000000000000000000000000002";

  console.log("Deploying ConfidentialPayroll...");
  const ConfidentialPayroll = await hre.ethers.getContractFactory("ConfidentialPayroll");
  const payroll = await ConfidentialPayroll.deploy(MOCK_PAYROLL_TOKEN, MOCK_TEE_RELAYER);

  await payroll.waitForDeployment();

  console.log("ConfidentialPayroll deployed to:", await payroll.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
