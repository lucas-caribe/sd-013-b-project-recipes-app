import React from 'react';
<<<<<<< HEAD
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
=======
import { useHistory } from 'react-router-dom';

import '../styles/card.css';

function Card(name, image, id, { i, category }) {
  const history = useHistory();
  const recipeType = category === 'meals' ? 'comidas' : 'bebidas';

  return (
    <div
      key={ i }
      onClick={ () => history.push(`/${recipeType}/${id}`) }
      data-testid={ `${i}-recipe-card` }
      className="card"
      tabIndex="-1"
      role="button"
      onKeyPress={ () => console.log(1) }
    >
      <img data-testid={ `${i}-card-img` } src={ image } alt="ab" />
      <h4 data-testid={ `${i}-card-name` }>
        {name}
      </h4>
>>>>>>> 6e4bb0ee84999b837b54fdd7e97e0bee8a5a100c
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
