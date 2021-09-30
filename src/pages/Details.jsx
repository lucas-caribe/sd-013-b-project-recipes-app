import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './details.css';
// import Meals from '../components/Details/Meals';
// import Drinks from './Drinks';

const URL_SEARCH_FOOD = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const URL_SEARCH_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const RECOMMENDED_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const RECOMMENDED_FOOD = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const SIX = 6;
export default function Details({ match }) {
  const [foodOrDrink, receitaId] = match.url.split('/').slice(1);

  const [recipeData, setRecipeData] = useState([]);
  const [recommends, setRecommends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isRecipeDone, setIsRecipeDone] = useState(false);

  useEffect(() => {
    async function requestRecipe(URL_RECIPE) {
      const results = await (await fetch(URL_RECIPE)).json();
      Object.values(results).forEach((value) => {
        setRecipeData(value);
      });
      setLoading(false);
    }

    async function requestRecommends(URL_RECOMMENDS) {
      const results = await (await fetch(URL_RECOMMENDS)).json();
      Object.values(results).forEach((value) => {
        setRecommends(value.slice(0, SIX));
      });
    }

    function findRecipeIntoStorage() {
      if (localStorage.getItem('doneRecipe')) {
        const allRecipeDone = JSON.parse(localStorage.getItem('doneRecipe'));
        const finded = allRecipeDone.find((recipe) => recipe.id === receitaId);
        if (finded) {
          setIsRecipeDone(true);
        }
      }
    }

    findRecipeIntoStorage();
    switch (foodOrDrink) {
    case 'comidas':
      requestRecipe(URL_SEARCH_FOOD + receitaId);
      requestRecommends(RECOMMENDED_DRINKS);
      break;
    case 'bebidas':
      requestRecipe(URL_SEARCH_DRINK + receitaId);
      requestRecommends(RECOMMENDED_FOOD);
      break;
    default:
      return (<p>Página invalida</p>);
    }
  }, [foodOrDrink, receitaId]);

  if (loading) {
    return (<p>Carregando</p>);
  }

  switch (foodOrDrink) {
  case 'comidas':
    // return <Meals receitaId={receitaId} recipeData={recipeData} recommends={recommends} isRecipeDone={isRecipeDone} />;
    return (<p> comidas </p>);
  case 'bebidas':
    console.log(recipeData);
    return (<p> bebidas </p>);
    // return <Drinks receitaId={receitaId} recipeData={recipeData} recommends={recommends} isRecipeDone={isRecipeDone} />;
  default:
    return (<p>Página invalida</p>);
  }
}

Details.propTypes = {
  match: PropTypes.object,
}.isRequired;
