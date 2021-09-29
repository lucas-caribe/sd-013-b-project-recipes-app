import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './support/RenderWithRouterAndRedux';
import Comidas from '../pages/Comidas';

import mealCategoriesMock from './support/mealCategoriesMock';
import mealsMock from './support/mealsMock';

const CARDS_QUANTITY = 12;
const RECIPE_CARD = '-recipe-card';

// Mockar vários fetchs: inspirado nos testes do cypress
const fetchMock = (url) => Promise.resolve({
  status: 200,
  ok: true,
  json: () => {
    if (url === 'https://www.themealdb.com/api/json/v1/1/list.php?c=list') {
      return Promise.resolve(mealCategoriesMock);
    } if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=') {
      return Promise.resolve(mealsMock);
    } if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef') {
      return Promise.resolve(mealsMock.meals
        .filter((meal) => meal.strCategory === 'Beef'));
    } if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast') {
      return Promise.resolve(mealsMock.meals
        .filter((meal) => meal.strCategory === 'Breakfast'));
    } if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken') {
      return Promise.resolve(mealsMock.meals
        .filter((meal) => meal.strCategory === 'Chicken'));
    } if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert') {
      return Promise.resolve(mealsMock.meals
        .filter((meal) => meal.strCategory === 'Dessert'));
    } if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Goat') {
      return Promise.resolve(mealsMock.meals
        .filter((meal) => meal.strCategory === 'Goat'));
    }
  },
});

describe('1. elementos da tela principal de receitas - Comidas', () => {
  test('1.1. A tela tem os 12 cards da tela de comidas', async () => {
    global.fetch = fetchMock;
    renderWithRouterAndRedux(<Comidas />);
    expect((await screen.findAllByTestId(/-recipe-card/)).length).toBe(CARDS_QUANTITY);
  });
  test('1.2. Os cards estão corretos na tela de comidas', async () => {
    global.fetch = fetchMock;
    renderWithRouterAndRedux(<Comidas />);
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
    renderWithRouterAndRedux(<Comidas />);
    expect(await screen.findByTestId('All-category-filter')).toBeInTheDocument();
    expect(await screen
      .findByTestId(`${mealCategoriesMock.meals[0].strCategory}-category-filter`))
      .toBeInTheDocument();
    expect(await screen
      .findByTestId(`${mealCategoriesMock.meals[1].strCategory}-category-filter`))
      .toBeInTheDocument();
    expect(await screen
      .findByTestId(`${mealCategoriesMock.meals[2].strCategory}-category-filter`))
      .toBeInTheDocument();
    expect(await screen
      .findByTestId(`${mealCategoriesMock.meals[3].strCategory}-category-filter`))
      .toBeInTheDocument();
    expect(await screen
      .findByTestId(`${mealCategoriesMock.meals[4].strCategory}-category-filter`))
      .toBeInTheDocument();
  });
});
