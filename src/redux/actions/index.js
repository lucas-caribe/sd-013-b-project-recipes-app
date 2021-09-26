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

export const sendRecipeToGlobalMeal = (meals, status) => ({
  type: 'BTN_START_RECIPE_MEALS',
  payload: {
    meals,
    status,
  },
});

export const sendRecipeToGlobalDrinks = (drinks, status) => ({
  type: 'BTN_START_RECIPE_DRINKS',
  payload: {
    drinks,
    status,
  },
});

export default actionLogin;
