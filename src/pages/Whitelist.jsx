import React from 'react';
import { ShieldCheck, Zap, Crown, Lock, Wallet } from 'lucide-react';
import './Whitelist.css';

export default function Whitelist() {
  return (
    <div className="page-container">
      <div className="section">
        <div className="section-header">
          <h2 className="section-title">Onyx VIP Whitelist</h2>
          <p className="section-subtitle">Unlock exclusive access and advanced protocol features</p>
        </div>

        <div className="whitelist-content">
           <div className="card whitelist-benefits-card">
             <div className="whitelist-header-icon">
                <ShieldCheck size={48} className="vip-icon" />
             </div>
             <h3 className="whitelist-heading">Elite Member Access</h3>
             <p className="whitelist-description">
               Holders of <strong>70,000 ONYX</strong> or more are eligible to join the verified elite whitelist. This grants access to specialized protocol treatments and higher yielding tools.
             </p>

             <div className="benefits-list">
                <div className="benefit-item">
                   <div className="b-icon-container"><Zap size={18} /></div>
                   <div className="b-details">
                      <h4>Boosted Staking APR</h4>
                      <p>Enjoy a significantly higher staking yield of <strong>51.97% APR</strong>.</p>
                   </div>
                </div>
                <div className="benefit-item">
                   <div className="b-icon-container"><Crown size={18} /></div>
                   <div className="b-details">
                      <h4>Preferential Treatment</h4>
                      <p>Gain access to first-hand information, priority protocol updates, and VIP features.</p>
                   </div>
                </div>
                <div className="benefit-item">
                   <div className="b-icon-container"><Lock size={18} /></div>
                   <div className="b-details">
                      <h4>Exclusive ADMIN Access</h4>
                      <p>Unlock administrator-level privileges within designated ecosystem functions.</p>
                   </div>
                </div>
             </div>

             <div className="req-box">
                <div className="req-label">Requirement</div>
                <div className="req-val">70,000 ONYX</div>
             </div>

             <a href="https://v0-crypto-wallet-app-tau.vercel.app/wallets" target="_blank" rel="noreferrer" className="primary-btn whitelist-btn" style={{textDecoration: 'none'}}>
               <Wallet size={16} /> Connect Wallet to Verify
             </a>
           </div>
        </div>
      </div>
    </div>
  );
}
