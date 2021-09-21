import React from 'react';

function Header() {
  return (
    <div>
      <header>
        <h1 data-testid="page-title">Comidas</h1>
        <button data-testid="profile-top-btn">
          <img src="src/images/profileIcon.svg" alt="userIcon" />
        </button>
        <button data-testid="search-top-btn">
          <img src="src/images/searchIcon.svg" alt="searchIcon" />
        </button>
      </header>
    </div>
  );
}

export default Header;
