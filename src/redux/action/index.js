// Type

export const SET_USER = 'SET_USER';
export const SET_MEAL = 'SET_MEAL';
export const SET_COCKTAIL = 'SET_COCKTAIL';

// //Actions Creator

export const setUser = (payload) => ({ type: SET_USER, payload });

export const setMeal = (payload) => ({
  type: SET_MEAL,
  payload,
});

export const setCocktail = (payload) => ({
  type: SET_COCKTAIL,
  payload,
});

// // Thunk

export const fetchSearchThunk = ({ value, type, recipe }) => (dispatch) => {
  const Error = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';
  if (recipe === 'meal') {
    if (value === 'ingredient') {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${type}`)
        .then((response) => response.json())
        .then((response) => dispatch(setMeal(response)))
        .catch(() => global.alert(Error));
    }
    if (value === 'name') {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?s=${type}`)
        .then((response) => response.json())
        .then((response) => dispatch(setMeal(response)))
        .catch(() => global.alert(Error));
    }
    if (value === 'first-letter') {
      if (type.length > 1) {
        return global.alert('Sua busca deve conter somente 1 (um) caracter');
      }
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?f=${type}`)
        .then((response) => response.json())
        .then((response) => dispatch(setMeal(response)))
        .catch(() => global.alert(Error));
    }
  }
  if (recipe === 'cocktail') {
    if (value === 'ingredient') {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${type}`)
        .then((response) => response.json())
        .then((response) => dispatch(setCocktail(response)))
        .catch(() => global.alert(Error));
    }
    if (value === 'name') {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?s=${type}`)
        .then((response) => response.json())
        .then((response) => dispatch(setCocktail(response)))
        .catch(() => global.alert(Error));
    }
    if (value === 'first-letter') {
      if (type.length > 1) {
        return global.alert('Sua busca deve conter somente 1 (um) caracter');
      }
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?f=${type}`)
        .then((response) => response.json())
        .then((response) => dispatch(setCocktail(response)))
        .catch(() => global.alert(Error));
    }
  }
};
