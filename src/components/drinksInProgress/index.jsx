import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router';
import ButtonsFavoriteAndShare from '../buttonsFavoriteAndShare/index';

export default function DrinksInProgress(
  { Recipe, ButtonDislabedFinalizRecipe, renderIngredients },
) {
  const history = useHistory();
  const { id } = useParams();
  const handleClickFinaliz = () => {
    const d = new Date();
    const data = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
    const nameChaveInLocal = 'doneRecipes';

    const doneRecipe = {
      id: Recipe.idDrink,
      type: 'bebida',
      area: '',
      category: Recipe.strCategory,
      alcoholicOrNot: Recipe.strAlcoholic,
      name: Recipe.strDrink,
      image: Recipe.strDrinkThumb,
      doneDate: data,
      tags: Recipe.strTags || [],
    };

    if (!JSON.parse(localStorage.getItem(nameChaveInLocal))) {
      localStorage.setItem(nameChaveInLocal, JSON.stringify([doneRecipe]));
    } else {
      const arrayRecipesCompleted = JSON.parse(localStorage.getItem(nameChaveInLocal));

      const verification = arrayRecipesCompleted.some((recipe) => (
        recipe.idDrink === Recipe.idDrink
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
        src={ Recipe.strDrinkThumb }
        alt={ Recipe.strDrink }
        style={ { width: '250px' } }
        data-testid="recipe-photo"
      />
      <h3 data-testid="recipe-title">{Recipe.strDrink}</h3>
      <ButtonsFavoriteAndShare testIdShare="share-btn" url={ `http://localhost:3000/bebidas/${id}` } />
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
    idDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
    strCategory: PropTypes.string,
    strInstructions: PropTypes.string,
    strAlcoholic: PropTypes.string,
    strTags: PropTypes.string,
  }).isRequired,
  ButtonDislabedFinalizRecipe: PropTypes.bool.isRequired,
  renderIngredients: PropTypes.func.isRequired,
};
