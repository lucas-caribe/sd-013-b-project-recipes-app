import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { actionInputHeader } from '../redux/actions';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../css/Header.css';

function Header({ pageTitle, actionInpHeader, searchButton }) {
  const [toggleButtonSearch, setToggleButtonSearch] = useState(false);
  const [searchInput, setSearchInput] = useState();

  useEffect(() => {
    actionInpHeader(searchInput);
  }, [actionInpHeader, searchInput]);

  const history = useHistory();

  function renderButton() {
    return (
      <button
        type="button"
        onClick={ () => setToggleButtonSearch((prevState) => !prevState) }
        data-testid="search-top-btn"
        src={ searchIcon }
      >
        <img alt="icone-search" src={ searchIcon } />
      </button>
    );
  }

  return (
    <header className="app-header">
      <div className="header-Items-container">
        <button
          type="button"
          data-testid="profile-top-btn"
          src={ profileIcon }
          onClick={ () => history.push('/perfil') }
        >
          <img alt="icone-profile" src={ profileIcon } />
        </button>

        <h3 data-testid="page-title">{pageTitle}</h3>

        <div>
          {searchButton && renderButton()}
        </div>
      </div>

      {toggleButtonSearch && <input
        onChange={ ({ target }) => setSearchInput(target.value) }
        data-testid="search-input"
        type="text"
      />}
    </header>
  );
}

Header.defaultProps = {
  searchButton: true,
};

Header.propTypes = {
  actionInpHeader: PropTypes.func.isRequired,
  pageTitle: PropTypes.string.isRequired,
  searchButton: PropTypes.bool,
};

const mapDispatchToProps = (dispatch) => ({
  actionInpHeader: (input) => dispatch(actionInputHeader(input)),
});

export default connect(null, mapDispatchToProps)(Header);
