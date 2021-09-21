import React from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ value }) {
  const { pageName, setIcon } = value;

  function handleButton() {
    if (setIcon) {
      return (
        <button
          type="button"
        >
          <img data-testid="search-top-btn" src={ searchIcon } alt="buscar" />
        </button>
      );
    }
  }

  return (
    <header>
      <button
        type="button"
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
