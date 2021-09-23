import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import useCurrentPage from '../context/hooks/useCurrentPage';

function Perfil() {
  useCurrentPage('Perfil');

  return (
    <div className="page">
      <Header />
      <Footer />
    </div>
  );
}

export default Perfil;
