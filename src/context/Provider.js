import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

export default function Provider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [filterMealButtons, setFilterMealButtons] = useState([]);
  const [filterDrinkButtons, setFilterDrinkButtons] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');

  const contextValue = {
    meals,
    setMeals,
    drinks,
    setDrinks,
    filterMealButtons,
    setFilterMealButtons,
    filterDrinkButtons,
    setFilterDrinkButtons,
    currentCategory,
    setCurrentCategory,
  };

  return (
    <RecipesContext.Provider value={ contextValue }>
      { children }
    </RecipesContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;
