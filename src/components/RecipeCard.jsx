import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function RecipeCard({ id, recipeType, name, thumb, index }) {
  const getRouteLink = () => {
    if (recipeType === 'meal') return `comidas/${id}`;
    return `bebidas/${id}`;
  };

  const maxIndex = 12;
  if (index < maxIndex) {
    return (
      <Link to={ getRouteLink() }>
        <div className="recipe-card" data-testid={ `${index}-recipe-card` }>
          <img
            data-testid={ `${index}-card-img` }
            src={ thumb }
            alt={ `imagem ${name}` }
          />
          <div className="recipe-card-title-wrapper">
            <span data-testid={ `${index}-card-name` }>{ name }</span>
          </div>
        </div>
      </Link>
    );
  }
  return null;
}

export default RecipeCard;

RecipeCard.propTypes = {
  name: PropTypes.string,
  thumb: PropTypes.string,
}.isRequired;
