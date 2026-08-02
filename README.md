# Confidential Payroll

## Selected Bounty
Private applications built with Flare Confidential Compute

## Short Product Description
Confidential Payroll is an application designed for Web3 organizations and DAOs to distribute employee compensation securely. While the total payroll output from the treasury is public, individual salary amounts and recipient addresses remain entirely confidential.

## Target User
Web3 companies, DAOs, and crypto-native organizations who need to pay their contributors without broadcasting compensation details to the world.

## Demo Link / Working App
*(Note for submission: Add your deployed Vercel link here, or a link to a Loom video demonstrating the UI).* 
To run the demo locally:
1. `cd frontend`
2. `npm install`
3. `npm run dev`

## GitHub Repo
*(Note for submission: Add your public GitHub repository link here).*

## Explanation of how the project uses Flare
The smart contract `ConfidentialPayroll.sol` acts as the treasury holding the funds. A Flare Confidential Compute (TEE) enclave securely decrypts payroll instructions off-chain, calculates the individual payouts, and calls the `executeConfidentialBatch` function to distribute the tokens. This ensures the inputs (individual salaries) are never exposed on-chain.

## What was newly built, ported, integrated, or improved
- **Smart Contracts**: `ConfidentialPayroll.sol` was ported and heavily optimized to integrate with the Flare Confidential Compute ecosystem.
- **Frontend**: A completely new, modern UI was built from scratch for employers to initiate payroll batches securely using React, Vite, and React-Router.
- **Integration Architecture**: Designed the precise TEE integration flow for Flare Confidential Compute.

## Smart Contract Addresses
*(Note for submission: Once you run the deployment script, paste your deployed contract addresses here).*
- **Flare Coston2 Testnet**: `[To be deployed]`
- **MOCK_PAYROLL_TOKEN**: `0x0000000000000000000000000000000000000001`
- **MOCK_TEE_RELAYER**: `0x0000000000000000000000000000000000000002`

## Short Roadmap / Next Steps
1. Deploy on Coston2 testnet and integrate with a live Flare Confidential Compute enclave.
2. Complete the employee dashboard for viewing payment history.
3. **Confidential AI Integration**: Leverage AI models running *inside* the Flare TEE to analyze encrypted payroll data. The AI can detect payroll fraud, flag unusual salary spikes, and generate private financial burn-rate reports for DAO admins—all without exposing the raw salary data to the public.
4. Test end-to-end with real DAO pilot users.
5. Mainnet deployment on Flare.
