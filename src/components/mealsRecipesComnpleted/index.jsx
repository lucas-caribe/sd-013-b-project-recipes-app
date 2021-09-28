import React from 'react';
import PropTypes from 'prop-types';
import ButtonShare from '../buttonsFavoriteAndShare/buttonShare';

export default function MealsRecipesCompleted({ recipe, index, handlerClickRedirect }) {
  return (
    <li>
      <img
        src={ recipe.image }
        alt={ recipe.name }
        style={ { width: '150px' } }
        data-testid={ `${index}-horizontal-image` }
        onClick={ () => handlerClickRedirect(recipe.id, recipe.type) }
        role="presentation"
      />
      <p
        data-testid={ `${index}-horizontal-name` }
        onClick={ () => handlerClickRedirect(recipe.id, recipe.type) }
        role="presentation"
      >
        { recipe.name}
      </p>
      <p data-testid={ `${index}-horizontal-top-text` }>
        { `${recipe.area} - ${recipe.category}` }
      </p>
      <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>
      <ul>
        {
          recipe.tags.map((tag) => (
            <li
              key={ tag }
              data-testid={ `${index}-${tag}-horizontal-tag` }
            >
              {tag}
            </li>
          ))
        }
      </ul>

      <ButtonShare
        datatestid={ `${index}-horizontal-share-btn` }
        url={ `http://localhost:3000/${recipe.type}s/${recipe.id}` }
      />
    </li>
  );
}

MealsRecipesCompleted.propTypes = {
  recipe: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
  index: PropTypes.number.isRequired,
  handlerClickRedirect: PropTypes.func.isRequired,
};
