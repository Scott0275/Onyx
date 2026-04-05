import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';
import './Layout.css';

export default function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">
      {/* Mobile Top Header */}
      <div className="mobile-header">
         <div className="logo-mobile">
            <div className="logo-icon">X</div>
            <span className="logo-text">Onyx</span>
         </div>
         <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>
            <Menu size={24} />
         </button>
      </div>

      <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
      
      {isSidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}

      <main className="main-content">
        <div className="content-wrapper">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
