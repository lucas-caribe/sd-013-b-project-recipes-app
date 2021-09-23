import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function FoodExplorer() {
  const [randomMeal, setRandomMeal] = useState(0);

  useEffect(() => {
    const fetchRandomMeal = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((result) => result.json());
      return setRandomMeal(response.meals[0].idMeal);
    };
    fetchRandomMeal();
  }, []);

  const randomMealID = randomMeal;

  console.log(randomMealID);

  return (
    <div>
      <Header searchRender titlePage="Explorar Comidas" />
      <Link to="/explorar/comidas/ingredientes">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>
      </Link>
      <Link to="/explorar/comidas/area">
        <button type="button" data-testid="explore-by-area">Por Local de Origem</button>
      </Link>
      <Link to={ `/comidas/${randomMealID}` }>
        <button type="button" data-testid="explore-surprise">Me Surpreenda!</button>
      </Link>
      <Footer />
    </div>
  );
}
