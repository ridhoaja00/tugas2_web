import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login-style.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username);
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Selamat Datang</h2>
        <p>Silakan masuk ke Katalog Produk</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input 
              type="text" 
              placeholder="Masukkan username..." 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="login-btn">Masuk</button>
        </form>
      </div>
    </div>
  );
};

export default Login;