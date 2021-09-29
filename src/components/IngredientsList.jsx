import React from 'react';

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
