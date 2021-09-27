import React from 'react';
import PropTypes from 'prop-types';

function FavoriteButton({ colorBeforeClick, colorAfterClick, recipe, type }) {
  return (
    <button
      type="button"
      onClick={ () => {
        document.querySelector('.favIcon')
          .setAttribute('src', `${colorAfterClick}`);
        if (type === 'meal') {
          const favRecipe = [{
            id: recipe.idMeal,
            type: 'comida',
            area: recipe.strArea,
            category: recipe.strCategory,
            alcoholicOrNot: '',
            name: recipe.strMeal,
            image: recipe.strMealThumb,
          }];
          localStorage.setItem('favoriteRecipes', JSON.stringify(favRecipe));
        } else {
          const favRecipe = [{
            id: recipe.idDrink,
            type: 'bebida',
            area: '',
            category: recipe.strCategory,
            alcoholicOrNot: recipe.strAlcoholic,
            name: recipe.strDrink,
            image: recipe.strDrinkThumb,
          }];
          localStorage.setItem('favoriteRecipes', JSON.stringify(favRecipe));
        }
      } }
    >
      <img
        className="favIcon"
        data-testid="favorite-btn"
        src={ `${colorBeforeClick}` }
        alt=""
      />
    </button>
  );
}

FavoriteButton.propTypes = {
  colorBeforeClick: PropTypes.string.isRequired,
  colorAfterClick: PropTypes.string.isRequired,
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
};

export default FavoriteButton;
