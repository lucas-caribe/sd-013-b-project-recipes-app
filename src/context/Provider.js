import React, { useState } from 'react';
import PropTypes from 'prop-types';
import foodContext from './FoodContext';

const Provider = ({ children }) => {
  const [foodState, setFoodState] = useState([]);
  const [drinkState, setDrinkState] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);
  const [drinkCategory, setDrinkCategory] = useState([]);

  const contextValue = {
    foodState,
    setFoodState,
    drinkState,
    setDrinkState,
    foodCategory,
    setFoodCategory,
    drinkCategory,
    setDrinkCategory,
  };

  return (
    <foodContext.Provider value={ contextValue }>
      { children }
    </foodContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
