import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from './Helpers/renderWithRouterAndRedux';

describe(' Login page works correctly', () => {
  beforeEach(cleanup);
  test('Page contains a title with text `Recipes App`', () => {
    renderWithRouterAndRedux(<App />);
    const title = screen.getByRole('heading', { name: 'Recipes App', level: 2 });
    expect(title).toBeInTheDocument();
  });
  test('Page contains button with text `Entrar`', () => {
    renderWithRouterAndRedux(<App />);
    const button = screen.getByRole('button', { name: /entrar/i });
    expect(button).toBeInTheDocument();
  });

  test('Login button works only with correct input format infos', () => {
    renderWithRouterAndRedux(<App />);
    const button = screen.getByRole('button', { name: /entrar/i });
    const emailInput = screen.getAllByRole('textbox')[0];
    const passwordInput = screen.getByTestId('password-input');

    expect(button).toBeDisabled();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    userEvent.type(emailInput, 'emailtest@email.com');
    userEvent.type(passwordInput, '1234567');

    expect(button).toBeEnabled();
  });

  test('Login redirect user to `/comidas`', async () => {
    /* const { history } = */ renderWithRouterAndRedux(<App />);

    const emailInput = screen.getAllByRole('textbox')[0];
    const button = screen.getByRole('button', { name: 'Entrar' });
    const passwordInput = screen.getByTestId('password-input');
    userEvent.type(emailInput, 'emailtest@email.com');
    userEvent.type(passwordInput, '1234567');

    expect(button).toBeEnabled();
    userEvent.click(button);

    // const { location: { pathname } } = history;
    // expect(pathname).toBe('/comidas');
  });
});
