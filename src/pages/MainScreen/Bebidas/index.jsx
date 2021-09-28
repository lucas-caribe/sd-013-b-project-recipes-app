import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import Card from '../Card';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import FilterButtonsDrinks from './FilterButtonsDrinks';

import { useAuth, useRecipes } from '../../../context';

function Bebidas() {
  const { handleMainPage } = useAuth();
  const { location: { pathname } } = useHistory();

  const { cocktails: { list } } = useRecipes();

  useEffect(() => {
    handleMainPage(pathname);
  }, [handleMainPage, pathname]);

  const MAX_ELEMENTS = 12;

  const mapDrinklist = (drinksList) => drinksList.map((
    drink, index,
  ) => Card(drink.strDrink, drink.strDrinkThumb, index))
    .slice(0, MAX_ELEMENTS);

  if (list.length === 0) {
    return (
      <main>
        <Header pageTitle="Bebidas" showSearchIcon />
        <FilterButtonsDrinks />

        <h1>loading...</h1>
        <Footer />
      </main>
    );
  }

  const readyToLoad = list.length > 0;
  if (readyToLoad) {
    return (
      <div>
        <Header pageTitle="Bebidas" showSearchIcon />
        <FilterButtonsDrinks />

        {mapDrinklist(list)}
        <Footer />
      </div>
    );
  }
}

export default Bebidas;
