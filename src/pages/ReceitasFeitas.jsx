import React, { useCallback, useEffect, useState } from 'react';
import Header from '../components/header';
import ButtonShare from '../components/buttonsFavoriteAndShare/buttonShare';

export default function ReceitasFeitas() {
  const [RecipesCompleted, setRecipesCompleted] = useState([]);

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

  useEffect(() => {
    getItensInLocal();
  }, [getItensInLocal]);

  return (
    <div>
      <Header titlePage="Receitas Feitas" />
      <button type="button" data-testid="filter-by-all-btn">All</button>
      <button type="button" data-testid="filter-by-food-btn">Food</button>
      <button type="button" data-testid="filter-by-drink-btn">Drinks</button>

      <section>
        <ul>
          {
            RecipesCompleted.map((recipe, index) => (
              <li key={ recipe.id }>
                <img
                  src={ recipe.image }
                  alt={ recipe.name }
                  style={ { width: '150px' } }
                  data-testid={ `${index}-horizontal-image` }
                />
                <p data-testid={ `${index}-horizontal-top-text` }>
                  { recipe.category }

                </p>
                <p data-testid={ `${index}-horizontal-name` }>
                  { recipe.name}
                </p>
                <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>
                <ButtonShare datatestid={ `${index}-horizontal-share-btn` } />
                <ul>
                  {
                    recipe.tags.map((tag) => (
                      <li
                        key={ index }
                        data-testid={ `${index}-${tag}-horizontal-tag` }
                      >
                        {tag}

                      </li>
                    ))
                  }
                </ul>
              </li>
            ))
          }
        </ul>
      </section>

    </div>
  );
}
