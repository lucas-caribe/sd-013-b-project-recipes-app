import React from 'react';
import Footer from '../components/Footer';
import useCurrentPage from '../context/hooks/useCurrentPage';

export default function ExplorarComidasIngredientes() {
  useCurrentPage('Explorar Comidas por Ingredientes');

  return (
    <div className="page">
      <Footer />
    </div>
  );
}
