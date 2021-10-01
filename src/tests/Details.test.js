import React from 'react';
import { cleanup /* , screen */ } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './Helpers/renderWithRouterAndRedux';
import Details from '../pages/Details';

describe('Drinks recipes page works correctly', () => {
  beforeEach(cleanup);
  test('Page shows the correct Image', () => {
    renderWithRouterAndRedux(<Details />,
      {
        initialEntries: ['/comidas/52977'],
      });
    // const recipeImage = screen.getByAltText('Corba');
  });
});
