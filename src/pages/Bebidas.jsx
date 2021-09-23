import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import useCurrentPage from '../context/hooks/useCurrentPage';

function Bebidas() {
  useCurrentPage('Bebidas');

  return (
    <div className="page">
      <Header showSearch />
      <Footer />
    </div>
  );
}

export default Bebidas;
