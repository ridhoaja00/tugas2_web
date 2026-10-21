import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../../styles/dashboard-style.css';

const DashboardLayout = ({ user, onLogout }) => {
  return (
    <div className="dashboard-container">
      <Sidebar user={user} onLogout={onLogout} />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;