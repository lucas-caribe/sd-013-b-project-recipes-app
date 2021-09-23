import PropTypes from 'prop-types';
import React from 'react';

function CardsDrinks({ drinks }) {
  return (
    <>
      {drinks.map((drink, index) => (
        <div key={ index } data-testid={ `${index}-recipe-card` }>
          <img
            data-testid={ `${index}-card-img` }
            alt="imagemComida"
            src={ drink.strDrinkThumb }
          />
          <p data-testid={ `${index}-card-name` }>{drink.strDrink}</p>
        </div>
      ))}
    </>
  );
}

CardsDrinks.propTypes = {
  drinks: PropTypes.string.isRequired,
};

export default CardsDrinks;
