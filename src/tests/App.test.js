import React from 'react';
import App from '../App';
import renderWithRouterAndRedux from './support/RenderWithRouterAndRedux';

test('Farewell, front-end', () => {
  const { getByText } = renderWithRouterAndRedux(<App />);
  const linkElement = getByText(/TRYBE/i);
  expect(linkElement).toBeInTheDocument();
});
