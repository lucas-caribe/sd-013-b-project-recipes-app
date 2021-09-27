import React from 'react';
import PropTypes from 'prop-types';
import ButtonShare from '../buttonsFavoriteAndShare/buttonShare';

export default function DrinkRecipesCompleted({ recipe, index, handlerClickRedirect }) {
  return (
    <li key={ index }>
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
      <article data-testid={ `${index}-horizontal-top-text` }>
        <p>{ recipe.category }</p>
        <p>{recipe.alcoholicOrNot}</p>
      </article>
      <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>
      <ButtonShare
        datatestid={ `${index}-horizontal-share-btn` }
        url={ `http://localhost:3000/${recipe.type}s/${recipe.id}` }
      />
    </li>
  );
}

DrinkRecipesCompleted.propTypes = {
  recipe: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
  index: PropTypes.number.isRequired,
  handlerClickRedirect: PropTypes.func.isRequired,
};
