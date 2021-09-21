import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipeContext';
import {
  fetchMealsIngredient,
  fetchMealsName,
  fetchMealsLetter,
  fetchDrinksIngredient,
  fetchDrinksLetter,
  fetchDrinksName,
} from '../services';

export default function RecipeProvider({ children }) {
  const [email, setEmail] = useState('');

  const [loginState, setLogin] = useState({
    email: '',
    password: '',
    isDisabled: true,
  });

  const [redirect, setRedirect] = useState(false);
  const [recipesState, setRecipesState] = useState([]);

  async function handleSearchMeals(searchText, filterRadio) {
    let data = [];
    if (filterRadio === 'ingredient') {
      data = await fetchMealsIngredient(searchText);
      setRecipesState(data);
    }
    if (filterRadio === 'name') {
      data = await fetchMealsName(searchText);
      setRecipesState(data);
    }
    if (filterRadio === 'firstLetter') {
      if (searchText.length > 1) {
        return alert('Sua busca deve conter somente 1 (um) caracter');
      }
      data = await fetchMealsLetter(searchText);
      setRecipesState(data);
    }
    if (data.length === 1) {
      setRedirect(true);
    }
  }

  async function handleSearchDrinks(searchText, filterRadio) {
    let data = [];
    if (filterRadio === 'ingredient') {
      data = await fetchDrinksIngredient(searchText);
      setRecipesState(data);
    }
    if (filterRadio === 'name') {
      data = await fetchDrinksName(searchText);
      setRecipesState(data);
    }
    if (filterRadio === 'firstLetter') {
      if (searchText.length > 1) {
        return alert('Sua busca deve conter somente 1 (um) caracter');
      }
      data = await fetchDrinksLetter(searchText);
      setRecipesState(data);
    }
    if (data.length === 1) {
      setRedirect(true);
    }
  }

  function handleSearch(inputs, pathname) {
    const { searchText, filterRadio } = inputs;
    if (pathname.includes('comidas')) {
      handleSearchMeals(searchText, filterRadio);
    }
    if (pathname.includes('bebidas')) {
      handleSearchDrinks(searchText, filterRadio);
    }
  }

  const context = {
    email,
    setEmail,
    loginState,
    setLogin,
    handleSearch,
    recipesState,
    redirect,
  };

  return (
    <RecipesContext.Provider value={ context }>
      { children }
    </RecipesContext.Provider>
  );
}

RecipeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
