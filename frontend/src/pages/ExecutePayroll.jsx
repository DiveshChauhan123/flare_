import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ExecutePayroll = () => {
  const [amount, setAmount] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSelectClick = () => {
    fileInputRef.current?.click();
  };

  const handleExecute = () => {
    if (!selectedFile || !amount) {
      alert("Please enter an amount and upload the encrypted CSV.");
      return;
    }
    
    // Simulate smart contract execution and TEE processing
    setIsExecuting(true);
    
    setTimeout(() => {
      setIsExecuting(false);
      setIsSuccess(true);
      
      // Redirect to history after 2 seconds
      setTimeout(() => {
        navigate('/history');
      }, 2000);
    }, 3000);
  };

  return (
    <div style={{ maxWidth: '600px' }}>
      <div className="page-header">
        <h1>Execute Payroll Batch</h1>
        <p>Distribute payroll with zero-knowledge using Flare Confidential Compute.</p>
      </div>
      
      <div className="dashboard-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 500 }}>New Batch</h3>
          <span className="status-badge">TEE Secured</span>
        </div>
        
        {isSuccess ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
            <h2 style={{ color: '#2ecc71', margin: '0 0 1rem 0' }}>Batch Executed Successfully!</h2>
            <p style={{ color: 'var(--text-muted)' }}>The Flare TEE has processed the confidential payroll.</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Redirecting to History...</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="input-group">
              <label>Total Payroll Amount (FLR)</label>
              <input 
                type="number" 
                placeholder="0.00" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                disabled={isExecuting}
              />
            </div>

            <div 
              style={{
                border: '2px dashed var(--border-color)',
                borderRadius: '16px',
                padding: '2.5rem',
                textAlign: 'center',
                cursor: isExecuting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                backgroundColor: selectedFile ? 'rgba(255, 51, 102, 0.05)' : 'transparent',
                borderColor: selectedFile ? 'var(--primary-color)' : 'var(--border-color)',
                opacity: isExecuting ? 0.5 : 1
              }}
              onClick={!isExecuting ? handleSelectClick : undefined}
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                style={{ display: 'none' }} 
                accept=".csv"
                disabled={isExecuting}
              />
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                {selectedFile ? '✅' : '📄'}
              </div>
              <p style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0', fontWeight: selectedFile ? 600 : 400 }}>
                {selectedFile ? selectedFile.name : 'Upload encrypted CSV'}
              </p>
              {!selectedFile && (
                <p style={{ color: 'var(--text-muted)', margin: '0 0 1rem 0', fontSize: '0.9rem' }}>
                  (Addresses & Amounts)
                </p>
              )}
              
              <button 
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--border-color)',
                  color: 'white',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '8px',
                  cursor: isExecuting ? 'not-allowed' : 'pointer',
                  marginTop: '1rem'
                }}
                onClick={(e) => {
                  e.stopPropagation(); // prevent double trigger
                  if(!isExecuting) handleSelectClick();
                }}
                disabled={isExecuting}
              >
                {selectedFile ? 'Change File' : 'Select File'}
              </button>
            </div>

            <button 
              className="execute-btn" 
              onClick={handleExecute}
              disabled={isExecuting || !selectedFile || !amount}
              style={{ opacity: (isExecuting || !selectedFile || !amount) ? 0.6 : 1 }}
            >
              {isExecuting ? 'Executing in TEE Enclave...' : 
                (selectedFile && amount ? 'Execute Confidential Batch' : 'Complete Form to Execute')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExecutePayroll;
