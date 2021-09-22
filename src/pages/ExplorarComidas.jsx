import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExplorarComidas() {
  return (
    <div>
      <Header pageTitle="Explorar Comidas" haveHeader={ false } />
      <div>Explorar Comidas</div>
      <Footer />
    </div>
  );
}

export default ExplorarComidas;
