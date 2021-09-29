import {
  fetchCocktailsItensByCategory, fetchMealsItensByCategory,
} from '../services/fetchItensByCategory';
import mockCategorysDrinks from './mocks/categoryCocktail';
import mockCategoryBeef from './mocks/categoryBeef';

describe('Testa as Funções fetchCategorysCoctails && fetchCategorysMeals', () => {
  afterEach(() => { jest.clearAllMocks(); });
  test('Testa a função fetchCategorysCoctails se seu retorno é uma Promise', async () => {
    global.fetch = jest.fn(async () => (
      { ok: true, json: async () => (mockCategorysDrinks) }
    ));
    expect(
      fetchCocktailsItensByCategory('cocktail'),
    ).resolves.toEqual(mockCategorysDrinks);
  });

  test('Testa a função fetchMealsItensByCategory se seu retorno é uma Promise', () => {
    global.fetch = jest.fn(async () => (
      { ok: true, json: async () => (mockCategoryBeef) }
    ));
    expect(fetchMealsItensByCategory('beff')).resolves.toEqual(mockCategoryBeef);
  });
});
