import React from 'react';
import IconButton from './IconButton';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  return (
    <div>
      <IconButton
        btnImage={ profileIcon }
        dataTest="profile-top-btn"
        type="button"
      />
      <h1 data-testid="page-title">Page Title</h1>
      <IconButton
        btnImage={ searchIcon }
        dataTest="search-top-btn"
        type="button"
      />
    </div>
  );
}

export default Header;
