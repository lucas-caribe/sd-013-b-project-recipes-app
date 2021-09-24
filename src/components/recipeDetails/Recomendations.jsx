import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchRecomendationThunk } from '../../redux/action';

export default function MealsRecomendations() {
  const THE_LAST_ONE = 6;
  const mealRecomendations = useSelector((state) => state.detailsReducer
    .recomendations.meals);
  const drinkRecomendations = useSelector((state) => state.detailsReducer
    .recomendations.drinks);
  const [state, setState] = useState({ loading: true, Top6: [] });
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes('bebidas')) {
      dispatch(fetchRecomendationThunk('meal'));
    }
    if (pathname.includes('comidas')) {
      dispatch(fetchRecomendationThunk('cocktail'));
    }
  }, []);

  useEffect(() => {
    if (mealRecomendations) {
      const Top6 = mealRecomendations.slice(0, THE_LAST_ONE);
      setState({ loading: false, Top6 });
    }
    if (drinkRecomendations) {
      const Top6 = drinkRecomendations.slice(0, THE_LAST_ONE);
      setState({ loading: false, Top6 });
    }
  }, [mealRecomendations, drinkRecomendations]);

  function handleRecomendations() {
    if (pathname.includes('bebidas')) {
      return (
        state.Top6.map((result, index) => (
          <div
            data-testid={ `${index}-recomendation-card` }
            className="recomendation-card"
            key={ result.idMeal }
          >
            <p>{result.strMeal}</p>
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
            <p>{result.strDrink}</p>
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
      { state.loading || handleRecomendations() }
    </div>
  );
}
