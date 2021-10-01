import React from 'react';
import { cleanup, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './Helpers/renderWithRouterAndRedux';
import ExploreDrink from '../pages/ExploreDrink';

describe('Drink recipes page works correctly', () => {
  beforeEach(cleanup);
  test('Page has a correct header', () => {
    renderWithRouterAndRedux(<ExploreDrink />);

    const profileLink = screen.getByTestId('profile-top-btn');
    const profileImg = screen.getByAltText('profileIcon');
    const title = screen.getByRole('heading', { level: 2, name: 'Explorar Bebidas' });
    const exploreByIngredients = screen.getByRole('link', { name: 'Por Ingredientes' });

    const exploreDrinkContent = [
      profileLink,
      profileImg,
      title,
      exploreByIngredients,
    ];

    exploreDrinkContent.forEach((element) => expect(element).toBeInTheDocument());
  });

  test('Page render recipes correctly', () => {
  // const recipeCards = screen.getAllByTestId(/recipe-card/);
  });

  test('Page has a correct footer', () => {
    renderWithRouterAndRedux(<ExploreDrink />);
    const drinkRecipesLink = screen.getByRole('img', { name: 'Drink icon' });
    const exploreDrinkLink = screen.getByRole('img', { name: 'Explore Icon' });
    const DrinkRecipesLink = screen.getByRole('img', { name: 'Meal Icon' });

    const footerContent = [drinkRecipesLink, exploreDrinkLink, DrinkRecipesLink];

    footerContent.forEach((element) => expect(element).toBeInTheDocument());
  });
});
