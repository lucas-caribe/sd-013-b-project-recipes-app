import React from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

export default function Provider({ children }) {
  return (
    <RecipesContext.Provider value={ {} }>
      { children }
    </RecipesContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;
