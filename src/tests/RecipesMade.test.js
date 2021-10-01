import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import renderWithRouterAndRedux from './Helpers/renderWithRouterAndRedux';
import RecipesMade from '../pages/RecipesMade';

describe('Recipes made page works correctly', () => {
  beforeEach(cleanup);
  test('Page has a correct header', () => {
    renderWithRouterAndRedux(<RecipesMade />);

    const profileImg = screen.getByAltText('profileIcon');
    const title = screen.getByRole('heading', { level: 2, name: 'Receitas Feitas' });

    const headerContent = [profileImg, title];

    headerContent.forEach((element) => expect(element).toBeInTheDocument());
  });
  test('Page renders the correct recipes', () => {
    renderWithRouterAndRedux(<RecipesMade />);
  });
});
