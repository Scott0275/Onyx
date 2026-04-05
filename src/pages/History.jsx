import React from 'react';
import { Search, ExternalLink, Filter, ArrowDownToLine, Wallet } from 'lucide-react';
import './History.css';

export default function History() {
  const transactions = [
    { type: 'Claim', typeIcon: <ArrowDownToLine size={14}/>, hash: '0xde...df38', block: '24,812,233', from: '0x01...ce26', to: '0x28...da93', amount: '2,906.3445 XCN' },
    { type: 'Stake', typeIcon: <Wallet size={14}/>, hash: '0x6c...b42d', block: '24,812,229', from: '0xba...89d4', to: '0x23...19a9', amount: '7,215.1900 XCN' },
    { type: 'Claim', typeIcon: <ArrowDownToLine size={14}/>, hash: '0x25...1b46', block: '24,812,222', from: '0xba...89d4', to: '0x28...da93', amount: '473.3388 XCN' },
    { type: 'Stake', typeIcon: <Wallet size={14}/>, hash: '0xf1...302a', block: '24,812,216', from: '0xd5...c036', to: '0x23...19a9', amount: '906.6900 XCN' },
    { type: 'Stake', typeIcon: <Wallet size={14}/>, hash: '0xa0...981d', block: '24,812,207', from: '0x06...ac16', to: '0x5f...2789', amount: '211,344.9700 XCN' },
    { type: 'Claim', typeIcon: <ArrowDownToLine size={14}/>, hash: '0x5d...65cb', block: '24,812,203', from: '0xd5...c036', to: '0x28...da93', amount: '907.6882 XCN' }
  ];

  return (
    <div className="page-container" style={{maxWidth: '1000px'}}>
      <div className="section">
        <div className="section-header">
          <h2 className="section-title">History</h2>
          <p className="section-subtitle">Check all the users transactions from our platform</p>
        </div>

        <div className="history-filters-top">
          <div className="network-tabs">
            <button className="net-tab active">All Networks</button>
            <button className="net-tab">Ethereum</button>
            <button className="net-tab">Goliath</button>
          </div>
        </div>

        <div className="history-toolbar">
          <div className="search-bar">
            <Search size={16} className="search-icon" />
            <input type="text" placeholder="Enter an address" />
          </div>
          <div className="transaction-tabs">
            <button className="tx-tab active">
               <Filter size={14}/> All Transactions
            </button>
            <button className="tx-tab">My Transactions</button>
            <button className="tx-tab filter-btn">
               <span>All Types</span>
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
            </button>
          </div>
        </div>

        <div className="table-container">
          <table className="history-table">
            <thead>
              <tr>
                <th>Type <ChevronSort /></th>
                <th>Txn Hash <ChevronSort /></th>
                <th>Block <ChevronSort /></th>
                <th>From</th>
                <th>To</th>
                <th className="align-right">Amount <ChevronSort /></th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="cell-flex type-cell">
                      {tx.typeIcon} {tx.type}
                    </div>
                  </td>
                  <td>
                    <a href="#" className="cell-link cell-flex">
                      {tx.hash} <ExternalLink size={12}/>
                    </a>
                  </td>
                  <td>{tx.block}</td>
                  <td>
                    <a href="#" className="cell-link cell-flex">
                      {tx.from} <ExternalLink size={12}/>
                    </a>
                  </td>
                  <td>
                    <a href="#" className="cell-link cell-flex">
                      {tx.to} <ExternalLink size={12}/>
                    </a>
                  </td>
                  <td className="align-right amount-cell">{tx.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ChevronSort() {
   return (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{opacity: 0.5, marginLeft: '4px'}}>
         <path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>
      </svg>
   )
}
