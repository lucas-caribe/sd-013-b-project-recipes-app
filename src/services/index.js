const URL_FOOD = 'https://www.themealdb.com/api/json/v1/1/random.php';
const URL_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

export const fetchFood = async () => {
  const response = await fetch(URL_FOOD);
  const food = response.json();

  return food;
};

export const fetchDrink = async () => {
  const response = await fetch(URL_DRINK);
  const drink = response.json();

  return drink;
};

export async function fetchAllRecipes(type) {
  const mealsURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const drinksURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  return fetch(type === 'meals' ? mealsURL : drinksURL)
    .then((response) => response.json())
    .then((response) => response);
}

export async function fetchCategories(type) {
  const mealsCategoryURL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const drinksCategoryURL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

  return fetch(type === 'meals' ? mealsCategoryURL : drinksCategoryURL)
    .then((response) => response.json())
    .then((response) => response);
}

export async function fetchByCategory(type, category) {
  const mealsCategoryURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
  const drinksCategoryURL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';

  return fetch(type === 'meals'
    ? `${mealsCategoryURL}${category}` : `${drinksCategoryURL}${category}`)
    .then((response) => response.json())
    .then((response) => response);
}
