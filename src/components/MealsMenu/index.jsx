import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CategoriesFilterBar from '../CategoriesFilterBar';
import RecipesLibrary from '../RecipesLibrary';
import AppContext from '../../context/AppContext';

const ELEVEN = 11;
const FOUR = 4;
export default function MealsMenu({ meals, mealsCategories }) {
  const { setPage } = useContext(AppContext);
  if (meals.length > 0 && mealsCategories.length > 0) {
    setPage('comidas');
    const auxCategories = [...mealsCategories];
    const firstCategories = auxCategories.filter((_category, index) => index <= FOUR);
    const auxMeals = [...meals];
    const firstMeals = auxMeals.filter((_meal, index) => index <= ELEVEN);
    return (
      <div>
        <CategoriesFilterBar
          categories={ firstCategories }
        />
        <RecipesLibrary
          recipes={ firstMeals }
        />
      </div>
    );
  } return (
    <h3>Buscando receitas</h3>
  );
}

MealsMenu.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  mealsCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
};
