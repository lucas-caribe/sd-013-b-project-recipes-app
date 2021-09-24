export async function ingredientAPI(ingredient) {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const response = await request.json();
  return response.meals;
}

export async function nameAPI(name) {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
  const response = await request.json();
  return response.meals;
}

export async function fistLetterAPI(letter) {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
  const response = await request.json();
  return response.meals;
}
