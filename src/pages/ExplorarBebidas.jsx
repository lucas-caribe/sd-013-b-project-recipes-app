import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import useCurrentPage from '../context/hooks/useCurrentPage';

function ExplorarBebidas() {
  useCurrentPage('Explorar Bebidas');

  const [drink, setDrink] = useState({});
  const history = useHistory();

  useEffect(() => {
    const fetchRandomDrink = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setDrink(data.drinks[0].idDrink);
    };
    fetchRandomDrink();
  }, []);

  function handleClick() {
    history.push(`/bebidas/${drink}`);
  }

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
        onClick={ handleClick }
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
