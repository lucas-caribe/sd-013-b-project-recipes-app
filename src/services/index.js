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

export function exemple() {}
