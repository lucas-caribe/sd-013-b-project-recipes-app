import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { useAuth, useRecipes } from '../../context';

function Comidas() {
  const { handleMainPage } = useAuth();
  const { location: { pathname } } = useHistory();

  const { context: { meals: { list } } } = useRecipes();

  useEffect(() => {
    handleMainPage(pathname);
  }, [handleMainPage, pathname]);

  if (list.length === 0) {
    return (
      <main>
        <Header pageTitle="Comidas" showSearchIcon />
        <Footer />
      </main>
    );
  }
  const MAX_CARDS = 12;
  return (
    <main>
      <Header pageTitle="Comidas" showSearchIcon />
      {list.map((recipe, index) => {
        if (index < MAX_CARDS) {
          return (
            <div data-testid={ `${index}-recipe-card` } key={ recipe.idMeal }>
              <img
                data-testid={ `${index}-card-img` }
                src={ recipe.strMealThumb }
                alt={ recipe.strMeal }
              />
              <p data-testid={ `${index}-card-name` }>{recipe.strMeal}</p>
            </div>
          );
        } return null;
      })}
      <Footer />
    </main>
  );
}

export default Comidas;
