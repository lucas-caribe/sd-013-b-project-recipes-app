import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Header from './Header';
import App from '../../App';

import renderWithRouter from '../../helpers/renderWithRouter';

describe('Header.jsx tests should', () => {
  it('render the profile icon', () => {
    render(<Header />);

    const profileIcon = screen.getByTestId('profile-top-btn');
    expect(profileIcon).toBeInTheDocument();
  });

  it('render the page title', () => {
    render(<Header />);

    const pageTitle = screen.getByTestId('page-title');
    expect(pageTitle).toBeInTheDocument();
  });

  it('render the search bar icon', () => {
    render(<Header />);

    const searchBarIcon = screen.getByTestId('search-top-btn');
    expect(searchBarIcon).toBeInTheDocument();
  });

  it('redirect to the profile page after clicking on the profile icon', () => {
    const { history } = renderWithRouter(<App />);

    const profileIcon = screen.getByTestId('profile-top-btn');
    userEvent.click(profileIcon);
    const { pathname } = history.location;

    expect(pathname).toBe('/profile');
  });
});
