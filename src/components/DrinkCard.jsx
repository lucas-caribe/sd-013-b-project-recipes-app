import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import foodContext from '../context/FoodContext';

function DrinkCard() {
  const { drinkState } = useContext(foodContext);
  const MAX_NUMBER = 12;

  if (drinkState.length === 1) {
    return (
      <Redirect to={ `bebidas/${drinkState[0].idDrink}` } />
    );
  }

  return (
    <div>
      {drinkState.map(({ idDrink, strDrinkThumb, strDrink }, index) => (
        <div
          data-testid={ `${index}-recipe-card` }
          key={ idDrink }
        >
          <img
            data-testid={ `${index}-card-img` }
            src={ strDrinkThumb }
            alt={ strDrink }
          />
          <h3 data-testid={ `${index}-card-name` }>{strDrink}</h3>
        </div>))
        .slice(0, MAX_NUMBER)}
    </div>
  );
}

export default DrinkCard;
