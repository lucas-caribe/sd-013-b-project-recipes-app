import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import RecipeContext from '../context/RecipeContext';
import Footer from '../components/Footer';
import MainRecipePage from '../components/MainRecipePage';

export default function Drinks() {
  const pageTitle = {
    pageName: 'Bebidas',
    setIcon: true,
  };

  const history = useHistory();
  const { recipesState, redirect } = useContext(RecipeContext);
  const getDrinksId = recipesState.map((drink) => drink.idDrink);
  const limits = 12;
  const newRecipe = [];
  if (recipesState.length > 0 && !redirect) {
    newRecipe.push(...recipesState.slice(0, limits));
  }

  return (
    <div>
      <Header value={ pageTitle } />
      { redirect ? history.push(`/bebidas/${getDrinksId}`) : (
        <MainRecipePage type="drinks" recipesState={ newRecipe } />
      ) }
      <Footer />
    </div>
  );
}
