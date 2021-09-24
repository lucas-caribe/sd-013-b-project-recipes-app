import React from 'react';

function CardsRecomendations(obj) {
  const { title, alcoholic, image } = obj.recomendations;
  return (
    <div>
      <img style={ { width: '40px' } } src={ image } alt="imag" />
      <p>{title}</p>
      {alcoholic ? <p>{alcoholic}</p> : null}
    </div>
  );
}

export default CardsRecomendations;
