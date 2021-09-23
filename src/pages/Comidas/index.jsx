import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

function Meals() {
  const [mealList, setMealList] = useState([]);
  const MAX_ELEMENTS = 12;

  useEffect(() => {
    async function fetchMeal() {
      const response = await fetch(API_URL);
      const data = await response.json();
      const meals = await data.meals;
      setMealList(meals);
    }
    fetchMeal();
  }, []);

  const mapMeallist = (meals) => meals.map((
    meal, index,
  ) => Card(meal.strMeal, meal.strMealThumb, index))
    .slice(0, MAX_ELEMENTS);

  const readyToLoad = mealList.length > 0;
  if (readyToLoad) {
    return (
      <div>
        <Header pageTitle="Comidas" showSearchIcon />

        {mapMeallist(mealList)}
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <Header pageTitle="Comidas" showSearchIcon />
      <h1>loading...</h1>
      <Footer />
    </div>
  );
}

export default Meals;
