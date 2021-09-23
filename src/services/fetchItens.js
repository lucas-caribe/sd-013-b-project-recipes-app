export const fetchMealsArray = () => (
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((r) => r.json()
      .then((json) => (r.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export const fetchCocktailArray = () => (
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then((r) => r.json()
      .then((json) => (r.ok ? Promise.resolve(json) : Promise.reject(json))))
);
