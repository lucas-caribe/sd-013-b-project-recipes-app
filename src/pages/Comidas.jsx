import React, { useContext } from 'react';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import RecipeCard from '../components/RecipeCard';
import Footer from '../components/Footer';

function Comidas() {
  const { meals } = useContext(RecipesContext);

  const renderMeals = () => (
    meals.map(({ idMeal, strMeal, strMealThumb }, index) => (
      <div key={ strMeal }>
        <RecipeCard
          id={ idMeal }
          name={ strMeal }
          thumb={ strMealThumb }
          index={ index }
          recipeType="meal"
        />
      </div>
    ))
  );

  return (
    <div>
      <Header pageTitle="Comidas" haveHeader="active" />
      <div>comidas</div>
      { meals && renderMeals() }
      <Footer />
    </div>
  );
}

export default Comidas;
