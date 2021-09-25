const mealListEndPoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const drinkListEndPoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const MEAL_CATEGORIES_URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const DRINK_CATEGORIES_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

const MAX_RECOMMENDATIONS = 6;

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

export function fetchFullMealsList() {
  return fetch(mealListEndPoint)
    .then((res) => res.json())
    .then((data) => data.meals);
}

export function fetchDrinks(type, value) {
  const API_URL = getDrinksEndpoint(type, value);

  return fetch(API_URL)
    .then((res) => res.json())
    .then((data) => data.drinks);
}

export function fetchFullDrinksList() {
  return fetch(drinkListEndPoint)
    .then((res) => res.json())
    .then((data) => data.drinks);
}

export function fetchResults(type, value, page) {
  if (page.includes('Comidas')) return fetchMeals(type, value);
  if (page.includes('Bebidas')) return fetchDrinks(type, value);
}

export function fetchMealCategories() {
  return fetch(MEAL_CATEGORIES_URL)
    .then((res) => res.json())
    .then((data) => data.meals);
}

export function fetchDrinkCategories() {
  return fetch(DRINK_CATEGORIES_URL)
    .then((res) => res.json())
    .then((data) => data.drinks);
}

export function fetchCategories(category) {
  if (category === 'meals') return fetchMealCategories();
  if (category === 'drinks') return fetchDrinkCategories();
}

export function fetchMealsByCategory(filter) {
  return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${filter}`)
    .then((res) => res.json())
    .then((data) => data.meals);
}

export function fetchDrinksByCategory(filter) {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter}`)
    .then((res) => res.json())
    .then((data) => data.drinks);
}

export function fetchMealById(id) {
  return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then((data) => data.meals[0]);
}

export function fetchDrinkById(id) {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then((data) => data.drinks[0]);
}

export function fetchRecipeById(type, id) {
  if (type === 'comida') return fetchMealById(id);
  if (type === 'bebida') return fetchDrinkById(id);
}

function fetchDrinksRecommendations() {
  return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then((res) => res.json())
    .then((data) => (data.drinks.slice(0, MAX_RECOMMENDATIONS)));
}

function fetchMealsRecommendations() {
  return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((res) => res.json())
    .then((data) => (data.meals.slice(0, MAX_RECOMMENDATIONS)));
}

export function fetchRecommendations(type) {
  if (type === 'comida') return fetchDrinksRecommendations();
  if (type === 'bebida') return fetchMealsRecommendations();
}
