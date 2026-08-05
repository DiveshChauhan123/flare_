import hre from "hardhat";

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer?.address);

  // You will need to replace this with the actual TEE Relayer address.
  const MOCK_TEE_RELAYER = "0x1a9C4A0f9D76c0b1D91d22E24E573a9b377618aE";

  console.log("Deploying ConfidentialPayroll...");
  const ConfidentialPayroll = await hre.ethers.getContractFactory("ConfidentialPayroll");
  const payroll = await ConfidentialPayroll.deploy(MOCK_TEE_RELAYER);

  await payroll.waitForDeployment();

  console.log("ConfidentialPayroll deployed to:", await payroll.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
