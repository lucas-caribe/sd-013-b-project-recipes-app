export const SET_SEARCHBAR = 'SET_SEARCHBAR';
export const SEARCHBAR_INPUT = 'SEARCHBAR_INPUT';
export const USER = 'USER';
export const MEALS_TOKEN = 'mealsToken';
export const COCKTAILS_TOKEN = 'cocktailsToken';
export const RADIO_BUTTON = 'RADIO_BUTTON';
export const SEARCH_TEXT = 'SEARCH_TEXT';

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

export const setRadioButton = (payload) => ({
  type: RADIO_BUTTON,
  payload,
});

export const setSearchInput = (payload) => ({
  type: SEARCH_TEXT,
  payload,
});
