import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './components/Login';
import DashboardLayout from './components/Dashboard/DashboardLayout';
import Post from './components/Dashboard/Post';
import User from './components/Dashboard/User';
import NotFound from './components/Dashboard/NotFound';

const TugasApp = () => {
  const [user, setUser] = useState(localStorage.getItem('user_tugas') || null);

  const handleLogin = (username) => {
    setUser(username);
    localStorage.setItem('user_tugas', username);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user_tugas');
  };

  return (
    <Routes>
      {/* Route Login */}
      <Route path="/login" element={<Login onLogin={handleLogin} />} />

      {/* Route Dashboard */}
      <Route 
        path="/dashboard" 
        element={user ? <DashboardLayout user={user} onLogout={handleLogout} /> : <Navigate to="/login" replace />}
      >
        {/* Sub-routes */}
        <Route index element={<Post />} />
        <Route path="products/:id" element={<Post />} />
        <Route path="user" element={<User user={user} />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Redirect awal */}
      <Route path="/" element={<Navigate to={user ? "/dashboard" : "/login"} replace />} />

      {/* Fallback Global 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default TugasApp;