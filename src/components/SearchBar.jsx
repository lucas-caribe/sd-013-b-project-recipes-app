import React from 'react';

function SearchBar() {
  return (
    <div>
      <label htmlFor="search">
        <input type="text" name="search" id="search" data-testid="search-input" />
      </label>
      <label htmlFor="ingredient">
        <input
          type="radio"
          value="ingredient"
          name="ingredient"
          id="ingredient"
          data-testid="ingredient-search-radio"
        />
        Ingrediente
      </label>
      <label htmlFor="name">
        <input
          type="radio"
          value="name"
          name="name"
          id="name"
          data-testid="name-search-radio"
        />
        Nome
      </label>
      <label htmlFor="first-letter">
        <input
          type="radio"
          value="first-letter"
          name="first-letter"
          id="first-letter"
          data-testid="first-letter-search-radio"
        />
        Primeira Letra
      </label>
      <button type="button" data-testid="exec-search-btn">Buscar</button>
    </div>
  );
}

export default SearchBar;
