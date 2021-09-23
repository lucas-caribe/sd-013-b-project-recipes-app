import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testing whether header has been rendered on pages comidas and perfil', () => {
  it('should render heading on comida`s page', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comidas');

    const header = screen.getByText('Comidas');
    expect(header).toBeInTheDocument();
  });

  it('should render profile img, link to perfil', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comidas');

    const perfilImg = screen.getByTestId('profile-top-btn');
    expect(perfilImg).toBeInTheDocument();
    userEvent.click(perfilImg);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/perfil');
  });

  it('should render search btn on comidas page that enable search input', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comidas');

    const searchBtn = screen.getByAltText('search-icon');
    expect(searchBtn).toBeInTheDocument();
    userEvent.click(searchBtn);
    const inputField = screen.getByTestId('search-input');
    expect(inputField).toBeInTheDocument();
    userEvent.click(searchBtn);
    expect(inputField).not.toBeInTheDocument();
  });

  it('should render search btn on perfil page that enable search input', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/perfil');

    const searchBtn = screen.getByAltText('search-icon');
    expect(searchBtn).toBeInTheDocument();
    userEvent.click(searchBtn);
    const inputField = screen.getByTestId('search-input');
    expect(inputField).toBeInTheDocument();
    userEvent.click(searchBtn);
    expect(inputField).not.toBeInTheDocument();
  });
});
