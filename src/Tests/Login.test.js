import React from 'react';
import { screen, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from './Helpers/renderWithRouterAndRedux';

const TEST_EMAIL = 'test.email@test.com';
const TEST_PASSWORD = '1234567';
const PASSWORD_TEST_ID = 'password-input';
const EMAIL_TEST_ID = 'email-input';

beforeEach(cleanup);

describe('Testando o input de email e senha', () => {
  test('Testa input do email e senha', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId(EMAIL_TEST_ID);
    expect(inputEmail).toHaveValue('');
    fireEvent.change(inputEmail, { target: { value: TEST_EMAIL } });
    expect(inputEmail).toHaveValue(TEST_EMAIL);

    const inputPassword = screen.getByTestId(PASSWORD_TEST_ID);
    expect(inputPassword).toHaveValue('');
    fireEvent.change(inputPassword, { target: { value: TEST_PASSWORD } });
    expect(inputPassword).toHaveValue(TEST_PASSWORD);
  });
});
describe(' Verifica se pagina de Login ', () => {
  test('Salva os dados do usuário no estado global', () => {
    const { store } = renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByTestId(EMAIL_TEST_ID);
    const passwordInput = screen.getByTestId(PASSWORD_TEST_ID);
    const loginButton = screen.getByTestId('login-submit-btn');
    userEvent.type(emailInput, TEST_EMAIL);
    userEvent.type(passwordInput, TEST_PASSWORD);
    userEvent.click(loginButton);
    expect(store.getState().userInfo.email).toBe(TEST_EMAIL);
    expect(store.getState().userInfo.password).toBe(TEST_PASSWORD);
  });
  test('redireciona para /comidas', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByTestId(EMAIL_TEST_ID);
    const passwordInput = screen.getByTestId(PASSWORD_TEST_ID);
    const loginButton = screen.getByTestId('login-submit-btn');
    userEvent.type(emailInput, TEST_EMAIL);
    userEvent.type(passwordInput, TEST_PASSWORD);
    userEvent.click(loginButton);
    expect(history.location.pathname).toBe('/comidas');
  });
});
