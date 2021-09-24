import React, { useContext, useEffect } from 'react';
import foodContext from '../context/FoodContext';

export default function DrinkMain() {
  const { drinkState, setDrinkState } = useContext(foodContext);
  const MAX_NUMBER = 12;

  async function requestAPI() {
    const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const response = await request.json();
    setDrinkState(response.drinks);
  }

  useEffect(() => {
    requestAPI();
  }, []);

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
