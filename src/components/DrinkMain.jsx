import React, { useContext } from 'react';
import foodContext from '../context/FoodContext';

export default function DrinkMain() {
  const { drinkState } = useContext(foodContext);
  const MAX_NUMBER = 12;

  return (
    <div>
      {drinkState ? drinkState.map(({ idDrink, strDrinkThumb, strDrink }, index) => (
        <div
          data-testid={ `${index}-recipe-card` }
          key={ idDrink }
        >
          <img
            data-testid={ `${index}-card-img` }
            src={ strDrinkThumb }
            alt={ strDrink }
          />
          <p data-testid={ `${index}-card-name` }>{strDrink}</p>
        </div>))
        .slice(0, MAX_NUMBER) : null }
    </div>
  );
}
