import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header.jsx tests', () => {
  it('should render the profile icon', () => {
    render(<Header />);

    const profileIcon = screen.getByTestId('profile-top-btn');
    expect(profileIcon).toBeInTheDocument();
  });

  it('should render the page title', () => {
    render(<Header />);

    const pageTitle = screen.getByTestId('page-title');
    expect(pageTitle).toBeInTheDocument();
  });

  it('should render the search bar icon', () => {
    render(<Header />);

    const searchBarIcon = screen.getByTestId('search-top-btn');
    expect(searchBarIcon).toBeInTheDocument();
  });
});
