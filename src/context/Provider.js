import React, { useState } from 'react';
import PropTypes from 'prop-types';
import foodContext from './FoodContext';

const Provider = ({ children }) => {
  const [foodState, setFoodState] = useState([]);
  const [drinkState, setDrinkState] = useState([]);

  const contextValue = {
    foodState,
    setFoodState,
    drinkState,
    setDrinkState,
  };

  /* async function iAPI(i) {
    const ingredientSearch = await ingredientAPI(i);
    setFoodState(ingredientSearch);
  }

  async function nAPI(n) {
    const nameSearch = await nameAPI(n);
    setFoodState(nameSearch);
  }

  async function lAPI(l) {
    const letterSearch = await fistLetterAPI(l);
    setFoodState(letterSearch);
  }

  async function idrinkAPI(i) {
    const drinkIngredient = await ingredientDrinkAPI(i);
    setDrinkState(drinkIngredient);
  }

  async function ndrinkAPI(i) {
    const drinkName = await nameDrinkAPI(i);
    setDrinkState(drinkName);
  }

  async function ldrinkAPI(i) {
    const drinkLetter = await fistLetterDrinkAPI(i);
    setDrinkState(drinkLetter);
  }

  useEffect(() => {
    console.log('oi');
    iAPI(test);
    nAPI(test);
    lAPI(test);
    idrinkAPI(test);
    ndrinkAPI(test);
    ldrinkAPI(test);
  }, []); */

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
