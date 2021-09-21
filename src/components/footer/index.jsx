import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';

function Footer() {
  return (
    <div
      className="footer"
      data-testid="footer"
    >
      <Link
        to="/bebidas"
        data-testid="drinks-bottom-btn"
      >
        <img src={ drinkIcon } alt="drink" />
      </Link>
      <Link
        to="/explorar"
        data-testid="explore-bottom-btn"
      >
        <img src={ exploreIcon } alt="explore" />

      </Link>
      <Link
        to="/comidas"
        data-testid="meal-bottom-btn"
      >
        <img src={ mealIcon } alt="meal" />
      </Link>
    </div>
  );
}

export default Footer;
