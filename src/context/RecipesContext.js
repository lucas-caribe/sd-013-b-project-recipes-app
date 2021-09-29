import React, { createContext,
  useContext,
  useState,
  useCallback,
  useEffect }
  from 'react';
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

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [meals, setMeals] = useState(mealsInitialState);
  const [cocktails, setCocktails] = useState(cocktailsInitialState);
  const [finishedRecipes, setFinishedRecipes] = useState([]);
  // const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  useEffect(() => {
    const finishedRecipesFromLocal = JSON.parse(localStorage.getItem('finished recipes'));
    if (finishedRecipesFromLocal) {
      setFinishedRecipes(finishedRecipesFromLocal);
    }
  }, []);

  const setMealsList = (mealsList) => {
    setMeals({
      ...meals,
      list: mealsList,
    });
  };

  const setCocktailsList = (cocktailsList) => {
    setCocktails({
      ...cocktails,
      list: cocktailsList,
    });
  };

  const addTypeWhenFinishRecipe = (type, recipe) => {
    setFinishedRecipes((prevState) => [...prevState, { type, ...recipe }]);
    localStorage.setItem('finished recipes',
      JSON.stringify([...finishedRecipes, recipe]));
  };

  const getRandomRecipe = useCallback(async (page) => {
    if (page === 'comidas') {
      const { meals: mealsApi } = await fetch(
        'https://www.themealdb.com/api/json/v1/1/random.php',
      ).then((response) => response.json());
      return mealsApi[0].idMeal;
    }
    if (page === 'bebidas') {
      const { drinks } = await fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/random.php',
      ).then((response) => response.json());
      return drinks[0].idDrink;
    }
  }, []);

  const context = {
    getRandomRecipe,
    setMealsList,
    setCocktailsList,
    setFinishedRecipes,
    finishedRecipes,
    meals,
    cocktails,
    addTypeWhenFinishRecipe,
  };

  return <RecipesContext.Provider value={ context }>{children}</RecipesContext.Provider>;
};

RecipesProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export const useRecipes = () => useContext(RecipesContext);
