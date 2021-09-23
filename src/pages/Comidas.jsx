import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import RecipeCard from '../components/RecipeCard';
import Footer from '../components/Footer';
import { fetchInitialMeals } from '../services/fetchMeals';

function Comidas() {
  const { meals, setMeals } = useContext(RecipesContext);

  useEffect(() => {
    fetchInitialMeals()
      .then((data) => setMeals([...data]));
  }, [setMeals]);

  // useEffect(() => {
  //   const request = async () => {
  //     const response = await fetchInitialMeals();
  //     return response;
  //   };
  //   request().then((response) => setMeals([...response]));
  // }, [setMeals]);

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
      <Footer />
    </div>
  );
}

export default Comidas;
