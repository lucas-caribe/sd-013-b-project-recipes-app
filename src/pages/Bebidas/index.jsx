import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

function Drinks() {
  const [drinkList, setDrinkList] = useState([]);
  const MAX_ELEMENTS = 12;

  useEffect(() => {
    const fetchDrink = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      const drinks = await data.drinks;
      setDrinkList(drinks);
    };
    fetchDrink();
  }, []);

  const mapDrinklist = (drinks) => drinks.map((
    drink, index,
  ) => Card(drink.strDrink, drink.strDrinkThumb, index))
    .slice(0, MAX_ELEMENTS);

  const loading = drinkList.length > 0;
  if (loading) {
    return (
      <div>
        <Header pageTitle="Bebidas" showSearchIcon />
        {mapDrinklist(drinkList)}
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <Header pageTitle="Bebidas" showSearchIcon />
      <h1>loading...</h1>
      <Footer />
    </div>
  );
}

export default Drinks;
