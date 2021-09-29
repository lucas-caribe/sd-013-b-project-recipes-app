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

  // useEffect(() => {
  //   if (hasTermAndOption === false) {
  //     console.log('entrou');
  //     const fetchDrinks = async () => {
  //       const LIST_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  //       const responseList = await fetch(LIST_URL);
  //       const dataList = await responseList.json();
  //       const drinksList = await dataList.drinks;

  //       const CATEGORIES_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  //       const responseCategories = await fetch(CATEGORIES_URL);
  //       const dataCategories = await responseCategories.json();
  //       const drinksCategories = await dataCategories.drinks;

  //       setCocktails({
  //         ...cocktails,
  //         list: drinksList,
  //         categories: drinksCategories,
  //       });
  //     };
  //     fetchDrinks();
  //   }
  //   return undefined;
  // }, []);

  // useEffect(() => {
  //   if (hasTermAndOption === false) {
  //     console.log('entrou');
  //     const fetchMeals = async () => {
  //       const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  //       const responseList = await fetch(API_URL);
  //       const dataList = await responseList.json();
  //       const mealsList = await dataList.meals;

  //       const URL_MEALS_CATEGORIES = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  //       const responseCategories = await fetch(URL_MEALS_CATEGORIES);
  //       const dataCategories = await responseCategories.json();
  //       const mealsCategories = await dataCategories.meals;

  //       setMeals({
  //         ...meals,
  //         list: mealsList,
  //         categories: mealsCategories,
  //       });
  //     };
  //     fetchMeals();
  //   }
  //   return undefined;
  // }, []);

  const context = {
    getRandomRecipe,
    setFinishedRecipes,
    setMeals,
    setCocktails,
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
