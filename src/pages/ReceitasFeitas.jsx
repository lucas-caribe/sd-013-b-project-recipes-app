import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Header from '../components/header';
import MealsRecipesCompleted from '../components/mealsRecipesComnpleted';
import DrinkRecipesCompleted from '../components/drinksRecipesCompleted';

export default function ReceitasFeitas() {
  const [RecipesCompleted, setRecipesCompleted] = useState([]);
  const history = useHistory();

  const getItensInLocal = useCallback(
    () => {
      const recipesCompletedInLocal = (
        JSON.parse(localStorage.getItem('doneRecipes'))
      );
      if (recipesCompletedInLocal) {
        setRecipesCompleted(recipesCompletedInLocal);
      } else {
        setRecipesCompleted([]);
      }
    },
    [],
  );

  const handlerClickFilter = ({ target: { innerHTML } }) => {
    const recipesCompletedInLocal = (
      JSON.parse(localStorage.getItem('doneRecipes'))
    );
    if (innerHTML === 'All') {
      setRecipesCompleted(recipesCompletedInLocal);
    } else {
      const objectLiteral = {
        Food() {
          return RecipesCompleted.filter(({ type }) => type === 'comida');
        },
        Drinks() {
          return RecipesCompleted.filter(({ type }) => type === 'bebida');
        },
      };
      setRecipesCompleted(objectLiteral[innerHTML]());
    }
  };

  const handlerClickRedirect = (id, type) => {
    const href = `/${type}s/${id}`;
    history.push(href);
  };

  useEffect(() => {
    getItensInLocal();
  }, [getItensInLocal]);

  return (
    <div>
      <Header titlePage="Receitas Feitas" />
      <button
        onClick={ handlerClickFilter }
        type="button"
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        onClick={ handlerClickFilter }
        type="button"
        data-testid="filter-by-food-btn"
      >
        Food
      </button>
      <button
        onClick={ handlerClickFilter }
        type="button"
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
      <section>
        <ul>
          {
            RecipesCompleted.map((recipe, index) => (
              recipe.type === 'comida'
                ? (
                  <MealsRecipesCompleted
                    key={ recipe.id }
                    recipe={ recipe }
                    index={ index }
                    handlerClickRedirect={ handlerClickRedirect }
                  />
                )
                : (
                  <DrinkRecipesCompleted
                    recipe={ recipe }
                    index={ index }
                    key={ recipe.id }
                    handlerClickRedirect={ handlerClickRedirect }
                  />
                )
            ))
          }
        </ul>
      </section>

    </div>
  );
}
