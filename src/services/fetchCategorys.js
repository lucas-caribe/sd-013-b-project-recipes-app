export const fetchCategorysMeals = () => (
  fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then((r) => r.json()
      .then((json) => (r.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export const fetchCategorysCoctails = () => (
  fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then((response) => response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))))
);
