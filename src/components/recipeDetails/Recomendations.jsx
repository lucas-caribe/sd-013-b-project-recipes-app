import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchCocktailArray, fetchMealsArray } from '../../services/fetchItens';

export default function MealsRecomendations() {
  const THE_LAST_ONE = 6;
  const [state, setState] = useState({ loading: true, Top6: [] });
  const { pathname } = useLocation();

  const fetchCocktails = useCallback(async () => {
    const { drinks } = await fetchCocktailArray();
    const Top6 = drinks.slice(0, THE_LAST_ONE);
    setState({ loading: false, Top6 });
  }, []);

  const fetchMeals = useCallback(async () => {
    const { meals } = await fetchMealsArray();
    const Top6 = meals.slice(0, THE_LAST_ONE);
    setState({ loading: false, Top6 });
  }, []);

  useEffect(() => {
    if (pathname.includes('bebidas')) {
      fetchMeals();
    }
    if (pathname.includes('comidas')) {
      fetchCocktails();
    }
  }, [fetchCocktails, fetchMeals, pathname]);

  function handleRecomendations() {
    if (pathname.includes('bebidas')) {
      return (
        state.Top6.map((result, index) => (
          <div
            data-testid={ `${index}-recomendation-card` }
            className="recomendation-card"
            key={ result.idMeal }
          >
            <p data-testid={ `${index}-recomendation-title` }>{result.strMeal}</p>
            <img
              className="img-recomendation"
              src={ result.strMealThumb }
              alt={ result.strMeal }
            />
          </div>
        ))
      );
    }
    if (pathname.includes('comidas')) {
      return (
        state.Top6.map((result, index) => (
          <div
            data-testid={ `${index}-recomendation-card` }
            className="recomendation-card"
            key={ result.idDrink }
          >
            <p data-testid={ `${index}-recomendation-title` }>{result.strDrink}</p>
            <img
              className="img-recomendation"
              src={ result.strDrinkThumb }
              alt={ result.strDrink }
            />
          </div>
        ))
      );
    }
  }

  return (
    <div className="recomendation-carousel">
      { handleRecomendations()}
    </div>
  );
}
