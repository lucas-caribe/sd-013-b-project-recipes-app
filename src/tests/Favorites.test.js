import React from 'react';
import { cleanup, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './Helpers/renderWithRouterAndRedux';
import Favorites from '../pages/Favorites';

describe('Food recipes page works correctly', () => {
  beforeEach(cleanup);
  test('Page has a correct header', () => {
    renderWithRouterAndRedux(<Favorites />);

    const profileLink = screen.getByTestId('profile-top-btn');
    const profileImg = screen.getByAltText('profileIcon');
    const title = screen.getByRole('heading', { level: 2, name: 'Receitas Favoritas' });

    const profileContent = [
      profileLink,
      profileImg,
      title,
    ];

    profileContent.forEach((element) => expect(element).toBeInTheDocument());
  });

  test('Page render the corrects recipes', () => {
    renderWithRouterAndRedux(<Favorites />);
  });
});
