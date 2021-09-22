import React, { userEfect, userState } from 'react';
import Card from '../components/Card';

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

function Drinks() {
  const [drinkList, setDrinkList] = userState([]);
  const MAX_ELEMENTS = 12;

  userEfect(() => {
    async function fetchDrink() {
      const response = await fetch(API_URL);
      const drinks = await response.json();
      setDrinkList(drinks);
    }
    fetchDrink();
  }, []);

  const mapDrinklist = (drinks) => drinks.map((
    drink, index,
  ) => Card(drink.strDrink, drink.strDrinkThumb, index))
    .slice(0, MAX_ELEMENTS);

  const loading = drinkList.length > 0;
  if (loading) {
    return (
      <div>

        {mapDrinklist(drinkList)}

      </div>
    );
  }
  return (
    <div>

      <h1>loading...</h1>

    </div>
  );
}

export default Drinks;
