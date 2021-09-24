export async function ingredientDrinkAPI(ingredient) {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const response = await request.json();
  return response.drinks;
}

export async function nameDrinkAPI(name) {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
  const response = await request.json();
  return response.drinks;
}

export async function fistLetterDrinkAPI(letter) {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
  const response = await request.json();
  return response.drinks;
}
