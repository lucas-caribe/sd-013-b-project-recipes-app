import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon from './Icon';

const Header = (props) => {
  const { main, left, right, fright } = props;

  const renderIcon = (icon) => {
    if (icon === 'profile') {
      return (
        <Link to="/perfil">
          <Icon icon={ icon } testid={ `${icon}-top-btn` } />
        </Link>
      );
    } if (icon === 'search') {
      return (
        <button
          type="button"
          onClick={ () => {
            fright();
          } }
        >
          <Icon icon={ icon } testid="search-top-btn" />
        </button>
      );
    }
  };

  return (
    <div>
      <div className="header">

        {left !== 'none' ? renderIcon(left) : <div />}

        <h2 data-testid="page-title">{main}</h2>

        {right !== 'none' ? renderIcon(right) : <div />}

      </div>

    </div>
  );
};

Header.propTypes = {
  main: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
  fright: PropTypes.func.isRequired,
};

export default Header;
