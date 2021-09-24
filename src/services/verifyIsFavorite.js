function verifyIsFavorite({ id, favorited }) {
  let favoritesFromStorage = localStorage.getItem('favoriteRecipes');
  favoritesFromStorage = JSON.parse(favoritesFromStorage);

  if (favoritesFromStorage && favoritesFromStorage.find((recipe) => recipe.id === id)
    && !favorited) {
    return true;
  }
  return false;
}

export default verifyIsFavorite;
