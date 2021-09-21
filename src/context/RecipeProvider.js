import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipeContext';

export default function RecipesProvider({ children }) {
  const [email, setEmail] = useState('');

  const context = {
    email,
    setEmail,
  };

  return (
    <RecipesContext.Provider value={ context }>
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
