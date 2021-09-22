import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

//   {
//     isOpen: false, // Flag para indicar se a searchBar está visível ou não
//     searchInfo: {
//     term: '', // Valor do input de texto da searchBar
//     option: '', // Valor do radio btn selecionado (Ingrediente, nome ou Primeira letra)
//     },
//   }

const SearchBarContext = createContext();

export const SearchBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearchBar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <SearchBarContext.Provider value={ { isOpen, toggleSearchBar } }>
      { children }
    </SearchBarContext.Provider>
  );
};

SearchBarProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export const useSearch = () => useContext(SearchBarContext);
