import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

export default function MealsSuggestions({ meals }) {
  const { meals: suggestions } = meals;
  const numberOfMeals = 6;
  return (
    <div className="div-sugg">
      {suggestions.map((meal, index) => (index < numberOfMeals ? (
        <div
          key={ meal.idMeal }
          data-testid={ `${index}-recomendation-card` }
          className="drink-box"
        >
          <p
            className="title"
            data-testid={ `${index}-recomendation-title` }
          >
            {meal.strMeal}
          </p>
          <img alt="drink-pic" className="imgs" src={ meal.strMealThumb } />
        </div>
      ) : null))}
      {/* {console.log(suggs)} */}
    </div>
  );
}

MealsSuggestions.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
};
