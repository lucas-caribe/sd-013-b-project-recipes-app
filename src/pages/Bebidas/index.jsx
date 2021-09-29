import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import Card from '../../components/Card/Card';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterButtonsDrinks from './FilterButtonsDrinks';

import { useAuth, useRecipes } from '../../context';

function Bebidas() {
  const { handleMainPage } = useAuth();
  const { location: { pathname } } = useHistory();

  const { hasTermAndOption, setCocktails, cocktails: { list }, cocktails } = useRecipes();

  useEffect(() => {
    if (hasTermAndOption === false) {
      console.log('entrou');
      const fetchDrinks = async () => {
        const LIST_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
        const responseList = await fetch(LIST_URL);
        const dataList = await responseList.json();
        const drinksList = await dataList.drinks;

        const CATEGORIES_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
        const responseCategories = await fetch(CATEGORIES_URL);
        const dataCategories = await responseCategories.json();
        const drinksCategories = await dataCategories.drinks;

        setCocktails({
          ...cocktails,
          list: drinksList,
          categories: drinksCategories,
        });
      };
      fetchDrinks();
    }
    return undefined;
  }, []);

  useEffect(() => {
    handleMainPage(pathname);
  }, [handleMainPage, pathname]);

  const MAX_ELEMENTS = 12;

  const mapDrinklist = (drinksList) => drinksList
    .map((drink, index) => Card(drink.strDrink, drink.strDrinkThumb, index))
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
