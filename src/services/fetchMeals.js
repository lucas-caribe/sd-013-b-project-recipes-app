const Error = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

export function fetchMealByIngredient(type) {
  return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${type}`)
    .then((response) => response.json())
    .then((response) => response)
    .catch(() => global.alert(Error));
}
export function fetchMealByName(type) {
  return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${type}`)
    .then((response) => response.json())
    .then((response) => {
      if (!response.meals) {
        return global.alert(Error);
      }
      return response;
    });
}
export function fetchMealByFirstLetter(type) {
  if (type.length > 1) {
    return global.alert('Sua busca deve conter somente 1 (um) caracter');
  }
  return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${type}`)
    .then((response) => response.json())
    .then((response) => response)
    .catch(() => global.alert(Error));
}
