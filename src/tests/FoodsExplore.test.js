import React from 'react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import FoodsExplorer from '../pages/FoodsExplore';

const HEADER_TEST_ID = 'main-header';
const FOOTER_TEST_ID = 'footer';

describe('Teste da tela de Explorar Comidas', () => {
  it('existe um elemento com tag header', () => {
    renderWithRouter(<FoodsExplorer />);
    const header = screen.getByTestId(HEADER_TEST_ID);
    expect(header).toBeInTheDocument();
  });

  it('existe um elemento com a tag footer', () => {
    renderWithRouter(<FoodsExplorer />);
    const footer = screen.getByTestId(FOOTER_TEST_ID);
    expect(footer).toBeInTheDocument();
  });

  it('existe um botão que busca por ingredientes e sua respectiva rota', () => {
    const { history } = renderWithRouter(<FoodsExplorer />);
    const btn = screen.getByRole('button', {
      name: /Por Ingredientes/i,
    });
    expect(btn).toBeInTheDocument();

    userEvent.click(btn);
    const { pathname } = history.location;
    expect(pathname).toBe('/explorar/comidas/ingredientes');
  });

  it('existe um botão que busca por local de origem e sua respectiva rota', () => {
    const { history } = renderWithRouter(<FoodsExplorer />);
    const btn = screen.getByRole('button', {
      name: /Por Local de Origem/i,
    });
    expect(btn).toBeInTheDocument();

    userEvent.click(btn);
    const { pathname } = history.location;
    expect(pathname).toBe('/explorar/comidas/area');
  });

  it('aparece o termo "carregando..." ao inicializar a página', () => {
    renderWithRouter(<FoodsExplorer />);
    const loading = screen.getByText(/carregando.../i);
    expect(loading).toBeInTheDocument();
  });
});
