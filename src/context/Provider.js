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

  const [inputText, setInputText] = useState('');
  const [inputRadio, setInputRadio] = useState('');
  const [apiRadio, setApiRadio] = useState({});

  const contextValue = {
    statusLoginBtn,
    setStatusLoginBtn,
    emailIsValid,
    setEmailIsValid,
    passwordIsValid,
    setPasswordIsValid,
    inputText,
    setInputText,
    inputRadio,
    setInputRadio,
    apiRadio,
    setApiRadio,
    currentPage,
    setCurrentPage,
    login,
    setLogin,
    showSearchBar,
    setShowSearchBar,
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
