import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import RecipeContext from '../context/RecipeContext';
import Footer from '../components/Footer';
import MainRecipePage from '../components/MainRecipePage';
import fetchApi from '../services/fetchApi';

export default function Food() {
  const pageTitle = {
    pageName: 'Comidas',
    setIcon: true,
  };
  const { ingredientFilter } = useContext(RecipeContext);

  const history = useHistory();

  const { recipesState, redirect } = useContext(RecipeContext);
  const getMealId = recipesState.map((meal) => meal.idMeal);
  const limits = 12;
  const newRecipe = [];
  if (recipesState.length > 0 && !redirect) {
    newRecipe.push(...recipesState.slice(0, limits));
  }

  useEffect(() => {
    async function fetchIngredients() {
      const { meals } = await fetchApi(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientFilter}`);
      // console.log(meals);
      if (meals.length < limits) {
        newRecipe.push(...meals);
      } else {
        newRecipe.push(...meals.slice(0, limits));
      }
    }
    console.log(ingredientFilter);
    if (ingredientFilter !== '') {
      fetchIngredients();
    }
  }, [ingredientFilter, newRecipe]);

  console.log(newRecipe);
  return (
    <div>
      <Header value={ pageTitle } />
      { redirect ? history.push(`/comidas/${getMealId}`) : (
        <MainRecipePage type="meals" recipesState={ newRecipe } />
      ) }
      <Footer />
    </div>
  );
}
