import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Perfil() {
  return (
    <main className="main-content">
      <Header pageTitle="Perfil" searchButton={ false } />
      <Footer />
    </main>
  );
}
