import React from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

function ExplorarComidasOuBebidas() {
  const { type } = useParams();

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
        <Link to="/" data-testid="explore-by-ingredient">Por Ingredientes</Link>
        { type === 'comidas' && (
          <Link to="/" data-testid="explore-by-area">
            Por Local de Origem
          </Link>) }
        <Link to="/" data-testid="explore-surprise">Me Surpreenda!</Link>
      </main>
      <Footer />
    </main>
  );
}

export default ExplorarComidasOuBebidas;
