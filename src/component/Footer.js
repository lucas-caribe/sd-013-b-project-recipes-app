import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '../mini-components/IconButton';
import FoodIcon from '../images/mealIcon.svg';
import DrinkIcon from '../images/drinkIcon.svg';
import ExploreIcon from '../images/exploreIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer" style={ { position: 'fixed', bottom: '0px' } }>
      <Link to='/bebidas'>
        <IconButton
          btnImage={ DrinkIcon }
          dataTest="drinks-bottom-btn"
          type="button"
        />
      </Link>
      <Link to="/explorar">
        <IconButton
          btnImage={ ExploreIcon }
          dataTest="explore-bottom-btn"
          type="button"
        />
      </Link>
      <Link to="comidas">
        <IconButton
          btnImage={ FoodIcon }
          dataTest="food-bottom-btn"
          type="button"
        />
      </Link>
    </footer>
  );
}

export default Footer;
