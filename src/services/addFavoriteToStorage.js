export default function addFavoriteToStorage(type, array) {
  let dataStorage = localStorage.getItem('favoriteRecipes');
  dataStorage = JSON.parse(dataStorage);

  if (type === 'meals') {
    const favoriteMeal = {
      id: array[0].idMeal,
      type,
      area: array[0].strArea,
      category: array[0].strCategory,
      name: array[0].strMeal,
      image: array[0].strMealThumb,
    };

    if (dataStorage) {
      dataStorage.push(favoriteMeal);
      localStorage.setItem('favoriteRecipes', JSON.stringify(dataStorage));
      return;
    }
    localStorage.setItem('favoriteRecipes', JSON.stringify([favoriteMeal]));
    return;
  }

  if (type === 'drinks') {
    const favoriteDrink = {
      id: array[0].idDrink,
      type,
      area: array[0].strArea,
      alcoholicOrNot: array[0].strAlcoholic,
      name: array[0].strDrink,
      image: array[0].strDrinkThumb,
    };

    if (dataStorage) {
      dataStorage.push(favoriteDrink);
      localStorage.setItem('favoriteRecipes', JSON.stringify(dataStorage));
      return;
    }
    localStorage.setItem('favoriteRecipes', JSON.stringify([favoriteDrink]));
  }
}
