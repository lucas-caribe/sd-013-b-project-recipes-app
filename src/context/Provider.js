import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [statusLoginBtn, setStatusLoginBtn] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [currentPage, setCurrentPage] = useState('');
  const [login, setLogin] = useState('');
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [allRecipes, setAllRecipes] = useState([]);
  // ESSE ESTADO TEM QUE SER SETADO NO BOTÃO 'FINALIZAR RECEITA' DA 'RECEITA EM PROGRESSO'
  const [allRecipesDone, setAllRecipesDone] = useState([
    // OBJETOS MOCKADOS PARA FINS DE TESTE
    {
      idMeal: 52977,
      strMealThumb: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      strCategory: 'Vegetarian',
      strMeal: 'Spicy Arrabiata Penne',
      strTags: 'Pasta, Curry, Macarrão',
      strArea: 'Italian',
      date: '23/06/2020',
      type: 'Meal',
    },
    {
      idDrink: 15997,
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      strCategory: 'Ordinary Drink',
      strAlcoholic: 'Alcoholic',
      strDrink: 'Aquamarine',
      strTags: null,
      date: '23/06/2020',
      type: 'Drink',
    },
  ]);

  const [inputText, setInputText] = useState('');
  const [inputRadio, setInputRadio] = useState('');
  const [apiRadio, setApiRadio] = useState();

  const contextValue = {
    statusLoginBtn,
    setStatusLoginBtn,
    emailIsValid,
    setEmailIsValid,
    passwordIsValid,
    setPasswordIsValid,
    inputText,
    setInputText,
    inputRadio,
    setInputRadio,
    apiRadio,
    setApiRadio,
    currentPage,
    setCurrentPage,
    login,
    setLogin,
    showSearchBar,
    setShowSearchBar,
    allRecipes,
    setAllRecipes,
    allRecipesDone,
    setAllRecipesDone,
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
