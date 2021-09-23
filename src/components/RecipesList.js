import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import '../styles/recipes-list.css';

import Card from './Card';

import { fetchCategories } from '../services/api';
import normalizeCategory from '../utils/normalizeCategory';

const MAX_ELEMENTS_PER_PAGE = 12;
const MAX_CATEGORIES_PER_PAGE = 5;

function RecipesList({ list, category, onFilter }) {
  const [categories, setCategories] = useState();
  const [filter, setFilter] = useState();

  const readyToLoad = list.length > 0;

  useEffect(() => {
    async function callFetch() {
      const arr = await fetchCategories(category);
      setCategories(arr.slice(0, MAX_CATEGORIES_PER_PAGE));
    }

    callFetch();
  }, [category]);

  const mapRecipes = (arr) => (
    arr.map((food, i) => {
      if (category === 'meals') {
        return Card(food, i, category);
        // Passando o card e diferenciando categoria no próprio card, ou numa função separada
      }
      if (category === 'drinks') {
        return Card(food, i, category);
      }

      return food;
    })
      .slice(0, MAX_ELEMENTS_PER_PAGE)
  );

  function handleFilter(e) {
    const { name } = e.target;

    if (!filter) {
      setFilter(name);
      return onFilter(name);
    }

    if (name === filter) {
      setFilter('');
      return onFilter('');
    }

    setFilter(name);
    onFilter(name);
  }

  return (
    <div className="list-container">
      <section className="category-list">
        { categories && categories.map(({ strCategory }, i) => (
          <button
            key={ i }
            type="button"
            data-testid={ `${strCategory}-category-filter` }
            onClick={ handleFilter }
            name={ strCategory }
            className={ strCategory === filter ? 'highlight' : '' }
          >
            { normalizeCategory(strCategory) }
          </button>
        )) }
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={ handleFilter }
          name="all"
          className={ filter === 'all' ? 'highlight' : '' }
        >
          All
        </button>
      </section>
      <div className="recipes-list">
        { readyToLoad ? mapRecipes(list) : <h1>Loading...</h1> }
      </div>
    </div>
  );
}

RecipesList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  category: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default RecipesList;
