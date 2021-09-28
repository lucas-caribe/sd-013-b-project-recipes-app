import React, {
  createContext,
  useContext,
  useState,
  useEffect,
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

const URL_DRINKS_CATEGORIES = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

const URL_MEALS_CATEGORIES = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [meals, setMeals] = useState(mealsInitialState);
  const [cocktails, setCocktails] = useState(cocktailsInitialState);
  const [finishedRecipes, setFinishedRecipes] = useState([]);
  // const [favoriteRecipes, setFavoriteRecipes] = useState([]);

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

  const setCocktailsCategorie = (cocktailsCategorie) => {
    setCocktails({
      ...cocktails,
      categories: cocktailsCategorie,
    });
  };

  useEffect(() => {
    const fetchDrinks = async () => {
      const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      const responseList = await fetch(API_URL);
      const dataList = await responseList.json();
      const drinksList = await dataList.drinks;
      const responseCategories = await fetch(URL_DRINKS_CATEGORIES);
      const dataCategories = await responseCategories.json();
      const drinksCategories = await dataCategories.drinks;
      setCocktails({
        ...cocktails,
        list: drinksList,
        categories: drinksCategories,
      });
    };
    fetchDrinks();
  }, []);

  useEffect(() => {
    async function fetchMeals() {
      const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const responseList = await fetch(API_URL);
      const dataList = await responseList.json();
      const mealsList = await dataList.meals;
      const responseCategories = await fetch(URL_MEALS_CATEGORIES);
      const dataCategories = await responseCategories.json();
      const mealsCategories = await dataCategories.meals;
      setMeals({
        ...meals,
        list: mealsList,
        categories: mealsCategories,
      });
    }
    fetchMeals();
  });

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

  const context = {
    getRandomRecipe,
    setMealsList,
    setCocktailsList,
    setCocktailsCategorie,
    setFinishedRecipes,
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
