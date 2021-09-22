import React from 'react';
import '../styles/cards.css';

function Card(name, image, id) {
  return (
    <div data-testid={ `${id}-recipe-card` }>
      <img
        className="img-Card"
        data-testid={ `${id}-card-img` }
        src={ image }
        alt={ name }
      />
      <div data-testid={ `${id}-card-name` }>
        {name}
      </div>
    </div>
  );
}

export default Card;
