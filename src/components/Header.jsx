import React from 'react';

function Header(route) {
  return (
    <header>
      <button
        type="button"
        data-testids="profile-top-btn"
      >
        <img src="../images/profileIcon.svg" alt="profile-icon" />
      </button>
      <h2 data-testids="page-title">{route}</h2>
      <button
        type="button"
        data-testids="search-top-btn"
      >
        <img src="../images/searchIcon.svg" alt="search-icon" />
      </button>
    </header>
  );
}

export default Header;
