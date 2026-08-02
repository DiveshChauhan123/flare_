const Dashboard = () => {
  return (
    <div>
      <div className="page-header">
        <h1>Overview</h1>
        <p>Your Confidential Payroll summary.</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
        <div className="dashboard-card">
          <h3 style={{ color: 'var(--text-muted)', margin: '0 0 1rem 0', fontSize: '1rem' }}>Total Distributed</h3>
          <h2 style={{ margin: 0, fontSize: '2.5rem' }}>14,500 <span style={{fontSize: '1rem', color: 'var(--text-muted)'}}>FLR</span></h2>
        </div>
        <div className="dashboard-card">
          <h3 style={{ color: 'var(--text-muted)', margin: '0 0 1rem 0', fontSize: '1rem' }}>Active Employees</h3>
          <h2 style={{ margin: 0, fontSize: '2.5rem' }}>24</h2>
        </div>
        <div className="dashboard-card">
          <h3 style={{ color: 'var(--text-muted)', margin: '0 0 1rem 0', fontSize: '1rem' }}>Next Payroll</h3>
          <h2 style={{ margin: 0, fontSize: '1.8rem' }}>Oct 31, 2026</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
