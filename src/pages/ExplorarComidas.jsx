import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExplorarComidas() {
  return (
    <main className="main-content">
      <Header pageTitle="Explorar Comidas" searchButton={ false } />
      <Footer />
    </main>
  );
}
