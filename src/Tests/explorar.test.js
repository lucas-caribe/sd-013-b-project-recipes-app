import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouterAndRedux from './helper/RenderWithRouterAndRedux';

describe('Testando o componente Explorar ', () => {
  test('Se tem dois botoes na tela', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/explorar');
    const NUMBER_BUTTONS = 2;
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(NUMBER_BUTTONS);
  });
  test('Se ao clicar, explorar comida é direcionado para  tela explorar comida', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/explorar');
    const BTN_EX_COMIDAS = 3;
    const exFood = screen.getByTestId('explore-food');
    expect(exFood).toBeInTheDocument();
    userEvent.click(exFood);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(BTN_EX_COMIDAS);
  });
  test('Se ao clicar, explorar bebida é direcionado para tela explorar bebida', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/explorar');
    const BTN_EX_BEBIDAS = 2;
    const exDrinck = screen.getByTestId('explore-drinks');
    expect(exDrinck).toBeInTheDocument();
    userEvent.click(exDrinck);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(BTN_EX_BEBIDAS);
  });
});
