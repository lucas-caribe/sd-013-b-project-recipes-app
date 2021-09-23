import React from 'react';
import Header from '../components/Header';
import useCurrentPage from '../context/hooks/useCurrentPage';

function Perfil() {
  useCurrentPage('Perfil');

  return (
    <div className="page">
      <Header />
    </div>
  );
}

export default Perfil;
