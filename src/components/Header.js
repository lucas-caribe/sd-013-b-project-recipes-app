import React, { useState } from 'react';
import { useHistory } from 'react-router';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header() {
  const [displaySearchBar, setDisplaySearchBar] = useState(false);
  const history = useHistory();
  const title = history.location.pathname.slice(1)[0].toUpperCase()
  + history.location.pathname.slice(2);

  function handleProfile() {
    history.push('/perfil');
  }

  return (
    <div className="header">
      <div
        onKeyPress={ () => console.log('1') }
        onClick={ handleProfile }
        role="button"
        tabIndex="-1"
      >
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profile icon"
        />
      </div>
      <h2
        data-testid="page-title"
      >
        { title }

      </h2>
      <div
        onKeyPress={ () => console.log('1') }
        onClick={ () => setDisplaySearchBar(!displaySearchBar) }
        role="button"
        tabIndex="-2"
      >
        <img
          data-testid="search-top-btn"
          src={ searchIcon }
          alt="searche icon"
        />
      </div>
      {displaySearchBar && <SearchBar />}
    </div>

  );
}

export default Header;
