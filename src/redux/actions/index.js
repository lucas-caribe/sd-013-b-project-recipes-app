export const allActions = {
  ADD_FOODS: 'ADD_FOODS',
};

export const saveFoods = (foods) => ({
  type: allActions.ADD_FOODS,
  payload: foods,
});
