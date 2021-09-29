export default async function fetchDrinks(inputValue, radioValue) {
  if (!inputValue || !radioValue) return;
  const mealsEndpoints = {
    ingredientSearch: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputValue}`,
    nameSearch: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`,
    firstLetterSearch: `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputValue}`,
  };

  if (inputValue.length > 1 && radioValue === 'firstLetterSearch') {
    global.alert('Sua busca deve conter somente 1 (um) caracter');
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
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();
    return data.drinks;
  } catch (err) {
    console.log(err, 'FETCH ERROU');
  }
}

export async function fetchDrinksFilters() {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err, 'erro no fetch');
  }
}

export async function fetchDrinkByCategory(category) {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json();
    return data.drinks;
  } catch (err) {
    console.log(err, 'deu ruim no fech, pare para tomar uma bavaria');
  }
}

export async function fetchDrinksById(id) {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await response.json();
  return data.drinks;
}

export async function fetchRandomDrink() {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  const data = await response.json();
  return data.drinks;
}
