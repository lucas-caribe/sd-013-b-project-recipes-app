import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import fetchIngredientsList from '../services/fetchIngredientsList';

function ExplorarComidasIng() {
  const [ingredients, setIngredients] = useState([]);

  const fetchIngredients = async () => {
    setIngredients(await fetchIngredientsList());
  };

  useEffect(() => {
    fetchIngredients();
  }, []);

  return (
    <main className="main-content">
      <Header pageTitle="Explorar Ingredientes" searchButton={ false } />

      {ingredients.map(({ strIngredient }, index) => (
        <div key={ index } data-testid={ `${index}-ingredient-card` }>
          <img
            src={ `https://www.themealdb.com/images/ingredients/${strIngredient}.png` }
            alt="Ingredient Icone"
            data-testid={ `${index}-ingredient-img` }
          />
          <span data-testid={ `${index}-ingredient-name` }>{ strIngredient }</span>
        </div>
      ))}

      <Footer />
    </main>
  );
}

export default ExplorarComidasIng;
