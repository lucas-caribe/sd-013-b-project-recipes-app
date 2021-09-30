import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { loadProgressRecipeById, getPageArgs } from '../services/Service';
// import ingredients from '../services/Ingredients';
import { fetchFoodById } from '../services/fetchAPI';

const FAKEID = 52771;
const index = 0;

export default function CardIngredients() {
  const history = useHistory();
  const args = getPageArgs(history);
  const [page, id, inProgress] = args;

  let recipe = {};
  useEffect(() => {
    recipe = fetchFoodById(FAKEID);
    console.log(recipe);
  }, []);

  // const ingredientsList = ingredients(recipe[0]);
  const ingredientsList = recipe;
  console.log(page, id, inProgress, ingredientsList);

  function loadIfProgressPage() {
    const verifyIngs = loadProgressRecipeById(FAKEID);
    console.log(verifyIngs);
    return (
      <div>
        <div>Ingredients InProgress list</div>
        <li data-testid={ `${index}-ingredient-step` }>{ FAKEID }</li>
      </div>
    );
  }

  function loadOnRecipePage() {
    return (
      <ul>
        {ingredientsList.map((ingre, ingreIndex) => (
          Object.entries(ingre).map((entrie) => {
            if (entrie[1] === '') {
              return (
                <li data-testid={ `${ingreIndex}-ingredient-name-and-measure` }>
                  {entrie[0]}
                </li>
              );
            }
            return (
              <li
                data-testid={ `${ingreIndex}-ingredient-name-and-measure` }
                key={ entrie[0] }
              >
                {`${entrie[1]} - ${entrie[0]}`}
              </li>
            );
          })
        ))}
      </ul>
    );
  }

  return (
    <div>{ inProgress !== 'in-progress' ? loadIfProgressPage() : loadOnRecipePage() }</div>
  );
}
