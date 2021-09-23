import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Explorar() {
  return (
    <main className="main-content">
      <Header pageTitle="Explorar" searchButton={ false } />
      <Footer />
    </main>
  );
}
