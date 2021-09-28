import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Ingredients from '../helpers/Ingredients';

const URL_SEARCH_FOOD = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const URL_SEARCH_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const RECOMMENDED_FOOD = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const RECOMMENDED_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const SIX = 6;

export default function Details({ match }) {
  const [foodOrDrink, receitaId] = match.url.split('/').slice(1);

  const [recipeData, setRecipeData] = useState([]);
  const [recommends, setRecommends] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(recommends);

  useEffect(() => {
    async function requestRecipe(URL_RECIPE) {
      const results = await (await fetch(URL_RECIPE)).json();
      Object.values(results).forEach((value) => {
        setRecipeData(value);
      });
      setLoading(false);
    }

    async function requestRecommends(URL_RECOMMENDS) {
      const results = await (await fetch(URL_RECOMMENDS)).json();
      Object.values(results).forEach((value) => {
        setRecommends(value.slice(0, SIX));
      });
    }

    switch (foodOrDrink) {
    case 'comidas':
      requestRecipe(URL_SEARCH_FOOD + receitaId);
      requestRecommends(RECOMMENDED_FOOD);
      break;
    case 'bebidas':
      requestRecipe(URL_SEARCH_DRINK + receitaId);
      requestRecommends(RECOMMENDED_DRINKS);
      break;
    default:
      return ('Página invalida');
    }
  }, [foodOrDrink, receitaId]);

  function renderBtns() {
    return (
      <div>
        <button type="button" data-testid="share-btn">Compatilhar</button>
        <button type="button" data-testid="favorite-btn">Favoritar</button>
      </div>
    );
  }

  function renderIngredients() {
    return (
      <div>
        <ul>
          {Ingredients(recipeData[0]).map((ingre, ingreIndex) => (
            Object.entries(ingre).map((entrie) => {
              if (entrie[1] === '') {
                return (
                  <li data-testid={ `${ingreIndex}-ingredient-name-and-measure` }>
                    {entrie[0]}
                  </li>
                );
              }
              return (
                <li
                  data-testid={ `${ingreIndex}-ingredient-name-and-measure` }
                  key={ entrie[0] }
                >
                  {`${entrie[1]} - ${entrie[0]}`}
                </li>
              );
            })
          ))}
        </ul>
        <p data-testid="instructions">{ recipeData[0].strInstructions }</p>
      </div>
    );
  }

  function recommendsRecipes(type) {
    return (
      <div>
        {recommends.map((recomm, index) => (
          <Link
            key={ recomm[`id${type}`] }
            // key={ recomm.idMeal }
            to={ `/${foodOrDrink}/${recomm[`id${type}`]}` }
          >
            <div data-testid={ `${index}-recomendation-card` }>
              <h4 data-testid={ `${index}-recomendation-title` }>
                { recomm[`str${type}`] }
              </h4>
              {/* <h4>{ recomm.strMeal }</h4> */}
              <img
                width="100px"
                src={ recomm[`str${type}Thumb`] }
                alt={ recomm[`str${type}`] }
              />
            </div>
          </Link>
        ))}
      </div>
    );
  }

  function renderFooter() {
    return (
      <div>
        <button type="button" data-testid="start-recipe-btn">
          Iniciar receita
        </button>
      </div>
    );
  }

  function renderFood() {
    return (
      <div>
        <h2 data-testid="recipe-title">{ recipeData[0].strMeal }</h2>
        <img
          alt="recipe"
          width="200px"
          data-testid="recipe-photo"
          src={ recipeData[0].strMealThumb }
        />
        {renderBtns()}
        <p data-testid="recipe-category">{ recipeData[0].strCategory }</p>
        <iframe
          data-testid="video"
          width="400px"
          height="225px"
          src={ recipeData[0].strYoutube.replace('watch?v=', 'embed/') }
          title="YouTube video player"
        />
        {renderIngredients()}
        {renderFooter()}
        {recommendsRecipes('Meal')}
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
        {renderBtns()}
        <p data-testid="recipe-category">{ recipeData[0].strAlcoholic }</p>
        <p>{ recipeData[0].strCategory }</p>
        {renderIngredients()}
        {renderFooter()}
        {recommendsRecipes('Drink')}

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
