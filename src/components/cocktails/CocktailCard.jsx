import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CocktailCard({ index, thumb, name, id }) {
  return (
    <div
      className="card-recipe"
      data-testid={ `${index}-recipe-card` }
    >
      <img
        className="card-img"
        src={ `${thumb}` }
        alt={ name }
        data-testid={ `${index}-card-img` }
      />
      <div data-testid={ `${index}-card-name` }>{`${name}`}</div>
      <Link
        to={ `/bebidas/${id}` }
      >
        X
      </Link>
    </div>
  );
}

CocktailCard.propTypes = {
  thumb: PropTypes.string,
  key: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number,
}.isRequired;
