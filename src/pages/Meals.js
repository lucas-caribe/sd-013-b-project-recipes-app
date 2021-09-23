import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
<<<<<<< HEAD
import RecipesList from '../components/RecipesList';
import Footer from '../components/Footer';

import { fetchFullMealsList, fetchMealsByCategory } from '../services/api';
=======
import { fetchFullMealsList } from '../services/api';
// Chamar uma funçao que srá chamada dentro do map, recebendo nome e imagem e retornando o card
import Card from '../components/Card';
import FilterButtons from '../components/FilterButtons';
>>>>>>> d50177841de5726fc199638ffe1d98d82a9368f3

function Meals() {
  const [mealList, setMealList] = useState([]);

  useEffect(() => {
    const callMealsFetch = async () => {
      const list = await fetchFullMealsList();
      setMealList(list);
    };

    callMealsFetch();
  }, []);

  function filterHandler(filter) {
    if (!filter || filter === 'all') {
      return fetchFullMealsList().then((list) => setMealList(list));
    }

    if (filter) fetchMealsByCategory(filter).then((list) => setMealList(list));
  }

<<<<<<< HEAD
  function searchHandler(results) {
    setMealList(results);
=======
  if (readyToLoad) {
    return (
      <div className="meals-page">
        <Header />
        <FilterButtons page="Meals" />
        {console.log(mealList)}
        { mapMeals(mealList) }
      </div>
    );
>>>>>>> d50177841de5726fc199638ffe1d98d82a9368f3
  }

  return (
    <div className="meals-page">
<<<<<<< HEAD
      <Header onSearch={ searchHandler } />
      { mealList && (
        <RecipesList list={ mealList } category="meals" onFilter={ filterHandler } />
      ) }
      <Footer />
=======
      <Header />
      <FilterButtons page="Meals" />
      <h2>Loading...</h2>
>>>>>>> d50177841de5726fc199638ffe1d98d82a9368f3
    </div>
  );
}

export default Meals;
