import React, { useContext } from 'react';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import RecipeCard from '../components/RecipeCard';
import Footer from '../components/Footer';

function Bebidas() {
  const { drinks } = useContext(RecipesContext);

  const renderDrinks = () => (
    drinks.map(({ idDrink, strDrink, strDrinkThumb }, index) => (
      <div key={ strDrink }>
        <RecipeCard
          id={ idDrink }
          name={ strDrink }
          thumb={ strDrinkThumb }
          index={ index }
          recipeType="drink"
        />
      </div>
    ))
  );

  return (
    <div>
      <Header pageTitle="Bebidas" haveHeader="active" />
      <div>Bebidas</div>
      { drinks && renderDrinks() }
      <Footer />
    </div>
  );
}

export default Bebidas;
