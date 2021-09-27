import React, { useContext } from 'react';
import Header from '../components/Header';
import RecipeDoneCard from '../components/RecipeDoneCard';
import Context from '../context/Context';
import useCurrentPage from '../context/hooks/useCurrentPage';

const DRINK = 'Drink';
const MEAL = 'Meal';

export default function Feitas() {
  useCurrentPage('Receitas Feitas');
  const { allRecipesDone, setFilterRecipeDone } = useContext(Context);

  function filterRecipes(foodType) {
    const recipesFiltereds = allRecipesDone.filter((recipe) => recipe.type === foodType);
    setFilterRecipeDone([...recipesFiltereds]);
  }
  // AS RECEITAS FEITAS DEVERÃO SER SETADAS NA PÁGINA DE 'RECEITA EM PROGRESSO'
  return (
    <div className="page">
      <Header />

      <div className="recipe-done-buttons">
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => setFilterRecipeDone([]) }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => filterRecipes(MEAL) }
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => filterRecipes(DRINK) }
        >
          Drinks
        </button>
      </div>

      <RecipeDoneCard />
    </div>
  );
}
