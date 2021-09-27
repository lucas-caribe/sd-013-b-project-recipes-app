import React from 'react';
import '../../App.css';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import LinkItem from './LinkItem';

function Footer() {
  const footerIcons = [
    {
      testid: 'drinks-bottom-btn',
      rota: '/bebidas',
      sourceImg: drinkIcon,
      singular: 'drink',
    },
    {
      testid: 'explore-bottom-btn',
      rota: '/explorar',
      sourceImg: exploreIcon,
      singular: 'explorar',
    },
    {
      testid: 'food-bottom-btn',
      rota: '/comidas',
      sourceImg: mealIcon,
      singular: 'comida',
    },
  ];

  return (
    <div
      className="footer"
      data-testid="footer"
    >
      {
        footerIcons.map(
          (footerIcon, index) => <LinkItem key={ index } objProps={ footerIcon } />,
        )
      }
    </div>
  );
}

export default Footer;
