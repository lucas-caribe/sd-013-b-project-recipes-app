import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import contextCreate from './contextCreate';
import { fetchDrinkById, fetchFoodById } from '../services/fetchAPI';

export default function ContextProvider({ children }) {
  const [toggleSearch, setToggleSearch] = useState(true);
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
      break;
    }
  }, [foodOrDrink, receitaId]);
  function mapFood(slicingTwelve) {
    return slicingTwelve.map((card, index) => (
      <div className="card" key={ index }>
        <Link to={ `/comidas/${card.idMeal}` }>
          <p data-testid={ `${index}-recipe-card` }>{card.strMeal}</p>
          <img
            className="card-img"
            data-testid={ `${index}-card-img` }
            src={ card.strMealThumb }
            alt=""
          />
          <p data-testid={ `${index}-card-name` }>{card.strMeal}</p>
        </Link>
      </div>
    ));
  }

  function mapDrink(slicingTwelve) {
    return slicingTwelve.map((card, index) => (
      <div className="card" key={ index }>
        <Link to={ `/bebidas/${card.idDrink}` }>
          <p data-testid={ `${index}-recipe-card` }>{card.strDrink}</p>
          <img
            className="card-img"
            data-testid={ `${index}-card-img` }
            src={ card.strDrinkThumb }
            alt=""
          />
          <p data-testid={ `${index}-card-name` }>{card.strDrink}</p>
        </Link>
      </div>
    ));
  }

  return (
    <contextCreate.Provider
      value={ {
        mapDrink,
        mapFood,
        setToggleSearch,
        toggleSearch,
        recipeData,
        loading,
      } }
    >
      {children}
    </contextCreate.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
