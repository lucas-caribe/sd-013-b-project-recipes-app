import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './Helpers/renderWithRouterAndRedux';
import FoodRecipes from '../pages/FoodRecipes';

describe('Food recipes page works correctly', () => {
  beforeEach(cleanup);
  test('Page has a correct header', () => {
    renderWithRouterAndRedux(<FoodRecipes />);

    const profileLink = screen.getByTestId('profile-link');
    const profileImg = screen.getByAltText('profileIcon');
    const title = screen.getByRole('heading', { level: 2, name: 'Comidas' });
    const searchIcon = screen.getByRole('img', { name: 'searchIcon' });

    const headerContent = [profileLink, profileImg, title, searchIcon];

    headerContent.forEach((element) => expect(element).toBeInTheDocument());
  });
  test('Page search works correctly', () => {
    renderWithRouterAndRedux(<FoodRecipes />);
    const searchIcon = screen.getByTestId('search-button');

    expect(searchIcon).toBeInTheDocument();

    userEvent.click(searchIcon);
    const searchInput = screen.getByTestId('search-input');
    const radioOptions = ['Ingrediente', 'Nome', 'Primeira letra'];
    radioOptions
      .forEach((option) => expect(screen.getByText(option)).toBeInTheDocument());
    const ingredienteOption = screen.getByTestId('ingredient-search-radio');
    const searchButton = screen.getByTestId('exec-search-btn');

    userEvent.type(searchInput, 'egg');
    userEvent.click(ingredienteOption);
    userEvent.click(searchButton);

    expect(screen.getByText('Carregando')).toBeInTheDocument();
  });

  test('Page has the correct categories buttons', () => {
    renderWithRouterAndRedux(<FoodRecipes />);
    const categorieNames = ['All'/* , 'Beef', 'Breakfeast', 'Dessert', 'Goat' */];
    categorieNames
      .forEach((category) => expect(screen.getByRole('button', { name: category }))
        .toBeInTheDocument());
  });

  test('Page render recipes correctly', () => {
    renderWithRouterAndRedux(<FoodRecipes />);

    // const recipeCards = screen.getAllByTestId(/recipe-card/);
  });

  test('Page has a correct footer', () => {
    renderWithRouterAndRedux(<FoodRecipes />);
    const drinkRecipesLink = screen.getByRole('img', { name: 'Drink icon' });
    const exploreLink = screen.getByRole('img', { name: 'Explore Icon' });
    const foodRecipesLink = screen.getByRole('img', { name: 'Meal Icon' });

    const footerContent = [drinkRecipesLink, exploreLink, foodRecipesLink];

    footerContent.forEach((element) => expect(element).toBeInTheDocument());
  });
});
