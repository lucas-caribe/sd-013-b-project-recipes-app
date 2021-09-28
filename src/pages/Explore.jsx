import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Explore() {
  return (
    <div>
      <Header />
      <div>
        <button type="button" data-testid="explore-food">
          <Link to="/explorar/comidas">
            Explore Comidas
          </Link>
        </button>
      </div>
      <div>
        <button type="button" data-testid="explore-drinks">
          <Link to="/explorar/bebidas">
            Explore Bebidas
          </Link>
        </button>
      </div>
      Footer aqui!!!
    </div>
  );
}
