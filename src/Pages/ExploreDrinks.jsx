import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { randomDrinkIngredient } from '../services/drinksAPI';

export default function ExploreDrinks({ history }) {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    const getRandom = async () => {
      const randomResult = await randomDrinkIngredient();
      setRandom(randomResult);
    };
    getRandom();
  }, []);

  console.log(random[0]);

  return (
    <div>
      <Header title="Explorar Bebidas" />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => { history.push('/explorar/bebidas/ingredientes'); } }
      >
        Por Ingredientes
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => { history.push(`/bebidas/${random[0].idDrink}`); } }
      >
        Me Surpreenda!
      </button>
      <Footer />
    </div>
  );
}

ExploreDrinks.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
