import React from 'react';
import { fetchCocktailArray, fetchMealsArray } from '../../services/fetchItens';
import App from '../../App';

describe('Testa as funções fetchCocktailArray && fetchMealsArray', () => {
  global.fetch = jest.fn(async () => ({ ok: true, json: async () => ({ drinks: [] }) }));

  // fetchCocktailArray = jest.fn(() => ({ drinks: [] }));

  test('Testa a Função fetchCocktailArray', async () => {
    try {
      const teste = await fetchCocktailArray();
      expect(teste).toEqual({ drinks: [] });
    } catch (error) {
      console.log(error);
    }
    // fetchCocktailArray().then((r) => {
    //   console.log(r);
    // });
  });
});
