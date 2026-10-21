import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/notfound-style.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <h2>Halaman Tidak Ditemukan</h2>
      <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
        Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
      </p>
      <Link to="/dashboard">Kembali ke Dashboard</Link>
    </div>
  );
};

export default NotFound;