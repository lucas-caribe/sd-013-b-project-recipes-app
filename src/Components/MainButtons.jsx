import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilterButton from './FilterButton';
import { fetchFilteredItems } from '../Redux/Actions';

function MainButtons({ type, filterItens }) {
  const foodType = type === 'comidas' ? 'themealdb' : 'thecocktaildb';
  const URL = `https://www.${foodType}.com/api/json/v1/1/list.php?c=list`;
  const maxButtons = 5;
  const [filters, changeFilters] = useState([]);
  const [actualFilter, changeActualFilter] = useState('');
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((result) => (
        Object.values(result[Object.keys(result)[0]]).reduce((acc, act, index) => {
          if (index < maxButtons) {
            return [...acc, act.strCategory];
          }
          return acc;
        }, [])
      ))
      .then((list) => changeFilters(list));
  }, [URL]);
  return (
    <div>
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => {
          filterItens(type, 'name', '');
        } }
      >
        All
      </button>
      {filters.map((filter, index) => (
        <FilterButton
          key={ index }
          filter={ filter }
          actualFilter={ actualFilter }
          changeActualFilter={ changeActualFilter }
          type={ type }
        />
      ))}
    </div>
  );
}

MainButtons.propTypes = {
  type: PropTypes.string.isRequired,
  filterItens: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  filterItens: (userType, userFilter, userInput) => {
    dispatch(fetchFilteredItems(userType, userFilter, userInput));
  },
});

export default connect(null, mapDispatchToProps)(MainButtons);
