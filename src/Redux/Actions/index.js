const STORE_USER_INFO = 'STORE_USER_INFO';
const FILTER_ITEMS = 'FILTER_ITENS';
const CLEAN_ITENS = 'CLEAN_ITENS';
const START_RECIPE = 'START_RECIPE';
const EDIT_RECIPE = 'EDIT_RECIPE';
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
const LOAD_STORAGE_FAVORITES_TO_REDUX = 'LOAD_STORAGE_FAVORITES_TO_REDUX';
const LOAD_STORAGE_IN_PROGRESS_TO_REDUX = 'LOAD_STORAGE_IN_PROGRESS_TO_REDUX';
const LOAD_STORAGE_DONE_TO_REDUX = 'LOAD_STORAGE_DONE_TO_REDUX';
const FINISH_RECIPE = 'FINISH_RECIPE';
const REMOVE_FROM_IN_PROGRESS = 'REMOVE_FROM_IN_PROGRESS';

const storeUser = (email, password) => {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
  localStorage.setItem('user', JSON.stringify({ email }));
  return {
    type: STORE_USER_INFO,
    payload: {
      email,
      password,
    },
  };
};

const cleanFilter = () => ({
  type: CLEAN_ITENS,
});

const setFilteredItens = (itens) => ({
  type: FILTER_ITEMS,
  payload: { ...itens },
});

const fetchFilteredItems = (userType, userFilter, userInput) => (dispatch) => {
  const type = userType === 'comidas' ? 'themealdb' : 'thecocktaildb';
  const errorMessage = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';
  let filter = '';
  switch (userFilter) {
  case 'ingredient':
    filter = 'filter.php?i=';
    break;
  case 'name':
    filter = 'search.php?s=';
    break;
  case 'first-letter':
    filter = 'search.php?f=';
    break;
  default:
    filter = 'filter.php?i=';
    break;
  }
  if (userFilter === 'first-letter' && userInput.length > 1) {
    global.alert('Sua busca deve conter somente 1 (um) caracter');
  } else {
    console.log(`https://www.${type}.com/api/json/v1/1/${filter}${userInput}`);
    fetch(`https://www.${type}.com/api/json/v1/1/${filter}${userInput}`)
      .then((result) => result.json())
      .then((obj) => {
        console.log('a');
        if (obj[Object.keys(obj)]) {
          dispatch(setFilteredItens(obj));
        } else {
          global.alert(errorMessage);
        }
      });
  }
};

const startRecipe = (id, type) => ({
  type: START_RECIPE,
  payload: { id, type: type === 'comidas' ? 'meals' : 'cocktails' },
});

const toggleFavorite = (item) => ({
  type: TOGGLE_FAVORITE,
  payload: {
    item,
  },
});

const loadFavoriteStorageToRedux = (items) => ({
  type: LOAD_STORAGE_FAVORITES_TO_REDUX,
  payload: items,
});

const loadInProgressStorageToRedux = (items) => ({
  type: LOAD_STORAGE_IN_PROGRESS_TO_REDUX,
  payload: items,
});

const loadDoneStorageToRedux = (items) => ({
  type: LOAD_STORAGE_DONE_TO_REDUX,
  payload: items,
});

const loadLocalStorage = () => (dispatch) => {
  const localFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (localFavoriteRecipes) {
    dispatch(loadFavoriteStorageToRedux(localFavoriteRecipes));
  }
  const localInProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (localInProgressRecipes) {
    dispatch(loadInProgressStorageToRedux(localInProgressRecipes));
  }
  const localDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  if (localDoneRecipes) {
    dispatch(loadDoneStorageToRedux(localDoneRecipes));
  }
};

const removeInProgress = ({ id, type }) => ({
  type: REMOVE_FROM_IN_PROGRESS,
  payload: { id, type },
});

const addToDone = (items) => ({
  type: FINISH_RECIPE,
  payload: items,
});

const finishRecipe = (items) => (dispatch) => {
  dispatch(removeInProgress(items));
  dispatch(addToDone(items));
};

const editProgress = (id, type, ingredient) => {
  const typeName = type === 'comidas' ? 'meals' : 'cocktails';
  return {
    type: EDIT_RECIPE,
    payload: { id, typeName, ingredient },
  };
};

export {
  STORE_USER_INFO,
  FILTER_ITEMS, CLEAN_ITENS,
  START_RECIPE,
  EDIT_RECIPE,
  TOGGLE_FAVORITE,
  LOAD_STORAGE_FAVORITES_TO_REDUX,
  LOAD_STORAGE_IN_PROGRESS_TO_REDUX,
  FINISH_RECIPE,
  REMOVE_FROM_IN_PROGRESS,
  LOAD_STORAGE_DONE_TO_REDUX,
  storeUser,
  fetchFilteredItems,
  cleanFilter,
  startRecipe,
  toggleFavorite,
  loadLocalStorage,
  finishRecipe,
  editProgress,
};
