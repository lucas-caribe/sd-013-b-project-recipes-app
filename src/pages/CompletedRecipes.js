import React, { useState } from 'react';
import CompletedAndFavoriteCard from '../components/CompletedAndFavoriteCard';
import FilterButton from '../components/FilterButton';
import Header from '../components/Header';

export default function CompletedRecipes() {
  const pageTitle = {
    pageName: 'Receitas Feitas',
    setIcon: false,
  };
  const [filter, setFilter] = useState('All');
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  // const doneRecipes = [
  //   {
  //     id: '52771',
  //     type: 'comida',
  //     area: 'Italian',
  //     category: 'Vegetarian',
  //     alcoholicOrNot: '',
  //     name: 'Spicy Arrabiata Penne',
  //     image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
  //     doneDate: '23/06/2020',
  //     tags: ['Pasta', 'Curry'],
  //   },
  //   {
  //     id: '178319',
  //     type: 'bebida',
  //     area: '',
  //     category: 'Cocktail',
  //     alcoholicOrNot:  'Alcoholic',
  //     name: 'Aquamarine',
  //     image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
  //     doneDate: '23/06/2020',
  //     tags: [],
  //   },
  // ];
  return (
    <div>
      <Header value={ pageTitle } />
      <FilterButton setFilter={ setFilter } />
      {doneRecipes
        .filter(({ type }) => {
          if (filter === 'All') return true;
          if (filter === 'Food' && type === 'comida') return true;
          return (filter === 'Drinks' && type === 'bebida');
        })
        .map((recipe, index) => (
          <CompletedAndFavoriteCard
            key={ index }
            index={ index }
            recipe={ recipe }
          />
        ))}
    </div>
  );
}

// init commit
