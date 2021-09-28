import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import ButtonsFavoriteAndShare from '../buttonsFavoriteAndShare';

export default function MealsInProgress(
  {
    Recipe, ButtonDislabedFinalizRecipe,
    renderIngredients,
  },
) {
  const history = useHistory();

  const handleClickFinaliz = () => {
    const d = new Date();
    const data = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;

    const doneRecipe = {
      id: Recipe.idMeal,
      type: 'comida',
      area: Recipe.strArea,
      category: Recipe.strCategory,
      alcoholicOrNot: '',
      name: Recipe.strMeal,
      image: Recipe.strMealThumb,
      doneDate: data,
      tags: Recipe.strTags.split(','),
    };

    const nameChaveInLocal = 'doneRecipes';
    if (!JSON.parse(localStorage.getItem(nameChaveInLocal))) {
      localStorage.setItem(nameChaveInLocal, JSON.stringify([doneRecipe]));
    } else {
      const arrayRecipesCompleted = JSON.parse(localStorage.getItem(nameChaveInLocal));

      const verification = arrayRecipesCompleted.some((recipe) => (
        recipe.idMeal === Recipe.idMeal
      ));

      if (!verification) {
        localStorage.setItem(nameChaveInLocal, JSON.stringify(
          [...arrayRecipesCompleted, doneRecipe],
        ));
      }
    }
    history.push('/receitas-feitas');
  };

  return (
    <div>
      <img
        src={ Recipe.strMealThumb }
        alt={ Recipe.strMeal }
        style={ { width: '250px' } }
        data-testid="recipe-photo"
      />
      <h3 data-testid="recipe-title">{Recipe.strMeal}</h3>
      <ButtonsFavoriteAndShare testIdShare="share-btn" url={ `http://localhost:3000/comidas/${Recipe.idMeal}` } />
      <h4 data-testid="recipe-category">{Recipe.strCategory}</h4>
      <ul>
        {renderIngredients()}
      </ul>
      <p data-testid="instructions">
        {Recipe.strInstructions}
      </p>
      <button
        type="button"
        data-testid="finish-recipe-btn"
        disabled={ ButtonDislabedFinalizRecipe }
        onClick={ handleClickFinaliz }
      >
        Finalizar
      </button>
    </div>
  );
}

MealsInProgress.propTypes = {
  Recipe: PropTypes.shape({
    idMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strInstructions: PropTypes.string,
    strArea: PropTypes.string,
    strTags: PropTypes.string,
  }).isRequired,
  ButtonDislabedFinalizRecipe: PropTypes.bool.isRequired,
  renderIngredients: PropTypes.func.isRequired,
};
