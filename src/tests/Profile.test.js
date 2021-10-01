import React from 'react';
import { cleanup, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './Helpers/renderWithRouterAndRedux';
import Perfil from '../pages/Perfil';

describe('Food recipes page works correctly', () => {
  beforeEach(cleanup);
  test('Page has a correct header', () => {
    renderWithRouterAndRedux(<Perfil />);

    const profileLink = screen.getByTestId('profile-top-btn');
    const profileImg = screen.getByAltText('profileIcon');
    const title = screen.getByRole('heading', { level: 2, name: 'Perfil' });
    const email = screen.getByRole('heading', { level: 3, name: 'email@email.com' });

    const profileContent = [
      profileLink,
      profileImg,
      title,
      email,
    ];

    profileContent.forEach((element) => expect(element).toBeInTheDocument());
  });

  test('Page render buttons correctly', () => {
    renderWithRouterAndRedux(<Perfil />);
    const buttons = ['Receitas Feitas', 'Receitas Favoritas', 'Sair'];

    buttons.forEach((button) => expect(screen.getByRole('button', { name: button })));
  });

  test('Page has a correct footer', () => {
    renderWithRouterAndRedux(<Perfil />);
    const drinkRecipesLink = screen.getByRole('img', { name: 'Drink icon' });
    const exploreLink = screen.getByRole('img', { name: 'Explore Icon' });
    const foodRecipesLink = screen.getByRole('img', { name: 'Meal Icon' });

    const footerContent = [drinkRecipesLink, exploreLink, foodRecipesLink];

    footerContent.forEach((element) => expect(element).toBeInTheDocument());
  });
});
