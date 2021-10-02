import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import contextCreate from './contextCreate';
import { fetchDrinkById, fetchFoodById } from '../services/fetchAPI';

// export default function DetailsProvider({ children }) {
function DetailsProvider({ children }) {
  const { pathname } = useLocation();
  const [foodOrDrink, receitaId] = pathname.split('/').slice(1);

  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function requestFood() {
      const food = await fetchFoodById(receitaId);
      setRecipeData(food);
      setLoading(false);
    }

    async function requestDrink() {
      const drink = await fetchDrinkById(receitaId);
      setRecipeData(drink);
      setLoading(false);
    }

    switch (foodOrDrink) {
    case 'comidas':
      requestFood();
      break;
    case 'bebidas':
      requestDrink();
      break;
    default:
      return (<p>Página invalida</p>);
    }
  }, [foodOrDrink, receitaId]);
  return (
    <contextCreate.Provider
      value={ {
        loading,
        recipeData,
        receitaId,
      } }
    >
      {children}
    </contextCreate.Provider>
  );
}

DetailsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
