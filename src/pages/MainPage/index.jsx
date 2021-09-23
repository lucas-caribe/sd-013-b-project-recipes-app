import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import DrinksMenu from '../../components/DrinksMenu';
import MealsMenu from '../../components/MealsMenu';
import AppContext from '../../context/AppContext';
import fetchAPI from '../../services';

const FOOD_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const FOOD_CATEGORIES_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const DRINK_ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const DRINK_CATEGORIES_ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

export default function MainPage() {
  const history = useHistory();
  const { currentFoodFilter, currentDrinkFilter } = useContext(AppContext);
  const [meals, setMeals] = useState([]);
  const [mealsCategories, setMealsCategories] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [drinksCategories, setDrinksCategories] = useState([]);

  useEffect(() => {
    async function getMealsAndCategories() {
      const foodCategoriesResponse = await fetchAPI(FOOD_CATEGORIES_ENDPOINT);
      setMealsCategories(foodCategoriesResponse.meals);
      const drinkCategoriesResponse = await fetchAPI(DRINK_CATEGORIES_ENDPOINT);
      setDrinksCategories(drinkCategoriesResponse.drinks);
      const foodResponse = await fetchAPI(FOOD_ENDPOINT);
      setMeals(foodResponse.meals);
      const drinkResponse = await fetchAPI(DRINK_ENDPOINT);
      setDrinks(drinkResponse.drinks);
    }
    getMealsAndCategories();
  }, []);

  useEffect(() => {
    async function getMeals() {
      const foodResponse = await fetchAPI(FOOD_ENDPOINT);
      setMeals(foodResponse.meals);
    }
    async function getFilteredMeals(categoryName) {
      const response = await
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
        .then((res) => res.json());
      setMeals(response.meals);
    }
    if (currentFoodFilter === '') {
      getMeals();
    }
    if (currentFoodFilter !== '') {
      getFilteredMeals(currentFoodFilter);
    }
  }, [currentFoodFilter]);

  useEffect(() => {
    async function getDrinks() {
      const drinkResponse = await fetchAPI(DRINK_ENDPOINT);
      setDrinks(drinkResponse.drinks);
    }
    async function getFilteredDrinks(categoryName) {
      const response = await
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryName}`)
        .then((res) => res.json());
      setDrinks(response.drinks);
    }
    if (currentDrinkFilter === '') {
      getDrinks();
    }
    if (currentDrinkFilter !== '') {
      getFilteredDrinks(currentDrinkFilter);
    }
  }, [currentDrinkFilter]);

  if (history.location.pathname.includes('/comidas')) {
    return <MealsMenu meals={ meals } mealsCategories={ mealsCategories } />;
  }
  if (history.location.pathname.includes('/bebidas')) {
    return <DrinksMenu drinks={ drinks } drinksCategories={ drinksCategories } />;
  }
}
