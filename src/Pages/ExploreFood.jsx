import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { randomIngredient } from '../services/foodAPI';

export default function ExploreFood({ history }) {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    const getRandom = async () => {
      const randomResult = await randomIngredient();
      setRandom(randomResult);
    };
    getRandom();
  }, []);

  console.log(random[0]);

  return (
    <div>
      <Header title="Explorar Comidas" />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => { history.push('/explorar/comidas/ingredientes'); } }
      >
        Por Ingredientes
      </button>
      <button
        type="button"
        data-testid="explore-by-area"
        onClick={ () => { history.push('/explorar/comidas/area'); } }
      >
        Por Local de Origem
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => { history.push(`/comidas/${random[0].idMeal}`); } }
      >
        Me Surpreenda!
      </button>
      <Footer />
    </div>
  );
}

ExploreFood.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
