const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
const QUANTIDADE_INGREDIENTS = 12;

const fetchIngredientsList = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data.meals.slice(0, QUANTIDADE_INGREDIENTS);
};

export default fetchIngredientsList;
