import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './services/renderWithRouter';
import App from './App';

describe('Login screen', () => {
  it('should start with login button disabled', () => {
    renderWithRouter(<App />);
    const loginButton = screen.getByRole('button', { name: 'Entrar' });
    expect(loginButton).toBeDisabled();
  });

  it('should login button still disabled after invalid email or password', () => {
    renderWithRouter(<App />);
    const loginButton = screen.getByRole('button', { name: 'Entrar' });
    const emailInput = screen.getByPlaceholderText('e-mail');
    const passwordlInput = screen.getByPlaceholderText('senha');
    userEvent.type(emailInput, 'baroesdapisadinha');
    userEvent.type(passwordlInput, '12345');
    expect(loginButton).toBeDisabled();
    userEvent.type(emailInput, 'baroesdapisadinha@gmail.com');
    userEvent.type(passwordlInput, '12345');
    expect(loginButton).toBeDisabled();
    userEvent.type(emailInput, 'baroesdapisadinha');
    userEvent.type(passwordlInput, '123456');
    expect(loginButton).toBeDisabled();
  });

  it('should login button enable after valid email and password', () => {
    renderWithRouter(<App />);
    const loginButton = screen.getByRole('button', { name: 'Entrar' });
    const emailInput = screen.getByPlaceholderText('e-mail');
    const passwordlInput = screen.getByPlaceholderText('senha');
    userEvent.type(emailInput, 'bondedoforro@gmail.com');
    userEvent.type(passwordlInput, '1234567');
    expect(loginButton).toBeEnabled();
  });

  it('should redirect to route /comidas after user login', () => {
    const { history } = renderWithRouter(<App />);
    const loginButton = screen.getByRole('button', { name: 'Entrar' });
    const emailInput = screen.getByPlaceholderText('e-mail');
    const passwordlInput = screen.getByPlaceholderText('senha');
    userEvent.type(emailInput, 'shaniatwain@gmail.com');
    userEvent.type(passwordlInput, '1234567');
    userEvent.click(loginButton);
    expect(history.location.pathname).toBe('/comidas');
  });
});

describe('Footer Component', () => {
  it('there is footer', ()=>{
    const { history } = renderWithRouter(<App />);
    history.push('/comidas');
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });

   it('the icons work', ()=>{
    const { history } = renderWithRouter(<App />);
    history.push('/comidas');
   
    
    const DrinksIcon= screen.getByTestId('drinks-bottom-btn');
    userEvent.click(DrinksIcon);
    expect(history.location.pathname).toBe('/bebidas');

    const ExploreIcon = screen.getByTestId('explore-bottom-btn');
     userEvent.click(ExploreIcon);
    expect(history.location.pathname).toBe('/explorar');

     const FoodIcon = screen.getByTestId('food-bottom-btn');
     userEvent.click(FoodIcon);
    expect(history.location.pathname).toBe('/comidas');
    
  });
});

