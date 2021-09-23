import React from 'react';
import Header from '../components/header';
import CocktailList from '../components/cocktails/CocktailList';

export default function Bebidas() {
  return (
    <div>
      <Header titlePage="Bebidas" hasSearchIcon />
      <CocktailList />
    </div>
  );
}
