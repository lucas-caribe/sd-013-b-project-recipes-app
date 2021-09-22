import React, { useState } from 'react';
import { ingredientAPI, nameAPI, fistLetterAPI } from '../services/foodAPI';

export default function SearchBar() {
  const [text, setText] = useState('');

  async function handleIngredient(ingredient) {
    const ingredientSearch = await ingredientAPI(ingredient);
    console.log(ingredientSearch);
  }

  async function handleName(name) {
    const nameSearch = await nameAPI(name);
    console.log(nameSearch);
  }

  async function handleLetter(letter) {
    const letterSearch = await fistLetterAPI(letter);
    console.log(letterSearch);
  }

  const checkLetter = (input) => {
    if (input.length !== 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
    handleLetter(input);
  };

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        placeholder="Pesquise sua receita"
        onChange={ (e) => (setText(e.target.value)) }
      />
      <label htmlFor="ingredient-search">
        Ingrediente
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          id="ingredient-search"
          name="recepies"
          onClick={ () => (handleIngredient(text)) }
        />
      </label>
      <label htmlFor="name-search">
        Nome
        <input
          type="radio"
          data-testid="name-search-radio"
          id="name-search"
          name="recepies"
          onClick={ () => (handleName(text)) }
        />
      </label>
      <label htmlFor="first-letter-search">
        Primeira letra
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          id="first-letter-search"
          name="recepies"
          onClick={ () => (checkLetter(text)) }
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Buscar
      </button>
    </div>
  );
}
