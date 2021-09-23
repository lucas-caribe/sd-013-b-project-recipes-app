import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ExplorarBebidas() {
  return (
    <main className="main-content">
      <Header pageTitle="Explorar Bebidas" searchButton={ false } />
      <Footer />
    </main>
  );
}
