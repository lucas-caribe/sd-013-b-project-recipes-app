import React from 'react';
import Header from '../components/header';
import CocktailsMainList from '../components/cocktailsMainList';
import MainCategorys from '../components/mainCategorys';
import Footer from '../components/footer';

export default function Bebidas() {
  return (
    <div>
      <Header titlePage="Bebidas" hasSearchIcon />
      <MainCategorys />
      <CocktailsMainList />
      <Footer />
    </div>
  );
}
