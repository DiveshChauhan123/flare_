import { useState, useEffect } from 'react';

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('payroll_history') || '[]');
    setHistory(saved);
  }, []);

  return (
    <div>
      <div className="page-header">
        <h1>Payroll History</h1>
        <p>Ledger of past confidential distributions.</p>
      </div>
      
      <div className="dashboard-card" style={{ padding: 0, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.02)' }}>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontWeight: 500 }}>Date</th>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontWeight: 500 }}>Tx Hash</th>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontWeight: 500 }}>Recipients</th>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontWeight: 500 }}>Total Amount</th>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontWeight: 500 }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {history.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                  No payroll history found.
                </td>
              </tr>
            ) : (
              history.map((item, index) => (
                <tr key={index} style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1rem 1.5rem' }}>{item.date}</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--primary-color)' }}>
                    <a 
                      href={`https://coston2-explorer.flare.network/tx/${item.txHash}`} 
                      target="_blank" 
                      rel="noreferrer"
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      {item.txHash.substring(0, 6)}...{item.txHash.substring(item.txHash.length - 4)}
                    </a>
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>{item.recipients}</td>
                  <td style={{ padding: '1rem 1.5rem' }}>{item.amount}</td>
                  <td style={{ padding: '1rem 1.5rem' }}><span className="status-badge">{item.status}</span></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
