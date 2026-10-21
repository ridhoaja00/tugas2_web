import React from 'react';
import { useParams, Link } from 'react-router-dom';

const productsData = [
  { id: '1', name: 'Laptop Gaming High-End', price: 'Rp 18.500.000', desc: 'Laptop performa tinggi dengan GPU terbaru dan layar 144Hz.', image: 'https://picsum.photos/seed/laptop/300/200' },
  { id: '2', name: 'Smartphone Flagship', price: 'Rp 12.000.000', desc: 'Kamera profesional 108MP dan baterai tahan lama.', image: 'https://picsum.photos/seed/phone/300/200' },
  { id: '3', name: 'Wireless Headphone', price: 'Rp 2.300.000', desc: 'Perpindahan audio jernih dengan fitur Noise Cancelling.', image: 'https://picsum.photos/seed/headphone/300/200' },
  { id: '4', name: 'Smartwatch Sport', price: 'Rp 1.500.000', desc: 'Pelacak kebugaran dan detak jantung real-time.', image: 'https://picsum.photos/seed/watch/300/200' }
];

const Post = () => {
  const { id } = useParams();

  // Parameter URL Dinamis untuk detail produk
  if (id) {
    const product = productsData.find((p) => p.id === id);

    // Handling Fallback jika ID produk tidak ditemukan
    if (!product) {
      return (
        <div className="product-detail-box">
          <h2>⚠️ Produk Tidak Ditemukan</h2>
          <p>Produk dengan ID <strong>{id}</strong> tidak tersedia dalam katalog kami.</p>
          <Link to="/dashboard" className="back-btn">← Kembali ke Katalog</Link>
        </div>
      );
    }

    return (
      <div className="product-detail-box">
        <Link to="/dashboard" className="back-btn">← Kembali ke Katalog</Link>
        <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
        <h2>{product.name}</h2>
        <p style={{ color: '#059669', fontSize: '1.25rem', fontWeight: 'bold' }}>{product.price}</p>
        <p style={{ color: '#4b5563', marginTop: '1rem' }}>{product.desc}</p>
      </div>
    );
  }

  // Menampilkan daftar produk
  return (
    <div>
      <h2>Katalog Produk Terkini</h2>
      <p style={{ color: '#6b7280' }}>Pilih produk untuk melihat detail spesifikasi.</p>

      <div className="product-grid">
        {productsData.map((prod) => (
          <div key={prod.id} className="product-card">
            <img src={prod.image} alt={prod.name} />
            <h3>{prod.name}</h3>
            <p>{prod.price}</p>
            <Link to={`/dashboard/products/${prod.id}`} className="detail-btn">
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;