export default function checkFinishCondition(ingredientsStatus, ingredients) {
  const ingredientsCondition = Object.values(ingredientsStatus);
  if (ingredientsCondition
    .filter((item) => item === true).length === ingredients.length) {
    return false;
  }
  return true;
}
