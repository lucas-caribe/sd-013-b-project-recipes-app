import React, { useState } from 'react';
import { userLocation, useHistory } from 'react-router-dom';

const URL_FOODS = 'https://www.themealdb.com/api/json/v1/1/';
const URL_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/';
const ERROR_MESSAGE_CHARACTER = 'Sua busca deve conter somente 1 (um) caracter';
const ERROR_MESSAGE = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

export default function SearchBar() {
  const [searchValue, setSearchText] = useState('');
  const [radioSelect, setRadioSelect] = useState('');

  const { history } = useHistory;
  const { pathname } = userLocation();

  async function checkLength(url) {
    if (searchValue.length === 0) return global.alert(ERROR_MESSAGE);
    if (searchValue.length === 1) {
      const response = await (await fetch(`${url}${radioSelect}${searchValue}`))
        .json();
      return response;
    } global.alert(ERROR_MESSAGE_CHARACTER);
  }

  function recipeCards(result) {
    const slicingTwelve = result.slice([0[11]]);
    return slicingTwelve.map((card, index) => (
      <div key={ index }>
        <p data-testid={ `${index}-recipe-card` }>{card}</p>
        <p data-testid={ `${index}-card-img` }>{card}</p>
        <p data-testid={ `${index}-card-name` }>{card}</p>
      </div>
    ));
  }

  function lengthMeals(result) {
    if (result.length === 1) {
      if (result === 'meals') {
        return history.push(`${pathname}/${result.idMeal}`);
      } return history.push(`${pathname}/${result.idDrink}`);
    } return recipeCards(result);
  }

  async function handleClick() {
    if (radioSelect === 'search.php?f=') {
      if (pathname === '/comidas') {
        return checkLength(URL_FOODS);
      } return checkLength(URL_DRINKS);
    } if (pathname === '/comidas') {
      const { meals } = await (await fetch(`${URL_FOODS}${radioSelect}${searchValue}`))
        .json();
      return lengthMeals(meals);
    } const { drinks } = await (await fetch(`${URL_DRINKS}${radioSelect}${searchValue}`))
      .json();
    return lengthMeals(drinks);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={
            ({ target }) => setSearchText(target.value)
          }
        />
      </div>
      <div>
        <label htmlFor="ingredient">
          Ingrediente
          <input
            type="radio"
            id="ingredient"
            name="searchBar"
            value="filter.php?i="
            data-testid="ingredient-search-radio"
            onChange={
              ({ target }) => setRadioSelect(target.value)
            }
          />
        </label>

        <label htmlFor="nome">
          Nome
          <input
            type="radio"
            id="nome"
            name="searchBar"
            data-testid="name-search-radio"
            value="search.php?s="
            onChange={
              ({ target }) => setRadioSelect(target.value)
            }
          />
        </label>
        <label htmlFor="firstLetter">
          Primeira Letra
          <input
            type="radio"
            id="firstLetter"
            name="searchBar"
            value="search.php?f="
            data-testid="first-letter-search-radio"
            onChange={
              ({ target }) => setRadioSelect(target.value)
            }
          />
        </label>
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => handleClick() }
      >
        Buscar
      </button>
    </div>
  );
}
