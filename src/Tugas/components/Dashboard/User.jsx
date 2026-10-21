import React from 'react';

const User = ({ user }) => {
  return (
    <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', maxWidth: '500px' }}>
      <h2>Profil Pengguna</h2>
      <hr style={{ margin: '1rem 0', borderColor: '#e5e7eb' }} />
      <p><strong>Nama User:</strong> {user || 'Guest'}</p>
      <p><strong>Status:</strong> Terautentikasi</p>
      <p><strong>Aplikasi:</strong> Tugas React Router & Dynamic Parameters</p>
    </div>
  );
};

export default User;