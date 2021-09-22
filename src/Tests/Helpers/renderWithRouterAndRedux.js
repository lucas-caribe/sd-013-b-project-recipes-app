import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../Redux/Reducers';

const renderWithRouterAndRedux = (
  component,
  {
    initialState = {},
    store = createStore(rootReducer, initialState),
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

// Arquivo obtido no repositorio da turma (https://github.com/tryber/sd-013-b-live-lectures/blob/lecture/16.5/clients-register/src/tests/helpers/renderWithRouterAndRedux.js)
