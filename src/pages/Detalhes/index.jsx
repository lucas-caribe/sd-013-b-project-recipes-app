import React, { useEffect } from 'react';
import { useDetails } from '../../context/DetailsContext';

function Detalhes({ location: { pathname } }) {
  const { fetchRecipe, item, ingredients } = useDetails();

  useEffect(() => {
    fetchRecipe(pathname);
  }, [pathname]);

  const renderIngredients = () => ingredients
    .map((ingredient, index) => (
      <li
        key={ index }
        data-testid={ `${index}-ingredient-name-and-measure` }
      >
        {ingredient}
      </li>
    ));

  const mealDetails = () => {
    if (!item.meal) {
      return <span>Carregando...</span>;
    } return (
      <main>
        <img
          data-testid="recipe-photo"
          src={ item.meal[0].strMealThumb }
          alt={ item.meal[0].strMeal }
          height="400px"
          width="400px"
        />
        <h1 data-testid="recipe-title">{ item.meal[0].strMeal }</h1>
        <button data-testid="share-btn" type="button">Share</button>
        <button data-testid="favorite-btn" type="button">Favorite</button>
        <h2 data-testid="recipe-category">{ item.meal[0].strCategory }</h2>
        <ul>
          {renderIngredients()}
        </ul>
        <p data-testid="instructions">{item.meal[0].strInstructions}</p>
        {item.meal[0].strYoutube
        && <iframe
          data-testid="video"
          src={ item.meal[0].strYoutube }
          title={ item.meal[0].strMeal }
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
    if (!item.drink) {
      return <span>Carregando...</span>;
    } return (
      <main>
        <img
          data-testid="recipe-photo"
          src={ item.drink[0].strDrinkThumb }
          alt={ item.drink[0].strDrink }
          height="400px"
          width="400px"
        />
        <h1 data-testid="recipe-title">{ item.drink[0].strDrink }</h1>
        <button data-testid="share-btn" type="button">Share</button>
        <button data-testid="favorite-btn" type="button">Favorite</button>
        <h2 data-testid="recipe-category">{ item.drink[0].strAlcoholic }</h2>
        <ul>
          {renderIngredients()}
        </ul>
        <p data-testid="instructions">{item.drink[0].strInstructions}</p>
        <div>
          <div data-testid="0-recomendation-card">Card 1</div>
          <div data-testid="1-recomendation-card">Card 2</div>
        </div>
        <button data-testid="start-recipe-btn" type="button">Iniciar receita</button>
      </main>
    );
  };

  if (pathname.includes('comidas')) {
    return mealDetails();
  }
  return drinkDetails();
}

export default Detalhes;
