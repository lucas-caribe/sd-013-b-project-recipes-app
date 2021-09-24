import React, { useState } from 'react';
import { connect } from 'react-redux';
import './SearchBar.css';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { fetchFilteredItems } from '../Redux/Actions';

function SearchBar({ filterItens, type, itens }) {
  const [textInput, changeTextInput] = useState('');
  const [filterInput, changeFilterInput] = useState('');
  let foods = [];

  if (Object.values(itens)[0]) {
    foods = itens[Object.keys(itens)[0]];
  }

  console.log(itens);

  return (
    <div className="searchBar">
      <input
        type="test"
        data-testid="search-input"
        onChange={ ({ target: { value } }) => changeTextInput(value) }
      />
      <div className="radio-options">
        <label htmlFor="ingredient-search-radio">
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            id="ingredient-search-radio"
            name="filter"
            value="ingredient"
            onChange={ ({ target: { value } }) => changeFilterInput(value) }
          />
          Ingrediente
        </label>
        <label htmlFor="name-search-radio">
          <input
            type="radio"
            data-testid="name-search-radio"
            id="name-search-radio"
            name="filter"
            value="name"
            onChange={ ({ target: { value } }) => changeFilterInput(value) }
          />
          Nome
        </label>
        <label htmlFor="first-letter-search-radio">
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            id="first-letter-search-radio"
            name="filter"
            value="first-letter"
            onChange={ ({ target: { value } }) => changeFilterInput(value) }
          />
          Primeira Letra
        </label>
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => {
          filterItens(type, filterInput, textInput);
        } }
      >
        Buscar

      </button>
      {foods.length === 1
        && <Redirect
          to={
            type === 'comidas'
              ? `/${type}/${foods[0].idMeal}` : `/${type}/${foods[0].idDrink}`
          }
        />}
    </div>
  );
}

SearchBar.propTypes = {
  filterItens: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  itens: PropTypes.shape({
    meals: PropTypes.arrayOf(PropTypes.object),
    drinks: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

const mapStateToProps = ({ filteredItens: { itens } }) => ({
  itens,
});

const mapDispatchToProps = (dispatch) => ({
  filterItens: (userType, userFilter, userInput) => {
    dispatch(fetchFilteredItems(userType, userFilter, userInput));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
