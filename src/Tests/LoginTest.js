import React from 'react';
import { render } from '@testing-library/react';
import Login from '../Pages/Login';

describe('Verificar Tela de Login', () => {
  it('verificar os inputs de login', () => {
    const { getByTestId } = render(<Login />);
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
  it('Verifica se ha botao de login', () => {
    const { getByTestId } = render(<Login />);
    const loginButton = getByTestId('login-submit-btn');
    expect(loginButton).toBeInTheDocument();
  });
});
