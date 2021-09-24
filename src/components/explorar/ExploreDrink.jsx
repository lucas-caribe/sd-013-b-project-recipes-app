import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import fetchRandomDrinck from '../../services/fetchRandomDrinck';
import './Explore.css';

function ExploreDrink() {
  const history = useHistory();

  async function handleClick() {
    const response = await fetchRandomDrinck();
    const { idDrink } = response[0];
    history.push(`/bebidas/${idDrink}`);
  }
  return (
    <nav className="button-explore">
      <Link to="/explorar/bebidas/ingredientes">
        <button data-testid="explore-by-ingredient" type="button">
          Por Ingredientes
        </button>
      </Link>

      <button data-testid="explore-surprise" onClick={ handleClick } type="button">
        Me Surpreenda!
      </button>

    </nav>
  );
}

export default ExploreDrink;
