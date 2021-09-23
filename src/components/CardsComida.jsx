import PropTypes from 'prop-types';
import React from 'react';

function CardsComida({ comidas }) {
  return (
    <div className="cards">
      {comidas.map((comida, index) => (
        <div
          key={ index }
          data-testid={ `${index}-recipe-card` }
          className="card-body"
        >
          <img
            data-testid={ `${index}-card-img` }
            alt={ `Foto ${comida.strMeal}` }
            src={ comida.strMealThumb }
          />
          <h4 data-testid={ `${index}-card-name` }>{comida.strMeal}</h4>
        </div>
      ))}
    </div>
  );
}

CardsComida.propTypes = {
  comidas: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

export default CardsComida;
