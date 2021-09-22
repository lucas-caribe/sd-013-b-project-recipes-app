import React from 'react';
import Header from '../components/Header';

export default function Comidas() {
  return (
    <div>
      <Header pageTitle="Comidas" />
      <div>
        <label htmlFor="ingredient">
          Ingrediente
          <input type="radio" name="ingredient" data-testid="ingredient-search-radio" />
        </label>
        <label htmlFor="name">
          Nome
          <input type="radio" name="name" data-testid="name-search-radio" />
        </label>
        <label htmlFor="ingredient">
          Primeira letra
          <input type="radio" name="ingredient" data-testid="first-letter-search-radio" />
        </label>
        <button type="button" data-testid="exec-search-btn">Buscar</button>
      </div>
    </div>
  );
}
