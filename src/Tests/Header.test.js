import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './Helpers/renderWithRouterAndRedux';

import Main from '../Pages/Main';
import Login from '../Pages/Login';
import App from '../App';

const PROFILE_TOP_BTN = 'profile-top-btn';
const PAGE_TITLE = 'page-title';
const SEARCH_TOP_BTN = 'search-top-btn';

describe('9 - Testando os elementos do Header', () => {
  test('Testa de renderiza dois icones e um titulo', () => {
    renderWithRouterAndRedux(<Main />);
    const profileIcon = screen.getByTestId(PROFILE_TOP_BTN);
    const pageTitle = screen.getByTestId(PAGE_TITLE);
    const searchIcon = screen.getByTestId(SEARCH_TOP_BTN);

    expect(profileIcon).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
  });
});

describe('10 - Testando os icones nas paginas', () => {
  test('Não tem header na tela de login', () => {
    renderWithRouterAndRedux(<Login />);
    const header = screen.queryByTestId('header');
    expect(header).not.toBeInTheDocument();
  });

  test(' O header tem os ícones certo na tela de receitas de comidas', () => {
    const { history } = renderWithRouterAndRedux(<Main />);

    history.push('/comidas');

    const profileIcon = screen.getByTestId(PROFILE_TOP_BTN);
    const pageTitleFood = screen.getByTestId(PAGE_TITLE);
    const searchIcon = screen.getByTestId(SEARCH_TOP_BTN);

    expect(profileIcon).toBeInTheDocument();
    expect(pageTitleFood).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
  });

  test(' O header tem os ícones certo na tela de receitas de bebidas', () => {
    const { history } = renderWithRouterAndRedux(<Main />);

    history.push('/bebidas');

    const profileIcon = screen.getByTestId(PROFILE_TOP_BTN);
    const pageTitleFood = screen.getByTestId(PAGE_TITLE);
    const searchIcon = screen.getByTestId(SEARCH_TOP_BTN);

    expect(profileIcon).toBeInTheDocument();
    expect(pageTitleFood).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
  });

  test('Não tem header na tela de detalhes de uma receita de comida', () => {
    const { history } = renderWithRouterAndRedux(<Login />);

    history.push(`/comidas/${1}`);

    const header = screen.queryByTestId('header');
    expect(header).not.toBeInTheDocument();
  });

  test('Não tem header na tela de detalhes de uma receita de bebida', () => {
    const { history } = renderWithRouterAndRedux(<Login />);

    history.push(`/bebida/${1}`);

    const header = screen.queryByTestId('header');
    expect(header).not.toBeInTheDocument();
  });

  test('Não tem header na tela de receita em processo de comida', () => {
    const { history } = renderWithRouterAndRedux(<Login />);

    history.push(`comidas/${1}/in-progress`);

    const header = screen.queryByTestId('header');
    expect(header).not.toBeInTheDocument();
  });

  test('Não tem header na tela de receita em processo de bebida', () => {
    const { history } = renderWithRouterAndRedux(<Login />);

    history.push(`bebida/${1}/in-progress`);

    const header = screen.queryByTestId('header');
    expect(header).not.toBeInTheDocument();
  });

  test('O header tem os ícones corretos na tela de explorar', () => {
    const { history } = renderWithRouterAndRedux(<Main />);

    history.push('/explorar');

    const profileIcon = screen.getByTestId(PROFILE_TOP_BTN);
    expect(profileIcon).toBeInTheDocument();
  });

  test('O header tem os ícones corretos na tela de explorar comidas', () => {
    const { history } = renderWithRouterAndRedux(<Main />);
    history.push('/explorar/comidas');
    const profileIcon = screen.getByTestId(PROFILE_TOP_BTN);
    expect(profileIcon).toBeInTheDocument();
  });

  test(' O header tem os ícones corretos na tela de explorar bebidas', () => {
    const { history } = renderWithRouterAndRedux(<Main />);
    history.push('/explorar/bebidas');
    const profileIcon = screen.getByTestId(PROFILE_TOP_BTN);
    expect(profileIcon).toBeInTheDocument();
  });

  test('O header tem o ícone certo na tela de explorar comidas por ingrediente', () => {
    const { history } = renderWithRouterAndRedux(<Main />);
    history.push('/explorar/comidas/ingredientes');
    const profileIcon = screen.getByTestId(PROFILE_TOP_BTN);
    expect(profileIcon).toBeInTheDocument();
  });

  test('O header tem o ícone certo na tela de explorar bebidas por ingrediente', () => {
    const { history } = renderWithRouterAndRedux(<Main />);
    history.push('/explorar/bebidas/ingredientes');
    const profileIcon = screen.getByTestId(PROFILE_TOP_BTN);
    expect(profileIcon).toBeInTheDocument();
  });

  test('O header tem os ícones corretos na tela de perfil', () => {
    const { history } = renderWithRouterAndRedux(<Main />);
    history.push('/perfil');
    const profileIcon = screen.getByTestId(PROFILE_TOP_BTN);
    expect(profileIcon).toBeInTheDocument();
  });

  test('O header tem os ícones corretos na tela de receitas feitas', () => {
    const { history } = renderWithRouterAndRedux(<Main />);
    history.push('/receitas-feitas');
    const profileIcon = screen.getByTestId(PROFILE_TOP_BTN);
    expect(profileIcon).toBeInTheDocument();
  });

  test('O header tem os ícones corretos na tela de receitas favoritas', () => {
    const { history } = renderWithRouterAndRedux(<Main />);
    history.push('/receitas-favoritas');
    const profileIcon = screen.getByTestId(PROFILE_TOP_BTN);
    expect(profileIcon).toBeInTheDocument();
  });
});

describe('11 - Redirecione para a tela de perfil ao clicar no botão de perfil', () => {
  test('A mudança de tela ocorre corretamente', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/comidas');

    const profileIcon = screen.getByTestId(PROFILE_TOP_BTN);
    userEvent.click(profileIcon);

    const pageTitle = screen.getByTestId(PAGE_TITLE);
    expect(pageTitle).toHaveTextContent('Perfil');
  });
});

describe('12 - Controla a barra de pesquisa por meio do btn de pesquisa', () => {
  test('Aparece e some a barra de pesquisa, clicando no btn de pesquisa', () => {
    const { history } = renderWithRouterAndRedux(<Main />);
    history.push('/comidas');

    const searchIcon = screen.getByTestId(SEARCH_TOP_BTN);

    userEvent.click(searchIcon);
    const inputText = screen.getByTestId('search-input');
    expect(inputText).toBeInTheDocument();
    userEvent.click(searchIcon);

    expect(inputText).not.toBeInTheDocument();
  });
});
