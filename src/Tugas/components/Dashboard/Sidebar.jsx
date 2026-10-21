import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <div className="sidebar-title">Katalog Produk</div>
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/dashboard" end className={({ isActive }) => (isActive ? 'active' : '')}>
            📦 Katalog Produk
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/user" className={({ isActive }) => (isActive ? 'active' : '')}>
            👤 Profil User
          </NavLink>
        </li>
      </ul>
      <div style={{ marginTop: 'auto' }}>
        <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
          Login sebagai: <strong>{user || 'Guest'}</strong>
        </p>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;