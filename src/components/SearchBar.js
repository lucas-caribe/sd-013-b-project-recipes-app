import React, { useState } from 'react';

function SearchBar() {
  const [searchSelected, setSearchSelected] = useState({
    searchRadio: '',
    searchInput: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setSearchSelected((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(searchSelected);
  };

  return (
    <form onSubmit={ handleClick }>
      <label htmlFor="search-input">
        <input
          id="search-input"
          typy="text"
          name="searchInput"
          placeholder="Buscar Receita"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="ingredient">
        Ingrediente
        <input
          id="ingredient"
          type="radio"
          value="ingredient"
          name="searchRadio"
          onChange={ handleChange }
          data-testid="ingredient-search-radio"
        />
      </label>
      <label htmlFor="name">
        Nome
        <input
          id="name"
          type="radio"
          value="name"
          name="searchRadio"
          onChange={ handleChange }
          data-testid="name-search-radio"
        />
      </label>
      <label htmlFor="first-letter">
        Primeira Letra
        <input
          id="first-letter"
          type="radio"
          value="first-letter"
          name="searchRadio"
          onChange={ handleChange }
          data-testid="first-letter-search-radio"
        />
      </label>
      <button
        id="btn-search"
        type="submit"
        data-testid="exec-search-btn"
      >
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;
