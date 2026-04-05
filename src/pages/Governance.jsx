import React from 'react';
import { Plus, Search, ChevronDown } from 'lucide-react';
import './Governance.css';

export default function Governance() {
   const proposals = [
      {
         id: 64,
         status: 'Executed',
         statusColor: 'green',
         voted: false,
         title: 'OIP-64: Ratification of Outstanding Governance Polls & Community Safeguards...',
         date: 'Feb 18, 2026, 12:46 AM'
      }
   ];

   return (
      <div className="page-container gov-page">
         <div className="section">
            <div className="section-header space-between-mobile">
               <div>
                  <h2 className="section-title">Governance</h2>
                  <p className="section-subtitle">Vote for proposals that are created</p>
               </div>
               <button className="secondary-btn dark-btn">
                  <Plus size={16}/> Create Proposal <span className="info-icon m-left">ⓘ</span>
               </button>
            </div>

            <div className="card voting-power-card m-top-lg">
               <div className="vp-info">
                  <div className="vp-icon">Q</div>
                  <div className="vp-val">0 XCN</div>
                  <div className="vp-label">My Voting Power</div>
               </div>
               <button className="secondary-btn bg-white">
                  <Plus size={16}/> Add Voting Power
               </button>
            </div>

            <div className="gov-stats-grid">
               <div className="card gov-stat-card">
                  <div className="vp-icon box-icon">X</div>
                  <div className="vp-val">0 XCN</div>
                  <div className="vp-label">Staked Tokens</div>
               </div>
               <div className="card gov-stat-card">
                  <div className="vp-icon circle-icon">O</div>
                  <div className="vp-val">64</div>
                  <div className="vp-label">Total Proposals</div>
               </div>
            </div>

            <div className="gov-filters-bar m-top-xl">
               <div className="search-bar">
                  <Search size={16} className="search-icon" />
                  <input type="text" placeholder="Search proposals..." />
               </div>
               <button className="secondary-btn filter-dropdown">
                  <div className="icons-stack"><Plus size={12}/></div> All Statuses <ChevronDown size={14}/>
               </button>
            </div>

            <div className="proposals-list m-top">
               {proposals.map((prop) => (
                  <div key={prop.id} className="card proposal-card">
                     <div className="prop-tags">
                        <span className="prop-id">#{prop.id}</span>
                        <span className={`prop-status status-${prop.statusColor}`}>{prop.status}</span>
                        {!prop.voted && <span className="prop-voted">You Have Not Voted</span>}
                        <span className="prop-date">{prop.date}</span>
                     </div>
                     <h3 className="prop-title">{prop.title}</h3>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
