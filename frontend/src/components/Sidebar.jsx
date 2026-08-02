import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-icon">✦</span>
        <h2>Confidential Payroll</h2>
      </div>
      
      <nav className="sidebar-nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')} end>
          <span className="nav-icon">📊</span>
          Overview
        </NavLink>
        <NavLink to="/payroll" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          <span className="nav-icon">💸</span>
          Execute Batch
        </NavLink>
        <NavLink to="/history" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          <span className="nav-icon">🕰️</span>
          History
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          <span className="nav-icon">⚙️</span>
          Settings
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <div className="network-status">
          <span className="status-dot"></span>
          Flare Coston2
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
