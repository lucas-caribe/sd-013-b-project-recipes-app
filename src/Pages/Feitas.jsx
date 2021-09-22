import React from 'react';
import Header from '../components/Header';
import useCurrentPage from '../context/hooks/useCurrentPage';

function Feitas() {
  useCurrentPage('Comidas Favoritas');

  return (
    <div className="page">
      <Header />
    </div>
  );
}

export default Feitas;
