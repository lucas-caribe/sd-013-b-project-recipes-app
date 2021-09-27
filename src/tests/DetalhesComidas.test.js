import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './support/RenderWithRouterAndRedux';
import DetalhesComidas from '../pages/DetalhesComidas';

describe('Testes página detalhes das Comidas', () => {
  it('Testa se a página tem um título', () => {
    renderWithRouterAndRedux(<DetalhesComidas />);
  });
});
