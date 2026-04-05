import React from 'react';
import './AiAgent.css';

export default function AiAgent() {
  return (
    <div className="ai-agent-container">
       <div className="ai-left-pane">
          <div className="ai-logo-bar">
             <div className="logo-icon-ai">X</div> 
             <span className="ai-logo-text">Onyx</span>
             <span className="badge-ai">AI Agent</span>
          </div>

          <div className="ai-hero-content">
             <h1 className="ai-title">Connect Your Wallet<br/>To Get Started</h1>
             <p className="ai-subtitle">How can I assist you with your goals?</p>
             
             <a href="https://v0-crypto-wallet-app-tau.vercel.app/wallets" target="_blank" rel="noreferrer" className="ai-connect-btn" style={{textDecoration: 'none'}}>
                Connect
             </a>
             
             <a href="#" className="ai-help-link">Get Help</a>
          </div>

          <div className="ai-footer">
             By connecting a wallet, you agree to Onyx <a href="#">Terms of Service</a>
          </div>
       </div>

       <div className="ai-right-pane">
          <div className="ai-ui-collage">
             <div className="ai-ui-card card-1">
                <div className="ai-c-header">
                   <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
                     <div className="logo-icon-small" style={{width:'16px', height:'16px', fontSize:'10px', display:'flex', alignItems:'center', justifyContent:'center', background:'#fff', color:'#000', borderRadius:'50%', fontWeight:'bold'}}>X</div> 
                     <span>Onyx</span>
                   </div>
                   <span className="ai-c-badge">AI Agent</span>
                </div>
                <div className="agent-wallet">
                   <span>Agent Wallet:</span> <span style={{color: '#fff'}}>0x1d...74C9 </span>
                </div>
                <div className="chat-history-mock">
                   <h4>Chat History</h4>
                   <p>Check whole history of your chats</p>
                   <div className="cmd">Check Balance of my... <span className="chip">Current</span></div>
                   <div className="cmd faded-text">Launch a ERC20 token</div>
                   <div className="cmd faded-text">Deploy a smart contract</div>
                   <div className="cmd faded-text">Swap 1 ETH for USDC</div>
                </div>
             </div>

             <div className="ai-ui-card card-2">
                 <div className="mock-grid">
                    <div className="mg-box">
                       <h5>Check My Balance</h5>
                       <p>See the balance in your wallet</p>
                    </div>
                    <div className="mg-box active">
                       <h5>Deploy A Smart Contract</h5>
                       <p>See the balance in your wallet</p>
                    </div>
                    <div className="mg-box">
                       <h5>Launch a ERC20 token</h5>
                       <p>Launch a new token on mainnet</p>
                    </div>
                    <div className="mg-box">
                       <h5>Swap 1 ETH for USDC</h5>
                       <p>Swap 1 ETH for USDC</p>
                    </div>
                 </div>
                 
                 <div className="action-row">
                    <button className="action-pill"><span className="icon">📋</span> Check Balance</button>
                    <button className="action-pill"><span className="icon">⚙</span> Launch ERC20 Token</button>
                 </div>

                 <div className="prompt-bar-mock">
                    <span className="cost">1 Credit Per Message ⓘ</span>
                    <div className="input-mock">✨ Ask Me Anything</div>
                 </div>
             </div>

             <div className="ai-ui-card card-3">
                 <div className="logo-icon-small" style={{width:'24px', height:'24px', fontSize:'12px', display:'flex', alignItems:'center', justifyContent:'center', background:'#fff', color:'#000', borderRadius:'50%', fontWeight:'bold'}}>X</div>
                 <p style={{marginTop:'16px', lineHeight:'1.5', color:'#ccc'}}>To check your balance, I'll need to know the specific blockchain network you are looking for. Here are some options you can choose from:</p>
                 <ul className="mock-list">
                    <li>Arbitrum (Chain ID: 42161)</li>
                    <li>Avalanche (Chain ID: 43114)</li>
                    <li>BNB Chain (Chain ID: 56)</li>
                    <li>Ethereum (Chain ID: 1)</li>
                    <li>Polygon (Chain ID: 137)</li>
                    <li>Solana (Chain ID: 7565164)</li>
                    <li>Linea (Chain ID: 59144)</li>
                 </ul>
             </div>
          </div>
       </div>
    </div>
  );
}
