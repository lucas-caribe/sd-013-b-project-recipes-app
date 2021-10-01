export default function handleLike(param, setLocal, local) {
  const array = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  setLocal(!local);
  if (array.some((item) => item.id === param.id)) {
    const filtered = array.filter((item) => item.id !== param.id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(filtered));
    console.log(array.indexOf(filtered));
  } else {
    array.push(param);
    localStorage.setItem('favoriteRecipes', JSON.stringify(array));
  }
}
