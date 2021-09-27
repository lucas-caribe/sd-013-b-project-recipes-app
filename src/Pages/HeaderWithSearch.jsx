import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import RecipesContext from '../Context/RecipesContext';
import ProfileButton from './Utils/ProfileButton';
import SearchButton from './Utils/SearchButton';
import '../App.css';
import InputSearchMeals from './Utils/InputSearchMeals';
import InputSearchCocktails from './Utils/InputSearchCocktails';
import Footer from '../Components/Footer';
import CategoriesButtons from './Utils/CategoriesButtons';

export default function MainFoodPage() {
  const [mealsCategories, setMealsCategories] = useState([]);
  const [categoryToogle, setCategoryToogle] = useState({ category: '', toogle: false });
  const { searchBar, mealsAndInputs,
    mealsAndInputs: { meals }, setMealsAndInputs } = useContext(RecipesContext);
  const location = useLocation().pathname;
  const TWELVE = 12;
  const FIVE = 5;

  async function fetchMealAPI() {
    const APIMeals = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(APIMeals).then((resp) => resp.json());
    let mealsList = [...response.meals];
    if (mealsList.length > TWELVE) mealsList = mealsList.slice(0, TWELVE);
    setMealsAndInputs({ ...mealsAndInputs, meals: mealsList });
  }
  async function fetchMealCatergoryAPI() {
    const APICategory = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
    const response = await fetch(APICategory).then((resp) => resp.json());
    const categoriesMealsList = [...response.meals];
    const mealArrayCategories = categoriesMealsList.reduce((acc, current) => {
      const { strCategory } = current;
      return { ...acc, [strCategory]: strCategory };
    }, {});
    console.log(mealArrayCategories);
    setMealsCategories(Object.keys(mealArrayCategories).slice(0, FIVE));
  }

  useEffect(() => {
    fetchMealAPI();
    fetchMealCatergoryAPI();
  }, []);

  const buttonsUtils = { mealsCategories,
    categoryToogle,
    fetchMealAPI,
    setCategoryToogle,
    setMealsAndInputs,
    mealsAndInputs };

  return (
    <>
      <header>
        <ProfileButton />
        <h3
          data-testid="page-title"
          style={ { alignSelf: 'center' } }
        >
          {location.includes('/comidas') ? 'Comidas' : 'Bebidas'}
        </h3>
        <SearchButton />
      </header>
      {searchBar && location === '/comidas' ? <InputSearchMeals /> : null}
      {searchBar && location === '/bebidas' ? <InputSearchCocktails /> : null}
      {location.includes('/comidas') && <CategoriesButtons props={ buttonsUtils } />}
      {location.includes('/comidas') && meals.map((meal, index) => (
        <div key={ index } className="card" data-testid={ `${index}-recipe-card` }>
          <img
            src={ `${meal.strMealThumb}` }
            alt={ meal.strIngredient }
            data-testid={ `${index}-card-img` }
          />
          <Link to={ `/comidas/${meal.idMeal}` }>
            <h4 data-testid={ `${index}-card-name` }><b>{meal.strMeal}</b></h4>
          </Link>
        </div>
      ))}
      <Footer />
    </>
  );
}
