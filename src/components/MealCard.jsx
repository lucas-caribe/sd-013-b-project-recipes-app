import React from 'react';
import PropTypes from 'prop-types';

export default function MealCard({ index, thumb, key, name }) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img
        src={ `${thumb}` }
        alt={ name }
        data-testid={ `${index}-card-img` }
      />
      <div data-testid={ `${index}-card-name` }>{`${name}`}</div>
    </div>
  );
}

MealCard.propTypes = {
  thumb: PropTypes.string,
  key: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number,
}.isRequired;
