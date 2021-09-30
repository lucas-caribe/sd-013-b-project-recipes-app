import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { loadProgressRecipeById, getPageArgs } from '../services/Service';
import { fetchFoodById, fetchDrinkById } from '../services/fetchAPI';
import ingredients from '../services/Ingredients';

export default function CardIngredients() {
  const [recipe, setRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();
  const args = getPageArgs(history);
  const [page, id, inProgress] = args;

  useEffect(() => {
    async function fetchRecipe() {
      if (page === 'comidas') {
        setRecipe(await fetchFoodById(id));
      } else {
        setRecipe(await fetchDrinkById(id));
      }
    }
    fetchRecipe();
    setIsLoading(false);
  }, [page, id]);

  const ingredientsList = ingredients(recipe);
  console.log(page, id, inProgress, ingredientsList);

  function toggleCheckbox(e) {
    const change = e.target;
    if (change.checked === true) {
      change.setAttribute('style', 'text-decoration: line-through');
    } else {
      change.setAttribute('style', '');
    }
  }

  function loadIfProgressPage() {
    const verifyIngs = loadProgressRecipeById(id);
    console.log(verifyIngs);
    return (
      <div>
        <div>Ingredients InProgress list</div>
        <ul>
          {ingredientsList.map((ingre, ingreIndex) => (
            Object.entries(ingre).map((entrie) => {
              if (entrie[1] === '') {
                return (
                  <li data-testid={ `${ingreIndex}-ingredient-step` }>
                    <input
                      type="checkbox"
                      id={ `${ingreIndex}checkIng` }
                      onChange={ toggleCheckbox }
                    />
                    <label
                      htmlFor={ `${ingreIndex}checkIng` }
                    >
                      {entrie[0]}
                    </label>
                  </li>
                );
              }
              return (
                <li
                  data-testid={ `${ingreIndex}-ingredient-step` }
                  key={ entrie[0] }
                >
                  <input
                    type="checkbox"
                    id={ `${ingreIndex}checkIng` }
                    onChange={ (e) => toggleCheckbox(e) }
                  />
                  <label
                    htmlFor={ `${ingreIndex}checkIng` }
                  >
                    {`${entrie[1]} - ${entrie[0]}`}
                  </label>
                </li>
              );
            })
          ))}
        </ul>
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

  if (!isLoading) {
    return (
      <div>
        { inProgress ? loadIfProgressPage() : loadOnRecipePage() }
      </div>
    );
  }
}
