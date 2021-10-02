export default function getIngredients(array) {
  let ingredientsAndMeasures = [];
  const ingredientsAndMeasuresKeys = Object.keys(array[0]);
  const ingredientsKeys = ingredientsAndMeasuresKeys.filter((ingredient) => (
    ingredient.match(/strIngredient/ig)));

  const measuresKeys = ingredientsAndMeasuresKeys.filter((measure) => (
    measure.match(/strMeasure/ig)));

  let ingredients = ingredientsKeys.map((ingredient) => array[0][ingredient]);
  ingredients = ingredients.filter((ingredient) => ingredient); // retira strings vazias

  const measures = measuresKeys.map((measure) => array[0][measure]);
  ingredients.forEach((ingredient, index) => {
    ingredientsAndMeasures.push(`${ingredient} - ${measures[index]}`);
  });

  ingredientsAndMeasures = ingredientsAndMeasures.filter((ingredient) => (
    ingredient !== ' - '));

  return ingredientsAndMeasures;
}
