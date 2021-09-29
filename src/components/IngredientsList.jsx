import React from 'react';
import PropTypes from 'prop-types';

export default function IngredientsList({ ingredients, measures }) {
  return (
    <ul>
      {ingredients.map((ingredient, index) => {
        if (ingredient) {
          return (
            <li
              key={ ingredient }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              {ingredient}
              {' '}
              -
              {' '}
              {measures[index]}
            </li>);
        }
        return null;
      })}
    </ul>
  );
}

IngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  measures: PropTypes.arrayOf(PropTypes.string).isRequired,
};
