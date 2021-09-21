import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ value }) {
  const { pageName, setIcon } = value;
  const history = useHistory();
  const [showInput, setShowInput] = useState(false);

  function isVerified() {
    if (showInput === false) {
      return setShowInput(true);
    }
    return setShowInput(false);
  }

  function hiddenInput() {
    if (showInput) {
      return (
        <input type="text" data-testid="search-input" />
      );
    }
  }

  function handleButton() {
    if (setIcon) {
      return (
        <>
          <button
            type="button"
            onClick={ isVerified }
          >
            <img data-testid="search-top-btn" src={ searchIcon } alt="buscar" />
          </button>
          { hiddenInput() }
        </>
      );
    }
  }

  return (
    <header>
      <button
        type="button"
        onClick={ () => history.push('/perfil') }
      >
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="User"
        />
      </button>
      <h1 data-testid="page-title">{ pageName }</h1>
      { handleButton() }
    </header>
  );
}

Header.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Header;
