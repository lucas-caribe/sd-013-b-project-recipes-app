import mealCategoriesMock from './mealCategoriesMock';
import mealsMock from './mealsMock';
import beefMealsMock from './beefMealsMock';
import breakfastMealsMock from './breakfastMealsMock';
import chickenMealsMock from './chickenMealsMock';
import dessertMealsMock from './dessertMealsMock';
import goatMealsMock from './goatMealsMock';

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
      return Promise.resolve(beefMealsMock);
    } if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast') {
      return Promise.resolve(breakfastMealsMock);
    } if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken') {
      return Promise.resolve(chickenMealsMock);
    } if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert') {
      return Promise.resolve(dessertMealsMock);
    } if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Goat') {
      return Promise.resolve(goatMealsMock);
    }
  },
});

export default fetchMock;
