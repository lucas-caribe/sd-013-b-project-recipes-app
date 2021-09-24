// const mealListEndPoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
// const drinkListEndPoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const mealCategories = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const drinkCategories = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

export default function fetchCategories(page) {
  if (page === 'Meals') return mealCategories;
  if (page === 'Drinks') return drinkCategories;
}
