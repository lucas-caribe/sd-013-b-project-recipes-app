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
        <Link to="/" data-testid="explore-by-ingredient" />
        { type === 'comidas' && <Link to="/" data-testid="explore-by-area" /> }
        <Link to="/" data-testid="explore-surprise" />
      </main>
      <Footer />
    </main>
  );
}

export default ExplorarComidasOuBebidas;
