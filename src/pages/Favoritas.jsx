import React, { useContext } from 'react';
import Header from '../components/Header';
import useCurrentPage from '../context/hooks/useCurrentPage';
import Context from '../context/Context';
import RecipeFavoriteCard from '../components/RecipeFavoriteCard';

const DRINK = 'Drink';
const MEAL = 'Meal';

function Favoritas() {
  useCurrentPage('Receitas Favoritas');

  const {
    favoritesRecipes,
    setFilterFavoritesRecipes,
    setLinkCopied,
  } = useContext(Context);

  function filterRecipes(foodType) {
    let recipesFiltereds = [];
    recipesFiltereds = favoritesRecipes.filter((recipe) => recipe.type === foodType);
    setFilterFavoritesRecipes([...recipesFiltereds]);
  }

  return (
    <div className="page">
      <Header />

      <div className="recipe-favorite-buttons">
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => {
            setFilterFavoritesRecipes([]);
            setLinkCopied(false);
          } }
        >
          All
        </button>

        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => {
            filterRecipes(MEAL);
            setLinkCopied(false);
          } }
        >
          Food
        </button>

        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => {
            filterRecipes(DRINK);
            setLinkCopied(false);
          } }
        >
          Drinks
        </button>

      </div>

      <RecipeFavoriteCard />

    </div>
  );
}

export default Favoritas;
