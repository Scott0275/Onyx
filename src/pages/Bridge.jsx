import React, { useState } from 'react';
import { ArrowDown, Wallet } from 'lucide-react';
import './Bridge.css';

export default function Bridge() {
  const [activeToken, setActiveToken] = useState('ETH');

  return (
    <div className="page-container" style={{maxWidth: '520px', margin: '0 auto'}}>
      <div className="card bridge-card">
        <div className="bridge-route">
          <div className="route-item">
            <span className="route-label">From</span>
            <span className="route-value">Ethereum</span>
          </div>
          <div className="route-connector">
            <button className="connector-btn">
              <ArrowDown size={14} />
            </button>
          </div>
          <div className="route-item">
            <span className="route-label">To</span>
            <span className="route-value">Goliath</span>
          </div>
        </div>

        <div className="bridge-section m-top-lg">
          <label className="bridge-label">Select token</label>
          <div className="token-pills">
             <button 
                className={`token-pill ${activeToken === 'ETH' ? 'active' : ''}`}
                onClick={() => setActiveToken('ETH')}
             >
                <div className="t-icon">⟠</div> ETH
             </button>
             <button 
                className={`token-pill ${activeToken === 'USDC' ? 'active' : ''}`}
                onClick={() => setActiveToken('USDC')}
             >
                <div className="t-icon usdc" style={{color: '#2775ca', backgroundColor: 'transparent', border:'1px solid #2775ca'}}>$</div> USDC
             </button>
             <button 
                className={`token-pill ${activeToken === 'XCN' ? 'active' : ''}`}
                onClick={() => setActiveToken('XCN')}
             >
                <div className="t-icon xcn" style={{backgroundColor: '#fff', color: '#000'}}>X</div> XCN
             </button>
          </div>
        </div>

        <div className="bridge-section m-top-lg">
           <div className="amount-header">
              <label className="bridge-label">Amount</label>
              <span className="balance">Balance: 0.00 {activeToken}</span>
           </div>
           <div className="bridge-input-container">
              <input type="text" placeholder="0.00" className="bridge-input" />
              <button className="max-btn">MAX</button>
           </div>
        </div>

        <div className="bridge-section m-top-lg">
           <label className="bridge-label" style={{marginBottom: '8px', display: 'block'}}>You receive</label>
           <div className="receive-amount">
              0 {activeToken}
           </div>
        </div>

        <div className="bridge-details">
           <div className="detail-row">
              <span className="detail-label">Fee</span>
              <span className="detail-value green">Free</span>
           </div>
           <div className="detail-row">
              <span className="detail-label">Estimated arrival</span>
              <span className="detail-value">~2m 0s</span>
           </div>
        </div>

        <a href="https://v0-crypto-wallet-app-tau.vercel.app/wallets" target="_blank" rel="noreferrer" className="primary-btn bridge-submit-btn" style={{textDecoration: 'none'}}>
           <Wallet size={16} /> Connect Wallet
        </a>
      </div>
    </div>
  );
}
