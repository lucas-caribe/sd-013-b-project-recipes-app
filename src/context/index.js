import React from 'react';
import PropTypes from 'prop-types';

import { AuthProvider } from './AuthContext';
import { SearchBarProvider } from './SearchBarContext';
import { RecipesProvider } from './RecipesContext';
import { DetailsProvider } from './DetailsContext';

const Provider = ({ children }) => (
  <AuthProvider>
    <SearchBarProvider>
      <RecipesProvider>
        <DetailsProvider>
          { children }
        </DetailsProvider>
      </RecipesProvider>
    </SearchBarProvider>
  </AuthProvider>
);

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Provider;

export { useAuth } from './AuthContext';
export { useSearch } from './SearchBarContext';
export { useRecipes } from './RecipesContext';
export { useDetails } from './DetailsContext';
