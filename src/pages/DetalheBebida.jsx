import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import useCurrentPage from '../context/hooks/useCurrentPage';

export default function DetalheBebida() {
  useCurrentPage('Bebida detalhes');
  return (
    <div className="page">
      <Header />
      <Footer />
    </div>
  );
}
