import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import {
  fetchCategorysMeals, fetchCategorysCoctails,
} from '../../services/fetchCategorys';

import {
  fetchCocktailsItensByCategory, fetchMealsItensByCategory,
} from '../../services/fetchItensByCategory';

import { setMainListFilterCategory } from '../../redux/action';

const LIMIT_CATEGORIES = 5;

export default function MainCategorys() {
  const [CategoriesState, setCategoriesState] = useState([]);
  const history = useHistory();
  const { location: { pathname } } = history;

  const dispatch = useDispatch();

  const setState = (arrayForEach) => {
    arrayForEach.forEach(({ strCategory }, index) => {
      if (index < LIMIT_CATEGORIES) {
        setCategoriesState((prevState) => ([...prevState, strCategory]));
      }
    });
  };

  const fetchCategoriesMeals = useCallback(
    async () => {
      const { meals } = await fetchCategorysMeals();
      setState(meals);
    },
    [],
  );

  const fetchCategoriesCocktails = useCallback(
    async () => {
      const { drinks } = await fetchCategorysCoctails();
      setState(drinks);
    },
    [],
  );

  useEffect(() => {
    if (pathname === '/comidas') { fetchCategoriesMeals(); }
    if (pathname === '/bebidas') { fetchCategoriesCocktails(); }
  }, [fetchCategoriesCocktails, fetchCategoriesMeals, pathname]);

  const handlerClickFilterCategory = async ({ target: { innerHTML } }) => {
    if (pathname === '/comidas') {
      const { meals } = await fetchMealsItensByCategory(innerHTML);
      dispatch(setMainListFilterCategory(meals));
    }
    if (pathname === '/bebidas') {
      const { drinks } = await fetchCocktailsItensByCategory(innerHTML);
      dispatch(setMainListFilterCategory(drinks));
    }
  };

  return (
    <div>
      {
        CategoriesState.map((category) => (
          <button
            key={ category }
            type="button"
            data-testid={ `${category}-category-filter` }
            onClick={ handlerClickFilterCategory }
          >
            {category}
          </button>
        ))
      }
    </div>
  );
}
