import React, { useState } from 'react';
import DoneRecipesFilter from '../components/DoneRecipesFilters';
import Header from '../components/Header';
import DoneCard from '../components/DoneCard';

function ReceitasFavoritas() {
  const [actualFilter, setActualFilter] = useState(false);
  let fetchFavorite = localStorage.getItem('favoriteRecipes');
  fetchFavorite = JSON.parse(fetchFavorite);

  const handleFilter = (filterFactor) => {
    if (!filterFactor) return fetchFavorite;
    const filteredRecipes = fetchFavorite.filter(({ type }) => (
      type === filterFactor
    ));
    return filteredRecipes;
  };

  return (
    <div>
      <Header pageTitle="Receitas Favoritas" haveHeader={ false } />
      <DoneRecipesFilter setActualFilter={ setActualFilter } />
      { fetchFavorite && <DoneCard
        filteredRecipes={ handleFilter(actualFilter) }
      /> }
    </div>
  );
}

export default ReceitasFavoritas;
