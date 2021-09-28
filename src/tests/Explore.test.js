import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './utils/utils';

describe('Teste Explore.jsx', () => {
  const buttonFood = 'explore-food';
  const buttonDrinks = 'explore-drinks';
  test('ao entrar na página existem dois botões com data-testid expecificos', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explorar');
    expect(screen.getByRole('button', { name: /Explorar Comidas/ }));
    expect(screen.getByRole('button', { name: /Explorar Bebidas/ }));
    expect(screen.getByTestId(buttonFood)).toBeInTheDocument();
    expect(screen.getByTestId(buttonDrinks)).toBeInTheDocument();
  });
  test('ao clicar no botão ele redireciona para explorar/comidas', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explorar');
    const foodButton = screen.getByTestId(buttonFood);
    userEvent.click(foodButton);
    expect(history.location.pathname).toBe('/explorar/comidas');
    expect(screen.getByRole('heading', {
      level: 2, name: /Explorar Comidas/,
    })).toBeInTheDocument();
  });
  test('ao clicar no botão ele redireciona para explorar/bebidas', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explorar');
    const foodDrinks = screen.getByTestId(buttonDrinks);
    userEvent.click(foodDrinks);
    expect(history.location.pathname).toBe('/explorar/bebidas');
    expect(screen.getByRole('heading', {
      level: 2, name: /Explorar Bebidas/,
    })).toBeInTheDocument();
  });
});
