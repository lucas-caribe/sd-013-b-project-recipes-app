function getIngredientsAndMeasures(element) {
  let index = 1;
  let ingredients = [];
  let ingredientKey = `strIngredient${index}`;
  let measureKey = `strMeasure${index}`;

  for (let i = 0; element[measureKey] !== null && element[measureKey] !== ''; i += 1) {
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
  const recipe = {
    name: food.strMeal,
    id: food.idMeal,
    image: food.strMealThumb,
    subcategory: food.strCategory,
    ingredients,
    instructions: food.strInstructions,
  };
  return recipe;
}

function getFoodProperties(food) {
  const properties = {
    name: food.strMeal,
    id: food.idMeal,
    image: food.strMealThumb,
  };
  return properties;
}

function getDrinkProperties(drink) {
  const properties = {
    name: drink.strDrink,
    id: drink.idDrink,
    image: drink.strDrinkThumb,
  };
  return properties;
}

function getDrinkRecipe(drink) {
  const ingredients = getIngredientsAndMeasures(drink);
  const recipe = {
    name: drink.strDrink,
    id: drink.idDrink,
    image: drink.strDrinkThumb,
    ingredients,
    instructions: drink.strInstructions,
  };
  return recipe;
}

export function getFoodOrDrinkProperties(consumable, category) {
  return (
    category === 'meals' ? getFoodProperties(consumable) : getDrinkProperties(consumable)
  );
}

export function getFoodOrDrinkRecipe(consumable) {
  // console.log(consumable);
  const firstObjectKey = Object.keys(consumable)[0];
  return (
    firstObjectKey === 'idMeal' ? getFoodRecipe(consumable) : getDrinkRecipe(consumable)
  );
}
