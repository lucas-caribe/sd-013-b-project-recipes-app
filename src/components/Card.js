import React from 'react';

function Card(name, image, id) {
  return (
    <div data-testid={ `${id}-recipe-card` }>
      <img data-testid={ `${id}-card-img` } src={ image } alt={ name } />
      <div data-testid={ `${id}-card-name` }>
        {name}
      </div>

    </div>
  );
}

export default Card;
