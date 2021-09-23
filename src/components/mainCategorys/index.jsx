import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCategorysMeals, fetchCategorysCoctails,
} from '../../services/fetchCategorys';

import {
  fetchCocktailsItensByCategory, fetchMealsItensByCategory,
} from '../../services/fetchItensByCategory';

import { setItensOfFetch, SetFilterByCategory } from '../../redux/action';

import { fetchCocktailArray, fetchMealsArray } from '../../services/fetchItens';

const LIMIT_CATEGORIES = 5;

export default function MainCategorys() {
  const [CategoriesState, setCategoriesState] = useState([]);
  const categoryFilter = useSelector((state) => state.categoryFilter);
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

  const filterCategoryMeal = async (filterBy) => {
    if (categoryFilter.filterBy === filterBy) {
      dispatch(SetFilterByCategory({ hasFilter: true, filterBy: '' }));
      const { meals } = await fetchMealsArray(filterBy);
      dispatch(setItensOfFetch(meals));
    } else {
      dispatch(SetFilterByCategory({ hasFilter: true, filterBy }));
      const { meals } = await fetchMealsItensByCategory(filterBy);
      dispatch(setItensOfFetch(meals));
    }
  };

  const filterCategoryCocktail = async (filterBy) => {
    if (categoryFilter.filterBy === filterBy) {
      dispatch(SetFilterByCategory({ hasFilter: true, filterBy: '' }));
      const { drinks } = await fetchCocktailArray(filterBy);
      dispatch(setItensOfFetch(drinks));
    } else {
      dispatch(SetFilterByCategory({ hasFilter: true, filterBy }));
      const { drinks } = await fetchCocktailsItensByCategory(filterBy);
      dispatch(setItensOfFetch(drinks));
    }
  };

  const handlerClickFilterCategory = async ({ target: { innerHTML } }) => {
    if (pathname === '/comidas') {
      filterCategoryMeal(innerHTML);
    }
    if (pathname === '/bebidas') {
      filterCategoryCocktail(innerHTML);
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
