import React from 'react';
import Footer from '../components/Footer';
import useCurrentPage from '../context/hooks/useCurrentPage';

export default function ExplorarBebidasIngredientes() {
  useCurrentPage('Explorar Bebidas por Ingredientes');

  return (
    <div className="page">
      <Footer />
    </div>
  );
}
