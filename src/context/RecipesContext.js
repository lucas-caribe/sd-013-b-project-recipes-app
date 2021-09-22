import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const RecipesContext = createContext({
  meals: {
    categories: [], // Lista de categorias recuperadas pela API
    list: [], // Lista de comidas recuperadas pela API
    inProgress: {}, // Objeto onde cada chave é o id da receita em andamento e o valor correspondente é o array com os ingredientes já marcados
    favorites: [], // Lista de receitas favoritas
    finished: [], // Lista de receitas finalizadas
  },
  cocktails: {
    categories: [], // Lista de categorias recuperadas pela API
    list: [], // Lista de comidas recuperadas pela API
    inProgress: {}, // Objeto onde cada chave é o id da receita em andamento e o valor correspondente é o array com os ingredientes já marcados
    favorites: [], // Lista de receitas favoritas
    finished: [], // Lista de receitas finalizadas
  },
});

export const RecipesProvider = ({ children }) => (
  <RecipesContext.Provider>
    { children }
  </RecipesContext.Provider>
);

RecipesProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export const useRecipes = () => useContext(RecipesContext);
