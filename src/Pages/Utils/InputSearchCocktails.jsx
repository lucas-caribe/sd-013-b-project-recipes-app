import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import RecipesContext from '../../Context/RecipesContext';

export default function InputSearchCocktails() {
  const [search, setSearch] = useState('');
  const [cocktailInput, setCocktailInput] = useState('');
  const PRIMEIRA_LETRA = 'Primeira letra';
  const apiIngredienteUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?';
  const apiCocktails = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';
  const { api, setApi } = useContext(RecipesContext);

  const handleClick = () => {
    const apiIngredienteRequest = async () => {
      const response = await fetch(`${apiIngredienteUrl}i=${cocktailInput}`)
        .then((resp) => resp.json());
      setApi(response);
    };

    const apiNomeRequest = async () => {
      const response = await fetch(`${apiCocktails}s=${cocktailInput}`)
        .then((resp) => resp.json());
      setApi(response);
    };

    const apiLetraRequest = async () => {
      const response = await fetch(`${apiCocktails}f=${cocktailInput}`)
        .then((resp) => resp.json());
      setApi(response);
    };

    if (search === PRIMEIRA_LETRA && cocktailInput.length !== 1) {
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

  if (api.drinks) {
    return <Redirect to={ `/bebidas/${api.drinks[0].idDrink}` } />;
  }

  return (
    <>
      <input
        type="text"
        name="search"
        id="search"
        data-testid="search-input"
        onChange={ (ev) => setCocktailInput(ev.target.value) }
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
