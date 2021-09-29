import React, {
  createContext,
  useContext,
  useState,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';

const mealsInitialState = {
  categories: [], // Lista de categorias recuperadas pela API
  list: [], // Lista de comidas recuperadas pela API
  inProgress: {}, // Objeto onde cada chave é o id da receita em andamento e o valor correspondente é o array com os ingredientes já marcados
};

const cocktailsInitialState = {
  categories: [], // Lista de categorias recuperadas pela API
  list: [], // Lista de comidas recuperadas pela API
  inProgress: {}, // Objeto onde cada chave é o id da receita em andamento e o valor correspondente é o array com os ingredientes já marcados
};

// finishedRecipes: Array com as receitas finalizadas
// favoriteRecipes: Array com as receitas favoritas

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [meals, setMeals] = useState(mealsInitialState);
  const [cocktails, setCocktails] = useState(cocktailsInitialState);
  const [finishedRecipes, setFinishedRecipes] = useState([]);
  const [ingredientsList, setIngredientsList] = useState([]);
  // const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const getRandomRecipe = useCallback(async (page) => {
    if (page === 'comidas') {
      const { meals: mealsApi } = await fetch('https://www.themealdb.com/api/json/v1/1/random.php').then((response) => response.json());
      return mealsApi[0].idMeal;
    }
    if (page === 'bebidas') {
      const { drinks } = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php').then((response) => response.json());
      return drinks[0].idDrink;
    }
  }, []);

  const fecthIngredients = useCallback(async (type) => {
    const MAX_INGREDIENTS = 12;

    if (type === 'comidas') {
      const { meals: ingredients } = await fetch(
        'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
      ).then((response) => response.json());
      const slice = ingredients.slice(0, MAX_INGREDIENTS);
      setIngredientsList(slice);
      return;
    }

    if (type === 'bebidas') {
      const { drinks: ingredients } = await fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
      ).then((response) => response.json());
      const slice = ingredients.slice(0, MAX_INGREDIENTS);
      setIngredientsList(slice);
      return;
    }

    setIngredientsList([]);
  }, []);

  const context = {
    getRandomRecipe,
    setFinishedRecipes,
    setMeals,
    setCocktails,
    fecthIngredients,
    ingredientsList,
    finishedRecipes,
    meals,
    cocktails,
  };

  return (
    <RecipesContext.Provider value={ context }>
      { children }
    </RecipesContext.Provider>
  );
};

RecipesProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export const useRecipes = () => useContext(RecipesContext);
