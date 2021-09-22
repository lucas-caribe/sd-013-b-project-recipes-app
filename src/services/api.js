export function getMealsEndpoint(type, value) {
  switch (type) {
  case 'Ingrediente':
    return `https://www.themealdb.com/api/json/v1/1/filter.php?i=${value}`;
  case 'Nome':
    return `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
  case 'Primeira letra':
    return `https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`;

  default: throw new Error('Cant generate API_URL: Invalid params');
  }
}

export function getDrinksEndpoint(type, value) {
  switch (type) {
  case 'Ingrediente':
    return `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${value}`;
  case 'Nome':
    return `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`;
  case 'Primeira letra':
    return `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${value}`;

  default: throw new Error('Cant generate API_URL: Invalid params');
  }
}

export function fetchMeals(type, value) {
  const API_URL = getMealsEndpoint(type, value);

  return fetch(API_URL)
    .then((res) => res.json())
    .then((data) => data.meals);
}

export function fetchDrinks(type, value) {
  const API_URL = getDrinksEndpoint(type, value);

  return fetch(API_URL)
    .then((res) => res.json())
    .then((data) => data.drinks);
}

export function fetchResults(type, value, page) {
  if (page.includes('Comidas')) return fetchMeals(type, value);
  if (page.includes('Bebidas')) return fetchDrinks(type, value);
}
