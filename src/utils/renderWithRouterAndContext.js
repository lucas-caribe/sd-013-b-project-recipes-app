import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { AuthContext } from '../context/AuthContext';
import { SearchBarContext } from '../context/SearchBarContext';
import { RecipesContext } from '../context/RecipesContext';
import { DetailsContext } from '../context/DetailsContext';

const INITIAL_AUTH = {
  user: '', // E-mail do usuário conectado,
  tokens: {
    mealsToken: '', // Token de acesso a API de comidas
    cocktailsToken: '', // Token de acesso a API de drinks
  },
  page: '', // Página atual (comida ou bebidas)
};

const INITIAL_SEARCH = {
  user: '', // E-mail do usuário conectado,
  tokens: {
    mealsToken: '', // Token de acesso a API de comidas
    cocktailsToken: '', // Token de acesso a API de drinks
  },
  page: '', // Página atual (comida ou bebidas)
};

const INITIAL_RECIPES = {
  user: '', // E-mail do usuário conectado,
  tokens: {
    mealsToken: '', // Token de acesso a API de comidas
    cocktailsToken: '', // Token de acesso a API de drinks
  },
  page: '', // Página atual (comida ou bebidas)
};

const INITIAL_DETAILS = {
  user: '', // E-mail do usuário conectado,
  tokens: {
    mealsToken: '', // Token de acesso a API de comidas
    cocktailsToken: '', // Token de acesso a API de drinks
  },
  page: '', // Página atual (comida ou bebidas)
};

const renderWithRouterAndContext = (
  component,
  {
    authProps = INITIAL_AUTH,
    searchProps = INITIAL_SEARCH,
    recipesProps = INITIAL_RECIPES,
    detailsProps = INITIAL_DETAILS,
    ...renderOptions
  } = {},
) => {
  const history = createMemoryHistory();

  return {
    ...render(
      <AuthContext.Provider value={ authProps }>
        <SearchBarContext.Provider value={ searchProps }>
          <RecipesContext.Provider value={ recipesProps }>
            <DetailsContext.Provider value={ detailsProps }>
              <Router history={ history }>
                {component}
              </Router>
            </DetailsContext.Provider>
          </RecipesContext.Provider>
        </SearchBarContext.Provider>
      </AuthContext.Provider>,
      renderOptions,
    ),
    history,
  };
};

export default renderWithRouterAndContext;
