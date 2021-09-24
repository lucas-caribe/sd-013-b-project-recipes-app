export default function addFavoriteToStorage(type, array) {
  let dataStorage = localStorage.getItem('favoriteRecipes');
  dataStorage = JSON.parse(dataStorage);

  const favoriteRecipe = {
    id: type === 'meals' ? array[0].idMeal : array[0].idDrink,
    type: type === 'meals' ? 'comida' : 'bebida',
    area: type === 'meals' ? array[0].strArea : '',
    category: array[0].strCategory,
    alcoholicOrNot: type === 'meals' ? '' : array[0].strAlcoholic,
    name: type === 'meals' ? array[0].strMeal : array[0].strDrink,
    image: type === 'meals' ? array[0].strMealThumb : array[0].strDrinkThumb,
  };

  if (dataStorage) {
    dataStorage = [...dataStorage, favoriteRecipe];
    localStorage.setItem('favoriteRecipes', JSON.stringify(dataStorage));
    return;
  }
  localStorage.setItem('favoriteRecipes', JSON.stringify([favoriteRecipe]));
}
