import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import {
  fetchCategorysMeals, fetchCategorysCoctails,
} from '../../services/fetchCategorys';

const LIMIT_CATEGORIES = 5;

export default function MainCategorys() {
  const [CategoriesState, setCategoriesState] = useState([]);
  const history = useHistory();
  const { location: { pathname } } = history;

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
    console.log(pathname);
    if (pathname === '/comidas') { fetchCategoriesMeals(); }
    if (pathname === '/bebidas') { fetchCategoriesCocktails(); }
  }, []);

  return (
    <div>
      {
        CategoriesState.map((category) => (
          <button
            key={ category }
            type="button"
            data-testid={ `${category}-category-filter` }
          >
            {category}
          </button>
        ))
      }
    </div>
  );
}
