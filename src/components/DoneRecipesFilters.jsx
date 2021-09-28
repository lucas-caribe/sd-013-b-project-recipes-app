import React from 'react';
import PropTypes from 'prop-types';

function DoneRecipesFilter({ setActualFilter }) {
  const handleClick = ({ target }) => {
    const filters = {
      All: undefined,
      Food: 'comida',
      Drinks: 'bebida',
    };
    setActualFilter(filters[target.innerText]);
  };
  return (
    <div>
      <button
        data-testid="filter-by-all-btn"
        type="button"
        onClick={ handleClick }
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        type="button"
        onClick={ handleClick }
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
        onClick={ handleClick }
      >
        Drinks
      </button>
    </div>
  );
}

export default DoneRecipesFilter;

DoneRecipesFilter.propTypes = {
  setActualFilter: PropTypes.func,
}.isRequired;
