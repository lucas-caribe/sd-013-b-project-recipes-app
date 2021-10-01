import React from 'react';
import { cleanup, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './Helpers/renderWithRouterAndRedux';
import ExploreFood from '../pages/ExploreFood';

describe('Food recipes page works correctly', () => {
  beforeEach(cleanup);
  test('Page has a correct header', () => {
    renderWithRouterAndRedux(<ExploreFood />);

    const profileLink = screen.getByTestId('profile-top-btn');
    const profileImg = screen.getByAltText('profileIcon');
    const title = screen.getByRole('heading', { level: 2, name: 'Explorar Comidas' });
    const exploreFoodsLink = screen.getByRole('link', { name: 'Por Ingredientes' });
    const exploreDrinksLink = screen.getByRole('link', { name: 'Por Local de Origem' });

    const exploreFoodContent = [
      profileLink,
      profileImg,
      title,
      exploreDrinksLink,
      exploreFoodsLink,
    ];

    exploreFoodContent.forEach((element) => expect(element).toBeInTheDocument());
  });

  test('Page render recipes correctly', () => {
  // const recipeCards = screen.getAllByTestId(/recipe-card/);
  });

  test('Page has a correct footer', () => {
    renderWithRouterAndRedux(<ExploreFood />);
    const drinkRecipesLink = screen.getByRole('img', { name: 'Drink icon' });
    const exploreFoodLink = screen.getByRole('img', { name: 'Explore Icon' });
    const foodRecipesLink = screen.getByRole('img', { name: 'Meal Icon' });

    const footerContent = [drinkRecipesLink, exploreFoodLink, foodRecipesLink];

    footerContent.forEach((element) => expect(element).toBeInTheDocument());
  });
});
