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
export const SET_MEAL = 'SET_MEAL';
export const SET_COCKTAIL = 'SET_COCKTAIL';
export const SET_MEAL_DETAILS = 'SET_MEAL_DETAILS';
export const SET_COCKTAIL_DETAILS = 'SET_COCKTAIL_DETAILS';
export const SET_RECOMENDATIONS = 'SET_RECOMENDATIONS';

// //Actions Creator

export const setUser = (payload) => ({ type: SET_USER, payload });

export const setMeal = (payload) => ({
  type: SET_MEAL,
  payload,
});

export const setCocktail = (payload) => ({
  type: SET_COCKTAIL,
  payload,
});

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

// // Thunk

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
  console.log(recomendation);
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
      const response = await fetchMealByIngredient(type);
      dispatch(setMeal(response));
      break;
    }
    case 'name': {
      const response = await fetchMealByName(type);
      dispatch(setMeal(response));
      break;
    }
    case 'first-letter': {
      const response = await fetchMealByFirstLetter(type);
      dispatch(setMeal(response));
      break;
    }
    default:
      break;
    }
  }

  if (recipe === 'cocktail') {
    switch (value) {
    case 'ingredient': {
      const response = await fetchCocktailByIngredient(type);
      dispatch(setCocktail(response));
      break;
    }
    case 'name': {
      const response = await fetchCocktailByName(type);
      dispatch(setCocktail(response));
      break;
    }
    case 'first-letter': {
      const response = await fetchCocktailByFirstLetter(type);
      dispatch(setCocktail(response));
      break;
    }
    default:
      break;
    }
  }
};
