import React from 'react';
import { Link} from 'react-router-dom';
import './Explore.css';

function ExploreDrink() {
  return (
    <nav className="button-explore">
      <Link to="/explorar/bebidas/ingredientes">
        <button data-testid="explore-by-ingredient">
          Por Ingredientes
        </button>
      </Link>

    <Link to="">
      <button data-testid="explore-surprise">
        Me Surpreenda!
      </button>
    </Link>
    </nav>
  );
}

export default ExploreDrink;