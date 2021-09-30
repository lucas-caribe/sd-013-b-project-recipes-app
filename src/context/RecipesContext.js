import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
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

// favoriteRecipes = [{
//   id: id-da-receita,
//   type: comida-ou-bebida,
//   area: area-da-receita-ou-texto-vazio,
//   category: categoria-da-receita-ou-texto-vazio,
//   alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
//   name: nome-da-receita,
//   image: imagem-da-receita
// }]

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [meals, setMeals] = useState(mealsInitialState);
  const [cocktails, setCocktails] = useState(cocktailsInitialState);
  const [ingredientsList, setIngredientsList] = useState([]);
  const [finishedRecipes, setFinishedRecipes] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

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

  // Referência: https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const disfavorRecipe = (favRecipe, type) => {
    const property = capitalizeFirstLetter(type);
    setFavoriteRecipes((prevState) => [...prevState
      .filter((fav) => fav.id !== (favRecipe[`id${property}`] || favRecipe.id))]);
  };

  const handleFavorite = (type, recipe, colorAfter) => {
    switch (type) {
    case 'meal': {
      const favRecipe = {
        id: (recipe.idMeal || recipe.id),
        type: 'comida',
        area: (recipe.strArea || recipe.area),
        category: (recipe.strCategory || recipe.category),
        alcoholicOrNot: '',
        name: (recipe.strMeal || recipe.name),
        image: (recipe.strMealThumb || recipe.image),
      };
      if (favoriteRecipes.some((fav) => fav.id === (recipe.idMeal || recipe.id))) {
        disfavorRecipe(recipe, type);
      } else {
        setFavoriteRecipes((prevState) => [...prevState, favRecipe]);
      }
      document.querySelector('.favIcon').setAttribute('src', `${colorAfter}`);
      break;
    }
    case 'drink': {
      const favRecipe = {
        id: recipe.idDrink,
        type: 'bebida',
        area: '',
        category: recipe.strCategory,
        alcoholicOrNot: recipe.strAlcoholic,
        name: recipe.strDrink,
        image: recipe.strDrinkThumb,
      };
      if (favoriteRecipes.some((fav) => fav.id === (recipe.idDrink || recipe.id))) {
        console.log('entrou');
        disfavorRecipe(recipe, type);
      } else {
        setFavoriteRecipes((prevState) => [...prevState, favRecipe]);
      }
      document.querySelector('.favIcon').setAttribute('src', `${colorAfter}`);
      break;
    }
    default:
      break;
    }
  };

  useEffect(() => {
    const getFavFromLocalStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (getFavFromLocalStorage !== null) {
      setFavoriteRecipes([...getFavFromLocalStorage]);
    }
  }, []);

  useEffect(() => {
    if (favoriteRecipes.length === 0) {
      localStorage.setItem('favoriteRecipes', '[]');
    } else if (favoriteRecipes.some((fav) => fav.id)) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([...favoriteRecipes]));
    }
  }, [favoriteRecipes]);

  const context = {
    getRandomRecipe,
    setMealsList,
    setCocktailsList,
    setFinishedRecipes,
    fecthIngredients,
    handleFavorite,
    favoriteRecipes,
    finishedRecipes,
    ingredientsList,
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
