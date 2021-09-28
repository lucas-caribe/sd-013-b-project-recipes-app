import { allActions } from '../actions';

const initialState = {
  mealsOrDrinks: [],
  startedRecipes: [],
};

const foodReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case allActions.ADD_FOODS:
    return {
      ...state,
      mealsOrDrinks: payload,
    };
  case allActions.ADD_STARTED_RECIPES:
    console.log(payload);
    return {
      ...state,
      startedRecipes: [...state.startedRecipes, payload],
    };
  default:
    return state;
  }
};

export default foodReducer;
