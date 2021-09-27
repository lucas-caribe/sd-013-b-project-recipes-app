import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const URL_SEARCH_FOOD = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const URL_SEARCH_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export default function Details({ match }) {
  const index = 0;
  const [foodOrDrink, receitaId] = match.url.split('/').slice(1);
  // console.log(typeof receitaId);

  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(recipeData);

  useEffect(() => {
    async function requestRecipe(URL_RECIPE) {
      const results = await (await fetch(URL_RECIPE)).json();
      Object.values(results).forEach((value) => {
        setRecipeData(value);
        setLoading(false);
      });
    }

    switch (foodOrDrink) {
    case 'comidas':
      requestRecipe(URL_SEARCH_FOOD + receitaId);
      break;
    case 'bebidas':
      requestRecipe(URL_SEARCH_DRINK + receitaId);
      break;
    default:
      return ('Página invalida');
    }
  }, [foodOrDrink, receitaId]);

  function renderFood() {
    return (
      <div>
        <h2>Details</h2>
        <img src="https://picsum.photos/200" data-testid="recipe-photo" alt="recipe" />
        <p data-testid="recipe-title">Foto da COMIDA</p>
        <button type="button" data-testid="share-btn">Compatilhar</button>
        <button type="button" data-testid="favorite-btn">Favoritar</button>
        <p data-testid="recipe-category">Categoria</p>
        <ul>
          <li data-testid={ `${index}-ingredient-name-and-measure` }>
            Ingrediente
          </li>
        </ul>
        <p data-testid="instructions">Instruções</p>
        <iframe
          data-testid="video"
          width="766"
          height="431"
          src="https://www.youtube.com/embed/7X8II6J-6mU"
          title="YouTube video player"
        />
        <p data-testid={ `${index}-recomendation-card` }> recomendads </p>
        <button type="button" data-testid="start-recipe-btn">
          Iniciar receita
        </button>
      </div>
    );
  }

  function renderDrink() {
    return (
      <div>
        <h2 data-testid="recipe-title">{ recipeData[0].strDrink }</h2>
        <img
          src={ recipeData[0].strDrinkThumb }
          width="200px"
          data-testid="recipe-photo"
          alt="recipe"
        />
        <br />
        <button type="button" data-testid="share-btn">Compatilhar</button>
        <button type="button" data-testid="favorite-btn">Favoritar</button>
        <p data-testid="recipe-category">{ recipeData[0].strCategory }</p>
        <ul>
          <li data-testid={ `${index}-ingredient-name-and-measure` }>
            Ingrediente
          </li>
        </ul>
        <p data-testid="instructions">{recipeData[0].strInstructions}</p>
        <p data-testid={ `${index}-recomendation-card` }> Recomendads </p>
        <button type="button" data-testid="start-recipe-btn">
          Iniciar receita
        </button>
      </div>
    );
  }

  if (loading) {
    return (<p>Carregando</p>);
  }

  switch (foodOrDrink) {
  case 'comidas':
    return renderFood();
  case 'bebidas':
    return renderDrink();
  default:
    return (<p>Página invalida</p>);
  }
}

Details.propTypes = {
  match: PropTypes.object,
}.isRequired;
