import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ type, index, thumb, name }) => {
  if (type === 'ingredient') {
    return (
      <div
        className="card"
        id={ `${type.toLowerCase()}-card-${index}` }
        data-testid={ `${index}-ingredient-card` }
      >
        <img
          className="thumb"
          id={ `${type.toLowerCase()}-thumb-${index}` }
          data-testid={ `${index}-card-img` }
          src={ thumb }
          alt={ `Imagem ilustrativa de ${name}` }
        />
        <span
          className="name"
          id={ `${type.toLowerCase()}-name-${index}` }
          data-testid={ `${index}-card-name` }
        >
          { name }
        </span>
      </div>
    );
  }
  return (
    <div
      className="card"
      id={ `${type.toLowerCase()}-card-${index}` }
      data-testid={ `${index}-recipe-card` }
    >
      <img
        className="thumb"
        id={ `${type.toLowerCase()}-thumb-${index}` }
        data-testid={ `${index}-card-img` }
        src={ thumb }
        alt={ `Imagem ilustritiva de ${name}` }
      />
      <span
        className="name"
        id={ `${type.toLowerCase()}-name-${index}` }
        data-testid={ `${index}-card-name` }
      >
        { name }
      </span>
    </div>
  );
};
Card.propTypes = {
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  thumb: PropTypes.string,
  name: PropTypes.string,
};

Card.defaultProps = {
  thumb: undefined,
  name: undefined,
};

export default Card;
