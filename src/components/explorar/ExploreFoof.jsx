import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import fetchRandomFood from '../../services/fetchRandomFood';
import './Explore.css';

function ExploreFood() {
  const history = useHistory();

  async function handleClick() {
    const response = await fetchRandomFood();
    const { idMeal } = response[0];
    history.push(`/comidas/${idMeal}`);
  }
  return (
    <nav className="button-explore">
      <Link to="/explorar/comidas/ingredientes">
        <button data-testid="explore-by-ingredient" type="button">
          Por Ingredientes
        </button>
      </Link>

      <Link to="/explorar/comidas/area">
        <button data-testid="explore-by-area" type="button">
          Por Local de Origem
        </button>
      </Link>

      <button data-testid="explore-surprise" onClick={ handleClick } type="button">
        Me Surpreenda!
      </button>
    </nav>
  );
}

export default ExploreFood;
