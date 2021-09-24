import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '../mini-components/IconButton';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import Context from '../context/Context';

function Header() {
  const { titleName,
    setShowSearchBar,
    showSearchBar,
    showSearchHeaderIcon } = useContext(Context);

  function handleSearchClick() {
    return showSearchBar ? setShowSearchBar(false) : setShowSearchBar(true);
  }

  return (
    <header>
      <Link to="/perfil">
        <IconButton
          btnImage={ profileIcon }
          dataTest="profile-top-btn"
          type="button"
        />
      </Link>
      <h1 data-testid="page-title">{ titleName }</h1>
      {showSearchHeaderIcon ? <IconButton
        btnImage={ searchIcon }
        dataTest="search-top-btn"
        type="button"
        btnFunction={ handleSearchClick }
      /> : null}
    </header>
  );
}

export default Header;
