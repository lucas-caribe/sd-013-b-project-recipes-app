import React from 'react';
import Header from '../components/Header';
import useCurrentPage from '../context/hooks/useCurrentPage';

function Bebidas() {
  useCurrentPage('Bebidas');

  return (
    <div className="page">
      <Header showSearch />
    </div>
  );
}

export default Bebidas;
