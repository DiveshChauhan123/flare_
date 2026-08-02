const History = () => {
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
            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
              <td style={{ padding: '1rem 1.5rem' }}>Sep 30, 2026</td>
              <td style={{ padding: '1rem 1.5rem', color: 'var(--primary-color)' }}>0x7f3...4a9d</td>
              <td style={{ padding: '1rem 1.5rem' }}>24</td>
              <td style={{ padding: '1rem 1.5rem' }}>14,500 FLR</td>
              <td style={{ padding: '1rem 1.5rem' }}><span className="status-badge">Completed</span></td>
            </tr>
            <tr>
              <td style={{ padding: '1rem 1.5rem' }}>Aug 31, 2026</td>
              <td style={{ padding: '1rem 1.5rem', color: 'var(--primary-color)' }}>0x1a2...9b8c</td>
              <td style={{ padding: '1rem 1.5rem' }}>22</td>
              <td style={{ padding: '1rem 1.5rem' }}>13,200 FLR</td>
              <td style={{ padding: '1rem 1.5rem' }}><span className="status-badge">Completed</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
