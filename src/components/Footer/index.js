import React from 'react';
import { Link } from 'react-router-dom';

import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';

import './footer.css';

const Footer = () => {
  const renderIcon = (link, datatestid, icon, alt) => (
    <Link to={ link }>
      <button
        data-testid={ datatestid }
        type="button"
      >
        <img src={ icon } alt={ alt } />
      </button>
    </Link>
  );

  return (
    <div data-testid="footer" className="main-footer">
      { renderIcon('/bebida', 'drinks-bottom-btn', drinkIcon, 'ícone para bebida') }
      { renderIcon('/explorar', 'explore-bottom-btn', exploreIcon, 'ícone para explore') }
      { renderIcon('/comidas', 'food-bottom-btn', mealIcon, 'ícone de comida') }
    </div>
  );
};

export default Footer;
