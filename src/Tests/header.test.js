import { screen } from '@testing-library/dom';
import { fireEvent } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouterAndRedux from './helper/RenderWithRouterAndRedux';

const profileTestId = 'profile-top-btn';
const pageTitleTestId = 'page-title';
const searchTopBtnTestId = 'search-top-btn';
const inputSearch = 'search-input';

describe('Testes no componentest Header', () => {
  test('Testa se tem os data-testids', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/comidas');

    const profile = screen.getByTestId(profileTestId);
    const pageTitle = screen.getByTestId(pageTitleTestId);
    const searchTopBtn = screen.getByTestId(searchTopBtnTestId);

    expect(profile).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
    expect(searchTopBtn).toBeInTheDocument();
  });

  test('Testa se não tem header na tela de login', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/');
    const loginNotHeader = screen.queryByTestId(profileTestId);
    expect(loginNotHeader).toBeNull();
  });

  test('Testa se a página de receitas tem os ícones corretos', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/comidas');

    const profile = screen.getByTestId(profileTestId);
    const searchTopBtn = screen.getByTestId(searchTopBtnTestId);

    expect(profile).toBeInTheDocument();
    expect(searchTopBtn).toBeInTheDocument();
  });

  test('Testa se a página de receita de bebidas tem os ícones corretos', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/bebidas');

    const profile = screen.getByTestId(profileTestId);
    const searchTopBtn = screen.getByTestId(searchTopBtnTestId);

    expect(profile).toBeInTheDocument();
    expect(searchTopBtn).toBeInTheDocument();
  });

  test('Testa se não tem header na tela de receita de comida', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/comidas/53060');
    const foodNotHeader = screen.queryByTestId(profileTestId);
    expect(foodNotHeader).toBeNull();
  });

  test('Testa se não tem header na tela de receita de bebida', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/bebidas/15997');
    const drinkNotHeader = screen.queryByTestId(profileTestId);
    expect(drinkNotHeader).toBeNull();
  });

  test('Testa se não tem header na tela de processo de comida', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/comidas/53060/in-progress');
    const processFoodNotHeader = screen.queryByTestId(profileTestId);
    expect(processFoodNotHeader).toBeNull();
  });

  test('Testa se não tem header na tela de processo de bebida', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/bebidas/15997/in-progress');
    const processDrinkNotHeader = screen.queryByTestId(profileTestId);
    expect(processDrinkNotHeader).toBeNull();
  });

  test('Testa se a página de explorar tem os ícones corretos', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/explorar');

    const profile = screen.getByTestId(profileTestId);
    const searchTopBtn = screen.queryByTestId(searchTopBtnTestId);

    expect(profile).toBeInTheDocument();
    expect(searchTopBtn).toBeNull();
  });

  test('Testa se a página de explorar comidas tem os ícones corretos', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/explorar/comidas');

    const profile = screen.getByTestId(profileTestId);
    const searchTopBtn = screen.queryByTestId(searchTopBtnTestId);

    expect(profile).toBeInTheDocument();
    expect(searchTopBtn).toBeNull();
  });

  test('Testa se a página de explorar bebidas tem os ícones corretos', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/explorar/bebidas');

    const profile = screen.getByTestId(profileTestId);
    const searchTopBtn = screen.queryByTestId(searchTopBtnTestId);

    expect(profile).toBeInTheDocument();
    expect(searchTopBtn).toBeNull();
  });

  test('Testa se a página de exp comidas por ingredientes tem os ícones corretos', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/explorar/comidas/ingredientes');

    const profile = screen.getByTestId(profileTestId);
    const searchTopBtn = screen.queryByTestId(searchTopBtnTestId);

    expect(profile).toBeInTheDocument();
    expect(searchTopBtn).toBeNull();
  });

  test('Testa se a página de exp bebidas por ingredientes tem os ícones corretos', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/explorar/bebidas/ingredientes');

    const profile = screen.getByTestId(profileTestId);
    const searchTopBtn = screen.queryByTestId(searchTopBtnTestId);

    expect(profile).toBeInTheDocument();
    expect(searchTopBtn).toBeNull();
  });

  test('Testa se a página de explorar origem tem os ícones corretos', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/explorar/comidas/area');

    const profile = screen.getByTestId(profileTestId);
    const searchTopBtn = screen.getByTestId(searchTopBtnTestId);

    expect(profile).toBeInTheDocument();
    expect(searchTopBtn).toBeInTheDocument();
  });

  test('Testa se a página de Perfil tem os ícones corretos', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/perfil');

    const profile = screen.getByTestId(profileTestId);
    const searchTopBtn = screen.queryByTestId(searchTopBtnTestId);

    expect(profile).toBeInTheDocument();
    expect(searchTopBtn).toBeNull();
  });

  test('Testa se a página de Receitas Feitas tem os ícones corretos', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/receitas-feitas');

    const profile = screen.getByTestId(profileTestId);
    const searchTopBtn = screen.queryByTestId(searchTopBtnTestId);

    expect(profile).toBeInTheDocument();
    expect(searchTopBtn).toBeNull();
  });

  test('Testa se a página de Receitas Favoritas tem os ícones corretos', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/receitas-favoritas');

    const profile = screen.getByTestId(profileTestId);
    const searchTopBtn = screen.queryByTestId(searchTopBtnTestId);

    expect(profile).toBeInTheDocument();
    expect(searchTopBtn).toBeNull();
  });

  test('Testa se ao clicar no botão de perfil, é redirecionado', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/comidas');
    const linkPerfil = screen.getByTestId('link-for-perfil');
    expect(linkPerfil.href).toBe('http://localhost/perfil');
  });

  test('Testa se ao clicar no botão de busca a barra de busca aparece e some', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/comidas');

    const button = screen.getByTestId('button-for-search');

    fireEvent.click(button);

    expect(screen.getByTestId(inputSearch)).toBeInTheDocument();

    fireEvent.click(button);

    expect(screen.queryByTestId(inputSearch)).not.toBeInTheDocument();
  });
});
