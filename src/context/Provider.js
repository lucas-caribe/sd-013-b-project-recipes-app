import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const URL_FOOD = 'https://www.themealdb.com/api/json/v1/1/random.php';

function Provider({ children }) {
  const [statusLoginBtn, setStatusLoginBtn] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [login, setLogin] = useState('');
  const [food, setFood] = useState([]);

  useEffect(() => {
    const randomFood = async () => {
      const response = await fetch(URL_FOOD);
      const foods = await response.json();
      // console.log(foods.meals[0].strMeal);
      setFood(foods.meals[0].strMeal);
    };
    randomFood();
  }, []);

  const contextValue = {
    statusLoginBtn,
    setStatusLoginBtn,
    emailIsValid,
    setEmailIsValid,
    passwordIsValid,
    setPasswordIsValid,
    login,
    setLogin,
    food,
    setFood,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
