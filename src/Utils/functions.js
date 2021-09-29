// export const fetchRecommended = (recommendedDb,
//   recommendationUrl, numberOfRecommendations) => {
//   fetch(recommendationUrl).then((res) => res.json()).then((data) => {
//     const rec = data[recommendedDb];
//     const sixFirst = rec.splice(0, numberOfRecommendations);
//     return sixFirst;
//   });
// };

const INPROGRESS = 'in-progress';

const checkDone = (doneRecipes, id) => {
  let done = false;
  if (doneRecipes.length > 0) {
    doneRecipes.forEach((x) => {
      if (x.id === id) done = true;
    });
  }
  return done;
};

const checkIPRMeals = (inProgressRecipes, type, id) => {
  let IPRMeals = false;
  if (type === 'comidas') {
    const ipr = inProgressRecipes;
    const keys = Object.keys(ipr.meals);
    if (keys.length > 0) {
      for (let i = 0; i < keys.length; i += 1) {
        if (keys[i] === id) { IPRMeals = true; }
      }
    }
  }
  return IPRMeals;
};

const checkIPRCocktails = (inProgressRecipes, type, id) => {
  let IPRCocktails = false;
  if (type === 'bebidas') {
    const ipr = inProgressRecipes;
    const keys = Object.keys(ipr.cocktails);
    if (keys.length > 0) {
      for (let i = 0; i < keys.length; i += 1) {
        if (keys[i] === id) { IPRCocktails = true; }
      }
    }
  }
  return IPRCocktails;
};

const checkInProgress = (inProgressRecipes, type, id) => {
  const meals = checkIPRMeals(inProgressRecipes, type, id);
  const cocktails = checkIPRCocktails(inProgressRecipes, type, id);
  if (meals || cocktails) return true;
};

export const checkFavorites = () => {};

export const checkRecipeStatus = (type, id, inProgressRecipes, doneRecipes) => {
  const done = checkDone(doneRecipes, id);
  if (done) return 'done';

  const inProgress = checkInProgress(inProgressRecipes, type, id);
  if (inProgress) return INPROGRESS;

  return 'default';
};

export const checkDisabled = (status, actualIngredients, ingredients) => {
  if (status === INPROGRESS
  && actualIngredients.length !== ingredients.length) return true;
  if (status === INPROGRESS
    && actualIngredients.length === ingredients.length) return false;
};

export const fetchRecomendation = async (recommendationUrl, recommendedDb, func) => {
  await fetch(recommendationUrl).then((res) => res.json()).then((data) => {
    const rec = data[recommendedDb];
    const spliceNumber = 6;
    const sixFirst = rec.reduce((acc, act, index) => {
      if (index < spliceNumber) {
        return [...acc, act];
      }
      return acc;
    }, []);
    func(sixFirst);
  });
};
