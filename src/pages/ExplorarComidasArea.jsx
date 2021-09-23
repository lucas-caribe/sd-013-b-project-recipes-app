import React from 'react';
import Footer from '../components/Footer';
import useCurrentPage from '../context/hooks/useCurrentPage';

export default function ExplorarComidasArea() {
  useCurrentPage('Explorar Comidas por Local de Origem');

  return (
    <div className="page">
      <Footer />
    </div>
  );
}
