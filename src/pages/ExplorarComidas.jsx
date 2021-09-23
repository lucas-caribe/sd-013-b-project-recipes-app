import React from 'react';
import Footer from '../components/Footer';
import useCurrentPage from '../context/hooks/useCurrentPage';

export default function ExplorarComidas() {
  useCurrentPage('Explorar Comidas');

  return (
    <div className="page">
      <Footer />
    </div>
  );
}
