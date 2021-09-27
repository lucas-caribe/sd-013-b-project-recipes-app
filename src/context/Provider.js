import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [statusLoginBtn, setStatusLoginBtn] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [currentPage, setCurrentPage] = useState('');
  const [login, setLogin] = useState('');
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [allRecipes, setAllRecipes] = useState([]);
  const [categories, setCategories] = useState([]);

  const contextValue = {
    statusLoginBtn,
    setStatusLoginBtn,
    emailIsValid,
    setEmailIsValid,
    passwordIsValid,
    setPasswordIsValid,
    currentPage,
    setCurrentPage,
    login,
    setLogin,
    showSearchBar,
    setShowSearchBar,
    allRecipes,
    setAllRecipes,
    categories,
    setCategories,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
