import React from 'react';
import Header from '../components/Header';
import useCurrentPage from '../context/hooks/useCurrentPage';

function Favoritas() {
  useCurrentPage('Receitas Favoritas');

  return (
    <div className="page">
      <Header />
    </div>
  );
}

export default Favoritas;
