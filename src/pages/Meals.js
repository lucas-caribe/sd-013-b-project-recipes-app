import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import RecipesList from '../components/RecipesList';
import Footer from '../components/Footer';

import { fetchFullMealsList, fetchMealsByCategory } from '../services/api';

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

  function searchHandler(results) {
    setMealList(results);
  }

  return (
    <div className="meals-page">
      <Header onSearch={ searchHandler } />
      { mealList && (
        <RecipesList list={ mealList } category="meals" onFilter={ filterHandler } />
      ) }
      <Footer />
    </div>
  );
}

export default Meals;
