import React from 'react';
import PropTypes from 'prop-types';

import shareIcon from '../images/shareIcon.svg';

function RecipeCard({ recipe, index }) {
  const {
    type, alcoholicOrNot, area, category, name, image, doneDate, tags,
  } = recipe;
  return (
    <div className="recipes-done-card">
      <img
        className="recipes-done-card-img"
        data-testid={ `${index}-horizontal-image` }
        src={ image }
        alt={ `Foto ${name}` }
      />
      <div>
        <h5
          data-testid={ `${index}-horizontal-top-text` }
        >
          { type === 'bebida' && alcoholicOrNot }
          { type === 'comida' && `${area} - ${category}` }
        </h5>
        <h4 data-testid={ `${index}-horizontal-name` }>{ name }</h4>
        <p>
          { 'Feita em: ' }
          <span data-testid={ `${index}-horizontal-done-date` }>
            { doneDate }
          </span>
        </p>
        <img
          className="recipes-done-card-share"
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          alt="Compartilhar"
        />
        { type === 'comida' && (
          <div className="recipes-done-tags">
            {tags.map((tag) => (
              <span
                key={ tag }
                data-testid={ `${index}-${tag}-horizontal-tag` }
              >
                { tag }
              </span>
            ))}
          </div>) }
      </div>
    </div>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    type: PropTypes.string.isRequired,
    alcoholicOrNot: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    doneDate: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.string,
    ).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default RecipeCard;
