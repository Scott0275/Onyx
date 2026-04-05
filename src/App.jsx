import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Staking from './pages/Staking';
import History from './pages/History';
import Swap from './pages/Swap';
import Farm from './pages/Farm';
import Bridge from './pages/Bridge';
import Whitelist from './pages/Whitelist';
import Points from './pages/Points';
import Governance from './pages/Governance';
import AiAgent from './pages/AiAgent';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Staking />} />
          <Route path="history" element={<History />} />
          <Route path="swap" element={<Swap />} />
          <Route path="farm" element={<Farm />} />
          <Route path="bridge" element={<Bridge />} />
          <Route path="whitelist" element={<Whitelist />} />
          <Route path="points" element={<Points />} />
          <Route path="governance" element={<Governance />} />
          <Route path="ai-agent" element={<AiAgent />} />
          {/* Default fallback for undefined routes matching sidebar links */}
          <Route path="*" element={<div style={{padding: '48px', textAlign: 'center'}}>Component under construction.</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

