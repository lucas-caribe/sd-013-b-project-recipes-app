import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import DrinkCards from './DrinkCards';

function DrinkCardSpace() {
  const { drinks, setDrinks } = useContext(Context);

  useEffect(() => {
    async function fetchDrinks() {
      const drinksResult = await (await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')).json();
      setDrinks([...drinksResult.drinks]);
    }
    fetchDrinks();
  }, []);

  return (
    <div>
      { drinks.length < 1 ? <p>Loading...</p> : <DrinkCards />}
    </div>
  );
}

export default DrinkCardSpace;
