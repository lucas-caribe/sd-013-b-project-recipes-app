import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import {
  fetchCategorysMeals, fetchCategorysCoctails,
} from '../../services/fetchCategorys';

import {
  fetchCocktailsItensByCategory, fetchMealsItensByCategory,
} from '../../services/fetchItensByCategory';

import { setItensOfFetch, SeFilterByCategory } from '../../redux/action';

const LIMIT_CATEGORIES = 5;

export default function MainCategorys() {
  const [CategoriesState, setCategoriesState] = useState([]);
  const history = useHistory();
  const { location: { pathname } } = history;

  const dispatch = useDispatch();

  const fetchCategoriesMeals = useCallback(
    async () => {
      const { meals } = await fetchCategorysMeals();
      const categorysArray = meals.slice(0, LIMIT_CATEGORIES);
      setCategoriesState([...categorysArray]);
    },
    [],
  );

  const fetchCategoriesCocktails = useCallback(
    async () => {
      const { drinks } = await fetchCategorysCoctails();
      const categorysArray = drinks.slice(0, LIMIT_CATEGORIES);
      setCategoriesState([...categorysArray]);
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
      dispatch(setItensOfFetch(meals));
      dispatch(SeFilterByCategory(true));
    }
    if (pathname === '/bebidas') {
      const { drinks } = await fetchCocktailsItensByCategory(innerHTML);
      dispatch(setItensOfFetch(drinks));
      dispatch(SeFilterByCategory(true));
    }
  };

  return (
    <div>
      {
        CategoriesState.map(({ strCategory }) => (
          <button
            key={ strCategory }
            type="button"
            data-testid={ `${strCategory}-category-filter` }
            onClick={ handlerClickFilterCategory }
          >
            {strCategory}
          </button>
        ))
      }
    </div>
  );
}
