import React, { useContext, useEffect } from 'react';
import FoodCard from '../components/FoodCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import foodContext from '../context/FoodContext';
import FoodCategory from '../components/FoodCategory';

export default function FoodPage() {
  const { foodState, setFoodState, boolean } = useContext(foodContext);

  useEffect(() => {
    async function requestAPI() {
      const request = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const response = await request.json();
      setFoodState(response.meals);
    }
    if (boolean === false) requestAPI();
  }, [setFoodState]);

  return (
    <div>
      <Header title="Comidas" />
      <FoodCategory />
      { foodState
        ? <FoodCard />
        : global
          .alert('Sinto muito, não encontramos nenhuma receita para esses filtros.') }
      <Footer />
    </div>
  );
}
