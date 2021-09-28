import React from 'react';
import ExploreFood from '../components/explorar/ExploreFoof';
import Footer from '../components/footer';
import Header from '../components/header';

export default function ExplorarComidas() {
  return (
    <div>
      <Header titlePage="Explorar Comidas" />
      <ExploreFood />
      <Footer />
    </div>
  );
}
