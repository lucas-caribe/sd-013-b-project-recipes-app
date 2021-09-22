import PropTypes from 'prop-types';
import React from 'react';
// import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ setTitle }) {
  return (
    <header>
      <nav>
        {/* <Link to="/perfil" data-testid="profile-top-btn">
          <img src={ profileIcon } alt="perfil" />
        </Link> */}
        <input type="image" data-testid="profile-top-btn" src={ profileIcon } alt="perfil" />
        <h1 data-testid="page-title">{ setTitle }</h1>

        <input type="image" data-testid="search-top-btn" src={ searchIcon } alt="pesquisar" />
        {/* <button type="button" data-testid="search-top-btn">
          <img src={ searchIcon } alt="pesquisar" />
        </button> */}
      </nav>
    </header>
  );
}

Header.propTypes = {
  setTitle: PropTypes.string.isRequired,
};

export default Header;
