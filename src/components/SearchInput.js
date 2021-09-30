import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { fetchApiRecipes as fetchFood } from '../services';
import { useRecipesContext } from '../context/Provider';

import searchIcon from '../images/searchIcon.svg';

export default function SearchInput() {
  const { recipesApp, setRecipesApp } = useRecipesContext();
  const history = useHistory();

  const [headerFilterBar, setHeaderFilterBar] = useState({
    search: '',
    radioSelect: '',
    typeRecipe: [],
  });
  const [toggleInput, setToggleInput] = useState(false);

  // Verifica o caminho atual da pagina para fazer a requisicao de acordo com o tipo da pagina;
  const { pathname } = useLocation();
  const currentePageType = pathname.includes('/comidas') ? 'foods' : 'drinks';

  // Define as constantes que serao utilizadas durante a requisicao;
  const typeLowCase = pathname.includes('/comidas') ? 'meals' : 'drinks';
  const typeUpperCase = pathname.includes('/comidas') ? 'Meal' : 'Drink';

  function handleSearchBar({ target }) {
    const { name, value } = target;
    setHeaderFilterBar({ ...headerFilterBar, [name]: value });
  }
  function requestApi() {
    const { radioSelect, search } = headerFilterBar;
    fetchFood(radioSelect, search, currentePageType)
      .then((request) => {
        const typeRecipe = request[typeLowCase];
        if (typeRecipe.length === 1) {
          setRecipesApp({
            ...recipesApp, dataCategoryFoodAPI: typeRecipe, loading: false,
          });
          history.push(`${pathname}/${typeRecipe[0][`id${typeUpperCase}`]}`);
        } else {
          setRecipesApp({
            ...recipesApp, dataCategoryFoodAPI: typeRecipe, loading: false, filtrar: true,
          });
        }
      })
      .catch(() => global
        .alert('Sinto muito, não encontramos nenhuma receita para esses filtros.'));
  }
  function handleClick() {
    const { search, radioSelect } = headerFilterBar;
    if (search.length > 1 && radioSelect === 'f') {
      return global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
    requestApi();
  }

  function renderSearchBar() {
    return (
      <div>
        <input
          type="text"
          data-testid="search-input"
          name="search"
          value={ headerFilterBar.search }
          onChange={ handleSearchBar }
        />
        <label htmlFor="ingredient">
          Ingredientes
          <input
            value="i"
            name="radioSelect"
            id="ingredient"
            type="radio"
            data-testid="ingredient-search-radio"
            onChange={ handleSearchBar }
          />
        </label>
        <label htmlFor="name-search">
          Nome
          <input
            value="s"
            name="radioSelect"
            id="name-search"
            type="radio"
            data-testid="name-search-radio"
            onChange={ handleSearchBar }
          />
        </label>
        <label htmlFor="first-letter">
          Primeira letra
          <input
            value="f"
            name="radioSelect"
            id="first-letter"
            type="radio"
            data-testid="first-letter-search-radio"
            onChange={ handleSearchBar }
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

  return (
    <div>
      <button type="button" onClick={ () => setToggleInput(!toggleInput) }>
        <img src={ searchIcon } alt="search" data-testid="search-top-btn" />
      </button>
      { toggleInput && renderSearchBar()}
    </div>
  );
}
