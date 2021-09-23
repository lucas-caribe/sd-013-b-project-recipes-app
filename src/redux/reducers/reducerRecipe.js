const INITIAL_STATE = {
  recipe: {},
};

const reducerRecipe = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SEND_RECIPE_TO_GLOBAL':
    return {
      ...state,
      recipe: action.payload.recipe,
    };
  default:
    return state;
  }
};

export default reducerRecipe;
