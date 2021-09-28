export const getIngredientsInArray = (object) => {
  const keys = Object.keys(object);
  const arrayIngridients = keys.reduce((acc, key) => {
    if (key.includes('strIngredient') && object[key]) {
      acc = [...acc, object[key]];
    }
    return acc;
  }, []);
  return arrayIngridients;
};

export const getIngredientsAndMeasure = (object) => {
  const keys = Object.keys(object);
  const arrayIngredients = getIngredientsInArray(object);
  const arrayMeasureIncomplete = keys.reduce((acc, key) => {
    if (key.includes('strMeasure') && object[key]) {
      acc = [...acc, object[key]];
    }
    return acc;
  }, []);
  const arrayMeasure = arrayMeasureIncomplete.splice(0, arrayIngredients.length);
  return { arrayIngredients, arrayMeasure };
};
