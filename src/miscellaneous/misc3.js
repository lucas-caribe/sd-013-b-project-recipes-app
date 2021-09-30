export default function handleLike(param, setLocal, local) {
  const array = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  setLocal(!local);
  if (array.some((item) => item.id === param.id)) {
    array.splice(array.indexOf(param), 1);
    localStorage.setItem('favoriteRecipes', JSON.stringify(array));
  } else {
    array.push(param);
    localStorage.setItem('favoriteRecipes', JSON.stringify(array));
  }
}
