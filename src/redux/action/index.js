// Type

export const SET_USER = 'SET_USER';
export const SET_SEARCH = 'SET_SEARCH';

// //Actions Creator

export const setUser = (payload) => ({ type: SET_USER, payload });

export const setSearch = (payload) => ({
  type: SET_SEARCH,
  payload,
});

// // Thunk

export const fetchSearchThunk = ({ value, type }) => (dispatch) => {
  if (value === 'ingredient') {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${type}`)
      .then((response) => response.json())
      .then((response) => dispatch(setSearch(response)));
  }
  if (value === 'name') {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?s=${type}`)
      .then((response) => response.json())
      .then((response) => dispatch(setSearch(response)));
  }
  if (value === 'frist-letter') {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?f=${type}`)
      .then((response) => response.json())
      .then((response) => dispatch(setSearch(response)));
  }
};
