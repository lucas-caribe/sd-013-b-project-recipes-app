export const fetchMealsItensByCategory = (category) => (
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((response) => response.json()
      .then((jason) => (
        response.ok ? Promise.resolve(jason) : Promise.reject(jason)
      )))
);

export const fetchCocktailsItensByCategory = (category) => (
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((r) => r.json()
      .then((jason) => (
        r.ok ? Promise.resolve(jason) : Promise.reject(jason)
      )))
);
