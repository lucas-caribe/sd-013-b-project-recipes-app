import React from 'react';
import PropTypes from 'prop-types';
import ButtonsFavoriteAndShare from '../buttonsFavoriteAndShare/index';

export default function DrinksInProgress(
  { Recipe, ButtonDislabedFinalizRecipe, handleClickFinaliz, renderIngredients },
) {
  console.log(ButtonDislabedFinalizRecipe);
  return (
    <div>
      <img
        src={ Recipe.strDrinkThumb }
        alt={ Recipe.strDrink }
        style={ { width: '250px' } }
        data-testid="recipe-photo"
      />
      <h3 data-testid="recipe-title">{Recipe.strDrink}</h3>
      <ButtonsFavoriteAndShare />
      <h4 data-testid="recipe-category">{Recipe.strCategory}</h4>
      {
        renderIngredients()
      }
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

DrinksInProgress.propTypes = {
  Recipe: PropTypes.shape({
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
    strCategory: PropTypes.string,
    strInstructions: PropTypes.string,
  }).isRequired,
  ButtonDislabedFinalizRecipe: PropTypes.bool.isRequired,
  handleClickFinaliz: PropTypes.func.isRequired,
  renderIngredients: PropTypes.func.isRequired,
};
