import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import useCurrentPage from '../context/hooks/useCurrentPage';

function ExplorarBebidas() {
  useCurrentPage('Explorar Bebidas');
  return (
    <div>
      <Link to="/explorar/bebidas/ingredientes">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>
      </Link>
      <button
        type="button"
        data-testid="explore-surprise"
      >
        Me Surpreenda!
      </button>
      <div className="page">
        <Footer />
      </div>
    </div>
  );
}

export default ExplorarBebidas;
