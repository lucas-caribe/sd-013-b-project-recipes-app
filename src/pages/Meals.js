import React, { userEfect, userState } from 'react';
import Card from '../components/Card';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

function Meals() {
  const [mealList, setMealList] = userState([]);
  const MAX_ELEMENTS = 12;

  userEfect(() => {
    async function fetchMeal() {
      const response = await fetch(API_URL);
      const meals = await response.json();
      setMealList(meals);
    }
    fetchMeal();
  }, []);

  const mapMeallist = (meals) => meals.map((
    meal, index,
  ) => Card(meal.strMeal, meal.strMealThumb, index))
    .slice(0, MAX_ELEMENTS);

  const loading = mealList.length > 0;
  if (loading) {
    return (
      <div>

        {mapMeallist(mealList)}

      </div>
    );
  }
  return (
    <div>

      <h1>loading...</h1>

    </div>
  );
}

export default Meals;
