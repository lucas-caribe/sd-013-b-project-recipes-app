import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="footer-container"
    >
      <Link
        type="submit"
        to="/bebidas"
        src={ drinkIcon }
        data-testid="drinks-bottom-btn"
      >
        <img
          src={ drinkIcon }
          alt="drink-icon"
        />
      </Link>
      <Link
        type="submit"
        to="/explorar"
        src={ exploreIcon }
        data-testid="explore-bottom-btn"
      >
        <img
          src={ exploreIcon }
          alt="explore-icon"
        />
      </Link>
      <Link
        type="submit"
        to="/comidas"
        src={ mealIcon }
        data-testid="food-bottom-btn"
      >
        <img
          src={ mealIcon }
          alt="meal-icon"
        />
      </Link>
    </footer>

  );
}
