import { useState } from 'react';

const Settings = () => {
  const [teeRelayer, setTeeRelayer] = useState('0x1234...abcd');

  return (
    <div style={{ maxWidth: '600px' }}>
      <div className="page-header">
        <h1>Contract Settings</h1>
        <p>Manage the smart contract configurations and TEE Relayer.</p>
      </div>
      
      <div className="dashboard-card">
        <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '1.25rem', fontWeight: 500 }}>TEE Relayer Configuration</h3>
        
        <div className="input-group">
          <label>Authorized Enclave Address</label>
          <input 
            type="text" 
            value={teeRelayer}
            onChange={(e) => setTeeRelayer(e.target.value)}
          />
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          This is the address of the trusted Flare Confidential Compute enclave. Only this address can execute the payroll batch.
        </p>

        <button className="execute-btn" style={{ width: 'auto', padding: '0.75rem 1.5rem', fontSize: '1rem' }}>
          Update Relayer
        </button>
      </div>
    </div>
  );
};

export default Settings;
