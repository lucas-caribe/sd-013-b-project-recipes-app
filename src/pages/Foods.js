import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import RecipeContext from '../context/RecipeContext';

export default function Food() {
  const pageTitle = {
    pageName: 'Comidas',
    setIcon: true,
  };

  const history = useHistory();
  const { recipesState, redirect } = useContext(RecipeContext);
  const getMealId = recipesState.map((meal) => meal.idMeal);

  return (
    <div>
      <Header value={ pageTitle } />
      { redirect ? history.push(`/comidas/${getMealId}`) : (
        <div>
          Foods
        </div>
      ) }
    </div>
  );
}
