import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';

import RecipesContext from '../../context/Recipes/RecipesContext';

import RecipeCard from '../RecipeCard';
import Footer from '../Footer';
import RenderFilteredRecipes from '../RenderFilteredRecipes';
import Header from '../Header';

function RecipesList() {
  const mealsOrDrinks = useSelector(({ foods }) => foods.mealsOrDrinks);
  const {
    fetchRecipesCategory,
    handleClickCategory,
    fetchRecipesList,
    categories,
    recipes,
  } = useContext(RecipesContext);
  const location = useLocation();
  const type = location.pathname.includes('comidas') ? 'Meal' : 'Drink';

  useEffect(() => {
    const recipeType = type === 'Meal' ? 'meals' : 'drinks';
    fetchRecipesCategory(recipeType);
  }, [fetchRecipesCategory, type]);

  useEffect(() => {
    const recipeType = type === 'Meal' ? 'meals' : 'drinks';
    fetchRecipesList(recipeType);
  }, [fetchRecipesList, type]);

  if (!(recipes.length && categories.length)) return <div />;

  if (Object.keys(mealsOrDrinks).length > 0) {
    return (
      <RenderFilteredRecipes />
    );
  }

  return (
    <>
      <Header
        title={ type === 'Meal' ? 'Comidas' : 'Bebidas' }
        displaySearchBtn
      />
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
      <Footer />
    </>
  );
}

export default RecipesList;
