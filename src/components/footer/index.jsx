import React from 'react';
import '../../App.css';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import LinkItem from './LinkItem';

function Footer() {
  const drinkObj = {
    testid: 'drinks-bottom-btn',
    rota: '/bebidas',
    sourceImg: drinkIcon,
    singular: 'drink',
  };

  const exploreObj = {
    testid: 'explore-bottom-btn',
    rota: '/explorar',
    sourceImg: exploreIcon,
    singular: 'explorar',
  };

  const mealObj = {
    testid: 'meals-bottom-btn',
    rota: '/comidas',
    sourceImg: mealIcon,
    singular: 'comida',
  };

  return (
    <div
      className="footer"
      data-testid="footer"
    >
      <LinkItem objProps={ drinkObj } />
      <LinkItem objProps={ exploreObj } />
      <LinkItem objProps={ mealObj } />
    </div>
  );
}

export default Footer;
