export const allActions = {
  ADD_FOODS: 'ADD_FOODS',
  ADD_STARTED_RECIPES: 'ADD_STARTED_RECIPES',
};

export const saveFoods = (foods) => ({
  type: allActions.ADD_FOODS,
  payload: foods,
});

export const addStartedRecipes = (foods) => ({
  type: allActions.ADD_FOODS,
  payload: foods,
});
