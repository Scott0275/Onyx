import React, { useState } from 'react';
import { Banknote, Wallet, Trophy, Clock } from 'lucide-react';
import './Staking.css';

export default function Staking() {
  const [activeTab, setActiveTab] = useState('stake');

  return (
    <div className="page-container">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon"><Clock size={16} /></div>
          <div>
            <div className="stat-value">26.69%</div>
            <div className="stat-label">Staking APR</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><Clock size={16} /></div>
          <div>
            <div className="stat-value">5.04M</div>
            <div className="stat-label">Daily Emission</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><Wallet size={16} /></div>
          <div>
            <div className="stat-value">6.13B</div>
            <div className="stat-label">Total Staked</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><Banknote size={16} /></div>
          <div>
            <div className="stat-value">1.26B</div>
            <div className="stat-label">Total Treasury</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><Trophy size={16} /></div>
          <div>
            <div className="stat-value">29.79%</div>
            <div className="stat-label">Points APR</div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <h2 className="section-title">Staking</h2>
          <p className="section-subtitle">Stake or withdraw your tokens</p>
        </div>

        <div className="card staking-card">
          <div className="staking-card-header">
            <div className="amount-info">
              <h3>Amount</h3>
              <span className="balance">Available Balance: 0.00</span>
            </div>
            <div className="stake-withdraw-tabs">
              <button 
                className={`tab-btn ${activeTab === 'stake' ? 'active' : ''}`}
                onClick={() => setActiveTab('stake')}
              >
                <div className="tab-icon">X</div> Stake
              </button>
              <button 
                className={`tab-btn ${activeTab === 'withdraw' ? 'active' : ''}`}
                onClick={() => setActiveTab('withdraw')}
              >
                <Wallet size={14} /> Withdraw
              </button>
            </div>
          </div>

          <div className="input-group">
            <input type="text" className="amount-input" placeholder="0.00" readOnly />
            <div className="percent-buttons">
              <button>0%</button>
              <button>25%</button>
              <button>50%</button>
              <button>75%</button>
              <button>Max</button>
            </div>
          </div>

          <div className="staking-summary">
            <div className="summary-row">
              <span>Estimated Daily Earnings:</span>
              <span>0.00 XCN</span>
            </div>
            <div className="summary-row">
              <span>Staking APR:</span>
              <span>26.69%</span>
            </div>
          </div>

          <a href="https://v0-crypto-wallet-app-tau.vercel.app/wallets" target="_blank" rel="noreferrer" className="primary-btn full-width" style={{textDecoration: 'none'}}>
            <Wallet size={16} /> Connect Wallet
          </a>
        </div>
      </div>

      <div className="section m-top">
        <div className="section-header">
          <h2 className="section-title">Staked Tokens</h2>
          <p className="section-subtitle">View and claim your staking rewards</p>
        </div>

        <div className="staked-tokens-grid">
          <div className="staked-info-col">
            <div className="info-box">
              <div className="icon">X</div>
              <div className="value">0.00 XCN</div>
              <div className="label">Your Staked Tokens</div>
            </div>
            <div className="info-box">
              <div className="icon"><Clock size={16}/></div>
              <div className="value">0.00 XCN</div>
              <div className="label">Est. Daily Earnings</div>
            </div>
             <div className="info-box">
              <div className="icon">O</div>
              <div className="value">0.00 XCN</div>
              <div className="label">To Claim</div>
            </div>
          </div>
          <div className="staked-connect-col">
            <div className="empty-state-icon">
              <div className="big-x">X</div>
            </div>
            <h3 className="empty-title">Connect Wallet</h3>
            <p className="empty-desc">Connect your wallet to see your staking data</p>
            <a href="https://v0-crypto-wallet-app-tau.vercel.app/wallets" target="_blank" rel="noreferrer" className="primary-btn empty-btn" style={{textDecoration: 'none'}}>
               <Wallet size={16} /> Connect Wallet
            </a>
          </div>
        </div>
      </div>
{/* History view matching screenshot */}
      <div className="section m-top" style={{marginBottom: "60px"}}>
         <div className="section-header">
          <h2 className="section-title">Staking History</h2>
          <p className="section-subtitle">History of your staking activity</p>
        </div>
        <div className="history-empty card">
          <div style={{display: 'flex', alignItems: 'center', gap: '32px'}}>
             <div className="empty-state-icon smaller">
                <div className="big-x">X</div>
              </div>
              <div style={{textAlign: 'left'}}>
                 <h3 className="empty-title" style={{marginBottom: '8px'}}>Empty Staking History</h3>
                 <p className="empty-desc">Your history will appear here once you make your first transaction.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
