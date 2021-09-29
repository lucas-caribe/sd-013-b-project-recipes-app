import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './recipesContext';

const API_ID_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

function RecipesProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [mealDetails, setMealDetails] = useState([]);

  useEffect(() => {
    const fetchMealById = async (idNumber) => {
      const response = await fetch(`${API_ID_URL}${idNumber}`);
      const object = await response.json();
      console.log(object.meals);
      setMealDetails(object.meals);
    };
    fetchMealById('52771');
  }, []);

  const contextValue = {
    meals,
    drinks,
    mealDetails,
    setMeals,
    setDrinks,
  };

  return (
    <RecipesContext.Provider value={ contextValue }>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
