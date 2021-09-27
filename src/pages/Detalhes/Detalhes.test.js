import React from 'react';
import { screen } from '@testing-library/react';

import Detalhes from './index';

import renderWithRouterAndContext from '../../utils/renderWithRouterAndContext';

describe('Details Page should', () => {
  it('render the recipe image', () => {
    renderWithRouterAndContext(<Detalhes pathname="comidas" />);

    const recipeImg = screen.getByTestId('recipe-photo');
    expect(recipeImg).toBeInTheDocument();
  });
});
