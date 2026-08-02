// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title ConfidentialPayroll
 * @dev A smart contract that interfaces with Flare Confidential Compute (TEE)
 * to process private payroll distributions.
 */
contract ConfidentialPayroll is Ownable {
    IERC20 public payrollToken;
    address public teeRelayer; // The trusted TEE execution enclave

    event PayoutExecuted(uint256 totalAmount, uint256 recipientCount);
    event EnclaveUpdated(address newEnclave);
    
    modifier onlyTEEEnclave() {
        require(msg.sender == teeRelayer, "Only TEE Enclave can execute");
        _;
    }

    constructor(address _payrollToken, address _teeRelayer) Ownable(msg.sender) {
        payrollToken = IERC20(_payrollToken);
        teeRelayer = _teeRelayer;
    }

    /**
     * @dev Admin funds the payroll contract
     */
    function depositPayroll(uint256 amount) external onlyOwner {
        require(payrollToken.transferFrom(msg.sender, address(this), amount), "Transfer failed");
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
            require(payrollToken.transfer(recipients[i], amounts[i]), "Transfer failed");
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
