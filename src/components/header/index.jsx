import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

function Header(props) {
  const { titlePage, hasSearchIcon } = props;
  return (
    <div>
      <header>
        <h1 data-testid="page-title">{ titlePage }</h1>
        <Link to="/perfil">
          <img
            src={ profileIcon }
            alt="userIcon"
            data-testid="profile-top-btn"
          />
        </Link>
        {hasSearchIcon && <img
          src={ searchIcon }
          alt="searchIcon"
          data-testid="search-top-btn"
        />}
      </header>
    </div>
  );
}

Header.defaultProps = {
  hasSearchIcon: false,
};

Header.propTypes = {
  titlePage: PropTypes.string.isRequired,
  hasSearchIcon: PropTypes.bool,
};

export default Header;
