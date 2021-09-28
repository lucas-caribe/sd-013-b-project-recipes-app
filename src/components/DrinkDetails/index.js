import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

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

  const [isStarted, setIsStarted] = useState(false);

  const startedRecipes = useSelector(({ foods }) => foods.startedRecipes);
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    const [type, id] = history.location.pathname.split('/').splice(1);
    const recipeType = type === 'comidas' ? 'meals' : 'drinks';
    const recommendedType = type === 'comidas' ? 'drinks' : 'meals';
    fetchRecipeById(recipeType, id);
    fetchRecipesRecommendedList(recommendedType);
  }, [history, fetchRecipeById, fetchRecipesRecommendedList]);

  useEffect(() => {
    const [id] = history.location.pathname.split('/').splice(2);
    if (startedRecipes.length) {
      startedRecipes
        .find((recipe) => recipe.id === id && recipe.startedRecipe);
      setIsStarted(true);
    }
  }, [history, startedRecipes]);

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
        onClick={
          () => handleStartRecipe(history, window.location.href, recipeDetails, dispatch)
        }
      >
        { isStarted ? 'Iniciar receita' : 'Continuar Receita'}
      </button>
    </div>
  );
}

export default DrinkDetails;
