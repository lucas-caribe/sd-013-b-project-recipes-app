import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import RecipeContext from '../context/RecipeContext';

export default function Drinks() {
  const pageTitle = {
    pageName: 'Bebidas',
    setIcon: true,
  };

  const history = useHistory();
  const { recipesState, redirect } = useContext(RecipeContext);
  const getDrinksId = recipesState.map((drink) => drink.idDrink);

  return (
    <div>
      <Header value={ pageTitle } />
      { redirect ? history.push(`/bebidas/${getDrinksId}`) : (
        <div>
          Drinks
        </div>
      ) }
    </div>
  );
}
