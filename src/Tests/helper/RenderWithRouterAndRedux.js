// Codigo Inspirado no da aula bloco 16.5 link https://github.com/tryber/sd-013-b-live-lectures/blob/lecture/16.5/clients-register/src/tests/helpers/renderWithRouterAndRedux.js

import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import rootReducers from '../../redux/reducer';

const renderWithRouterAndRedux = (
  component,
  {
    // initialState = {},
    store = createStore(
      rootReducers, composeWithDevTools(applyMiddleware(thunk)),
    ),
    initialEntries = ['/'],
    history = createMemoryHistory({ initialEntries }),
  } = {},
) => ({
  ...render(
    <Router history={ history }>
      <Provider store={ store }>
        {component}
      </Provider>
    </Router>,
  ),
  history,
  store,
});

export default renderWithRouterAndRedux;
