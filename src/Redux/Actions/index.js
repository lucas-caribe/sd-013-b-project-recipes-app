const STORE_USER_INFO = 'STORE_USER_INFO';
const FILTER_ITEMS = 'FILTER_ITENS';
const CLEAN_ITENS = 'CLEAN_ITENS';
const START_RECIPE = 'START_RECIPE';
const EDIT_RECIPE = 'EDIT_RECIPE';
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
const FINISH_RECIPE = 'FINISH_RECIPE';
const REMOVE_FROM_IN_PROGRESS = 'REMOVE_FROM_IN_PROGRESS';
const RANDOM_FOOD = 'https://www.themealdb.com/api/json/v1/1/random.php';
const RANDOM_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

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
  case 'filter':
    filter = 'filter.php?c=';
    break;
  default:
    filter = 'filter.php?s=';
    break;
  }
  if (userFilter === 'first-letter' && userInput.length > 1) {
    global.alert('Sua busca deve conter somente 1 (um) caracter');
  } else {
    console.log(`https://www.${type}.com/api/json/v1/1/${filter}${userInput}`);
    fetch(`https://www.${type}.com/api/json/v1/1/${filter}${userInput}`)
      .then((result) => result.json())
      .then((obj) => {
        console.log(obj);
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

const toggleFavorite = (item) => {
  const type = Object.keys(item).some((key) => key === 'idMeal') ? 'comidas' : 'bebidas';
  const itemToRedux = {
    id: type === 'comidas' ? item.idMeal : item.idDrink,
    type: type === 'comidas' ? 'meals' : 'cocktails',
    area: item.strArea,
    category: item.strCategory,
    name: type === 'comidas' ? item.strMeal : item.strDrink,
  };
  if (type === 'bebidas') itemToRedux.alcoholicOrNot = item.strAlcoholic;
  return {
    type: TOGGLE_FAVORITE,
    payload: {
      item: itemToRedux,
    },
  };
};

const removeInProgress = (items) => {
  const id = Object.keys(items).some((key) => key === 'idMeal')
    ? items.idMeal : items.idDrink;
  const type = Object.keys(items).some((key) => key === 'idMeal') ? 'meals' : 'cocktails';
  console.log(type);
  return {
    type: REMOVE_FROM_IN_PROGRESS,
    payload: { id, type },
  };
};

const addToDone = (item) => {
  const type = Object.keys(item).some((key) => key === 'idMeal') ? 'comidas' : 'bebidas';
  const itemToRedux = {
    id: type === 'comidas' ? item.idMeal : item.idDrink,
    type: type === 'comidas' ? 'meals' : 'cocktails',
    area: item.strArea,
    category: item.strCategory,
    name: type === 'comidas' ? item.strMeal : item.strDrink,
    doneDate: '',
    tags: item.strTags ? item.strTags.split(',') : [],
  };
  if (type === 'bebidas') itemToRedux.alcoholicOrNot = item.strAlcoholic;

  return {
    type: FINISH_RECIPE,
    payload: itemToRedux,
  };
};

const finishRecipe = (items) => (dispatch) => {
  dispatch(removeInProgress(items));
  dispatch(addToDone(items));
};

const editProgress = (id, foodType, ingredient) => {
  const type = foodType === 'comidas' ? 'meals' : 'cocktails';

  return {
    type: EDIT_RECIPE,
    payload: { id, type, ingredient },
  };
};

export {
  STORE_USER_INFO,
  FILTER_ITEMS, CLEAN_ITENS,
  START_RECIPE,
  EDIT_RECIPE,
  TOGGLE_FAVORITE,
  FINISH_RECIPE,
  REMOVE_FROM_IN_PROGRESS,
  storeUser,
  fetchFilteredItems,
  cleanFilter,
  startRecipe,
  toggleFavorite,
  finishRecipe,
  editProgress,
};

export const fetchRandomMeal = async () => {
  try {
    const response = await fetch(RANDOM_FOOD);
    const { meals } = await response.json();
    return meals;
  } catch (error) {
    throw new Error('Não foi possível realizar pesquisa');
  }
};

export const fetchRandomDrink = async () => {
  try {
    const response = await fetch(RANDOM_DRINKS);
    const { drinks } = await response.json();
    return drinks;
  } catch (error) {
    throw new Error('Não foi possível realizar pesquisa');
  }
};
