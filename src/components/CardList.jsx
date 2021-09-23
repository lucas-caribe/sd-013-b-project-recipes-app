import PropTypes from 'prop-types';
import React from 'react';

function CardList({ foods }) {
  console.log(foods);
  return (
    <div>
      {(foods !== undefined) ? foods.map((food, index) => (
        <li key={ index }>{food.strMeal}</li>
      )) : null}
    </div>
  );
}

CardList.propTypes = {
  foods: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

export default CardList;
