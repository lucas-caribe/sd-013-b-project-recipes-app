import React, { useContext, useEffect } from 'react';
import DrinkCard from '../components/DrinkCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DrinkCategory from '../components/DrinkCategory';
import foodContext from '../context/FoodContext';

export default function DrinkPage() {
  const { drinkState, booleanDrink, setDrinkState } = useContext(foodContext);

  useEffect(() => {
    async function requestAPI() {
      const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const response = await request.json();
      setDrinkState(response.drinks);
    }
    if (booleanDrink === false) requestAPI();
  }, [booleanDrink, setDrinkState]);

  return (
    <div>
      <Header title="Bebidas" />
      <DrinkCategory />
      { drinkState
        ? <DrinkCard />
        : global
          .alert('Sinto muito, não encontramos nenhuma receita para esses filtros.') }
      <Footer />
    </div>
  );
}
