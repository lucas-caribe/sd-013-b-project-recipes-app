import React from 'react';
import PropTypes from 'prop-types';
import BlackHeart from '../images/blackHeartIcon.svg';
import Drink from '../images/drinkIcon.svg';
import Explore from '../images/exploreIcon.svg';
import Meal from '../images/mealIcon.svg';
import Profile from '../images/profileIcon.svg';
import RockGlass from '../images/rockGlass.svg';
import Search from '../images/searchIcon.svg';
import Share from '../images/shareIcon.svg';
import WhiteHeart from '../images/whiteHeartIcon.svg';

const Icon = (props) => {
  const { icon, testid } = props;
  const renderIcon = () => {
    switch (icon) {
    case 'blackheart':
      return BlackHeart;
    case 'drink':
      return Drink;
    case 'explore':
      return Explore;
    case 'meal':
      return Meal;
    case 'profile':
      return Profile;
    case 'rockglass':
      return RockGlass;
    case 'search':
      return Search;
    case 'share':
      return Share;
    case 'whiteheart':
      return WhiteHeart;
    default:
      return <div />;
    }
  };

  return <img alt="icon" data-testid={ testid } src={ renderIcon() } />;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};

export default Icon;
