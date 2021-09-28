import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

export default function DrinksSuggestions({ drinks }) {
  const numberOfDrinks = 6;

  return (
    <div className="div-sugg">
      {drinks.map((drink, index) => (index < numberOfDrinks ? (
        <div
          key={ drink.idDrink }
          data-testid={ `${index}-recomendation-card` }
          className="drink-box"
        >
          <p
            className="title"
            data-testid={ `${index}-recomendation-title` }
          >
            {drink.strDrink}
          </p>
          <img alt="drink-pic" className="imgs" src={ drink.strDrinkThumb } />
        </div>
      ) : null))}
      {console.log(drinks)}
    </div>
  );
}

DrinksSuggestions.propTypes = {
  drinks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
