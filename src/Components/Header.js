import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon from './Icon';

const Header = (props) => {
  const [showSearch, toggleSearch] = useState(false);
  const { main, left, right } = props;
  const searchClick = () => {
    toggleSearch(!showSearch);
  };

  const renderIcon = (icon) => {
    if (icon === 'profile') {
      return (
        <Link to="/perfil">
          <Icon icon={ icon } testid={ `${icon}-top-btn` } />
        </Link>
      );
    } if (icon === 'search') {
      return (
        <button type="button" onClick={ searchClick }>
          <Icon icon={ icon } testid={ `${icon}-top-btn` } />
        </button>
      );
    }
  };

  const renderSearchBar = () => <input type="test" data-testid="search-input" />;

  return (
    <div>
      <div className="header">

        {left !== 'none' ? renderIcon(left) : <div />}

        <h2 data-testid="page-title">{main}</h2>

        {right !== 'none' ? renderIcon(right) : <div />}

      </div>

      {showSearch ? renderSearchBar() : null}

    </div>
  );
};

Header.propTypes = {
  main: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
};

export default Header;
