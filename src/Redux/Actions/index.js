const STORE_USER_INFO = 'STORE_USER_INFO';
const FILTER_ITEMS = 'FILTER_ITENS';
const CLEAN_ITENS = 'CLEAN_ITENS';

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

export {
  STORE_USER_INFO,
  FILTER_ITEMS, CLEAN_ITENS, storeUser, fetchFilteredItems, cleanFilter };
