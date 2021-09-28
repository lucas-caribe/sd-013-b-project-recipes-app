import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../utils/renderWithRouter';
import App from '../App';

const btnDrinkTestId = 'drinks-bottom-btn';
const btnExploreTestId = 'explore-bottom-btn';
const btnFoodTestId = 'food-bottom-btn';
const pageTitleTestId = 'page-title';

describe('Verfica os elementos do footer', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/comidas');
  const btnDrink = screen.getByTestId(btnDrinkTestId);
  const btnExplore = screen.getByTestId(btnExploreTestId);
  const btnMeals = screen.getByTestId(btnFoodTestId);
  const mealsPageTitle = screen.getByTestId(pageTitleTestId);
  const searchBtn = screen.getByAltText('search icon');

  it('should aparecer 3 botões no footer e cada um deles leva para sua respectiva página',
    () => {
      expect(btnDrink).toBeInTheDocument();
      expect(btnExplore).toBeInTheDocument();
      expect(btnMeals).toBeInTheDocument();

      // Testes do footer na rota '/comidas'
      expect(mealsPageTitle).toHaveTextContent('Comida');
      const iconMeal = screen.getByAltText('meal icon');
      expect(iconMeal).toBeInTheDocument();

      // Testes do footer na rota '/bebidas'
      userEvent.click(btnDrink);
      history.push('/bebidas');
      const drinkPageTitle = screen.getByTestId(pageTitleTestId);
      expect(drinkPageTitle).toHaveTextContent('Bebidas');
      const iconDriks = screen.getByAltText('drink icon');
      expect(iconDriks).toBeInTheDocument();

      // Testes do footer na rota '/explorar'
      userEvent.click(btnExplore);
      history.push('/explorar');
      const explorePageTitle = screen.getByTestId(pageTitleTestId);
      expect(explorePageTitle).toHaveTextContent('Explorar');
      const exploreIcon = screen.getByAltText('explore icon');
      expect(exploreIcon).toBeInTheDocument();
    });
});
