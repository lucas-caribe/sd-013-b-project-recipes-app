import React from 'react';
import PropTypes from 'prop-types';

function ButtonsFavoriteRecipes({ filterFavoriteRecipe }) {
  return (
    <div>
      <button
        type="button"
        onClick={ () => filterFavoriteRecipe('All') }
      >
        All
      </button>

      <button
        type="button"
        onClick={ () => filterFavoriteRecipe('Food') }
      >
        Food
      </button>

      <button
        type="button"
        onClick={ () => filterFavoriteRecipe('Drink') }
      >
        Drinks
      </button>
    </div>
  );
}

ButtonsFavoriteRecipes.propTypes = {
  filterFavoriteRecipe: PropTypes.func.isRequired,
};

export default ButtonsFavoriteRecipes;
