import React from 'react';

function SearchBar() {
  return (
    <div>
      <input data-testid="search-input" type="text" placeholder="DIGITE SUA COMIDA" />
      <label htmlFor="ingredient">
        <input
          data-testid="ingredient-search-radio"
          id="ingredient"
          name="search-checkbox"
          type="radio"
        />
        Ingrediente
      </label>
      <label htmlFor="food-name">
        <input
          data-testid="name-search-radio"
          id="food-name"
          name="search-checkbox"
          type="radio"
        />
        Nome
      </label>
      <label htmlFor="food-first-letter">
        <input
          data-testid="first-letter-search-radio"
          id="food-first-letter"
          name="search-checkbox"
          type="radio"
        />
        Primeira Letra
      </label>
      <button data-testid="exec-search-btn" type="button">Buscar</button>
    </div>
  );
}

export default SearchBar;
