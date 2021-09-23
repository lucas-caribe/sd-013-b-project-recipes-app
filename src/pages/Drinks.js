import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RecipesList from '../components/RecipesList';
import Footer from '../components/Footer';

import { fetchDrinksByCategory, fetchFullDrinksList } from '../services/api';

function Drinks() {
  const [drinksList, setDrinksList] = useState([]);

  useEffect(() => {
    const callDrinksFetch = async () => {
      const list = await fetchFullDrinksList();
      setDrinksList(list);
    };
    callDrinksFetch();
  }, []);

  function filterHandler(filter) {
    if (!filter || filter === 'all') {
      return fetchFullDrinksList().then((list) => setDrinksList(list));
    }

    if (filter) fetchDrinksByCategory(filter).then((list) => setDrinksList(list));
  }

  function searchHandler(results) {
    setDrinksList(results);
  }

  return (
    <div className="drinks-page">
      <Header onSearch={ searchHandler } />
      { drinksList && (
        <RecipesList list={ drinksList } category="drinks" onFilter={ filterHandler } />
      ) }
      <Footer />
    </div>
  );
}

export default Drinks;
