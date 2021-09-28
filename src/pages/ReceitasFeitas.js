import React, { useEffect, useState } from 'react';
import CardReceitasFeitas from '../components/Card/CardReceitasFeitas';
import SearchHeader from '../components/Header/SearchHeader';

function ReceitasFeitas() {
  const pageTitle = 'Receitas Feitas';
  const [doneRecipes, setDoneRecipe] = useState([]);

  function getRecipeDone() {
    const recipe = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    setDoneRecipe(recipe);
  }

  function filterByMeal() {
    const recipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    const typeMeal = recipes.filter((recipe) => recipe.type === 'comida');
    setDoneRecipe(typeMeal);
  }

  function filterByDrink() {
    const recipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    const typeDrink = recipes.filter((recipe) => recipe.type === 'bebida');
    setDoneRecipe(typeDrink);
  }

  useEffect(() => {
    getRecipeDone();
  }, []);

  return (
    <div>
      <SearchHeader value={ pageTitle } />
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ getRecipeDone }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ filterByMeal }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ filterByDrink }
      >
        Drink
      </button>
      { doneRecipes && doneRecipes.map((recipe, index) => (
        <CardReceitasFeitas
          key={ index }
          index={ index }
          recipe={ recipe }
        />
      )) }
    </div>
  );
}

export default ReceitasFeitas;
