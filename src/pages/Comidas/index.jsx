import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import Card from '../../components/Card/Card';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterButtonsMeals from './FilterButtonsMeals';

import { useAuth, useRecipes } from '../../context';

function Comidas() {
  const { handleMainPage } = useAuth();
  const { location: { pathname } } = useHistory();

  const { meals: { list } } = useRecipes();

  const MAX_ELEMENTS = 12;

  useEffect(() => {
    handleMainPage(pathname);
  }, [handleMainPage, pathname]);

  const mapMeallist = (mealsList) => mealsList.map((
    meal, index,
  ) => Card(meal.strMeal, meal.strMealThumb, index))
    .slice(0, MAX_ELEMENTS);

  if (list.length === 0) {
    return (
      <main>
        <Header pageTitle="Comidas" showSearchIcon />
        <FilterButtonsMeals />
        <h1>loading...</h1>
        <Footer />
      </main>
    );
  }

  const readyToLoad = list.length > 0;
  if (readyToLoad) {
    return (
      <div>
        <Header pageTitle="Comidas" showSearchIcon />
        <FilterButtonsMeals />
        {mapMeallist(list)}
        <Footer />
      </div>
    );
  }
}

export default Comidas;
