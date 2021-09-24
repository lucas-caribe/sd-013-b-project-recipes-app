import React from 'react';
import PropTypes from 'prop-types';
import RecipeCard from '../RecipeCard';

export default function MealsLibrary({ recipes }) {
  return (
    <div>
      {recipes.map((recipe, index) => (
        <RecipeCard
          key={ index }
          details={ recipe }
          index={ index }
        />
      ))}
    </div>
  );
}

MealsLibrary.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
