import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import foodContext from '../context/FoodContext';

function FoodCard() {
  const { foodState } = useContext(foodContext);
  const MAX_NUMBER = 12;

  if (foodState.length === 1) {
    return (
      <Redirect to={ `comidas/${foodState[0].idMeal}` } />
    );
  }

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

export default FoodCard;
