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

  const { hasTermAndOption, setMeals, meals: { list }, meals } = useRecipes();

  const MAX_ELEMENTS = 12;

  useEffect(() => {
    if (hasTermAndOption === false) {
      console.log('entrou');
      const fetchMeals = async () => {
        const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
        const responseList = await fetch(API_URL);
        const dataList = await responseList.json();
        const mealsList = await dataList.meals;

        const URL_MEALS_CATEGORIES = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
        const responseCategories = await fetch(URL_MEALS_CATEGORIES);
        const dataCategories = await responseCategories.json();
        const mealsCategories = await dataCategories.meals;

        setMeals({
          ...meals,
          list: mealsList,
          categories: mealsCategories,
        });
      };
      fetchMeals();
    }
    return undefined;
  }, []);

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
