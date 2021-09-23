import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RecipesList from '../components/RecipesList';
import Footer from '../components/Footer';
<<<<<<< HEAD

import { fetchDrinksByCategory, fetchFullDrinksList } from '../services/api';
=======
import { fetchFullDrinksList } from '../services/api';
// Chamar uma funçao que srá chamada dentro do map, recebendo nome e imagem e retornando o card
import Card from '../components/Card';
import FilterButtons from '../components/FilterButtons';
>>>>>>> d50177841de5726fc199638ffe1d98d82a9368f3

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

<<<<<<< HEAD
  function searchHandler(results) {
    setDrinksList(results);
=======
  if (readyToLoad) {
    return (
      <div className="drinks-page">
        <Header />
        <FilterButtons page="Drinks" />
        { mapDrinks(drinksList) }
        <Footer />
      </div>
    );
>>>>>>> d50177841de5726fc199638ffe1d98d82a9368f3
  }

  return (
    <div className="drinks-page">
<<<<<<< HEAD
      <Header onSearch={ searchHandler } />
      { drinksList && (
        <RecipesList list={ drinksList } category="drinks" onFilter={ filterHandler } />
      ) }
=======
      <Header />
      <FilterButtons page="Drinks" />
      <h2>Loading...</h2>
>>>>>>> d50177841de5726fc199638ffe1d98d82a9368f3
      <Footer />
    </div>
  );
}

export default Drinks;
