import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [data, setdata] = useState({
    recipes: [],
    isLoading: false,
  });

  const setSearchRecipes = (search) => {
    setdata((prevState) => ({ ...prevState, recipes: search, isLoading: true }));
  };

  const [selected, setSelected] = useState({
    searchText: '',
    searchRadio: '',
  });

  const handleChangeSearch = ({ target: { name, value } }) => {
    setSelected((prevState) => ({ ...prevState, [name]: value }));
  };

  const [recipesMade, setRecipesMade] = useState({
    meals: [], // colocar os ids
    drinks: [],
  });

  const [recipesInProgress, setRecipesInProgress] = useState({
    meals: [], // colocar os ids
    drinks: [],
  });

  const [ingredientsInProgress, setIngredientsInProgress] = useState({
    meals: [], // colocar os ingredientes
    drinks: [],
  });

  function handleRecipesInProgress(idFood, idDrink) {
    const foodsinProgress = [...recipesInProgress.meals, idFood];
    const drinksinProgress = [...recipesInProgress.drinks, idDrink];
    const newRecipesInProgress = {
      foods: idFood ? foodsinProgress : recipesInProgress.meals,
      drinks: drinksinProgress,
    };
    setRecipesInProgress(newRecipesInProgress);
  }

  function handleIngredientsInProgress(foodIngredients, drinkIngredients) {
    const foodsinProgress = foodIngredients;
    const drinksinProgress = drinkIngredients;
    const newRecipesInProgress = {
      foods: foodIngredients ? foodsinProgress : recipesInProgress.meals,
      drinks: drinksinProgress,
    };
    setIngredientsInProgress(newRecipesInProgress);
  }

  const contextValue = {
    data,
    selected,
    setSearchRecipes,
    handleChangeSearch,
    recipesMade,
    setRecipesMade,
    recipesInProgress,
    handleRecipesInProgress,
    ingredientsInProgress,
    handleIngredientsInProgress,
  };

  return (
    <RecipesContext.Provider value={ contextValue }>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
