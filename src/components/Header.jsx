import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ pageTitle, haveHeader }) {
  const [searchBarActive, setSearchBarActive] = useState(false);

  const searchBar = (
    <input data-testid="search-input" />
  );

  const searchTopBtn = () => {
    if (!haveHeader) return;

    return (
      <button
        type="button"
        onClick={ () => setSearchBarActive(!searchBarActive) }
      >
        <img
          data-testid="search-top-btn"
          src={ searchIcon }
          alt="botão para fazer buscas"
        />
      </button>
    );
  };

  return (
    <div>
      <Link to="/perfil">
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="botão para entrar na página de perfil"
        />
      </Link>
      <h1 data-testid="page-title">{ pageTitle }</h1>
      { searchTopBtn() }
      { searchBarActive ? searchBar : null}
    </div>
  );
}

export default Header;
