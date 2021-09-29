import React from 'react';
import { cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from './Helpers/renderWithRouterAndRedux';

describe('Food recipes page works correctly', () => {
  test('Page has the correctly categories buttons', async () => {
    const { getByRole } = renderWithRouterAndRedux(<App />);

    const categorieNames = ['All', 'Beef', 'Breakfast', 'Chicken', 'Dessert', 'Goat'];

    categorieNames.forEach((category) => expect(getByRole('button', { name: category })
      .toBeInTheDocument()));
  });
});
