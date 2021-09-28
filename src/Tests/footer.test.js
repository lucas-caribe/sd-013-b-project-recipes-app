import { screen } from '@testing-library/dom';
// import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouterAndRedux from './helper/RenderWithRouterAndRedux';

const footerTestId = 'footer';
const drinksTestId = 'drinks-bottom-btn';
const exploreTestId = 'explore-bottom-btn';
const foodTestId = 'food-bottom-btn';

describe.only('Testes no componente Footer', () => {
  test('Testa se tem os data-testids', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/comidas');

    const footerEl = screen.getByTestId(footerTestId);
    const drinksBtn = screen.getByTestId(drinksTestId);
    const exploreBtn = screen.getByTestId(exploreTestId);
    const foodsBtn = screen.getByTestId(foodTestId);

    expect(footerEl).toBeInTheDocument();
    expect(drinksBtn).toBeInTheDocument();
    expect(exploreBtn).toBeInTheDocument();
    expect(foodsBtn).toBeInTheDocument();
  });

  test('Testa se não tem footer na tela de login', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/');

    const loginNotFooter = screen.queryByTestId(footerTestId);

    expect(loginNotFooter).toBeNull();
  });

  test('Testa se tem footer na tela principal de comidas', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/comidas');

    const footerEl = screen.getByTestId(footerTestId);

    expect(footerEl).toBeInTheDocument();
  });

  test('Testa se tem footer na tela principal de bebidas', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/bebidas');

    const footerEl = screen.getByTestId(footerTestId);

    expect(footerEl).toBeInTheDocument();
  });

  test('Testa se não tem footer na tela de detalhes de receita de comida', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/comidas/{id-da-receita}');

    const foodNotFooter = screen.queryByTestId(footerTestId);

    expect(foodNotFooter).toBeNull();
  });

  test('Testa se não tem header na tela de detalhes de receita de bebida', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/bebidas/{id-da-receita}');

    const drinkNotFooter = screen.queryByTestId(footerTestId);

    expect(drinkNotFooter).toBeNull();
  });

  test('Testa se não tem footer na tela de processo de comida', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/comidas/{id-da-receita}/in-progress');

    const processFoodNotFooter = screen.queryByTestId(footerTestId);

    expect(processFoodNotFooter).toBeNull();
  });

  test('Testa se não tem footer na tela de processo de bebida', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/bebidas/{id-da-receita}/in-progress');
    const processDrinkNotFooter = screen.queryByTestId(footerTestId);
    expect(processDrinkNotFooter).toBeNull();
  });

  test('Testa se tem footer na tela de explorar', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/explorar');

    const footerEl = screen.getByTestId(footerTestId);

    expect(footerEl).toBeInTheDocument();
  });

  test('Testa se tem footer na tela de explorar comidas', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/explorar/comidas');

    const footerEl = screen.getByTestId(footerTestId);

    expect(footerEl).toBeInTheDocument();
  });

  test('Testa se tem footer na tela de explorar bebidas', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/explorar/bebidas');

    const footerEl = screen.getByTestId(footerTestId);

    expect(footerEl).toBeInTheDocument();
  });

  test('Testa se tem footer na tela de explorar comidas por ingredientes', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/explorar/comidas/ingredientes');

    const footerEl = screen.getByTestId(footerTestId);

    expect(footerEl).toBeInTheDocument();
  });

  test('Testa se tem footer na tela de explorar bebidas por ingredientes', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/explorar/bebidas/ingredientes');

    const footerEl = screen.getByTestId(footerTestId);

    expect(footerEl).toBeInTheDocument();
  });

  test('Testa se tem footer na tela de explorar comidas por local de origem', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/explorar/comidas/area');

    const footerEl = screen.getByTestId(footerTestId);

    expect(footerEl).toBeInTheDocument();
  });

  test('Testa se tem footer na tela de perfil', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/perfil');

    const footerEl = screen.getByTestId(footerTestId);

    expect(footerEl).toBeInTheDocument();
  });

  test('Testa se não tem footer na tela de receitas feitas', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/receitas-feitas');

    const doneRecipesNotFooter = screen.queryByTestId(footerTestId);

    expect(doneRecipesNotFooter).toBeNull();
  });

  test('Testa se não tem footer na tela de receitas favoritas', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/receitas-favoritas');

    const favoritesNotFooter = screen.queryByTestId(footerTestId);

    expect(favoritesNotFooter).toBeNull();
  });

  test('Testa se ao clicar no botão de bebidas, é redirecionado', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/comidas');

    expect(screen.getByTestId(drinksTestId)).toHaveAttribute('href', '/bebidas'); // estrutura da linha foi pego no stackoverflow
  });

  test('Testa se ao clicar no botão de explorar, é redirecionado', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/comidas');

    expect(screen.getByTestId(exploreTestId)).toHaveAttribute('href', '/explorar'); // estrutura da linha foi pego no stackoverflow
  });

  test('Testa se ao clicar no botão de comidas, é redirecionado', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/comidas');

    expect(screen.getByTestId(foodTestId)).toHaveAttribute('href', '/comidas'); // estrutura da linha foi pego no stackoverflow
  });
});
