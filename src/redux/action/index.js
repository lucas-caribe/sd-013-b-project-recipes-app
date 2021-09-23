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

// Type

export const SET_USER = 'SET_USER';
export const SET_MEAL = 'SET_MEAL';
export const SET_COCKTAIL = 'SET_COCKTAIL';
export const SET_MAIN_LIST_FILTER_CATEGORY = 'SET_MAIN_LIST_FILTER_CATEGORY';

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

export const setMainListFilterCategory = (payload) => (
  { type: SET_MAIN_LIST_FILTER_CATEGORY, payload }
);

// Thunk

export const fetchSearchThunk = ({ value, type, recipe }) => async (dispatch) => {
  if (recipe === 'meal') {
    console.log('thunk');
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
