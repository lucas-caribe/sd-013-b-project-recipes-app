import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Copy from 'clipboard-copy';

import WhiteHeart from '../../images/whiteHeartIcon.svg';
import BlackHeart from '../../images/blackHeartIcon.svg';

function verifyProgress(id, setState, chave) {
  const chaves = Object.keys(localStorage);
  const cocktails = chaves.includes('inProgressRecipes')
    ? Object.keys(JSON.parse(localStorage.inProgressRecipes)[chave])
    : false;
  if (cocktails && cocktails.includes(id)) {
    setState(true);
  }
}

function verifyLocalStorage(param, id) {
  const doneRecipes = localStorage.getItem('doneRecipes');
  if (doneRecipes) {
    const recipe = doneRecipes.find((rec) => rec.id === id);
    if (recipe) {
      param(true);
    }
  }
}

function verifyFavorite(id, setState) {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (favoriteRecipes) {
    const isFav = favoriteRecipes.find((rec) => rec.id === id);
    if (isFav) {
      setState(true);
    }
  }
}

function inProgressRedirect(history, id) {
  history.push(`/comidas/${id}/in-progress`);
}

function shareButton(setState) {
  Copy(window.location.href);
  setState(true);
}

function saveFavoriteLocalstorage(recipe, isFavorite, setState) {
  let favoritas = JSON.parse(localStorage.getItem('favoriteRecipes'));
  let indexFinal = null;
  if (favoritas) {
    for (let index = 0; index < favoritas.length; index += 1) {
      if (favoritas[index].id === recipe.idMeal) {
        indexFinal = index;
      }
    }
  } else {
    favoritas = [];
  }
  const obj = {
    id: recipe.idMeal,
    type: 'comida',
    area: recipe.strArea,
    category: recipe.strCategory,
    alcoholicOrNot: '',
    name: recipe.strMeal,
    image: recipe.strMealThumb,
  };
  if (isFavorite) {
    favoritas.splice(indexFinal, 1);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoritas));
    setState(!isFavorite);
  } else {
    favoritas.push(obj);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoritas));
    setState(!isFavorite);
  }
}

export default function RenderFood(id) {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);
  const [recomendations, setRecomendations] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(false);
  const [copied, setCopied] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const history = useHistory();

  const initial = 6;
  const maxArr = 19;

  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      setRecipe(data.meals[0]);
      const recomendationsFetch = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const recomendationsData = await recomendationsFetch.json();
      recomendationsData.drinks.splice(initial, maxArr);

      setRecomendations(recomendationsData.drinks);
      setLoading(false);
    }
    verifyLocalStorage(setDone, id);
    getData();
    verifyProgress(id, setProgress, 'meals');
    verifyFavorite(id, setFavorite);
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }
  const ingredients = [];
  const quantity = [];
  const max = 20;
  for (let index = 1; index <= max; index += 1) {
    const keyIngredient = `strIngredient${index}`;
    const keyMeasure = `strMeasure${index}`;

    if (recipe[keyIngredient] !== '') {
      ingredients.push(recipe[keyIngredient]);
    }
    if (recipe[keyMeasure] !== '') {
      quantity.push(recipe[keyMeasure]);
    }
  }
  const youtube = 32;
  return (
    <div>
      <img
        src={ recipe.strMealThumb }
        alt="thumb"
        data-testid="recipe-photo"
        style={ { height: '150px' } }
      />
      <h2
        data-testid="recipe-title"
      >
        {recipe.strMeal}
      </h2>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ () => shareButton(setCopied) }
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
        onClick={ () => saveFavoriteLocalstorage(recipe, favorite, setFavorite) }
      />
      <h3
        data-testid="recipe-category"
      >
        { recipe.strCategory }
      </h3>
      {
        ingredients.map(
          (ingredient, index) => (
            <p
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { `${ingredient} ${quantity[index] ? quantity[index] : ''}` }
            </p>
          ),
        )
      }
      <p
        data-testid="instructions"
      >
        { recipe.strInstructions }
      </p>
      <iframe
        src={ `https://www.youtube.com/embed/${recipe.strYoutube.slice(youtube)}` }
        frameBorder="0"
        allow="autoplay; encrypted-media"
        title="video"
        data-testid="video"
      />
      <div className="recomendationsArea" onScroll={ () => setDisabled(false) }>
        {
          recomendations.map(
            (receita, index) => (
              <div
                key={ index }
                data-testid={ `${index}-recomendation-card` }
                className="card"
                hidden={ index > 1 ? disabled : false }
              >
                <h1
                  data-testid={ `${index}-recomendation-title` }
                >
                  { receita.strDrink }
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
