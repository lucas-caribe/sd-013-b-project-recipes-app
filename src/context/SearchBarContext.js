import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const SearchBarContext = createContext({
  isOpen: false, // Flag para indicar se a searchBar está visível ou não
  searchInfo: {
    term: '', // Valor do input de texto da searchBar
    option: '', // Valor do radio btn selecionado (Ingrediente, nome ou Primeira letra)
  },
});

// const toggleSearchBar = () => {

// }

export const SearchBarProvider = ({ children }) => (
  <SearchBarContext.Provider>
    { children }
  </SearchBarContext.Provider>
);

SearchBarProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export const useSearch = () => useContext(SearchBarContext);
