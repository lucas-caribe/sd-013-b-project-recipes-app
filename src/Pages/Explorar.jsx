import React from 'react';
import Header from '../components/Header';
import useCurrentPage from '../context/hooks/useCurrentPage';

function Explorar() {
  useCurrentPage('Explorar');

  return (
    <div className="page">
      <Header />
    </div>
  );
}

export default Explorar;
