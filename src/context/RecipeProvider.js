import React from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipeContext';

export default function RecipesProvider({ children }) {
  return (
    <RecipesContext.Provider>
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
