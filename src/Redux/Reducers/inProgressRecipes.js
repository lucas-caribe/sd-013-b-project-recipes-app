import { START_RECIPE, EDIT_RECIPE, REMOVE_FROM_IN_PROGRESS } from '../Actions';

const inProgressLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));

const INITIAL_STATE = inProgressLocalStorage || {
  cocktails: {},
  meals: {},
};

const startRecipe = (state, action) => {
  const value = {
    ...state,
    [action.payload.type]: {
      ...state[action.payload.type],
      [action.payload.id]: [],
    },
  };
  localStorage.setItem('inProgressRecipes', JSON.stringify(value));
  return value;
};

const removeFromInProgress = (state, action) => {
  const value = {
    ...state,
    [action.payload.type]: Object.keys(state[action.payload.type]).reduce(
      (acc, act) => {
        if (act !== action.payload.id) {
          return { ...acc, [act]: state[action.payload.type][act] };
        }
        return acc;
      }, {},
    ),
  };
  localStorage.setItem('inProgressRecipes', JSON.stringify(value));
  return value;
};

const editRecipe = (state, action) => {
  const { id, type, ingredient } = action.payload;
  const value = {
    ...state,
    [type]: {
      ...state[type],
      [id]: state[type][id].some((ing) => ing === ingredient)
        ? state[type][id].filter((item) => item !== ingredient)
        : [...state[type][id], ingredient],
    },
  };
  localStorage.setItem('inProgressRecipes', JSON.stringify(value));
  return value;
};

const inProgressRecipes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case START_RECIPE:
    return startRecipe(state, action);
  case REMOVE_FROM_IN_PROGRESS:
    return removeFromInProgress(state, action);
  case EDIT_RECIPE:
    return editRecipe(state, action);
  default:
    return state;
  }
};

export default inProgressRecipes;
