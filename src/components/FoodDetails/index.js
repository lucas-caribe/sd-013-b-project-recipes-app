import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router';

import RecipesContext from '../../context/Recipes/RecipesContext';

import './style.css';
import share from '../../images/shareIcon.svg';
import favoriteWhite from '../../images/whiteHeartIcon.svg';
// import favoriteBlack from '../../images/blackHeartIcon.svg';

function FoodDetails() {
  const { fetchRecipeById, recipeDetails } = useContext(RecipesContext);
  const location = useLocation();

  useEffect(() => {
    const [type, id] = location.pathname.split('/').splice(1);
    const recipeType = type === 'comidas' ? 'meals' : 'drinks';
    fetchRecipeById(recipeType, id);
  }, [location, fetchRecipeById]);

  const handleFavotiteBtn = ({ target }) => {
    const { src } = target || target.firstElementChild;
    console.log(src);
  };

  const renderIngredients = () => {
    const ingredientsList = Object.entries(recipeDetails)
      .filter((e) => (e[0].includes('Ingredient') && e[1]));
    const measuresList = Object.entries(recipeDetails)
      .filter((e) => (e[0].includes('Measure') && e[1]));
    return ingredientsList.map((ingredient, i) => (
      <li
        key={ ingredient[0] }
        data-testid={ `${i}-ingredient-name-and-measure` }
      >
        {`${ingredient[1]} - ${measuresList[i][1]}`}
      </li>));
  };

  if (!Object.keys(recipeDetails).length) return <div />;

  const {
    strMeal,
    strMealThumb,
    strCategory,
    strInstructions,
    strYoutube,
  } = recipeDetails;

  return (
    <div>
      <img
        className="recipe-photo"
        data-testid="recipe-photo"
        src={ strMealThumb }
        alt={ strMeal }
      />
      <h2 data-testid="recipe-title">{strMeal}</h2>
      <button type="button" data-testid="share-btn">
        <img src={ share } alt="share" />
      </button>
      <button type="button" data-testid="favorite-btn" onClick={ handleFavotiteBtn }>
        <img src={ favoriteWhite } alt="favorite" />
      </button>
      <p data-testid="recipe-category">{strCategory}</p>
      <ul>
        { renderIngredients() }
      </ul>
      <p data-testid="instructions">{strInstructions}</p>
      <iframe
        width="360"
        height="200"
        src={ `https://www.youtube.com/embed/${strYoutube.split('=')[1]}` }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        data-testid="video"
      />
      <p data-testid="0-recomendation-card">card de receitas recomendadas</p>
      <button type="button" data-testid="start-recipe-btn">Iniciar receita</button>
    </div>
  );
}

export default FoodDetails;
