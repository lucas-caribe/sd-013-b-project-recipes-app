import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import RecipeCard from '../components/RecipeCard';
import Footer from '../components/Footer';
import { fetchInitialMeals, fetchMealsByIngredients } from '../services/fetchMeals';
import FilteringMealsButtons from '../components/FilteringMealsButtons';

function Comidas() {
  const { meals, setMeals, currentIngredient } = useContext(RecipesContext);

  useEffect(() => {
    if (currentIngredient) {
      const ingredient = currentIngredient.replace(/\s/g, '_').toLowerCase();
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${'chicken'}`)
        .then((response) => response.json())
        .then((data) => setMeals(data.meals));
      console.log('INGREDIENT');
      return;
    }

    if (!currentIngredient) {
      console.log('INITIAL FETCH');
      fetchInitialMeals()
        .then((data) => setMeals([...data]));
    }
  }, [setMeals, currentIngredient]);

  // let teste = meals;
  // if (mealsByIngredients.length) teste = mealsByIngredients;

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
      <FilteringMealsButtons />
    </div>
  );
}

export default Comidas;
