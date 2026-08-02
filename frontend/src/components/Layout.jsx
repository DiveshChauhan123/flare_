import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error("User denied wallet connection", error);
      }
    } else {
      alert("Please install MetaMask to use this feature!");
    }
  };

  const formatAddress = (address) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <div className="app-container layout-wrapper">
      <Sidebar />
      <div className="main-content-wrapper">
        <header className="top-header">
          <div className="header-breadcrumbs">
            <span>Admin</span> <span className="separator">/</span> <span className="current-page">Dashboard</span>
          </div>
          <button className="connect-btn" onClick={connectWallet}>
            {walletAddress ? formatAddress(walletAddress) : 'Connect Wallet'}
          </button>
        </header>
        <main className="page-content">
          <Outlet />
        </main>
      </div>
      <div className="background-glow"></div>
    </div>
  );
};

export default Layout;
