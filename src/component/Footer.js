import React from 'react';
import IconButton from '../mini-components/IconButton';
import FoodIcon from '../images/mealIcon.svg';
import DrinkIcon from '../images/drinkIcon.svg';
import ExploreIcon from '../images/exploreIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer">
      <IconButton
        btnImage={ DrinkIcon }
        dataTest="drinks-bottom-btn"
        type="button"
      />
      <IconButton
        btnImage={ ExploreIcon }
        dataTest="explore-bottom-btn"
        type="button"
      />
      <IconButton
        btnImage={ FoodIcon }
        dataTest="food-bottom-btn"
        type="button"
      />
    </footer>
  );
}

export default Footer;
