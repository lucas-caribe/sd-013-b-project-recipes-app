import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouterAndRedux from './helper/RenderWithRouterAndRedux';

describe('Testes no componentest Login', () => {
  test('Testa se há o Input de Email na tela', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/');
    expect(history.location.pathname).toBe('/');

    const InputEmail = screen.getByTestId('email-input');

    expect(InputEmail).toBeInTheDocument();
  });

  test('Testa se há o Input de Senha na Tela', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/');
    expect(history.location.pathname).toBe('/');

    const InputSenha = screen.getByTestId('password-input');

    expect(InputSenha).toBeInTheDocument();
  });

  test('Testa se O Button se Encontra Disabled', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/');
    expect(history.location.pathname).toBe('/');

    const ButtonEnter = screen.getByTestId('login-submit-btn');

    expect(ButtonEnter).toBeInTheDocument();
    expect(ButtonEnter.disabled).toBe(true);
  });

  test('Testa se Dicidar o Email e Senha no formato Correto Habilita o Button',
    () => {
      const { history } = renderWithRouterAndRedux(<App />);
      history.push('/');
      expect(history.location.pathname).toBe('/');

      const InputSenha = screen.getByTestId('password-input');
      const InputEmail = screen.getByTestId('email-input');
      const ButtonEnter = screen.getByTestId('login-submit-btn');

      userEvent.type(InputEmail, 'Alguem@hotmail.com');

      expect(InputEmail.value).toBe('Alguem@hotmail.com');

      userEvent.type(InputSenha, '1234567');

      expect(InputSenha.value).toBe('1234567');

      expect(ButtonEnter.enabled).not.toBe(true);

      userEvent.type(InputEmail, 'Alguem.com');

      expect(ButtonEnter.disabled).toBe(true);
    });
});
