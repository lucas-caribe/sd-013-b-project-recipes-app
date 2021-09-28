import React, { useState } from 'react';
import DoneRecipesFilter from '../components/DoneRecipesFilters';
import Header from '../components/Header';
import DoneCard from '../components/DoneCard';

function ReceitasFavoritas() {
  // const favoriteRecipes = [
  //   {
  //     id: '52771',
  //     type: 'comida',
  //     area: 'Italian',
  //     category: 'Vegetarian',
  //     alcoholicOrNot: '',
  //     name: 'Spicy Arrabiata Penne',
  //     image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
  //   },
  //   {
  //     id: '178319',
  //     type: 'bebida',
  //     area: '',
  //     category: 'Cocktail',
  //     alcoholicOrNot:  'Alcoholic',
  //     name: 'Aquamarine',
  //     image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
  //   },
  //   {
  //     id: '178312',
  //     type: 'bebida',
  //     area: '',
  //     category: 'Cocktail',
  //     alcoholicOrNot:  'Alcoholic',
  //     name: 'Aquamarine',
  //     image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
  //   },
  // ];

  // localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));

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
