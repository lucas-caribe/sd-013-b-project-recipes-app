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

export const sendRecipeToGlobal = (recipe) => ({
  type: 'SEND_RECIPE_TO_GLOBAL',
  payload: {
    recipe,
  },
});

export const sendRecipeToGlobalDrinks = (drinks) => ({
  type: 'SEND_RECIPE_TO_GLOBAL_DRINKS',
  payload: {
    drinks,
  },
});

export default actionLogin;
