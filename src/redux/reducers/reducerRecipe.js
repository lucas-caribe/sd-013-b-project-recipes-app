const INITIAL_STATE = {
  recipeMeal: {},
  recipeDrink: {},
  recipeMealProgress: [],
  recipeDrinkProgress: [],
  inProgressMeal: false,
};

const reducerRecipe = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'BTN_START_RECIPE_MEALS':
    return {
      ...state,
      recipeMeal: action.payload.meals,
      recipeMealProgress: [...state.recipeMealProgress, action.payload.status],
      inProgressMeal: true,
    };
  case 'BTN_START_RECIPE_DRINKS':
    return {
      ...state,
      recipeDrink: action.payload.drinks,
      recipeDrinkProgress: [...state.recipeDrinkProgress, action.payload.status],
      inProgressMeal: true,
    };
  default:
    return state;
  }
};

export default reducerRecipe;
