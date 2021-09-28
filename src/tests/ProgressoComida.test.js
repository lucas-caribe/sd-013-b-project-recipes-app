import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './support/RenderWithRouterAndRedux';
import recipes from './support/RecipesExample';
import App from '../App';

const { recipeMeal } = recipes;
const {
  idMeal: id,
  strMeal: name,
  strMealThumb: image,
  strInstructions: mealInstructions,
  strCategory: mealCategory,
} = recipeMeal;

const IMG = 'recipe-photo';
const TITLE = 'recipe-title';
const CATEGORY = 'recipe-category';
const SHARE_BTN = 'share-btn';
const FAV_BTN = 'favorite-btn';
const INTRUCTIONS = 'instructions';
const FINISH_BTN = 'finish-recipe-btn';
const INGREDIENTS = /-ingredient-step/;
const URL = '/comidas/52771/in-progress';
let HISTORY;

describe('Progress Recipe tests', () => {
  beforeEach(() => {
    const { history } = renderWithRouterAndRedux(<App />, {
      initialState: { reducerRecipe: { recipeMeal } },
      initialEntries: [URL],
    });
    HISTORY = history;
  });

  test('Se os elementos corretos estão aparecendo, na tela de comida', () => {
    const INGREDIENTS_NUMBER = 8;

    const img = screen.getByTestId(IMG);
    const title = screen.getByTestId(TITLE);
    const category = screen.getByTestId(CATEGORY);
    const shareBtn = screen.getByTestId(SHARE_BTN);
    const favBtn = screen.getByTestId(FAV_BTN);
    const instructions = screen.getByTestId(INTRUCTIONS);
    const finishBtn = screen.getByTestId(FINISH_BTN);
    const ingredients = screen.getAllByTestId(INGREDIENTS);

    expect(img).toBeInTheDocument();
    expect(img.src).toBe(image);

    expect(title).toBeInTheDocument();
    expect(title.innerHTML).toBe(name);

    expect(category).toBeInTheDocument();
    expect(category.innerHTML).toBe(mealCategory);

    expect(shareBtn).toBeInTheDocument();
    expect(favBtn).toBeInTheDocument();

    expect(instructions).toBeInTheDocument();
    expect(instructions.innerHTML).toBe(mealInstructions);

    expect(finishBtn).toBeInTheDocument();
    expect(ingredients).toHaveLength(INGREDIENTS_NUMBER);

    const path = HISTORY.location.pathname;
    expect(path).toContain(id);
  });

  test('Se as funcionalidades da lista de ingredientes estão funcionando', () => {
    const ingredients = screen.getAllByTestId(INGREDIENTS);
    const finishBtn = screen.getByTestId(FINISH_BTN);

    ingredients.forEach((ingredient) => {
      expect(ingredient.firstChild.checked).toBeFalsy();
    });
    expect(finishBtn.disabled).toBeTruthy();

    userEvent.click(ingredients[0]);
    expect(ingredients[0].firstChild.checked).toBeTruthy();
    expect(JSON.parse(localStorage.getItem('inProgressRecipes')))
      .toMatchObject({ meals: { 52771: { '0-ingredient-step': true } }, cocktails: {} });

    renderWithRouterAndRedux(<App />, {
      initialState: { reducerRecipe: { recipeMeal } },
      initialEntries: [URL],
    });

    expect(ingredients[0].firstChild.checked).toBeTruthy();
    userEvent.click(ingredients[0]);
    expect(ingredients[0].firstChild.checked).toBeFalsy();
    expect(JSON.parse(localStorage.getItem('inProgressRecipes')))
      .toMatchObject({ meals: { 52771: { '0-ingredient-step': false } }, cocktails: {} });

    renderWithRouterAndRedux(<App />, {
      initialState: { reducerRecipe: { recipeMeal } },
      initialEntries: [URL],
    });

    ingredients.forEach((ingredient) => {
      expect(ingredient.firstChild.checked).toBeFalsy();
    });
    expect(finishBtn.disabled).toBeTruthy();

    ingredients.forEach((ingredient) => {
      userEvent.click(ingredient);
      expect(ingredient.firstChild.checked).toBeTruthy();
    });
    expect(finishBtn.disabled).toBeFalsy();
    expect(JSON.parse(localStorage.getItem('inProgressRecipes')))
      .toMatchObject({
        meals: { 52771: {
          '0-ingredient-step': true,
          '1-ingredient-step': true,
          '2-ingredient-step': true,
          '3-ingredient-step': true,
          '4-ingredient-step': true,
          '5-ingredient-step': true,
          '6-ingredient-step': true,
          '7-ingredient-step': true,
        } },
        cocktails: {},
      });

    renderWithRouterAndRedux(<App />, {
      initialState: { reducerRecipe: { recipeMeal } },
      initialEntries: [URL],
    });

    ingredients.forEach((ingredient) => {
      expect(ingredient.firstChild.checked).toBeTruthy();
    });
    expect(finishBtn.disabled).toBeFalsy();
  });

  test('Se as funcionalidades do finish button estão funcionando', () => {
    const ingredients = screen.getAllByTestId(INGREDIENTS);
    const finishBtn = screen.getByTestId(FINISH_BTN);

    ingredients.forEach((ingredient) => {
      expect(ingredient.firstChild.checked).toBeTruthy();
    });
    expect(finishBtn.disabled).toBeFalsy();

    userEvent.click(finishBtn);
    expect(HISTORY.location.pathname).toBe('/receitas-feitas');
    expect(JSON.parse(localStorage.getItem('doneRecipes')))
      .toEqual([{
        alcoholicOrNot: '',
        area: 'Italian',
        category: 'Vegetarian',
        doneDate: '27/08/2021',
        id: '52771',
        image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
        name: 'Spicy Arrabiata Penne',
        tags: ['Pasta', 'Curry'],
        type: 'comida',
      }]);

    expect(JSON.parse(localStorage.getItem('inProgressRecipes')))
      .toMatchObject({ meals: {}, cocktails: {} });

    HISTORY.push(URL);
    screen.getAllByTestId(INGREDIENTS).forEach((ingredient) => {
      expect(ingredient.firstChild.checked).toBeFalsy();
    });
    expect(screen.getByTestId(FINISH_BTN).disabled).toBeTruthy();
  });
});
