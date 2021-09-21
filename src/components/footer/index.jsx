import React from 'react';
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
      <div
        data-testid="drinks-bottom-btn"
      >
        <img src={ drinkIcon } alt="drink" />
      </div>
      <div
        data-testid="explore-bottom-btn"
      >
        <img src={ exploreIcon } alt="explore" />

      </div>
      <div
        data-testid="meal-bottom-btn"
      >
        <img src={ mealIcon } alt="meal" />
      </div>
    </div>
  );
}

export default Footer;
