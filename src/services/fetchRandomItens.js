export const fetchMealRandom = () => (
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((r) => r.json()
      .then((json) => (r.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export const fetchCocktailRandom = () => (
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((r) => r.json()
      .then((json) => (r.ok ? Promise.resolve(json) : Promise.reject(json))))
);
