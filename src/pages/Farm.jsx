import React, { useState } from 'react';
import { Wallet, Clock, Plus } from 'lucide-react';
import './Farm.css';

export default function Farm() {
  const [activeTab, setActiveTab] = useState('stake');

  return (
    <div className="page-container">
      <div className="section">
        <div className="section-header">
          <h2 className="section-title">Farms</h2>
          <p className="section-subtitle">Stake LP tokens to earn boosted XCN rewards</p>
        </div>

        <div className="card farm-card">
          <div className="farm-card-top">
             <div className="farm-pair-info">
                <div className="pair-icons">
                   <div className="token-icon eth">⟠</div>
                   <div className="token-icon xcn">X</div>
                </div>
                <div>
                   <h3 className="pair-name">XCN / WETH</h3>
                   <div className="pair-desc">Onyx / WETH</div>
                </div>
             </div>
             
             <div className="farm-stats-rows">
                <div className="farm-stat-row">
                   <span className="stat-label">Staking APR</span>
                   <span className="stat-val">57.50%</span>
                </div>
                <div className="farm-stat-row">
                   <span className="stat-label">Daily Emission</span>
                   <span className="stat-val">216.00K <span className="xcn-icon-inline">X</span></span>
                </div>
                <div className="farm-stat-row">
                   <span className="stat-label">Total Staked</span>
                   <span className="stat-val">77.30K <span className="faded">($1.46M)</span></span>
                </div>
             </div>
          </div>

          <div className="farm-card-bottom">
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

            <a href="https://v0-crypto-wallet-app-tau.vercel.app/wallets" target="_blank" rel="noreferrer" className="primary-btn farm-btn" style={{textDecoration: 'none'}}>
               <Wallet size={16} /> Connect Wallet
            </a>
          </div>
        </div>

        <div className="staked-tokens-grid" style={{marginTop: '0px'}}>
          <div className="staked-info-col" style={{position: 'relative'}}>
            <div className="info-box">
              <div className="icon">X</div>
              <div className="value">0.00</div>
              <div className="label">Your Staked LP Tokens</div>
            </div>
            <div className="info-box">
              <div className="icon"><Clock size={16}/></div>
              <div className="value">0.00</div>
              <div className="label">Est. Daily Earnings</div>
            </div>
             <div className="info-box">
              <div className="icon">O</div>
              <div className="value">0.00</div>
              <div className="label">To Claim</div>
            </div>
            <button className="add-liquidity-btn">
               <Plus size={16} /> Add Liquidity
            </button>
          </div>
          <div className="staked-connect-col">
            <div className="empty-state-icon">
              <div className="big-x">X</div>
            </div>
            <h3 className="empty-title">Connect Wallet</h3>
            <p className="empty-desc">Connect your wallet to see your farming data</p>
            <a href="https://v0-crypto-wallet-app-tau.vercel.app/wallets" target="_blank" rel="noreferrer" className="primary-btn empty-btn" style={{textDecoration: 'none'}}>
               <Wallet size={16} /> Connect Wallet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
