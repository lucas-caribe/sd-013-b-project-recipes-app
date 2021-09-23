export const fetchIngredienteBeb = async (input) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${input}`);
  const data = await response.json();
  return data.drinks;
};

export const fetchNameBeb = async (input) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`);
  const data = await response.json();
  return data.drinks;
};

export const fetchPrimeiraLetraBeb = async (input) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${input}`);
  const data = await response.json();
  return data.drinks;
};
