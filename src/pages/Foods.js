import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import RecipeContext from '../context/RecipeContext';
import Footer from '../components/Footer';
import MainRecipePage from '../components/MainRecipePage';

export default function Food() {
  const pageTitle = {
    pageName: 'Comidas',
    setIcon: true,
  };

  const history = useHistory();
  const { recipesState, redirect } = useContext(RecipeContext);
  const getMealId = recipesState.map((meal) => meal.idMeal);
  const limits = 12;
  const newRecipe = [];
  if (recipesState.length > 0 && !redirect) {
    newRecipe.push(...recipesState.slice(0, limits));
  }

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
