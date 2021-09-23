import React from 'react';
import Header from '../components/header';
import SearchBar from '../components/searchBar';
import CocktailList from '../components/cocktails/CocktailList';

export default function Bebidas() {
  return (
    <div>
      <Header titlePage="Bebidas" hasSearchIcon />
      <SearchBar recipe="cocktail" />
      <CocktailList />
    </div>
  );
}
