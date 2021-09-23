import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';

function Footer() {
  return (
    <footer
      data-testid="footer"
      className="fixed-bottom"
    >
      <a
        href="/"
        src={ drinkIcon }
        data-testid="drinks-bottom-btn"
      >
        <img src={ drinkIcon } alt="Drinks" />
      </a>

      <a
        href="/"
        src={ exploreIcon }
        data-testid="explore-bottom-btn"
      >
        <img src={ exploreIcon } alt="Explore" />
      </a>

      <a
        href="/"
        src={ mealIcon }
        data-testid="food-bottom-btn"
      >
        <img src={ mealIcon } alt="Food" />
      </a>
    </footer>
  );
}

export default Footer;
