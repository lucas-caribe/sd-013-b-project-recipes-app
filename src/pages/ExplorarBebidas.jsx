import React from 'react';
import ExploreDrink from '../components/explorar/ExploreDrink';
import Header from '../components/header';

export default function ExplorarBebidas() {
  return (
    <div>
      <Header titlePage="Explorar Bebidas" />
      <ExploreDrink />
    </div>
  );
}
