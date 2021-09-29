const Error = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

export function fetchCocktailByIngredient(type) {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${type}`)
    .then((response) => response.json())
    .catch(() => global.alert(Error));
}
export function fetchCocktailByName(type) {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${type}`)
    .then((response) => response.json())
    .then((response) => {
      if (!response.drinks) {
        global.alert(Error);
        return { drinks: [] };
      }
      return response;
    });
}
export function fetchCocktailByFirstLetter(type) {
  if (type.length > 1) {
    global.alert('Sua busca deve conter somente 1 (um) caracter');
    return { drinks: [] };
  }
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${type}`)
    .then((response) => response.json())
    .catch(() => global.alert(Error));
}
