export const SET_SEARCHBAR = 'SET_SEARCHBAR';
export const USER = 'USER';
export const MEALS_TOKEN = 'mealsToken';
export const COCKTAILS_TOKEN = 'cocktailsToken';

export const setSearchbar = (payload) => ({
  type: SET_SEARCHBAR,
  payload,
});

export const userAction = (email) => ({
  type: USER,
  payload: { email },
});

export const mealsTokenAction = (mealsToken) => ({
  type: MEALS_TOKEN,
  mealsToken,
});

export const cocktailsTokenAction = (cocktailsToken) => ({
  type: COCKTAILS_TOKEN,
  cocktailsToken,
});
