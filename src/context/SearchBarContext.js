import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

export const SearchBarContext = createContext({
  isOpen: false, // Flag para indicar se a searchBar está visível ou não
  searchInfo: {
    term: '', // Valor do input de texto da searchBar
    option: '', // Valor do radio btn selecionado (Ingrediente, nome ou Primeira letra)
  },
});

export const SearchBarProvider = ({ children }) => (
  <SearchBarContext.Provider>
    { children }
  </SearchBarContext.Provider>
);

SearchBarProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export const useSearch = () => useContext(SearchBarContext);
