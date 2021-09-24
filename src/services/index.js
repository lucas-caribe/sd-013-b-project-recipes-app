export async function fetchAllRecipes(type) {
  const mealsURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const drinksURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  return fetch(type === 'meals' ? mealsURL : drinksURL)
    .then((response) => response.json())
    .then((response) => response);
}

export function exemple() {}
