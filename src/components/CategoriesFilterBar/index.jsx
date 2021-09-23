import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/AppContext';
import CategoryButton from '../CategoryButton';

export default function CategoriesFilterBar({ categories }) {
  const { setCurrentFoodFilter, setCurrentDrinkFilter, page } = useContext(AppContext);

  return (
    <div>
      {categories.map((category) => (<CategoryButton
        key={ category.strCategory }
        category={ category }
      />))}
      <button
        data-testid="All-category-filter"
        type="button"
        onClick={ () => {
          if (page === 'Comidas') {
            setCurrentFoodFilter('');
          }
          if (page === 'Bebidas') {
            setCurrentDrinkFilter('');
          }
        } }
      >
        All
      </button>
    </div>
  );
}

CategoriesFilterBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
