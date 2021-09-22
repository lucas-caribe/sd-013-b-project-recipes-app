import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const EMAIL_INPUT_TESTID = 'email-input';
const PASSWORD_INPUT_TESTID = 'password-input';
const BUTTON_TESTID = 'login-submit-btn';
const TESTING_EMAIL = 'email@email.com';

describe('Testing Login Page', () => {
  it('Testing if route works', () => {
    const { history } = renderWithRouter(<App />);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  });

  it('Test if everythings is right on screen', () => {
    renderWithRouter(<App />);

    const loginTitle = screen.getByRole('heading');
    expect(loginTitle).toBeInTheDocument();
    expect(loginTitle).toHaveTextContent('Login');

    const inputEmail = screen.getByTestId(EMAIL_INPUT_TESTID);
    expect(inputEmail).toBeInTheDocument();

    const inputPassword = screen.getByTestId(PASSWORD_INPUT_TESTID);
    expect(inputPassword).toBeInTheDocument();

    const submitButton = screen.getByRole('button', { name: /Entrar/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveTextContent('Entrar');
  });

  it('Test if email input works', () => {
    renderWithRouter(<App />);

    const inputEmail = screen.getByTestId(EMAIL_INPUT_TESTID);

    userEvent.type(inputEmail, TESTING_EMAIL);
    expect(inputEmail).toHaveValue(TESTING_EMAIL);
  });

  it('Test if password input works', () => {
    renderWithRouter(<App />);

    const inputPassword = screen.getByTestId(PASSWORD_INPUT_TESTID);

    userEvent.type(inputPassword, 'xablau123');
    expect(inputPassword).toHaveValue('xablau123');
  });

  it('Test if button is enable when password and email are correct ', () => {
    renderWithRouter(<App />);

    const inputEmail = screen.getByTestId(EMAIL_INPUT_TESTID);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT_TESTID);
    const submitButton = screen.getByTestId(BUTTON_TESTID);

    userEvent.type(inputEmail, TESTING_EMAIL);
    expect(inputEmail).toHaveValue(TESTING_EMAIL);
    userEvent.type(inputPassword, 'xablau1234');
    expect(inputPassword).toHaveValue('xablau1234');

    expect(submitButton).toBeEnabled();
  });

  it('Test if button is enable when password and email are incorrect ', () => {
    renderWithRouter(<App />);

    const inputEmail = screen.getByTestId(EMAIL_INPUT_TESTID);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT_TESTID);
    const submitButton = screen.getByTestId(BUTTON_TESTID);

    // Only email is correct
    userEvent.type(inputEmail, TESTING_EMAIL);
    expect(inputEmail).toHaveValue(TESTING_EMAIL);
    userEvent.type(inputPassword, 'xabl');
    expect(inputPassword).toHaveValue('xabl');

    expect(submitButton).toBeDisabled();

    // Only password is correct
    userEvent.type(inputEmail, 'tes@tes@gmail.com');
    expect(inputEmail).toHaveValue('tes@tes@gmail.com');
    userEvent.type(inputPassword, '1234567');
    expect(inputPassword).toHaveValue('1234567');

    expect(submitButton).toBeDisabled();

    // Both incorrect
    userEvent.type(inputEmail, 'tes.com');
    expect(inputEmail).toHaveValue('tes.com');
    userEvent.type(inputPassword, '12345');
    expect(inputPassword).toHaveValue('12345');

    expect(submitButton).toBeDisabled();
  });

  it('Test if information goes to localStorage when login is sucefull', () => {
    renderWithRouter(<App />);

    const inputEmail = screen.getByTestId(EMAIL_INPUT_TESTID);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT_TESTID);
    const submitButton = screen.getByTestId(BUTTON_TESTID);

    userEvent.type(inputEmail, TESTING_EMAIL);
    userEvent.type(inputPassword, '12345678');
    userEvent.click(submitButton);

    expect(localStorage.getItem('mealsToken')).toBe('1');
    expect(localStorage.getItem('cocktailsToken')).toBe('1');
    expect(JSON.parse(localStorage.getItem('user')))
      .toStrictEqual({ email: TESTING_EMAIL });
  });

  it('Test if Login page redirects when submit button is pressed', () => {
    const { history } = renderWithRouter(<App />);

    const inputEmail = screen.getByTestId(EMAIL_INPUT_TESTID);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT_TESTID);
    const submitButton = screen.getByTestId(BUTTON_TESTID);

    userEvent.type(inputEmail, TESTING_EMAIL);
    userEvent.type(inputPassword, '12345678');
    userEvent.click(submitButton);

    expect(submitButton).toBeEnabled();

    const { location: { pathname } } = history;
    expect(pathname).toBe('/comidas');
  });
});
