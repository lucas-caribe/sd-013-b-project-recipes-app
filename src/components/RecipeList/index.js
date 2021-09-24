import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router';

import RecipesContext from '../../context/Recipes/RecipesContext';

import RecipeCard from '../RecipeCard';

function RecipesList() {
  const {
    fetchRecipesCategory,
    handleClickCategory,
    fetchRecipesList,
    categories,
    recipes,
  } = useContext(RecipesContext);
  const location = useLocation();
  const type = location.pathname === '/comidas' ? 'Meal' : 'Drink';

  useEffect(() => {
    const recipeType = location.pathname === '/comidas' ? 'meals' : 'drinks';
    fetchRecipesCategory(recipeType);
  }, [fetchRecipesCategory, location]);

  useEffect(() => {
    const recipeType = location.pathname === '/comidas' ? 'meals' : 'drinks';
    fetchRecipesList(recipeType);
  }, [fetchRecipesList, location]);

  if (!(recipes.length && categories.length)) return <div />;

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={ handleClickCategory }
          data-testid="All-category-filter"
        >
          All
        </button>
        { categories.map((category) => (
          <button
            type="button"
            key={ category }
            onClick={ handleClickCategory }
            data-testid={ `${category}-category-filter` }
          >
            {category}
          </button>
        )) }
      </div>
      { recipes.map((recipe, index) => (
        <RecipeCard
          key={ recipe[`id${type}`] }
          recipe={ recipe }
          index={ index }
          type={ type }
        />
      )) }
    </div>
  );
}

export default RecipesList;
