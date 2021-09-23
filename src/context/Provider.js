import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [login, setLogin] = useState({
    user: '',
    password: '',
  });
  const [currentFoodFilter, setCurrentFoodFilter] = useState('');
  const [currentDrinkFilter, setCurrentDrinkFilter] = useState('');
  const [page, setPage] = useState('Comidas');

  const contextValue = {
    login,
    setLogin,
    currentFoodFilter,
    setCurrentFoodFilter,
    currentDrinkFilter,
    setCurrentDrinkFilter,
    page,
    setPage,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
