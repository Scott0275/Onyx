import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Building2, Wallet, ArrowLeftRight, Clock, Box, Briefcase, Cpu, Trophy, CreditCard, Send, Building, ChevronRight, ExternalLink, Send as Telegram, ShieldCheck
} from 'lucide-react';
import './Sidebar.css';

const navItems = [
  { name: 'Staking', path: '/', icon: <Wallet size={18} />, hasChevron: true },
  { name: 'Whitelist', path: '/whitelist', icon: <ShieldCheck size={18} />, badge: 'VIP', badgeColor: 'green' },
  { name: 'History', path: '/history', icon: <Clock size={18} /> },
  { name: 'Swap', path: '/swap', icon: <ArrowLeftRight size={18} /> },
  { name: 'Bridge', path: '/bridge', icon: <Box size={18} />, hasChevron: true },
  { name: 'Farm', path: '/farm', icon: <Briefcase size={18} /> },
  { name: 'Governance', path: '/governance', icon: <Building size={18} /> },
  { name: 'AI Agent', path: '/ai-agent', icon: <Cpu size={18} />, badge: 'New', badgeColor: 'green' },
  { name: 'Points', path: '/points', icon: <Trophy size={18} /> },
  { name: 'Card', path: '/card', icon: <CreditCard size={18} />, badge: 'Soon', badgeColor: 'grey' },
  { name: 'Payments', path: '/payments', icon: <Send size={18} />, badge: 'Soon', badgeColor: 'grey' },
  { name: 'Enterprise', path: '/enterprise', icon: <Building2 size={18} />, badge: 'Soon', badgeColor: 'grey' }
];

export default function Sidebar({ isOpen, closeSidebar }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-stats">
          <div className="logo">
            <div className="logo-icon">X</div>
            <span className="logo-text">Onyx</span>
          </div>
          <button className="mobile-close-btn" onClick={closeSidebar}>
             <span style={{fontSize:'28px', lineHeight: 1, paddingBottom: '4px'}}>×</span>
          </button>
          <div className="price-stats">
            <span className="price">$0.00472</span>
            <span className="diff">0.09%</span>
          </div>
        </div>
        <a href="https://v0-crypto-wallet-app-tau.vercel.app/wallets" target="_blank" rel="noreferrer" className="connect-wallet-btn">
          <Wallet size={16} />
          <span>Connect Wallet</span>
          <ChevronRight size={16} className="btn-chevron" />
        </a>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink 
                to={item.path} 
                className={({ isActive }) => isActive && item.path !== '#' ? "nav-link active" : "nav-link"}
                onClick={closeSidebar}
              >
                <div className="link-content">
                  <span className="icon">{item.icon}</span>
                  <span className="name">{item.name}</span>
                </div>
                {item.hasChevron && <ChevronRight size={16} className="item-chevron" />}
                {item.badge && (
                  <span className={`badge badge-${item.badgeColor}`}>
                    {item.badge}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="language-selector">
          <div className="social-icons">
             <div className="s-icon">M</div> {/* Placeholder for medium */}
             <Telegram size={16} className="s-icon"/>
             <div className="s-icon">X</div> {/* Placeholder for X/Twitter icon */}
             <div className="s-icon">GH</div>
          </div>
          <button className="lang-btn">
             <span className="flag">🇺🇸</span> ENG <ChevronRight size={14} className="rotate-90"/>
          </button>
        </div>
        
        <div className="block-info">
          <span className="label">Last Block:</span>
          <a href="#" className="value">24812220 <ExternalLink size={12}/></a>
        </div>

        <div className="footer-links">
          <a href="#">Terms</a>
          <span className="dot">•</span>
          <a href="#">Disclosures</a>
          <a href="#" className="docs-link">Docs <ExternalLink size={12}/></a>
        </div>
      </div>
    </aside>
  );
}
