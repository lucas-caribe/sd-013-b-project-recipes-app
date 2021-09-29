import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouterAndRedux from './helper/RenderWithRouterAndRedux';

const EX_BEBIDAS = '/explorar/bebidas';

describe('Testando o componente ExploreDrinck', () => {
  test('Se tem Dois botoes na tela', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push(EX_BEBIDAS);
    const BTNS_PG = 2;
    const btns = screen.getAllByRole('button');
    expect(btns.length).toBe(BTNS_PG);
  });
  test('Se ao clicar no Por ingredientes renderize um h1 na tela', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push(EX_BEBIDAS);
    const byIngredients = screen.getByTestId('explore-by-ingredient');
    expect(byIngredients).toBeInTheDocument();
    userEvent.click(byIngredients);
    const text = screen.getByRole('heading', {
      level: 1,
      name: /Explorar Ingredientes/i,
    });
    expect(text).toBeInTheDocument();
  });
  test('Se existe o botao Me Surpreenda!', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push(EX_BEBIDAS);
    const surpriseMe = screen.getByTestId('explore-surprise');
    expect(surpriseMe).toBeInTheDocument();
  });
});
