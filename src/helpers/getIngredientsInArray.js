const getIngredientsInArray = (object) => {
  const keys = Object.keys(object);
  const arrayIngridients = keys.reduce((acc, key) => {
    if (key.includes('strIngredient') && object[key]) {
      acc = [...acc, object[key]];
    }
    return acc;
  }, []);
  return arrayIngridients;
};

export default getIngredientsInArray;
