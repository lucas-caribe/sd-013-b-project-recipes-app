import React from 'react';
import { Link} from 'react-router-dom';
import './Explore.css';

function Explore() {
   
  return (
    <nav className="button-explore">
      <Link to='/explorar/comidas' >
        <button data-testid="explore-food">
          Explorar Comidas
        </button>
      </Link>

      <Link to='/explorar/bebidas' >
        <button data-testid="explore-drinks">
          Explorar Bebidas
        </button>
      </Link>
    </nav>
  );
}

export default Explore;