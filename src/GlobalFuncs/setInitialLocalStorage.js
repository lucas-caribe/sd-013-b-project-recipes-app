const RECIPES_IN_PROGRESS = localStorage.getItem('inProgressRecipes');
const FAVORITES = localStorage.getItem('favoriteRecipes');

export default function SetInitialLocalStorage() {
  if (!RECIPES_IN_PROGRESS && !FAVORITES) {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      meals: {},
      cocktails: {},
      ...inProgressRecipes,
    }));
    localStorage.setItem('favoriteRecipes', JSON.stringify([]));
  }
}
