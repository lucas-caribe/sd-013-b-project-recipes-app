import { START_RECIPE, EDIT_RECIPE,
  LOAD_STORAGE_IN_PROGRESS_TO_REDUX, REMOVE_FROM_IN_PROGRESS } from '../Actions';

const INITIAL_STATE = {
  cocktails: {},
  meals: {},
};

const inProgressRecipes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case START_RECIPE:
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      ...state,
      [action.payload.type]: {
        ...state[action.payload.type],
        [action.payload.id]: [],
      },
    }));
    return {
      ...state,
      [action.payload.type]: {
        ...state[action.payload.type],
        [action.payload.id]: [],
      },
    };
  case LOAD_STORAGE_IN_PROGRESS_TO_REDUX:
    return {
      ...state,
      ...action.payload,
    };
  case REMOVE_FROM_IN_PROGRESS:
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      ...state,
      [action.payload.type]: Object.keys(state[action.payload.type]).reduce(
        (acc, act) => {
          if (act !== action.payload.id) {
            return { ...acc, [act]: state[action.payload.type][act] };
          }
          return acc;
        }, {},
      ),
    }));
    return {
      ...state,
      [action.payload.type]: Object.keys(state[action.payload.type]).reduce(
        (acc, act) => {
          if (act !== action.payload.id) {
            return {
              ...acc,
              [act]: state[action.payload.type][act],
            };
          }
          return acc;
        }, {},
      ),
    };
  default:
    return state;
  }
};

export default inProgressRecipes;
