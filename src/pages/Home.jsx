// Tela principal de receitas: requisitos 25 a 32;
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header setTitle="Comidas" />
      <Footer />
    </div>
  );
}

export default Home;
