import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import contextCreate from './contextCreate';
import { fetchDrinkById, fetchFoodById } from '../services/fetchAPI';

const URL_SEARCH_FOOD = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const URL_SEARCH_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const RECOMMENDED_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const RECOMMENDED_FOOD = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const SIX = 6;

export default function DetailsProvider({ children }) {
  const history = useHistory();
  const { pathname } = history.location;
  const [foodOrDrink, receitaId] = pathname.split('/').slice(1);

  const [recipeData, setRecipeData] = useState([]);
  // const [recommends, setRecommends] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [isRecipeDone, setIsRecipeDone] = useState(false);

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
      } }
    >
      {children}
    </contextCreate.Provider>
  );
}

DetailsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// const [recipeData, setRecipeData] = useState([]);
// const [recommends, setRecommends] = useState([]);
// const [loading, setLoading] = useState(true);
// const [isRecipeDone, setIsRecipeDone] = useState(false);

// useEffect(() => {
//   async function requestRecipe(URL_RECIPE) {
//     const results = await (await fetch(URL_RECIPE)).json();
//     Object.values(results).forEach((value) => {
//       setRecipeData(value);
//     });
//     setLoading(false);
//   }

//   async function requestRecommends(URL_RECOMMENDS) {
//     const results = await (await fetch(URL_RECOMMENDS)).json();
//     Object.values(results).forEach((value) => {
//       setRecommends(value.slice(0, SIX));
//     });
//   }

//   function findRecipeIntoStorage() {
//     if (localStorage.getItem('doneRecipe')) {
//       const allRecipeDone = JSON.parse(localStorage.getItem('doneRecipe'));
//       const finded = allRecipeDone.find((recipe) => recipe.id === receitaId);
//       if (finded) {
//         setIsRecipeDone(true);
//       }
//     }
//   }

//   findRecipeIntoStorage();
//   switch (foodOrDrink) {
//   case 'comidas':
//     requestRecipe(URL_SEARCH_FOOD + receitaId);
//     requestRecommends(RECOMMENDED_DRINKS);
//     break;
//   case 'bebidas':
//     requestRecipe(URL_SEARCH_DRINK + receitaId);
//     requestRecommends(RECOMMENDED_FOOD);
//     break;
//   default:
//     return (<p>Página invalida</p>);
//   }
// }, [foodOrDrink, receitaId]);
