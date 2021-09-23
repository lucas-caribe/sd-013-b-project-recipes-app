const URL_FOOD = 'https://www.themealdb.com/api/json/v1/1/random.php';
const URL_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

export const fetchFood = async () => {
  const response = await fetch(URL_FOOD);
  const food = response.json();

  return food;
};

export const fetchDrink = async () => {
  const response = await fetch(URL_DRINK);
  const drink = response.json();

  return drink;
};
