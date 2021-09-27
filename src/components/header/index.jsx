import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import SearchBar from '../searchBar';

function Header(props) {
  const [TogleeInput, setTogleeInput] = useState(false);
  const [RecipeBarInput, setRecipeBarInput] = useState('');
  const history = useHistory();

  useEffect(() => {
    const { location: { pathname } } = history;
    if (pathname === '/comidas') { setRecipeBarInput('meal'); }
    if (pathname === '/bebidas') { setRecipeBarInput('cocktail'); }
  }, [history]);
  const { titlePage, hasSearchIcon } = props;
  const handleClick = () => { setTogleeInput((prevState) => !prevState); };
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
        {
          hasSearchIcon
        && (
          <button
            type="button"
            onClick={ handleClick }
          >
            <img
              src={ searchIcon }
              alt="searchIcon"
              data-testid="search-top-btn"
            />
          </button>
        )
        }
        {TogleeInput && <SearchBar recipe={ RecipeBarInput } />}
      </header>
    </div>
  );
}

Header.propTypes = {
  titlePage: PropTypes.string.isRequired,
  hasSearchIcon: PropTypes.bool,
};

Header.defaultProps = {
  hasSearchIcon: false,
};

export default Header;
