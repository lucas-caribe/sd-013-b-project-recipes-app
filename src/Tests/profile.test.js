import { screen } from '@testing-library/dom';
import React from 'react';
import App from '../App';
import renderWithRouterAndRedux from './helper/RenderWithRouterAndRedux';

const profileEmail = 'profile-email';
const doneBTN = 'profile-done-btn';
const favoriteBTN = 'profile-favorite-btn';
const logoutBTN = 'profile-logout-btn';
const emailTemplate = `${email}`;

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

    const templateLiterals = screen.getByTestId(emailTemplate);

    expect(templateLiterals).toBeInTheDocument();
  });
});
