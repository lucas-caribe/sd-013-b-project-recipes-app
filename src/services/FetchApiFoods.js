const API_BY_INGREDIENT = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const API_BY_NAME = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const API_BY_FIRST_LETTER = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
const API_BY_ALL_FOODS = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

async function getApiByAllFoods(callback) {
  try {
    const results = await fetch(`${API_BY_ALL_FOODS}`)
      .then((res) => res.json());
    callback(results.meals);
  } catch (error) {
    console.error(error);
  }
}

async function getApiByIngrediente(ingredient, callback) {
  try {
    const results = await fetch(`${API_BY_INGREDIENT}${ingredient}`)
      .then((res) => res.json());
    callback(results.meals);
  } catch (error) {
    console.error(error);
  }
}

async function getApiByName(nome, callback) {
  try {
    const results = await fetch(`${API_BY_NAME}${nome}`).then((res) => res.json());
    callback(results.meals);
  } catch (error) {
    console.error(error);
  }
}

async function getApiByFirstLetter(firstLetter, callback) {
  try {
    const results = await fetch(`${API_BY_FIRST_LETTER}${firstLetter}`)
      .then((res) => res.json());
    callback(results.meals);
  } catch (error) {
    console.error(error);
  }
}

function FetchApiFoods(searchText, searchRadio, setSearchFood) {
  switch (searchRadio) {
  case '':
    getApiByAllFoods(setSearchFood);
    break;
  case 'ingredient':
    getApiByIngrediente(searchText, setSearchFood);
    break;
  case 'name':
    getApiByName(searchText, setSearchFood);
    break;
  case 'first-letter':
    if (searchText.length === 1) {
      getApiByFirstLetter(searchText, setSearchFood);
    } else {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
    break;
  default:
    break;
  }
}

export default FetchApiFoods;
