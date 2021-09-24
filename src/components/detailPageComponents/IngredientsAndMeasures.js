import React from 'react';
import { objectOf, string } from 'prop-types';
import useRedoRecipe from '../../hook/useRedoRecipe';

function IngredientsAndMeasures({ recipe }) {
  const [ingredient, measure] = useRedoRecipe(recipe);

  const createRecipe = (item, key) => (
    <li
      key={ key }
      data-testid={ `${key}-ingredient-name-and-measure` }
    >
      {`${item} - ${measure[key]}`}
    </li>
  );

  return (
    <section className="ing-details">
      <h1>Ingredients</h1>
      <div>
        <ul>
          {ingredient.map((item, key) => createRecipe(item, key))}
        </ul>
      </div>
    </section>
  );
}
IngredientsAndMeasures.propTypes = {
  recipe: objectOf(string).isRequired,
};

export default IngredientsAndMeasures;
