import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import useCurrentPage from '../context/hooks/useCurrentPage';

function ExplorarComidas() {
  useCurrentPage('Explorar Comidas');
  const [food, setFood] = useState({});
  const history = useHistory();

  useEffect(() => {
    const fetchRandomFood = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setFood(data.meals[0].idMeal);
    };
    fetchRandomFood();
  }, []);

  const handleClick = () => {
    history.push(`/comidas/${food}`);
  };

  return (
    <div>
      <Link to="/explorar/comidas/ingredientes">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>
      </Link>
      <Link to="/explorar/comidas/area">
        <button
          type="button"
          data-testid="explore-by-area"
        >
          Por Local de Origem
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

export default ExplorarComidas;
