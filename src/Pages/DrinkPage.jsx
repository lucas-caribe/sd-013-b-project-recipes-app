import React, { useContext } from 'react';
import DrinkCard from '../components/DrinkCard';
import DrinkMain from '../components/DrinkMain';
import Footer from '../components/Footer';
import Header from '../components/Header';
import foodContext from '../context/FoodContext';

export default function DrinkPage() {
  const { drinkState } = useContext(foodContext);
  return (
    <div>
      <Header title="Bebidas" />
      { drinkState
        ? <DrinkCard />
        : global
          .alert('Sinto muito, não encontramos nenhuma receita para esses filtros.') }
      <DrinkMain />
      <Footer />
    </div>
  );
}
