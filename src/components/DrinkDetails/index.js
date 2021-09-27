import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';

import RecipesContext from '../../context/Recipes/RecipesContext';

import {
  renderIngredients,
  renderRecomendationList,
  handleStartRecipe,
  handleShareBtn,
} from '../helper';

import './style.css';
import share from '../../images/shareIcon.svg';
import favoriteWhite from '../../images/whiteHeartIcon.svg';

function DrinkDetails() {
  const {
    fetchRecipeById,
    recipeDetails,
    recipesRecommendedList,
    fetchRecipesRecommendedList,
  } = useContext(RecipesContext);
  const history = useHistory();

  useEffect(() => {
    const [type, id] = history.location.pathname.split('/').splice(1);
    const recipeType = type === 'comidas' ? 'meals' : 'drinks';
    fetchRecipeById(recipeType, id);
    fetchRecipesRecommendedList('meals');
  }, [history, fetchRecipeById, fetchRecipesRecommendedList]);

  const handleFavotiteBtn = ({ target }) => {
    const { src } = target || target.firstElementChild;
    console.log(src);
  };

  if (!Object.keys(recipeDetails).length) return <div />;

  const {
    strDrink,
    strDrinkThumb,
    strAlcoholic,
    strInstructions,
  } = recipeDetails;

  return (
    <div>
      <img
        className="recipe-photo"
        data-testid="recipe-photo"
        src={ strDrinkThumb }
        alt={ strDrink }
      />
      <h2 data-testid="recipe-title">{strDrink}</h2>
      <div>
        <button
          type="button"
          data-testid="share-btn"
          onClick={ () => handleShareBtn(window.location.href) }
        >
          <img src={ share } alt="share" />
        </button>
        <button type="button" data-testid="favorite-btn" onClick={ handleFavotiteBtn }>
          <img src={ favoriteWhite } alt="favorite" />
        </button>
        <div className="share-text">Link copiado!</div>
      </div>
      <p data-testid="recipe-category">{strAlcoholic}</p>
      <ul>
        { renderIngredients(recipeDetails) }
      </ul>
      <p data-testid="instructions">{strInstructions}</p>
      <div className="recomendation-list">
        {
          recipesRecommendedList
            .map((card, index) => renderRecomendationList(card, index, 'Meal'))
        }
      </div>
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="start-recipe-btn"
        onClick={ () => handleStartRecipe(history) }
      >
        Iniciar receita
      </button>
    </div>
  );
}

export default DrinkDetails;
