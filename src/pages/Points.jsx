import React from 'react';
import { ArrowLeftRight, ExternalLink } from 'lucide-react';
import './Points.css';

export default function Points() {
  const leaderboardData = [
    { place: '#4', address: '0xfB...363C', amount: '90,060,901.04' },
    { place: '#5', address: '0xD3...69B7', amount: '75,328,146.28' },
    { place: '#6', address: '0x7E...5e3B', amount: '50,253,429.91' },
    { place: '#7', address: '0x08...ae63', amount: '36,084,377.39' },
    { place: '#8', address: '0x7E...2bA7', amount: '32,728,688.47' },
    { place: '#9', address: '0xbB...93c2', amount: '29,455,745.98' },
    { place: '#10', address: '0x07...374c', amount: '25,129,036.62' },
  ];

  return (
    <div className="page-container points-page">
      <div className="section">
        <div className="section-header">
          <h2 className="section-title">Onyx Points</h2>
          <p className="section-subtitle">Track your points and see how you rank against other users.</p>
        </div>

        <div className="card points-stats-card">
           <div className="p-stat-block">
              <div className="p-stat-val">0</div>
              <div className="p-stat-label">My Points</div>
           </div>
           <div className="p-stat-divider"></div>
           <div className="p-stat-block">
              <div className="p-stat-val">29.79%</div>
              <div className="p-stat-label">Points APR</div>
           </div>
        </div>

        <div className="card bridge-callout-card">
           <div className="bc-text">
              <h3 className="bc-title">Bridge XCN</h3>
              <p className="bc-desc">Change chain of your XCN</p>
           </div>
           <button className="secondary-btn">
              <ArrowLeftRight size={14}/> Bridge
           </button>
        </div>

        <div className="section m-top-xl">
           <div className="section-header space-between-mobile">
              <div>
                 <h2 className="section-title">How To Earn Points</h2>
                 <p className="section-subtitle">Earn points by participating in eligible activities.</p>
              </div>
              <button className="secondary-btn">
                 <ExternalLink size={14}/> Learn More
              </button>
           </div>
        </div>

        <div className="earn-points-cards">
           <div className="card earn-card">
              <div className="earn-badge active">Active</div>
              <h3 className="earn-title">Staking Points</h3>
              <p className="earn-desc">Earn SP by staking your XCN on the Ethereum blockchain.</p>
              <button className="secondary-btn dark-btn">
                 <span className="e-icon">⟠</span> Stake XCN
              </button>
           </div>
           <div className="card earn-card">
              <div className="earn-badge soon">Coming Soon</div>
              <h3 className="earn-title">App Points</h3>
              <p className="earn-desc">Earn APP by using Onyx XCN Ledger based dApps.</p>
              <button className="secondary-btn dark-btn">
                 <span className="e-icon">O</span> Explore Apps
              </button>
           </div>
        </div>

        <div className="section m-top-xl">
           <div className="section-header">
              <h2 className="section-title">Leaderboard</h2>
              <p className="section-subtitle">View the rankings of Onyx Points participants</p>
           </div>
           <div className="table-container m-top card" style={{padding: '0'}}>
             <table className="lb-table">
               <thead>
                 <tr>
                   <th>Place <span className="sort-icon">⇕</span></th>
                   <th>User Address <span className="sort-icon">⇕</span></th>
                   <th className="align-right">Amount <span className="sort-icon">⇕</span></th>
                 </tr>
               </thead>
               <tbody>
                  {leaderboardData.map((row, i) => (
                    <tr key={i}>
                      <td>{row.place}</td>
                      <td>
                        <a href="#" className="cell-link inline-flex">
                          {row.address} <ExternalLink size={12}/>
                        </a>
                      </td>
                      <td className="align-right fw-500">{row.amount}</td>
                    </tr>
                  ))}
               </tbody>
             </table>
           </div>
        </div>
      </div>
    </div>
  );
}
