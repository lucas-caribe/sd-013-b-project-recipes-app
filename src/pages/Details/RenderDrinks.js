import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';
import helper from './helper';

import WhiteHeart from '../../images/whiteHeartIcon.svg';
import BlackHeart from '../../images/blackHeartIcon.svg';

function inProgressRedirect(history, id) {
  history.push(`/bebidas/${id}/in-progress`);
}

export default function RenderDrink(id) {
  const [drink, setDrink] = useState([]);
  const [loading, setLoading] = useState(true);
  const [recomendations, setRecomendations] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [done, setDone] = useState(false);
  const [copied, setCopied] = useState(false);
  const [progress, setProgress] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const history = useHistory();
  const initial = 6;
  const maxArr = 19;

  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      setDrink(data.drinks[0]);

      const recomendationsFetch = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const recomendationsData = await recomendationsFetch.json();
      recomendationsData.meals.splice(initial, maxArr);
      setRecomendations(recomendationsData.meals);

      if (drink && recomendations) {
        setLoading(false);
      }
    }
    getData();
    helper.verifyLocalStorage(setDone, id);
    helper.verifyProgress(id, setProgress, 'cocktails');
    helper.verifyFavorite(id, setFavorite);
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }
  const ingredients = [];
  const quantity = [];
  const max = 20;
  for (let index = 1; index <= max; index += 1) {
    const key = `strIngredient${index}`;
    const measureKey = `strMeasure${index}`;
    if (drink[key]) {
      ingredients.push(drink[key]);
    }
    if (drink[measureKey]) {
      quantity.push(drink[measureKey]);
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
        onClick={ () => helper.shareButton(setCopied) }
      >
        Share
      </button>
      {
        copied
        && 'Link copiado!'
      }
      <input
        type="image"
        src={ favorite ? BlackHeart : WhiteHeart }
        data-testid="favorite-btn"
        alt="Favorite"
        onClick={
          () => helper.saveFavoriteLocalstorage(drink, favorite, setFavorite, 'idDrink')
        }
      />
      <h3
        data-testid="recipe-category"
      >
        { drink.strAlcoholic }
      </h3>
      {
        ingredients.map(
          (ingredient, index) => (
            <p
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { `${ingredient} ${quantity[index]}` }
            </p>
          ),
        )
      }
      <p
        data-testid="instructions"
      >
        { drink.strInstructions }
      </p>
      <div className="recomendationsArea" onScroll={ () => setDisabled(false) }>
        {
          recomendations.map(
            (drinkk, index) => (
              <div
                key={ index }
                data-testid={ `${index}-recomendation-card` }
                className="card"
                hidden={ index > 1 ? disabled : false }
              >
                <h1
                  data-testid={ `${index}-recomendation-title` }
                >
                  { drinkk.strMeal }
                </h1>
              </div>
            ),
          )
        }
      </div>
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="startRecipe"
        disabled={ done }
        onClick={ () => inProgressRedirect(history, id) }
      >
        {
          progress
            ? 'Continuar Receita'
            : 'Iniciar'
        }
      </button>
    </div>
  );
}
