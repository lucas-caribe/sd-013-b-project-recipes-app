import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <div className="footer-container" data-testid="footer">
      <button
        type="button"
        src={ drinkIcon }
        id="test"
        data-testid="drinks-bottom-btn"
      >
        Drink
      </button>
      <button
        type="button"
        src={ exploreIcon }
        data-testid="explore-bottom-btn"
      >
        Explorer
      </button>
      <button
        type="button"
        src={ mealIcon }
        data-testid="food-bottom-btn"
      >
        Food
      </button>

    </div>

  );
}

export default Footer;
