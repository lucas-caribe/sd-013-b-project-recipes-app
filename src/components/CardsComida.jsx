import PropTypes from 'prop-types';
import React from 'react';

function CardsComida({ comida }) {
  return (
    <>
      {comida.map((comidas, index) => (
        <div key={ index } data-testid={ `${index}-recipe-card` }>
          <img
            data-testid={ `${index}-card-img` }
            alt="imagemComida"
            src={ comidas.strMealThumb }
          />
          <p data-testid={ `${index}-card-name` }>{comidas.strMeal}</p>
        </div>
      ))}
    </>
  );
}

CardsComida.propTypes = {
  comida: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

export default CardsComida;
