import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './utils/renderWithRouter';
import recipesContext from '../context/recipesContext';
import Login from '../pages/Login';
import { createContext } from 'react';

describe('Teste o componente Login.js', () => {
  test('Verifica se a página contém o input de email.', () => {
    const { history } = renderWithRouter(<Login />);
    history.push('/');
    const rendersEmailInput = screen.getByTestId('email-input');
    expect(rendersEmailInput).toBeInTheDocument();
  });
}) 
