import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipesLibrary from '../RecipesLibrary';
import CategoriesFilterBar from '../CategoriesFilterBar';
import AppContext from '../../context/AppContext';

const ELEVEN = 11;
const FOUR = 4;
export default function DrinksMenu({ drinks, drinksCategories }) {
  const { setPage } = useContext(AppContext);
  if (drinks.length > 0 && drinksCategories.length > 0) {
    setPage('bebidas');
    const auxCategories = [...drinksCategories];
    const firstCategories = auxCategories.filter((_category, index) => index <= FOUR);
    const auxDrinks = [...drinks];
    const firstDrinks = auxDrinks.filter((_meal, index) => index <= ELEVEN);
    return (
      <div>
        <CategoriesFilterBar
          categories={ firstCategories }
        />
        <RecipesLibrary
          recipes={ firstDrinks }
        />
      </div>
    );
  } return (
    <h3>Buscando receitas</h3>
  );
}

DrinksMenu.propTypes = {
  drinks: PropTypes.arrayOf(PropTypes.object).isRequired,
  drinksCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
};
