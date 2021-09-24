import { screen } from '@testing-library/dom';
// import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouterAndRedux from './helper/RenderWithRouterAndRedux';

describe('Testando o componente Explorar ', () => {
  test('testar se tem dois botoes na tela', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/explorar');
    const NUMBER_BUTTONS = 2;
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(NUMBER_BUTTONS);
    // const button1 = screen.getByTestId('explore-food')
    // const button2 = screen.getByTestId('explore-drinks')
    // expect(button1).toBeInTheDocument();
    // expect(button2).toBeInTheDocument();
  });
});
