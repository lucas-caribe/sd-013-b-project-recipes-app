import React from 'react';
import Header from '../components/header';
import MealsMainList from '../components/mealsMainList';
import MainCategorys from '../components/mainCategorys';
import Footer from '../components/footer';

export default function Comidas() {
  return (
    <div>
      <Header titlePage="Comidas" hasSearchIcon />
      <MainCategorys />
      <MealsMainList />
      <Footer />
    </div>
  );
}
