const INITIAL_STATE = {
  recipeMeal: {},
  recipeDrink: {},
};

const reducerRecipe = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SEND_RECIPE_TO_GLOBAL_MEALS':
    return {
      ...state,
      recipeMeal: action.payload.meals,
    };
  case 'SEND_RECIPE_TO_GLOBAL_DRINKS':
    return {
      ...state,
      recipeDrink: action.payload.drinks,
    };
  default:
    return state;
  }
};

export default reducerRecipe;
