export default async function fetchDrinks(inputValue, radioValue) {
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
    let response = await fetch(mealsEndpoints[radioValue]);
    response = await response.json();
    return response.drinks;
  }
}

export async function fetchInitialDrinks() {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const data = await response.json();
  return data.drinks;
}

// export default { fetchDrinks, fetchInitialDrinks };
