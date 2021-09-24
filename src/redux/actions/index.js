const actionLogin = (email) => ({
  type: 'ACTION_LOGIN',
  payload: {
    email,
  },
});

export const actionInputHeader = (inpHeader) => ({
  type: 'ACTION_INPUT_HEADER',
  payload: {
    inpHeader,
  },
});

export const sendRecipeToGlobalMeal = (meals) => ({
  type: 'SEND_RECIPE_TO_GLOBAL_MEALS',
  payload: {
    meals,
  },
});

export const sendRecipeToGlobalDrinks = (drinks) => ({
  type: 'SEND_RECIPE_TO_GLOBAL_DRINKS',
  payload: {
    drinks,
  },
});

export default actionLogin;
