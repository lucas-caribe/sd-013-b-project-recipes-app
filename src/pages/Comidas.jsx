import React from 'react';
import Header from '../components/header';
import MealList from '../components/meals/MealList';

export default function Comidas() {
  return (
    <div>
      <Header titlePage="Comidas" hasSearchIcon />
      <MealList />
    </div>
  );
}
