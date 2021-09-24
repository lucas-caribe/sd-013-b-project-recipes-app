export function fetchMealDetails(id) {
  return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json());
}
export function fetchCocktailDetails(id) {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json());
}
