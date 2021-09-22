import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchFullDrinksList } from '../services/api';
// Chamar uma funçao que srá chamada dentro do map, recebendo nome e imagem e retornando o card
import Card from '../components/Card';


function Drinks() {
  const [drinksList, setDrinksList] = useState([]);
  const MAX_ELEMENTS_PER_PAGE = 12;

  useEffect(() => {
    const callDrinksFetch = async () => {
      const list = await fetchFullDrinksList();
      setDrinksList(list);
    };
    callDrinksFetch();
  }, []);

  const mapDrinks = (list) => list.map(
    (drink, index) => Card(drink.strDrink, drink.strDrinkThumb, index),
  ).slice(0, MAX_ELEMENTS_PER_PAGE);

  const readyToLoad = drinksList.length > 0;

  if (readyToLoad) {
    return (
      <div className="drinks-page">
        <Header />
        { mapDrinks(drinksList) }
        <Footer />
      </div>
    );
  }
  return (
    <div className="drinks-page">
      <Header />
      <h2>Loading...</h2>
      <Footer />
    </div>
  );
}

export default Drinks;
