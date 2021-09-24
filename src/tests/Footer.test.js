import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Test Footer`s component ', () => {
  // Render Footer component

  it('Should render footer component on food`s page', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comidas');

    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });

  // Render buttons

  it('Should render footer component on main drink recipes page', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comidas');

    const drinkImage = screen.getByTestId('drinks-bottom-btn');
    expect(drinkImage).toBeInTheDocument();
    userEvent.click(drinkImage);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/bebidas');
  });

  it('Should render footer component on main food recipes page', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/bebidas');

    const foodImage = screen.getByTestId('food-bottom-btn');
    expect(foodImage).toBeInTheDocument();
    userEvent.click(foodImage);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/comidas');
  });

  it('Should render footer component on main explore recipes page', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explorar');

    const exploreImage = screen.getByTestId('explore-bottom-btn');

    expect(exploreImage).toBeInTheDocument();
    userEvent.click(exploreImage);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/explorar');
  });

  it('Should render Footer component on profile page', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/perfil');

    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });

  it('Should render Footer component on explore foods page', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explorar/comidas');

    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });

  it('Should render Footer component on explore drinks page', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explorar/bebidas');

    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });

  // Should render Footer component on explore foods by ingredient page

  // Should exist Footer component on explore drinks by ingredient page

  // Should exist Footer component on explore foods by local area

  // Should exist Footer component on explore drinks by local area

  // Shouldn't exist Footer component on Login's page

  // Shouldn't exist Footer component on food's recipe details

  // Shouldn't exist Footer component on drink's recipe details

  // Shouldn't exist Footer component on food's in process recipe

  // Shouldn't exist Footer component on drink's in process recipe

  // Shouldn't exist Footer component on completed's recipes

  // Shouldn't exist Footer component on favorite's recipes

  // Redirect user to pages when event onClick are fired

  // Redirect user to main drink`s page

  // Redirect user to main food`s page

  // Redirect user to explore's page

  // Redirect user to food's list
});
