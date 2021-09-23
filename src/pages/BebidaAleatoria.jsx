import React, { useState, useEffect } from 'react';

const URL_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

function BebidaAleatoria() {
  const [drink, setDrink] = useState([]);

  useEffect(() => {
    const randomDrink = async () => {
      const response = await fetch(URL_DRINK);
      const drinks = await response.json();

      setDrink(drinks.drinks[0]);
      console.log(drinks.drinks[0]);
    };
    randomDrink();
  }, []);

  if (drink === undefined) {
    return <span>carregando</span>;
  }

  return (
    <div>
      <p>{ drink.strDrink }</p>
      <p>{ drink.strAlcoholic }</p>
      <div>
        { drink && Object.keys(drink)
          .filter((key) => key.includes('strIngredient') && Object.values(key) !== null)
          .map((item, key) => (
            <ul key={ key }>
              <li key={ key }>
                {' '}
                {item}
                {' '}
              </li>
            </ul>
          ))}
        <p>
          { drink.strInstructions }
        </p>
      </div>
    </div>
  );
}

export default BebidaAleatoria;
