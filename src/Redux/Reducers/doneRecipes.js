import { FINISH_RECIPE } from '../Actions';

const doneLocalStorage = JSON.parse(localStorage.getItem('doneRecipes'));

const INITIAL_STATE = doneLocalStorage || [];

const doneRecipes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FINISH_RECIPE:
    localStorage.setItem('doneRecipes', JSON.stringify([...state, action.payload]));
    return [...state, action.payload];
  default:
    return state;
  }
};

export default doneRecipes;
