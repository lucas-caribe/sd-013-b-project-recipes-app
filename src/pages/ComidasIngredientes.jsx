import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchMealsIngredients } from '../services/fetchMeals';
import MealIngredientsCard from '../components/MealIngredientsCard';

function ComidasIngredientes() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetchMealsIngredients()
      .then((data) => {
        const maxIndex = 12;
        setIngredients(data.splice(0, maxIndex));
      });
  }, []);

  return (
    <div>
      <Header pageTitle="Explorar Ingredientes" haveHeader={ false } />
      <div>Explorar Ingredientes</div>
      { ingredients.length && <MealIngredientsCard ingredients={ ingredients } />}
      <Footer />
    </div>
  );
}

export default ComidasIngredientes;
