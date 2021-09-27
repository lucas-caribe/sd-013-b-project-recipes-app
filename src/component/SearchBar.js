import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import Context from '../context/Context';

export default function SearchBar() {
  const history = useHistory();
  const { filterRadio,
    setFilterRadio,
    filterText,
    setFilterText,
    fetchFood,
    fetchDrink,
    filteredItem,
  } = useContext(Context);

  useEffect(() => {
    if (filterRadio === 'f' && filterText.length > 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
  }, [filterText]);

  useEffect(() => {
    if (filteredItem.length === 1 && history.location.pathname === '/comidas') {
      history.push(`/comidas/${filteredItem[0].idMeal}`);
    } if (filteredItem.length === 1 && history.location.pathname === '/bebidas') {
      history.push(`/bebidas/${filteredItem[0].idDrink}`);
    }
  }, [filteredItem]);

  return (
    <form id="form">
      <input
        type="text"
        placeholder="Buscar Receita"
        data-testid="search-input"
        onChange={ (event) => setFilterText(event.target.value) }
      />
      <label htmlFor="ingredient">
        <input
          type="radio"
          id="ingredient"
          name="radiosFilter"
          data-testid="ingredient-search-radio"
          value="i"
          onClick={ (event) => setFilterRadio(event.target.value) }
        />
        Ingrediente
      </label>
      <label htmlFor="name">
        <input
          type="radio"
          id="name"
          name="radiosFilter"
          data-testid="name-search-radio"
          value="s"
          onClick={ (event) => setFilterRadio(event.target.value) }
        />
        Nome
      </label>
      <label htmlFor="firstLetter">
        <input
          type="radio"
          id="firstLetter"
          name="radiosFilter"
          data-testid="first-letter-search-radio"
          value="f"
          onClick={ (event) => setFilterRadio(event.target.value) }
        />
        Primeira letra
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ history.location.pathname === '/comidas' ? fetchFood : fetchDrink }
      >
        Buscar
      </button>
    </form>
  );
}
