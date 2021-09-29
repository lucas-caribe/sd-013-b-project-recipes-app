import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './support/RenderWithRouterAndRedux';
import Bebidas from '../pages/Bebidas';

import drinkCategoriesMock from './support/drinkCategoriesMock';
import drinksMock from './support/drinksMock';

const CARDS_QUANTITY = 12;
const RECIPE_CARD = '-recipe-card';

// Mockar vários fetchs: inspirado nos testes do cypress
const fetchMock = (url) => Promise.resolve({
  status: 200,
  ok: true,
  json: () => {
    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list') {
      return Promise.resolve(drinkCategoriesMock);
    } if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=') {
      return Promise.resolve(drinksMock);
    } if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=gin') {
      return Promise.resolve(drinksMock.drinks
        .filter((drink) => drink.strCategory === 'gin'));
    } if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary Drink') {
      return Promise.resolve(drinksMock.drinks
        .filter((drink) => drink.strCategory === 'Ordinary Drink'));
    } if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail') {
      return Promise.resolve(drinksMock.drinks
        .filter((drink) => drink.strCategory === 'Cocktail'));
    } if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Milk / Float / Shake') {
      return Promise.resolve(drinksMock.drinks
        .filter((drink) => drink.strCategory === 'Milk / Float / Shake'));
    } if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Other/Unknown') {
      return Promise.resolve(drinksMock.drinks
        .filter((drink) => drink.strCategory === 'Other/Unknown'));
    }
  },
});

describe('1. elementos da tela principal de receitas - Bebidas', () => {
  test('1.1. A tela tem os 12 cards da tela de bebidas', async () => {
    global.fetch = fetchMock;
    renderWithRouterAndRedux(<Bebidas />);
    expect((await screen.findAllByTestId(/-recipe-card/)).length).toBe(CARDS_QUANTITY);
  });
  test('1.2. Os cards estão corretos na tela de bebidas', async () => {
    global.fetch = fetchMock;
    renderWithRouterAndRedux(<Bebidas />);
    expect(await screen.findByTestId(`0${RECIPE_CARD}`)).toBeInTheDocument();
    expect(await screen.findByTestId(`1${RECIPE_CARD}`)).toBeInTheDocument();
    expect(await screen.findByTestId(`2${RECIPE_CARD}`)).toBeInTheDocument();
    expect(await screen.findByTestId(`3${RECIPE_CARD}`)).toBeInTheDocument();
    expect(await screen.findByTestId(`4${RECIPE_CARD}`)).toBeInTheDocument();
    expect(await screen.findByTestId(`5${RECIPE_CARD}`)).toBeInTheDocument();
    expect(await screen.findByTestId(`6${RECIPE_CARD}`)).toBeInTheDocument();
    expect(await screen.findByTestId(`7${RECIPE_CARD}`)).toBeInTheDocument();
    expect(await screen.findByTestId(`8${RECIPE_CARD}`)).toBeInTheDocument();
    expect(await screen.findByTestId(`9${RECIPE_CARD}`)).toBeInTheDocument();
    expect(await screen.findByTestId(`10${RECIPE_CARD}`)).toBeInTheDocument();
    expect(await screen.findByTestId(`11${RECIPE_CARD}`)).toBeInTheDocument();
  });
  test('1.3. A tela tem 5 botões de categoria', async () => {
    global.fetch = fetchMock;
    renderWithRouterAndRedux(<Bebidas />);
    expect(await screen.findByTestId('All-category-filter')).toBeInTheDocument();
    expect(await screen
      .findByTestId(`${drinkCategoriesMock.drinks[0].strCategory}-category-filter`))
      .toBeInTheDocument();
    expect(await screen
      .findByTestId(`${drinkCategoriesMock.drinks[1].strCategory}-category-filter`))
      .toBeInTheDocument();
    expect(await screen
      .findByTestId(`${drinkCategoriesMock.drinks[2].strCategory}-category-filter`))
      .toBeInTheDocument();
    expect(await screen
      .findByTestId(`${drinkCategoriesMock.drinks[3].strCategory}-category-filter`))
      .toBeInTheDocument();
    expect(await screen
      .findByTestId(`${drinkCategoriesMock.drinks[4].strCategory}-category-filter`))
      .toBeInTheDocument();
  });
});
