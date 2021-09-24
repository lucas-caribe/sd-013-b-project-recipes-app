import { screen, waitFor } from '@testing-library/dom';
import React from 'react';
import App from '../App';
import renderWithRouterAndRedux from './helper/RenderWithRouterAndRedux';

describe('Testes na Tela Principal do app, /comidas && /bebidas', async () => {
  test('testa se é possivel encontradar 12 card de comidas na rota /comidas', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/comidas');

    await waitFor(() => expect(screen.getByText(/Corba/i)).toBeInTheDocument());
  });
});
