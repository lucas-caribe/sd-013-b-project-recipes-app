import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { ingredientAPI, nameAPI, fistLetterAPI } from '../services/foodAPI';
import { ingredientDrinkAPI,
  nameDrinkAPI, fistLetterDrinkAPI } from '../services/drinksAPI';
import FoodContext from '../context/FoodContext';

export default function SearchBar({ page }) {
  const [text, setText] = useState('');
  const [ingredient, setIngredient] = useState(false);
  const [name, setName] = useState(false);
  const [letter, setLetter] = useState(false);
  const { setFoodState, setDrinkState } = useContext(FoodContext);

  const checkLetter = (input) => {
    if (input.length !== 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
    setLetter(input);
  };

  function handleIngredient() {
    setIngredient(!ingredient);
    setName(false);
    setLetter(false);
  }

  function handleName() {
    setName(!name);
    setIngredient(false);
    setLetter(false);
  }

  function handleLetter(l) {
    checkLetter(l);
    setLetter(!letter);
    setIngredient(false);
    setName(false);
  }

  async function iAPI(i) {
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

  function foodPageAPI() {
    if (ingredient) iAPI(text);
    if (name) nAPI(text);
    if (letter) lAPI(text);
    return null;
  }

  function drinkPageAPI() {
    if (ingredient) idrinkAPI(text);
    if (name) ndrinkAPI(text);
    if (letter) ldrinkAPI(text);
  }

  function handleClick() {
    if (page === 'Comidas') {
      foodPageAPI();
    }
    if (page === 'Bebidas') {
      drinkPageAPI();
    }
  }

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        placeholder="Pesquise sua receita"
        onChange={ (e) => setText(e.target.value) }
      />
      <label htmlFor="ingredient-search">
        Ingrediente
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          id="ingredient-search"
          name="recepies"
          onClick={ () => (handleIngredient()) }
        />
      </label>
      <label htmlFor="name-search">
        Nome
        <input
          type="radio"
          data-testid="name-search-radio"
          id="name-search"
          name="recepies"
          onClick={ () => (handleName()) }
        />
      </label>
      <label htmlFor="first-letter-search">
        Primeira letra
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          id="first-letter-search"
          name="recepies"
          onClick={ () => (handleLetter(text)) }
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Buscar
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  page: PropTypes.string,
}.isRequired;
