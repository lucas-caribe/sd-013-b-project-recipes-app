import PropTypes from 'prop-types';
import React from 'react';

function CardsDrinks({ drinks }) {
  return (
    <div className="cards">
      {drinks.map((drink, index) => (
        <div
          key={ index }
          data-testid={ `${index}-recipe-card` }
          className="card-body"
        >
          <img
            data-testid={ `${index}-card-img` }
            alt={ `Foto ${drink.strDrink}` }
            src={ drink.strDrinkThumb }
          />
          <h4 data-testid={ `${index}-card-name` }>{drink.strDrink}</h4>
        </div>
      ))}
    </div>
  );
}

CardsDrinks.propTypes = {
  drinks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default CardsDrinks;
