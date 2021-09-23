import React from 'react';
import { Link } from 'react-router-dom';

function Explorar() {
  return (
    <div className="explore-buttons">
      <Link to="/explorar/comidas">
        <button
          type="button"
          data-testid="explore-food"
        >
          Explorar Comidas
        </button>
      </Link>
      <Link to="/explorar/bebidas">
        <button
          type="button"
          data-testid="explore-drinks"
        >
          Explorar Bebidas
        </button>
      </Link>
      <label htmlFor="a">
        <input type="checkbox" name="a" id="a" />
      </label>
    </div>
  );
}

export default Explorar;
