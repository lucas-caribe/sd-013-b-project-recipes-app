import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// import { AuthContext } from './AuthContext';

//   {
//     isOpen: false, // Flag para indicar se a searchBar está visível ou não
//     searchInfo: {
//     term: '', // Valor do input de texto da searchBar
//     option: '', // Valor do radio btn selecionado (Ingrediente, nome ou Primeira letra)
//     },
//   }

export const SearchBarContext = createContext();

export const SearchBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [term, setTerm] = useState('');
  const [option, setOption] = useState('');
  // const { page } = useContext(AuthContext);
  const page = 'comidas';

  const toggleSearchBar = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleSearch = (searchTerm, searchOption) => {
    setTerm(searchTerm);
    setOption(searchOption);
  };

  const fetchByOption = async (url, searchOption, searchTerm) => {
    switch (searchOption) {
    case 'ingredient': {
      const response = await fetch(`https://www.${url}.com/api/json/v1/1/filter.php?i=${searchTerm}`);
      const result = await response.json();
      return result;
    }
    case 'name': {
      const response = await fetch(`https://www.${url}.com/api/json/v1/1/filter.php?s=${searchTerm}`);
      const result = await response.json();
      return result;
    }
    case 'first-letter': {
      if (searchTerm.length > 1) {
        global.alert('Sua busca deve conter somente 1 (um) caracter');
        return null;
      } const response = await fetch(`https://www.${url}.com/api/json/v1/1/filter.php?f=${searchTerm}`);
      const result = await response.json();
      return result;
    }
    default:
      return null;
    }
  };

  useEffect(() => {
    switch (page) {
    case 'comidas': {
      const mealURL = 'themealdb';
      fetchByOption(mealURL, option, term);
      break;
    }
    case 'bebidas': {
      const cocktailURL = 'thecocktaildb';
      fetchByOption(cocktailURL, option, term);
      break;
    }
    default:
      break;
    }
  }, [term, option]);

  return (
    <SearchBarContext.Provider
      value={ { isOpen,
        toggleSearchBar,
        handleSearch,
      } }
    >
      { children }
    </SearchBarContext.Provider>
  );
};

SearchBarProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export const useSearch = () => useContext(SearchBarContext);
