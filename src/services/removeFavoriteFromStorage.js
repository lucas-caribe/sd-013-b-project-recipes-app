function removeFavoriteFromStorage(id) {
  let favoritesFromStorage = localStorage.getItem('favoriteRecipes');
  favoritesFromStorage = JSON.parse(favoritesFromStorage);
  const newFavorites = favoritesFromStorage;

  favoritesFromStorage.forEach((favorite, index) => {
    if (favorite.id === id) {
      newFavorites.splice(index, 1);
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
    }
  });
}

export default removeFavoriteFromStorage;
