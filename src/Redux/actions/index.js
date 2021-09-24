export const SET_SEARCHBAR = 'SET_SEARCHBAR';
export const SEARCHBAR_INPUT = 'SEARCHBAR_INPUT';
export const USER = 'USER';
export const MEALS_TOKEN = 'mealsToken';
export const COCKTAILS_TOKEN = 'cocktailsToken';
export const INGREDIENT_FILTERS = 'INGREDIENT_FILTERS';
export const NAME_FILTERS = 'NAME_FILTERS';
export const FIRSTLETTER_FILTERS = 'FIRSTLETTER_FILTERS';

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

export const ingredientFiltersAction = (ingredientsRadio) => ({
  type: INGREDIENT_FILTERS,
  payload: { ingredientsRadio },
});

export const nameFiltersAction = (nameRadio) => ({
  type: NAME_FILTERS,
  payload: { nameRadio },
});

export const firstLetterFiltersAction = (firstLetterRadio) => ({
  type: FIRSTLETTER_FILTERS,
  payload: { firstLetterRadio },
});
