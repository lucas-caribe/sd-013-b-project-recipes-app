import { screen } from '@testing-library/dom';
import React from 'react';
import App from '../App';
import renderWithRouterAndRedux from './helper/RenderWithRouterAndRedux';

const NUMBER_OF_ELEMENTS = 12;

const filterCategoryAll = 'All-category-filter';
const filterCategoryOrdinary = 'Ordinary Drink-category-filter';
const filterCategoryCocktail = 'Cocktail-category-filter';
const filterCategoryMilk = 'Milk / Float / Shake-category-filter';
const filterCategoryOther = 'Other/Unknown-category-filter';
const filterCategoryCocoa = 'Cocoa-category-filter';

const filterCategoryBeff = 'Beef-category-filter';
const filterCategoryBreakfast = 'Breakfast-category-filter';
const filterCategoryChicken = 'Chicken-category-filter';
const filterCategoryDessert = 'Dessert-category-filter';
const filterCategoryGoat = 'Goat-category-filter';

describe('Testes na Tela Principal do app, /comidas && /bebidas', () => {
  test('Testa se é possivel encontradar 12 card de comidas na rota /comidas',
    async () => {
      const { history } = renderWithRouterAndRedux(<App />);
      history.push('/comidas');
      expect(history.location.pathname).toBe('/comidas');
      const cards = await screen.findAllByTestId(/recipe-card/);
      const imagesCard = await screen.findAllByTestId(/card-img/);
      const namesImages = await screen.findAllByTestId(/card-nam/);
      expect(cards.length).toBe(NUMBER_OF_ELEMENTS);
      expect(imagesCard.length).toBe(NUMBER_OF_ELEMENTS);
      expect(namesImages.length).toBe(NUMBER_OF_ELEMENTS);
    });

  test('Testa se é possivel encontrar 12 card de bebidas na rota /bebidas',
    async () => {
      const { history } = renderWithRouterAndRedux(<App />);
      history.push('/bebidas');
      expect(history.location.pathname).toBe('/bebidas');
      const cards = await screen.findAllByTestId(/recipe-card/);
      const imagesCard = await screen.findAllByTestId(/card-img/);
      const namesImages = await screen.findAllByTestId(/card-nam/);
      expect(cards.length).toBe(NUMBER_OF_ELEMENTS);
      expect(imagesCard.length).toBe(NUMBER_OF_ELEMENTS);
      expect(namesImages.length).toBe(NUMBER_OF_ELEMENTS);
    });
});

describe('Testes nas Categorys nas paginas /comidas /bebidas', () => {
  test('Testa se os 6 Botões para filtrar as categorys estão na tela /bebidas',
    async () => {
      const { history } = renderWithRouterAndRedux(<App />);
      history.push('/bebidas');
      expect(history.location.pathname).toBe('/bebidas');

      const filterAll = await screen.findByTestId(filterCategoryAll);
      const filterCocktail = await screen.findByTestId(filterCategoryCocktail);
      const filterCocoa = await screen.findByTestId(filterCategoryCocoa);
      const filterMilk = await screen.findByTestId(filterCategoryMilk);
      const filterOrdinary = await screen.findByTestId(filterCategoryOrdinary);
      const filterOther = await screen.findByTestId(filterCategoryOther);

      expect(filterAll).toBeInTheDocument();
      expect(filterCocktail).toBeInTheDocument();
      expect(filterCocoa).toBeInTheDocument();
      expect(filterMilk).toBeInTheDocument();
      expect(filterOrdinary).toBeInTheDocument();
      expect(filterOther).toBeInTheDocument();
    });

  test('Testa se os 6 Botões para filtrar as categorys estão na tela /comidas',
    async () => {
      const { history } = renderWithRouterAndRedux(<App />);
      history.push('/comidas');
      expect(history.location.pathname).toBe('/comidas');

      const filterAll = await screen.findByTestId(filterCategoryAll);
      const filterBeff = await screen.findByTestId(filterCategoryBeff);
      const filterBrackFast = await screen.findByTestId(filterCategoryBreakfast);
      const filterChicken = await screen.findByTestId(filterCategoryChicken);
      const filterDessert = await screen.findByTestId(filterCategoryDessert);
      const filterGoat = await screen.findByTestId(filterCategoryGoat);

      expect(filterAll).toBeInTheDocument();
      expect(filterBeff).toBeInTheDocument();
      expect(filterBrackFast).toBeInTheDocument();
      expect(filterChicken).toBeInTheDocument();
      expect(filterDessert).toBeInTheDocument();
      expect(filterGoat).toBeInTheDocument();
    });
});
