import React, { createContext, useContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

// item: {
//   // Todas as chaves da API.
//   isFavorite: false, // Indica se a receita foi favoritada ou não
//   status: '', // Indica o status da receita  (não iniciada, em andamento, finalizada)
// },
// recommendations: [], // Lista de receitas recomendadas
// }

const itemInitialState = {
  isFavorite: false,
  status: 'não iniciada',
};

export const DetailsContext = createContext();

export const DetailsProvider = ({ children }) => {
  const [item, setItem] = useState(itemInitialState);
  const [ingredients, setIngredients] = useState(['xablau']);
  const [recommendations, setRecommendations] = useState([]);

  const ID = 9;

  const organizeIngredients = (recipe) => {
    const recipeInfo = recipe[0];
    const ingredientsAux = [];
    const MAX_INGREDIENTS = 21;
    for (let i = 1; i < MAX_INGREDIENTS; i += 1) {
      if (recipeInfo[`strIngredient${i}`] !== null
      && recipeInfo[`strIngredient${i}`] !== undefined
      && recipeInfo[`strIngredient${i}`] !== '') {
        ingredientsAux
          .push(`${recipeInfo[`strIngredient${i}`]} - ${recipeInfo[`strMeasure${i}`]}`);
      }
    }
    const finalIngredients = ingredientsAux
      .filter((ingredient) => ingredient.length !== 0);
    setIngredients(finalIngredients);
  };

  const fetchRecipe = useCallback(async (pathname) => {
    if (pathname.includes('comidas')) {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${pathname.slice(ID)}`);
      const { meals: meal } = await response.json();
      organizeIngredients(meal);
      setItem({
        ...item,
        meal,
      });
    } else {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${pathname.slice(ID)}`);
      const { drinks: drink } = await response.json();
      organizeIngredients(drink);
      setItem({
        ...item,
        drink,
      });
    }
  }, [item]);

  const fetchRecommendations = useCallback(async (pathname) => {
    if (pathname.includes('comidas')) {
      const result = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const { drinks } = await result.json();
      setRecommendations(drinks);
    } else {
      const result = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const { meals } = await result.json();
      setRecommendations(meals);
    }
  }, []);

  const context = {
    item,
    ingredients,
    recommendations,
    fetchRecipe,
    fetchRecommendations,
  };

  return (
    <DetailsContext.Provider value={ context }>
      { children }
    </DetailsContext.Provider>
  );
};

DetailsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export const useDetails = () => useContext(DetailsContext);
