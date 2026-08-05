// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title ConfidentialPayroll
 * @dev A smart contract that interfaces with Flare Confidential Compute (TEE)
 * to process private payroll distributions.
 */
contract ConfidentialPayroll is Ownable {
    address public teeRelayer; // The trusted TEE execution enclave

    event PayoutExecuted(uint256 totalAmount, uint256 recipientCount);
    event EnclaveUpdated(address newEnclave);
    
    modifier onlyTEEEnclave() {
        require(msg.sender == teeRelayer, "Only TEE Enclave can execute");
        _;
    }

    constructor(address _teeRelayer) Ownable(msg.sender) {
        teeRelayer = _teeRelayer;
    }

    /**
     * @dev Admin funds the payroll contract
     */
    function depositPayroll() external payable onlyOwner {
        require(msg.value > 0, "Must send FLR");
    }

    /**
     * @dev The TEE enclave calls this function after decrypting 
     * the payroll instructions off-chain and calculating individual amounts.
     * It executes the batch transfer securely without revealing the inputs.
     * 
     * @param recipients Array of recipient addresses
     * @param amounts Array of amounts to distribute
     */
    function executeConfidentialBatch(address[] calldata recipients, uint256[] calldata amounts) external onlyTEEEnclave {
        require(recipients.length == amounts.length, "Mismatched arrays");
        
        uint256 totalDistributed = 0;

        for (uint256 i = 0; i < recipients.length; i++) {
            (bool success, ) = recipients[i].call{value: amounts[i]}("");
            require(success, "Transfer failed");
            totalDistributed += amounts[i];
        }

        emit PayoutExecuted(totalDistributed, recipients.length);
    }

    /**
     * @dev Allows owner to update the TEE Relayer address
     */
    function setTEERelayer(address _teeRelayer) external onlyOwner {
        teeRelayer = _teeRelayer;
        emit EnclaveUpdated(_teeRelayer);
    }
}
