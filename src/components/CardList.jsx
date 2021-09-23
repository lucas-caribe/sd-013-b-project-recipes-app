import PropTypes from 'prop-types';
import React from 'react';
import Card from './Card';

function CardList({ object: { meals, drinks } }) {
  return (
    <div>
      {(meals) ? meals.map((food, index) => (
        <Card
          key={ index }
          id={ index }
          image={ food.strMealThumb }
          name={ food.strMeal }
        />
      )) : null}

      {(drinks) ? drinks.map((drink, index) => (
        <Card
          key={ index }
          id={ index }
          image={ drink.strDrinkThumb }
          name={ drink.strDrink }
        />
      )) : null}

    </div>
  );
}

CardList.propTypes = {
  object: PropTypes.shape({
    meals: PropTypes.objectOf(PropTypes.object),
    drinks: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
};

export default CardList;
