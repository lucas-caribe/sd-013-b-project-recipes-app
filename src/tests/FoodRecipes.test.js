import React from 'react';
import { cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from './Helpers/renderWithRouterAndRedux';
import FoodRecipes from '../pages/FoodRecipes';

describe('Food recipes page works correctly', () => {
  test('Page has the correct categories buttons',() => {
    const { getByRole } = renderWithRouterAndRedux(<FoodRecipes />);

    const categorieNames = ['All', 'Breakfast'];
    categorieNames.forEach((category) => expect(getByRole('button', { name: category }))
      .toBeInTheDocument());
  });
});
