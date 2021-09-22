import React from 'react';

export default function InputSearch() {
  return (
    <>
      <input type="text" name="search" id="search" data-testid="search-input" />
      <label htmlFor="Ingrediente">
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          id="Ingrediente"
          name="search"
        />
        Ingrediente
      </label>
      <label htmlFor="Nome">
        <input
          type="radio"
          data-testid="name-search-radio"
          id="Nome"
          name="search"
        />
        Nome
      </label>
      <label htmlFor="Primeira letra">
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          id="Primeira letra"
          name="search"
        />
        Primeira letra
      </label>
      <button type="button" data-testid="exec-search-btn">Buscar</button>
    </>
  );
}
