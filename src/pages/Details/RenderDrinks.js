import React, { useEffect, useState } from 'react';
import dataDrinks from './data';

export default function RenderDrink(id) {
  const [drink, setDrink] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      setDrink(data.drinks[0]);
      setLoading(false);
    }
    getData();
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }
  const ingredients = [];
  const max = 20;
  for (let index = 1; index <= max; index += 1) {
    const key = `strIngredient${index}`;
    if (drink[key]) {
      ingredients.push(drink[key]);
    }
  }
  return (
    <div>
      <img
        src={ drink.strDrinkThumb }
        alt="thumb"
        data-testid="recipe-photo"
        style={ { height: '150px' } }
      />
      <h2
        data-testid="recipe-title"
      >
        {drink.strDrink}
      </h2>
      <button
        type="button"
        data-testid="share-btn"
      >
        Share
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
      >
        Fav
      </button>
      <h3
        data-testid="recipe-category"
      >
        { drink.strCategory }
      </h3>
      {
        ingredients.map(
          (ingredient, index) => (
            <p
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { ingredient }
            </p>
          ),
        )
      }
      <p
        data-testid="instructions"
      >
        { drink.strInstructions }
      </p>
      {
        dataDrinks.map(
          (drinkk, index) => (
            <h1
              key={ index }
              data-testid={ `${index}-recomendation-card` }
            >
              { drinkk.strDrink }
            </h1>
          ),
        )
      }
      <button
        type="button"
        data-testid="start-recipe-btn"
      >
        Iniciar
      </button>
    </div>
  );
}
