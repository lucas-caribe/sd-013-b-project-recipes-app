import { TOGGLE_FAVORITE } from '../Actions';

const favoritesLocalStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));

const INITIAL_STATE = favoritesLocalStorage || [];

const favoriteRecipes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TOGGLE_FAVORITE:
    localStorage.setItem('favoriteRecipes',
      JSON.stringify(state.some((item) => (
        item.id === action.payload.item.id))
        ? [...state.filter((item) => item.id !== action.payload.item.id)]
        : [...state, action.payload.item]));
    return state.some((item) => (
      item.id === action.payload.item.id))
      ? [...state.filter((item) => item.id !== action.payload.item.id)]
      : [...state, action.payload.item];
  default:
    return state;
  }
};

export default favoriteRecipes;
