import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

import '../styles/footer.css';

function Footer() {
  return (
    <div className="footer" data-testid="footer">
      <Link to="/bebidas">
        <button
          type="button"
          data-testid="drinks-bottom-btn"
        >
          <img src={ drinkIcon } alt="Drink Icon" />
        </button>
      </Link>

      <Link to="/explorar">
        <button
          type="button"
          data-testid="explore-bottom-btn"
        >
          <img src={ exploreIcon } alt="Explore Icon" />
        </button>
      </Link>

      <Link to="/comidas">
        <button
          type="button"
          data-testid="food-bottom-btn"
        >
          <img src={ mealIcon } alt="Meal Icon" />
        </button>
      </Link>
    </div>
  );
}

export default Footer;
