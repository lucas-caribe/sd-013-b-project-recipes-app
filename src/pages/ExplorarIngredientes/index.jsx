import React, { useEffect, useCallback } from 'react';
import { useParams, Redirect } from 'react-router-dom';

import { useRecipes } from '../../context';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function ExplorarIngredientes() {
  const { type } = useParams();
  const { ingredientsList, fecthIngredients } = useRecipes();

  useEffect(() => {
    fecthIngredients(type);
  }, [fecthIngredients, type]);

  const renderFoodPage = useCallback(() => ingredientsList
    .map(({ idIngredient, strIngredient }, index) => (
      <section
        className="ingredient-card"
        key={ idIngredient }
        data-testid={ `${index}-ingredient-card` }
      >
        <img
          data-testid={ `${index}-card-img` }
          src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
          alt=""
        />
        <p data-testid={ `${index}-card-name` }>{ strIngredient }</p>
      </section>
    )), [ingredientsList]);

  const renderDrinksPage = useCallback(() => ingredientsList
    .map(({ strIngredient1 }, index) => (
      <section
        className="ingredient-card"
        key={ strIngredient1 }
        data-testid={ `${index}-ingredient-card` }
      >
        <img
          data-testid={ `${index}-card-img` }
          src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
          alt=""
        />
        <p data-testid={ `${index}-card-name` }>{ strIngredient1 }</p>
      </section>
    )), [ingredientsList]);

  if (type !== 'comidas' && type !== 'bebidas') {
    return <Redirect to="/explorar" />;
  }

  return (
    <>
      <Header pageTitle="Explorar Ingredientes" showSearchIcon={ false } />
      <main>
        { (type === 'comidas') && renderFoodPage() }
        { (type === 'bebidas') && renderDrinksPage() }
      </main>
      <Footer />
    </>
  );
}

export default ExplorarIngredientes;
