import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Detalhes({ location: { pathname } }) {
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchRecipe = async () => {
      if (pathname.includes('comidas')) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${pathname.slice(9)}`);
        const result = await response.json();
        setDetails(result.meals[0]);
      } else {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${pathname.slice(9)}`);
        const result = await response.json();
        setDetails(result.drinks[0]);
      }
    };

    fetchRecipe();
  }, [pathname]);

  const mealsDetails = () => {
    if (Object.values(details).length === 0) {
      return <span>Carregando...</span>;
    } return (
      <main>
        <img
          data-testid="recipe-photo"
          src={ details.strMealThumb }
          alt={ details.strMeal }
          height="400px"
          width="400px"
        />
        <h1 data-testid="recipe-title">{ details.strMeal }</h1>
        <button data-testid="share-btn" type="button">Share</button>
        <button data-testid="favorite-btn" type="button">Favorite</button>
        <h2 data-testid="recipe-category">{ details.strCategory }</h2>
        <ul>
          {Object.entries(details)
            .filter((ingredient) => ingredient[0].includes('Ingredient')
            && ingredient[1])
            .map((filteredIngredient, index) => (
              <li
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                {filteredIngredient[1]}
              </li>
            ))}
        </ul>
        <p data-testid="instructions">{details.strInstructions}</p>
        {details.strYoutube
      && <iframe
        data-testid="video"
        src={ details.strYoutube }
        title={ details.strMeal }
        frameBorder="0"
      /> }
        <div>
          <div data-testid="0-recomendation-card">Card 1</div>
          <div data-testid="1-recomendation-card">Card 2</div>
        </div>
        <button data-testid="start-recipe-btn" type="button">Iniciar receita</button>
      </main>
    );
  };

  const drinkDetails = () => {
    if (Object.values(details).length === 0) {
      return <span>Carregando...</span>;
    } return (
      <main>
        <img
          data-testid="recipe-photo"
          src={ details.strDrinkThumb }
          alt={ details.strDrink }
          height="400px"
          width="400px"
        />
        <h1 data-testid="recipe-title">{ details.strDrink }</h1>
        <button data-testid="share-btn" type="button">Share</button>
        <button data-testid="favorite-btn" type="button">Favorite</button>
        <h2 data-testid="recipe-category">{ details.strCategory }</h2>
        <ul>
          {Object.entries(details)
            .filter((ingredient) => ingredient[0].includes('Ingredient')
            && ingredient[1])
            .map((newIngredient, index) => (
              <li
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                {newIngredient[1]}
              </li>
            ))}
        </ul>
        <p data-testid="instructions">{details.strInstructions}</p>
        {details.strVideo
      && <iframe
        data-testid="video"
        src={ details.strVideo }
        title={ details.strDrink }
        frameBorder="0"
      /> }
        <div>
          <div data-testid="0-recomendation-card">Card 1</div>
          <div data-testid="1-recomendation-card">Card 2</div>
        </div>
        <button data-testid="start-recipe-btn" type="button">Iniciar receita</button>
      </main>
    );
  };

  if (pathname.includes('comidas')) {
    return mealsDetails();
  }
  return drinkDetails();
}

export default Detalhes;
