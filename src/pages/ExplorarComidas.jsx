import React from 'react';
import ExploreFood from '../components/explorar/ExploreFoof';
import Header from '../components/header';

export default function ExplorarComidas() {
  return (
    <div>
      <Header titlePage="Explorar Comidas" />
      <ExploreFood />
    </div>
  );
}
