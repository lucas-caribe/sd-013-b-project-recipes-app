import React from 'react';
import { cleanup, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './Helpers/renderWithRouterAndRedux';
import Explore from '../pages/Explore';

describe('Food recipes page works correctly', () => {
  beforeEach(cleanup);
  test('Page has a correct header', () => {
    renderWithRouterAndRedux(<Explore />);

    const profileLink = screen.getByTestId('profile-top-btn');
    const profileImg = screen.getByAltText('profileIcon');
    const title = screen.getByRole('heading', { level: 2, name: 'Explorar' });
    const exploreFoodsLink = screen.getByRole('link', { name: 'Explorar Comidas' });
    const exploreDrinksLink = screen.getByRole('link', { name: 'Explorar Bebidas' });

    const exploreContent = [
      profileLink,
      profileImg,
      title,
      exploreDrinksLink,
      exploreFoodsLink,
    ];

    exploreContent.forEach((element) => expect(element).toBeInTheDocument());
  });

  test('Page render recipes correctly', () => {
  // const recipeCards = screen.getAllByTestId(/recipe-card/);
  });

  test('Page has a correct footer', () => {
    renderWithRouterAndRedux(<Explore />);
    const drinkRecipesLink = screen.getByRole('img', { name: 'Drink icon' });
    const exploreLink = screen.getByRole('img', { name: 'Explore Icon' });
    const foodRecipesLink = screen.getByRole('img', { name: 'Meal Icon' });

    const footerContent = [drinkRecipesLink, exploreLink, foodRecipesLink];

    footerContent.forEach((element) => expect(element).toBeInTheDocument());
  });
});
