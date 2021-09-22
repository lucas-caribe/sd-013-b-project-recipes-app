import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { fetchFullMealsList } from '../services/api';
// Chamar uma funçao que srá chamada dentro do map, recebendo nome e imagem e retornando o card
import Card from '../components/Card';
import FilterButtons from '../components/FilterButtons';

function Meals() {
  const [mealList, setMealList] = useState([]);
  const MAX_ELEMENTS_PER_PAGE = 12;

  useEffect(() => {
    const callMealsFetch = async () => {
      const list = await fetchFullMealsList();
      setMealList(list);
    };
    callMealsFetch();
  }, []);

  const mapMeals = (list) => list.map(
    (food, index) => Card(food.strMeal, food.strMealThumb, index),
  ).slice(0, MAX_ELEMENTS_PER_PAGE);

  const readyToLoad = mealList.length > 0;

  if (readyToLoad) {
    return (
      <div className="meals-page">
        <Header />
        <FilterButtons page="Meals" />
        {console.log(mealList)}
        { mapMeals(mealList) }
      </div>
    );
  }
  return (
    <div className="meals-page">
      <Header />
      <FilterButtons page="Meals" />
      <h2>Loading...</h2>
    </div>
  );
}

export default Meals;
