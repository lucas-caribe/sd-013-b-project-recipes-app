import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useCurrentPage from '../context/hooks/useCurrentPage';

export default function Comidas() {
  useCurrentPage('Comidas');

  return (
    <div className="page">
      <Header showSearch />
      <Footer />
    </div>
  );
}
