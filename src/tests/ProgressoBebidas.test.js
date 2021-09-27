import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './support/RenderWithRouterAndRedux';
import recipes from './support/RecipesExample';
import App from '../App';

const { recipeDrink } = recipes;
const {
  idDrink: id,
  strDrink: name,
  strDrinkThumb: image,
  strInstructions: drinkInstructions,
  strCategory: drinkCategory,
} = recipeDrink;

const IMG = 'recipe-photo';
const TITLE = 'recipe-title';
const CATEGORY = 'recipe-category';
const SHARE_BTN = 'share-btn';
const FAV_BTN = 'favorite-btn';
const INTRUCTIONS = 'instructions';
const FINISH_BTN = 'finish-recipe-btn';
const INGREDIENTS = /-ingredient-step/;
const URL = '/bebidas/178319/in-progress';
let HISTORY;

describe('Progress Recipe tests', () => {
  beforeEach(() => {
    const { history } = renderWithRouterAndRedux(<App />, {
      initialState: { reducerRecipe: { recipeDrink } },
      initialEntries: [URL],
    });
    HISTORY = history;
  });

  test('Se os elementos corretos estão aparecendo, na tela de comida', () => {
    const INGREDIENTS_NUMBER = 3;

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
    expect(category.innerHTML).toBe(drinkCategory);

    expect(shareBtn).toBeInTheDocument();
    expect(favBtn).toBeInTheDocument();

    expect(instructions).toBeInTheDocument();
    expect(instructions.innerHTML).toBe(drinkInstructions);

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
      .toMatchObject({ meals: {}, cocktails: { 178319: { '0-ingredient-step': true } } });

    renderWithRouterAndRedux(<App />, {
      initialState: { reducerRecipe: { recipeDrink } },
      initialEntries: [URL],
    });

    expect(ingredients[0].firstChild.checked).toBeTruthy();
    userEvent.click(ingredients[0]);
    expect(ingredients[0].firstChild.checked).toBeFalsy();
    expect(JSON.parse(localStorage.getItem('inProgressRecipes')))
      .toMatchObject({ meals: {},
        cocktails: { 178319: { '0-ingredient-step': false } } });

    renderWithRouterAndRedux(<App />, {
      initialState: { reducerRecipe: { recipeDrink } },
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
        meals: {},
        cocktails: { 178319: {
          '0-ingredient-step': true,
          '1-ingredient-step': true,
          '2-ingredient-step': true,
        } },
      });

    renderWithRouterAndRedux(<App />, {
      initialState: { reducerRecipe: { recipeDrink } },
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
        alcoholicOrNot: 'Alcoholic',
        area: '',
        category: 'Cocktail',
        doneDate: '27/08/2021',
        id: '178319',
        image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
        name: 'Aquamarine',
        tags: [],
        type: 'bebida',
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
