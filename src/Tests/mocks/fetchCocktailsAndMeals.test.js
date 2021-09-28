import React from 'react';
import { fetchCocktailArray, fetchMealsArray } from '../../services/fetchItens';
import App from '../../App';

describe('Testa as funções fetchCocktailArray && fetchMealsArray', () => {
  // global.fetch = jest.fn(async () => ({ json: async () => ({ drinks: [] }) }));

  fetchCocktailArray = jest.fn(() => ({ drinks: [] }));

  test('Testa a Função fetchCocktailArray', () => {
    fetchCocktailArray().then((r) => {
      console.log(r);
    });
  });
});
