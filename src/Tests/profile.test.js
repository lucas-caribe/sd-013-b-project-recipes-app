import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouterAndRedux from './helper/RenderWithRouterAndRedux';

const profileEmail = 'profile-email';
const doneBTN = 'profile-done-btn';
const favoriteBTN = 'profile-favorite-btn';
const logoutBTN = 'profile-logout-btn';

describe('Testes no componente Perfil', () => {
  beforeEach(() => {
    localStorage.setItem('user', JSON.stringify(
      { email: 'alguem@alguem' },
    ));
  });
  test('Testa se tem os data-testids', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/perfil');

    const attributeEmail = screen.getByTestId(profileEmail);
    const madeRecipes = screen.getByTestId(doneBTN);
    const favoriteRecipes = screen.getByTestId(favoriteBTN);
    const attributeButton = screen.getByTestId(logoutBTN);

    expect(attributeEmail).toBeInTheDocument();
    expect(madeRecipes).toBeInTheDocument();
    expect(favoriteRecipes).toBeInTheDocument();
    expect(attributeButton).toBeInTheDocument();
  });

  test('Testa se o email está visivel', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/perfil');

    const testEmail = screen.getAllByText(/@/i);
    const qtdEmail = 1;
    expect(testEmail).toHaveLength(qtdEmail);
  });

  test('Testa se tem os três botões', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/perfil');

    const recipesMade = screen.getAllByText('Receitas Feitas');
    const recipesFavorite = screen.getAllByText('Receitas Favoritas');
    const logout = screen.getAllByText('Sair');
    const qtd = 1;
    expect(recipesMade).toHaveLength(qtd);
    expect(recipesFavorite).toHaveLength(qtd);
    expect(logout).toHaveLength(qtd);
  });

  test('Testa se ao clicar no botão receitas favoritas é direcionado', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/perfil');

    const favoriteBtn = screen.getByRole('button', { name: /Receitas Favoritas/i });
    userEvent.click(favoriteBtn);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/receitas-favoritas');
  });

  test('Testa se ao clicar no botão receitas feitas é direcionado', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/perfil');

    const favoriteBtn = screen.getByRole('button', { name: /Receitas Feitas/i });
    userEvent.click(favoriteBtn);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/receitas-feitas');
  });

  test('Testa se ao clicar no botão de sair, muda para o login ', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/perfil');

    const favoriteBtn = screen.getByRole('button', { name: /Sair/i });
    userEvent.click(favoriteBtn);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  });
});
