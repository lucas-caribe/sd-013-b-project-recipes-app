import React from 'react';
import { useHistory } from 'react-router';

import { useSearch } from '../../context';

import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

import './Header.css';

function Header() {
  const history = useHistory();
  const { toggleSearchBar } = useSearch();

  return (
    <header className="header">
      <button type="button" onClick={ () => history.push('/profile') }>
        <img src={ profileIcon } data-testid="profile-top-btn" alt="profile-icon" />
      </button>
      <h1 data-testid="page-title">Page title</h1>
      <button type="button" onClick={ toggleSearchBar }>
        <img src={ searchIcon } data-testid="search-top-btn" alt="search-icon" />
      </button>
    </header>
  );
}

export default Header;
