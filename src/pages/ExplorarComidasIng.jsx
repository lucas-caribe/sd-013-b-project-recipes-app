import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExplorarComidasIng() {
  return (
    <main className="main-content">
      <Header pageTitle="Explorar Ingredientes" searchButton={ false } />
      <Footer />
    </main>
  );
}
