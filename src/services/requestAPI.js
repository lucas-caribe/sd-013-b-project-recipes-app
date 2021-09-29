export const requestByIngredient = async (ingredient, domain) => {
  try {
    const ingredientURL = `https://www.${domain}.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const response = await fetch(ingredientURL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const requestByName = async (name, domain) => {
  try {
    const nameURL = `https://www.${domain}.com/api/json/v1/1/search.php?s=${name}`;
    const response = await fetch(nameURL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const requestByFirstLetter = async (firstLetter, domain) => {
  try {
    const firstLetterURL = `https://www.${domain}.com/api/json/v1/1/search.php?f=${firstLetter}`;
    const response = await fetch(firstLetterURL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

// 75 80
// INGREDIENTS //

// AREA //

export const fetchArea = async () => {
  const response = await fetch('//www.themealdb.com/api/json/v1/1/list.php?a=list');
  const result = await response.json();
  return result;
};
