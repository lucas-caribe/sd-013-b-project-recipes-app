import {
  fetchMealByFirstLetter,
  fetchMealByIngredient,
  fetchMealByName,
} from '../../services/fetchMeals';

import {
  fetchCocktailByFirstLetter,
  fetchCocktailByIngredient,
  fetchCocktailByName,
} from '../../services/fetchCocktails';
import { fetchCocktailDetails, fetchMealDetails } from '../../services/fetchDetails';

// Type

export const SET_USER = 'SET_USER';
export const SET_MEAL_DETAILS = 'SET_MEAL_DETAILS';
export const SET_COCKTAIL_DETAILS = 'SET_COCKTAIL_DETAILS';
export const SET_RECOMENDATIONS = 'SET_RECOMENDATIONS';
export const SET_ITENS_OF_FETCH = 'SET_ITENS_OF_FETCH';
export const SET_NEW_FITLER_BY_CATEGORY = 'SET_NEW_FITLER_BY_CATEGORY';
export const SET_MAIN_LIST_FILTER_CATEGORY = 'SET_MAIN_LIST_FILTER_CATEGORY';

// Actions Creator

export const setUser = (payload) => ({ type: SET_USER, payload });

export const setItensOfFetch = (payload) => ({
  type: SET_ITENS_OF_FETCH,
  payload,
});

export const setMainListFilterCategory = (payload) => (
  { type: SET_MAIN_LIST_FILTER_CATEGORY, payload }
);

export const SetFilterByCategory = (payload) => (
  { type: SET_MAIN_LIST_FILTER_CATEGORY, payload }
);

export const setMealDetails = (payload) => ({
  type: SET_MEAL_DETAILS,
  payload,
});

export const setCocktailDetails = (payload) => ({
  type: SET_COCKTAIL_DETAILS,
  payload,
});

export const setRecomendations = (payload) => ({
  type: SET_RECOMENDATIONS,
  payload,
});

// Thunk

export const fetchDetailsThunk = (id, recipe) => async (dispatch) => {
  switch (recipe) {
  case 'meal': {
    const response = await fetchMealDetails(id);
    dispatch(setMealDetails(response));
    break;
  }
  case 'cocktail': {
    const response = await fetchCocktailDetails(id);
    dispatch(setCocktailDetails(response));
    break;
  }
  default:
    break;
  }
};

export const fetchRecomendationThunk = (recomendation) => async (dispatch) => {
  switch (recomendation) {
  case 'meal': {
    const response = await fetchMealByName('fish');
    dispatch(setRecomendations(response));
    break;
  }
  case 'cocktail': {
    const response = await fetchCocktailByName('margarita');
    dispatch(setRecomendations(response));
    break;
  }
  default:
    break;
  }
};

export const fetchSearchThunk = ({ value, type, recipe }) => async (dispatch) => {
  if (recipe === 'meal') {
    switch (value) {
    case 'ingredient': {
      const { meals } = await fetchMealByIngredient(type);
      dispatch(setItensOfFetch(meals));
      break;
    }
    case 'name': {
      const { meals } = await fetchMealByName(type);
      dispatch(setItensOfFetch(meals));
      break;
    }
    case 'first-letter': {
      const { meals } = await fetchMealByFirstLetter(type);
      dispatch(setItensOfFetch(meals));
      break;
    }
    default:
      break;
    }
  }

  if (recipe === 'cocktail') {
    switch (value) {
    case 'ingredient': {
      const { drinks } = await fetchCocktailByIngredient(type);
      dispatch(setItensOfFetch(drinks));
      break;
    }
    case 'name': {
      const { drinks } = await fetchCocktailByName(type);
      dispatch(setItensOfFetch(drinks));
      break;
    }
    case 'first-letter': {
      const { drinks } = await fetchCocktailByFirstLetter(type);
      dispatch(setItensOfFetch(drinks));
      break;
    }
    default:
      break;
    }
  }
};
