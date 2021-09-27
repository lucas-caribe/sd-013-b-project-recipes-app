import { TOGGLE_FAVORITE, LOAD_STORAGE_FAVORITES_TO_REDUX } from '../Actions';

const INITIAL_STATE = [];

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
  case LOAD_STORAGE_FAVORITES_TO_REDUX:
    return action.payload;
  default:
    return state;
  }
};

export default favoriteRecipes;
