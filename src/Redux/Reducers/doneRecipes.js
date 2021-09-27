import { FINISH_RECIPE, LOAD_STORAGE_DONE_TO_REDUX } from '../Actions';

const INITIAL_STATE = [];

const doneRecipes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FINISH_RECIPE:
    localStorage.setItem('doneRecipes', JSON.stringify([...state, action.payload]));
    return [...state, action.payload];
  case LOAD_STORAGE_DONE_TO_REDUX:
    return action.payload;
  default:
    return state;
  }
};

export default doneRecipes;
