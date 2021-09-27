import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSearchThunk, SetFilterByCategory } from '../../redux/action';

export default function SearchBar({ recipe }) {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    type: '',
    value: '',
    recipe,
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
    dispatch(SetFilterByCategory(true));
  }

  return (
    <div>
      <input
        data-testid="search-input"
        onChange={ handleInput }
      />
      <form onChange={ handleChange }>
        <label htmlFor="ingredient">
          Ingredient
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            name="search"
            id="ingredient"
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="radio"
            data-testid="name-search-radio"
            name="search"
            id="name"
          />
        </label>
        <label htmlFor="first-letter">
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

SearchBar.propTypes = {
  recipe: PropTypes.string.isRequired,
};
