import React from 'react';
import { cleanup, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './Helpers/renderWithRouterAndRedux';
import ExploreDrinkIngredientes from '../pages/ExploreDrinkIngredientes';

describe('Explore Drink Ingredients page works correctly', () => {
  beforeEach(cleanup);
  test('Page has a correct header', () => {
    renderWithRouterAndRedux(<ExploreDrinkIngredientes />);

    const profileImg = screen.getByAltText('profileIcon');
    const title = screen
      .getByRole('heading', { level: 2, name: 'Explorar Ingredientes' });

    const headerContent = [profileImg, title];

    headerContent.forEach((element) => expect(element).toBeInTheDocument());
  });
  test('Page render the correct ingredients', () => {
    renderWithRouterAndRedux(<ExploreDrinkIngredientes />);
  });

  test('Page redirect to the correct Ingredient recipes', () => {
  // const recipeCards = screen.getAllByTestId(/recipe-card/);
  });

  test('Page has a correct footer', () => {
    renderWithRouterAndRedux(<ExploreDrinkIngredientes />);
    const ExploredrinkIngredientes = screen.getByRole('img', { name: 'Drink icon' });
    const exploreLink = screen.getByRole('img', { name: 'Explore Icon' });
    const foodRecipesLink = screen.getByRole('img', { name: 'Meal Icon' });

    const footerContent = [ExploredrinkIngredientes, exploreLink, foodRecipesLink];

    footerContent.forEach((element) => expect(element).toBeInTheDocument());
  });
});
