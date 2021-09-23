export const fetchIngrediente = async (input) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`);
  const data = await response.json();
  return data.meals;
};

export const fetchName = async (input) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
  const data = await response.json();
  return data.meals;
};

export const fetchPrimeiraLetra = async (input) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`);
  const data = await response.json();
  return data.meals;
};
