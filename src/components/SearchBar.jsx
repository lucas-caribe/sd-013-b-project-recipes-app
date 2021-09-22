import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchThunk } from '../redux/action';

function SearchBar() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    type: '',
    value: '',
  });

  function handleChange(event) {
    setState({
      ...state,
      value: event.target.id,
    });
  }

  function handleInput(event) {
    setState({
      ...state,
      type: event.target.value,
    });
  }

  function handleClick() {
    dispatch(fetchSearchThunk(state));
  }

  return (
    <div>
      <input onChange={ handleInput } />
      <form onChange={ handleChange }>
        <label htmlFor="search">
          Ingredient
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            name="search"
            id="ingredient"
          />
        </label>
        <label htmlFor="search">
          Name
          <input
            type="radio"
            data-testid="name-search-radio"
            name="search"
            id="name"
          />
        </label>
        <label htmlFor="search">
          First Letter
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            name="search"
            id="first-letter"
          />
        </label>
      </form>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
