import { START_RECIPE, EDIT_RECIPE, TOGGLE_FAVORITE, LOAD_STORAGE_FAVORITES_TO_REDUX, LOAD_STORAGE_IN_PROGRESS_TO_REDUX, FINISH_RECIPE } from '../Actions';

const INTIAL_STATE = {
  doneRecipes: [],
  inProgressRecipes: {
    cocktails: {},
    meals: {},
  },
  favoriteRecipes: [],
};

const recipes = (state = INTIAL_STATE, action) => {
  switch (action.type) {
  case START_RECIPE:
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      ...state.inProgressRecipes,
      [action.payload.type]: {
        ...state.inProgressRecipes[action.payload.type],
        [action.payload.id]: [],
      },
    }));

    return {
      ...state,
      inProgressRecipes: {
        ...state.inProgressRecipes,
        [action.payload.type]: {
          ...state.inProgressRecipes[action.payload.type],
          [action.payload.id]: [],
        },
      },
    };
  case TOGGLE_FAVORITE:
    localStorage.setItem('favoriteRecipes',
      JSON.stringify(state.favoriteRecipes.some((item) => (
        item.id === action.payload.item.id))
        ? [...state.favoriteRecipes.filter((item) => item.id !== action.payload.item.id)]
        : [...state.favoriteRecipes, action.payload.item]));
    return {
      ...state,
      favoriteRecipes: state.favoriteRecipes.some((item) => (
        item.id === action.payload.item.id))
        ? [...state.favoriteRecipes.filter((item) => item.id !== action.payload.item.id)]
        : [...state.favoriteRecipes, action.payload.item],
    };
  case LOAD_STORAGE_FAVORITES_TO_REDUX:
    return {
      ...state,
      favoriteRecipes: action.payload,
    };
  case LOAD_STORAGE_IN_PROGRESS_TO_REDUX:
    return {
      ...state,
      inProgressRecipes: action.payload,
    };
  default:
    return state;
  }
};

export default recipes;
