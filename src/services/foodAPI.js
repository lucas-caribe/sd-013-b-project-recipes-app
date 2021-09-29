export async function ingredientAPI(ingredient) {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const response = await request.json();
  return response.meals;
}

export async function nameAPI(name) {
  try {
    const request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const response = await request.json();
    return response.meals;
  } catch (error) {
    console.log(error);
  }
}

export async function fistLetterAPI(letter) {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
  const response = await request.json();
  return response.meals;
}

export async function randomIngredient() {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const response = await request.json();
  return response.meals;
}

export async function idAPI(id) {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const response = await request.json();
  return response;
}

export async function newIngredientAPI() {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
  const response = await request.json();
  return response.meals;
}

export async function filteredFoodAPI(url) {
  const request = await fetch(url);
  const response = await request.json();
  return response.meals;
}

export async function suggestionsAPI() {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const response = await request.json();
  return response;
}
