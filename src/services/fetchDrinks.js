export default async function fetchDrinks(inputValue, radioValue) {
  if (!inputValue || !radioValue) return;
  const mealsEndpoints = {
    ingredientSearch: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputValue}`,
    nameSearch: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`,
    firstLetterSearch: `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputValue}`,
  };

  if (inputValue.length > 1 && radioValue === 'firstLetterSearch') {
    alert('Sua busca deve conter somente 1 (um) caracter');
    return;
  }

  if (inputValue && radioValue) {
    try {
      let response = await fetch(mealsEndpoints[radioValue]);
      response = await response.json();
      return response.drinks;
    } catch (err) {
      console.log(err);
    }
  }
}

export async function fetchInitialDrinks() {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const data = await response.json();
  return data.drinks;
}

export async function fetchDrinksFilters() {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  const data = await response.json();
  return data;
}

export async function fetchDrinkByCategory(category) {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
  const data = await response.json();
  return data.drinks;
}
