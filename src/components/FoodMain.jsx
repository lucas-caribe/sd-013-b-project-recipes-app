import React, { useContext } from 'react';
import foodContext from '../context/FoodContext';

export default function FoodMain() {
  const { foodState } = useContext(foodContext);
  const MAX_NUMBER = 12;

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
