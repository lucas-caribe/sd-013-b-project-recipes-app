import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ExplorarBebidasIng() {
  return (
    <main className="main-content">
      <Header pageTitle="Explorar Ingredientes" searchButton={ false } />
      <Footer />
    </main>
  );
}
