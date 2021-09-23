import React from 'react';
import Footer from '../components/Footer';
import useCurrentPage from '../context/hooks/useCurrentPage';

export default function ExplorarBebidas() {
  useCurrentPage('Explorar Bebidas');

  return (
    <div className="page">
      <Footer />
    </div>
  );
}
