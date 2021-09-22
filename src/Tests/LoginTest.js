import React from 'react';
import { render } from '@testing-library/react';
import Login from '../Pages/Login';

const EMAIL_INPUT = 'email-input';
const PASS_INPUT = 'password-input';
const LOGIN_BUTTON = 'login-submit-btn';

describe('Verificar Tela de Login', () => {
  it('verificar os inputs de login', () => {
    const { getByTestId } = render(<Login />);
    const emailInput = getByTestId(EMAIL_INPUT);
    const passwordInput = getByTestId(PASS_INPUT);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
  it('Verifica se ha botao de login', () => {
    const { getByTestId } = render(<Login />);
    const loginButton = getByTestId(LOGIN_BUTTON);
    expect(loginButton).toBeInTheDocument();
  });
  it('Verifica se o botão desabilita com informações erradas', () => {
    const { getByTestId } = render(<Login />);

    const emailInput = getByTestId(EMAIL_INPUT);
    const passwordInput = getByTestId(PASS_INPUT);
    const loginButton = getByTestId(LOGIN_BUTTON);

    fireEvent.change(emailInput, { target: { value: 'emailErrado' } });
    fireEvent.change(passwordInput, { target: { value: '00' } });
    expect(loginButton).toBeDisabled();
  });

  it('Verifica se o botão habilita quando informações corretas são inseridas', () => {
    const { getByTestId } = render(<Login />);

    const emailInput = getByTestId(EMAIL_INPUT);
    const passwordInput = getByTestId(PASS_INPUT);
    const loginButton = getByTestId(LOGIN_BUTTON);

    fireEvent.change(emailInput, { target: { value: 'email@teste.com' } });
    fireEvent.change(passwordInput, { target: { value: 'senha12345' } });
    expect(loginButton).not.toBeDisabled();
  });
});
