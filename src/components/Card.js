import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Card({ id, name, imgUrl, index, isMeal }) {
  const type = isMeal ? 'comidas' : 'bebidas';
  return (
    <div data-testid={ `${index}-recipe-card` } className="cards">
      <Link to={ `/${type}/${id}` }>
        <img
          data-testid={ `${index}-card-img` }
          src={ imgUrl }
          alt={ name }
          className="images"
        />
        <p data-testid={ `${index}-card-name` } className="card-name">{name}</p>
      </Link>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isMeal: PropTypes.bool.isRequired,
};
