export default async function fetchMeals(inputValue, radioValue) {
  const mealsEndpoints = {
    ingredientSearch: `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputValue}`,
    nameSearch: `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`,
    firstLetterSearch: `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`,
  };

  if (inputValue.length > 1 && radioValue === 'firstLetterSearch') {
    alert('Sua busca deve conter somente 1 (um) caracter');
    return;
  }

  if (inputValue && radioValue) {
    try {
      let response = await fetch(mealsEndpoints[radioValue]);
      response = await response.json();
      return response.meals;
    } catch (err) {
      console.log(err);
    }
  }
}

export async function fetchInitialMeals() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const data = await response.json();
  return data.meals;
}

export async function fetchMealsFilters() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const data = await response.json();
  return data;
}

export async function fetchMealByCategory(category) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  const data = await response.json();
  return data.meals;
}

// export default { fetchMeals, fetchInitialMeals };
