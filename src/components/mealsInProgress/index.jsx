import React from 'react';
import PropTypes from 'prop-types';
import ButtonsFavoriteAndShare from '../buttonsFavoriteAndShare';

export default function MealsInProgress(
  {
    Recipe, ButtonDislabedFinalizRecipe, handleClickFinaliz,
    renderIngredients,
  },
) {
  return (
    <div>
      <img
        src={ Recipe.strMealThumb }
        alt={ Recipe.strMeal }
        style={ { width: '250px' } }
        data-testid="recipe-photo"
      />
      <h3 data-testid="recipe-title">{Recipe.strMeal}</h3>
      <ButtonsFavoriteAndShare />
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
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strInstructions: PropTypes.string,
  }).isRequired,
  ButtonDislabedFinalizRecipe: PropTypes.bool.isRequired,
  handleClickFinaliz: PropTypes.func.isRequired,
  renderIngredients: PropTypes.func.isRequired,
};
