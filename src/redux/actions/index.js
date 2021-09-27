export const allActions = {
  ADD_FOODS: 'ADD_FOODS',
  SAVE_EMAIL: 'SAVE_EMAIL',
};

export const saveFoods = (foods) => ({
  type: allActions.ADD_FOODS,
  payload: foods,
});

export const saveEmail = (email) => ({
  type: allActions.SAVE_EMAIL,
  payload: email,
});
