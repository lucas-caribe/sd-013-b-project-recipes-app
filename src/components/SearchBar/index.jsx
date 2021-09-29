import React from 'react';

import { useRecipes, useSearch } from '../../context';

import './SearchBar.css';

function SearchBar() {
  const { handleSearch, setTerm, setOption } = useSearch();
  const { checkTermAndOption } = useRecipes();

  return (
    <div className="search-bar-inputs">
      <input
        className="text-input"
        data-testid="search-input"
        type="text "
        placeholder="Buscar receita"
        onChange={ (e) => {
          checkTermAndOption();
          setTerm(e.target.value);
        } }
      />
      <div className="radio-btns">
        <input
          data-testid="ingredient-search-radio"
          type="radio"
          name="radio-search"
          value="ingredient"
          onClick={ (e) => {
            checkTermAndOption();
            setOption(e.target.value);
          } }
        />
        Ingrediente
        <input
          data-testid="name-search-radio"
          type="radio"
          name="radio-search"
          value="name"
          onClick={ (e) => {
            checkTermAndOption();
            setOption(e.target.value);
          } }
        />
        Nome
        <input
          data-testid="first-letter-search-radio"
          type="radio"
          name="radio-search"
          value="first-letter"
          onClick={ (e) => {
            checkTermAndOption();
            setOption(e.target.value);
          } }
        />
        Primeira letra
      </div>
      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={ () => handleSearch() }
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
