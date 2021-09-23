import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { useAuth, useRecipes } from '../../context';

function Bebidas() {
  const { handleMainPage } = useAuth();
  const { location: { pathname } } = useHistory();

  const { cocktails: { list } } = useRecipes();

  useEffect(() => {
    handleMainPage(pathname);
  }, [handleMainPage, pathname]);

  if (list.length === 0) {
    return (
      <main>
        <Header pageTitle="Bebidas" showSearchIcon />
        <Footer />
      </main>
    );
  }
  const MAX_CARDS = 12;
  return (
    <main>
      <Header pageTitle="Bebidas" showSearchIcon />
      {list.map((recipe, index) => {
        if (index < MAX_CARDS) {
          return (
            <div data-testid={ `${index}-recipe-card` } key={ recipe.idDrink }>
              <img
                data-testid={ `${index}-card-img` }
                src={ recipe.strDrinkThumb }
                alt={ recipe.strDrink }
              />
              <p data-testid={ `${index}-card-name` }>{recipe.strDrink}</p>
            </div>
          );
        } return null;
      })}
      <Footer />
    </main>
  );
}

export default Bebidas;
