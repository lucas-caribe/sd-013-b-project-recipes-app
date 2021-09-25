import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import RecipesContext from '../Context/RecipesContext';
import ProfileButton from './Utils/ProfileButton';
import SearchButton from './Utils/SearchButton';
import '../App.css';
import InputSearchMeals from './Utils/InputSearchMeals';
import InputSearchCocktails from './Utils/InputSearchCocktails';
import Footer from '../Components/Footer';

export default function MainFoodPage() {
  const { searchBar, mealsAndInputs,
    mealsAndInputs: { meals }, setMealsAndInputs } = useContext(RecipesContext);
  const location = useLocation().pathname;
  const [drinks, setDrinks] = useState([]);
  const TWELVE = 12;

  async function fetchDrinkAPI() {
    const APIDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(APIDrinks).then((resp) => resp.json());
    let drinksList = response.drinks;
    if (drinksList.length > TWELVE) drinksList = drinksList.slice(0, TWELVE);
    setDrinks(drinksList);
  }
  async function fetchMealAPI() {
    const APIMeals = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(APIMeals).then((resp) => resp.json());
    let mealsList = response.meals;
    console.log(response);
    console.log(mealsList);
    if (mealsList.length > TWELVE) mealsList = mealsList.splice(0, TWELVE);
    setMealsAndInputs({ ...mealsAndInputs, meals: mealsList });
  }
  const renderFunc = () => (location
    .includes('/comidas') ? fetchMealAPI() : fetchDrinkAPI());

  useEffect(() => {
    renderFunc();
  }, []);
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
      {searchBar && location === '/comidas'
        ? <InputSearchMeals /> : null}
      {searchBar && location === '/bebidas' ? <InputSearchCocktails /> : null}
      {location.includes('/bebidas') ? drinks.map((drink, index) => (
        <div key={ index } className="card" data-testid={ `${index}-recipe-card` }>
          <img
            src={ `${drink.strDrinkThumb}` }
            alt={ drink.strDrink }
            data-testid={ `${index}-card-img` }
          />
          <Link to={ `/bebidas/${drink.idDrink}` }>
            <h4 data-testid={ `${index}-card-name` }><b>{drink.strDrink}</b></h4>
          </Link>
        </div>
      ))
        : meals.map((meal, index) => (
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
