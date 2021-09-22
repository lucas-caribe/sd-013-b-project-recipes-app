import React, { useContext } from 'react';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import RecipeCard from '../components/RecipeCard';

function Comidas() {
  const { meals } = useContext(RecipesContext);

  const renderMeals = () => (
    meals.map(({ strMeal, strMealThumb }, index) => (
      <div key={ strMeal }>
        <RecipeCard
          name={ strMeal }
          thumb={ strMealThumb }
          index={ index }
        />
      </div>
    ))
  );

  return (
    <div>
      <Header pageTitle="Comidas" haveHeader="active" />
      <div>comidas</div>
      { meals && renderMeals() }
    </div>
  );
}

export default Comidas;
