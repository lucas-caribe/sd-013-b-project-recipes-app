import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  const footerStyle = { position: 'fixed',
    bottom: '0px' };
  return (
    <footer data-testid="footer" style={ footerStyle }>
      <Link to="/bebidas" data-testid="drinks-bottom-btn">
        <img src={ drinkIcon } alt="drinkIcon" />
      </Link>

      <Link to="/explorar" data-testid="explore-bottom-btn">
        <img src={ exploreIcon } alt="exploreIcon" />
      </Link>

      <Link to="/comidas" data-testid="food-bottom-btn">
        <img src={ mealIcon } alt="mealIcon" />
      </Link>
    </footer>
  );
}

export default Footer;
