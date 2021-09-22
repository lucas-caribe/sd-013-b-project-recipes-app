import React, { useState } from 'react';

export default function InputSearch() {
  const [search, setSearch] = useState('');
  const [api, setApi] = useState([]);
  console.log(api);
  const [mealInput, setMealInput] = useState('');
  const PRIMEIRA_LETRA = 'Primeira letra';
  const apiIngredienteUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?';
  const apiMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?';

  const handleClick = () => {
    const apiIngredienteRequest = async () => {
      const response = await fetch(`${apiIngredienteUrl}i=${mealInput}`)
        .then((resp) => resp.json());
      setApi(response);
    };

    const apiNomeRequest = async () => {
      const response = await fetch(`${apiMealsUrl}s=${mealInput}`)
        .then((resp) => resp.json());
      setApi(response);
    };

    const apiLetraRequest = async () => {
      const response = await fetch(`${apiMealsUrl}f=${mealInput}`)
        .then((resp) => resp.json());
      setApi(response);
    };

    if (search === PRIMEIRA_LETRA && mealInput.length !== 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }

    switch (search) {
    case 'Ingrediente':
      apiIngredienteRequest();
      break;
    case 'Nome':
      apiNomeRequest();
      break;
    case PRIMEIRA_LETRA:
      apiLetraRequest();
      break;
    default:
      break;
    }
  };

  return (
    <>
      <input
        type="text"
        name="search"
        id="search"
        data-testid="search-input"
        onChange={ (ev) => setMealInput(ev.target.value) }
      />
      <label htmlFor="Ingrediente">
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          id="Ingrediente"
          name="search"
          onClick={ () => setSearch('Ingrediente') }
        />
        Ingrediente
      </label>
      <label htmlFor="Nome">
        <input
          type="radio"
          data-testid="name-search-radio"
          id="Nome"
          name="search"
          onClick={ () => setSearch('Nome') }
        />
        Nome
      </label>
      <label htmlFor="Primeira letra">
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          id="Primeira letra"
          name="search"
          onClick={ () => setSearch(PRIMEIRA_LETRA) }
        />
        Primeira letra
      </label>
      <button
        onClick={ handleClick }
        type="button"
        data-testid="exec-search-btn"
      >
        Buscar
      </button>
    </>
  );
}
