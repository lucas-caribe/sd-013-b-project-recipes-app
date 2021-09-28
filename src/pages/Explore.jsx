import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Explore() {
  return (
    <div>
      <Header />
      <div>
        <Link to="/explorar/comidas">
          <button type="button" data-testid="explore-food">
            Explore Comidas
          </button>
        </Link>
      </div>
      <div>
        <Link to="/explorar/bebidas">
          <button type="button" data-testid="explore-drinks">
            Explore Bebidas
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
