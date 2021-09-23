import React, { useCallback } from 'react';
import { useHistory, useParams, Redirect, Link } from 'react-router-dom';

import { useRecipes } from '../../context';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

function ExplorarComidasOuBebidas() {
  const { type } = useParams();
  const { push } = useHistory();
  const { getRandomRecipe } = useRecipes();

  const handleSurprise = useCallback(async () => {
    const recipeId = await getRandomRecipe(type);

    push(`/${type}/${recipeId}`);
  }, [getRandomRecipe, push, type]);

  if (type !== 'comidas' && type !== 'bebidas') {
    return <Redirect to="/explorar" />;
  }

  return (
    <main>
      <Header
        pageTitle={ `Explorar ${type[0].toUpperCase() + type.slice(1)}` }
        showSearchIcon={ false }
      />
      <main className="explore-type-container">
        <Link
          to={ `/explorar/${type}/ingredientes` }
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </Link>
        { type === 'comidas' && (
          <Link to={ `/explorar/${type}/area` } data-testid="explore-by-area">
            Por Local de Origem
          </Link>) }
        <button
          type="button"
          onClick={ handleSurprise }
          data-testid="explore-surprise"
        >
          Me Surpreenda!
        </button>
      </main>
      <Footer />
    </main>
  );
}

export default ExplorarComidasOuBebidas;
