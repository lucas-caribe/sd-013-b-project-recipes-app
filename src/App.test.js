import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
// import renderWithRouter from './utils/renderWithRouter';
// import userEvent from '@testing-library/user-event';
// import Login from './components/Login';

test('Farewell, front-end', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/TRYBE/i);
  expect(linkElement).toBeInTheDocument();
});

// describe('Teste do Login',() => {
//   it('Teste redirecionamento para Header de Buscar', () => {
//     renderWithRouter(<Login  />);
//     const btnLogin = screen.getByRole('button', { name:/Login/i, });
//     userEvent.click(btnLogin);
//     const headerComidas = screen.getByRole('heading', {
//       name: /Comidas/i,
//       level: 2,
//     });
//     expect(headerSearch).toBeInTheDocument();
//   })
// });
