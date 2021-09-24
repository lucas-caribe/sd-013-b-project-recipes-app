import { allActions } from '../actions';

const initialState = {
  mealsOrDrinks: [],
};

const foodReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case allActions.ADD_FOODS:
    return {
      ...state,
      mealsOrDrinks: payload,
    };
  default:
    return state;
  }
};

export default foodReducer;
