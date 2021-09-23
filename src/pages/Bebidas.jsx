import React from 'react';
import Header from '../components/header';
import SearchBar from '../components/searchBar';
import CocktailsMainList from '../components/cocktailsMainList';

export default function Bebidas() {
  return (
    <div>
      <Header titlePage="Bebidas" hasSearchIcon />
      <SearchBar recipe="cocktail" />
      <CocktailsMainList />
    </div>
  );
}
