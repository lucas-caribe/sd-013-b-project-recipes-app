import React, { useState } from 'react';
import { ingredientAPI, nameAPI, fistLetterAPI } from '../services/foodAPI';

export default function SearchBar() {
  const [text, setText] = useState('');
  const [ingredient, setIngredient] = useState(false);
  const [name, setName] = useState(false);
  const [letter, setLetter] = useState(false);

  const checkLetter = (input) => {
    if (input.length !== 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
    setLetter(input);
  };

  function handleIngredient() {
    setIngredient(!ingredient);
    setName(false);
    setLetter(false);
  }

  function handleName() {
    setName(!name);
    setIngredient(false);
    setLetter(false);
  }

  function handleLetter(l) {
    checkLetter(l);
    setLetter(!letter);
    setIngredient(false);
    setName(false);
  }

  async function iAPI(i) {
    const ingredientSearch = await ingredientAPI(i);
    console.log(ingredientSearch);
  }

  async function nAPI(n) {
    const nameSearch = await nameAPI(n);
    console.log(nameSearch);
  }

  async function lAPI(l) {
    const letterSearch = await fistLetterAPI(l);
    console.log(letterSearch);
  }

  function handleClick() {
    if (ingredient) iAPI(text);
    if (name) nAPI(text);
    if (letter) lAPI(text);
  }

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        placeholder="Pesquise sua receita"
        onChange={ (e) => setText(e.target.value) }
      />
      <label htmlFor="ingredient-search">
        Ingrediente
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          id="ingredient-search"
          name="recepies"
          onClick={ () => (handleIngredient()) }
        />
      </label>
      <label htmlFor="name-search">
        Nome
        <input
          type="radio"
          data-testid="name-search-radio"
          id="name-search"
          name="recepies"
          onClick={ () => (handleName()) }
        />
      </label>
      <label htmlFor="first-letter-search">
        Primeira letra
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          id="first-letter-search"
          name="recepies"
          onClick={ () => (handleLetter(text)) }
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
