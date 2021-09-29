import React from 'react';
import { cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from './Helpers/renderWithRouterAndRedux';

describe(' Login page works correctly', () => {
  beforeEach(cleanup);
  test('Page contains a title with text `Recipes App`', () => {
    const { getByRole } = renderWithRouterAndRedux(<App />);
    const title = getByRole('heading', { name: 'Recipes App', level: 2 });
    expect(title).toBeInTheDocument();
  });
  test('Page contains button with text `Entrar`', () => {
    const { getByRole } = renderWithRouterAndRedux(<App />);
    const button = getByRole('button', { name: /entrar/i });
    expect(button).toBeInTheDocument();
  });

  test('Login button works only with correct input format infos', () => {
    const { getByRole, getAllByRole, getByTestId } = renderWithRouterAndRedux(<App />);
    const button = getByRole('button', { name: /entrar/i });
    const emailInput = getAllByRole('textbox')[0];
    const passwordInput = getByTestId('password-input');

    expect(button).toBeDisabled();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    userEvent.type(emailInput, 'emailtest@email.com');
    userEvent.type(passwordInput, '1234567');

    expect(button).toBeEnabled();
  });

  test('Login redirect user to `/comidas`', async () => {
    const { getByRole, getAllByRole,
      getByTestId, history } = renderWithRouterAndRedux(<App />);

    const emailInput = getAllByRole('textbox')[0];
    const button = getByRole('button', { name: 'Entrar' });
    const passwordInput = getByTestId('password-input');
    userEvent.type(emailInput, 'emailtest@email.com');
    userEvent.type(passwordInput, '1234567');

    expect(button).toBeEnabled();
    fireEvent.click(button);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/comidas');
  });
});
