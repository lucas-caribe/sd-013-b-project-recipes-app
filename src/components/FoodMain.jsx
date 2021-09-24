import React, { useContext, useEffect } from 'react';
import foodContext from '../context/FoodContext';

export default function FoodMain() {
  const { foodState, setFoodState } = useContext(foodContext);
  const MAX_NUMBER = 12;

  async function requestAPI() {
    const request = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const response = await request.json();
    setFoodState(response.meals);
  }

  useEffect(() => {
    requestAPI();
  }, []);

  return (
    <div>
      {foodState ? foodState.map(({ idMeal, strMealThumb, strMeal }, index) => (
        <div
          data-testid={ `${index}-recipe-card` }
          key={ idMeal }
        >
          <img
            data-testid={ `${index}-card-img` }
            src={ strMealThumb }
            alt={ strMeal }
          />
          <p data-testid={ `${index}-card-name` }>{strMeal}</p>
        </div>))
        .slice(0, MAX_NUMBER) : null }
    </div>
  );
}
