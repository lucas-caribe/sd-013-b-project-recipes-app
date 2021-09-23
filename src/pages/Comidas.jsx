import React from 'react';
import Header from '../components/header';
import MealList from '../components/meals/MealList';
import SearchBar from '../components/searchBar';
import MealsMainList from '../components/mealsMainList';
import MainCategorys from '../components/mainCategorys';

export default function Comidas() {
  return (
    <div>
      <Header titlePage="Comidas" hasSearchIcon />
      <SearchBar recipe="meal" />
      <MealList />
      <MainCategorys />
      <MealsMainList />
    </div>
  );
}
