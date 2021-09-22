import React from 'react';
import PropTypes from 'prop-types';

function RecipeCard({ name, thumb, index }) {
  const maxIndex = 12;
  if (index < maxIndex) {
    return (
      <div data-testid={ `${index}-recipe-card` }>
        <span data-testid={ `${index}-card-name` }>{ name }</span>
        <img
          data-testid={ `${index}-card-img` }
          src={ thumb }
          alt={ `imagem ${name}` }
          style={ { height: '100px' } }
        />
      </div>
    );
  }
  return null;
}

export default RecipeCard;

RecipeCard.propTypes = {
  name: PropTypes.string,
  thumb: PropTypes.string,
}.isRequired;
