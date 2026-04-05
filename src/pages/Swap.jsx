import React from 'react';
import { ArrowDownUp, Info } from 'lucide-react';
import './Swap.css';

export default function Swap() {
  return (
    <div className="page-container" style={{maxWidth: '600px', margin: '0 auto'}}>
      <div className="swap-network-tabs">
        <button className="swap-net-tab active">
          <div className="net-icon eth-icon">⟠</div> Ethereum
        </button>
        <button className="swap-net-tab">
          <div className="net-icon">G</div> Goliath
        </button>
      </div>

      <div className="section m-top">
        <div className="section-header">
          <h2 className="section-title">Swap</h2>
          <p className="section-subtitle">Change your crypto for the other assets</p>
        </div>

        <div className="card swap-card">
          <div className="swap-input-container">
            <div className="swap-input-header">
              <span className="label">From</span>
              <span className="balance">Available Balance: 0 ETH</span>
            </div>
            <div className="swap-input-row">
               <input type="text" placeholder="0" className="swap-amount" />
               <div className="token-selector">
                  <div className="token-icon">⟠</div>
                  <span className="token-symbol">ETH</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
               </div>
            </div>
            <div className="usd-value">~ $0.00</div>
          </div>

          <div className="swap-switch">
             <button className="switch-btn">
                <ArrowDownUp size={16} />
             </button>
          </div>

          <div className="swap-input-container">
            <div className="swap-input-header">
              <span className="label">To</span>
              <span className="balance">Available Balance: 0 XCN</span>
            </div>
            <div className="swap-input-row">
               <input type="text" placeholder="0" className="swap-amount" />
               <div className="token-selector">
                  <div className="token-icon">X</div>
                  <span className="token-symbol">XCN</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
               </div>
            </div>
            <div className="usd-value">~ $0.00</div>
          </div>

          <div className="swap-details">
             <div className="detail-row">
                <span>Exchange rate: <Info size={12} className="info-icon"/></span>
                <span>-</span>
             </div>
             <div className="detail-row">
                <span>Slippage Tolerance: <Info size={12} className="info-icon"/></span>
                <span>-</span>
             </div>
             <div className="detail-row">
                <span>Minimum received: <Info size={12} className="info-icon"/></span>
                <span>-</span>
             </div>
             <div className="detail-row">
                <span>Gas Fee: <Info size={12} className="info-icon"/></span>
                <span>-</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
