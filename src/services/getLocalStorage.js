const getEmailFromLocalStorage = () => {
  const { email } = JSON.parse(localStorage.getItem('user'));
  return email;
};

export const getFavoriteRecipesFromLocalStorage = () => {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  return favoriteRecipes;
};

export default getEmailFromLocalStorage;
