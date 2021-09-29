const URL_FOODS = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const URL_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export async function fetchFoodById(id) {
  const { meals } = await (await fetch(`${URL_FOODS}${id}`))
    .json();
  return meals;
}

export async function fetchDrinkById(id) {
  const { drinks } = await (await fetch(`${URL_DRINKS}${id}`))
    .json();
  return drinks;
}
