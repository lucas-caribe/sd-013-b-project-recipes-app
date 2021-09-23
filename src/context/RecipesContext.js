import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

// {
//   meals: {
//     categories: [], // Lista de categorias recuperadas pela API
//     list: [], // Lista de comidas recuperadas pela API
//     inProgress: {}, // Objeto onde cada chave é o id da receita em andamento e o valor correspondente é o array com os ingredientes já marcados
//     favorites: [], // Lista de receitas favoritas
//     finished: [], // Lista de receitas finalizadas
//   },
//   cocktails: {
//     categories: [], // Lista de categorias recuperadas pela API
//     list: [], // Lista de comidas recuperadas pela API
//     inProgress: {}, // Objeto onde cada chave é o id da receita em andamento e o valor correspondente é o array com os ingredientes já marcados
//     favorites: [], // Lista de receitas favoritas
//     finished: [], // Lista de receitas finalizadas
//   },
// }

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [list, setList] = useState([]);

  const getRecipesList = (recipesList) => {
    setList(recipesList);
  };

  return (
    <RecipesContext.Provider value={ { getRecipesList, list } }>
      { children }
    </RecipesContext.Provider>
  );
};

RecipesProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export const useRecipes = () => useContext(RecipesContext);
