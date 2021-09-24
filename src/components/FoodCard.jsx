import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import foodContext from '../context/FoodContext';

function FoodCard() {
  const { foodState } = useContext(foodContext);
  const NUMBER_TWELVE = 12;

  if (foodState.length === 1) {
    return (
      <Redirect to={ `comidas/${foodState[0].idMeal}` } />
    );
  }

  return (
    <div>
      {foodState.map(({ idMeal, strMealThumb, strMeal }, index) => (
        <div
          data-testid={ `${index}-recipe-card` }
          key={ idMeal }
        >
          <img
            src={ strMealThumb }
            alt={ strMeal }
            data-testid={ `${index}-card-img` }
          />
          <h3 data-testid={ `${index}-card-name` }>{strMeal}</h3>
        </div>)).slice(0, NUMBER_TWELVE)}
    </div>
  );
}

export default FoodCard;
