const VIDEO_ID_INDEX = 32;

function getIngredientsAndMeasures(element) {
  let index = 1;
  let ingredients = [];
  let ingredientKey = `strIngredient${index}`;
  let measureKey = `strMeasure${index}`;

  for (let i = 0; element[measureKey]; i += 1) {
    ingredients = [
      ...ingredients,
      `${element[measureKey]} ${[element[ingredientKey]]}`,
    ];

    index += 1;

    ingredientKey = `strIngredient${index}`;

    measureKey = `strMeasure${index}`;
  }

  return ingredients;
}

function getFoodRecipe(food) {
  const ingredients = getIngredientsAndMeasures(food);

  const video = `https://www.youtube.com/embed/${food.strYoutube.slice(VIDEO_ID_INDEX)}`;

  return {
    name: food.strMeal,
    id: food.idMeal,
    image: food.strMealThumb,
    subcategory: food.strCategory,
    ingredients,
    instructions: food.strInstructions,
    video,
  };
}

function getFoodProperties(food) {
  return {
    name: food.strMeal,
    id: food.idMeal,
    image: food.strMealThumb,
  };
}

function getDrinkProperties(drink) {
  return {
    name: drink.strDrink,
    id: drink.idDrink,
    image: drink.strDrinkThumb,
  };
}

function getDrinkRecipe(drink) {
  return {
    name: drink.strDrink,
    id: drink.idDrink,
    image: drink.strDrinkThumb,
    ingredients: getIngredientsAndMeasures(drink),
    instructions: drink.strInstructions,
  };
}

export function getFoodOrDrinkProperties(consumable, category) {
  if (category === 'meals') return getFoodProperties(consumable);
  if (category !== 'meals') return getDrinkProperties(consumable);
}
export function getFoodOrDrinkRecipe(consumable, category) {
  if (category === 'meals') return getFoodRecipe(consumable);
  if (category !== 'meals') return getDrinkRecipe(consumable);
}
